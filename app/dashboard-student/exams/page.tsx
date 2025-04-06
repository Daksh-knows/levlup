import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExamCalendar } from "@/components/exam-calendar"
import { ExamList } from "@/components/exam-list"

export default function ExamsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Examination Schedule</h1>
        <p className="text-muted-foreground">View and manage your upcoming examinations</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Exam Schedule</CardTitle>
          <CardDescription>View your exams in calendar or list format</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="calendar">
            <TabsList className="mb-4">
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
              <TabsTrigger value="list">List View</TabsTrigger>
            </TabsList>
            <TabsContent value="calendar">
              <ExamCalendar />
            </TabsContent>
            <TabsContent value="list">
              <ExamList />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

