"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Download, MapPin } from "lucide-react"

const exams = [
  {
    id: 1,
    subject: "Data Structures",
    code: "CS301",
    date: "May 15, 2023",
    time: "10:00 AM - 12:00 PM",
    location: "Hall A, Computer Science Building",
    status: "upcoming",
  },
  {
    id: 2,
    subject: "Database Management",
    code: "CS305",
    date: "May 20, 2023",
    time: "2:00 PM - 4:00 PM",
    location: "Room 302, Engineering Building",
    status: "upcoming",
  },
  {
    id: 3,
    subject: "Computer Networks",
    code: "CS310",
    date: "May 25, 2023",
    time: "9:00 AM - 11:00 AM",
    location: "Hall B, Computer Science Building",
    status: "upcoming",
  },
  {
    id: 4,
    subject: "Algorithms",
    code: "CS302",
    date: "April 10, 2023",
    time: "1:00 PM - 3:00 PM",
    location: "Hall A, Computer Science Building",
    status: "completed",
  },
  {
    id: 5,
    subject: "Operating Systems",
    code: "CS304",
    date: "April 5, 2023",
    time: "10:00 AM - 12:00 PM",
    location: "Room 201, Engineering Building",
    status: "completed",
  },
]

export function ExamList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Subject</TableHead>
            <TableHead>Date & Time</TableHead>
            <TableHead className="hidden md:table-cell">Location</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {exams.map((exam) => (
            <TableRow key={exam.id}>
              <TableCell className="font-medium">
                <div>{exam.subject}</div>
                <div className="text-sm text-muted-foreground">{exam.code}</div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{exam.date}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{exam.time}</span>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{exam.location}</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant={exam.status === "upcoming" ? "outline" : "secondary"}>
                  {exam.status === "upcoming" ? "Upcoming" : "Completed"}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Download</span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

