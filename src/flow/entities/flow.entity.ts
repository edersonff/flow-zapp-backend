import { Diagram } from 'src/diagram/entities/diagram.entity';
import { Job } from 'src/jobs/entities/job.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Flow {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 64, nullable: true })
  name?: string;

  @Column({ type: 'varchar', length: 32 })
  url: string;

  @Column({ type: 'varchar', length: 32, nullable: true })
  subUrl?: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'datetime', nullable: true })
  lastRun?: Date;

  @Column({ type: 'enum' })
  status: 'draft' | 'running' | 'stopped' | 'error';

  @OneToMany(() => Diagram, (diagram) => diagram.flow)
  diagrams: Diagram[];

  @ManyToOne(() => User, (user) => user.flows)
  user: User;

  @OneToMany(() => Job, (job) => job.flows)
  jobs: Job[];
}
