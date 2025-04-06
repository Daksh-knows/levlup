"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, XCircle, Wifi, Cpu, Camera, Mic, Clock } from "lucide-react"

interface SystemCheckProps {
  onComplete: () => void
}

export function SystemCheck({ onComplete }: SystemCheckProps) {
  const [isChecking, setIsChecking] = useState(false)
  const [progress, setProgress] = useState(0)
  const [results, setResults] = useState<{
    internet: boolean | null
    browser: boolean | null
    camera: boolean | null
    microphone: boolean | null
    performance: boolean | null
  }>({
    internet: null,
    browser: null,
    camera: null,
    microphone: null,
    performance: null,
  })

  const startCheck = () => {
    setIsChecking(true)
    setProgress(0)
    setResults({
      internet: null,
      browser: null,
      camera: null,
      microphone: null,
      performance: null,
    })

    // Simulate system checks
    setTimeout(() => setResults((prev) => ({ ...prev, internet: true })), 1000)
    setTimeout(() => setResults((prev) => ({ ...prev, browser: true })), 2000)
    setTimeout(() => setResults((prev) => ({ ...prev, camera: true })), 3000)
    setTimeout(() => setResults((prev) => ({ ...prev, microphone: true })), 4000)
    setTimeout(() => setResults((prev) => ({ ...prev, performance: true })), 5000)
    setTimeout(() => setIsChecking(false), 5500)
  }

  useEffect(() => {
    if (isChecking) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 5
        })
      }, 250)

      return () => clearInterval(interval)
    }
  }, [isChecking])

  const allChecksComplete = Object.values(results).every((result) => result !== null)
  const allChecksPassed = Object.values(results).every((result) => result === true)

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-6">
          {isChecking && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>System Check Progress</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Wifi className="h-5 w-5 text-muted-foreground" />
                <span>Internet Connection</span>
              </div>
              {results.internet === null ? (
                <span className="text-sm text-muted-foreground">Waiting...</span>
              ) : results.internet ? (
                <div className="flex items-center gap-1 text-green-500">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Passed</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 text-red-500">
                  <XCircle className="h-5 w-5" />
                  <span>Failed</span>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-muted-foreground" />
                <span>Browser Compatibility</span>
              </div>
              {results.browser === null ? (
                <span className="text-sm text-muted-foreground">Waiting...</span>
              ) : results.browser ? (
                <div className="flex items-center gap-1 text-green-500">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Passed</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 text-red-500">
                  <XCircle className="h-5 w-5" />
                  <span>Failed</span>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Camera className="h-5 w-5 text-muted-foreground" />
                <span>Camera Access</span>
              </div>
              {results.camera === null ? (
                <span className="text-sm text-muted-foreground">Waiting...</span>
              ) : results.camera ? (
                <div className="flex items-center gap-1 text-green-500">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Passed</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 text-red-500">
                  <XCircle className="h-5 w-5" />
                  <span>Failed</span>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Mic className="h-5 w-5 text-muted-foreground" />
                <span>Microphone Access</span>
              </div>
              {results.microphone === null ? (
                <span className="text-sm text-muted-foreground">Waiting...</span>
              ) : results.microphone ? (
                <div className="flex items-center gap-1 text-green-500">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Passed</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 text-red-500">
                  <XCircle className="h-5 w-5" />
                  <span>Failed</span>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span>System Performance</span>
              </div>
              {results.performance === null ? (
                <span className="text-sm text-muted-foreground">Waiting...</span>
              ) : results.performance ? (
                <div className="flex items-center gap-1 text-green-500">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Passed</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 text-red-500">
                  <XCircle className="h-5 w-5" />
                  <span>Failed</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-between pt-4">
            {!isChecking && !allChecksComplete && (
              <Button className="w-full" onClick={startCheck}>
                Start System Check
              </Button>
            )}

            {!isChecking && allChecksComplete && (
              <>
                <Button variant="outline" onClick={startCheck}>
                  Run Again
                </Button>
                <Button onClick={onComplete} disabled={!allChecksPassed}>
                  {allChecksPassed ? "Continue" : "Fix Issues to Continue"}
                </Button>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

