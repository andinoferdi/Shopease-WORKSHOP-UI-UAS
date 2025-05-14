"use client"

import { useEffect, useRef, useState } from "react"

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  once?: boolean
}

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  duration = 1500,
  once = false,
}: TextRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)

          if (once && entry.isIntersecting) {
            observer.unobserve(entry.target)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold: 0.2,
      },
    )

    const currentRef = textRef.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay, once])

  // Split text into individual characters
  const characters = text.split("")

  return (
    <div ref={textRef} className={`overflow-hidden ${className}`}>
      <div className="inline-block">
        {characters.map((char, index) => (
          <span
            key={`${char}-${index}`}
            className="inline-block opacity-0 transform translate-y-full"
            style={{
              animation: isVisible
                ? `reveal ${duration}ms ${index * 30}ms forwards cubic-bezier(0.19, 1, 0.22, 1)`
                : "none",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes reveal {
          0% {
            opacity: 0;
            transform: translateY(100%);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
