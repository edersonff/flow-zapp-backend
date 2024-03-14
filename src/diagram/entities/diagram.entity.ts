import { Flow } from 'src/flow/entities/flow.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Diagram {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'smallint' })
  step: number;

  @Column({ type: 'smallint', nullable: true })
  type?: number;

  @Column({ type: 'json' })
  options: JSON;

  @ManyToOne(() => Flow, (flow) => flow.diagrams)
  flow: Flow;
}
