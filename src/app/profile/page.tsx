"use client";

import ProfilePage from "@/components/profile/profile-page";
// import { Inter } from "next/font/google";
import { useEffect } from "react";
import ProfileMobileNavigation from "./mobile-navigation";

// const inter = Inter({ subsets: ["latin"] });

export default function ProfilePageWrapper() {
  // Hide the root layout elements
  useEffect(() => {
    // Store original states to restore them properly
    const originalStates = new Map();

    // Function to save original state
    const saveOriginalState = (element: Element, property: string) => {
      if (element) {
        const key = `${element.tagName}-${property}`;
        if (!originalStates.has(key)) {
          originalStates.set(key, {
            element,
            classes: [...element.classList],
          });
        }
      }
    };

    // Hide sidebar on desktop only
    const sidebar = document.querySelector(".md\\:block.w-64");
    if (sidebar) {
      saveOriginalState(sidebar, "visibility");
      sidebar.classList.add("hidden");
      sidebar.classList.remove("md:block");
    }

    // Remove sidebar margin on desktop only
    const mainContent = document.querySelector(".md\\:ml-64");
    if (mainContent) {
      saveOriginalState(mainContent, "margin");
      mainContent.classList.remove("md:ml-64");
    }

    // Also remove any padding from the parent container
    const parentContainer = document.querySelector(
      ".max-w-3xl.mx-auto.px-4.py-6",
    );
    if (parentContainer) {
      saveOriginalState(parentContainer, "padding");
      parentContainer.classList.remove("px-4");
      parentContainer.classList.remove("max-w-3xl");
    }

    // Hide the default mobile navigation
    const mobileNav = document.querySelector(".md\\:hidden.fixed.bottom-0");
    if (mobileNav) {
      saveOriginalState(mobileNav, "visibility");
      mobileNav.classList.add("hidden");
    }

    // Clean up function - restore original states
    return () => {
      originalStates.forEach(({ element, classes }) => {
        // Remove all current classes
        const classList = element.classList;
        // Convert DOMTokenList to array to avoid type issues
        const currentClasses = Array.from(classList);
        currentClasses.forEach((cls) => {
          classList.remove(cls);
        });

        // Add back original classes
        classes.forEach((cls: string) => {
          classList.add(cls);
        });
      });
    };
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto px-2 sm:px-4">
      {/* Profile Content */}
      <ProfilePage />

      {/* Custom mobile navigation for profile page */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <ProfileMobileNavigation />
      </div>
    </div>
  );
}
