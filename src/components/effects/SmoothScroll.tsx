"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface SmoothScrollProps {
  children: React.ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollingContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Skip smooth scrolling on mobile devices
    if (window.innerWidth < 768) return

    let current = 0
    let target = 0
    const ease = 0.075

    const container = scrollingContainerRef.current
    if (!container) return

    // Set the height of the body to match the scrolling div
    const setBodyHeight = () => {
      document.body.style.height = `${container.getBoundingClientRect().height}px`
    }

    // Initial height
    setBodyHeight()

    // Update height on resize
    window.addEventListener("resize", setBodyHeight)

    // Smooth scrolling animation
    const smoothScroll = () => {
      // Get current scroll position
      target = window.scrollY

      // Lerp - linear interpolation for smooth scrolling
      current = current + (target - current) * ease

      // Round to prevent sub-pixel rendering issues
      const roundedCurrent = Math.round(current * 100) / 100

      // Apply transform to the container
      container.style.transform = `translateY(${-roundedCurrent}px)`

      // Call next frame
      requestAnimationFrame(smoothScroll)
    }

    // Start the animation
    requestAnimationFrame(smoothScroll)

    return () => {
      window.removeEventListener("resize", setBodyHeight)
      document.body.style.height = ""
    }
  }, [])

  return (
    <div
      ref={scrollingContainerRef}
      className="fixed top-0 left-0 w-full will-change-transform"
      style={{
        backfaceVisibility: "hidden",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  )
}
