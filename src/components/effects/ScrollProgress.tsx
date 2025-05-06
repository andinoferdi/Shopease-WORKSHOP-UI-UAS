"use client";

import { useEffect, useState, useRef } from "react";

interface ScrollProgressProps {
  color?: string;
  height?: number;
  zIndex?: number;
}

export default function ScrollProgress({
  color = "#0F766E",
  height = 4,
  zIndex = 50,
}: ScrollProgressProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      if (!ticking.current) {
        // Use requestAnimationFrame to limit updates
        window.requestAnimationFrame(() => {
          try {
            // Calculate how far down the page the user has scrolled
            const windowHeight = window.innerHeight;
            const documentHeight =
              document.documentElement.scrollHeight - windowHeight;
            const scrollTop = window.scrollY;

            // Calculate scroll percentage with bounds checking
            if (documentHeight > 0) {
              const scrollPercentage = Math.min(
                100,
                Math.max(0, (scrollTop / documentHeight) * 100)
              );
              setScrollProgress(scrollPercentage);
            }
            
            ticking.current = false;
          } catch (error) {
            console.error("ScrollProgress error:", error);
            ticking.current = false;
          }
        });
        
        ticking.current = true;
      }
    };

    // Add scroll event listener with passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full"
      style={{
        height: `${height}px`,
        zIndex: zIndex,
      }}
    >
      <div
        className="h-full"
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: color,
          transition: "width 0.1s ease-out",
          boxShadow: `0 0 10px ${color}80`,
          willChange: "width",
        }}
      />
    </div>
  );
}
