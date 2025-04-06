"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Download, Home } from "lucide-react"

export default function ExamCompletePage({ params }: { params: { examId: string } }) {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-6 items-center justify-center min-h-[calc(100vh-4rem)] p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">Exam Submitted Successfully</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4 text-muted-foreground">
            Your exam has been successfully submitted and securely recorded on the blockchain.
          </p>
          <div className="rounded-md bg-muted p-4 text-left">
            <p className="font-medium">Exam Details:</p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <span className="font-medium">Exam:</span> Data Structures and Algorithms (CS301)
              </li>
              <li>
                <span className="font-medium">Submission Time:</span> May 15, 2023, 11:45 AM
              </li>
              <li>
                <span className="font-medium">Blockchain Transaction ID:</span> 0x7f83b1657ff1fc53b92dc...
              </li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full gap-2" onClick={() => router.push("/dashboard")}>
            <Home className="h-4 w-4" />
            <span>Return to Dashboard</span>
          </Button>
          <Button variant="outline" className="w-full gap-2">
            <Download className="h-4 w-4" />
            <span>Download Submission Receipt</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

