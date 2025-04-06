"use client"

import { CalendarClock } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

const announcements = [
  {
    id: 1,
    title: "Final Exam Schedule Published",
    date: "May 1, 2023",
    category: "Exams",
    isNew: true,
  },
  {
    id: 2,
    title: "System Maintenance Notice",
    date: "April 28, 2023",
    category: "System",
    isNew: true,
  },
  {
    id: 3,
    title: "Updated Academic Calendar",
    date: "April 25, 2023",
    category: "Academic",
    isNew: false,
  },
  {
    id: 4,
    title: "New Blockchain Verification System",
    date: "April 20, 2023",
    category: "System",
    isNew: false,
  },
]

export function RecentAnnouncements() {
  return (
    <div className="space-y-4">
      {announcements.map((announcement, index) => (
        <div key={announcement.id} className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">{announcement.title}</h3>
            {announcement.isNew && (
              <Badge variant="default" className="bg-primary">
                New
              </Badge>
            )}
          </div>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CalendarClock className="h-4 w-4" />
              <span>{announcement.date}</span>
            </div>
            <Badge variant="outline">{announcement.category}</Badge>
          </div>
          {index < announcements.length - 1 && <Separator className="mt-4" />}
        </div>
      ))}
    </div>
  )
}

