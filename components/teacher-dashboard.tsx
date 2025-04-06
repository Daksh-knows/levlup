"use client";

import { useState } from "react";
import {
  Bell,
  ChevronDown,
  FileText,
  Home,
  Inbox,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TeacherDashboard() {
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar - always visible */}
      <div className="w-64 border-r bg-white dark:bg-gray-800 dark:border-gray-700">
        <Sidebar />
      </div>

      <div className="flex flex-1 flex-col">
        {/* Navbar */}
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-white px-6 dark:bg-black dark:border-gray-700">
          <h1 className="text-2xl font-semibold">Teacher Dashboard</h1>
          <div className="flex items-center gap-4">
            <Sheet open={notificationsOpen} onOpenChange={setNotificationsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-red-500"></span>
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
                <p className="text-xs text-gray-500">Computer Science Dept.</p>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="grid gap-6">
            {/* Incoming Paper Requests */}
            <Card className="shadow-md">
              <CardHeader className="bg-gray-50 dark:bg-black pb-3">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Inbox className="h-5 w-5 text-primary" />
                  Incoming Paper Requests
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50 dark:bg-black">
                        <TableHead>Exam Name</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Deadline</TableHead>
                        <TableHead>Sent By</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                        <TableCell className="font-medium">
                          Mid-Term Examination
                        </TableCell>
                        <TableCell>Computer Science</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                            May 15, 2025
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarFallback>DP</AvatarFallback>
                            </Avatar>
                            Dr. Patel
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button size="sm">Approve</Button>
                            <Button size="sm" variant="destructive">
                              Reject
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                        <TableCell className="font-medium">
                          Final Examination
                        </TableCell>
                        <TableCell>Data Structures</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-green-500"></span>
                            June 10, 2025
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarFallback>DS</AvatarFallback>
                            </Avatar>
                            Dr. Singh
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button size="sm">Approve</Button>
                            <Button size="sm" variant="destructive">
                              Reject
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                        <TableCell className="font-medium">Quiz 3</TableCell>
                        <TableCell>Algorithms</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-red-500"></span>
                            April 28, 2025
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarFallback>DK</AvatarFallback>
                            </Avatar>
                            Dr. Kumar
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button size="sm">Approve</Button>
                            <Button size="sm" variant="destructive">
                              Reject
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* My Approved Paper Requests */}
            <Card className="shadow-md">
              <CardHeader className="bg-gray-50 dark:bg-black pb-3">
                <CardTitle className="text-xl flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  My Approved Paper Requests
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50 dark:bg-black">
                        <TableHead>Exam Name</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Deadline</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                        <TableCell className="font-medium">
                          Mid-Term Examination
                        </TableCell>
                        <TableCell>Database Systems</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                            May 20, 2025
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 border-yellow-200">
                            Not Started
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button size="sm">Start Paper</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                        <TableCell className="font-medium">Quiz 2</TableCell>
                        <TableCell>Web Development</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-red-500"></span>
                            April 30, 2025
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-black-100 text-black-800 hover:bg-black-100 border-black-200">
                            In Progress
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button size="sm">Edit</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                        <TableCell className="font-medium">
                          Assignment 3
                        </TableCell>
                        <TableCell>Machine Learning</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-green-500"></span>
                            May 5, 2025
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 border-green-200">
                            Submitted
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button size="sm">View</Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* My Submitted Papers */}
            <Card className="shadow-md">
              <CardHeader className="bg-gray-50 dark:bg-black pb-3">
                <CardTitle className="text-xl flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  My Submitted Papers
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50 dark:bg-black">
                        <TableHead>Subject</TableHead>
                        <TableHead>Exam</TableHead>
                        <TableHead>Submitted On</TableHead>
                        <TableHead>Blockchain Hash</TableHead>
                        <TableHead>Verified By</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                        <TableCell className="font-medium">
                          Computer Networks
                        </TableCell>
                        <TableCell>Mid-Term</TableCell>
                        <TableCell>March 15, 2025</TableCell>
                        <TableCell>
                          <code className="rounded bg-gray-100 px-2 py-1 text-xs dark:bg-gray-800">
                            0x8f72b4...e29a
                          </code>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarFallback>RV</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm">Rahul Verma</p>
                              <p className="text-xs text-gray-500">
                                ID: 2023045
                              </p>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                        <TableCell className="font-medium">
                          Operating Systems
                        </TableCell>
                        <TableCell>Quiz 1</TableCell>
                        <TableCell>February 28, 2025</TableCell>
                        <TableCell>
                          <code className="rounded bg-gray-100 px-2 py-1 text-xs dark:bg-gray-800">
                            0x3a91c7...f45b
                          </code>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarFallback>PG</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm">Priya Gupta</p>
                              <p className="text-xs text-gray-500">
                                ID: 2023078
                              </p>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                        <TableCell className="font-medium">
                          Software Engineering
                        </TableCell>
                        <TableCell>Assignment 2</TableCell>
                        <TableCell>February 10, 2025</TableCell>
                        <TableCell>
                          <code className="rounded bg-gray-100 px-2 py-1 text-xs dark:bg-gray-800">
                            0x6d45e2...a12c
                          </code>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarFallback>AS</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm">Amit Shah</p>
                              <p className="text-xs text-gray-500">
                                ID: 2023112
                              </p>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

