// src/auth/dto/verify-otp.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, IsIn } from 'class-validator';

export class VerifyOtpDto {
  @IsString()
  @Length(10, 10)
  @ApiProperty()
  phoneNumber: string;

  @IsString()
  @Length(5, 5)
  @ApiProperty()
  otp: string;


  @IsString()
  @ApiProperty()
  @IsIn(['user', 'service_provider'])
  role: 'user' | 'service_provider';
}
