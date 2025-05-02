// src/types/product.ts
export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string | any; // Update type to accept both string and imported image
  price: string;
  category: string;
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