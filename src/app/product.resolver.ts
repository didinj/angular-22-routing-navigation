import { ResolveFn } from '@angular/router';

export interface Product {
  id: string;
  name: string;
  price: number;
}

const products: Product[] = [
  {
    id: '101',
    name: 'Laptop',
    price: 1200
  },
  {
    id: '102',
    name: 'Smartphone',
    price: 800
  },
  {
    id: '103',
    name: 'Headphones',
    price: 150
  }
];

export const productResolver: ResolveFn<Product | undefined> =
  (route) => {
    const id = route.paramMap.get('id');

    return products.find(product => product.id === id);
  };
