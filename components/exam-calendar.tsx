"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample exam dates
const examDates = [
  new Date(2023, 4, 15), // May 15, 2023
  new Date(2023, 4, 20), // May 20, 2023
  new Date(2023, 4, 25), // May 25, 2023
]

export function ExamCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Function to check if a date has an exam
  const hasExam = (date: Date) => {
    return examDates.some(
      (examDate) =>
        examDate.getDate() === date.getDate() &&
        examDate.getMonth() === date.getMonth() &&
        examDate.getFullYear() === date.getFullYear(),
    )
  }

  return (
    <div className="flex flex-col gap-6 md:flex-row">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        modifiers={{
          exam: examDates,
        }}
        modifiersStyles={{
          exam: {
            fontWeight: "bold",
            backgroundColor: "hsl(var(--primary) / 0.1)",
            color: "hsl(var(--primary))",
            borderRadius: "0",
          },
        }}
      />

      <Card className="flex-1">
        <CardContent className="pt-6">
          <h3 className="font-medium mb-4">
            {date
              ? date.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "Select a date"}
          </h3>

          {date && hasExam(date) ? (
            <div className="space-y-4">
              {/* This would be dynamically generated based on the selected date */}
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Data Structures</h4>
                  <Badge>10:00 AM</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Hall A, Computer Science Building</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge variant="outline">2 hours</Badge>
                  <Badge variant="outline">Closed Book</Badge>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-muted-foreground">No exams scheduled for this date.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

