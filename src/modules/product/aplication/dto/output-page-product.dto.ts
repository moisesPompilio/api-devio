import { ApiProperty } from '@nestjs/swagger';
import { Product } from '../../domain/entities/product.entity';

export class OutputPageProductDto {
  @ApiProperty({
    description: 'number page',
    example: 2,
  })
  totalPages: number;

  @ApiProperty({
    description: 'products array',
    isArray: true,
    type: Product,
  })
  products: Product[];
}
