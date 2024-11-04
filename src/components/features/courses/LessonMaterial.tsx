import { Clock } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function LessonMaterial() {
  return (
    <Link href={"#"}>
      <div className="flex flex-row items-center justify-between rounded-lg border border-light-95 px-8 py-6">
        <div className="flex flex-col gap-y-1">
          <p className="text-lg font-medium">
            Understanding UI/UX Design Principles
          </p>
          <p>Lesson 01</p>
        </div>
        <div className="rounded-lg bg-light-97 p-3">
          <p className="flex items-center gap-x-2">
            <Clock strokeWidth={1.25} className="h-6 w-6" />
            45 Minutes
          </p>
        </div>
      </div>
    </Link>
  );
}
