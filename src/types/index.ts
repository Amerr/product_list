export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: string;
  type: string;
  image: string;
  price: number;
  size: string;
  rating: number;
}

export interface ProductFilterQuery {
  type: string;
  value: string;
}

export interface ProductState {
  isLoading: boolean;
  items: Product[];
  filter: ProductFilterQuery[];
}
