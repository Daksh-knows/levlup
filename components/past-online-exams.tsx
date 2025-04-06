"use client"

import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Download, FileText } from "lucide-react"

const pastExams = [
  {
    id: "exam-4",
    subject: "Algorithms",
    code: "CS302",
    date: "April 10, 2023",
    time: "1:00 PM - 3:00 PM",
    duration: "2 hours",
    score: "85/100",
    grade: "A-",
    status: "completed",
  },
  {
    id: "exam-5",
    subject: "Operating Systems",
    code: "CS304",
    date: "April 5, 2023",
    time: "10:00 AM - 12:00 PM",
    duration: "2 hours",
    score: "90/100",
    grade: "A",
    status: "completed",
  },
  {
    id: "exam-6",
    subject: "Software Engineering",
    code: "CS306",
    date: "March 20, 2023",
    time: "2:00 PM - 4:00 PM",
    duration: "2 hours",
    score: "88/100",
    grade: "A-",
    status: "completed",
  },
]

export function PastOnlineExams() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Subject</TableHead>
            <TableHead>Date & Time</TableHead>
            <TableHead>Score</TableHead>
            <TableHead className="hidden md:table-cell">Grade</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pastExams.map((exam) => (
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
              <TableCell>
                <Badge variant="default">{exam.score}</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Badge variant="outline" className="font-bold">
                  {exam.grade}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={`/dashboard/answer-sheets/view/${exam.id}`}>
                      <FileText className="h-4 w-4" />
                      <span className="sr-only">View Answer Sheet</span>
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

