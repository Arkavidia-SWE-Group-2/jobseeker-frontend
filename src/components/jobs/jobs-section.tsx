import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bookmark, Building, MapPin } from "lucide-react";

export default function JobsSection() {
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc",
      location: "San Francisco, CA (Remote)",
      salary: "$120,000 - $150,000",
      posted: "2 days ago",
      applicants: 45,
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "Creative Solutions",
      location: "New York, NY (Hybrid)",
      salary: "$90,000 - $110,000",
      posted: "1 week ago",
      applicants: 78,
    },
    {
      id: 3,
      title: "Product Manager",
      company: "Software Systems",
      location: "Austin, TX (On-site)",
      salary: "$130,000 - $160,000",
      posted: "3 days ago",
      applicants: 32,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Jobs For You</h2>
        <Card className="mb-4">
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Job Alerts</h3>
                <p className="text-sm text-gray-500">
                  You have 5 new job recommendations
                </p>
              </div>
              <Button>View All</Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {jobs.map((job) => (
            <Card key={job.id}>
              <CardContent className="p-4">
                <div>
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <Button variant="ghost" size="icon">
                      <Bookmark className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mt-1">
                    <Building className="h-4 w-4 mr-1" />
                    <span>{job.company}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{job.location}</span>
                  </div>
                  <p className="text-sm font-medium mt-2">{job.salary}</p>
                  <div className="flex justify-between text-sm text-gray-500 mt-3">
                    <span>Posted {job.posted}</span>
                    <span>{job.applicants} applicants</span>
                  </div>
                  <div className="mt-4">
                    <Button className="w-full">Apply Now</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
