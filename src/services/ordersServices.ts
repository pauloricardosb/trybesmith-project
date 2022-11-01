import { Order } from '../interfaces';
import connection from '../models/connection';
import OrdersModel from '../models/ordersModel';

export default class OrdersService {
  private ordersModel: OrdersModel;

  constructor() {
    this.ordersModel = new OrdersModel(connection);
  }

  async getOrders(): Promise<Order[]> {
    const orders = await this.ordersModel.getOrders();

    return orders;
  }
}