"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { AlertTriangle, Camera, ChevronRight, Mic, Shield } from "lucide-react"

interface ProctoringSidebarProps {
  warnings: string[]
}

export function ProctoringSidebar({ warnings }: ProctoringSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [cameraStatus, setCameraStatus] = useState<"active" | "warning">("active")
  const [micStatus, setMicStatus] = useState<"active" | "warning">("active")

  // Simulate random status changes
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        setCameraStatus((prev) => (prev === "active" ? "warning" : "active"))
      }
      if (Math.random() > 0.8) {
        setMicStatus((prev) => (prev === "active" ? "warning" : "active"))
      }
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  if (isCollapsed) {
    return (
      <div className="border-l bg-muted/20 w-12 flex flex-col items-center py-4">
        <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(false)} className="mb-4">
          <ChevronRight className="h-4 w-4" />
        </Button>
        <div className="flex flex-col items-center gap-4">
          <Camera
            className={`h-5 w-5 ${cameraStatus === "active" ? "text-green-500" : "text-red-500 animate-pulse"}`}
          />
          <Mic className={`h-5 w-5 ${micStatus === "active" ? "text-green-500" : "text-red-500 animate-pulse"}`} />
          {warnings.length > 0 && (
            <div className="relative">
              <AlertTriangle className="h-5 w-5 text-yellow-500 animate-pulse" />
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                {warnings.length}
              </span>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="w-80 border-l bg-muted/20 overflow-auto">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">Proctoring Status</h3>
          <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(true)}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <Card className="mb-4">
          <CardContent className="p-3 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Camera className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Camera</span>
              </div>
              <span className={`text-xs font-medium ${cameraStatus === "active" ? "text-green-500" : "text-red-500"}`}>
                {cameraStatus === "active" ? "Active" : "Warning"}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Mic className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Microphone</span>
              </div>
              <span className={`text-xs font-medium ${micStatus === "active" ? "text-green-500" : "text-red-500"}`}>
                {micStatus === "active" ? "Active" : "Warning"}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Proctoring</span>
              </div>
              <span className="text-xs font-medium text-green-500">Active</span>
            </div>
          </CardContent>
        </Card>

        <div className="mb-2">
          <h4 className="text-sm font-medium mb-2">Live Camera Feed</h4>
          <div className="aspect-video bg-muted rounded-md flex items-center justify-center border border-dashed">
            <div className="text-center">
              <Camera className="h-8 w-8 mx-auto text-muted-foreground mb-1" />
              <p className="text-xs text-muted-foreground">Camera feed</p>
            </div>
          </div>
        </div>

        <Separator className="my-4" />

        <div>
          <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
            <span>Proctor Warnings</span>
            {warnings.length > 0 && (
              <span className="ml-auto text-xs text-muted-foreground">
                {warnings.length} {warnings.length === 1 ? "warning" : "warnings"}
              </span>
            )}
          </h4>

          {warnings.length === 0 ? (
            <p className="text-xs text-muted-foreground text-center py-4">No warnings detected</p>
          ) : (
            <div className="space-y-2 max-h-[200px] overflow-y-auto pr-1">
              {warnings.map((warning, index) => (
                <Card key={index}>
                  <CardContent className="p-2 text-xs">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p>{warning}</p>
                        <p className="text-muted-foreground mt-1">{new Date().toLocaleTimeString()}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

