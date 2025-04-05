// "use client"

// import { useState } from "react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Plus, MoreHorizontal, Search } from "lucide-react"

// // Initial users data
// const initialTeachers = [
//   { id: 1, name: "John Doe", email: "john.doe@example.com", subject: "Mathematics", status: "active" },
//   { id: 2, name: "Jane Smith", email: "jane.smith@example.com", subject: "Science", status: "active" },
//   {
//     id: 3,
//     name: "Robert Johnson",
//     email: "robert.johnson@example.com",
//     subject: "English Literature",
//     status: "active",
//   },
//   { id: 4, name: "Sarah Williams", email: "sarah.williams@example.com", subject: "History", status: "inactive" },
//   { id: 5, name: "Michael Brown", email: "michael.brown@example.com", subject: "Computer Science", status: "active" },
// ]

// const initialStudents = [
//   { id: 1, name: "Emily Davis", email: "emily.davis@example.com", grade: "10th", status: "active" },
//   { id: 2, name: "James Wilson", email: "james.wilson@example.com", grade: "11th", status: "active" },
//   { id: 3, name: "Olivia Martinez", email: "olivia.martinez@example.com", grade: "12th", status: "active" },
//   { id: 4, name: "William Anderson", email: "william.anderson@example.com", grade: "10th", status: "inactive" },
//   { id: 5, name: "Sophia Thomas", email: "sophia.thomas@example.com", grade: "11th", status: "active" },
//   { id: 6, name: "Benjamin Jackson", email: "benjamin.jackson@example.com", grade: "12th", status: "active" },
//   { id: 7, name: "Isabella White", email: "isabella.white@example.com", grade: "10th", status: "active" },
//   { id: 8, name: "Ethan Harris", email: "ethan.harris@example.com", grade: "11th", status: "inactive" },
// ]

// export default function UsersPage() {
//   const [teachers, setTeachers] = useState(initialTeachers)
//   const [students, setStudents] = useState(initialStudents)
//   const [isDialogOpen, setIsDialogOpen] = useState(false)
//   const [userType, setUserType] = useState("teacher")
//   const [searchQuery, setSearchQuery] = useState("")
//   const [newUser, setNewUser] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     grade: "10th",
//     status: "active",
//   })

//   const handleAddUser = () => {
//     if (userType === "teacher") {
//       const teacher = {
//         id: teachers.length + 1,
//         name: newUser.name,
//         email: newUser.email,
//         subject: newUser.subject,
//         status: newUser.status,
//       }
//       setTeachers([...teachers, teacher])
//     } else {
//       const student = {
//         id: students.length + 1,
//         name: newUser.name,
//         email: newUser.email,
//         grade: newUser.grade,
//         status: newUser.status,
//       }
//       setStudents([...students, student])
//     }

//     setNewUser({
//       name: "",
//       email: "",
//       subject: "",
//       grade: "10th",
//       status: "active",
//     })
//     setIsDialogOpen(false)
//   }

//   const filteredTeachers = teachers.filter(
//     (teacher) =>
//       teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       teacher.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       teacher.subject.toLowerCase().includes(searchQuery.toLowerCase()),
//   )

//   const filteredStudents = students.filter(
//     (student) =>
//       student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       student.grade.toLowerCase().includes(searchQuery.toLowerCase()),
//   )

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
//           <p className="text-muted-foreground">Manage teachers and students in the examination system</p>
//         </div>
//         <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//           <DialogTrigger asChild>
//             <Button>
//               <Plus className="mr-2 h-4 w-4" />
//               Add User
//             </Button>
//           </DialogTrigger>
//           <DialogContent>
//             <DialogHeader>
//               <DialogTitle>Add New User</DialogTitle>
//               <DialogDescription>Create a new teacher or student account</DialogDescription>
//             </DialogHeader>
//             <div className="grid gap-4 py-4">
//               <RadioGroup value={userType} onValueChange={setUserType} className="flex gap-4">
//                 <div className="flex items-center space-x-2">
//                   <RadioGroupItem value="teacher" id="teacher" />
//                   <Label htmlFor="teacher">Teacher</Label>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <RadioGroupItem value="student" id="student" />
//                   <Label htmlFor="student">Student</Label>
//                 </div>
//               </RadioGroup>

//               <div className="grid gap-2">
//                 <Label htmlFor="name">Full Name</Label>
//                 <Input
//                   id="name"
//                   value={newUser.name}
//                   onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
//                   placeholder="John Doe"
//                 />
//               </div>

//               <div className="grid gap-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   value={newUser.email}
//                   onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
//                   placeholder="name@example.com"
//                 />
//               </div>

//               {userType === "teacher" ? (
//                 <div className="grid gap-2">
//                   <Label htmlFor="subject">Subject</Label>
//                   <Input
//                     id="subject"
//                     value={newUser.subject}
//                     onChange={(e) => setNewUser({ ...newUser, subject: e.target.value })}
//                     placeholder="Mathematics"
//                   />
//                 </div>
//               ) : (
//                 <div className="grid gap-2">
//                   <Label htmlFor="grade">Grade</Label>
//                   <select
//                     id="grade"
//                     className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//                     value={newUser.grade}
//                     onChange={(e) => setNewUser({ ...newUser, grade: e.target.value })}
//                   >
//                     <option value="10th">10th Grade</option>
//                     <option value="11th">11th Grade</option>
//                     <option value="12th">12th Grade</option>
//                   </select>
//                 </div>
//               )}
//             </div>
//             <DialogFooter>
//               <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
//                 Cancel
//               </Button>
//               <Button onClick={handleAddUser}>Add User</Button>
//             </DialogFooter>
//           </DialogContent>
//         </Dialog>
//       </div>

