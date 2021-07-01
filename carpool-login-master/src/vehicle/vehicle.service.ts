import { Injectable, NotFoundException } from '@nestjs/common';
import { VehicleEntity } from './entities/vehicle.entity';
import { CreateVehicleDto } from './dtos/create-vehicle.dto';
import { EditVehicleDto } from './dtos/edit-vehicle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VehicleService {
    constructor(
        @InjectRepository(VehicleEntity)
        private readonly vehicleRepository: Repository<VehicleEntity>,
      ) {}
    
      async getMany(): Promise<VehicleEntity[]> {
        return await this.vehicleRepository.find();
      }
    
      async getOne(plate: string) {
        const vehicle = await this.vehicleRepository.findOne(plate);
        if (!vehicle) throw new NotFoundException();
        return vehicle;
      }
    
      async createOne(dto: CreateVehicleDto) {
        const vehicle = this.vehicleRepository.create(dto);
        return await this.vehicleRepository.save(vehicle);
      }
    
      async editOne(plate: string, dto: EditVehicleDto) {
        const vehicle = await this.vehicleRepository.findOne(plate);
        if (!vehicle)
          throw new NotFoundException('Vehicle with plate: ' + plate + ' does not exist');
        const editedVehicle = Object.assign(vehicle, dto);
        return await this.vehicleRepository.save(editedVehicle);
      }
    
      async deleteOne(plate: string) {
        return await this.vehicleRepository.delete(plate)
      }
}
