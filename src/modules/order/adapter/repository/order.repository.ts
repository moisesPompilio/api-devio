import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from '../../domain/schema/order.entity';
import { IOrderRepository } from '../../domain/port/order-repository.port';

@Injectable()
export class OrderRepository implements IOrderRepository {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  async create(order: Order): Promise<Order> {
    // eslint-disable-next-line new-cap
    const createdOrder = new this.orderModel(order);
    return createdOrder.save();
  }

  async findAll(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  // eslint-disable-next-line camelcase
  async findByClientId(id_cliente: string): Promise<Order[]> {
    // eslint-disable-next-line camelcase
    return this.orderModel.find({ id_cliente }).exec();
  }

  async findById(id: string): Promise<Order> {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, order: Order): Promise<Order> {
    return this.orderModel.findByIdAndUpdate(id, order, { new: true }).exec();
  }

  async delete(id: string): Promise<Order> {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
