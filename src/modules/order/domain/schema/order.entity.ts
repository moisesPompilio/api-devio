import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { ProductOrder } from './product-order.entity';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @ApiProperty({
    description: 'customer name for order',
    example: 'cleson',
  })
  @Prop({ type: String })
  name_cliente: string;

  @ApiProperty({
    description: 'customer id for order',
    example: 'id_cliente',
  })
  @Prop({ type: String })
  id_cliente: string;

  @ApiProperty({
    description: 'products order',
    type: ProductOrder,
    isArray: true,
  })
  @Prop({ type: [{ type: Object }] })
  produtcs: ProductOrder[];

  @ApiProperty({
    description: 'value total order',
    example: 50.9,
  })
  @Prop({ type: Number })
  total: number;

  @ApiProperty({
    description: 'status order',
    example: 'pedido',
  })
  @Prop({ type: String })
  status: 'pedido' | 'preparando' | 'pronto' | 'retirado';
}

export const OrderSchema = SchemaFactory.createForClass(Order);
