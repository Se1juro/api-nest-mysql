import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserValidator {
  @IsEmail()
  emails: string;

  @IsString()
  @MinLength(2)
  firstName: string;

  @IsString()
  @MinLength(2)
  lastName: string;

  @IsString()
  @MinLength(6)
  password: string;
}
