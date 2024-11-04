import React from "react";
import Achievement from "../Achievement";
import OurGoal from "../OurGoal";
import JoinBanner from "../JoinBanner";

export default function AboutUsPage() {
  return (
    <>
      <div className="w-full py-24">
        <div className="flex w-full flex-col items-center gap-y-4 md:flex-row md:gap-y-0">
          <h2 className="w-full text-3xl font-semibold md:w-1/2 md:text-5xl">
            About SkillBridge
          </h2>
          <p className="w-full text-sm md:w-1/2 md:text-lg">
            Welcome to SkillBridge's Pricing Plan page, where we offer two
            comprehensive options to cater to your needs: Free and Pro. We
            believe in providing flexible and affordable pricing options for our
            services. Whether you're an individual looking to enhance your
            skills or a business seeking professional development solutions, we
            have a plan that suits you. Explore our pricing options below and
            choose the one that best fits your requirements.
          </p>
        </div>
      </div>
      <Achievement />
      <OurGoal />
      <JoinBanner />
    </>
  );
}
