"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Pencil, Trash, Eye } from "lucide-react"
import Link from "next/link"
import { mockJobPostings } from "@/lib/mock-data"

interface JobPostingListProps {
  status: "active" | "draft" | "expired"
}

export function JobPostingList({ status }: JobPostingListProps) {
  // Filter jobs based on status
  const jobs = mockJobPostings.filter((job) => job.status === status)

  if (jobs.length === 0) {
    return (
      <div className="flex h-[300px] items-center justify-center rounded-md border border-dashed">
        <div className="text-center">
          <h3 className="text-lg font-medium">No {status} jobs</h3>
          <p className="text-sm text-muted-foreground">
            {status === "active" && "You don't have any active job postings."}
            {status === "draft" && "You don't have any draft job postings."}
            {status === "expired" && "You don't have any expired job postings."}
          </p>
          {status === "draft" && (
            <Link href="/dashboard/post-job">
              <Button className="mt-4">Create a job posting</Button>
            </Link>
          )}
        </div>
      </div>
    )
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Job Title</TableHead>
          <TableHead>Applications</TableHead>
          <TableHead>Posted Date</TableHead>
          <TableHead>Expires</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jobs.map((job) => (
          <TableRow key={job.id}>
            <TableCell className="font-medium">{job.title}</TableCell>
            <TableCell>{job.applications}</TableCell>
            <TableCell>{job.postedDate}</TableCell>
            <TableCell>{job.expiresAt}</TableCell>
            <TableCell>
              <Badge variant={job.status === "active" ? "default" : job.status === "draft" ? "outline" : "secondary"}>
                {job.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link href={`/jobs/${job.id}`}>
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href={`/dashboard/edit-job/${job.id}`}>
                      <Pencil className="mr-2 h-4 w-4" />
                      Edit
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive focus:text-destructive">
                    <Trash className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

