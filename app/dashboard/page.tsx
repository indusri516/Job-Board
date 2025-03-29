import { DashboardStats } from "@/components/dashboard-stats"
import { JobPostingList } from "@/components/job-posting-list"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Company Dashboard</h1>
        <Link href="/dashboard/post-job">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Post New Job
          </Button>
        </Link>
      </div>

      <DashboardStats />

      <Tabs defaultValue="active" className="mt-8">
        <TabsList>
          <TabsTrigger value="active">Active Jobs</TabsTrigger>
          <TabsTrigger value="draft">Drafts</TabsTrigger>
          <TabsTrigger value="expired">Expired</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="mt-4">
          <JobPostingList status="active" />
        </TabsContent>
        <TabsContent value="draft" className="mt-4">
          <JobPostingList status="draft" />
        </TabsContent>
        <TabsContent value="expired" className="mt-4">
          <JobPostingList status="expired" />
        </TabsContent>
        <TabsContent value="applications" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Applications</CardTitle>
              <CardDescription>View and manage applications to your job postings</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">No applications to display at this time.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

