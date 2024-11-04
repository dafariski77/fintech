"use client";

import {
  ArrowRight,
  ChartNoAxesColumn,
  ChevronDown,
  LogOut,
  User,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/Button";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "../ui/Avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/DropdownMenu";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="mx-6 mt-3">
      <div className="flex w-full items-center justify-center rounded-md bg-primary p-2 text-white">
        <p className="flex items-center gap-3 text-sm md:text-base">
          Free Courses Sale Ends Soon, Get It Now <ArrowRight />
        </p>
      </div>
      <div className="flex flex-row justify-between px-0 py-4 md:px-36">
        <div className="flex flex-row items-center gap-x-12">
          <Image
            src={"/assets/icons/desktop.png"}
            alt="icon"
            width={54}
            height={54}
          />
          <ul className="hidden flex-row gap-6 md:flex">
            <li>Home</li>
            <li>
              <Link href={"/courses"}>Courses</Link>
            </li>
            <li>
              <Link href={"/about-us"}>About Us</Link>
            </li>
            <li>
              <Link href={"/pricing"}>Pricing</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        {session?.user ? (
          <div className="flex flex-row items-center gap-x-4">
            <p>{session.user.name}</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="flex flex-row items-center gap-x-3">
                  <Avatar>
                    <AvatarImage
                      src={`https://ui-avatars.com/api/?name=${session.user.name}&background=random`}
                      alt="avatar"
                    />
                  </Avatar>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuItem onClick={() => router.push("/dashboard")}>
                  <ChartNoAxesColumn />
                  <span>Dashboard</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <User />
                  <span>My Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>
                  <LogOut />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div className="hidden flex-row gap-4 md:flex">
            <Button
              variant={"ghost"}
              size={"lg"}
              onClick={() => router.push("/auth/sign-up")}
            >
              Sign Up
            </Button>
            <Button size={"lg"} onClick={() => router.push("/auth/sign-in")}>
              Sign In
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
