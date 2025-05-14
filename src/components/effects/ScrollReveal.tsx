"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  threshold?: number
  delay?: number
  duration?: number
  distance?: number
  direction?: "up" | "down" | "left" | "right"
  once?: boolean
}

export default function ScrollReveal({
  children,
  className = "",
  threshold = 0.1,
  delay = 0,
  duration = 800,
  distance = 50,
  direction = "up",
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Handle mount state to prevent hydration issues
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || typeof window === "undefined") return

    try {
      // Only create observer if IntersectionObserver is available
      if (!("IntersectionObserver" in window)) {
        setIsVisible(true) // Fallback to visible if not supported
        return
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true)
            }, delay)

            if (once) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            setIsVisible(false)
          }
        },
        { threshold },
      )

      const currentRef = ref.current

      if (currentRef) {
        observer.observe(currentRef)
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef)
        }
        observer.disconnect()
      }
    } catch (error) {
      console.error("ScrollReveal error:", error)
      setIsVisible(true) // Fallback to visible on error
    }
  }, [threshold, delay, once, isMounted])

  // Set initial transform based on direction
  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return `translateY(${distance}px)`
      case "down":
        return `translateY(-${distance}px)`
      case "left":
        return `translateX(${distance}px)`
      case "right":
        return `translateX(-${distance}px)`
      default:
        return `translateY(${distance}px)`
    }
  }

  // During server-side rendering or before hydration, render without animation
  if (!isMounted) {
    return <div className={className}>{children}</div>
  }

  return (
    <div
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : getInitialTransform(),
        transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
      }}
    >
      {children}
    </div>
  )
}
