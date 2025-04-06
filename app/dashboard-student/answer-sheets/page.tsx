import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnswerSheetViewer } from "@/components/answer-sheet-viewer"
import { AnswerSheetList } from "@/components/answer-sheet-list"
import { BlockchainVerification } from "@/components/blockchain-verification"

export default function AnswerSheetsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Answer Sheets</h1>
        <p className="text-muted-foreground">View and verify your submitted examination answer sheets</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Examination Answer Sheets</CardTitle>
          <CardDescription>Review your submitted answers with blockchain verification</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="list">
            <TabsList className="mb-4">
              <TabsTrigger value="list">All Answer Sheets</TabsTrigger>
              <TabsTrigger value="viewer">Answer Sheet Viewer</TabsTrigger>
              <TabsTrigger value="verification">Blockchain Verification</TabsTrigger>
            </TabsList>
            <TabsContent value="list">
              <AnswerSheetList />
            </TabsContent>
            <TabsContent value="viewer">
              <AnswerSheetViewer />
            </TabsContent>
            <TabsContent value="verification">
              <BlockchainVerification type="answer-sheets" />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

