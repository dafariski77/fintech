import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import { Separator } from "@/components/ui/Separator";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import React, { useRef } from "react";

export default function UserTestimonial() {
  const autoPlayPlugin = useRef(Autoplay({ delay: 3000 }));

  return (
    <div className="flex flex-col gap-y-10 md:gap-y-20 w-full md:w-auto">
      <div className="flex flex-col gap-y-2">
        <h2 className="text-3xl font-medium">Students Testimonials</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolore
          aperiam nobis porro quos vel. Sequi architecto nostrum nobis alias.
        </p>
      </div>

      <Carousel plugins={[autoPlayPlugin.current]}>
        <CarouselContent>
          <CarouselItem>
            <Card className="px-6">
              <CardContent className="py-12 pt-12">
                <p>
                  The web design course provided a solid foundation for me. The
                  instructors were knowledgeable and supportive, and the
                  interactive learning environment was engaging. I highly
                  recommend it!
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
                  <Button size={"lg"} variant={"secondary"}>
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card className="px-6">
              <CardContent className="py-12 pt-12">
                <p>
                  The web design course provided a solid foundation for me. The
                  instructors were knowledgeable and supportive, and the
                  interactive learning environment was engaging. I highly
                  recommend it!
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
                  <Button size={"lg"} variant={"secondary"}>
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <div className="absolute -bottom-28 right-14 flex -space-x-16">
          <CarouselPrevious className="relative inline-flex h-14 w-14 rounded-md" />
          <CarouselNext className="relative inline-flex h-14 w-14 rounded-md" />
        </div>
      </Carousel>
    </div>
  );
}
