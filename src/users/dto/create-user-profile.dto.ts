import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserProfileDto {

    @IsString()
    @ApiProperty()
    fullName: string;


    @IsString()
    @ApiProperty()
    email: string;


    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    address:string;


    @IsString()
    @ApiProperty()
    @IsNotEmpty()
    zone: string;
}

