import { Button } from "@/components/ui/Button";
import React from "react";
import OurCourseCard from "./OurCourseCard";
import { Card } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import Image from "next/image";
import OurTestimonialCard from "./OurTestimonialCard";

export default function OurTestimonialSection() {
  return (
    <div className="my-32 flex flex-col gap-y-20">
      <div className="flex flex-row items-end justify-between gap-x-96">
        <div className="flex flex-col gap-y-2">
          <h3 className="text-5xl font-semibold">Our Testimonials</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div className="">
          <Button variant={"outline"}>View All</Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <OurTestimonialCard />
        <OurTestimonialCard />
        <OurTestimonialCard />
        <OurTestimonialCard />
      </div>
    </div>
  );
}
