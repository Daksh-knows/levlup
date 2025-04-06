"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Laptop } from "lucide-react"

const upcomingExams = [
  {
    id: "exam-1",
    subject: "Data Structures",
    code: "CS301",
    date: "May 15, 2023",
    time: "10:00 AM - 12:00 PM",
    duration: "2 hours",
    status: "upcoming",
    readiness: "ready",
  },
  {
    id: "exam-2",
    subject: "Database Management",
    code: "CS305",
    date: "May 20, 2023",
    time: "2:00 PM - 4:00 PM",
    duration: "2 hours",
    status: "upcoming",
    readiness: "system-check-required",
  },
  {
    id: "exam-3",
    subject: "Computer Networks",
    code: "CS310",
    date: "May 25, 2023",
    time: "9:00 AM - 11:00 AM",
    duration: "2 hours",
    status: "upcoming",
    readiness: "not-ready",
  },
]

export function UpcomingOnlineExams() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {upcomingExams.map((exam) => (
        <Card key={exam.id} className="flex flex-col">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge variant="outline">{exam.code}</Badge>
              <Badge
                variant={
                  exam.readiness === "ready"
                    ? "default"
                    : exam.readiness === "system-check-required"
                      ? "secondary"
                      : "outline"
                }
              >
                {exam.readiness === "ready"
                  ? "Ready"
                  : exam.readiness === "system-check-required"
                    ? "System Check Required"
                    : "Not Ready"}
              </Badge>
            </div>
            <CardTitle>{exam.subject}</CardTitle>
            <CardDescription>Online Examination</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>{exam.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>{exam.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <Laptop className="h-4 w-4 text-muted-foreground" />
                <span>Duration: {exam.duration}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href={`/dashboard/online-exams/${exam.id}`}>
                {exam.readiness === "ready"
                  ? "Enter Exam"
                  : exam.readiness === "system-check-required"
                    ? "Complete System Check"
                    : "Prepare for Exam"}
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

