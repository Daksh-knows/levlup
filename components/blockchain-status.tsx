"use client"

import { CheckCircle2, Clock, Shield } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function BlockchainStatus() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <span className="font-medium">Academic Records</span>
          </div>
          <span className="text-sm text-muted-foreground">Verified</span>
        </div>
        <Progress value={100} className="h-2" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            <span className="font-medium">Identity Verification</span>
          </div>
          <span className="text-sm text-muted-foreground">Verified</span>
        </div>
        <Progress value={100} className="h-2" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-yellow-500" />
            <span className="font-medium">Current Semester Results</span>
          </div>
          <span className="text-sm text-muted-foreground">Pending</span>
        </div>
        <Progress value={60} className="h-2" />
      </div>

      <div className="mt-6 rounded-lg border p-4">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-primary" />
          <h4 className="font-medium">Blockchain Security</h4>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Your academic records are secured using SHA-256 encryption and stored on a private blockchain. Last
          verification: 2 hours ago.
        </p>
      </div>
    </div>
  )
}

