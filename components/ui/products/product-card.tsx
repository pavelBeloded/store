import { ProductCardData } from "@/lib/definitions";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { AddToCartButton } from "../home/add-to-cart-button";

export function ProductCard({ id, title, price, thumbnail }: ProductCardData) {
  return (
    <Card className="group overflow-hidden rounded-xl border bg-card transition hover:shadow-md px-4 flex flex-col justify-between ">
      <Link href={`/product/${id}`} className="block">
        <div className="relative w-30 h-30 sm:w-full h-auto aspect-square bg-muted">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
        <div className="px-2.5 pb-2 pt-2 sm:px-3 sm:pt-2.5">
          <div className="line-clamp-2 text-xl leading-snug  font-medium">
            {title}
          </div>
        </div>
      </Link>

      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold tabular-nums">
          ${price.toFixed(2)}
        </div>
        <div className="[&>button]:h-8 [&>button]:px-3 [&>button]:text-xs sm:[&>button]:h-9 sm:[&>button]:px-3.5 sm:[&>button]:text-sm">
          <AddToCartButton product={{ id, title, price, thumbnail }} />
        </div>
      </div>
    </Card>
  );
}
