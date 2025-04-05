// "use client";

// import { useState } from "react";
// import {
//   DragDropContext,
//   Droppable,
//   Draggable,
//   DropResult,
//   DraggableProvided,
//   DraggableStateSnapshot,
//   DroppableProvided,
//   DroppableStateSnapshot,
// } from "react-beautiful-dnd";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Plus, MoreHorizontal, Clock, User } from "lucide-react";

// // Define types for our data structure
// interface Task {
//   id: string;
//   content: string;
//   assignee: string;
//   dueDate: string;
// }

// interface Column {
//   id: string;
//   title: string;
//   taskIds: string[];
// }

// interface KanbanData {
//   tasks: {
//     [key: string]: Task;
//   };
//   columns: {
//     [key: string]: Column;
//   };
//   columnOrder: string[];
// }

// // Initial data for the Kanban board
// const initialData: KanbanData = {
//   tasks: {
//     "task-1": {
//       id: "task-1",
//       content: "Create Mathematics Final Paper",
//       assignee: "John Doe",
//       dueDate: "2023-06-15",
//     },
//     "task-2": {
//       id: "task-2",
//       content: "Review Science Mid-term Questions",
//       assignee: "Jane Smith",
//       dueDate: "2023-06-10",
//     },
//     "task-3": {
//       id: "task-3",
//       content: "Prepare English Literature Essay Topics",
//       assignee: "Robert Johnson",
//       dueDate: "2023-06-20",
//     },
//     "task-4": {
//       id: "task-4",
//       content: "Grade History Assignments",
//       assignee: "Sarah Williams",
//       dueDate: "2023-06-08",
//     },
//     "task-5": {
//       id: "task-5",
//       content: "Create Computer Science Practical Exam",
//       assignee: "Michael Brown",
//       dueDate: "2023-06-25",
//     },
//   },
//   columns: {
//     "column-1": {
//       id: "column-1",
//       title: "To Do",
//       taskIds: ["task-1", "task-2"],
//     },
//     "column-2": {
//       id: "column-2",
//       title: "In Progress",
//       taskIds: ["task-3", "task-4"],
//     },
//     "column-3": {
//       id: "column-3",
//       title: "Done",
//       taskIds: ["task-5"],
//     },
//   },
//   columnOrder: ["column-1", "column-2", "column-3"],
// };

// interface NewTask {
//   content: string;
//   assignee: string;
//   dueDate: string;
// }

// export default function TasksPage(): JSX.Element {
//   const [data, setData] = useState<KanbanData>(initialData);
//   const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
//   const [newTask, setNewTask] = useState<NewTask>({
//     content: "",
//     assignee: "",
//     dueDate: "",
//   });

//   const onDragEnd = (result: DropResult): void => {
//     const { destination, source, draggableId } = result;

//     // If there's no destination or if the item was dropped in the same place
//     if (
//       !destination ||
//       (destination.droppableId === source.droppableId &&
//         destination.index === source.index)
//     ) {
//       return;
//     }

//     const sourceColumn = data.columns[source.droppableId];
//     const destinationColumn = data.columns[destination.droppableId];

//     // If moving within the same column
//     if (sourceColumn.id === destinationColumn.id) {
//       const newTaskIds = Array.from(sourceColumn.taskIds);
//       newTaskIds.splice(source.index, 1);
//       newTaskIds.splice(destination.index, 0, draggableId);

//       const newColumn = {
//         ...sourceColumn,
//         taskIds: newTaskIds,
//       };

//       setData({
//         ...data,
//         columns: {
//           ...data.columns,
//           [newColumn.id]: newColumn,
//         },
//       });
//       return;
//     }

//     // Moving from one column to another
//     const sourceTaskIds = Array.from(sourceColumn.taskIds);
//     sourceTaskIds.splice(source.index, 1);
//     const newSourceColumn = {
//       ...sourceColumn,
//       taskIds: sourceTaskIds,
//     };

//     const destinationTaskIds = Array.from(destinationColumn.taskIds);
//     destinationTaskIds.splice(destination.index, 0, draggableId);
//     const newDestinationColumn = {
//       ...destinationColumn,
//       taskIds: destinationTaskIds,
//     };

