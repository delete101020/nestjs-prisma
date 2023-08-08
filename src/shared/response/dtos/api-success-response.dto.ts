import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ApiSuccessResponseInput<T> {
  @ApiPropertyOptional()
  message?: string;

  @ApiPropertyOptional()
  messageCode?: string;

  @ApiProperty()
  data: T;
}

export class ApiSuccessResponse<T> {
  @ApiProperty()
  message: string;

  @ApiProperty()
  messageCode: string;

  @ApiProperty()
  data: T;
}
