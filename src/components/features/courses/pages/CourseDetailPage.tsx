import React from "react";
import LessonThumbnail from "../LessonThumbnail";
import Lesson from "../Lesson";

export default function CourseDetailPage() {
  return (
    <>
      <div className="w-full py-24">
        <div className="flex w-full flex-row items-center">
          <h2 className="w-1/2 text-5xl font-semibold">UI/UX Design Course</h2>
          <p className="w-1/2 text-lg">
            Welcome to our UI/UX Design course! This comprehensive program will
            equip you with the knowledge and skills to create exceptional user
            interfaces (UI) and enhance user experiences (UX). Dive into the
            world of design thinking, wireframing, prototyping, and usability
            testing. Below is an overview of the curriculum
          </p>
        </div>
      </div>
      <LessonThumbnail />
      <Lesson />
    </>
  );
}
