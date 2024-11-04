import Image from "next/image";
import React from "react";

export default function LessonThumbnail() {
  return (
    <div className="my-24">
      <Image
        src={"/assets/dummy/thumbnail/desk.jpeg"}
        alt="thumbnail"
        width={1500}
        height={790}
        className="h-[790px] w-full rounded-lg object-cover"
        objectFit="cover"
      />
    </div>
  );
}
