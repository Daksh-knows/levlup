"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Bell, ChevronDown, FileText, Home, Inbox } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NotificationsPanel } from "@/components/notifications-panel";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: Home,
    href: "/dashboard-teacher",
  },
  {
    id: "approved",
    label: "Approved Requests",
    icon: FileText,
    href: "/dashboard-teacher/approved-requests",
  },
  {
    id: "submitted",
    label: "Submitted Papers",
    icon: Inbox,
    href: "/dashboard-teacher/submitted-papers",
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: Bell,
    href: "/dashboard-teacher/notifications",
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const pathname = usePathname();
  const [active, setActive] = useState("");

  useEffect(() => {
    // Set active based on current path
    const currentPath = pathname;
    const activeItem = menuItems.find(
      (item) =>
        currentPath === item.href ||
        (item.href !== "/dashboard-teacher" &&
          currentPath.startsWith(item.href))
    );

    if (activeItem) {
      setActive(activeItem.id);
    } else {
      setActive("dashboard");
    }
  }, [pathname]);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar - always visible */}
      <div className="w-64 border-r border-border bg-card">
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center border-b border-border px-6">
            <h2 className="text-lg font-semibold text-primary">
              Teacher Dashboard
            </h2>
          </div>
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
                      active === item.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="border-t border-border p-4">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="Prof. Sharma"
                />
                <AvatarFallback>PS</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Prof. Sharma</p>
                <p className="text-xs text-muted-foreground">
                  Computer Science Dept.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        {/* Navbar */}
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border bg-card px-6">
          <h1 className="text-2xl font-semibold">
            {menuItems.find((item) => item.id === active)?.label || "Dashboard"}
          </h1>
          <div className="flex items-center gap-4">
            <Sheet open={notificationsOpen} onOpenChange={setNotificationsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-destructive"></span>
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md">
                <NotificationsPanel />
              </SheetContent>
            </Sheet>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="Prof. Sharma"
                />
                <AvatarFallback>PS</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Prof. Sharma</p>
                <p className="text-xs text-muted-foreground">
                  Computer Science Dept.
                </p>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
