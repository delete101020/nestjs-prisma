import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from '@common/constants';
import { Injectable } from '@nestjs/common';
import {
  ApiErrorResponse,
  ApiPaginateResponse,
  ApiPaginateResponseInput,
  ApiSuccessResponse,
  ApiSuccessResponseInput,
} from './dtos';
import { ResponseMessage, ResponseMessageCode } from './enums';

@Injectable()
export class ResponseService {
  public static succesResponse<T>(
    input: ApiSuccessResponseInput<T>,
  ): ApiSuccessResponse<T> {
    const {
      message = ResponseMessage.SUCCESS,
      messageCode = ResponseMessageCode.SUCCESS,
      data,
    } = input;

    return { message, messageCode, data };
  }

  public static paginateResponse<T>(
    input: ApiPaginateResponseInput<T>,
  ): ApiPaginateResponse<T> {
    const {
      page = DEFAULT_PAGE,
      limit = DEFAULT_PAGE_SIZE,
      total,
      data,
    } = input;

    return {
      metadata: {
        page,
        limit,
        totalRow: total,
        totalPage: Math.ceil(total / limit),
      },
      data: Array.isArray(data) ? data : [data],
    };
  }

  public static errorResponse(exception: any): ApiErrorResponse {
    return {
      message: exception?.response?.message ?? exception?.message,
      messageCode: exception?.response?.code ?? ResponseMessageCode.FAILED,
      error: exception?.response?.error ?? exception?.name,
      errors: exception?.response?.errors ?? null,
    };
  }
}
