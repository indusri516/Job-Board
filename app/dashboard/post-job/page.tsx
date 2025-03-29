import { JobPostForm } from "@/components/job-post-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PostJobPage() {
  return (
    <div className="container py-8">
      <Link href="/dashboard" className="mb-6 flex items-center text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to dashboard
      </Link>

      <Card>
        <CardHeader>
          <CardTitle>Post a New Job</CardTitle>
          <CardDescription>Fill out the form below to create a new job listing</CardDescription>
        </CardHeader>
        <CardContent>
          <JobPostForm />
        </CardContent>
      </Card>
    </div>
  )
}

