import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Briefcase, Clock, DollarSign, MapPin } from "lucide-react"
import { mockJobs } from "@/lib/mock-data"

interface JobDetailHeaderProps {
  jobId: string
}

export function JobDetailHeader({ jobId }: JobDetailHeaderProps) {
  // In a real app, we would fetch the job data based on the ID
  const job = mockJobs.find((job) => job.id === jobId) || mockJobs[0]

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4">
          <Avatar className="h-16 w-16 rounded-md">
            <AvatarImage src={job.company.logo} alt={job.company.name} />
            <AvatarFallback className="rounded-md bg-primary/10 text-primary">
              {job.company.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">{job.title}</h1>
            <p className="text-lg text-muted-foreground">{job.company.name}</p>
            <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="mr-1 h-4 w-4" />
                {job.location}
              </div>
              <div className="flex items-center">
                <DollarSign className="mr-1 h-4 w-4" />
                {job.salary}
              </div>
              <div className="flex items-center">
                <Briefcase className="mr-1 h-4 w-4" />
                {job.type}
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                Posted 2 weeks ago
              </div>
            </div>
          </div>
        </div>
        <Badge variant="secondary" className="text-xs">
          {job.category}
        </Badge>
      </div>
    </div>
  )
}

