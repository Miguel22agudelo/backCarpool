import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateVehicleDto {
    @IsString()
    plate:string;

    @IsString()
    color: string;

    @IsString()
    brand: string;

    @IsNumber()
    model: number;

    @IsBoolean()
    status: boolean; 
}
