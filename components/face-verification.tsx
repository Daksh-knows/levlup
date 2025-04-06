"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, AlertTriangle, Camera, RefreshCw } from "lucide-react"

interface FaceVerificationProps {
  onComplete: () => void
}

export function FaceVerification({ onComplete }: FaceVerificationProps) {
  const [step, setStep] = useState<"instructions" | "capture" | "verifying" | "complete" | "failed">("instructions")
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (step === "verifying") {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setStep("complete")
            return 100
          }
          return prev + 10
        })
      }, 300)

      return () => clearInterval(interval)
    }
  }, [step])

  const handleStartCapture = () => {
    setStep("capture")
  }

  const handleCapture = () => {
    setStep("verifying")
  }

  const handleRetry = () => {
    setStep("instructions")
    setProgress(0)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Face Verification</CardTitle>
        <CardDescription>Verify your identity using facial recognition</CardDescription>
      </CardHeader>
      <CardContent>
        {step === "instructions" && (
          <div className="space-y-4">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Important</AlertTitle>
              <AlertDescription>
                Please ensure you are in a well-lit area and your face is clearly visible. Remove any sunglasses, hats,
                or face coverings before proceeding.
              </AlertDescription>
            </Alert>

            <div className="rounded-md border p-4">
              <h3 className="font-medium mb-2">Instructions:</h3>
              <ol className="space-y-2 text-sm">
                <li>1. Position your face within the frame</li>
                <li>2. Look directly at the camera</li>
                <li>3. Hold still until the verification is complete</li>
                <li>4. Your image will be compared with your registered profile</li>
              </ol>
            </div>
          </div>
        )}

        {step === "capture" && (
          <div className="space-y-4">
            <div className="aspect-video bg-muted rounded-md flex items-center justify-center border-2 border-dashed">
              <div className="text-center">
                <Camera className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                <p className="text-muted-foreground">Camera feed will appear here</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-2 border-dashed border-primary flex items-center justify-center">
                <p className="text-sm text-muted-foreground text-center">Position your face here</p>
              </div>
            </div>
          </div>
        )}

        {step === "verifying" && (
          <div className="space-y-4">
            <div className="aspect-video bg-muted rounded-md flex items-center justify-center border-2 border-dashed">
              <div className="text-center">
                <RefreshCw className="h-12 w-12 mx-auto text-muted-foreground mb-2 animate-spin" />
                <p className="text-muted-foreground">Verifying your identity...</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Verification Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        )}

        {step === "complete" && (
          <div className="flex flex-col items-center justify-center py-6 space-y-4">
            <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/20">
              <CheckCircle2 className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-xl font-medium">Verification Successful</h3>
            <p className="text-center text-muted-foreground">
              Your identity has been successfully verified. You can now proceed to the next step.
            </p>
          </div>
        )}

        {step === "failed" && (
          <div className="flex flex-col items-center justify-center py-6 space-y-4">
            <div className="rounded-full bg-red-100 p-3 dark:bg-red-900/20">
              <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
            <h3 className="text-xl font-medium">Verification Failed</h3>
            <p className="text-center text-muted-foreground">
              We couldn't verify your identity. Please ensure you're in a well-lit area and try again.
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {step === "instructions" && (
          <Button className="w-full" onClick={handleStartCapture}>
            Start Verification
          </Button>
        )}

        {step === "capture" && (
          <Button className="w-full" onClick={handleCapture}>
            Capture
          </Button>
        )}

        {step === "complete" && (
          <Button className="w-full" onClick={onComplete}>
            Continue
          </Button>
        )}

        {step === "failed" && (
          <Button className="w-full" onClick={handleRetry}>
            Try Again
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

