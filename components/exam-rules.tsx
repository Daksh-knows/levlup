"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { AlertTriangle, FileText, ShieldCheck } from "lucide-react"

interface ExamRulesProps {
  onAccept: () => void
}

export function ExamRules({ onAccept }: ExamRulesProps) {
  const [acceptedRules, setAcceptedRules] = useState(false)
  const [acceptedIntegrity, setAcceptedIntegrity] = useState(false)

  const handleAccept = () => {
    if (acceptedRules && acceptedIntegrity) {
      onAccept()
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          <span>Examination Rules and Guidelines</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium">General Rules</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-0.5">•</span>
              <span>You must remain visible in the webcam frame throughout the examination.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">•</span>
              <span>No other person is allowed to enter the room during the examination.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">•</span>
              <span>
                You are not allowed to use any electronic devices other than the computer used for the examination.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">•</span>
              <span>You must not communicate with anyone during the examination.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">•</span>
              <span>Bathroom breaks are not permitted during examinations shorter than 2 hours.</span>
            </li>
          </ul>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-medium">Proctoring Information</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-0.5">•</span>
              <span>
                Your examination session will be recorded, including webcam video, audio, and screen activity.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">•</span>
              <span>
                AI-based proctoring will monitor for suspicious activities such as looking away from the screen,
                presence of other people, or unauthorized objects.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">•</span>
              <span>
                Multiple face detection, background noise, and suspicious eye movements will trigger warnings.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">•</span>
              <span>Repeated violations may result in automatic termination of your examination.</span>
            </li>
          </ul>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-medium">Technical Requirements</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-0.5">•</span>
              <span>Ensure your device remains connected to the internet throughout the examination.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">•</span>
              <span>Do not refresh the page or navigate away from the examination window.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">•</span>
              <span>In case of technical issues, a limited number of reconnection attempts will be allowed.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5">•</span>
              <span>
                Your answers are automatically saved every 30 seconds and when you navigate between questions.
              </span>
            </li>
          </ul>
        </div>

        <div className="rounded-md border-l-4 border-l-yellow-500 bg-yellow-50 p-4 dark:bg-yellow-950/20">
          <div className="flex items-start gap-2">
            <AlertTriangle className="mt-0.5 h-5 w-5 text-yellow-500 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-yellow-700 dark:text-yellow-400">Important Notice</h4>
              <p className="text-sm text-yellow-700 dark:text-yellow-400">
                Violation of examination rules may result in disqualification and disciplinary action. All examination
                activities are recorded on the blockchain for verification and audit purposes.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-2">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="accept-rules"
              checked={acceptedRules}
              onCheckedChange={(checked) => setAcceptedRules(checked === true)}
            />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="accept-rules" className="text-sm font-medium">
                I have read and understood the examination rules and guidelines.
              </Label>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Checkbox
              id="accept-integrity"
              checked={acceptedIntegrity}
              onCheckedChange={(checked) => setAcceptedIntegrity(checked === true)}
            />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="accept-integrity" className="text-sm font-medium">
                I pledge to maintain academic integrity and understand that my examination will be monitored and
                recorded.
              </Label>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ShieldCheck className="h-4 w-4" />
          <span>Blockchain secured</span>
        </div>
        <Button onClick={handleAccept} disabled={!acceptedRules || !acceptedIntegrity}>
          Accept and Continue
        </Button>
      </CardFooter>
    </Card>
  )
}

