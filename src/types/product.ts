// types/product.ts
export interface Product {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  price?: number;
  category?: string;
  dimensions?: string;
  targetAudience?: string;
  material?: string;
  packaging?: string;
  features?: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
}