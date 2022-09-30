import { HttpStatus, Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { CreateUserDto } from "features/auth/dto/create-user.dto";
import { JwtService } from "@nestjs/jwt";
import { User } from "features/users/entities/user.entity";
import { HttpException } from "@nestjs/common/exceptions/http.exception";
import {
  BaseResponse,
  BaseResponseStatus,
} from "core/utils/response/base.response";
import { LoginUserDto } from "features/auth/dto/login-user.dto";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(loginUserDto: LoginUserDto) {
    const user = await this.usersService.findByEmail(loginUserDto.email);

    if (!(await user?.validatePassword(loginUserDto.password))) {
      throw new HttpException(
        new BaseResponse(null, BaseResponseStatus.FAILED, "User not found!"),
        HttpStatus.UNAUTHORIZED
      );
    }

    return user;
  }

  async createUser(createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  async login(user: User) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
