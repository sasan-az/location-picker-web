import { IsEmail, IsString, Length } from "class-validator";
import { Match } from "core/utils/decorators";

export class CreateUserDto {
  @IsEmail()
  readonly email: string;

  @IsString()
  @Length(6, 10)
  readonly password: string;

  @Match("password")
  readonly confirmPassword: string;
}
