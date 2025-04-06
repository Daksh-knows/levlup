"use client"

import { useState } from "react"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, CheckCircle2, Download, Eye } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const answerSheets = [
  {
    id: 1,
    subject: "Data Structures",
    code: "CS301",
    date: "May 15, 2023",
    score: "92/100",
    verified: true,
  },
  {
    id: 2,
    subject: "Database Management",
    code: "CS305",
    date: "May 20, 2023",
    score: "88/100",
    verified: true,
  },
  {
    id: 3,
    subject: "Computer Networks",
    code: "CS310",
    date: "May 25, 2023",
    score: "Pending",
    verified: true,
  },
  {
    id: 4,
    subject: "Algorithms",
    code: "CS302",
    date: "April 10, 2023",
    score: "85/100",
    verified: true,
  },
  {
    id: 5,
    subject: "Operating Systems",
    code: "CS304",
    date: "April 5, 2023",
    score: "90/100",
    verified: true,
  },
]

export function AnswerSheetList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterType, setFilterType] = useState("all")

  const filteredAnswerSheets = answerSheets.filter((sheet) => {
    const matchesSearch =
      sheet.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sheet.code.toLowerCase().includes(searchTerm.toLowerCase())

    if (filterType === "all") return matchesSearch
    if (filterType === "scored") return matchesSearch && sheet.score !== "Pending"
    if (filterType === "pending") return matchesSearch && sheet.score === "Pending"

    return matchesSearch
  })

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Input
            placeholder="Search by subject or code..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Answer Sheets</SelectItem>
            <SelectItem value="scored">Scored</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Subject</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Verification</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAnswerSheets.map((sheet) => (
              <TableRow key={sheet.id}>
                <TableCell className="font-medium">
                  <div>{sheet.subject}</div>
                  <div className="text-sm text-muted-foreground">{sheet.code}</div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{sheet.date}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={sheet.score === "Pending" ? "outline" : "default"}>{sheet.score}</Badge>
                </TableCell>
                <TableCell>
                  {sheet.verified ? (
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-500">Verified</span>
                    </div>
                  ) : (
                    <Badge variant="outline">Pending</Badge>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={`/dashboard/answer-sheets/view/${sheet.id}`}>
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View</span>
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
    </div>
  )
}

