import * as qs from 'qs';
import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { BaseQueryParams } from '../dtos';

export const QueryParam = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): any => {
    const request = ctx.switchToHttp().getRequest();
    const values: BaseQueryParams = qs.parse(request.query);

    if (values.page) values.page = +values.page;
    if (values.limit) values.limit = +values.limit;

    return values;
  },
);
