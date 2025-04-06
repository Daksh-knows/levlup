"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Download, ThumbsDown, ThumbsUp } from "lucide-react"

// Mock data for answer sheets
const exams = [
  { id: "1", name: "Data Structures", code: "CS301", date: "May 15, 2023" },
  { id: "2", name: "Database Management", code: "CS305", date: "May 20, 2023" },
  { id: "3", name: "Computer Networks", code: "CS310", date: "May 25, 2023" },
  { id: "4", name: "Algorithms", code: "CS302", date: "April 10, 2023" },
  { id: "5", name: "Operating Systems", code: "CS304", date: "April 5, 2023" },
]

const questions = [
  {
    id: "q1",
    text: "Which data structure would be most efficient for implementing a priority queue?",
    type: "mcq",
    options: [
      { id: "a", text: "Array" },
      { id: "b", text: "Linked List" },
      { id: "c", text: "Heap" },
      { id: "d", text: "Stack" },
    ],
    studentAnswer: "c",
    correctAnswer: "c",
    score: 10,
    maxScore: 10,
    feedback: "Correct! Heaps are the most efficient data structure for priority queues.",
  },
  {
    id: "q2",
    text: "What is the time complexity of the quicksort algorithm in the worst case?",
    type: "mcq",
    options: [
      { id: "a", text: "O(n)" },
      { id: "b", text: "O(n log n)" },
      { id: "c", text: "O(n²)" },
      { id: "d", text: "O(log n)" },
    ],
    studentAnswer: "b",
    correctAnswer: "c",
    score: 0,
    maxScore: 10,
    feedback: "Incorrect. The worst-case time complexity of quicksort is O(n²).",
  },
  {
    id: "q3",
    text: "Explain the difference between a stack and a queue data structure and provide an example use case for each.",
    type: "essay",
    studentAnswer:
      "A stack is a LIFO (Last In First Out) data structure where elements are added and removed from the same end. A queue is a FIFO (First In First Out) data structure where elements are added at one end and removed from the other. Stacks are used in function call management and undo operations, while queues are used in scheduling and breadth-first search algorithms.",
    score: 18,
    maxScore: 20,
    feedback:
      "Good explanation of the basic differences and use cases. Could have elaborated more on the implementation details.",
  },
]

export function AnswerSheetViewer() {
  const [selectedExam, setSelectedExam] = useState(exams[0].id)
  const [selectedQuestion, setSelectedQuestion] = useState(questions[0].id)

  const currentQuestion = questions.find((q) => q.id === selectedQuestion)

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        <Select value={selectedExam} onValueChange={setSelectedExam}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select an exam" />
          </SelectTrigger>
          <SelectContent>
            {exams.map((exam) => (
              <SelectItem key={exam.id} value={exam.id}>
                {exam.name} ({exam.code}) - {exam.date}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
          <Badge className="ml-auto">Score: 85/100</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card className="md:col-span-1">
          <CardContent className="p-4">
            <h3 className="mb-2 font-medium">Questions</h3>
            <div className="space-y-2">
              {questions.map((question, index) => (
                <Button
                  key={question.id}
                  variant={selectedQuestion === question.id ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setSelectedQuestion(question.id)}
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-xs">
                      {index + 1}
                    </span>
                    <span className="truncate">{question.type === "mcq" ? "Multiple Choice" : "Essay"}</span>
                    {question.score === question.maxScore ? (
                      <ThumbsUp className="ml-auto h-4 w-4 text-green-500" />
                    ) : question.score === 0 ? (
                      <ThumbsDown className="ml-auto h-4 w-4 text-red-500" />
                    ) : (
                      <span className="ml-auto text-xs">
                        {question.score}/{question.maxScore}
                      </span>
                    )}
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <CardContent className="p-4">
            {currentQuestion && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Question {questions.indexOf(currentQuestion) + 1}</h3>
                  <p className="mt-2">{currentQuestion.text}</p>
                </div>

                {currentQuestion.type === "mcq" ? (
                  <div className="space-y-4">
                    <h4 className="font-medium">Options:</h4>
                    <div className="space-y-2">
                      {currentQuestion.options?.map((option) => (
                        <div
                          key={option.id}
                          className={`flex items-center space-x-2 rounded-md border p-3 ${
                            option.id === currentQuestion.correctAnswer
                              ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                              : option.id === currentQuestion.studentAnswer &&
                                  option.id !== currentQuestion.correctAnswer
                                ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                                : ""
                          }`}
                        >
                          <div className="flex h-5 w-5 items-center justify-center rounded-full border">
                            {option.id}
                          </div>
                          <span>{option.text}</span>
                          {option.id === currentQuestion.correctAnswer && (
                            <CheckCircle2 className="ml-auto h-4 w-4 text-green-500" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h4 className="font-medium">Your Answer:</h4>
                    <div className="rounded-md border p-4">
                      <p className="whitespace-pre-wrap">{currentQuestion.studentAnswer}</p>
                    </div>
                  </div>
                )}

                <div className="rounded-md border-l-4 border-l-primary bg-muted p-4">
                  <h4 className="font-medium">Feedback:</h4>
                  <p className="mt-1 text-sm">{currentQuestion.feedback}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-medium">Score:</span>
                    <Badge variant={currentQuestion.score === currentQuestion.maxScore ? "default" : "outline"}>
                      {currentQuestion.score}/{currentQuestion.maxScore}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-md bg-muted p-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Blockchain Verified</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Hash: 0x7f83b1657ff1...</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

