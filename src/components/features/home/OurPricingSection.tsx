import React from "react";
import PricingTab from "../pricing/PricingTab";

export default function OurPricingSection() {
  return (
    <div className="my-32 flex flex-col gap-y-20">
      <div className="flex flex-row items-end justify-between gap-x-96">
        <div className="flex flex-col gap-y-2">
          <h3 className="text-5xl font-semibold">Our Pricing</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
      </div>
      <PricingTab />
    </div>
  );
}
