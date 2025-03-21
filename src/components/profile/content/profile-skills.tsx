"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit, Plus, Search, ThumbsUp, X } from "lucide-react";
import { useState } from "react";

interface Skill {
  id: number;
  name: string;
  endorsements: number;
  endorsed: boolean;
  featured: boolean;
}

interface Endorser {
  id: number;
  name: string;
  avatar: string;
  role: string;
}

export default function ProfileSkills() {
  const [skills, setSkills] = useState<Skill[]>([
    { id: 1, name: "React", endorsements: 42, endorsed: true, featured: true },
    {
      id: 2,
      name: "TypeScript",
      endorsements: 38,
      endorsed: false,
      featured: true,
    },
    {
      id: 3,
      name: "JavaScript",
      endorsements: 56,
      endorsed: true,
      featured: true,
    },
    {
      id: 4,
      name: "HTML/CSS",
      endorsements: 49,
      endorsed: false,
      featured: false,
    },
    {
      id: 5,
      name: "Next.js",
      endorsements: 27,
      endorsed: false,
      featured: false,
    },
    {
      id: 6,
      name: "UI/UX Design",
      endorsements: 19,
      endorsed: false,
      featured: false,
    },
    {
      id: 7,
      name: "Responsive Design",
      endorsements: 31,
      endorsed: true,
      featured: false,
    },
    {
      id: 8,
      name: "Tailwind CSS",
      endorsements: 24,
      endorsed: false,
      featured: false,
    },
    { id: 9, name: "Git", endorsements: 35, endorsed: false, featured: false },
  ]);

  const [newSkill, setNewSkill] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isManageDialogOpen, setIsManageDialogOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isEndorsersDialogOpen, setIsEndorsersDialogOpen] = useState(false);

  // Mock endorsers data
  const endorsers: Endorser[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Product Manager at Tech Company",
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Senior Software Engineer at Web Solutions",
    },
    {
      id: 3,
      name: "Emily Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Frontend Developer at Creative Agency",
    },
    {
      id: 4,
      name: "David Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "CTO at Startup Inc.",
    },
    {
      id: 5,
      name: "Jessica Lee",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "UX Designer at Design Studio",
    },
  ];

  const displayedSkills = showAll
    ? skills
    : skills.filter((skill) => skill.featured).slice(0, 3);

  const filteredSkills = searchTerm
    ? skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : skills;

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkills([
        ...skills,
        {
          id: Date.now(),
          name: newSkill,
          endorsements: 0,
          endorsed: false,
          featured: false,
        },
      ]);
      setNewSkill("");
      setIsAddDialogOpen(false);
    }
  };

  const toggleEndorse = (id: number) => {
    setSkills(
      skills.map((skill) => {
        if (skill.id === id) {
          return {
            ...skill,
            endorsements: skill.endorsed
              ? skill.endorsements - 1
              : skill.endorsements + 1,
            endorsed: !skill.endorsed,
          };
        }
        return skill;
      }),
    );
  };

  const toggleFeatured = (id: number) => {
    setSkills(
      skills.map((skill) => {
        if (skill.id === id) {
          return {
            ...skill,
            featured: !skill.featured,
          };
        }
        return skill;
      }),
    );
  };

  const removeSkill = (id: number) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  const showEndorsers = (skill: Skill) => {
    setSelectedSkill(skill);
    setIsEndorsersDialogOpen(true);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl">Skills</CardTitle>
        <div className="flex gap-2">
          <Dialog
            open={isManageDialogOpen}
            onOpenChange={setIsManageDialogOpen}
          >
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm">
                <Edit className="h-4 w-4 mr-2" />
                Manage
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Manage Skills</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <div className="relative mb-4">
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search skills"
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="space-y-2 max-h-[300px] overflow-y-auto">
                  {filteredSkills.map((skill) => (
                    <div
                      key={skill.id}
                      className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md"
                    >
                      <div>
                        <p className="font-medium">{skill.name}</p>
                        <p className="text-xs text-gray-500">
                          {skill.endorsements} endorsements
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className={
                            skill.featured ? "bg-blue-50 text-blue-600" : ""
                          }
                          onClick={() => toggleFeatured(skill.id)}
                        >
                          {skill.featured ? "Featured" : "Feature"}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          onClick={() => removeSkill(skill.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <DialogFooter>
                <Button onClick={() => setIsManageDialogOpen(false)}>
                  Done
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Skill</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="skill">Skill</Label>
                  <Input
                    id="skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Ex: JavaScript"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setIsAddDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button onClick={handleAddSkill}>Save</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {displayedSkills.map((skill) => (
            <li key={skill.id} className="flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{skill.name}</h3>
                  {skill.featured && (
                    <Badge variant="outline" className="text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
                <div
                  className="flex items-center mt-1 cursor-pointer"
                  onClick={() => showEndorsers(skill)}
                >
                  <div className="flex -space-x-2 mr-2">
                    <Avatar className="h-6 w-6 border-2 border-white">
                      <AvatarImage
                        src="/placeholder.svg?height=24&width=24"
                        alt="User"
                      />
                      <AvatarFallback>U1</AvatarFallback>
                    </Avatar>
                    <Avatar className="h-6 w-6 border-2 border-white">
                      <AvatarImage
                        src="/placeholder.svg?height=24&width=24"
                        alt="User"
                      />
                      <AvatarFallback>U2</AvatarFallback>
                    </Avatar>
                  </div>
                  <span className="text-xs text-gray-500">
                    {skill.endorsements} endorsement
                    {skill.endorsements !== 1 ? "s" : ""}
                  </span>
                </div>
              </div>
              <Button
                variant={skill.endorsed ? "default" : "outline"}
                size="sm"
                className={
                  skill.endorsed
                    ? "bg-blue-100 text-blue-600 hover:bg-blue-200 border-blue-200"
                    : ""
                }
                onClick={() => toggleEndorse(skill.id)}
              >
                <ThumbsUp
                  className={`h-4 w-4 mr-2 ${skill.endorsed ? "fill-blue-600" : ""}`}
                />
                {skill.endorsed ? "Endorsed" : "Endorse"}
              </Button>
            </li>
          ))}
        </ul>

        {skills.length > 3 && (
          <Button
            variant="ghost"
            className="mt-4 w-full text-blue-600"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show less" : `Show all ${skills.length} skills`}
          </Button>
        )}

        {/* Endorsers Dialog */}
        <Dialog
          open={isEndorsersDialogOpen}
          onOpenChange={setIsEndorsersDialogOpen}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Endorsements for {selectedSkill?.name}</DialogTitle>
            </DialogHeader>
            <div className="py-2 space-y-4">
              {endorsers.map((endorser) => (
                <div key={endorser.id} className="flex items-start gap-3">
                  <Avatar>
                    <AvatarImage src={endorser.avatar} alt={endorser.name} />
                    <AvatarFallback>{endorser.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">{endorser.name}</h4>
                    <p className="text-sm text-gray-500">{endorser.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
