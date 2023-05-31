import { Injectable } from '@nestjs/common';
import { User } from 'src/modules/user/entities/user.entity';
import { CreateOrderDto } from '../dto/create-order.dto';
import { OrderRepository } from '../../adapter/repository/order.repository';
import { CreateOrderUSecase } from '../../domain/usecase/create-order.usecase';
import { FindAllOrder } from '../../domain/usecase/find-all-order.usecase';
import { OrderProntoUsecase } from '../../domain/usecase/order-pronto.usecase';
import { OrderRetiradaUsecase } from '../../domain/usecase/order-retirada.usecase';

@Injectable()
export class OrderService {
  constructor(private readonly orderRepository: OrderRepository) {}

  async create(createOrderDto: CreateOrderDto, user: User) {
    const createOrderUSecase = new CreateOrderUSecase(this.orderRepository);
    const newOrder = createOrderUSecase.handle(createOrderDto, user);
    return newOrder;
  }

  async findAll(user: User) {
    const findAllOrder = new FindAllOrder(this.orderRepository);
    const orders = await findAllOrder.handle(user);
    return orders;
  }

  async orderPronto(id: string) {
    const orderProntoUsecase = new OrderProntoUsecase(this.orderRepository);
    const order = await orderProntoUsecase.handle(id);
    return order;
  }

  async orderRetirada(id: string) {
    const orderRetiradaUsecase = new OrderRetiradaUsecase(this.orderRepository);
    const order = await orderRetiradaUsecase.handle(id);
    return order;
  }
}
