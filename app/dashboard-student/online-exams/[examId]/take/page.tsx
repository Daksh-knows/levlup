"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ProctoringSidebar } from "@/components/proctoring-sidebar";
import { AlertTriangle, Clock, Save } from "lucide-react";

export default function TakeExamPage({
  params,
}: {
  params: { examId: string };
}) {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(7200); // 2 hours in seconds
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [proctorWarnings, setProctorWarnings] = useState<string[]>([]);

  // Mock exam data - in a real app, this would be fetched from an API
  const examData = {
    id: params.examId,
    title: "Data Structures and Algorithms",
    code: "CS301",
    duration: "2 hours",
    totalQuestions: 10,
    questions: Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      type: i < 8 ? "mcq" : "essay",
      text: `Question ${i + 1}: ${
        i < 8
          ? "Which data structure would be most efficient for..."
          : "Explain the time complexity analysis of..."
      }`,
      options:
        i < 8
          ? [
              { id: "a", text: "Option A" },
              { id: "b", text: "Option B" },
              { id: "c", text: "Option C" },
              { id: "d", text: "Option D" },
            ]
          : null,
    })),
  };

  // Timer effect
  useEffect(() => {
    if (examSubmitted) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examSubmitted]);

  // Mock proctor warnings
  useEffect(() => {
    // Simulate random proctor warnings
    const warningInterval = setInterval(() => {
      if (Math.random() > 0.9) {
        const warnings = [
          "Please center yourself in the camera view",
          "Multiple faces detected in frame",
          "Please avoid looking away from the screen",
          "Background noise detected",
        ];
        const randomWarning =
          warnings[Math.floor(Math.random() * warnings.length)];
        setProctorWarnings((prev) => [...prev, randomWarning]);
      }
    }, 30000); // Check every 30 seconds

    return () => clearInterval(warningInterval);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleAnswerChange = (value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: value,
    }));
  };

  const handleSubmitExam = () => {
    setExamSubmitted(true);
    // In a real app, this would send the answers to the server
    setTimeout(() => {
      router.push(`/dashboard-student/online-exams/${params.examId}/complete`);
    }, 2000);
  };

  const currentQuestionData = examData.questions[currentQuestion];

  if (examSubmitted) {
    return (
      <div className="flex h-full items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Submitting Your Exam</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center space-y-4 py-8">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            <p className="text-center text-muted-foreground">
              Please wait while your answers are being securely submitted and
              recorded on the blockchain...
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col md:flex-row">
      <div className="flex-1 overflow-auto p-4 md:p-6">
        <div className="mb-6 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">
              {examData.title}
            </h1>
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{formatTime(timeLeft)}</span>
            </Badge>
          </div>
          <p className="text-muted-foreground">
            {examData.code} • {examData.totalQuestions} Questions
          </p>
        </div>

        {timeLeft < 300 && ( // Warning when less than 5 minutes left
          <Alert variant="destructive" className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Time is running out!</AlertTitle>
            <AlertDescription>
              You have less than 5 minutes remaining. Please finish your exam.
            </AlertDescription>
          </Alert>
        )}

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>
                Question {currentQuestionData.id} of {examData.totalQuestions}
              </span>
              <Badge variant={answers[currentQuestion] ? "default" : "outline"}>
                {answers[currentQuestion] ? "Answered" : "Unanswered"}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="text-lg font-medium">
                {currentQuestionData.text}
              </div>

              {currentQuestionData.type === "mcq" ? (
                <RadioGroup
                  value={answers[currentQuestion] || ""}
                  onValueChange={handleAnswerChange}
                  className="space-y-3"
                >
                  {currentQuestionData.options?.map((option) => (
                    <div
                      key={option.id}
                      className="flex items-center space-x-2 rounded-md border p-3 transition-colors hover:bg-muted"
                    >
                      <RadioGroupItem
                        value={option.id}
                        id={`option-${option.id}`}
                      />
                      <Label
                        htmlFor={`option-${option.id}`}
                        className="flex-1 cursor-pointer"
                      >
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              ) : (
                <Textarea
                  placeholder="Type your answer here..."
                  className="min-h-[200px]"
                  value={answers[currentQuestion] || ""}
                  onChange={(e) => handleAnswerChange(e.target.value)}
                />
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() =>
                  setCurrentQuestion((prev) => Math.max(0, prev - 1))
                }
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  setCurrentQuestion((prev) =>
                    Math.min(examData.totalQuestions - 1, prev + 1)
                  )
                }
                disabled={currentQuestion === examData.totalQuestions - 1}
              >
                Next
              </Button>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="gap-1">
                <Save className="h-4 w-4" />
                <span>Save</span>
              </Button>
              <Button onClick={() => setShowSubmitDialog(true)}>
                Submit Exam
              </Button>
            </div>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Question Navigator</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
              {examData.questions.map((q, index) => (
                <Button
                  key={q.id}
                  variant={
                    currentQuestion === index
                      ? "default"
                      : answers[index]
                      ? "secondary"
                      : "outline"
                  }
                  className="h-10 w-10"
                  onClick={() => setCurrentQuestion(index)}
                >
                  {q.id}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <ProctoringSidebar warnings={proctorWarnings} />

      <Dialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Submit Exam</DialogTitle>
            <DialogDescription>
              Are you sure you want to submit your exam? You cannot make changes
              after submission.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="rounded-md bg-muted p-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Questions Answered:</span>
                <span>
                  {Object.keys(answers).length} of {examData.totalQuestions}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Questions Unanswered:</span>
                <span>
                  {examData.totalQuestions - Object.keys(answers).length} of{" "}
                  {examData.totalQuestions}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Time Remaining:</span>
                <span>{formatTime(timeLeft)}</span>
              </div>
            </div>

            {examData.totalQuestions - Object.keys(answers).length > 0 && (
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                  You have unanswered questions. Are you sure you want to
                  submit?
                </AlertDescription>
              </Alert>
            )}
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowSubmitDialog(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleSubmitExam}>Confirm Submission</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
