import { GetCategoryList } from "@/lib/actions";
import { Category, CatLink } from "@/lib/definitions";
import { Navigation } from "./nav-links";

function formatCategories(cats: Category[]) {
  return cats.map((cat) => ({
    title: cat.charAt(0).toUpperCase() + cat.slice(1).replace(/-/g, " "),
    href: `/category/${cat}`,
  }));
}

export async function CategoryNavigation() {
  const rawCats = await GetCategoryList();

  const categories = formatCategories(rawCats);

  return <Navigation categories={categories} />;
}
