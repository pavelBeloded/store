"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Category({ category }: { category: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const currentCategory = searchParams.get("category");
  const isActive =
    currentCategory === category || (!currentCategory && category === "all");

  const handleClick = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    params.delete("page");

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <Button
      variant={isActive ? "default" : "outline"}
      onClick={handleClick}
      className={cn(
        "capitalize transition-all w-[70%]",
        isActive && "scale-105 shadow-sm",
      )}
    >
      {category.replace("-", " ")}
    </Button>
  );
}
