import FieldGroup from "@/components/root/FieldGroup";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Separator } from "@/components/ui/Separator";
import { Textarea } from "@/components/ui/Textarea";
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import React from "react";

export default function ContactUsForm() {
  return (
    <Card className="p-8 md:p-16">
      <div className="grid grid-cols-1 gap-4 gap-y-14 md:grid-cols-7">
        <div className="col-span-4 flex flex-col gap-y-8">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 md:gap-y-0">
            <FieldGroup>
              <Label htmlFor="firstName">First Name</Label>
              <Input placeholder="Enter First Name" id="firstName" />
            </FieldGroup>
            <FieldGroup>
              <Label htmlFor="lastName">Last Name</Label>
              <Input placeholder="Enter Last Name" id="lastName" />
            </FieldGroup>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 md:gap-y-0">
            <FieldGroup>
              <Label htmlFor="email">Email</Label>
              <Input placeholder="Enter your Email" id="email" type="email" />
            </FieldGroup>
            <FieldGroup>
              <Label htmlFor="phone">Phone</Label>
              <Input placeholder="Enter Phone Number" id="phone" />
            </FieldGroup>
          </div>
          <FieldGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input placeholder="Enter your Subject" id="subject" />
          </FieldGroup>
          <FieldGroup>
            <Label htmlFor="message">Message</Label>
            <Textarea placeholder="Enter your Message here..." id="message" />
          </FieldGroup>
          <div className="mt-6 flex justify-center md:mt-0">
            <Button size={"lg"} className="text-base">
              Send Your Message
            </Button>
          </div>
        </div>
        <div className="hidden justify-center md:flex">
          <Separator orientation="vertical" />
        </div>
        <div className="col-span-2 flex flex-col justify-between gap-y-6">
          <div className="flex flex-col items-center justify-center gap-y-3 rounded-lg border border-light-95 bg-light-99 p-4">
            <div className="rounded-lg border border-light-95 bg-light-97 p-3">
              <Mail strokeWidth={1.25} className="h-6 w-6" />
            </div>
            <p className="text-sm text-gray-600">admin@gmail.com</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-3 rounded-lg border border-light-95 bg-light-99 p-4">
            <div className="rounded-lg border border-light-95 bg-light-97 p-3">
              <Phone strokeWidth={1.25} className="h-6 w-6" />
            </div>
            <p className="text-sm text-gray-600">+91 00000 00000</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-3 rounded-lg border border-light-95 bg-light-99 p-4">
            <div className="rounded-lg border border-light-95 bg-light-97 p-3">
              <MapPin strokeWidth={1.25} className="h-6 w-6" />
            </div>
            <p className="text-sm text-gray-600">Semarang, Indonesia</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-3 rounded-lg border border-light-95 bg-light-99 p-4">
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
            <p className="text-sm text-gray-600">Semarang, Indonesia</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
