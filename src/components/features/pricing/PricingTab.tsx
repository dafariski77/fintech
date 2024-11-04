import { Card } from "@/components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import React from "react";
import PricingCard from "./PricingCard";

export default function PricingTab() {
  return (
    <Tabs defaultValue="monthly">
      <div className="flex w-full justify-center">
        <TabsList className="grid w-60 grid-cols-2 bg-white">
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="yearly">Yearly</TabsTrigger>
        </TabsList>
      </div>
      <Card className="mt-14 rounded-lg p-20">
        <TabsContent value="monthly">
          <div className="grid grid-cols-2 gap-x-8">
            <PricingCard />
            <PricingCard />
          </div>
        </TabsContent>
        <TabsContent value="yearly">
          <div className="grid grid-cols-2 gap-x-8">
            <PricingCard />
            <PricingCard />
          </div>
        </TabsContent>
      </Card>
    </Tabs>
  );
}
