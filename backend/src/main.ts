import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app/app.module';
import { ValidationFilters } from 'core/utils/filters/validation.filters';
import { ValidationPipe } from 'core/utils/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalFilters(new ValidationFilters());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3200);
}

bootstrap();
