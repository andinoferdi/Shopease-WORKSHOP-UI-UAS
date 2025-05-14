"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
  radius?: number
  onClick?: () => void
}

export default function MagneticButton({
  children,
  className = "",
  strength = 30,
  radius = 200,
  onClick,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Disable effect on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()

    // Calculate the center of the button
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate the distance from the mouse to the center
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    // Calculate the distance from the mouse to the center
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

    // If the mouse is within the radius, apply the magnetic effect
    if (distance < radius) {
      // Calculate the strength of the effect based on the distance
      const strengthX = (distanceX / radius) * strength
      const strengthY = (distanceY / radius) * strength

      setPosition({ x: strengthX, y: strengthY })
    } else {
      // Reset position if mouse is outside radius
      setPosition({ x: 0, y: 0 })
    }
  }

  const handleMouseLeave = () => {
    // Reset position when mouse leaves
    setPosition({ x: 0, y: 0 })
  }

  return (
    <button
      ref={buttonRef}
      className={`relative transition-transform duration-200 ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
