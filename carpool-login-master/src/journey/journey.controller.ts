import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { JourneyService } from './journey.service';
import { CreateJourneyDto } from './dtos/create-journey.dto';
import { EditJourneyDto } from './dtos/edit-journey.dto';

@Controller('journey')
export class JourneyController {
    constructor(private readonly journeyService: JourneyService){}

  @Get()
  async getMany() {
    const data = await this.journeyService.getMany()
    return{
      message: 'Correct Request',
      data
    }
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.journeyService.getOne(id)
  }

  @Post()
  createOne(@Body() dto: CreateJourneyDto) {
    return this.journeyService.createOne(dto)
  }

  @Put(':id')
  editOne(@Param('id') id: number, @Body() dto: EditJourneyDto) {
    return this.journeyService.editOne(id, dto) 
  }

  @Delete(':id')
  deleteOne(@Param('id') id: number) {
    return this.journeyService.deleteOne(id)
  }
}
