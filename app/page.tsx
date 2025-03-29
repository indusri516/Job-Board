import { JobFilters } from "@/components/job-filters"
import { JobList } from "@/components/job-list"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function Home() {
  return (
    <div className="container py-8">
      <section className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Find Your Dream Job</h1>
        <p className="text-xl text-muted-foreground">Browse thousands of job listings from top companies</p>
        <div className="flex w-full max-w-lg items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search jobs, keywords, companies..." className="pl-8" />
          </div>
          <Button type="submit">Search</Button>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <JobFilters />
        </div>
        <div className="lg:col-span-3">
          <JobList />
        </div>
      </div>
    </div>
  )
}

