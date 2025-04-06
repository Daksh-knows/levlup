"use client"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Fingerprint, Shield, Upload } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function IdentityVerification() {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border p-4">
        <div className="flex items-center gap-2 mb-2">
          <Shield className="h-5 w-5 text-primary" />
          <h3 className="font-medium">Verification Status</h3>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium">Student ID Verification</span>
              </div>
              <span className="text-sm text-green-500">Verified</span>
            </div>
            <Progress value={100} className="h-2" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium">Email Verification</span>
              </div>
              <span className="text-sm text-green-500">Verified</span>
            </div>
            <Progress value={100} className="h-2" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium">Biometric Verification</span>
              </div>
              <span className="text-sm text-green-500">Verified</span>
            </div>
            <Progress value={100} className="h-2" />
          </div>
        </div>
      </div>

      <div className="rounded-lg border p-4">
        <div className="flex items-center gap-2 mb-2">
          <Fingerprint className="h-5 w-5 text-primary" />
          <h3 className="font-medium">Biometric Authentication</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Your biometric data is securely stored on the blockchain and used for identity verification during
          examinations.
        </p>
        <Separator className="my-4" />
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium">Last Authentication</h4>
            <p className="text-sm text-muted-foreground">April 10, 2023</p>
          </div>
          <Button variant="outline" size="sm" className="gap-1">
            <Upload className="h-4 w-4" />
            <span>Update Biometrics</span>
          </Button>
        </div>
      </div>

      <div className="rounded-lg border p-4">
        <h3 className="font-medium mb-2">Blockchain Identity Certificate</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Your digital identity certificate is stored on the blockchain and can be used to verify your academic
          credentials.
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
          <Button variant="outline" size="sm">
            View Certificate
          </Button>
          <Button variant="outline" size="sm">
            Download Certificate
          </Button>
          <Button variant="outline" size="sm">
            Share Certificate
          </Button>
        </div>
      </div>
    </div>
  )
}

