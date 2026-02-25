"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "../button";
import { Badge } from "../badge";
import Link from "next/link";
import { useCartStore } from "@/app/store/use-cart-store";

export default function CartButton() {
  const items = useCartStore((state) => state.items);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link href="/cart">
      <Button>
        <ShoppingCart />
        {totalItems === 0 || (
          <Badge
            variant="destructive"
            className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full p-0 text-xs"
          >
            {totalItems}
          </Badge>
        )}
      </Button>
    </Link>
  );
}
