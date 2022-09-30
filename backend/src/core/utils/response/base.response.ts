export enum BaseResponseStatus {
  SUCCESS = 'success',
  FAILED = 'failed',
}

export class BaseResponse<T> {
  constructor(
    private readonly data: T,
    private readonly status: BaseResponseStatus = BaseResponseStatus.SUCCESS,
    private readonly error?: any,
  ) {}
}
