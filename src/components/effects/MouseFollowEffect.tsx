"use client";

import type React from "react";

import { useEffect, useState } from "react";

interface MouseFollowEffectProps {
  children: React.ReactNode;
}

export default function MouseFollowEffect({
  children,
}: MouseFollowEffectProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default to mobile to prevent unnecessary effect

  useEffect(() => {
    try {
      // Skip effect on mobile devices
      const checkDevice = () => {
        const isMobileDevice = window.innerWidth < 768 || 
          ('ontouchstart' in window) || 
          (navigator.maxTouchPoints > 0);
        setIsMobile(isMobileDevice);
      };
      
      checkDevice();
      
      // Only add listeners if not mobile
      if (!isMobile) {
        // Show cursor after a short delay to prevent initial animation
        const timer = setTimeout(() => setIsVisible(true), 500);

        const updateMousePosition = (e: MouseEvent) => {
          setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updateMousePosition);

        return () => {
          window.removeEventListener("mousemove", updateMousePosition);
          clearTimeout(timer);
        };
      }
    } catch (error) {
      console.error("Mouse effect error:", error);
    }
  }, [isMobile]);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!isMobile && isVisible && (
        <div
          className={`pointer-events-none fixed z-50 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-teal-500/20 transition-all duration-200 backdrop-blur-sm ${
            isHovering ? "h-16 w-16 bg-teal-500/30" : "h-8 w-8"
          }`}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            boxShadow: isHovering ? "0 0 20px rgba(20, 184, 166, 0.5)" : "none",
            transition:
              "transform 0.1s ease-out, width 0.3s ease, height 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          {isHovering && (
            <span className="text-xs font-medium text-white opacity-80">
              View
            </span>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
