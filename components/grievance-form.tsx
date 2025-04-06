"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertCircle, CheckCircle2, Upload } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function GrievanceForm() {
  const [grievanceType, setGrievanceType] = useState("")
  const [examId, setExamId] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  if (submitted) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/20">
              <CheckCircle2 className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-xl font-medium">Grievance Submitted Successfully</h3>
            <p className="text-muted-foreground">
              Your grievance has been recorded on the blockchain and will be reviewed by the examination committee.
            </p>
            <div className="mt-2 rounded-md bg-muted p-4 text-left">
              <p className="text-sm">
                <span className="font-medium">Grievance ID:</span> GRV-2023-0042
              </p>
              <p className="text-sm">
                <span className="font-medium">Blockchain Transaction:</span> 0x7f83b1657ff1fc53b92d...
              </p>
              <p className="text-sm">
                <span className="font-medium">Estimated Response Time:</span> 3-5 working days
              </p>
            </div>
            <Button className="mt-4" onClick={() => setSubmitted(false)}>
              Submit Another Grievance
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Important Information</AlertTitle>
          <AlertDescription>
            All grievances are recorded on the blockchain for transparency and cannot be modified once submitted. Please
            ensure all information is accurate before submission.
          </AlertDescription>
        </Alert>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="grievance-type">Grievance Type</Label>
            <Select value={grievanceType} onValueChange={setGrievanceType} required>
              <SelectTrigger id="grievance-type">
                <SelectValue placeholder="Select grievance type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="result-discrepancy">Result Discrepancy</SelectItem>
                <SelectItem value="answer-evaluation">Answer Evaluation Issue</SelectItem>
                <SelectItem value="technical-issue">Technical Issue During Exam</SelectItem>
                <SelectItem value="proctoring-issue">Proctoring Issue</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="exam-id">Related Examination</Label>
            <Select value={examId} onValueChange={setExamId} required>
              <SelectTrigger id="exam-id">
                <SelectValue placeholder="Select examination" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cs301">Data Structures (CS301) - May 15, 2023</SelectItem>
                <SelectItem value="cs305">Database Management (CS305) - May 20, 2023</SelectItem>
                <SelectItem value="cs310">Computer Networks (CS310) - May 25, 2023</SelectItem>
                <SelectItem value="cs302">Algorithms (CS302) - April 10, 2023</SelectItem>
                <SelectItem value="cs304">Operating Systems (CS304) - April 5, 2023</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {grievanceType === "result-discrepancy" && (
            <div className="space-y-2">
              <Label htmlFor="question-number">Question Number(s)</Label>
              <Input id="question-number" placeholder="e.g., 3, 5, 7" required />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="description">Detailed Description</Label>
            <Textarea
              id="description"
              placeholder="Please provide a detailed description of your grievance..."
              className="min-h-[150px]"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Priority Level</Label>
            <RadioGroup defaultValue="medium">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="high" id="priority-high" />
                <Label htmlFor="priority-high">High</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="priority-medium" />
                <Label htmlFor="priority-medium">Medium</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="low" id="priority-low" />
                <Label htmlFor="priority-low">Low</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>Supporting Documents (Optional)</Label>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="w-8 h-8 mb-3 text-muted-foreground" />
                  <p className="mb-2 text-sm text-muted-foreground">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground">PDF, PNG, JPG (MAX. 10MB)</p>
                </div>
                <input id="file-upload" type="file" className="hidden" />
              </label>
            </div>
          </div>

          <div className="flex items-start space-x-2 pt-2">
            <Checkbox id="terms" required />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="terms" className="text-sm font-normal">
                I confirm that all information provided is accurate and true to the best of my knowledge.
              </Label>
            </div>
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Grievance"}
        </Button>
      </div>
    </form>
  )
}

