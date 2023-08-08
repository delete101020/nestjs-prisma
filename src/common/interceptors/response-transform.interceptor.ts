import { map } from 'rxjs/operators';
import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { ResponseService } from '../../shared/response/response.service';

@Injectable()
export class ResponseTransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>) {
    context.switchToHttp().getResponse().status(HttpStatus.OK);
    return next.handle().pipe(
      map((data) => {
        // if data is null or undefined, return it as success response with null data
        if (!data) return ResponseService.succesResponse({ data: {} });

        // if data is not an object, return it as success response
        // if data is an array, return it as success response
        if (typeof data !== 'object' || Array.isArray(data))
          return ResponseService.succesResponse({ data });

        // if data contains data property and it is an array, return it as paginated response
        if ('data' in data && Array.isArray(data.data)) return data;

        // otherwise, return it as success response with data as object property
        return ResponseService.succesResponse({ data: { ...data } });
      }),
    );
  }
}
