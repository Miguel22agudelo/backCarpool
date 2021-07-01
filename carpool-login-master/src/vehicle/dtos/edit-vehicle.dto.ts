import { PartialType } from '@nestjs/mapped-types';
import { OmitType } from '@nestjs/swagger';
import { CreateVehicleDto } from './create-vehicle.dto';

export class EditVehicleDto extends PartialType(
  OmitType(CreateVehicleDto, ['plate'] as const),
) {}
