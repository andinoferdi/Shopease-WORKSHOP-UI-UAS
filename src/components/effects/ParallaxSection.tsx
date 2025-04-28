"use client";

import type React from "react";

import { Parallax } from "react-parallax";

interface ParallaxSectionProps {
  imageUrl: string;
  height?: string;
  strength?: number;
  children: React.ReactNode;
  overlayColor?: string;
  overlayOpacity?: number;
}

export default function ParallaxSection({
  imageUrl,
  height = "500px",
  strength = 300,
  children,
  overlayColor = "#0F766E",
  overlayOpacity = 0.7,
}: ParallaxSectionProps) {
  return (
    <Parallax
      bgImage={imageUrl}
      strength={strength}
      style={{ height }}
      bgImageStyle={{ objectFit: "cover" }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: overlayColor, opacity: overlayOpacity }}
      />
      <div className="relative h-full flex items-center justify-center">
        {children}
      </div>
    </Parallax>
  );
}
