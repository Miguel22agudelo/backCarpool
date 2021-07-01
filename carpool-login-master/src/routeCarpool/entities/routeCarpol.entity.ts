import { UserEntity } from 'src/user/entities';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('routes')
export class RouteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  schedule: string;

  @Column({ type: 'varchar', length: 50 })
  routeName: string;

  @Column({ type: 'int' })
  cost: number;

  @Column({ type: 'varchar', length: 50 })
  routeOrigin: string;

  @Column({ type: 'varchar', length: 50 })
  routeDestination: string;

  @Column({ type: 'int' })
  spaces: number;

  @Column({ type: 'int' })
  emptySpaces: number;

  @Column({ type: 'varchar', length: 50 })
  carpooler: string;

  @Column({ type: 'bool', default: true })
  status: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.routes)
  user: UserEntity;
}
