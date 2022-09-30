import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { CreateLocationDto } from "features/locations/dto/create-location.dto";
import { LocationsService } from "features/locations/locations.service";
import { JwtAuthGuard } from "features/auth/jwt-auth.guard";
import { BaseResponse } from "core/utils/response/base.response";
import { UpdateLocationDto } from "features/locations/dto/update-coffee.dto";

@UseGuards(JwtAuthGuard)
@Controller("locations")
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Get()
  async getLocations(@Request() request) {
    return new BaseResponse(await this.locationsService.getAll(request.user));
  }

  @Get(":id")
  async getLocation(@Request() request, @Param("id") id: number) {
    const location = await this.locationsService.getSingle(request.user, id);
    if (!location) {
      throw new NotFoundException();
    }
    return new BaseResponse(location);
  }

  @Post()
  @UseInterceptors(
    FileInterceptor("logo", { dest: "./images", preservePath: true })
  )
  async createLocation(
    @UploadedFile() file: Express.Multer.File,
    @Body() createLocationDto: CreateLocationDto,
    @Request() request
  ) {
    return new BaseResponse(
      await this.locationsService.add(
        { ...createLocationDto, logo: file?.path },
        request.user
      )
    );
  }

  @Patch(":id")
  @UseInterceptors(
    FileInterceptor("logo", { dest: "./images", preservePath: true })
  )
  async updateLocation(
    @UploadedFile() file: Express.Multer.File,
    @Body() updateLocationDto: UpdateLocationDto,
    @Request() request,
    @Param("id") id: number
  ) {
    return new BaseResponse(
      await this.locationsService.update(
        id,
        { ...updateLocationDto, logo: file?.path },
        request.user
      )
    );
  }
}
