import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import React from "react";
import FaqAccordion from "./FaqAccordion";

export default function FaqSection() {
  return (
    <Card className="mt-14 rounded-lg p-20">
      <div className="grid grid-cols-6 gap-x-28">
        <div className="col-span-2 flex flex-col gap-y-3">
          <h4 className="text-5xl font-semibold">Frequently Asked Questions</h4>
          <p>
            Still you have any questions? Contact our Team via
            support@skillbridge.com
          </p>
          <div className="mt-8">
            <Button variant={"outline"} className="h-auto w-auto py-3">
              See All FAQ's
            </Button>
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex flex-col gap-y-6">
            <FaqAccordion />
            <FaqAccordion />
            <FaqAccordion />
            <FaqAccordion />
            <FaqAccordion />
            <FaqAccordion />
          </div>
        </div>
      </div>
    </Card>
  );
}
