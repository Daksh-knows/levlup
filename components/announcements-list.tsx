"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarClock, ChevronRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const announcements = [
  {
    id: 1,
    title: "Final Exam Schedule Published",
    date: "May 1, 2023",
    category: "Exams",
    isNew: true,
    content:
      "The final examination schedule for the Spring 2023 semester has been published. Please check your exam dates and locations carefully. All students must arrive 30 minutes before the scheduled exam time with their student ID cards.",
  },
  {
    id: 2,
    title: "System Maintenance Notice",
    date: "April 28, 2023",
    category: "System",
    isNew: true,
    content:
      "The student portal will be undergoing scheduled maintenance on May 5th from 2:00 AM to 6:00 AM. During this time, all services including result checking and exam registration will be unavailable.",
  },
  {
    id: 3,
    title: "Updated Academic Calendar",
    date: "April 25, 2023",
    category: "Academic",
    isNew: false,
    content:
      "The academic calendar for the upcoming Fall 2023 semester has been updated. Please note that the semester will begin one week earlier than previously announced. Registration will open on July 15th.",
  },
  {
    id: 4,
    title: "New Blockchain Verification System",
    date: "April 20, 2023",
    category: "System",
    isNew: false,
    content:
      "We are pleased to announce the implementation of our new blockchain-based verification system for academic records. This system ensures the integrity and security of all student transcripts and certificates.",
  },
  {
    id: 5,
    title: "Summer Internship Opportunities",
    date: "April 15, 2023",
    category: "Career",
    isNew: false,
    content:
      "Several technology companies have posted summer internship opportunities exclusively for our students. Visit the career portal to view these positions and apply before May 10th.",
  },
]

export function AnnouncementsList() {
  return (
    <div className="space-y-6">
      {announcements.map((announcement) => (
        <Card key={announcement.id}>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>{announcement.title}</CardTitle>
              {announcement.isNew && <Badge className="bg-primary">New</Badge>}
            </div>
            <CardDescription className="flex items-center gap-2">
              <CalendarClock className="h-4 w-4" />
              <span>{announcement.date}</span>
              <Badge variant="outline">{announcement.category}</Badge>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{announcement.content}</p>
            <div className="mt-4 flex justify-end">
              <Button variant="ghost" size="sm" className="gap-1">
                <span>Read More</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
          {announcement.id < announcements.length && <Separator />}
        </Card>
      ))}
    </div>
  )
}

