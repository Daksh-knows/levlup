import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageSquare } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function SubmittedPapers() {
  return (
    <DashboardLayout>
      <div className="grid gap-6">
        {/* My Submitted Papers */}
        <Card className="shadow-md">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              My Submitted Papers
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead>Exam</TableHead>
                    <TableHead>Submitted On</TableHead>
                    <TableHead>Blockchain Hash</TableHead>
                    <TableHead>Verified By</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium">Computer Networks</TableCell>
                    <TableCell>Mid-Term</TableCell>
                    <TableCell>March 15, 2025</TableCell>
                    <TableCell>
                      <code className="rounded bg-muted px-2 py-1 text-xs">0x8f72b4...e29a</code>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback>RV</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm">Rahul Verma</p>
                          <p className="text-xs text-muted-foreground">ID: 2023045</p>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium">Operating Systems</TableCell>
                    <TableCell>Quiz 1</TableCell>
                    <TableCell>February 28, 2025</TableCell>
                    <TableCell>
                      <code className="rounded bg-muted px-2 py-1 text-xs">0x3a91c7...f45b</code>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback>PG</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm">Priya Gupta</p>
                          <p className="text-xs text-muted-foreground">ID: 2023078</p>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium">Software Engineering</TableCell>
                    <TableCell>Assignment 2</TableCell>
                    <TableCell>February 10, 2025</TableCell>
                    <TableCell>
                      <code className="rounded bg-muted px-2 py-1 text-xs">0x6d45e2...a12c</code>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback>AS</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm">Amit Shah</p>
                          <p className="text-xs text-muted-foreground">ID: 2023112</p>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium">Data Structures</TableCell>
                    <TableCell>Final Exam</TableCell>
                    <TableCell>January 20, 2025</TableCell>
                    <TableCell>
                      <code className="rounded bg-muted px-2 py-1 text-xs">0x2f81a9...b73d</code>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback>NK</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm">Neha Kapoor</p>
                          <p className="text-xs text-muted-foreground">ID: 2023089</p>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow className="hover:bg-muted/50">
                    <TableCell className="font-medium">Web Development</TableCell>
                    <TableCell>Project Evaluation</TableCell>
                    <TableCell>January 5, 2025</TableCell>
                    <TableCell>
                      <code className="rounded bg-muted px-2 py-1 text-xs">0x9c34e7...f12a</code>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback>VK</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm">Vikram Kumar</p>
                          <p className="text-xs text-muted-foreground">ID: 2023056</p>
                        </div>
                      </div>
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

