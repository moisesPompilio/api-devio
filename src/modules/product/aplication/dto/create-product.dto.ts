import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    description: 'name of the product',
    example: 'x-burgue',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'description of the product',
    example: 'x-hambúrguer com queijo',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    description: 'price of the product',
    example: 'x-hambúrguer com queijo',
    minimum: 0,
  })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({
    description: 'categoryId of the product',
    example: 'uuidCategory',
  })
  @IsNotEmpty()
  @IsString()
  categoryId: string;

  @ApiProperty({
    description: 'product add-ons',
    example: ['extras'],
  })
  @IsString({ each: true })
  extras: string[];

  @ApiProperty({
    description: 'image of the product',
    example:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fimagensemoldes.com.br%2Fx-burguer-png%2F&psig=AOvVaw0MbPkdWI7PanzqnU3m5d-H&ust=1685574757224000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNDh-raVnv8CFQAAAAAdAAAAABAE',
  })
  @IsNotEmpty()
  @IsString()
  image: string;

  @ApiProperty({
    description: 'code of the product',
    example: 'x2',
  })
  @IsNotEmpty()
  @IsString()
  code: string;
}