function Sidebar() {
  const [active, setActive] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "approved", label: "Approved Requests", icon: FileText },
    { id: "submitted", label: "Submitted Papers", icon: Inbox },
    { id: "notifications", label: "Notifications", icon: Bell },
  ];

  return (
    <div className="flex h-full flex-col bg-black">
      <div className="flex h-16 items-center border-b px-6">
        <h2 className="text-lg font-semibold text-primary">
          Teacher Dashboard
        </h2>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
                  active === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-gray-700 hover:bg-gray-100 hover:text-black dark:text-gray-300 bg-black"
                }`}
                onClick={() => setActive(item.id)}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-t p-4">
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
            <p className="text-xs text-gray-500">Computer Science Dept.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NotificationsPanel() {
  const notifications = [
    {
      id: 1,
      title: "Approval Pending",
      message:
        "Your paper for 'Data Structures Final Exam' is pending approval from the department head.",
      time: "10 minutes ago",
      unread: true,
      type: "warning",
    },
    {
      id: 2,
      title: "Paper Submitted",
      message:
        "You have successfully submitted the 'Computer Networks Mid-Term' paper.",
      time: "2 hours ago",
      unread: true,
      type: "success",
    },
    {
      id: 3,
      title: "Deadline Reminder",
      message: "The deadline for 'Algorithms Quiz 3' is approaching in 2 days.",
      time: "5 hours ago",
      unread: false,
      type: "warning",
    },
    {
      id: 4,
      title: "New Paper Request",
      message:
        "You have received a new paper request for 'Database Systems' from Dr. Patel.",
      time: "Yesterday",
      unread: false,
      type: "info",
    },
    {
      id: 5,
      title: "Verification Complete",
      message:
        "Your 'Operating Systems Quiz 1' paper has been verified by Priya Gupta.",
      time: "2 days ago",
      unread: false,
      type: "success",
    },
  ];

  const getNotificationStyles = (type, unread) => {
    const baseStyles = "relative rounded-lg p-4 border-l-4 ";

    if (unread) {
      switch (type) {
        case "success":
          return (
            baseStyles + "bg-green-50 border-green-500 dark:bg-green-900/20"
          );
        case "warning":
          return (
            baseStyles + "bg-yellow-50 border-yellow-500 dark:bg-yellow-900/20"
          );
        case "info":
          return (
            baseStyles + "bg-black-50 border-black-500 dark:bg-black-900/20"
          );
        default:
          return baseStyles + "bg-gray-50 border-gray-500 dark:bg-gray-800/50";
      }
    } else {
      switch (type) {
        case "success":
          return (
            baseStyles + "bg-green-50/50 border-green-300 dark:bg-green-900/10"
          );
        case "warning":
          return (
            baseStyles +
            "bg-yellow-50/50 border-yellow-300 dark:bg-yellow-900/10"
          );
        case "info":
          return (
            baseStyles + "bg-black-50/50 border-black-300 dark:bg-black-900/10"
          );
        default:
          return (
            baseStyles + "bg-gray-50/50 border-gray-300 dark:bg-gray-800/30"
          );
      }
    }
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between pb-4 pt-2">
        <h3 className="text-lg font-semibold">Notifications</h3>
        <Button variant="outline" size="sm">
          Mark all as read
        </Button>
      </div>
      <Separator />
      <div className="flex-1 overflow-auto py-4">
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={getNotificationStyles(
                notification.type,
                notification.unread
              )}
            >
              {notification.unread && (
                <span className="absolute right-4 top-4 h-2 w-2 rounded-full bg-black-500"></span>
              )}
              <h4 className="font-medium">{notification.title}</h4>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {notification.message}
              </p>
              <p className="mt-2 text-xs text-gray-500">{notification.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
