import {IsEnum, IsOptional, IsString} from "class-validator";
import { LocationType } from "features/locations/entities/location.entity";

export class CreateLocationDto {
  @IsString()
  readonly name: string;

  @IsEnum(LocationType)
  @IsOptional()
  readonly locationType?: LocationType;

  @IsString()
  readonly latitude: string;

  @IsString()
  readonly longitude: string;

  readonly logo: string;
}
