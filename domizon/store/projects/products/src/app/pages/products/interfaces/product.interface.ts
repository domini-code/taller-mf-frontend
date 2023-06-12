interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  categoryId: number;
  image: string;
  rating: Rating;
}

export interface QuantityProductChanged {
  productId: number;
  count: unknown;
}
