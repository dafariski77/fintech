import React from "react";
import CourseGroupCard from "../CourseGroupCard";

export default function CoursePage() {
  return (
    <>
      <div className="w-full py-24">
        <div className="flex w-full flex-row items-center">
          <h2 className="w-1/2 text-5xl font-semibold">
            Online Courses on Design and Development
          </h2>
          <p className="w-1/2 text-lg">
            Welcome to our online course page, where you can enhance your skills
            in design and development. Choose from our carefully curated
            selection of 10 courses designed to provide you with comprehensive
            knowledge and practical experience. Explore the courses below and
            find the perfect fit for your learning journey.
          </p>
        </div>
      </div>
      <div className="">
        <CourseGroupCard />
        <CourseGroupCard />
        <CourseGroupCard />
      </div>
    </>
  );
}
