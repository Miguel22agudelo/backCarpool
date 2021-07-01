import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dtos/create-vehicle.dto';
import { EditVehicleDto } from './dtos/edit-vehicle.dto';

@Controller('vehicle')
export class VehicleController {

    constructor(private readonly vehicleService: VehicleService ){}

    @Get()
  async getMany() {
    const data = await this.vehicleService.getMany()
    return{
      message: 'Correct Request',
      data
    }
  }

  @Get(':plate')
  getOne(@Param('plate', ParseIntPipe) plate: string) {
    return this.vehicleService.getOne(plate)
  }

  @Post()
  createOne(@Body() dto: CreateVehicleDto) {
    return this.vehicleService.createOne(dto)
  }

  @Put(':plate')
  editOne(@Param('plate') plate: string, @Body() dto: EditVehicleDto) {
    return this.vehicleService.editOne(plate, dto) 
  }

  @Delete(':plate')
  deleteOne(@Param('plate') plate: string) {
    return this.vehicleService.deleteOne(plate)
  }


}


