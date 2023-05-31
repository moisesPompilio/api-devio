import { IsNotEmpty, IsNumber, IsString, IsUrl, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateExtraDto {
  @ApiProperty({
    description: 'name of the extra',
    example: 'cheddar',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'price of the extra',
    example: 10.9,
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({
    description: 'description of the extra',
    example: '10g',
  })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({
    description: 'image of the extra',
    example:
      'https://us-southeast-1.linodeobjects.com/storage/barateiro/media/uploads/produto/queijo_cheddar_kg_d1171ce8-b839-4114-806f-4fae5540d052.png',
  })
  @IsUrl()
  image: string;
}
