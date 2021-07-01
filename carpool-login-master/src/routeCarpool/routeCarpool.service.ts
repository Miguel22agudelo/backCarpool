import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RouteEntity } from './entities/routeCarpol.entity';
import { CreateRouteDto } from './dtos/create-routeCarpool.dto';
import { EditRouteDto } from './dtos/edit-routeCarpool.dto';
import { UserEntity } from 'src/user/entities';


@Injectable()
export class RouteService {
  constructor(
    @InjectRepository(RouteEntity)
    private readonly routeRepository: Repository<RouteEntity>,
  ) {}

  async getMany(): Promise<RouteEntity[]> {
    return await this.routeRepository.find();
  }

  async getOne(id: number) {
    const route = await this.routeRepository.findOne(id);
    if (!route) throw new NotFoundException();
    return route;
  }

  async createOne(dto: CreateRouteDto) {
    const user = new UserEntity
    const route = this.routeRepository.create(dto);
    user.id = dto.userId
    route.user = user
    return await this.routeRepository.save(route);
  }

  async editOne(id: number, dto: EditRouteDto) {
    const route = await this.routeRepository.findOne(id);
    if (!route)
      throw new NotFoundException('Route with id: ' + id + ' does not exist');
    const editedRoute = Object.assign(route, dto);
    return await this.routeRepository.save(editedRoute);
  }

  async deleteOne(id: number) {
    return await this.routeRepository.delete(id)
  }
}
