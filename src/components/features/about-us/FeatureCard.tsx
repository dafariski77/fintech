import { Card } from "@/components/ui/Card";
import { Crown } from "lucide-react";
import React from "react";

export default function FeatureCard() {
  return (
    <Card className="p-7 md:p-12">
      <div className="flex flex-col gap-y-5">
        <div className="w-fit rounded-lg border border-primary-90 bg-primary-97 p-3 md:p-4">
          <Crown className="h-7 w-7 text-primary-50 md:h-8 md:w-8" />
        </div>
        <div className="flex flex-col gap-y-3">
          <p className="text-base font-semibold md:text-2xl">
            Trusted by Thousands
          </p>
          <p className="text-sm md:text-base">
            We have successfully served thousands of students, helping them
            unlock their potential and achieve their career goals.
          </p>
        </div>
      </div>
    </Card>
  );
}
