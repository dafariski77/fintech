import { Card } from "@/components/ui/Card";
import Image from "next/image";
import React from "react";
import CourseBadge from "../courses/CourseBadge";
import { Button } from "@/components/ui/Button";

export default function OurCourseCard() {
  return (
    <Card className="flex flex-col gap-y-8 rounded-xl p-12">
      <Image
        src={"/assets/dummy/thumbnail/desk.jpeg"}
        width={670}
        height={380}
        alt="thumbnail-course"
        className="w-full rounded-xl"
      />
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-x-4">
          <CourseBadge />
          <CourseBadge />
        </div>
        <p className="font-medium">By Jhon Smith</p>
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="text-lg font-semibold">Web Design Fundamentals</p>
        <p>
          Learn the fundamentals of web design, including HTML, CSS, and
          responsive design principles. Develop the skills to create visually
          appealing and user-friendly websites.
        </p>
      </div>
      <Button variant={"secondary"} className="py-7 text-base">
        Get it Now
      </Button>
    </Card>
  );
}