//     setData({
//       ...data,
//       columns: {
//         ...data.columns,
//         [newSourceColumn.id]: newSourceColumn,
//         [newDestinationColumn.id]: newDestinationColumn,
//       },
//     });
//   };

//   const handleAddTask = (): void => {
//     // Create a new task ID
//     const taskId = `task-${Object.keys(data.tasks).length + 1}`;

//     // Add the new task to the tasks object
//     const updatedTasks = {
//       ...data.tasks,
//       [taskId]: {
//         id: taskId,
//         content: newTask.content,
//         assignee: newTask.assignee,
//         dueDate: newTask.dueDate,
//       },
//     };

//     // Add the task ID to the first column (To Do)
//     const updatedColumn = {
//       ...data.columns["column-1"],
//       taskIds: [...data.columns["column-1"].taskIds, taskId],
//     };

//     // Update the state
//     setData({
//       ...data,
//       tasks: updatedTasks,
//       columns: {
//         ...data.columns,
//         "column-1": updatedColumn,
//       },
//     });

//     // Reset the form and close the dialog
//     setNewTask({ content: "", assignee: "", dueDate: "" });
//     setIsDialogOpen(false);
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold tracking-tight">Task Management</h1>
//           <p className="text-muted-foreground">
//             Manage and assign tasks using the Kanban board
//           </p>
//         </div>
//         <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//           <DialogTrigger asChild>
//             <Button>
//               <Plus className="mr-2 h-4 w-4" />
//               Add Task
//             </Button>
//           </DialogTrigger>
//           <DialogContent>
//             <DialogHeader>
//               <DialogTitle>Add New Task</DialogTitle>
//               <DialogDescription>
//                 Create a new task and assign it to a teacher
//               </DialogDescription>
//             </DialogHeader>
//             <div className="grid gap-4 py-4">
//               <div className="grid gap-2">
//                 <Label htmlFor="task-title">Task Title</Label>
//                 <Input
//                   id="task-title"
//                   value={newTask.content}
//                   onChange={(e) =>
//                     setNewTask({ ...newTask, content: e.target.value })
//                   }
//                   placeholder="Create exam paper"
//                 />
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="assignee">Assignee</Label>
//                 <Input
//                   id="assignee"
//                   value={newTask.assignee}
//                   onChange={(e) =>
//                     setNewTask({ ...newTask, assignee: e.target.value })
//                   }
//                   placeholder="Teacher name"
//                 />
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="due-date">Due Date</Label>
//                 <Input
//                   id="due-date"
//                   type="date"
//                   value={newTask.dueDate}
//                   onChange={(e) =>
//                     setNewTask({ ...newTask, dueDate: e.target.value })
//                   }
//                 />
//               </div>
//             </div>
//             <DialogFooter>
//               <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
//                 Cancel
//               </Button>
//               <Button
//                 onClick={handleAddTask}
//                 disabled={!newTask.content.trim()}
//               >
//                 Add Task
//               </Button>
//             </DialogFooter>
//           </DialogContent>
//         </Dialog>
//       </div>

//       <DragDropContext onDragEnd={onDragEnd} isDropDisabled={false}>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {data.columnOrder.map((columnId) => {
//             const column = data.columns[columnId];
//             const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

