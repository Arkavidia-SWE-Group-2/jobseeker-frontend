import NotificationsSection from "@/components/notifications/notifications-section";
import ProfileSection from "@/components/profile-section";

export default function NotificationsPage() {
  return (
    <>
      {/* Profile Section - Only visible on mobile */}
      <div className="mb-4 md:hidden">
        <ProfileSection />
      </div>

      {/* Notifications Content */}
      <NotificationsSection />
    </>
  );
}
