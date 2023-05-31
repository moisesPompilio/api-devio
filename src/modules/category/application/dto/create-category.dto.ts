import { IsNotEmpty, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({
    description: 'name of the category',
    example: 'hambúrguer',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'image of the category',
    example:
      'https://imagensemoldes.com.br/wp-content/uploads/2020/07/Combo-Lanche-PNG.png',
  })
  @IsUrl()
  @IsNotEmpty()
  image: string;
}
