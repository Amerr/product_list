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

export interface ProductState {
  isLoading: boolean;
  items: Product[];
}
