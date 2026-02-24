import Filter from "@/components/ui/products/category-filter";
import Pagination from "@/components/ui/products/pagination";
import { ProductsList } from "@/components/ui/products/products-list";
import { getTotalPages } from "@/lib/actions";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { ProductGridSkeleton } from "@/components/ui/products/products-skeleton";
import Sort from "@/components/ui/products/products-sort";

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
    category?: string;
    sort?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const category = searchParams?.category || "";
  const sort = searchParams?.sort || "";

  const totalPages = await getTotalPages(query, category);

  if (currentPage > totalPages && totalPages > 0) {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    redirect(`/?${params.toString()}`);
  }

  return (
    <main className="max-w-7xl m-auto py-10 px-4">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h3 className="font-bold text-3xl mb-1">Featured Products</h3>
          <h4 className="text-muted-foreground text-xl">Items just for you</h4>
        </div>

        <div className="flex gap-2">
          <Filter />

          <Sort />
        </div>
      </div>

      <Suspense fallback={<ProductGridSkeleton />}>
        <ProductsList
          category={category}
          query={query}
          currentPage={currentPage}
          sort={sort}
        />
      </Suspense>

      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}
