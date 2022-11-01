import { Router } from 'express';
import ProductsController from '../controllers/productsControllers';

const products = Router();
const controller = new ProductsController();

products.post('/', controller.postProducts);
products.get('/', controller.getProducts);

export default products;