import { IsEmail, IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCodeDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  public email: string;
}

export class ValidateCodeDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @IsNumber()
  @IsNotEmpty()
  public code: number;
}
