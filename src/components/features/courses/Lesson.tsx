import React from "react";
import LessonCard from "./LessonCard";

export default function Lesson() {
  return (
    <div className="grid grid-cols-2 gap-8">
      <LessonCard />
      <LessonCard />
      <LessonCard />
      <LessonCard />
    </div>
  );
}
