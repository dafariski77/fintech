import React from "react";
import PricingTab from "../PricingTab";
import FaqSection from "../FaqSection";

export default function PricingPage() {
  return (
    <>
      <div className="w-full py-24">
        <div className="flex w-full flex-row items-center">
          <h2 className="w-1/2 text-5xl font-semibold">Our Pricings</h2>
          <p className="w-1/2 text-lg">
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
      <PricingTab />
      <FaqSection />
    </>
  );
}
