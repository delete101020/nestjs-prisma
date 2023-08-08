import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ApiErrorResponse {
  @ApiProperty()
  message: string;

  @ApiProperty()
  messageCode: string;

  @ApiPropertyOptional()
  error?: string;

  @ApiPropertyOptional()
  errors?: Record<string, unknown>;

  @ApiPropertyOptional()
  path?: string;
}
