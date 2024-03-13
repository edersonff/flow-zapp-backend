import { IsEmail, IsString, MaxLength } from 'class-validator';

export class SignupUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MaxLength(32, {
    message: 'O nome de usuário deve ter no máximo 32 caracteres.',
  })
  username: string;

  @IsString()
  password: string;
}
