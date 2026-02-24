import { Skeleton } from "@/components/ui/skeleton";

export function FilterButtonsSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      {/* Skeleton for "All Products" button */}
      <Skeleton className="h-9 w-full rounded-md" />

      <hr className="my-2 opacity-50" />

      {/* Skeletons for categories with varying widths for realism */}
      <Skeleton className="h-9 w-[140px] rounded-md" />
      <Skeleton className="h-9 w-[180px] rounded-md" />
      <Skeleton className="h-9 w-[120px] rounded-md" />
      <Skeleton className="h-9 w-[160px] rounded-md" />
      <Skeleton className="h-9 w-[150px] rounded-md" />
      <Skeleton className="h-9 w-[130px] rounded-md" />
      <Skeleton className="h-9 w-[170px] rounded-md" />
    </div>
  );
}
