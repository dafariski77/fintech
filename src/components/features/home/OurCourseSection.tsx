import { Button } from "@/components/ui/Button";
import React from "react";
import OurCourseCard from "./OurCourseCard";

export default function OurCourseSection() {
  return (
    <div className="my-32 flex flex-col gap-y-20">
      <div className="flex flex-row items-end justify-between gap-x-96">
        <div className="flex flex-col gap-y-2">
          <h3 className="text-5xl font-semibold">Our Courses</h3>
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
        <OurCourseCard />
        <OurCourseCard />
        <OurCourseCard />
        <OurCourseCard />
        <OurCourseCard />
        <OurCourseCard />
      </div>
    </div>
  );
}
