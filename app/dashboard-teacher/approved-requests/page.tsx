import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ApprovedRequests() {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        {/* My Approved Paper Requests */}
        <Card className="shadow-md">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              My Approved Paper Requests
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Exam Name</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Deadline</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium">Mid-Term Examination</TableCell>
                    <TableCell>Database Systems</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                        May 20, 2025
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="bg-yellow-950/30 text-yellow-400 hover:bg-yellow-950/30 border-yellow-800/50"
                      >
                        Not Started
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button size="sm">Start Paper</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium">Quiz 2</TableCell>
                    <TableCell>Web Development</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-red-500"></span>
                        April 30, 2025
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="bg-blue-950/30 text-blue-400 hover:bg-blue-950/30 border-blue-800/50"
                      >
                        In Progress
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium">Assignment 3</TableCell>
                    <TableCell>Machine Learning</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-green-500"></span>
                        May 5, 2025
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="bg-green-950/30 text-green-400 hover:bg-green-950/30 border-green-800/50"
                      >
                        Submitted
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button size="sm">View</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium">Final Exam</TableCell>
                    <TableCell>Artificial Intelligence</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
                        June 15, 2025
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="bg-yellow-950/30 text-yellow-400 hover:bg-yellow-950/30 border-yellow-800/50"
                      >
                        Not Started
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button size="sm">Start Paper</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium">Mid-Term</TableCell>
                    <TableCell>Computer Networks</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                        May 10, 2025
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="bg-blue-950/30 text-blue-400 hover:bg-blue-950/30 border-blue-800/50"
                      >
                        In Progress
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button size="sm">Edit</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

