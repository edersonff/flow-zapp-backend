import { Exclude } from 'class-transformer';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class NumberEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 64, nullable: true })
  label?: string;

  @Column({ type: 'char', length: 14, unique: true })
  number: string;

  @Exclude()
  @Column({ type: 'varchar', length: 97, nullable: true })
  session?: string;

  @Column({
    type: 'enum',
    enum: ['draft', 'disconnected', 'connected', 'error'],
  })
  status: 'draft' | 'disconnected' | 'connected' | 'error';

  @ManyToOne(() => User, (user) => user.numbers)
  user: User;
}
