"use client";

import { ProductCardData } from "@/lib/definitions";
import { Button } from "../button";
import { Plus, ShoppingCart, Trash, Minus } from "lucide-react";
import { useCartStore } from "@/app/store/use-cart-store";

export function AddToCartButton({ product }: { product: ProductCardData }) {
  const { items, addItem, removeOneItem } = useCartStore();

  const cartItem = items.find((item) => item.id === product.id);
  const quantity = cartItem?.quantity || 0;
  const isInCart = quantity > 0;

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.preventDefault();
    removeOneItem(product.id);
  };

  if (!isInCart) {
    return (
      <Button
        onClick={handleAdd}
        className="w-full gap-2 transition-all active:scale-95"
        size="sm"
      >
        <ShoppingCart className="h-4 w-4" />
        Add to Cart
      </Button>
    );
  }

  return (
    <div className="w-full flex items-center justify-between gap-1">
      <Button
        onClick={handleRemove}
        variant="outline"
        size="icon"
        className="h-8 w-8 shrink-0"
      >
        {quantity === 1 ? (
          <Trash className="h-4 w-4 text-destructive" />
        ) : (
          <Minus className="h-4 w-4" />
        )}
      </Button>

      <span className="font-medium text-sm w-8 text-center">{quantity}</span>

      <Button
        onClick={handleAdd}
        variant="outline"
        size="icon"
        className="h-8 w-8 shrink-0"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
