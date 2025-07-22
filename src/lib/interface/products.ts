export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}


export interface BasketItem extends Product {
  count: number;
}