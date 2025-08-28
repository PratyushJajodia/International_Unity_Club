"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

function Bubble({ x, y, size, color }: { x: number; y: number; size: number; color: string }) {
  return (
    <motion.circle
      cx={x}
      cy={y}
      r={size}
      fill={color}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.7, 0.3, 0.7],
        scale: [1, 1.2, 1],
        x: x + Math.random() * 100 - 50,
        y: y + Math.random() * 100 - 50,
      }}
      transition={{
        duration: 5 + Math.random() * 10,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    />
  )
}

export default function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<Array<{ id: number; x: number; y: number; size: number; color: string }>>([])
  const isMobile = useMobile()

  useEffect(() => {
    // Generate bubbles based on screen size
    const generateBubbles = () => {
      const bubbleCount = isMobile ? 25 : 50
      const windowWidth = window.innerWidth
      const windowHeight = Math.max(window.innerHeight, document.body.scrollHeight)

      // Blue theme colors
      const blueColors = [
        "rgba(59, 130, 246, 0.2)", // blue-500
        "rgba(96, 165, 250, 0.15)", // blue-400
        "rgba(147, 197, 253, 0.2)", // blue-300
        "rgba(14, 165, 233, 0.15)", // sky-500
        "rgba(56, 189, 248, 0.2)", // sky-400
        "rgba(186, 230, 253, 0.15)", // sky-200
      ]

      const newBubbles = Array.from({ length: bubbleCount }, (_, i) => ({
        id: i,
        x: Math.random() * windowWidth,
        y: Math.random() * windowHeight,
        size: Math.random() * 40 + 10, // Slightly larger bubbles (10-50px)
        color: blueColors[Math.floor(Math.random() * blueColors.length)],
      }))

      setBubbles(newBubbles)
    }

    generateBubbles()

    // Regenerate bubbles on window resize
    window.addEventListener("resize", generateBubbles)
    return () => window.removeEventListener("resize", generateBubbles)
  }, [isMobile])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg className="w-full h-full absolute top-0 left-0">
        <title>Background Bubbles</title>
        {bubbles.map((bubble) => (
          <Bubble key={bubble.id} {...bubble} />
        ))}
      </svg>
    </div>
  )
}