//             return (
//               <div key={column.id} className="flex flex-col">
//                 <div className="mb-3 flex items-center justify-between">
//                   <h3 className="font-semibold text-lg">{column.title}</h3>
//                   <span className="text-muted-foreground text-sm">
//                     {tasks.length} tasks
//                   </span>
//                 </div>
//                 <Droppable droppableId={column.id}>
//                   {(
//                     provided: DroppableProvided,
//                     snapshot: DroppableStateSnapshot
//                   ) => (
//                     <div
//                       ref={provided.innerRef}
//                       {...provided.droppableProps}
//                       className={`flex-1 rounded-lg border p-4 min-h-[500px] ${
//                         snapshot.isDraggingOver ? "bg-muted/50" : ""
//                       }`}
//                     >
//                       {tasks.map((task, index) => (
//                         <Draggable
//                           key={task.id}
//                           draggableId={task.id}
//                           index={index}
//                         >
//                           {(provided, snapshot) => (
//                             <Card
//                               ref={provided.innerRef}
//                               {...provided.draggableProps}
//                               {...provided.dragHandleProps}
//                               className={`mb-3 ${
//                                 snapshot.isDragging ? "shadow-lg" : ""
//                               }`}
//                             >
//                               <CardHeader className="p-3 pb-0">
//                                 <div className="flex justify-between items-start">
//                                   <CardTitle className="text-sm font-medium">
//                                     {task.content}
//                                   </CardTitle>
//                                   <Button
//                                     variant="ghost"
//                                     size="icon"
//                                     className="h-6 w-6"
//                                   >
//                                     <MoreHorizontal className="h-4 w-4" />
//                                   </Button>
//                                 </div>
//                               </CardHeader>
//                               <CardContent className="p-3 pt-2">
//                                 <div className="flex items-center text-xs text-muted-foreground">
//                                   <User className="mr-1 h-3 w-3" />
//                                   {task.assignee}
//                                 </div>
//                                 <div className="flex items-center text-xs text-muted-foreground mt-1">
//                                   <Clock className="mr-1 h-3 w-3" />
//                                   Due: {task.dueDate}
//                                 </div>
//                               </CardContent>
//                             </Card>
//                           )}
//                         </Draggable>
//                       ))}
//                       {provided.placeholder}
//                     </div>
//                   )}
//                 </Droppable>
//               </div>
//             );
//           })}
//         </div>
//       </DragDropContext>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, MoreHorizontal, Clock, User } from "lucide-react";

// Define types for our data structure
interface Task {
  id: string;
  content: string;
  assignee: string;
  dueDate: string;
}

interface Column {
  id: string;
  title: string;
  taskIds: string[];
}

interface KanbanData {
  tasks: {
    [key: string]: Task;
  };
  columns: {
    [key: string]: Column;
  };
  columnOrder: string[];
}

