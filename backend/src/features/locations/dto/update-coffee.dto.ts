import { PartialType } from "@nestjs/mapped-types";
import { CreateLocationDto } from "features/locations/dto/create-location.dto";

export class UpdateLocationDto extends PartialType(CreateLocationDto) {}
