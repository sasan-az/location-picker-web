import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { ValidationException } from 'core/utils/exceptions/validation.exception';
import {
  BaseResponse,
  BaseResponseStatus,
} from 'core/utils/response/base.response';
import { Response } from 'express';

@Catch(ValidationException)
export class ValidationFilters implements ExceptionFilter {
  catch(exception: ValidationException, host: ArgumentsHost): any {
    return host
      .switchToHttp()
      .getResponse<Response>()
      .status(HttpStatus.BAD_REQUEST)
      .json(
        new BaseResponse(
          null,
          BaseResponseStatus.FAILED,
          exception.validationErrors,
        ),
      );
  }
}
