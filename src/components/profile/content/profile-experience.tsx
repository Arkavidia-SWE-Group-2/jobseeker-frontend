"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Edit, Plus } from "lucide-react";
import { useState } from "react";

interface Experience {
  id: number;
  role: string;
  company: string;
  logo: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  current: boolean;
}

export default function ProfileExperience() {
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Tech Company",
      logo: "/placeholder.svg?height=40&width=40",
      location: "San Francisco, CA (Remote)",
      startDate: "Jan 2021",
      endDate: null,
      description:
        "Leading frontend development for the company's main product. Implemented new features that increased user engagement by 25%. Mentoring junior developers and establishing best practices for the team.",
      current: true,
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Web Solutions Inc",
      logo: "/placeholder.svg?height=40&width=40",
      location: "New York, NY",
      startDate: "Mar 2018",
      endDate: "Dec 2020",
      description:
        "Developed responsive web applications using React and TypeScript. Collaborated with UX designers to implement pixel-perfect interfaces. Improved application performance by 40%.",
      current: false,
    },
    {
      id: 3,
      role: "Junior Web Developer",
      company: "Digital Agency",
      logo: "/placeholder.svg?height=40&width=40",
      location: "Boston, MA",
      startDate: "Jun 2016",
      endDate: "Feb 2018",
      description:
        "Built websites and web applications for various clients. Worked with HTML, CSS, JavaScript, and jQuery.",
      current: false,
    },
  ]);

  const [newExperience, setNewExperience] = useState<Omit<Experience, "id">>({
    role: "",
    company: "",
    logo: "/placeholder.svg?height=40&width=40",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
    current: false,
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddExperience = () => {
    if (newExperience.role && newExperience.company) {
      setExperiences([
        {
          ...newExperience,
          id: Date.now(),
          endDate: newExperience.current ? null : newExperience.endDate,
        },
        ...experiences,
      ]);

      setNewExperience({
        role: "",
        company: "",
        logo: "/placeholder.svg?height=40&width=40",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
        current: false,
      });

      setIsDialogOpen(false);
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl">Experience</CardTitle>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Add Experience</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={newExperience.role}
                  onChange={(e) =>
                    setNewExperience({ ...newExperience, role: e.target.value })
                  }
                  placeholder="Ex: Frontend Developer"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={newExperience.company}
                  onChange={(e) =>
                    setNewExperience({
                      ...newExperience,
                      company: e.target.value,
                    })
                  }
                  placeholder="Ex: Tech Company"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={newExperience.location}
                  onChange={(e) =>
                    setNewExperience({
                      ...newExperience,
                      location: e.target.value,
                    })
                  }
                  placeholder="Ex: San Francisco, CA"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="startDate">Start Date</Label>
                  <Input
                    id="startDate"
                    value={newExperience.startDate}
                    onChange={(e) =>
                      setNewExperience({
                        ...newExperience,
                        startDate: e.target.value,
                      })
                    }
                    placeholder="Ex: Jan 2021"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="endDate">End Date</Label>
                  <Input
                    id="endDate"
                    value={newExperience.endDate || ""}
                    onChange={(e) =>
                      setNewExperience({
                        ...newExperience,
                        endDate: e.target.value,
                      })
                    }
                    placeholder="Ex: Present"
                    disabled={newExperience.current}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="currentPosition"
                  checked={newExperience.current}
                  onChange={(e) =>
                    setNewExperience({
                      ...newExperience,
                      current: e.target.checked,
                    })
                  }
                  className="h-4 w-4 rounded border-gray-300"
                />
                <Label htmlFor="currentPosition">I currently work here</Label>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newExperience.description}
                  onChange={(e) =>
                    setNewExperience({
                      ...newExperience,
                      description: e.target.value,
                    })
                  }
                  placeholder="Describe your role and accomplishments..."
                  className="min-h-[100px]"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button onClick={handleAddExperience}>Save</Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent className="space-y-6">
        {experiences.map((experience) => (
          <div key={experience.id} className="flex gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={experience.logo} alt={experience.company} />
              <AvatarFallback>{experience.company.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex justify-between">
                <h3 className="font-semibold">{experience.role}</h3>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm">{experience.company}</p>
              <p className="text-xs text-gray-500">
                {experience.startDate} - {experience.endDate || "Present"}
              </p>
              <p className="text-xs text-gray-500 mb-2">
                {experience.location}
              </p>
              <p className="text-sm">{experience.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
