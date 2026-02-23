import { Button } from "@/components/ui/button";
import Pagination from "@/components/ui/products/pagination";
import { ProductsList } from "@/components/ui/products/products-list";
import { getTotalPages } from "@/lib/actions";
import { Filter, SortAsc } from "lucide-react";
import { Suspense } from "react";

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await getTotalPages(query);

  return (
    <main className="max-w-7xl m-auto py-10 px-4">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h3 className="font-bold text-3xl mb-1">Featured Products</h3>
          <h4 className="text-muted-foreground text-xl">Items just for you</h4>
        </div>

        <div className="flex gap-2">
          <Button data-icon="inline-start">
            <Filter />
            Filter
          </Button>

          <Button data-icon="inline-start">
            <SortAsc />
            Sort
          </Button>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <ProductsList query={query} currentPage={currentPage} />
      </Suspense>

      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}
