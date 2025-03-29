"use client"

import { useState } from "react"
import { JobCard } from "@/components/job-card"
import { Button } from "@/components/ui/button"
import { mockJobs } from "@/lib/mock-data"

export function JobList() {
  const [visibleJobs, setVisibleJobs] = useState(6)

  const loadMore = () => {
    setVisibleJobs((prev) => prev + 6)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Latest Jobs</h2>
        <p className="text-sm text-muted-foreground">
          Showing {Math.min(visibleJobs, mockJobs.length)} of {mockJobs.length} jobs
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {mockJobs.slice(0, visibleJobs).map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {visibleJobs < mockJobs.length && (
        <div className="flex justify-center mt-6">
          <Button onClick={loadMore} variant="outline">
            Load More Jobs
          </Button>
        </div>
      )}
    </div>
  )
}

