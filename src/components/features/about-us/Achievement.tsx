import React from "react";
import FeatureCard from "./FeatureCard";

export default function Achievement() {
  return (
    <div className="mt-24 flex flex-col gap-y-12 md:gap-y-20">
      <div className="flex flex-col gap-y-2">
        <h2 className="text-2xl font-medium md:text-5xl">Achievement</h2>
        <p className="text-sm md:text-base">
          Our commitment to excellence has led us to achieve significant
          milestones along our journey. Here are some of our notable
          achievements
        </p>
      </div>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </div>
  );
}
