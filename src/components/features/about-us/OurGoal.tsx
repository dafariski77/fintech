import React from "react";
import FeatureCard from "./FeatureCard";

export default function OurGoal() {
  return (
    <div className="mt-24 flex flex-col gap-y-12 md:gap-y-20">
      <div className="flex flex-col gap-y-2">
        <h2 className="text-2xl font-medium md:text-5xl">Our Goals</h2>
        <p className="text-sm md:text-base">
          At SkillBridge, our goal is to empower individuals from all
          backgrounds to thrive in the world of design and development. We
          believe that education should be accessible and transformative,
          enabling learners to pursue their passions and make a meaningful
          impact. Through our carefully crafted courses, we aim to
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
