import { Request, Response } from 'express';
import { Product } from '../interfaces';
import ProductService from '../services/productsServices';

export default class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  postProducts = async (req: Request, res: Response) => {
    const product: Product = req.body;
    const result = await this.service.postProducts(product);

    res.status(201).json(result);
  };

  getProducts = async (_req: Request, res: Response) => {
    const result = await this.service.getProducts();

    res.status(200).json(result);
  };
}
