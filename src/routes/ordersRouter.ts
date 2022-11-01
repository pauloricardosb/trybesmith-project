import { Router } from 'express';
import OrdersController from '../controllers/ordersControllers';

const orders = Router();
const controller = new OrdersController();

orders.get('/', controller.getOrders);

export default orders;