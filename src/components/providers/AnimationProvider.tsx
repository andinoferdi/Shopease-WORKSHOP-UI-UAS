"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";

export default function AnimationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  // Set hydration state
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    // Only run after hydration to prevent mismatches
    if (!isHydrated) return;

    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add animation classes when element is in view
          if (entry.isIntersecting) {
            const animationType = entry.target.getAttribute("data-animate");
            const delay =
              entry.target.getAttribute("data-animate-delay") || "0";

            if (animationType) {
              // Add animation class with delay
              setTimeout(() => {
                entry.target.classList.add("animate", animationType);
              }, Number.parseInt(delay));

              // Stop observing after animation is applied
              observerRef.current?.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is visible
    );

    // Find all elements with data-animate attribute
    const animatedElements = document.querySelectorAll("[data-animate]");
    animatedElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      // Clean up observer
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isHydrated]); // Only run after hydration is complete

  return <>{children}</>;
}
