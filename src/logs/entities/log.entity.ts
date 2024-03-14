import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Log {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  label: string;

  @Column({ type: 'enum', enum: ['info', 'warning', 'error'] })
  type: 'info' | 'warning' | 'error';

  @Column({ type: 'json' })
  data: JSON;

  @ManyToOne(() => User, (user) => user.numbers)
  user: User;
}
