"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Lock, Printer } from "lucide-react"

export function ResultsTranscript() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle>Official Transcript</CardTitle>
            <CardDescription>Blockchain-verified academic record</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Printer className="h-4 w-4" />
              <span>Print</span>
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Download className="h-4 w-4" />
              <span>Download</span>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="bg-muted p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Student Information</h3>
                  <div className="mt-2 space-y-1 text-sm">
                    <p>
                      <span className="font-medium">Name:</span> John Doe
                    </p>
                    <p>
                      <span className="font-medium">Student ID:</span> STU2023001
                    </p>
                    <p>
                      <span className="font-medium">Program:</span> Bachelor of Science in Computer Science
                    </p>
                    <p>
                      <span className="font-medium">Enrollment Date:</span> September 1, 2021
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Academic Summary</h3>
                  <div className="mt-2 space-y-1 text-sm">
                    <p>
                      <span className="font-medium">Current GPA:</span> 3.75/4.0
                    </p>
                    <p>
                      <span className="font-medium">Credits Completed:</span> 72
                    </p>
                    <p>
                      <span className="font-medium">Credits Required:</span> 120
                    </p>
                    <p>
                      <span className="font-medium">Expected Graduation:</span> May 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-semibold mb-2">Fall 2021</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course</TableHead>
                    <TableHead>Credits</TableHead>
                    <TableHead>Grade</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div>Introduction to Programming</div>
                      <div className="text-sm text-muted-foreground">CS101</div>
                    </TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>
                      <Badge variant="outline">A</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div>Calculus I</div>
                      <div className="text-sm text-muted-foreground">MATH101</div>
                    </TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>
                      <Badge variant="outline">B+</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div>Introduction to Computer Systems</div>
                      <div className="text-sm text-muted-foreground">CS102</div>
                    </TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>
                      <Badge variant="outline">A-</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <div className="mt-2 text-sm text-right">
                <span className="font-medium">Semester GPA:</span> 3.67
              </div>
            </div>

            <div className="border-t p-4">
              <h3 className="font-semibold mb-2">Spring 2022</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course</TableHead>
                    <TableHead>Credits</TableHead>
                    <TableHead>Grade</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div>Data Structures</div>
                      <div className="text-sm text-muted-foreground">CS201</div>
                    </TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>
                      <Badge variant="outline">A</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div>Discrete Mathematics</div>
                      <div className="text-sm text-muted-foreground">MATH201</div>
                    </TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>
                      <Badge variant="outline">A-</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div>Computer Architecture</div>
                      <div className="text-sm text-muted-foreground">CS202</div>
                    </TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>
                      <Badge variant="outline">B+</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <div className="mt-2 text-sm text-right">
                <span className="font-medium">Semester GPA:</span> 3.75
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-muted border-t rounded-b-lg">
          <div className="flex items-center gap-2 text-sm">
            <Lock className="h-4 w-4 text-primary" />
            <span>This transcript is secured with blockchain technology and verified as of May 5, 2023.</span>
          </div>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Verification Information</CardTitle>
          <CardDescription>Details about the blockchain verification of this transcript</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-4 rounded-lg border p-4">
            <FileText className="h-8 w-8 text-primary" />
            <div>
              <h4 className="font-medium">Blockchain Hash</h4>
              <p className="mt-1 text-sm text-muted-foreground break-all">
                0x7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069
              </p>
              <div className="mt-2">
                <Button variant="link" size="sm" className="h-auto p-0 text-primary">
                  Verify on Blockchain Explorer
                </Button>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <h4 className="font-medium">Verification Instructions</h4>
            <ol className="mt-2 space-y-2 text-sm text-muted-foreground">
              <li>1. Download the transcript verification file</li>
              <li>2. Visit the university verification portal</li>
              <li>3. Upload the verification file to confirm authenticity</li>
              <li>4. The system will validate the blockchain hash and timestamp</li>
            </ol>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

