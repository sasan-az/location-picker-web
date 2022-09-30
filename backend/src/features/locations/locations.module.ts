import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Location } from "features/locations/entities/location.entity";
import { LocationsController } from "features/locations/locations.controller";
import { LocationsService } from "features/locations/locations.service";

@Module({
  imports: [TypeOrmModule.forFeature([Location])],
  controllers: [LocationsController],
  providers: [LocationsService],
})
export class LocationsModule {}
