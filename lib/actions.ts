"use server";

import { Category, ProductCardData } from "./definitions";
import { z } from "zod";
import { ProductCardSchema } from "./schemes";

export async function getCategoryList(): Promise<Category[]> {
  const res = await fetch("https://dummyjson.com/products/category-list");

  if (!res.ok) {
    throw new Error("Faild to fetch data");
  }

  return res.json();
}

const ITEMS_PER_PAGE = 9;
export async function getFilteredProducts(
  query: string,
  currentPage: number,
): Promise<ProductCardData[]> {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const res = await fetch(
    `https://dummyjson.com/products/search?q=${query}&limit=${ITEMS_PER_PAGE}&skip=${offset}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  const ProductListSchema = z.array(ProductCardSchema);

  return ProductListSchema.parse(data.products);
}
