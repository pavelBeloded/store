import { Button } from "@/components/ui/button";
import { ProductsList } from "@/components/ui/products/products-list";
import { Filter, SortAsc } from "lucide-react";
import { Suspense } from "react";

export default function Home() {
  const query = "";
  const currentPage = 1;

  return (
    <main className="max-w-7xl m-auto py-10 px-4">
      <div className="flex justify-between items-end">
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
    </main>
  );
}
