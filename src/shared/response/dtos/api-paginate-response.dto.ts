import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ApiPaginateResponseInput<T> {
  @ApiPropertyOptional()
  page?: number;

  @ApiPropertyOptional()
  limit?: number;

  @ApiProperty()
  total: number;

  @ApiProperty({ type: [Object], isArray: true })
  data: T | T[];
}

export class PaginateMetadataResponse {
  @ApiProperty()
  page: number;

  @ApiProperty()
  limit: number;

  @ApiProperty()
  totalRow: number;

  @ApiProperty()
  totalPage: number;
}

export class ApiPaginateResponse<T> {
  @ApiProperty({ type: PaginateMetadataResponse })
  metadata: PaginateMetadataResponse;

  @ApiProperty({ type: [Object], isArray: true })
  data: T[];
}
