import z from "zod";
import { ProductCardSchema, ProductSchema } from "./schemes";

export type Category = string;

export interface CatLink {
  title: string;
  href: string;
}
export type Product = z.infer<typeof ProductSchema>;
export type ProductCardData = z.infer<typeof ProductCardSchema>;
