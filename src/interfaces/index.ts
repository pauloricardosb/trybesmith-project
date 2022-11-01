export interface IProduct {
  name: string;
  amount: string;
}

export interface Product extends IProduct {
  id: number
}

export interface User {
  id?: number;
  username: string;
  classe: string;
  level: number;
  password?: string;
}

export interface Order {
  id: number;
  userId: number;
  productsIds: number[];
}