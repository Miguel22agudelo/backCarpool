import { Module } from '@nestjs/common';
import { RouteController } from './routeCarpool.controller';
import { RouteService } from './routeCarpool.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouteEntity } from './entities/routeCarpol.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RouteEntity])],
  controllers: [RouteController],
  providers: [RouteService],
})
export class RouteModule {}
