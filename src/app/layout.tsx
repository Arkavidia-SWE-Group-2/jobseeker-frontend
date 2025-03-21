import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";
import DesktopSidebar from "@/components/desktop-sidebar";
import Header from "@/components/header";
import MobileNavigation from "@/components/mobile-navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Group 2",
  description: "Arkavidia SWE kel 2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gray-100`}>
        {/* Header - visible on all screen sizes */}
        <Header />

        <div className="flex">
          {/* Desktop Sidebar - hidden on mobile */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <DesktopSidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1 pb-16 md:pb-0 md:ml-0">
            <div className="max-w-3xl mx-auto px-4 py-6">{children}</div>
          </div>
        </div>

        {/* Mobile Navigation - only visible on mobile */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
          <MobileNavigation />
        </div>
      </body>
    </html>
  );
}
