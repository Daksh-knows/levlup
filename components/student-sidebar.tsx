"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Bell,
  Calendar,
  FileText,
  Home,
  LogOut,
  MessageSquare,
  PenTool,
  Settings,
  User,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function StudentSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="flex h-14 items-center px-4">
        <div className="flex items-center gap-2 font-semibold">
          <FileText className="h-6 w-6" />
          <span>SecureExam</span>
        </div>
        <SidebarTrigger className="ml-auto md:hidden" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname === "/dashboard-student"}
              tooltip="Dashboard"
            >
              <Link href="/dashboard-student">
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname === "/dashboard-student/exams"}
              tooltip="Exams"
            >
              <Link href="/dashboard-student/exams">
                <Calendar className="h-4 w-4" />
                <span>Exams</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={
                pathname === "/dashboard-student/online-exams" ||
                pathname.startsWith("/dashboard-student/online-exams/")
              }
              tooltip="Online Exams"
            >
              <Link href="/dashboard-student/online-exams">
                <PenTool className="h-4 w-4" />
                <span>Online Exams</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname === "/dashboard-student/results"}
              tooltip="Results"
            >
              <Link href="/dashboard-student/results">
                <BarChart3 className="h-4 w-4" />
                <span>Results</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname === "/dashboard-student/answer-sheets"}
              tooltip="Answer Sheets"
            >
              <Link href="/dashboard-student/answer-sheets">
                <FileText className="h-4 w-4" />
                <span>Answer Sheets</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname === "/dashboard-student/grievances"}
              tooltip="Grievances"
            >
              <Link href="/dashboard-student/grievances">
                <MessageSquare className="h-4 w-4" />
                <span>Grievances</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname === "/dashboard-student/announcements"}
              tooltip="Announcements"
            >
              <Link href="/dashboard-student/announcements">
                <Bell className="h-4 w-4" />
                <span>Announcements</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarSeparator />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname === "/dashboard-student/profile"}
              tooltip="Profile"
            >
              <Link href="/dashboard-student/profile">
                <User className="h-4 w-4" />
                <span>Profile</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname === "/dashboard-student/settings"}
              tooltip="Settings"
            >
              <Link href="/dashboard-student/settings">
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src="/placeholder.svg?height=32&width=32"
              alt="Student"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">John Doe</span>
            <span className="text-xs text-muted-foreground">STU2023001</span>
          </div>
          <Link href="/login" className="ml-auto">
            <LogOut className="h-4 w-4 text-muted-foreground hover:text-foreground" />
          </Link>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
