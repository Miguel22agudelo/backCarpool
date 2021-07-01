import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { RouteService } from './routeCarpool.service';
import { CreateRouteDto } from './dtos/create-routeCarpool.dto';
import { EditRouteDto } from './dtos/edit-routeCarpool.dto';

@Controller('routeCarpool')
export class RouteController {
  constructor(private readonly routeService: RouteService) {}

  @Get()
  async getMany() {
    const data = await this.routeService.getMany();
    return {
      message: 'Correct Request',
      data,
    };
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.routeService.getOne(id);
  }

  @Post()
  createOne(@Body() dto: CreateRouteDto) {
    return this.routeService.createOne(dto);
  }

  @Put(':id')
  editOne(@Param('id') id: number, @Body() dto: EditRouteDto) {
    return this.routeService.editOne(id, dto);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: number) {
    return this.routeService.deleteOne(id);
  }
}
