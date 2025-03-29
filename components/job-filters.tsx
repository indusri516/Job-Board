"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

export function JobFilters() {
  const [salaryRange, setSalaryRange] = useState([50])

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-medium">Job Type</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="full-time" />
                <Label htmlFor="full-time">Full-time</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="part-time" />
                <Label htmlFor="part-time">Part-time</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="contract" />
                <Label htmlFor="contract">Contract</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="freelance" />
                <Label htmlFor="freelance">Freelance</Label>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Experience Level</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="entry" />
                <Label htmlFor="entry">Entry Level</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="mid" />
                <Label htmlFor="mid">Mid Level</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="senior" />
                <Label htmlFor="senior">Senior Level</Label>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Salary Range</h3>
              <span className="text-sm text-muted-foreground">${salaryRange[0]}k+</span>
            </div>
            <Slider defaultValue={[50]} max={200} step={5} value={salaryRange} onValueChange={setSalaryRange} />
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Location</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="remote" />
                <Label htmlFor="remote">Remote</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="hybrid" />
                <Label htmlFor="hybrid">Hybrid</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="onsite" />
                <Label htmlFor="onsite">On-site</Label>
              </div>
            </div>
          </div>

          <Button className="w-full">Apply Filters</Button>
        </CardContent>
      </Card>
    </div>
  )
}

