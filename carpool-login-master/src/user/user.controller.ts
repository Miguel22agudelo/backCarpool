import { Body, Delete, Get, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { CreateUserDto } from './dtos';
import { EditUserDto } from './dtos/edit-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userSerivice: UserService) {}

  @Get()
  async getMany() {
    const data = await this.userSerivice.getMany();
    return {
      message: 'Correct Request',
      data,
    };
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.userSerivice.getOne(id);
  }

  @Post()
  createOne(@Body() dto: CreateUserDto) {
    return this.userSerivice.createOne(dto);
  }

  @Put(':id')
  async editOne(@Param('id') id: number, @Body() dto: EditUserDto) {
    const data = await this.userSerivice.editOne(id, dto);
    return { message: 'User edited', data };
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: number) {
    const data = await this.userSerivice.deleteOne(id);
    return { message: 'User successfully deleted', data };
  }
}
