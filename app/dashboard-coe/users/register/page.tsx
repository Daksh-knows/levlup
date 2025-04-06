import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { StudentRangeForm } from "@/components/forms/student-range-form";
import { StudentBulkForm } from "@/components/forms/student-bulk-form";
import { TeacherForm } from "@/components/forms/teacher-form";

export default function RegisterUsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Register Users</h1>
        <p className="text-muted-foreground">
          Register new students and teachers in the system.
        </p>
      </div>

      <Tabs defaultValue="student-range" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="student-range">
            Student Range Registration
          </TabsTrigger>
          <TabsTrigger value="student-bulk">
            Student Bulk Registration
          </TabsTrigger>
          <TabsTrigger value="teacher">Teacher Registration</TabsTrigger>
        </TabsList>
        <TabsContent value="student-range">
          <StudentRangeForm />
        </TabsContent>
        <TabsContent value="student-bulk">
          <StudentBulkForm />
        </TabsContent>
        <TabsContent value="teacher">
          <TeacherForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