//       <div className="flex items-center">
//         <div className="relative flex-1 max-w-sm">
//           <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//           <Input
//             type="search"
//             placeholder="Search users..."
//             className="pl-8"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//         </div>
//       </div>

//       <Tabs defaultValue="teachers" className="space-y-4">
//         <TabsList>
//           <TabsTrigger value="teachers">Teachers</TabsTrigger>
//           <TabsTrigger value="students">Students</TabsTrigger>
//         </TabsList>

//         <TabsContent value="teachers">
//           <Card>
//             <CardHeader>
//               <CardTitle>Teachers</CardTitle>
//               <CardDescription>Manage teacher accounts and permissions</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Name</TableHead>
//                     <TableHead>Email</TableHead>
//                     <TableHead>Subject</TableHead>
//                     <TableHead>Status</TableHead>
//                     <TableHead className="w-[80px]"></TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {filteredTeachers.map((teacher) => (
//                     <TableRow key={teacher.id}>
//                       <TableCell className="font-medium">{teacher.name}</TableCell>
//                       <TableCell>{teacher.email}</TableCell>
//                       <TableCell>{teacher.subject}</TableCell>
//                       <TableCell>
//                         <span
//                           className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
//                             teacher.status === "active"
//                               ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
//                               : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
//                           }`}
//                         >
//                           {teacher.status.charAt(0).toUpperCase() + teacher.status.slice(1)}
//                         </span>
//                       </TableCell>
//                       <TableCell>
//                         <DropdownMenu>
//                           <DropdownMenuTrigger asChild>
//                             <Button variant="ghost" className="h-8 w-8 p-0">
//                               <MoreHorizontal className="h-4 w-4" />
//                             </Button>
//                           </DropdownMenuTrigger>
//                           <DropdownMenuContent align="end">
//                             <DropdownMenuLabel>Actions</DropdownMenuLabel>
//                             <DropdownMenuItem>Edit</DropdownMenuItem>
//                             <DropdownMenuItem>View Details</DropdownMenuItem>
//                             <DropdownMenuSeparator />
//                             <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
//                           </DropdownMenuContent>
//                         </DropdownMenu>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         <TabsContent value="students">
//           <Card>
//             <CardHeader>
//               <CardTitle>Students</CardTitle>
//               <CardDescription>Manage student accounts and permissions</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead>Name</TableHead>
//                     <TableHead>Email</TableHead>
//                     <TableHead>Grade</TableHead>
//                     <TableHead>Status</TableHead>
//                     <TableHead className="w-[80px]"></TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {filteredStudents.map((student) => (
//                     <TableRow key={student.id}>
//                       <TableCell className="font-medium">{student.name}</TableCell>
//                       <TableCell>{student.email}</TableCell>
//                       <TableCell>{student.grade}</TableCell>
//                       <TableCell>
//                         <span
//                           className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
//                             student.status === "active"
//                               ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
//                               : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
//                           }`}
//                         >
//                           {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
//                         </span>
//                       </TableCell>
//                       <TableCell>
//                         <DropdownMenu>
//                           <DropdownMenuTrigger asChild>
//                             <Button variant="ghost" className="h-8 w-8 p-0">
//                               <MoreHorizontal className="h-4 w-4" />
//                             </Button>
//                           </DropdownMenuTrigger>
//                           <DropdownMenuContent align="end">
//                             <DropdownMenuLabel>Actions</DropdownMenuLabel>
//                             <DropdownMenuItem>Edit</DropdownMenuItem>
//                             <DropdownMenuItem>View Details</DropdownMenuItem>
//                             <DropdownMenuSeparator />
//                             <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
//                           </DropdownMenuContent>
//                         </DropdownMenu>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </CardContent>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   )
// }

import Link from "next/link";
import { PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
        <div className="flex items-center gap-2">
          <Button asChild>
            <Link href="/dashboard/users/register">
              <PlusCircle className="mr-2 h-4 w-4" />
              Register Users
            </Link>
          </Button>
        </div>
      </div>
      <Tabs defaultValue="students" className="space-y-4">
        <TabsList>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="teachers">Teachers</TabsTrigger>
        </TabsList>
        <TabsContent value="students" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Students</CardTitle>
              <CardDescription>
                Manage all registered students in the system.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md">
                <div className="grid grid-cols-5 p-4 font-medium border-b">
                  <div>UID</div>
                  <div>Name</div>
                  <div>Email</div>
                  <div>Class</div>
                  <div>Status</div>
                </div>
                <div className="divide-y">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="grid grid-cols-5 p-4">
                      <div>S{1000 + i}</div>
                      <div>Student {i + 1}</div>
                      <div>student{i + 1}@example.com</div>
                      <div>Class {10 + (i % 3)}</div>
                      <div>
                        <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800">
                          Active
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="teachers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Teachers</CardTitle>
              <CardDescription>
                Manage all registered teachers in the system.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-md">
                <div className="grid grid-cols-5 p-4 font-medium border-b">
                  <div>ID</div>
                  <div>Name</div>
                  <div>Email</div>
                  <div>Department</div>
                  <div>Status</div>
                </div>
                <div className="divide-y">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="grid grid-cols-5 p-4">
                      <div>T{100 + i}</div>
                      <div>Teacher {i + 1}</div>
                      <div>teacher{i + 1}@example.com</div>
                      <div>
                        {
                          ["Science", "Math", "English", "History", "Computer"][
                            i
                          ]
                        }
                      </div>
                      <div>
                        <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800">
                          Active
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
