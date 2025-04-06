"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, Laptop, Shield, Webcam } from "lucide-react"

export function ExamPreparation() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Exam Readiness Checklist</CardTitle>
          <CardDescription>Complete these steps to prepare for your online exams</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Laptop className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">System Requirements Check</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-500">Completed</span>
                </div>
              </div>
              <Progress value={100} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Webcam className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Webcam and Microphone Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-500">Completed</span>
                </div>
              </div>
              <Progress value={100} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Identity Verification</span>
                </div>
                <span className="text-sm text-muted-foreground">Required for each exam</span>
              </div>
              <Progress value={0} className="h-2" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Run System Check Again</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Exam Guidelines</CardTitle>
          <CardDescription>Important information for online examinations</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="rules">
            <TabsList className="mb-4">
              <TabsTrigger value="rules">Exam Rules</TabsTrigger>
              <TabsTrigger value="technical">Technical Requirements</TabsTrigger>
              <TabsTrigger value="proctoring">Proctoring Information</TabsTrigger>
            </TabsList>
            <TabsContent value="rules" className="space-y-4">
              <div className="rounded-md border p-4">
                <h3 className="font-medium">Before the Exam</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Ensure you have a stable internet connection</li>
                  <li>• Complete the system check at least 24 hours before the exam</li>
                  <li>• Have your student ID ready for verification</li>
                  <li>• Find a quiet, well-lit room for the examination</li>
                </ul>
              </div>

              <div className="rounded-md border p-4">
                <h3 className="font-medium">During the Exam</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Remain in view of the webcam at all times</li>
                  <li>• No additional devices or materials are allowed unless specified</li>
                  <li>• No communication with others is permitted</li>
                  <li>• Bathroom breaks are not allowed during short exams</li>
                </ul>
              </div>

              <div className="rounded-md border p-4">
                <h3 className="font-medium">Academic Integrity</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• All exam sessions are recorded and monitored</li>
                  <li>• AI proctoring will flag suspicious behavior</li>
                  <li>• Violations may result in disciplinary action</li>
                  <li>• All submissions are verified using blockchain technology</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="technical" className="space-y-4">
              <div className="rounded-md border p-4">
                <h3 className="font-medium">Hardware Requirements</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Computer with webcam and microphone</li>
                  <li>• Minimum 4GB RAM</li>
                  <li>• Stable internet connection (minimum 1 Mbps upload/download)</li>
                  <li>• Power supply/fully charged battery</li>
                </ul>
              </div>

              <div className="rounded-md border p-4">
                <h3 className="font-medium">Software Requirements</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Updated Chrome or Firefox browser</li>
                  <li>• Enabled JavaScript and cookies</li>
                  <li>• Disabled browser extensions</li>
                  <li>• Allowed camera and microphone permissions</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="proctoring" className="space-y-4">
              <div className="rounded-md border p-4">
                <h3 className="font-medium">Proctoring Features</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Live webcam monitoring</li>
                  <li>• Face detection and verification</li>
                  <li>• Screen recording</li>
                  <li>• Browser activity monitoring</li>
                  <li>• AI-based behavior analysis</li>
                </ul>
              </div>

              <div className="rounded-md border p-4">
                <h3 className="font-medium">Privacy Information</h3>
                <p className="mt-2 text-sm">
                  All recordings and data collected during the exam are encrypted and stored securely. They are used
                  solely for the purpose of exam integrity verification and are deleted after the appeal period (30
                  days). Your privacy is important to us.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

