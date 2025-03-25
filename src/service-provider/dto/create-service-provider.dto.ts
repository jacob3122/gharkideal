import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class ServiceProviderProfileDto {

        @IsString()
        @IsNotEmpty()
        @ApiProperty()
        fullName: string;
      
        @IsEmail()
        @ApiProperty()
        email: string;
      
        @IsString()
        @IsNotEmpty()
        @ApiProperty()
        address: string;
      
        @IsString()
        @IsNotEmpty()
        @ApiProperty()
        zone: string;

        @IsString()
        @ApiProperty()
        aadharCard ?: string;

}

