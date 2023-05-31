import { Order } from '../schema/order.entity';

export interface IOrderRepository {
  create(order: Order): Promise<Order>;
  findAll(): Promise<Order[]>;
  findByClientId(id_cliente: string): Promise<Order[]>;
  findById(id: string): Promise<Order>;
  update(id: string, order: Order): Promise<Order>;
  delete(id: string): Promise<Order>;
}
