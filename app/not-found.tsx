"use client";

import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <FileQuestion className="w-20 h-20 text-muted-foreground mb-4" />
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
        404 - Page Not Found
      </h1>
      <p className="mt-4 text-muted-foreground max-w-150">
        {`Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.`}
      </p>
      <div className="mt-8">
        <Button onClick={() => window.history.back()} size="lg">
          Return to Home
        </Button>
      </div>
    </div>
  );
}
