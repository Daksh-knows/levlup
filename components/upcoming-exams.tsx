"use client"

import { Calendar, Clock, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const exams = [
  {
    id: 1,
    subject: "Data Structures",
    date: "May 15, 2023",
    time: "10:00 AM - 12:00 PM",
    location: "Hall A, Computer Science Building",
    status: "upcoming",
  },
  {
    id: 2,
    subject: "Database Management",
    date: "May 20, 2023",
    time: "2:00 PM - 4:00 PM",
    location: "Room 302, Engineering Building",
    status: "upcoming",
  },
  {
    id: 3,
    subject: "Computer Networks",
    date: "May 25, 2023",
    time: "9:00 AM - 11:00 AM",
    location: "Hall B, Computer Science Building",
    status: "upcoming",
  },
]

export function UpcomingExams() {
  return (
    <div className="space-y-4">
      {exams.map((exam, index) => (
        <div key={exam.id} className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">{exam.subject}</h3>
            <Badge variant={exam.status === "upcoming" ? "outline" : "secondary"}>
              {exam.status === "upcoming" ? "Upcoming" : "Completed"}
            </Badge>
          </div>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{exam.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{exam.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{exam.location}</span>
            </div>
          </div>
          {index < exams.length - 1 && <Separator className="mt-4" />}
        </div>
      ))}
    </div>
  )
}

