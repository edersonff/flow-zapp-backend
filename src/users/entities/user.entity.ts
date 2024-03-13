import { Exclude } from 'class-transformer';
import { Flow } from 'src/flow/entities/flow.entity';
import { NumberEntity } from 'src/numbers/entities/number.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 15, unique: true })
  username: string;

  @Column({ type: 'varchar', length: 40 })
  email: string;

  @Exclude()
  @Column({ type: 'varchar', length: 72 })
  password: string;

  @OneToMany(() => Flow, (flow) => flow.user)
  flows: Flow[];

  @OneToMany(() => NumberEntity, (number) => number.user)
  numbers: NumberEntity[];
}
