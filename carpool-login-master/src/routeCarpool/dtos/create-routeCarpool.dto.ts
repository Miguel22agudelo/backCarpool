import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateRouteDto {
  id: number;

  @IsString()
  schedule: string;

  @IsString()
  routeName: string;

  @IsNumber()
  cost: number;

  @IsString()
  routeOrigin: string;

  @IsString()
  routeDestination: string;

  @IsNumber()
  spaces: number;

  @IsNumber()
  emptySpaces: number;

  @IsString()
  carpooler: string;

  @IsBoolean()
  status: boolean;

  @IsNumber()
  userId: number

}
