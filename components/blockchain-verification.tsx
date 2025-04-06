"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Clock, FileText, Lock, Shield } from "lucide-react"
import { Separator } from "@/components/ui/separator"

interface BlockchainVerificationProps {
  type?: "results" | "answer-sheets" | "general"
}

export function BlockchainVerification({ type = "general" }: BlockchainVerificationProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Blockchain Verification Status</CardTitle>
          <CardDescription>
            {type === "results"
              ? "Current status of your examination results on the blockchain"
              : type === "answer-sheets"
                ? "Current status of your answer sheets on the blockchain"
                : "Current status of your academic records on the blockchain"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-500" />
              <div>
                <h4 className="font-medium">
                  {type === "results"
                    ? "Examination Results"
                    : type === "answer-sheets"
                      ? "Answer Sheets"
                      : "Academic Records"}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {type === "results"
                    ? "Complete results record"
                    : type === "answer-sheets"
                      ? "Submitted examination answers"
                      : "Complete academic record"}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium text-green-500">Verified</div>
              <p className="text-sm text-muted-foreground">May 1, 2023</p>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-500" />
              <div>
                <h4 className="font-medium">Previous Semester Data</h4>
                <p className="text-sm text-muted-foreground">Fall 2022</p>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium text-green-500">Verified</div>
              <p className="text-sm text-muted-foreground">January 15, 2023</p>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-lg border p-4">
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-yellow-500" />
              <div>
                <h4 className="font-medium">Current Semester Data</h4>
                <p className="text-sm text-muted-foreground">Spring 2023</p>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium text-yellow-500">Pending</div>
              <p className="text-sm text-muted-foreground">Expected: June 10, 2023</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Verification Details</CardTitle>
          <CardDescription>Technical information about your blockchain records</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <h4 className="font-medium">Blockchain Information</h4>
            </div>
            <Separator />
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <div>
                <p className="text-sm font-medium">Network</p>
                <p className="text-sm text-muted-foreground">Ethereum (Private University Chain)</p>
              </div>
              <div>
                <p className="text-sm font-medium">Smart Contract</p>
                <p className="text-sm text-muted-foreground">0x1a2b3c4d5e6f...</p>
              </div>
              <div>
                <p className="text-sm font-medium">Last Verification</p>
                <p className="text-sm text-muted-foreground">May 5, 2023 at 10:23 AM</p>
              </div>
              <div>
                <p className="text-sm font-medium">Verification Method</p>
                <p className="text-sm text-muted-foreground">SHA-256 with Digital Signature</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <div className="flex items-center gap-2 mb-2">
              <Lock className="h-5 w-5 text-primary" />
              <h4 className="font-medium">Your Record Hash</h4>
            </div>
            <p className="text-sm text-muted-foreground break-all">
              0x7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069
            </p>
            <div className="mt-4 flex gap-2">
              <Button size="sm" variant="outline" className="gap-1">
                <FileText className="h-4 w-4" />
                <span>Export Verification Certificate</span>
              </Button>
              <Button size="sm" variant="outline">
                Verify Externally
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

