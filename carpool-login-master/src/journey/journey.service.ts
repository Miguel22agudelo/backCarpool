import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JourneyEntity } from './entities/journey.entity';
import { CreateJourneyDto } from './dtos/create-journey.dto';
import { EditJourneyDto } from './dtos/edit-journey.dto';

@Injectable()
export class JourneyService {
    constructor(
        @InjectRepository(JourneyEntity)
        private readonly journeyRepository: Repository<JourneyEntity>,
      ) {}
    
      async getMany(): Promise<JourneyEntity[]> {
        return await this.journeyRepository.find();
      }
    
      async getOne(id: number) {
        const journey = await this.journeyRepository.findOne(id);
        if (!journey) throw new NotFoundException();
        return journey;
      }
    
      async createOne(dto: CreateJourneyDto) {
        const journey = this.journeyRepository.create(dto);
        return await this.journeyRepository.save(journey);
      }
    
      async editOne(id: number, dto: EditJourneyDto) {
        const vehicle = await this.journeyRepository.findOne(id);
        if (!vehicle)
          throw new NotFoundException('Journey with id: ' + id + ' does not exist');
        const journey = Object.assign(vehicle, dto);
        return await this.journeyRepository.save(journey);
      }
    
      async deleteOne(id: number) {
        return await this.journeyRepository.delete(id)
      }
}
