import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import Image from "next/image";
import React from "react";

export default function OurTestimonialCard() {
  return (
    <Card className="p-12">
      <p>
        The web design course provided a solid foundation for me. The
        instructors were knowledgeable and supportive, and the interactive
        learning environment was engaging. I highly recommend it!
      </p>
      <Separator className="my-10" />
      <div className="flex flex-row items-end justify-between">
        <div className="flex items-center gap-x-4">
          <Image
            alt="user-image"
            src={"/assets/dummy/users/avatar.jpg"}
            width={60}
            height={60}
            className="rounded-md"
          />
          <p className="font-semibold">Sarah L</p>
        </div>
        <Button variant={"secondary"}>Read Full Story</Button>
      </div>
    </Card>
  );
}
