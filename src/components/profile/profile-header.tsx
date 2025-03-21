"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Camera,
  Check,
  Edit,
  Globe,
  Lock,
  MapPin,
  MoreHorizontal,
  Plus,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ProfileHeader() {
  const [isConnected, setIsConnected] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [profileVisibility, setProfileVisibility] = useState<
    "public" | "connections" | "private"
  >("public");

  // Profile data state
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    headline: "Senior Frontend Developer at Tech Company",
    location: "San Francisco Bay Area",
    connections: 512,
    profileViews: 324,
    postImpressions: 1203,
    about:
      "I'm a passionate frontend developer with over 8 years of experience building responsive, user-friendly web applications. Specialized in React, TypeScript, and modern JavaScript frameworks.",
  });

  // Form state for editing
  const [formData, setFormData] = useState({ ...profileData });

  const handleEditSubmit = () => {
    setProfileData({ ...formData });
    setIsEditDialogOpen(false);
  };

  const handleConnect = () => {
    if (!isConnected) {
      // Show connection request sent message
      setIsConnected(true);
    } else {
      // Show disconnect confirmation
      setIsConnected(false);
    }
  };

  return (
    <Card className="overflow-hidden">
      {/* Cover Photo */}
      <div className="relative h-32 md:h-48 lg:h-64 bg-gradient-to-r from-blue-600 to-blue-400">
        <Image
          src="/placeholder.svg?height=300&width=800"
          alt="Cover"
          fill
          className="object-cover"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 bg-white/80 hover:bg-white/90"
        >
          <Camera className="h-4 w-4" />
        </Button>
      </div>

      <CardContent className="relative pt-0">
        {/* Profile Picture */}
        <div className="absolute -top-16 left-4 md:left-8">
          <div className="relative">
            <Avatar className="h-32 w-32 border-4 border-white">
              <AvatarImage
                src="/placeholder.svg?height=128&width=128"
                alt="Profile"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Button
              variant="ghost"
              size="icon"
              className="absolute bottom-0 right-0 rounded-full bg-white border border-gray-200 h-8 w-8"
            >
              <Camera className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Action Buttons - Desktop */}
        <div className="hidden md:flex justify-end mt-4 space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <MoreHorizontal className="h-4 w-4 mr-2" />
                More
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Save to PDF</DropdownMenuItem>
              <DropdownMenuItem>Build a resume</DropdownMenuItem>
              <DropdownMenuItem>Share profile</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                Report profile
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                <Edit className="h-4 w-4 mr-2" />
                Edit profile
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="headline">Headline</Label>
                  <Input
                    id="headline"
                    value={formData.headline}
                    onChange={(e) =>
                      setFormData({ ...formData, headline: e.target.value })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="about">About</Label>
                  <Textarea
                    id="about"
                    value={formData.about}
                    onChange={(e) =>
                      setFormData({ ...formData, about: e.target.value })
                    }
                    className="min-h-[100px]"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="visibility">Profile Visibility</Label>
                  <Select
                    value={profileVisibility}
                    onValueChange={(
                      value: "public" | "connections" | "private",
                    ) => setProfileVisibility(value)}
                  >
                    <SelectTrigger id="visibility">
                      <SelectValue placeholder="Select visibility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 mr-2" />
                          <span>Public</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="connections">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          <span>Connections only</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="private">
                        <div className="flex items-center">
                          <Lock className="h-4 w-4 mr-2" />
                          <span>Private</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setIsEditDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button onClick={handleEditSubmit}>Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Button
            variant={isFollowing ? "outline" : "default"}
            size="sm"
            onClick={() => setIsFollowing(!isFollowing)}
          >
            {isFollowing ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Following
              </>
            ) : (
              <>
                <Plus className="h-4 w-4 mr-2" />
                Follow
              </>
            )}
          </Button>

          <Button
            variant={isConnected ? "outline" : "default"}
            size="sm"
            onClick={handleConnect}
          >
            {isConnected ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Connected
              </>
            ) : (
              <>
                <Plus className="h-4 w-4 mr-2" />
                Connect
              </>
            )}
          </Button>
        </div>

        {/* Profile Info */}
        <div className="mt-16 md:mt-4">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl md:text-2xl font-bold">
                {profileData.name}
              </h1>
              <p className="text-sm md:text-base">{profileData.headline}</p>
            </div>

            {/* Mobile Edit Button */}
            <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Edit className="h-5 w-5" />
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>

          <div className="flex items-center mt-1 text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{profileData.location}</span>

            {/* Profile Visibility Indicator */}
            <div className="ml-3 flex items-center text-xs">
              {profileVisibility === "public" && (
                <Globe className="h-3 w-3 mr-1" />
              )}
              {profileVisibility === "connections" && (
                <Users className="h-3 w-3 mr-1" />
              )}
              {profileVisibility === "private" && (
                <Lock className="h-3 w-3 mr-1" />
              )}
              <span>
                {profileVisibility === "public" && "Public profile"}
                {profileVisibility === "connections" &&
                  "Visible to connections"}
                {profileVisibility === "private" && "Private profile"}
              </span>
            </div>
          </div>

          <div className="mt-2 text-sm text-blue-600">
            <span className="font-medium">
              {profileData.connections}+ connections
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              className="bg-blue-50 border-blue-100"
            >
              Available for work
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-blue-50 border-blue-100"
            >
              Providing services
            </Button>
          </div>
        </div>

        {/* Action Buttons - Mobile */}
        <div className="flex mt-4 space-x-2 md:hidden">
          <Button
            variant={isConnected ? "outline" : "default"}
            className="flex-1"
            onClick={handleConnect}
          >
            {isConnected ? "Connected" : "Connect"}
          </Button>

          <Button
            variant={isFollowing ? "outline" : "default"}
            className="flex-1"
            onClick={() => setIsFollowing(!isFollowing)}
          >
            {isFollowing ? "Following" : "Follow"}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Message</DropdownMenuItem>
              <DropdownMenuItem>Share profile</DropdownMenuItem>
              <DropdownMenuItem>Save to PDF</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                Report profile
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
}
