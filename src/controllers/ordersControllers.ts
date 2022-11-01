import { Request, Response } from 'express';
import OrdersService from '../services/ordersServices';

export default class OrdersController {
  private ordersService: OrdersService;

  constructor() {
    this.ordersService = new OrdersService();
  }

  getOrders = async (req: Request, res: Response) => {
    const orders = await this.ordersService.getOrders();

    return res.status(200).json(orders);
  };
}
