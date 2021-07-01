import { Module } from '@nestjs/common';
import { JourneyController } from './journey.controller';
import { JourneyService } from './journey.service';
import { JourneyEntity } from './entities/journey.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([JourneyEntity])],
  
controllers: [JourneyController],
  providers: [JourneyService]
})
export class JourneyModule {}
