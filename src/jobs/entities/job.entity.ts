import { Flow } from 'src/flow/entities/flow.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: ['minute', 'weekly', 'monthly'] })
  type?: 'minute' | 'weekly' | 'monthly';

  @Column({ type: 'timestamp', nullable: true })
  date?: Date;

  @Column({ type: 'int', nullable: true })
  time?: number;

  @Column({ type: 'enum', enum: ['draft', 'running', 'stopped', 'error'] })
  status: 'draft' | 'running' | 'stopped' | 'error';

  @ManyToOne(() => Flow, (flow) => flow.jobs)
  flows: Flow;

  @ManyToOne(() => User, (user) => user.flows)
  user: User;
}
