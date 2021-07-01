import { IsString } from "class-validator";

export class CreateJourneyDto {
    id:number;

    @IsString()
    origin: string;

    @IsString()
    destination: string;

}
