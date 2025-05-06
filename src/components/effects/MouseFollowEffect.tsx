"use client";

import type React from "react";

interface MouseFollowEffectProps {
  children: React.ReactNode;
}

export default function MouseFollowEffect({
  children,
}: MouseFollowEffectProps) {
  // Simplified component that just renders children without the cursor effect
  return (
    <div className="relative">
      {children}
    </div>
  );
}
