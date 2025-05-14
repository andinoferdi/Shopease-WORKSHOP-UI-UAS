"use client"

import { useEffect, useState } from "react"

// Define types for particles.js
interface IParticlesParams {
  particles: {
    number: {
      value: number
      density: {
        enable: boolean
        value_area: number
      }
    }
    color: {
      value: string | string[]
    }
    shape: {
      type: string
      stroke: {
        width: number
        color: string
      }
      polygon: {
        nb_sides: number
      }
    }
    opacity: {
      value: number
      random: boolean
      anim: {
        enable: boolean
        speed: number
        opacity_min: number
        sync: boolean
      }
    }
    size: {
      value: number
      random: boolean
      anim: {
        enable: boolean
        speed: number
        size_min: number
        sync: boolean
      }
    }
    line_linked: {
      enable: boolean
      distance: number
      color: string
      opacity: number
      width: number
    }
    move: {
      enable: boolean
      speed: number
      direction: string
      random: boolean
      straight: boolean
      out_mode: string
      bounce: boolean
      attract: {
        enable: boolean
        rotateX: number
        rotateY: number
      }
    }
  }
  interactivity: {
    detect_on: string
    events: {
      onhover: {
        enable: boolean
        mode: string
      }
      onclick: {
        enable: boolean
        mode: string
      }
      resize: boolean
    }
    modes: {
      grab: {
        distance: number
        line_linked: {
          opacity: number
        }
      }
      bubble: {
        distance: number
        size: number
        duration: number
        opacity: number
        speed: number
      }
      repulse: {
        distance: number
      }
      push: {
        particles_nb: number
      }
      remove: {
        particles_nb: number
      }
    }
  }
  retina_detect: boolean
}

// Add TypeScript declaration for particlesJS
declare global {
  interface Window {
    particlesJS: (id: string, params: IParticlesParams) => void
  }
}

interface ParticlesBackgroundProps {
  id?: string
  className?: string
  color?: string | string[]
}

const ParticlesBackground = ({
  id = "particles-js",
  className = "",
  color = ["#0F766E", "#0D9488", "#14B8A6"],
}: ParticlesBackgroundProps) => {
  const [isMobile, setIsMobile] = useState(false)
  const [isLowPerformance, setIsLowPerformance] = useState(false)
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)

  // Load particles.js script
  useEffect(() => {
    if (typeof window !== "undefined" && !window.particlesJS) {
      const script = document.createElement("script")
      script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
      script.async = true
      script.onload = () => setIsScriptLoaded(true)
      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    } else if ("particlesJS" in window) {
      setIsScriptLoaded(true)
    }
  }, [])

  useEffect(() => {
    // Check if device is mobile or low performance
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768)

      // Basic performance check - could be improved
      const start = performance.now()
      // Just do a calculation to measure performance
      for (let i = 0; i < 100000; i++) {
        // Empty loop for performance testing
      }
      const end = performance.now()
      setIsLowPerformance(end - start > 50) // If loop takes more than 50ms, consider low performance
    }

    checkDevice()
    window.addEventListener("resize", checkDevice)

    return () => {
      window.removeEventListener("resize", checkDevice)
    }
  }, [])

  useEffect(() => {
    // Initialize particles only after script is loaded
    if (isScriptLoaded && typeof window !== "undefined" && window.particlesJS) {
      // Skip particles on very low performance devices
      if (isLowPerformance && isMobile) {
        const container = document.getElementById(id)
        if (container) {
          container.style.background =
            "linear-gradient(to bottom right, rgba(15, 118, 110, 0.05), rgba(20, 184, 166, 0.05))"
        }
        return
      }

      // Adjust parameters based on device
      const particleCount = isMobile ? 30 : 80
      const particleSpeed = isMobile ? 2 : 6
      const particleSize = isMobile ? 3 : 5
      const lineDistance = isMobile ? 100 : 150
      const interactiveMode = isMobile ? "none" : "repulse"

      // Convert single color to array if needed
      const particleColor = typeof color === "string" ? [color] : color

      window.particlesJS(id, {
        particles: {
          number: {
            value: particleCount,
            density: {
              enable: true,
              value_area: 1200,
            },
          },
          color: {
            value: particleColor,
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.4,
            random: false,
            anim: {
              enable: false,
              speed: 0.5,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: particleSize,
            random: true,
            anim: {
              enable: false,
              speed: 20,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: !isMobile || !isLowPerformance, // Disable lines for low performance
            distance: lineDistance,
            color: typeof color === "string" ? color : color[0], // Use first color for lines
            opacity: 0.3,
            width: isMobile ? 0.5 : 1,
          },
          move: {
            enable: true,
            speed: particleSpeed,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 300,
              rotateY: 600,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: !isMobile, // Disable hover effects on mobile
              mode: interactiveMode,
            },
            onclick: {
              enable: !isLowPerformance, // Disable click effects on low performance devices
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 0.7,
              },
            },
            bubble: {
              distance: 200,
              size: 20,
              duration: 2,
              opacity: 6,
              speed: 2,
            },
            repulse: {
              distance: 100,
            },
            push: {
              particles_nb: isMobile ? 2 : 4,
            },
            remove: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: false, // Disable retina detection for better performance
      })
    }
  }, [id, isMobile, isLowPerformance, isScriptLoaded, color])

  return (
    <div
      id={id}
      className={`absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-40 dark:opacity-30 ${className}`}
      style={{
        touchAction: "none", // Prevent pinch zoom on the canvas
        willChange: "auto", // Performance optimization
      }}
    ></div>
  )
}

export default ParticlesBackground
