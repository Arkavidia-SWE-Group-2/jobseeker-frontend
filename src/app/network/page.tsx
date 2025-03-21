import NetworkSection from "@/components/network/network-section";
import ProfileSection from "@/components/profile-section";

export default function NetworkPage() {
  return (
    <>
      {/* Profile Section - Only visible on mobile */}
      <div className="mb-4 md:hidden">
        <ProfileSection />
      </div>

      {/* Network Content */}
      <NetworkSection />
    </>
  );
}
