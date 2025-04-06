import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GrievanceForm } from "@/components/grievance-form"
import { GrievanceList } from "@/components/grievance-list"
import { GrievanceTracking } from "@/components/grievance-tracking"

export default function GrievancesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Grievances</h1>
        <p className="text-muted-foreground">Submit and track grievances related to examinations and results</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Grievance Management</CardTitle>
          <CardDescription>Submit new grievances or track existing ones</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="submit">
            <TabsList className="mb-4">
              <TabsTrigger value="submit">Submit Grievance</TabsTrigger>
              <TabsTrigger value="list">My Grievances</TabsTrigger>
              <TabsTrigger value="tracking">Grievance Tracking</TabsTrigger>
            </TabsList>
            <TabsContent value="submit">
              <GrievanceForm />
            </TabsContent>
            <TabsContent value="list">
              <GrievanceList />
            </TabsContent>
            <TabsContent value="tracking">
              <GrievanceTracking />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

