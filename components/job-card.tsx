import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Briefcase, Clock, DollarSign, MapPin } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { formatDistanceToNow } from "date-fns"

interface JobCardProps {
  job: {
    id: string
    title: string
    company: {
      name: string
      logo?: string
    }
    location: string
    salary: string
    type: string
    category: string
    createdAt: Date
  }
}

export function JobCard({ job }: JobCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <Avatar className="h-12 w-12 rounded-md">
              <AvatarImage src={job.company.logo} alt={job.company.name} />
              <AvatarFallback className="rounded-md bg-primary/10 text-primary">
                {job.company.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <Link href={`/jobs/${job.id}`} className="hover:underline">
                <h3 className="font-semibold">{job.title}</h3>
              </Link>
              <p className="text-sm text-muted-foreground">{job.company.name}</p>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="mr-1 h-3 w-3" />
                  {job.location}
                </div>
                <div className="flex items-center">
                  <DollarSign className="mr-1 h-3 w-3" />
                  {job.salary}
                </div>
                <div className="flex items-center">
                  <Briefcase className="mr-1 h-3 w-3" />
                  {job.type}
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1 h-3 w-3" />
                  {formatDistanceToNow(job.createdAt, { addSuffix: true })}
                </div>
              </div>
            </div>
          </div>
          <Badge variant="secondary">{job.category}</Badge>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t bg-muted/50 px-6 py-3">
        <Link href={`/jobs/${job.id}`} className="w-full">
          <Button variant="default" className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

