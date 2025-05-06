"use client";

import type React from "react";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isHydrated, setIsHydrated] = useState(false);

  // Set hydration state
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    // Only initialize AOS after hydration
    if (!isHydrated) return;

    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
      delay: 50,
      duration: 800,
    });
  }, [isHydrated]);

  return <>{children}</>;
}
