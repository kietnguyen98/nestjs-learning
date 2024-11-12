import {
  IsEmail,
  IsNumber,
  IsString,
  IsPhoneNumber,
  IsDateString,
  IsOptional,
  IsNotEmpty
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDateString()
  @IsNotEmpty()
  birthDate: string;

  @IsEmail()
  email: string;

  @IsNumber()
  age: number;

  @IsPhoneNumber()
  phoneNumber: string;

  @IsOptional()
  @IsString()
  country: string;
}
