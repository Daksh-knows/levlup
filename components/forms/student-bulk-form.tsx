"use client";

import type React from "react";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Upload } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  csvData: z.string().min(1, "CSV data is required"),
  academicYear: z.string().min(1, "Academic year is required"),
  defaultPassword: z.string().min(6, "Password must be at least 6 characters"),
});

export function StudentBulkForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      csvData: "",
      academicYear: new Date().getFullYear().toString(),
      defaultPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);

      // Count the number of rows in the CSV data (excluding header)
      const rowCount = values.csvData.split("\n").length - 1;

      toast({
        title: "Students registered successfully",
        description: `${rowCount} students have been registered from the CSV data.`,
      });

      form.reset();
      setFile(null);
    }, 1500);
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);

      // Read the file content
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        form.setValue("csvData", content);
      };
      reader.readAsText(selectedFile);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bulk Register Students</CardTitle>
        <CardDescription>
          Register multiple students by uploading a CSV file or pasting CSV
          data.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="csvData"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CSV Data</FormLabel>
                  <FormControl>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Input
                          type="file"
                          accept=".csv"
                          onChange={handleFileChange}
                          className="hidden"
                          id="csv-upload"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() =>
                            document.getElementById("csv-upload")?.click()
                          }
                          className="w-full"
                        >
                          <Upload className="mr-2 h-4 w-4" />
                          {file ? file.name : "Upload CSV File"}
                        </Button>
                      </div>
                      <Textarea
                        placeholder="Or paste CSV data here (UID,Name,Email,Class,Section)"
                        className="min-h-[200px]"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormDescription>
                    CSV format: UID,Name,Email,Class,Section
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="academicYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Academic Year</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[2023, 2024, 2025].map((year) => (
                          <SelectItem key={year} value={year.toString()}>
                            {year}-{year + 1}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="defaultPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Default Password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormDescription>
                      This password will be set for all students in the bulk
                      import.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Registering..." : "Register Students"}
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        Students will be created with the information provided in the CSV data.
      </CardFooter>
    </Card>
  );
}
