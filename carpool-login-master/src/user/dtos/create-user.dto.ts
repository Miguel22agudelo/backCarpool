import { IsBoolean, IsEmail, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

    id:number;

    @IsString()
    name: string;

    @IsString()
    lastName: string;

    @IsEmail()
    email: string;

    @IsNumber()
    phone: number;

    @IsString()
    whaLink: string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    password: string;

    @IsBoolean()
    status: boolean;

}