// Initial data for the Kanban board
const initialData: KanbanData = {
  tasks: {
    "task-1": {
      id: "task-1",
      content: "Create Mathematics Final Paper",
      assignee: "John Doe",
      dueDate: "2023-06-15",
    },
    "task-2": {
      id: "task-2",
      content: "Review Science Mid-term Questions",
      assignee: "Jane Smith",
      dueDate: "2023-06-10",
    },
    "task-3": {
      id: "task-3",
      content: "Prepare English Literature Essay Topics",
      assignee: "Robert Johnson",
      dueDate: "2023-06-20",
    },
    "task-4": {
      id: "task-4",
      content: "Grade History Assignments",
      assignee: "Sarah Williams",
      dueDate: "2023-06-08",
    },
    "task-5": {
      id: "task-5",
      content: "Create Computer Science Practical Exam",
      assignee: "Michael Brown",
      dueDate: "2023-06-25",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: ["task-1", "task-2"],
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      taskIds: ["task-3", "task-4"],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: ["task-5"],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

interface NewTask {
  content: string;
  assignee: string;
  dueDate: string;
}

// Fix for React 18 compatibility with react-beautiful-dnd
// This helps resolve the isDropDisabled must be a boolean error
const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: 0,
  margin: 0,

  // styles we need to apply on draggables
  ...draggableStyle,
  isCombineEnabled: false,
});

const getListStyle = (isDraggingOver: boolean) => ({
  background: isDraggingOver ? "rgba(0, 0, 0, 0.05)" : "",
  width: "100%",
  minHeight: 500,
  padding: 16,
  borderRadius: 8,
  border: "1px solid rgba(0, 0, 0, 0.1)",
});

export default function TasksPage(): JSX.Element {
  const [data, setData] = useState<KanbanData>(initialData);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [newTask, setNewTask] = useState<NewTask>({
    content: "",
    assignee: "",
    dueDate: "",
  });

  const onDragEnd = (result: DropResult): void => {
    const { destination, source, draggableId } = result;

    // If there's no destination or if the item was dropped in the same place
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    const sourceColumn = data.columns[source.droppableId];
    const destinationColumn = data.columns[destination.droppableId];

    // If moving within the same column
    if (sourceColumn.id === destinationColumn.id) {
      const newTaskIds = Array.from(sourceColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...sourceColumn,
        taskIds: newTaskIds,
      };

      setData({
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      });
      return;
    }

    // Moving from one column to another
    const sourceTaskIds = Array.from(sourceColumn.taskIds);
    sourceTaskIds.splice(source.index, 1);
    const newSourceColumn = {
      ...sourceColumn,
      taskIds: sourceTaskIds,
    };

    const destinationTaskIds = Array.from(destinationColumn.taskIds);
    destinationTaskIds.splice(destination.index, 0, draggableId);
    const newDestinationColumn = {
      ...destinationColumn,
      taskIds: destinationTaskIds,
    };

    setData({
      ...data,
      columns: {
        ...data.columns,
        [newSourceColumn.id]: newSourceColumn,
        [newDestinationColumn.id]: newDestinationColumn,
      },
    });
  };

  const handleAddTask = (): void => {
    // Create a new task ID
    const taskId = `task-${Object.keys(data.tasks).length + 1}`;

    // Add the new task to the tasks object
    const updatedTasks = {
      ...data.tasks,
      [taskId]: {
        id: taskId,
        content: newTask.content,
        assignee: newTask.assignee,
        dueDate: newTask.dueDate,
      },
    };

    // Add the task ID to the first column (To Do)
    const updatedColumn = {
      ...data.columns["column-1"],
      taskIds: [...data.columns["column-1"].taskIds, taskId],
    };

    // Update the state
    setData({
      ...data,
      tasks: updatedTasks,
      columns: {
        ...data.columns,
        "column-1": updatedColumn,
      },
    });

    // Reset the form and close the dialog
    setNewTask({ content: "", assignee: "", dueDate: "" });
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Task Management</h1>
          <p className="text-muted-foreground">
            Manage and assign tasks using the Kanban board
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Task
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Task</DialogTitle>
              <DialogDescription>
                Create a new task and assign it to a teacher
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="task-title">Task Title</Label>
                <Input
                  id="task-title"
                  value={newTask.content}
                  onChange={(e) =>
                    setNewTask({ ...newTask, content: e.target.value })
                  }
                  placeholder="Create exam paper"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="assignee">Assignee</Label>
                <Input
                  id="assignee"
                  value={newTask.assignee}
                  onChange={(e) =>
                    setNewTask({ ...newTask, assignee: e.target.value })
                  }
                  placeholder="Teacher name"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="due-date">Due Date</Label>
                <Input
                  id="due-date"
                  type="date"
                  value={newTask.dueDate}
                  onChange={(e) =>
                    setNewTask({ ...newTask, dueDate: e.target.value })
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button
                onClick={handleAddTask}
                disabled={!newTask.content.trim()}
              >
                Add Task
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.columnOrder.map((columnId) => {
            const column = data.columns[columnId];
            const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

            return (
              <div key={column.id} className="flex flex-col">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-semibold text-lg">{column.title}</h3>
                  <span className="text-muted-foreground text-sm">
                    {tasks.length} tasks
                  </span>
                </div>
                <Droppable
                  droppableId={column.id}
                  isCombineEnabled={true}
                  ignoreContainerClipping={false}
                  isDropDisabled={false} // Explicitly setting this prop to a boolean
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      style={getListStyle(snapshot.isDraggingOver)}
                    >
                      {tasks.map((task, index) => (
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
                          index={index}
                          isDragDisabled={false} // Explicitly setting this prop to a boolean
                        >
                          {(provided, snapshot) => (
                            <Card
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                              )}
                              className="mb-3"
                            >
                              <CardHeader className="p-3 pb-0">
                                <div className="flex justify-between items-start">
                                  <CardTitle className="text-sm font-medium">
                                    {task.content}
                                  </CardTitle>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6"
                                  >
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </div>
                              </CardHeader>
                              <CardContent className="p-3 pt-2">
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <User className="mr-1 h-3 w-3" />
                                  {task.assignee}
                                </div>
                                <div className="flex items-center text-xs text-muted-foreground mt-1">
                                  <Clock className="mr-1 h-3 w-3" />
                                  Due: {task.dueDate}
                                </div>
                              </CardContent>
                            </Card>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            );
          })}
        </div>
      </DragDropContext>
    </div>
  );
}
