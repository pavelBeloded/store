import z from "zod";
import { ProductCardSchema, ProductSchema } from "./schemes";

export type Category = string;

export interface CatLink {
  title: string;
  href: string;
}

export interface CartItem extends ProductCardData {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  addItem: (product: ProductCardData) => void;
  removeItem: (id: number) => void;
  removeOneItem: (id: number) => void;
  clearCart: () => void;
}

export type Product = z.infer<typeof ProductSchema>;
export type ProductCardData = z.infer<typeof ProductCardSchema>;
