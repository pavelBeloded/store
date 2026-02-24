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

const ITEMS_PER_PAGE = 8;
export async function getFilteredProducts(
  query: string,
  category: string,
  currentPage: number,
): Promise<{ products: ProductCardData[]; totalPages: number }> {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  let url = "";

  if (category && category !== "all") {
    url = `https://dummyjson.com/products/category/${category}?limit=${ITEMS_PER_PAGE}&skip=${offset}`;
  } else {
    url = `https://dummyjson.com/products/search?q=${query}&limit=${ITEMS_PER_PAGE}&skip=${offset}`;
  }

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  const ProductListSchema = z.array(ProductCardSchema);

  return {
    products: ProductListSchema.parse(data.products),
    totalPages: data.total,
  };
}

export async function getTotalPages(query: string, category: string) {
  let url = "";
  if (category && category !== "all") {
    url = `https://dummyjson.com/products/category/${category}?limit=1`;
  } else {
    url = `https://dummyjson.com/products/search?q=${query}&limit=1`;
  }

  const res = await fetch(url);
  const data = await res.json();
  return Math.ceil(data.total / ITEMS_PER_PAGE);
}
