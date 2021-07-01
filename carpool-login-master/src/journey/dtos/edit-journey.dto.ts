
import { PartialType } from '@nestjs/mapped-types';
import { OmitType } from '@nestjs/swagger';
import { CreateJourneyDto } from './create-journey.dto';
export class EditJourneyDto extends PartialType(OmitType(CreateJourneyDto,['id'] as const)){}
