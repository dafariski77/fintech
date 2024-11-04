import React from "react";
import PricingFeature from "./PricingFeature";

export default function PricingCard() {
  return (
    <div className="rounded-lg border border-light-95 bg-light-99 px-6 py-10 shadow-none">
      <div className="rounded-md border border-primary-90 bg-primary-97 py-3 text-center">
        <p>Free Plan</p>
      </div>
      <div className="my-12 text-center">
        <p>
          <span className="text-6xl font-bold">$0</span>{" "}
          <span className="font-medium">/month</span>
        </p>
      </div>
      <div className="rounded-md border border-light-95 bg-white">
        <div className="px-14 py-8">
          <p className="text-center text-sm font-semibold">
            Available Features
          </p>
          <div className="flex flex-col gap-y-4 pt-8 text-sm">
            <PricingFeature />
            <PricingFeature />
            <PricingFeature />
            <PricingFeature />
            <PricingFeature />
            <PricingFeature />
            <PricingFeature />
          </div>
        </div>
        <div className="cursor-pointer rounded-b-md bg-primary-50 py-4 text-center text-white">
          <p>Get Started</p>
        </div>
      </div>
    </div>
  );
}
