import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { User } from '../../domain/User';
import { Builder } from 'builder-pattern';
import { Expose } from 'class-transformer';

export class HttpReqUserRegisterDTO {

  @Expose()
  @IsString()
  @IsNotEmpty()
  user_name: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  user_password: string;

  @Expose()
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  user_email: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  user_address: string;

  @Expose()
  @IsString()
  token: string;

  @Expose()
  @IsString()
  refreshToken: string;

  static of(username, password, email, address): HttpReqUserRegisterDTO {
    const dto = new HttpReqUserRegisterDTO();
    dto.user_name = username;
    dto.user_password = password;
    dto.user_email = email;
    dto.user_address = address;
    return dto;
  }

  toEntity(): User {
    return Builder<User>()
      .user_name(this.user_name)
      .user_password(this.user_password)
      .user_email(this.user_email)
      .user_address(this.user_address)
      .build();
  }

  get getPassword(): string {
    return this.user_password;
  }


}