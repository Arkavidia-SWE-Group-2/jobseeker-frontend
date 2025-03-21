import ChatInterface from "@/components/chat/chat-interface";
import ProfileSection from "@/components/profile-section";

export default function MessagesPage() {
  return (
    <>
      {/* Profile Section - Only visible on mobile */}
      <div className="mb-4 md:hidden">
        <ProfileSection />
      </div>

      {/* Messages Content */}
      <ChatInterface />
    </>
  );
}
