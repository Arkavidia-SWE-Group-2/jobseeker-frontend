import FeedSection from "@/components/feed/feed-section";
import ProfileSection from "@/components/profile-section";

export default function FeedPage() {
  return (
    <>
      {/* Profile Section - Only visible on mobile */}
      <div className="mb-4 md:hidden">
        <ProfileSection />
      </div>

      {/* Feed Content */}
      <FeedSection />
    </>
  );
}
