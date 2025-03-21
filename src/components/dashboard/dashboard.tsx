// "use client"

// import { useState } from "react"
// import ProfileSection from "../profile-section"
// import FeedSection from "../feed/feed-section"
// import NetworkSection from "../network/network-section"
// import NotificationsSection from "../notifications/notifications-section"
// import JobsSection from "../jobs/jobs-section"
// import MessagesSection from "./messages-section"
// import MobileNavigation from "../mobile-navigation"
// import DesktopSidebar from "../desktop-sidebar"
// import Header from "../header"

// type ActiveSection = "feed" | "network" | "jobs" | "messages" | "notifications"

// export default function Dashboard() {
//   const [activeSection, setActiveSection] = useState<ActiveSection>("feed")

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header - visible on all screen sizes */}
//       <Header />

//       <div className="flex flex-col md:flex-row">
//         {/* Desktop Sidebar - hidden on mobile */}
//         <aside className="hidden md:block md:w-64 md:shrink-0">
//           <div className="fixed h-full w-64 overflow-y-auto border-r border-gray-200 bg-white">
//             <DesktopSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 pb-16 md:pb-0 md:pl-64">
//           <div className="max-w-3xl mx-auto px-4 py-6">
//             {/* Profile Section - Always visible at the top on all pages */}
//             <div className="mb-4 md:hidden">
//               <ProfileSection />
//             </div>

//             {/* Active Section Content */}
//             {activeSection === "feed" && <FeedSection />}
//             {activeSection === "network" && <NetworkSection />}
//             {activeSection === "jobs" && <JobsSection />}
//             {activeSection === "messages" && <MessagesSection />}
//             {activeSection === "notifications" && <NotificationsSection />}
//           </div>
//         </main>
//       </div>

//       {/* Mobile Navigation - only visible on mobile */}
//       <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
//         <MobileNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
//       </div>
//     </div>
//   )
// }

