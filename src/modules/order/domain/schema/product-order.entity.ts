import { Extra } from 'src/modules/extra/domain/entities/extra.entity';
import { ApiProperty } from '@nestjs/swagger';

export class ProductOrder {
  @ApiProperty({
    description: 'id product',
    example: 'id',
  })
  id: string;

  @ApiProperty({
    description: 'name product',
    example: 'x-burguer',
  })
  name: string;

  @ApiProperty({
    description: 'description product',
    example: 'o melhor de todos',
  })
  description: string;

  @ApiProperty({
    description: 'price product',
    example: 11.9,
  })
  price: number;

  @ApiProperty({
    description: 'extras product',
    type: Extra,
    isArray: true,
  })
  extras?: Extra[];

  @ApiProperty({
    description: 'image product',
    example: 'image',
  })
  image: string;

  @ApiProperty({
    description: 'observation product',
    example: 'sem cebola',
  })
  observation?: string;

  @ApiProperty({
    description: 'quantity product',
    example: 3,
  })
  quantity: number;
}
