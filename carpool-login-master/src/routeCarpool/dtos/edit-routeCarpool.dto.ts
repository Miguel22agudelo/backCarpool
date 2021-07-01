import { PartialType } from '@nestjs/mapped-types';
import { OmitType } from '@nestjs/swagger';
import { CreateRouteDto } from './create-routeCarpool.dto';


export class EditRouteDto extends PartialType(OmitType(CreateRouteDto,['carpooler'] as const)) {}

