"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, Plus } from "lucide-react";

interface Education {
  id: number;
  school: string;
  degree: string;
  field: string;
  logo: string;
  startYear: string;
  endYear: string;
  activities: string;
}

export default function ProfileEducation() {
  const education: Education[] = [
    {
      id: 1,
      school: "Massachusetts Institute of Technology",
      degree: "Bachelor of Science",
      field: "Computer Science",
      logo: "/placeholder.svg?height=40&width=40",
      startYear: "2012",
      endYear: "2016",
      activities: "Computer Science Club, Hackathon Team, Research Assistant",
    },
    {
      id: 2,
      school: "Stanford University",
      degree: "Master's Degree",
      field: "Human-Computer Interaction",
      logo: "/placeholder.svg?height=40&width=40",
      startYear: "2016",
      endYear: "2018",
      activities:
        "UX Research Group, Teaching Assistant for Intro to Web Development",
    },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl">Education</CardTitle>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm">
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
          <Button variant="ghost" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {education.map((edu) => (
          <div key={edu.id} className="flex gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={edu.logo} alt={edu.school} />
              <AvatarFallback>{edu.school.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{edu.school}</h3>
              <p className="text-sm">
                {edu.degree}, {edu.field}
              </p>
              <p className="text-xs text-gray-500">
                {edu.startYear} - {edu.endYear}
              </p>
              <p className="text-sm mt-2">
                <span className="font-medium">Activities and societies:</span>{" "}
                {edu.activities}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
