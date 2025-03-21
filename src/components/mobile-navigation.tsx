"use client";

import { Button } from "@/components/ui/button";
import { Briefcase, Home, MessageSquare, User, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNavigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  // Don't render the mobile navigation on the profile page
  if (pathname === "/profile") {
    return null;
  }

  return (
    <div className="flex justify-around py-2">
      <Link href="/feed" className="flex flex-col items-center">
        <Button
          variant="ghost"
          size="icon"
          className={`flex flex-col items-center ${isActive("/feed") ? "text-blue-600" : "text-gray-500"}`}
        >
          <Home className="h-5 w-5" />
          <span className="text-xs mt-1">Home</span>
        </Button>
      </Link>

      <Link href="/network" className="flex flex-col items-center">
        <Button
          variant="ghost"
          size="icon"
          className={`flex flex-col items-center ${isActive("/network") ? "text-blue-600" : "text-gray-500"}`}
        >
          <Users className="h-5 w-5" />
          <span className="text-xs mt-1">Network</span>
        </Button>
      </Link>

      <Link href="/jobs" className="flex flex-col items-center">
        <Button
          variant="ghost"
          size="icon"
          className={`flex flex-col items-center ${isActive("/jobs") ? "text-blue-600" : "text-gray-500"}`}
        >
          <Briefcase className="h-5 w-5" />
          <span className="text-xs mt-1">Jobs</span>
        </Button>
      </Link>

      <Link href="/messages" className="flex flex-col items-center">
        <Button
          variant="ghost"
          size="icon"
          className={`flex flex-col items-center ${isActive("/messages") ? "text-blue-600" : "text-gray-500"}`}
        >
          <MessageSquare className="h-5 w-5" />
          <span className="text-xs mt-1">Messages</span>
        </Button>
      </Link>

      <Link href="/profile" className="flex flex-col items-center">
        <Button
          variant="ghost"
          size="icon"
          className={`flex flex-col items-center ${isActive("/profile") ? "text-blue-600" : "text-gray-500"}`}
        >
          <User className="h-5 w-5" />
          <span className="text-xs mt-1">Profile</span>
        </Button>
      </Link>
    </div>
  );
}
