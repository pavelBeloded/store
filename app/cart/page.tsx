"use client";

import Image from "next/image";
import { useCartStore } from "../store/use-cart-store";
import { Button } from "@/components/ui/button";
import { BackButton } from "@/components/ui/back-button";

export default function CartPage() {
  const { items, removeItem, clearCart } = useCartStore();
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <BackButton />
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-4 border-b pb-4">
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={80}
              height={80}
              className="rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-muted-foreground">
                ${item.price} x {item.quantity}
              </p>
            </div>
            <Button variant="destructive" onClick={() => removeItem(item.id)}>
              Remove
            </Button>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-between items-center">
        <p className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
        <div className="gap-4 flex">
          <Button variant="outline" onClick={clearCart}>
            Clear
          </Button>
          <Button>Checkout</Button>
        </div>
      </div>
    </main>
  );
}
