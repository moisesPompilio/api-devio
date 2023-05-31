import { v4 as uuidv4 } from 'uuid';
import { ApiProperty } from '@nestjs/swagger';

export class Product {
  @ApiProperty({
    description: 'id of the product',
    example: 'uuid',
  })
  id: string;

  @ApiProperty({
    description: 'name of the product',
    example: 'x-burgue',
  })
  name: string;

  @ApiProperty({
    description: 'description of the product',
    example: 'x-hambúrguer com queijo',
  })
  description: string;

  @ApiProperty({
    description: 'price of the product',
    example: 'x-hambúrguer com queijo',
    minimum: 0,
  })
  price: number;

  @ApiProperty({
    description: 'categoryId of the product',
    example: 'uuidCategory',
  })
  categoryId: string;

  @ApiProperty({
    description: 'product add-ons',
    example: ['extras'],
  })
  extras: string[];

  @ApiProperty({
    description: 'image of the product',
    example:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fimagensemoldes.com.br%2Fx-burguer-png%2F&psig=AOvVaw0MbPkdWI7PanzqnU3m5d-H&ust=1685574757224000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNDh-raVnv8CFQAAAAAdAAAAABAE',
  })
  image: string;

  @ApiProperty({
    description: 'code of the product',
    example: 'x2',
  })
  code: string;

  constructor(props: Omit<Product, 'id'>, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = uuidv4();
    } else {
      this.id = id;
    }
    if (this.price <= 0) {
      throw new Error('Price must be greater than 0');
    }
  }
}
