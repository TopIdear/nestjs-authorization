import { IsString, IsNumber } from 'class-validator';

export class CreatePigDto {
  @IsString()
  name: string;

  @IsNumber()
  weight: number;
}
