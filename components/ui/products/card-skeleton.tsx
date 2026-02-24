import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

export function ProductCardSkeleton() {
  return (
    <Card className="flex flex-col h-full overflow-hidden">
      {/* Image Area */}
      <div className="aspect-square w-full">
        <Skeleton className="h-full w-full" />
      </div>

      <CardHeader className="p-4 space-y-2">
        {/* Title line */}
        <Skeleton className="h-5 w-4/5" />
        {/* Price line */}
        <Skeleton className="h-6 w-1/4" />
      </CardHeader>

      <div className="grow" />

      <CardFooter className="p-4 pt-0">
        {/* Button placeholder */}
        <Skeleton className="h-9 w-full rounded-md" />
      </CardFooter>
    </Card>
  );
}
