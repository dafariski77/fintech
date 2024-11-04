import React from "react";
import HeroSection from "../HeroSection";
import BenefitSection from "../BenefitSection";
import OurCourseSection from "../OurCourseSection";
import OurTestimonialSection from "../OurTestimonialSection";
import OurPricingSection from "../OurPricingSection";
import FaqSection from "../../pricing/FaqSection";

export default function HomePage() {
  return (
    <div className="mt-12">
      <HeroSection />
      <BenefitSection />
      <OurCourseSection />
      <OurTestimonialSection />
      <OurPricingSection />
      <FaqSection />
    </div>
  );
}
