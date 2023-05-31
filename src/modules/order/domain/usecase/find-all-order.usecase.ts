import { User } from 'src/modules/user/entities/user.entity';
import { IOrderRepository } from '../port/order-repository.port';
import { Order } from '../schema/order.entity';

export class FindAllOrder {
  constructor(private readonly orderRepository: IOrderRepository) {}

  async handle(user: User): Promise<Order[]> {
    if (user.role === 'USUARIO') {
      const orders = await this.orderRepository.findByClientId(user.id);
      return orders;
    }
    const orders = await this.orderRepository.findAll();
    return orders;
  }
}
