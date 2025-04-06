import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResultsList } from "@/components/results-list"
import { ResultsTranscript } from "@/components/results-transcript"
import { BlockchainVerification } from "@/components/blockchain-verification"

export default function ResultsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Examination Results</h1>
        <p className="text-muted-foreground">View your secure, blockchain-verified examination results</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Academic Results</CardTitle>
          <CardDescription>View your results with blockchain verification</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="current">
            <TabsList className="mb-4">
              <TabsTrigger value="current">Current Semester</TabsTrigger>
              <TabsTrigger value="all">All Results</TabsTrigger>
              <TabsTrigger value="transcript">Transcript</TabsTrigger>
              <TabsTrigger value="verification">Blockchain Verification</TabsTrigger>
            </TabsList>
            <TabsContent value="current">
              <ResultsList semester="current" />
            </TabsContent>
            <TabsContent value="all">
              <ResultsList semester="all" />
            </TabsContent>
            <TabsContent value="transcript">
              <ResultsTranscript />
            </TabsContent>
            <TabsContent value="verification">
              <BlockchainVerification />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

