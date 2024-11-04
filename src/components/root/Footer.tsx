import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="mt-36 bg-white px-6">
      <div className="px-0 py-24 md:px-36">
        <div className="grid w-full grid-cols-1 grid-rows-3 md:grid-cols-6 md:grid-rows-1 gap-y-10">
          <div className="row-span-1 flex flex-col gap-y-10 md:col-span-3">
            <Image
              src={"/assets/icons/desktop.png"}
              alt="icon"
              width={54}
              height={54}
            />
            <ul className="flex flex-col gap-y-4">
              <li className="flex flex-row items-center gap-3">
                <Mail strokeWidth={1.5} />
                <span>admin@gmail.com</span>
              </li>
              <li className="flex flex-row items-center gap-3">
                <Phone strokeWidth={1.5} />
                <span>+628 125 679 7616</span>
              </li>
              <li className="flex flex-row items-center gap-3">
                <MapPin strokeWidth={1.5} />
                <span>Semarang, Indonesia</span>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 row-span-1 md:col-span-2">
            <div className="col-span-1">
              <ul className="flex flex-col gap-y-2">
                <li className="mb-1 text-lg font-semibold">Home</li>
                <li>Benefits</li>
                <li>Our Courses</li>
                <li>Our Testimonials</li>
                <li>Our FAQ</li>
              </ul>
            </div>
            <div className="col-span-1">
              <ul className="flex flex-col gap-y-2">
                <li className="mb-1 text-lg font-semibold">About Us</li>
                <li>Company</li>
                <li>Achievements</li>
                <li>Our Goals</li>
              </ul>
            </div>
          </div>
          <div className="row-span-1 md:col-span-1">
            <h4 className="mb-4 text-lg font-semibold">Social Profiles</h4>
            <div className="flex gap-x-4">
              <div className="rounded-lg border border-light-95 bg-light-97 p-3">
                <Facebook strokeWidth={1.25} className="h-6 w-6" />
              </div>
              <div className="rounded-lg border border-light-95 bg-light-97 p-3">
                <Twitter strokeWidth={1.25} className="h-6 w-6" />
              </div>
              <div className="rounded-lg border border-light-95 bg-light-97 p-3">
                <Linkedin strokeWidth={1.25} className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
