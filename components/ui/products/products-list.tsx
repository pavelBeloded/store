import { getFilteredProducts } from "@/lib/actions";
import { ProductCard } from "./product-card";

export async function ProductsList({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const products = await getFilteredProducts(query, currentPage);

  return (
    <div className="grid grid-cols-3 columns-xs">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
