"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Download, ExternalLink } from "lucide-react"

interface ResultsListProps {
  semester: "current" | "all"
}

const currentResults = [
  {
    id: 1,
    subject: "Algorithms",
    code: "CS302",
    grade: "A",
    score: 92,
    credits: 4,
    verified: true,
  },
  {
    id: 2,
    subject: "Operating Systems",
    code: "CS304",
    grade: "A-",
    score: 88,
    credits: 4,
    verified: true,
  },
  {
    id: 3,
    subject: "Software Engineering",
    code: "CS306",
    grade: "B+",
    score: 85,
    credits: 3,
    verified: true,
  },
  {
    id: 4,
    subject: "Computer Graphics",
    code: "CS308",
    grade: "A",
    score: 94,
    credits: 3,
    verified: true,
  },
]

const allResults = [
  ...currentResults,
  {
    id: 5,
    subject: "Discrete Mathematics",
    code: "CS201",
    grade: "A",
    score: 95,
    credits: 3,
    verified: true,
    semester: "Fall 2022",
  },
  {
    id: 6,
    subject: "Data Structures",
    code: "CS202",
    grade: "B+",
    score: 87,
    credits: 4,
    verified: true,
    semester: "Fall 2022",
  },
  {
    id: 7,
    subject: "Computer Architecture",
    code: "CS203",
    grade: "A-",
    score: 89,
    credits: 3,
    verified: true,
    semester: "Fall 2022",
  },
]

export function ResultsList({ semester }: ResultsListProps) {
  const results = semester === "current" ? currentResults : allResults

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Subject</TableHead>
            {semester === "all" && <TableHead>Semester</TableHead>}
            <TableHead>Grade</TableHead>
            <TableHead className="hidden md:table-cell">Score</TableHead>
            <TableHead className="hidden md:table-cell">Credits</TableHead>
            <TableHead>Verification</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map((result) => (
            <TableRow key={result.id}>
              <TableCell className="font-medium">
                <div>{result.subject}</div>
                <div className="text-sm text-muted-foreground">{result.code}</div>
              </TableCell>
              {semester === "all" && <TableCell>{result.semester || "Spring 2023"}</TableCell>}
              <TableCell>
                <Badge variant="outline" className="font-bold">
                  {result.grade}
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">{result.score}/100</TableCell>
              <TableCell className="hidden md:table-cell">{result.credits}</TableCell>
              <TableCell>
                {result.verified ? (
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
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">View Details</span>
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

