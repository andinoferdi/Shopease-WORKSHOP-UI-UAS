"use client";

import type React from "react";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const [isInitialRender, setIsInitialRender] = useState(true);

  // Always update children immediately on initial render
  useEffect(() => {
    if (isInitialRender) {
      setDisplayChildren(children);
      
      // Set initial render to false after a brief delay
      // This prevents the transition from running immediately
      const timer = setTimeout(() => {
        setIsInitialRender(false);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [children, isInitialRender]);

  // Handle navigation changes
  useEffect(() => {
    // Only animate on navigation changes, not initial load
    if (!isInitialRender && !isAnimating && pathname) {
      setIsAnimating(true);

      // After animation completes, update the displayed children
      const timeout = setTimeout(() => {
        setDisplayChildren(children);
        setIsAnimating(false);
      }, 200); // Use a shorter transition for better performance

      return () => clearTimeout(timeout);
    }
  }, [pathname, children, isAnimating, isInitialRender]);

  // During initial render, show content immediately without animation
  if (isInitialRender) {
    return <div className="opacity-100">{children}</div>;
  }

  return (
    <div
      className={`transition-all duration-200 ${
        isAnimating ? "opacity-100" : "opacity-100"
      }`}
    >
      {displayChildren}
    </div>
  );
}
