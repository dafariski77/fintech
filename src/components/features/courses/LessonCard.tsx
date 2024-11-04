import { Card } from "@/components/ui/Card";
import React from "react";
import LessonMaterial from "./LessonMaterial";

export default function LessonCard() {
  return (
    <Card className="flex flex-col gap-y-12 p-12">
      <div className="flex justify-end">
        <h5 className="text-6xl font-bold">01</h5>
      </div>
      <p className="text-2xl font-semibold">Introduction to UI/UX Design</p>
      <div className="flex flex-col gap-y-5">
        <LessonMaterial />
        <LessonMaterial />
        <LessonMaterial />
        <LessonMaterial />
        <LessonMaterial />
      </div>
    </Card>
  );
}
