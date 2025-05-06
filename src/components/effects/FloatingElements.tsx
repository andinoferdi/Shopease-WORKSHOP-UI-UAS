"use client";

import { useEffect, useState, useRef } from "react";

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  color: string;
  opacity: number;
  blur: number;
  delay: number;
}

interface FloatingElementsProps {
  count?: number;
  minSize?: number;
  maxSize?: number;
  minSpeed?: number;
  maxSpeed?: number;
  colors?: string[];
  className?: string;
}

export default function FloatingElements({
  count = 15,
  minSize = 10,
  maxSize = 80,
  minSpeed = 20,
  maxSpeed = 60,
  colors = ["#0F766E", "#0D9488", "#14B8A6", "#2DD4BF"],
  className = "",
}: FloatingElementsProps) {
  // Always render an empty container immediately for SSR
  // This prevents blank screens during hydration
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const initializedRef = useRef(false);
  const maxElementsRef = useRef(count);
  
  // Handle client-side only rendering
  useEffect(() => {
    setIsMounted(true);
    
    // Check if this is a mobile device and set max elements
    if (typeof window !== 'undefined') {
      maxElementsRef.current = window.innerWidth < 768 ? Math.min(8, count) : count;
    }
  }, [count]);
  
  // Use refs to store prop values to prevent dependency changes on every render
  const propsRef = useRef({
    count: maxElementsRef.current,
    minSize,
    maxSize,
    minSpeed,
    maxSpeed,
    colors
  });
  
  // Update ref values when props change
  useEffect(() => {
    propsRef.current = {
      count: maxElementsRef.current,
      minSize,
      maxSize,
      minSpeed,
      maxSpeed,
      colors
    };
  }, [minSize, maxSize, minSpeed, maxSpeed, colors]);

  // Initialize elements only once on mount, with a longer delay
  useEffect(() => {
    // Avoid running on server
    if (typeof window === "undefined" || !isMounted) return;
    
    // Prevent double initialization
    if (initializedRef.current) return;
    initializedRef.current = true;
    
    let mounted = true;
    
    // Delay initialization to ensure the page loads first
    const initTimer = setTimeout(() => {
      try {
        const props = propsRef.current;
        const newElements: FloatingElement[] = [];

        // Create fewer elements to start
        const initialElements = Math.min(props.count, 5);
        for (let i = 0; i < initialElements; i++) {
          newElements.push({
            id: i,
            x: Math.random() * 100, // percentage
            y: Math.random() * 100, // percentage
            size: props.minSize + Math.random() * (props.maxSize - props.minSize),
            speed: props.minSpeed + Math.random() * (props.maxSpeed - props.minSpeed),
            color: props.colors[Math.floor(Math.random() * props.colors.length)],
            opacity: 0.1 + Math.random() * 0.3,
            blur: 10 + Math.random() * 30,
            delay: Math.random() * 2, // Add random delay for each element (0-2s)
          });
        }

        if (mounted) {
          setElements(newElements);
          
          // Add the rest of the elements after a delay
          if (initialElements < props.count) {
            setTimeout(() => {
              if (mounted) {
                const restElements: FloatingElement[] = [];
                for (let i = initialElements; i < props.count; i++) {
                  restElements.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: props.minSize + Math.random() * (props.maxSize - props.minSize),
                    speed: props.minSpeed + Math.random() * (props.maxSpeed - props.minSpeed),
                    color: props.colors[Math.floor(Math.random() * props.colors.length)],
                    opacity: 0.1 + Math.random() * 0.3,
                    blur: 10 + Math.random() * 30,
                    delay: Math.random() * 2,
                  });
                }
                setElements(prev => [...prev, ...restElements]);
              }
            }, 1000);
          }
        }
      } catch (error) {
        console.error("FloatingElements init error:", error);
      }
    }, 500); // Longer delay for better initial rendering
    
    return () => {
      mounted = false;
      clearTimeout(initTimer);
    };
  }, [isMounted]); // Run when component is mounted

  // Always render a container regardless of initialization state
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((element) => (
        <div
          key={element.id}
          className="floating-element"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            backgroundColor: element.color,
            opacity: element.opacity,
            filter: `blur(${element.blur}px)`,
            animation: `float ${element.speed}s infinite ease-in-out ${element.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
