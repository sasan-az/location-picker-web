import { HttpStatus, Injectable } from "@nestjs/common";
import { User } from "features/users/entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "features/auth/dto/create-user.dto";
import { HttpException } from "@nestjs/common/exceptions/http.exception";
import {
  BaseResponse,
  BaseResponseStatus,
} from "core/utils/response/base.response";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async find(id: number) {
    return this.userRepository.findOne(id);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ email });
  }

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.findByEmail(createUserDto.email);
    if (existingUser) {
      throw new HttpException(
        new BaseResponse(null, BaseResponseStatus.FAILED, {
          email: ["This email address is already being used"],
        }),
        HttpStatus.BAD_REQUEST
      );
    }
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }
}
