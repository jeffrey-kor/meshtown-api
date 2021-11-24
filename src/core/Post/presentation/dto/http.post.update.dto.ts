import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class HttpPostUpdateDto {

  @Expose()
  @IsNumber()
  @IsNotEmpty()
  post_id: number;

  @Expose()
  @IsString()
  @IsNotEmpty()
  post_title: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  post_content: string;

}