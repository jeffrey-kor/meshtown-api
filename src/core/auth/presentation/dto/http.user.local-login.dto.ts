import { Expose } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class HttpUserLocalLoginDto {

  @Expose()
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  password: string;

}