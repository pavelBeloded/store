"use client";

import { Button } from "./button";

export function BackButton() {
  return (
    <Button onClick={() => window.history.back()} size="lg">
      Return to Home
    </Button>
  );
}
