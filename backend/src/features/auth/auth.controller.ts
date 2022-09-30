import { Body, Controller, Post } from "@nestjs/common";
import { BaseResponse } from "core/utils/response/base.response";
import { CreateUserDto } from "features/auth/dto/create-user.dto";
import { AuthService } from "features/auth/auth.service";
import { User } from "features/users/entities/user.entity";
import { LoginUserDto } from "features/auth/dto/login-user.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/login")
  async login(@Body() loginUserDto: LoginUserDto) {
    const user = await this.authService.validateUser(loginUserDto);
    const token = await this.generateToken(user);
    return new BaseResponse({ token });
  }

  @Post("/register")
  async register(@Body() createUserDto: CreateUserDto) {
    const user = await this.authService.createUser(createUserDto);
    const token = await this.generateToken(user);
    return new BaseResponse({ token });
  }

  private async generateToken(user: User) {
    const { access_token } = await this.authService.login(user);
    return access_token;
  }
}
