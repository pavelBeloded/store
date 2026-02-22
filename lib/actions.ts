"use server";

import { Category } from "./definitions";

export async function GetCategoryList(): Promise<Category[]> {
  const res = await fetch("https://dummyjson.com/products/category-list");

  if (!res.ok) {
    throw new Error("Faild to fetch data");
  }

  return res.json();
}
