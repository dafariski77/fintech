"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  GraduationCap,
  LayoutGrid,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/Sidebar";
import { useSession } from "next-auth/react";

// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session } = useSession();

  const data = {
    user: {
      name: session?.user.name,
      email: session?.user.email,
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [
      {
        name: "Acme Inc",
        logo: GalleryVerticalEnd,
        plan: "Enterprise",
      },
      {
        name: "Acme Corp.",
        logo: AudioWaveform,
        plan: "Startup",
      },
      {
        name: "Evil Corp.",
        logo: Command,
        plan: "Free",
      },
    ],
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutGrid,
        isActive: true,
      },
      {
        title: "Manage Courses",
        url: "/dashboard/courses",
        icon: GraduationCap,
        isActive: true,
        items: [
          {
            title: "Courses",
            url: "/dashboard/courses",
          },
          {
            title: "Categories",
            url: "/dashboard/categories",
          },
          {
            title: "Curriculum",
            url: "/dashboard/courses/curriculum",
          },
          {
            title: "Materials",
            url: "/dashboard/courses/materials",
          },
        ],
      },
      {
        title: "Students",
        url: "/dashboard/courses",
        icon: GraduationCap,
        isActive: true,
        items: [
          {
            title: "Enrolled Students",
            url: "/dashboard/courses/students",
          },
        ],
      },
    ],
  };
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
