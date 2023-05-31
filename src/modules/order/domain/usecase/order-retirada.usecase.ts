import { IOrderRepository } from '../port/order-repository.port';
import { Order } from '../schema/order.entity';

export class OrderRetiradaUsecase {
  constructor(private readonly orderRepository: IOrderRepository) {}

  async handle(id: string): Promise<Order> {
    const order = await this.orderRepository.findById(id);
    order.status = 'retirado';
    const orderResponse = await this.orderRepository.update(id, order);
    return orderResponse;
  }
}
