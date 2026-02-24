import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Filter } from "lucide-react";
import { getCategoryList } from "@/lib/actions";
import { Category } from "./category";

export default async function CategoryFilter() {
  const categories = await getCategoryList();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="p-4 flex flex-col w-100">
        <SheetHeader className="mb-6">
          <SheetTitle>Categories</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto pr-2">
          <div className="flex items-center flex-col gap-2">
            <SheetClose asChild>
              <Category category="all" />
            </SheetClose>

            <hr className="my-2 opacity-50" />

            {categories.map((cat: string) => (
              <SheetClose key={cat} asChild>
                <Category category={cat} />
              </SheetClose>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
