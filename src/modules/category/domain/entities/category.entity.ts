import { v4 as uuidv4 } from 'uuid';
import { ApiProperty } from '@nestjs/swagger';

export class Category {
  @ApiProperty({
    description: 'id of the category',
    example: 'uuid',
  })
  id: string;

  @ApiProperty({
    description: 'name of the category',
    example: 'hambúrguer',
  })
  name: string;

  @ApiProperty({
    description: 'image of the category',
    example:
      'https://imagensemoldes.com.br/wp-content/uploads/2020/07/Combo-Lanche-PNG.png',
  })
  image: string;

  constructor(props: Omit<Category, 'id'>, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = uuidv4();
    } else {
      this.id = id;
    }
  }
}
