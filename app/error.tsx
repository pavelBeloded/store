"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, RotateCcw } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <AlertCircle className="w-20 h-20 text-destructive mb-4" />
      <h2 className="text-3xl font-bold tracking-tight">
        Something went wrong!
      </h2>
      <p className="mt-2 text-muted-foreground">
        An unexpected error occurred while loading this page.
      </p>
      <div className="mt-8 flex gap-4">
        <Button onClick={() => reset()} variant="outline">
          <RotateCcw className="mr-2 h-4 w-4" />
          Try again
        </Button>
        <Button asChild>
          <Link href="/">Go to Home</Link>
        </Button>
      </div>
    </div>
  );
}
