import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Image from "next/image";
import React from "react";

export default function JoinBanner() {
  return (
    <div className="mt-20">
      <Image
        src={"/assets/vector/banner-join.png"}
        alt="vector-banner"
        width={360}
        height={360}
        className="absolute right-10 z-10 h-48 w-48 md:right-96 md:h-[360px] md:w-[360px]"
      />
      <Card className="p-7 md:p-20">
        <div className="relative z-50 flex flex-col gap-x-36 gap-y-16 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-y-5">
            <h3 className="text-3xl font-semibold md:text-5xl">
              <span className="text-primary-50">Together</span>, let's shape the
              future of digital innovation
            </h3>
            <p>
              Join us on this exciting learning journey and unlock your
              potential in design and development.
            </p>
          </div>
          <div className="">
            <Button size={"lg"}>Join Now</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
