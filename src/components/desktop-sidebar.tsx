"use client";

import { Button } from "@/components/ui/button";
import {
  Bell,
  BookOpen,
  Briefcase,
  Home,
  MessageSquare,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProfileSection from "./profile-section";

export default function DesktopSidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="fixed h-full w-64 bg-white border-r border-gray-200 pt-6 px-4">
      <div className="mb-6">
        <ProfileSection />
      </div>

      <nav className="space-y-1">
        <Link href="/feed">
          <Button
            variant="ghost"
            className={`w-full justify-start ${isActive("/feed") ? "bg-blue-50 text-blue-600" : ""}`}
          >
            <Home className="mr-3 h-5 w-5" />
            Home
          </Button>
        </Link>

        <Link href="/network">
          <Button
            variant="ghost"
            className={`w-full justify-start ${isActive("/network") ? "bg-blue-50 text-blue-600" : ""}`}
          >
            <Users className="mr-3 h-5 w-5" />
            My Network
          </Button>
        </Link>

        <Link href="/jobs">
          <Button
            variant="ghost"
            className={`w-full justify-start ${isActive("/jobs") ? "bg-blue-50 text-blue-600" : ""}`}
          >
            <Briefcase className="mr-3 h-5 w-5" />
            Jobs
          </Button>
        </Link>

        <Link href="/messages">
          <Button
            variant="ghost"
            className={`w-full justify-start ${isActive("/messages") ? "bg-blue-50 text-blue-600" : ""}`}
          >
            <MessageSquare className="mr-3 h-5 w-5" />
            Messaging
          </Button>
        </Link>

        <Link href="/notifications">
          <Button
            variant="ghost"
            className={`w-full justify-start ${isActive("/notifications") ? "bg-blue-50 text-blue-600" : ""}`}
          >
            <Bell className="mr-3 h-5 w-5" />
            Notifications
          </Button>
        </Link>
      </nav>

      <div className="absolute bottom-6 left-4 right-4">
        <div className="border-t border-gray-200 pt-4">
          <Button variant="outline" className="w-full justify-start">
            <BookOpen className="mr-3 h-5 w-5" />
            Learning
          </Button>
        </div>
      </div>
    </div>
  );
}
