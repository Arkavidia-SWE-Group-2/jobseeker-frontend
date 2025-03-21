"use client";

import { Card } from "@/components/ui/card";
import ProfileAbout from "./content/profile-about";
import ProfileActivity from "./content/profile-activity";
import ProfileDashboard from "./content/profile-dashboard";
import ProfileEducation from "./content/profile-education";
import ProfileExperience from "./content/profile-experience";
import ProfileRecommendations from "./content/profile-recommendations";
import ProfileSkills from "./content/profile-skills";
import ProfileHeader from "./profile-header";

export default function ProfilePage() {
  return (
    <div className="space-y-4 pb-20 md:pb-10">
      {/* Profile Header */}
      <ProfileHeader />

      {/* Main Content - Single column on mobile, two columns on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Column - About, Dashboard, Activity, Experience, Education */}
        <div className="lg:col-span-2 space-y-4">
          <ProfileAbout />
          <ProfileDashboard />
          <ProfileActivity />
          <ProfileExperience />
          <ProfileEducation />
        </div>

        {/* Right Column - Skills and Recommendations */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="p-4">
            <h3 className="text-lg font-semibold mb-2">Profile Language</h3>
            <p className="text-sm text-gray-500">English</p>
          </Card>
          <ProfileSkills />
          <ProfileRecommendations />
        </div>
      </div>
    </div>
  );
}
