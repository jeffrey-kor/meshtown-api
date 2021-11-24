import { Injectable } from '@nestjs/common';
import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@Injectable()
export class HttpUserFindPasswordDto {

  @Expose()
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  username: string;

  @Expose()
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @Expose()
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  phone: string;
}