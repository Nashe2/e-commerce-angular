import { Category } from './category.model';

export interface Producto {
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
  creationAt: string;
  category: Category;
}
