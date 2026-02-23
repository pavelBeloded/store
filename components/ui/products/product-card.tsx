import { ProductCardData } from "@/lib/definitions";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Suspense } from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

export function ProductCard({ id, title, price, thumbnail }: ProductCardData) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{price}</CardDescription>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<div>Loading...</div>}>
          <Image src={thumbnail} alt={title} width={200} height={200} />
        </Suspense>
      </CardContent>
      <CardFooter>
        <CardAction>
          <ShoppingCart />
          Add to Cart
        </CardAction>
      </CardFooter>
    </Card>
  );
}
