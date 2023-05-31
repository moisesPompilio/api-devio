import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderService } from './aplication/service/order.service';
import { OrderController } from './adapter/http/rest/order.controller';
import { OrderRepository } from './adapter/repository/order.repository';
import { Order, OrderSchema } from './domain/schema/order.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  ],
  controllers: [OrderController],
  providers: [OrderService, OrderRepository],
})
export class OrderModule {}
