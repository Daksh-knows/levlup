"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Eye } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

const grievances = [
  {
    id: "GRV-2023-0042",
    type: "Result Discrepancy",
    exam: "Data Structures (CS301)",
    date: "May 16, 2023",
    status: "Under Review",
    priority: "High",
  },
  {
    id: "GRV-2023-0038",
    type: "Answer Evaluation Issue",
    exam: "Algorithms (CS302)",
    date: "April 12, 2023",
    status: "Resolved",
    priority: "Medium",
  },
  {
    id: "GRV-2023-0035",
    type: "Technical Issue During Exam",
    exam: "Operating Systems (CS304)",
    date: "April 6, 2023",
    status: "Resolved",
    priority: "High",
  },
  {
    id: "GRV-2023-0030",
    type: "Proctoring Issue",
    exam: "Database Management (CS305)",
    date: "March 25, 2023",
    status: "Rejected",
    priority: "Low",
  },
]

export function GrievanceList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredGrievances = grievances.filter((grievance) => {
    const matchesSearch =
      grievance.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      grievance.exam.toLowerCase().includes(searchTerm.toLowerCase()) ||
      grievance.type.toLowerCase().includes(searchTerm.toLowerCase())

    if (statusFilter === "all") return matchesSearch
    return matchesSearch && grievance.status.toLowerCase() === statusFilter.toLowerCase()
  })

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Input
            placeholder="Search grievances..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="under review">Under Review</SelectItem>
            <SelectItem value="resolved">Resolved</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Exam</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredGrievances.map((grievance) => (
              <TableRow key={grievance.id}>
                <TableCell className="font-medium">{grievance.id}</TableCell>
                <TableCell>{grievance.type}</TableCell>
                <TableCell>{grievance.exam}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{grievance.date}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      grievance.status === "Under Review"
                        ? "outline"
                        : grievance.status === "Resolved"
                          ? "default"
                          : "secondary"
                    }
                  >
                    {grievance.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      grievance.priority === "High"
                        ? "border-red-500 text-red-500"
                        : grievance.priority === "Medium"
                          ? "border-yellow-500 text-yellow-500"
                          : "border-blue-500 text-blue-500"
                    }
                  >
                    {grievance.priority}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">View</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

