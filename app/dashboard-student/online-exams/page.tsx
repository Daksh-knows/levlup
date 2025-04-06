import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UpcomingOnlineExams } from "@/components/upcoming-online-exams"
import { ExamPreparation } from "@/components/exam-preparation"
import { PastOnlineExams } from "@/components/past-online-exams"

export default function OnlineExamsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Online Examinations</h1>
        <p className="text-muted-foreground">Access and take secure online examinations with proctoring</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Online Examination Portal</CardTitle>
          <CardDescription>Take secure, proctored online examinations</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="upcoming">
            <TabsList className="mb-4">
              <TabsTrigger value="upcoming">Upcoming Exams</TabsTrigger>
              <TabsTrigger value="preparation">Exam Preparation</TabsTrigger>
              <TabsTrigger value="past">Past Exams</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming">
              <UpcomingOnlineExams />
            </TabsContent>
            <TabsContent value="preparation">
              <ExamPreparation />
            </TabsContent>
            <TabsContent value="past">
              <PastOnlineExams />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

