"use client";

import type React from "react";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface ParallaxCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ParallaxCards({
  items,
}: {
  items: ParallaxCardProps[];
}) {
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

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <ParallaxCard
          key={index}
          {...item}
          disabled={isMobile}
          delay={index * 100}
        />
      ))}
    </div>
  );
}

interface ParallaxCardExtendedProps extends ParallaxCardProps {
  disabled?: boolean;
  delay?: number;
}

function ParallaxCard({
  title,
  description,
  image,
  link,
  disabled = false,
  delay = 0,
}: ParallaxCardExtendedProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    const currentCard = cardRef.current;
    
    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }
    };
  }, [delay]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (disabled || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    // Calculate mouse position relative to card center (in percentage)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Set rotation values (inverted for natural feel)
    setRotation({
      x: -y * 10, // Rotate around X-axis (horizontal)
      y: x * 10, // Rotate around Y-axis (vertical)
    });
  };

  const handleMouseLeave = () => {
    // Reset rotation when mouse leaves
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      className={`group relative h-[400px] overflow-hidden rounded-xl transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        transition:
          "transform 0.5s ease, opacity 0.5s ease, translate 0.5s ease",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div
        className="h-full w-full rounded-xl bg-white shadow-xl transition-all duration-300"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: "transform 0.3s ease",
          transformStyle: "preserve-3d",
          boxShadow: isHovered
            ? "0 20px 40px rgba(0, 0, 0, 0.2)"
            : "0 10px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Card content with parallax effect */}
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
            style={{
              transform: `translateX(${rotation.y * -5}px) translateY(${
                rotation.x * -5
              }px)`,
              transition: "transform 0.3s ease",
            }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
            />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          {/* Content */}
          <div
            className="absolute bottom-0 left-0 w-full p-6 text-white"
            style={{
              transform: `translateZ(20px)`,
              transformStyle: "preserve-3d",
            }}
          >
            <h3
              className="mb-2 text-xl font-bold"
              style={{
                transform: `translateZ(30px)`,
              }}
            >
              {title}
            </h3>
            <p
              className="mb-4 text-sm text-gray-200"
              style={{
                transform: `translateZ(25px)`,
              }}
            >
              {description}
            </p>
            <a
              href={link}
              className="inline-block rounded-md bg-teal-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-teal-700"
              style={{
                transform: `translateZ(40px)`,
              }}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
