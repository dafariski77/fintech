import { Button } from "@/components/ui/Button";
import Image from "next/image";
import React from "react";
import UserCompany from "./UserCompany";
import BenefitSection from "./BenefitSection";
import OurCourseSection from "./OurCourseSection";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        className="absolute left-[500px] top-[155px]"
        src={"/assets/vector/pop.png"}
        alt="pop"
        width={39}
        height={43}
      />
      <div className="flex items-center gap-x-3 rounded-lg bg-white px-7 py-4">
        <div className="flex items-center justify-center rounded-lg bg-primary-95 p-[14px]">
          <Image
            src={"/assets/icons/hero.png"}
            alt="hero-icon"
            width={34}
            height={34}
            objectFit="cover"
          />
        </div>
        <h3 className="text-5xl font-semibold">
          <span className="text-primary-50">Unlock</span> Your Creative
          Potential
        </h3>
      </div>
      <div className="mb-14 mt-8 flex flex-col gap-y-4 text-center">
        <p className="text-4xl font-medium">
          with Online Design and Development Courses.
        </p>
        <p>Learn from Industry Experts and Enhance Your Skills.</p>
      </div>
      <div className="flex flex-row gap-x-4">
        <Button className="py-7">Explore Courses</Button>
        <Button className="py-7" variant={"outline"}>
          View Pricing
        </Button>
      </div>
      <div className="my-24 flex w-full flex-row justify-center rounded-lg border border-light-95 bg-white p-7">
        <UserCompany />
        <UserCompany />
        <UserCompany />
        <UserCompany />
        <UserCompany />
        <UserCompany />
        <UserCompany withBorder={false} />
      </div>
      <div className="w-full">
        <Image
          src={"/assets/dummy/thumbnail/desk.jpeg"}
          alt="thumbnail"
          width={1500}
          height={790}
          className="h-[790px] w-full rounded-lg object-cover"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
