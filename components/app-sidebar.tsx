"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { LayoutDashboardIcon, AppWindow, CalendarPlus, Images, Receipt, HandFist, Handshake } from "lucide-react";

const data = {
  user: {
    name: "Psycho Society",
    email: "admin@psychosociety.com",
    avatar: "/avatars/psycho-society.jpg",
  },

  navMain: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: <LayoutDashboardIcon />,
      isActive: true,
    },

    {
      title: "Events",
      url: "/admin/dashboard/manage-events",
      icon: <CalendarPlus />,
      // items: [
      //   {
      //     title: "Events",
      //     url: "/admin/events",
      //   },
      //   {
      //     title: "Popups",
      //     url: "/admin/popups",
      //   },
      //   {
      //     title: "Gallery",
      //     url: "/admin/gallery",
      //   },
      // ],
    },

    {
      title: "Gallery",
      url: "/admin/dashboard/manage-gallery",
      icon: <Images />,
    },

    {
      title: "Promotions",
      url: "/admin/dashboard/manage-promo",
      icon: <Receipt />,
    },
  ],

  navSecondary: [
    {
      title: "Support",
      url: "/admin/dashboard/support",
      icon: <HandFist />,
    },
    {
      title: "Customer Agreement",
      url: "/admin/dashboard/contract-agreement",
      icon: <Handshake />,
    },
  ],
};

export function AppSidebar({
                             ...props
                           }: React.ComponentProps<typeof Sidebar>) {
  return (
      <Sidebar variant="inset" {...props}>
        {/* SIDEBAR HEADER */}
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" render={<a href="/admin/dashboard" />}>
                {/* Logo */}
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                  <AppWindow className="size-8" />
                </div>
                {/* Brand */}
                <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-bold">
                  Psycho Society
                </span>
                  <span className="truncate text-xs text-muted-foreground">
                  Admin Panel
                </span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        {/* SIDEBAR CONTENT */}
        <SidebarContent>
          <NavMain items={data.navMain} />
          <NavSecondary items={data.navSecondary} className="mt-auto"/>
        </SidebarContent>

        {/* SIDEBAR FOOTER */}
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
      </Sidebar>
  );
}