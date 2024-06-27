export interface ProductoA {
  id: number;
  name: string;
  price: number;
  dimensions: string;
  brand?: string;
  model?: string;
  description: string;
  main_image: string;
  carousel_images: string[];
}
