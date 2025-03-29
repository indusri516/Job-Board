import { JobApplyForm } from "@/components/job-apply-form"
import { JobDetailHeader } from "@/components/job-detail-header"
import { JobDetailInfo } from "@/components/job-detail-info"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Bookmark, Share2 } from "lucide-react"
import Link from "next/link"

export default function JobDetailPage({ params }: { params: { id: string } }) {
  // In a real app, we would fetch the job data based on the ID
  const jobId = params.id

  return (
    <div className="container py-8">
      <Link href="/" className="mb-6 flex items-center text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to jobs
      </Link>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <JobDetailHeader jobId={jobId} />

          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Job Description</h2>
                <p>
                  We are looking for a talented developer to join our team. You will be responsible for developing and
                  maintaining web applications, collaborating with cross-functional teams, and ensuring high-quality
                  code.
                </p>

                <h2 className="text-xl font-semibold">Requirements</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>3+ years of experience with React.js</li>
                  <li>Strong knowledge of JavaScript/TypeScript</li>
                  <li>Experience with Next.js</li>
                  <li>Familiarity with CSS frameworks like Tailwind</li>
                  <li>Good understanding of RESTful APIs</li>
                </ul>

                <h2 className="text-xl font-semibold">Benefits</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Competitive salary</li>
                  <li>Remote work options</li>
                  <li>Health insurance</li>
                  <li>Flexible working hours</li>
                  <li>Professional development budget</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between mb-4">
                <Button className="w-full">Apply Now</Button>
              </div>
              <div className="flex justify-between">
                <Button variant="outline" size="icon">
                  <Bookmark className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <JobDetailInfo />

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Apply</h3>
              <JobApplyForm jobId={jobId} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

