import { v4 as uuidv4 } from 'uuid';
import { ApiProperty } from '@nestjs/swagger';

export class Extra {
  @ApiProperty({
    description: 'id of the extra',
    example: 'cheddar',
  })
  id: string;

  @ApiProperty({
    description: 'name of the extra',
    example: 'cheddar',
  })
  name: string;

  @ApiProperty({
    description: 'price of the extra',
    example: 10.9,
    minimum: 0,
  })
  price: number;

  @ApiProperty({
    description: 'description of the extra',
    example: '10g',
  })
  description: string;

  @ApiProperty({
    description: 'image of the extra',
    example:
      'https://us-southeast-1.linodeobjects.com/storage/barateiro/media/uploads/produto/queijo_cheddar_kg_d1171ce8-b839-4114-806f-4fae5540d052.png',
  })
  image: string;

  constructor(props: Omit<Extra, 'id'>, id?: string) {
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
