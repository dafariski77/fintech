import { Check } from "lucide-react";
import React from "react";

export default function PricingFeature() {
  return (
    <div className="flex items-center gap-x-4 rounded-md border border-light-95 p-3">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary-95">
        <Check className="h-4 w-4" />
      </div>
      <p>Unlimited access to all courses.</p>
    </div>
  );
}
