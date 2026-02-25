"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "../button";
import { Badge } from "../badge";
import Link from "next/link";

export default function CartButton() {
  return (
    <Link href="/cart">
      <Button>
        <ShoppingCart />
        <Badge
          variant="destructive"
          className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full p-0 text-xs"
        >
          3
        </Badge>
      </Button>
    </Link>
  );
}
