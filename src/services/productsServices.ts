import { IProduct, Product } from '../interfaces';
import connection from '../models/connection';
import ProductModel from '../models/productsModel';

export default class ProductService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  async postProducts(product: IProduct): Promise<Product> {
    const createdProduct: Product = await this.model.postProducts(product);
    return createdProduct;
  }

  async getProducts() {
    const products: Product[] = await this.model.getProducts();
    return products;
  }
}