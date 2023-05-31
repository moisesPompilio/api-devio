import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator';
import { ProductOrder } from '../../domain/schema/product-order.entity';

export class CreateOrderDto {
  @ApiProperty({
    description: 'products order',
    type: ProductOrder,
    isArray: true,
  })
  @IsArray()
  produtcs: ProductOrder[];

  @ApiProperty({
    description: 'value total order',
    example: 50.9,
  })
  @IsNumber()
  total: number;

  @IsString()
  @ApiProperty({
    description: 'status order',
    example: 'pedido',
  })
  status: 'pedido' | 'preparando' | 'pronto' | 'retirado';
}
