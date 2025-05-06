"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ShoppingCart, Heart } from "lucide-react";

interface Product3DCardProps {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
}

export default function Product3DCard({
  name,
  price,
  rating,
  image,
}: Product3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
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
    if (isMobile || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    // Calculate mouse position relative to card center (in percentage)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Set rotation values (inverted for natural feel)
    setRotation({
      x: -y * 15, // Rotate around X-axis (horizontal)
      y: x * 15, // Rotate around Y-axis (vertical)
    });

    // Set position for moving elements
    setPosition({
      x: x * 20,
      y: y * 20,
    });
  };

  const handleMouseLeave = () => {
    // Reset rotation and position when mouse leaves
    setRotation({ x: 0, y: 0 });
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div
        className="relative"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: "transform 0.2s ease-out",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="relative">
          <div className="relative h-64 w-full overflow-hidden bg-gray-100">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              style={{
                transform: `translateX(${position.x * 0.5}px) translateY(${
                  position.y * 0.5
                }px)`,
                transition: isHovered
                  ? "transform 0.1s ease-out"
                  : "transform 0.3s ease-out",
              }}
            />
          </div>
          <button
            className="absolute right-2 top-2 rounded-full bg-white p-2 text-gray-600 shadow-sm transition-colors hover:bg-teal-700 hover:text-white"
            style={{
              transform: `translateZ(20px) translateX(${
                position.x * 0.2
              }px) translateY(${position.y * 0.2}px)`,
              transition: isHovered
                ? "transform 0.1s ease-out"
                : "transform 0.3s ease-out",
            }}
          >
            <Heart className="h-4 w-4" />
          </button>
        </div>

        <div
          className="p-4"
          style={{
            transform: `translateZ(10px) translateX(${
              position.x * 0.1
            }px) translateY(${position.y * 0.1}px)`,
            transition: isHovered
              ? "transform 0.1s ease-out"
              : "transform 0.3s ease-out",
          }}
        >
          <h3
            className="mb-2 text-lg font-medium text-gray-900"
            style={{
              transform: `translateZ(25px) translateX(${
                position.x * 0.15
              }px) translateY(${position.y * 0.15}px)`,
              transition: isHovered
                ? "transform 0.1s ease-out"
                : "transform 0.3s ease-out",
            }}
          >
            {name}
          </h3>

          <div
            className="mb-2 flex items-center"
            style={{
              transform: `translateZ(15px) translateX(${
                position.x * 0.1
              }px) translateY(${position.y * 0.1}px)`,
              transition: isHovered
                ? "transform 0.1s ease-out"
                : "transform 0.3s ease-out",
            }}
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating)
                      ? "fill-orange-400 text-orange-400"
                      : i < rating
                      ? "fill-orange-400 text-orange-400"
                      : "fill-gray-200 text-gray-200"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-xs text-gray-500">{rating}</span>
          </div>

          <div
            className="flex items-center justify-between"
            style={{
              transform: `translateZ(30px) translateX(${
                position.x * 0.2
              }px) translateY(${position.y * 0.2}px)`,
              transition: isHovered
                ? "transform 0.1s ease-out"
                : "transform 0.3s ease-out",
            }}
          >
            <span className="text-lg font-bold text-teal-700">
              ${price.toFixed(2)}
            </span>
            <button
              className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-teal-700 hover:text-white"
              style={{
                transform: `translateZ(40px) translateX(${
                  position.x * 0.25
                }px) translateY(${position.y * 0.25}px)`,
                transition: isHovered
                  ? "transform 0.1s ease-out"
                  : "transform 0.3s ease-out",
              }}
            >
              <ShoppingCart className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Reflection effect */}
      {isHovered && !isMobile && (
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            background:
              "linear-gradient(105deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)",
            transform: `rotateZ(${rotation.y * 2}deg)`,
            transition: "transform 0.2s ease-out",
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
}
