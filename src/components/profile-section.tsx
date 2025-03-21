import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function ProfileSection() {
  return (
    <Card>
      <div className="relative h-24 bg-blue-600 rounded-t-lg">
        <div className="absolute -bottom-12 left-4">
          <div className="rounded-full border-4 border-white overflow-hidden">
            <Image
              src="/placeholder.svg?height=80&width=80"
              alt="Profile"
              width={80}
              height={80}
            />
          </div>
        </div>
      </div>
      <CardContent className="pt-14 pb-4">
        <h3 className="font-semibold text-lg">John Doe</h3>
        <p className="text-sm text-gray-500">
          Software Developer at Tech Company
        </p>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Profile views</span>
            <span className="font-semibold text-blue-600">324</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="text-gray-500">Post impressions</span>
            <span className="font-semibold text-blue-600">1,203</span>
          </div>
        </div>

        <Link href="/profile">
          <Button variant="outline" className="w-full mt-4">
            View Profile
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
