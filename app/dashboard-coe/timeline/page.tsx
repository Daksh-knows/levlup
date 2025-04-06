"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Clock } from "lucide-react"

// Initial timeline events
const initialEvents = [
  {
    id: 1,
    title: "Mathematics Final Exam",
    date: "2023-06-15",
    time: "09:00 - 11:00",
    description: "Final examination for all mathematics classes",
    type: "exam",
  },
  {
    id: 2,
    title: "Science Mid-term Submission Deadline",
    date: "2023-06-10",
    time: "23:59",
    description: "Deadline for teachers to submit science mid-term papers",
    type: "deadline",
  },
  {
    id: 3,
    title: "English Literature Essay",
    date: "2023-06-20",
    time: "13:00 - 15:00",
    description: "Essay examination for English Literature students",
    type: "exam",
  },
  {
    id: 4,
    title: "History Assignment Grading",
    date: "2023-06-08",
    time: "All day",
    description: "Teachers must complete grading of history assignments",
    type: "deadline",
  },
  {
    id: 5,
    title: "Computer Science Practical Exam",
    date: "2023-06-25",
    time: "10:00 - 13:00",
    description: "Practical examination for Computer Science students",
    type: "exam",
  },
]

export default function TimelinePage() {
  const [events, setEvents] = useState(initialEvents)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    time: "",
    description: "",
    type: "exam",
  })

  const handleAddEvent = () => {
    const event = {
      id: events.length + 1,
      ...newEvent,
    }

    setEvents([...events, event])
    setNewEvent({
      title: "",
      date: "",
      time: "",
      description: "",
      type: "exam",
    })
    setIsDialogOpen(false)
  }

  // Group events by month and day
  const groupedEvents = events.reduce((acc, event) => {
    const date = new Date(event.date)
    const month = date.toLocaleString("default", { month: "long" })
    const day = date.getDate()

    if (!acc[month]) {
      acc[month] = {}
    }

    if (!acc[month][day]) {
      acc[month][day] = []
    }

    acc[month][day].push(event)
    return acc
  }, {})

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Examination Timeline</h1>
          <p className="text-muted-foreground">View and manage examination schedules and deadlines</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Event
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Event</DialogTitle>
              <DialogDescription>Create a new event for the examination timeline</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="event-title">Event Title</Label>
                <Input
                  id="event-title"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  placeholder="Mathematics Final Exam"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="event-date">Date</Label>
                  <Input
                    id="event-date"
                    type="date"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="event-time">Time</Label>
                  <Input
                    id="event-time"
                    placeholder="09:00 - 11:00"
                    value={newEvent.time}
                    onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="event-type">Event Type</Label>
                <Select value={newEvent.type} onValueChange={(value) => setNewEvent({ ...newEvent, type: value })}>
                  <SelectTrigger id="event-type">
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="exam">Exam</SelectItem>
                    <SelectItem value="deadline">Deadline</SelectItem>
                    <SelectItem value="meeting">Meeting</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="event-description">Description</Label>
                <Textarea
                  id="event-description"
                  placeholder="Event details"
                  value={newEvent.description}
                  onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddEvent}>Add Event</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Examination Schedule</CardTitle>
          <CardDescription>View all upcoming examinations and deadlines</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {Object.entries(groupedEvents).map(([month, days]) => (
              <div key={month} className="space-y-4">
                <h3 className="text-lg font-semibold">{month}</h3>
                <div className="space-y-4">
                  {Object.entries(days)
                    .sort((a, b) => Number(a[0]) - Number(b[0]))
                    .map(([day, dayEvents]) => (
                      <div key={day} className="flex">
                        <div className="mr-4 flex flex-col items-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary bg-primary/10 text-primary">
                            {day}
                          </div>
                          <div className="mt-1 h-full w-px bg-border" />
                        </div>
                        <div className="space-y-3 pt-1">
                          {dayEvents.map((event) => (
                            <div key={event.id} className="rounded-lg border p-4">
                              <div className="flex items-start justify-between">
                                <div>
                                  <h4 className="text-base font-semibold">{event.title}</h4>
                                  <div className="mt-1 flex items-center text-sm text-muted-foreground">
                                    <Clock className="mr-1 h-4 w-4" />
                                    {event.time}
                                  </div>
                                </div>
                                <div
                                  className={`rounded-full px-2 py-1 text-xs font-medium ${
                                    event.type === "exam"
                                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                      : event.type === "deadline"
                                        ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                                        : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                  }`}
                                >
                                  {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                                </div>
                              </div>
                              <p className="mt-2 text-sm text-muted-foreground">{event.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

