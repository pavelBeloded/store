import { ProductCardData } from "@/lib/definitions";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

export function ProductCard({ title, price, thumbnail }: ProductCardData) {
  return (
    <Card className="group h-full overflow-hidden flex flex-col transition-all hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority={false}
        />
      </div>

      <CardHeader className=" space-y-1">
        <CardTitle className="line-clamp-1 text-base font-semibold">
          {title}
        </CardTitle>
        <CardDescription className="text-lg font-bold text-primary">
          ${price.toFixed(2)}
        </CardDescription>
      </CardHeader>

      <CardFooter className="pt-0">
        <Button className="w-full gap-2 transition-colors" size="sm">
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
