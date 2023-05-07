import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @ApiProperty({
    default: 10,
    description: 'Limit of items per page',
  })
  @IsOptional()
  @IsPositive()
  @Type(() => Number) //enableImplicitConversion: true
  limit?: number;

  @ApiProperty({
    default: 0,
    description: 'Rows Items do you skips',
  })
  @IsOptional()
  @Min(0)
  @Type(() => Number) //enableImplicitConversion: true
  offset?: number;
}
