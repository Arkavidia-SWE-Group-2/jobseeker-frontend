"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Bell,
  Briefcase,
  Home,
  MessageSquare,
  Search,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const pathname = usePathname();
  const isProfilePage = pathname === "/profile";

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center">
          {/* Logo */}
          <Link href="/feed" className="mr-2 md:mr-4">
            <div className="h-8 w-8 bg-blue-600 text-white rounded flex items-center justify-center font-bold">
              in
            </div>
          </Link>

          {/* Search Bar */}
          <div
            className={`relative ${isSearchFocused ? "flex-1" : "hidden md:block md:w-64"}`}
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              className="pl-10 pr-4 py-2 rounded-full bg-gray-100 border-none"
              placeholder="Search"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </div>

          {/* Search Icon (Mobile) */}
          {!isSearchFocused && !isProfilePage && (
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsSearchFocused(true)}
            >
              <Search className="h-5 w-5" />
            </Button>
          )}
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-1 md:space-x-2">
          {/* Navigation Icons - Only visible on profile page */}
          {isProfilePage && (
            <div className="flex items-center space-x-1 md:hidden">
              <Link href="/feed">
                <Button variant="ghost" size="icon">
                  <Home className="h-5 w-5" />
                </Button>
              </Link>

              <Link href="/network">
                <Button variant="ghost" size="icon">
                  <Users className="h-5 w-5" />
                </Button>
              </Link>

              <Link href="/jobs">
                <Button variant="ghost" size="icon">
                  <Briefcase className="h-5 w-5" />
                </Button>
              </Link>

              <Link href="/messages">
                <Button variant="ghost" size="icon">
                  <MessageSquare className="h-5 w-5" />
                </Button>
              </Link>

              <Link href="/notifications">
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          )}

          {/* Desktop Navigation Icons */}
          {!isProfilePage ? (
            <>
              <Link href="/messages" className="hidden md:block">
                <Button
                  variant="ghost"
                  size="icon"
                  className={pathname === "/messages" ? "text-blue-600" : ""}
                >
                  <MessageSquare className="h-5 w-5" />
                </Button>
              </Link>

              <Link href="/notifications" className="hidden md:block">
                <Button
                  variant="ghost"
                  size="icon"
                  className={
                    pathname === "/notifications" ? "text-blue-600" : ""
                  }
                >
                  <Bell className="h-5 w-5" />
                </Button>
              </Link>
            </>
          ) : (
            // Desktop navigation for profile page
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/feed">
                <Button variant="ghost" size="icon">
                  <Home className="h-5 w-5" />
                </Button>
              </Link>

              <Link href="/network">
                <Button variant="ghost" size="icon">
                  <Users className="h-5 w-5" />
                </Button>
              </Link>

              <Link href="/jobs">
                <Button variant="ghost" size="icon">
                  <Briefcase className="h-5 w-5" />
                </Button>
              </Link>

              <Link href="/messages">
                <Button variant="ghost" size="icon">
                  <MessageSquare className="h-5 w-5" />
                </Button>
              </Link>

              <Link href="/notifications">
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          )}

          {/* Profile Picture */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full overflow-hidden"
              >
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="Profile"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="py-4">
                <h3 className="text-lg font-semibold">John Doe</h3>
                <p className="text-sm text-gray-500">Software Developer</p>
                <Link href="/profile">
                  <Button className="mt-4 w-full">View Profile</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
