"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";

interface GlowingButtonProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
}

export default function GlowingButton({
  children,
  className = "",
  glowColor = "rgba(20, 184, 166, 0.6)",
  onClick,
}: GlowingButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();

    // Calculate mouse position relative to button
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      ref={buttonRef}
      className={`relative overflow-hidden ${className}`}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow effect */}
      {isHovered && !isMobile && (
        <div
          className="absolute pointer-events-none rounded-full blur-xl"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: "150px",
            height: "150px",
            transform: "translate(-50%, -50%)",
            background: glowColor,
            opacity: 0.8,
            mixBlendMode: "screen",
          }}
        />
      )}

      {/* Button content */}
      <div className="relative z-10">{children}</div>
    </button>
  );
}
