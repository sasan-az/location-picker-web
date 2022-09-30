import { Controller, Get, Request, UseGuards } from "@nestjs/common";
import { UsersService } from "features/users/users.service";
import { JwtAuthGuard } from "features/auth/jwt-auth.guard";
import { BaseResponse } from "core/utils/response/base.response";

@UseGuards(JwtAuthGuard)
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUser(@Request() request) {
    return new BaseResponse(await this.usersService.find(request.user.id));
  }
}
