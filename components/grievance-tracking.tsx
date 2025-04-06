"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Search, ShieldCheck, User } from "lucide-react"

export function GrievanceTracking() {
  const [grievanceId, setGrievanceId] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [grievanceData, setGrievanceData] = useState<any>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSearching(true)

    // Simulate API call
    setTimeout(() => {
      setIsSearching(false)

      // Mock data for demonstration
      if (grievanceId === "GRV-2023-0042") {
        setGrievanceData({
          id: "GRV-2023-0042",
          type: "Result Discrepancy",
          exam: "Data Structures (CS301)",
          date: "May 16, 2023",
          status: "Under Review",
          priority: "High",
          description:
            "I believe there is an error in the evaluation of question 7. My answer matches the correct solution but was marked incorrect.",
          timeline: [
            {
              date: "May 16, 2023 - 10:23 AM",
              status: "Submitted",
              description: "Grievance submitted by student",
              actor: "John Doe (Student)",
            },
            {
              date: "May 16, 2023 - 2:45 PM",
              status: "Received",
              description: "Grievance received by examination department",
              actor: "Examination Department",
            },
            {
              date: "May 17, 2023 - 9:30 AM",
              status: "Under Review",
              description: "Assigned to evaluator for review",
              actor: "Dr. Smith (Evaluator)",
            },
          ],
          blockchainHash: "0x7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069",
        })
      } else {
        setGrievanceData(null)
      }
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Track Your Grievance</CardTitle>
          <CardDescription>Enter your grievance ID to track its status</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input
              placeholder="Enter Grievance ID (e.g., GRV-2023-0042)"
              value={grievanceId}
              onChange={(e) => setGrievanceId(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" disabled={!grievanceId || isSearching}>
              {isSearching ? "Searching..." : "Track"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {isSearching && (
        <div className="flex items-center justify-center py-8">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      )}

      {!isSearching && grievanceData && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Grievance Details</CardTitle>
              <Badge
                variant={
                  grievanceData.status === "Under Review"
                    ? "outline"
                    : grievanceData.status === "Resolved"
                      ? "default"
                      : "secondary"
                }
              >
                {grievanceData.status}
              </Badge>
            </div>
            <CardDescription>Submitted on {grievanceData.date}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Grievance ID</h3>
                <p className="font-medium">{grievanceData.id}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Type</h3>
                <p className="font-medium">{grievanceData.type}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Related Exam</h3>
                <p className="font-medium">{grievanceData.exam}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Priority</h3>
                <Badge
                  variant="outline"
                  className={
                    grievanceData.priority === "High"
                      ? "border-red-500 text-red-500"
                      : grievanceData.priority === "Medium"
                        ? "border-yellow-500 text-yellow-500"
                        : "border-blue-500 text-blue-500"
                  }
                >
                  {grievanceData.priority}
                </Badge>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Description</h3>
              <p className="mt-1 rounded-md bg-muted p-3">{grievanceData.description}</p>
            </div>

            <Separator />

            <div>
              <h3 className="mb-4 font-medium">Timeline</h3>
              <div className="space-y-4">
                {grievanceData.timeline.map((event: any, index: number) => (
                  <div key={index} className="relative pl-6">
                    <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-primary"></div>
                    {index < grievanceData.timeline.length - 1 && (
                      <div className="absolute left-1.5 top-4 h-full w-px -translate-x-1/2 bg-border"></div>
                    )}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{event.status}</span>
                        <span className="text-xs text-muted-foreground">{event.date}</span>
                      </div>
                      <p className="text-sm">{event.description}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <User className="h-3 w-3" />
                        <span>{event.actor}</span>
                      </div>
                    </div>
                  </div>
                ))}

                {grievanceData.status !== "Resolved" && (
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-1 h-3 w-3 rounded-full border border-dashed border-muted-foreground"></div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Pending Resolution</span>
                        <span className="text-xs text-muted-foreground">Estimated: 3-5 working days</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Awaiting final decision from the examination committee
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between rounded-md bg-muted p-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Blockchain Verification</span>
              </div>
              <span className="text-xs text-muted-foreground">
                Hash: {grievanceData.blockchainHash.substring(0, 10)}...
              </span>
            </div>
          </CardContent>
        </Card>
      )}

      {!isSearching && grievanceId && !grievanceData && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-8">
            <Search className="h-8 w-8 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">No Results Found</h3>
            <p className="text-center text-muted-foreground">
              We couldn't find a grievance with ID "{grievanceId}". Please check the ID and try again.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

