import { User } from 'src/modules/user/entities/user.entity';
import { IOrderRepository } from '../port/order-repository.port';
import { CreateOrderDto } from '../../aplication/dto/create-order.dto';
import { Order } from '../schema/order.entity';

export class CreateOrderUSecase {
  constructor(private readonly orderRepository: IOrderRepository) {}

  async handle(createOrderDto: CreateOrderDto, user: User) {
    const orderInput: Order = {
      ...createOrderDto,
      id_cliente: user.id,
      name_cliente: user.name,
      status: 'preparando',
    };
    const order = await this.orderRepository.create(orderInput);
    return order;
  }
}
