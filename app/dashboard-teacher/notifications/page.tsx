import DashboardLayout from "@/components/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      title: "Approval Pending",
      message: "Your paper for 'Data Structures Final Exam' is pending approval from the department head.",
      time: "10 minutes ago",
      unread: true,
      type: "warning",
    },
    {
      id: 2,
      title: "Paper Submitted",
      message: "You have successfully submitted the 'Computer Networks Mid-Term' paper.",
      time: "2 hours ago",
      unread: true,
      type: "success",
    },
    {
      id: 3,
      title: "Deadline Reminder",
      message: "The deadline for 'Algorithms Quiz 3' is approaching in 2 days.",
      time: "5 hours ago",
      unread: false,
      type: "warning",
    },
    {
      id: 4,
      title: "New Paper Request",
      message: "You have received a new paper request for 'Database Systems' from Dr. Patel.",
      time: "Yesterday",
      unread: false,
      type: "info",
    },
    {
      id: 5,
      title: "Verification Complete",
      message: "Your 'Operating Systems Quiz 1' paper has been verified by Priya Gupta.",
      time: "2 days ago",
      unread: false,
      type: "success",
    },
    {
      id: 6,
      title: "Paper Rejected",
      message: "Your submission for 'Advanced Algorithms' has been rejected. Please review the comments.",
      time: "3 days ago",
      unread: false,
      type: "error",
    },
    {
      id: 7,
      title: "System Maintenance",
      message: "The system will be down for maintenance on Sunday, April 10, from 2 AM to 5 AM.",
      time: "4 days ago",
      unread: false,
      type: "info",
    },
    {
      id: 8,
      title: "New Feature Available",
      message: "You can now use the blockchain verification feature for all your paper submissions.",
      time: "1 week ago",
      unread: false,
      type: "info",
    },
  ]

  const getNotificationStyles = (type, unread) => {
    const baseStyles = "relative rounded-lg p-4 border-l-4 "

    if (unread) {
      switch (type) {
        case "success":
          return baseStyles + "bg-green-950/30 border-green-500"
        case "warning":
          return baseStyles + "bg-yellow-950/30 border-yellow-500"
        case "info":
          return baseStyles + "bg-blue-950/30 border-blue-500"
        case "error":
          return baseStyles + "bg-red-950/30 border-red-500"
        default:
          return baseStyles + "bg-muted border-muted-foreground"
      }
    } else {
      switch (type) {
        case "success":
          return baseStyles + "bg-green-950/20 border-green-700/50"
        case "warning":
          return baseStyles + "bg-yellow-950/20 border-yellow-700/50"
        case "info":
          return baseStyles + "bg-blue-950/20 border-blue-700/50"
        case "error":
          return baseStyles + "bg-red-950/20 border-red-700/50"
        default:
          return baseStyles + "bg-muted/50 border-muted-foreground/50"
      }
    }
  }

  return (
    <DashboardLayout>
      <div className="grid gap-6">
        <Card className="shadow-md">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                All Notifications
              </CardTitle>
              <Button variant="outline" size="sm">
                Mark all as read
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div key={notification.id} className={getNotificationStyles(notification.type, notification.unread)}>
                  {notification.unread && (
                    <span className="absolute right-4 top-4 h-2 w-2 rounded-full bg-primary"></span>
                  )}
                  <h4 className="font-medium">{notification.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{notification.message}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{notification.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

