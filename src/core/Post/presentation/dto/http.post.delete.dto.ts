import { IsNotEmpty, IsNumber } from 'class-validator';
import { Expose } from 'class-transformer';

export class HttpPostDeleteDto {

  @Expose()
  @IsNumber()
  @IsNotEmpty()
  post_id: number;


}