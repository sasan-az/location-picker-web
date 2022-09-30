import { ValidationPipe as NestValidationPipe } from '@nestjs/common';
import { ValidationPipeOptions } from '@nestjs/common/pipes/validation.pipe';
import { ValidationException } from 'core/utils/exceptions/validation.exception';

export class ValidationPipe extends NestValidationPipe {
  constructor(options?: ValidationPipeOptions) {
    super({
      ...options,
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      exceptionFactory: (errors) => {
        const t = {};
        errors.forEach(({ property, constraints }) => {
          t[property] = Object.keys(constraints).map(
            (item) => constraints[item],
          );
        });
        return new ValidationException(t);
      },
    });
  }
}
