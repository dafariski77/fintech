import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Image from "next/image";
import React from "react";
import CourseBadge from "./CourseBadge";
import { Separator } from "@/components/ui/Separator";

export default function CourseGroupCard() {
  return (
    <div className="mt-24">
      <Card className="p-12">
        <div className="flex flex-row items-center justify-between gap-x-28">
          <div className="flex flex-col gap-y-2">
            <h5 className="text-2xl font-semibold">Web Design Fundamentals</h5>
            <p>
              Learn the fundamentals of web design, including HTML, CSS, and
              responsive design principles. Develop the skills to create
              visually appealing and user-friendly websites.
            </p>
          </div>
          <Button variant={"outline"}>View Course</Button>
        </div>
        <div className="my-8 grid grid-cols-3 gap-x-7">
          <Image
            src={"/assets/dummy/thumbnail/desk.jpeg"}
            className="h-full w-full rounded-md object-cover object-center"
            width={470}
            height={422}
            alt="thumbnail"
          />
          <Image
            src={"/assets/dummy/thumbnail/desk.jpeg"}
            className="h-full w-full rounded-md object-cover object-center"
            width={470}
            height={422}
            alt="thumbnail"
          />
          <Image
            src={"/assets/dummy/thumbnail/desk.jpeg"}
            className="h-full w-full rounded-md object-cover object-center"
            width={470}
            height={422}
            alt="thumbnail"
          />
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-x-4">
            <CourseBadge />
            <CourseBadge />
            <CourseBadge />
          </div>
          <p className="text-lg font-medium">By John Smith</p>
        </div>
        <div className="mt-12 rounded-lg border border-light-95">
          <div className="border-b border-light-95 px-8 py-6">
            <p className="text-xl font-semibold">Curriculum</p>
          </div>
          <div className="px-12 py-7">
            <div className="flex flex-row justify-evenly">
              <div className="flex flex-col gap-y-2">
                <p className="text-6xl font-bold">01</p>
                <p>Introduction to UI/UX Design</p>
              </div>
              <div className="flex justify-center">
                <Separator orientation="vertical" />
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-6xl font-bold">01</p>
                <p>Introduction to UI/UX Design</p>
              </div>
              <div className="flex justify-center">
                <Separator orientation="vertical" />
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-6xl font-bold">01</p>
                <p>Introduction to UI/UX Design</p>
              </div>
              <div className="flex justify-center">
                <Separator orientation="vertical" />
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="text-6xl font-bold">01</p>
                <p>Introduction to UI/UX Design</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
