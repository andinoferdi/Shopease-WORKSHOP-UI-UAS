"use client"

import { useEffect, useRef } from "react"

interface AnimatedBackgroundProps {
  className?: string
  color1?: string
  color2?: string
  color3?: string
  speed?: number
}

export default function AnimatedBackground({
  className = "",
  color1 = "#0F766E",
  color2 = "#0D9488",
  color3 = "#14B8A6",
  speed = 15,
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    // Set canvas dimensions
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()

      // Set display size (CSS pixels)
      canvas.style.width = width + "px"
      canvas.style.height = height + "px"

      // Set actual size in memory (scaled to account for extra pixel density)
      const scale = window.devicePixelRatio
      canvas.width = Math.floor(width * scale)
      canvas.height = Math.floor(height * scale)

      // Normalize coordinate system to use CSS pixels
      ctx.scale(scale, scale)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Convert hex to rgb
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      return result
        ? {
            r: Number.parseInt(result[1], 16),
            g: Number.parseInt(result[2], 16),
            b: Number.parseInt(result[3], 16),
          }
        : { r: 0, g: 0, b: 0 }
    }

    const rgb1 = hexToRgb(color1)
    const rgb2 = hexToRgb(color2)
    const rgb3 = hexToRgb(color3)

    // Animation loop
    const render = () => {
      const { width, height } = canvas.getBoundingClientRect()

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Update time
      time += 0.005 * speed

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, `rgba(${rgb1.r}, ${rgb1.g}, ${rgb1.b}, 0.1)`)
      gradient.addColorStop(0.5, `rgba(${rgb2.r}, ${rgb2.g}, ${rgb2.b}, 0.1)`)
      gradient.addColorStop(1, `rgba(${rgb3.r}, ${rgb3.g}, ${rgb3.b}, 0.1)`)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      // Draw animated waves
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()

        const rgb = i === 0 ? rgb1 : i === 1 ? rgb2 : rgb3
        const amplitude = 20 + i * 10
        const frequency = 0.01 + i * 0.005
        const timeOffset = i * Math.PI * 0.5

        ctx.moveTo(0, height / 2)

        for (let x = 0; x < width; x += 5) {
          const y = Math.sin(x * frequency + time + timeOffset) * amplitude + height / 2
          ctx.lineTo(x, y)
        }

        ctx.lineTo(width, height)
        ctx.lineTo(0, height)
        ctx.closePath()

        const opacity = 0.05 - i * 0.01
        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`
        ctx.fill()
      }

      // Draw animated particles
      const particleCount = Math.floor((width * height) / 20000)

      for (let i = 0; i < particleCount; i++) {
        const x = (Math.sin(time * 0.3 + i) + 1) * 0.5 * width
        const y = (Math.cos(time * 0.2 + i * 2) + 1) * 0.5 * height
        const size = Math.sin(time + i) * 2 + 3

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)

        const rgb = i % 3 === 0 ? rgb1 : i % 3 === 1 ? rgb2 : rgb3
        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)`
        ctx.fill()
      }

      animationFrameId = window.requestAnimationFrame(render)
    }

    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [color1, color2, color3, speed])

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full -z-10 ${className}`} />
}
