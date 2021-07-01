import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity('vehicles')
export class VehicleEntity {
  @PrimaryColumn({ type: 'varchar', length: 6 })
  plate: string;

  @Column({ type: 'varchar', length: 30 })
  color: string;

  @Column({ type: 'varchar', length: 30 })
  brand: string;

  @Column({ type: 'varchar', length: 4})
  model: number;

  @Column({ type: 'bool', default: true })
  status: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}
