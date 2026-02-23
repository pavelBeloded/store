import { Search, ShoppingCart, Store } from "lucide-react";
import Link from "next/link";
import { CategoryNavigation } from "./navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="max-w-7xl m-auto">
      <div className="flex items-center justify-between p-4 border-b sticky top-0 z-50 bg-background ">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Store />
            <span className="font-bold text-lg">Store</span>
          </div>
        </Link>

        <CategoryNavigation />

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search />
          </Button>
          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link href="/cart">
              <ShoppingCart />
              <Badge
                variant="destructive"
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full p-0 text-xs"
              >
                3
              </Badge>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
