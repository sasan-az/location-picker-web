import { IsEmail, IsString, Length } from "class-validator";

export class LoginUserDto {
  @IsEmail()
  readonly email: string;

  @IsString()
  @Length(6, 10)
  readonly password: string;
}
