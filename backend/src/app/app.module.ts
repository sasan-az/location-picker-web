import { Module } from "@nestjs/common";
import { AppController } from "app/app.controller";
import { AppService } from "app/app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { LocationsModule } from "features/locations/locations.module";
import { FilesController } from "app/files.controller";
import { AuthModule } from "features/auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    LocationsModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController, FilesController],
  providers: [AppService],
})
export class AppModule {}
