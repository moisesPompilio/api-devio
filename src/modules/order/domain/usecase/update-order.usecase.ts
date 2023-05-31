import { IOrderRepository } from '../port/order-repository.port';
import { Order } from '../schema/order.entity';

export class UpdateOrderUsecase {
  constructor(private readonly orderRepository: IOrderRepository) {}

  async handle(order: Order, id: string): Promise<Order> {
    const orderResponse = await this.orderRepository.update(id, order);
    return orderResponse;
  }
}
