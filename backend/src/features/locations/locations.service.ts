import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Location } from "features/locations/entities/location.entity";
import { CreateLocationDto } from "features/locations/dto/create-location.dto";
import { User } from "features/users/entities/user.entity";
import { HttpException } from "@nestjs/common/exceptions/http.exception";
import {
  BaseResponse,
  BaseResponseStatus,
} from "core/utils/response/base.response";
import { UpdateLocationDto } from "features/locations/dto/update-coffee.dto";

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>
  ) {}

  add(createLocationDto: CreateLocationDto, user: User): Promise<Location> {
    const location = this.locationRepository.create({
      ...createLocationDto,
      user,
    });
    return this.locationRepository.save(location);
  }

  getAll(user: User) {
    return this.locationRepository.find({ user });
  }

  getSingle(user: User, id: number) {
    return this.locationRepository.findOne({ user, id });
  }

  async update(id: number, updateLocationDto: UpdateLocationDto, user: User) {
    const location = await this.locationRepository.preload({
      id: +id,
      ...updateLocationDto,
      user,
    });
    if (!location) {
      throw new HttpException(
        new BaseResponse(null, BaseResponseStatus.FAILED, "Location not found"),
        HttpStatus.NOT_FOUND
      );
    }
    return await this.locationRepository.save(location);
  }
}
