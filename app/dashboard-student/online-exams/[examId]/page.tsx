"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FaceVerification } from "@/components/face-verification"
import { ExamRules } from "@/components/exam-rules"
import { SystemCheck } from "@/components/system-check"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2 } from "lucide-react"

export default function ExamPreparationPage({ params }: { params: { examId: string } }) {
  const router = useRouter()
  const [step, setStep] = useState<"system-check" | "face-verification" | "rules" | "ready">("system-check")
  const [verificationComplete, setVerificationComplete] = useState(false)
  const [systemCheckComplete, setSystemCheckComplete] = useState(false)
  const [rulesAccepted, setRulesAccepted] = useState(false)

  // Mock exam data - in a real app, this would be fetched from an API
  const examData = {
    id: params.examId,
    title: "Data Structures and Algorithms",
    code: "CS301",
    duration: "2 hours",
    startTime: "10:00 AM",
    date: "May 15, 2023",
  }

  const handleStartExam = () => {
    router.push(`/dashboard/online-exams/${params.examId}/take`)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Exam Preparation</h1>
        <p className="text-muted-foreground">Complete verification and preparation steps before starting your exam</p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>{examData.title}</CardTitle>
          <CardDescription>
            {examData.code} • {examData.date} • {examData.startTime} • {examData.duration}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card
                className={`border-l-4 ${step === "system-check" ? "border-l-primary" : systemCheckComplete ? "border-l-green-500" : "border-l-gray-300"}`}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Step 1: System Check</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Verify your device meets all requirements</p>
                </CardContent>
                <CardFooter>
                  {systemCheckComplete ? (
                    <div className="flex items-center gap-2 text-green-500">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="text-sm font-medium">Completed</span>
                    </div>
                  ) : (
                    <Button
                      variant={step === "system-check" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setStep("system-check")}
                    >
                      {step === "system-check" ? "In Progress" : "Start"}
                    </Button>
                  )}
                </CardFooter>
              </Card>

              <Card
                className={`border-l-4 ${step === "face-verification" ? "border-l-primary" : verificationComplete ? "border-l-green-500" : "border-l-gray-300"}`}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Step 2: Face Verification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Verify your identity with facial recognition</p>
                </CardContent>
                <CardFooter>
                  {verificationComplete ? (
                    <div className="flex items-center gap-2 text-green-500">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="text-sm font-medium">Completed</span>
                    </div>
                  ) : (
                    <Button
                      variant={step === "face-verification" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setStep("face-verification")}
                      disabled={!systemCheckComplete}
                    >
                      {step === "face-verification" ? "In Progress" : "Start"}
                    </Button>
                  )}
                </CardFooter>
              </Card>

              <Card
                className={`border-l-4 ${step === "rules" ? "border-l-primary" : rulesAccepted ? "border-l-green-500" : "border-l-gray-300"}`}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Step 3: Exam Rules</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Review and accept examination rules</p>
                </CardContent>
                <CardFooter>
                  {rulesAccepted ? (
                    <div className="flex items-center gap-2 text-green-500">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="text-sm font-medium">Completed</span>
                    </div>
                  ) : (
                    <Button
                      variant={step === "rules" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setStep("rules")}
                      disabled={!verificationComplete}
                    >
                      {step === "rules" ? "In Progress" : "Start"}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </div>

            {step === "system-check" && (
              <SystemCheck
                onComplete={() => {
                  setSystemCheckComplete(true)
                  setStep("face-verification")
                }}
              />
            )}

            {step === "face-verification" && (
              <FaceVerification
                onComplete={() => {
                  setVerificationComplete(true)
                  setStep("rules")
                }}
              />
            )}

            {step === "rules" && (
              <ExamRules
                onAccept={() => {
                  setRulesAccepted(true)
                  setStep("ready")
                }}
              />
            )}

            {step === "ready" && (
              <Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-900">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <AlertTitle>Ready to begin</AlertTitle>
                <AlertDescription>
                  You have completed all preparation steps and are ready to start your exam.
                </AlertDescription>
              </Alert>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.push("/dashboard/online-exams")}>
            Back to Exams
          </Button>
          <Button onClick={handleStartExam} disabled={!systemCheckComplete || !verificationComplete || !rulesAccepted}>
            Start Exam
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

