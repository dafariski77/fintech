import { Card } from "@/components/ui/Card";
import { ArrowUpRight } from "lucide-react";
import React from "react";

export default function BenefitCard() {
  return (
    <Card className="flex flex-col gap-y-12 rounded-xl p-12">
      <div className="flex flex-row justify-end">
        <p className="text-7xl font-bold">01</p>
      </div>
      <div className="flex flex-col gap-y-1">
        <p className="text-xl font-semibold">Flexible Learning Schedule</p>
        <p>
          Fit your coursework around your existing commitments and obligations.
        </p>
      </div>
      <div className="flex flex-row justify-end">
        <div className="rounded-lg border border-light-95 bg-light-99 p-5">
          <ArrowUpRight className="h-8 w-8 text-primary-50" />
        </div>
      </div>
    </Card>
  );
}
