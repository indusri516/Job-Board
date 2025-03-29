import { Card, CardContent } from "@/components/ui/card"
import { Building2, Calendar, Clock, Globe, Users } from "lucide-react"

export function JobDetailInfo() {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">Job Details</h3>
        <div className="space-y-4">
          <div className="flex items-start">
            <Building2 className="mr-3 h-5 w-5 text-muted-foreground" />
            <div>
              <p className="font-medium">Company Size</p>
              <p className="text-sm text-muted-foreground">50-100 employees</p>
            </div>
          </div>
          <div className="flex items-start">
            <Globe className="mr-3 h-5 w-5 text-muted-foreground" />
            <div>
              <p className="font-medium">Company Website</p>
              <a href="#" className="text-sm text-primary hover:underline">
                www.company.com
              </a>
            </div>
          </div>
          <div className="flex items-start">
            <Calendar className="mr-3 h-5 w-5 text-muted-foreground" />
            <div>
              <p className="font-medium">Employment Type</p>
              <p className="text-sm text-muted-foreground">Full-time</p>
            </div>
          </div>
          <div className="flex items-start">
            <Clock className="mr-3 h-5 w-5 text-muted-foreground" />
            <div>
              <p className="font-medium">Experience Level</p>
              <p className="text-sm text-muted-foreground">3+ years</p>
            </div>
          </div>
          <div className="flex items-start">
            <Users className="mr-3 h-5 w-5 text-muted-foreground" />
            <div>
              <p className="font-medium">Team</p>
              <p className="text-sm text-muted-foreground">Engineering</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

