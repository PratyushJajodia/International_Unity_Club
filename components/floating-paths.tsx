"use client"

import { motion } from "framer-motion"

export function FloatingPaths({ position, color = "blue" }: { position: number; color?: string }) {
  const getColor = () => {
    switch (color) {
      case "blue":
        return "rgba(59, 130, 246, 0.2)" // blue-500 with opacity
      case "sky":
        return "rgba(14, 165, 233, 0.2)" // sky-500 with opacity
      case "indigo":
        return "rgba(99, 102, 241, 0.2)" // indigo-500 with opacity
      default:
        return "rgba(59, 130, 246, 0.2)" // default blue
    }
  }

  const baseColor = getColor()

  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: baseColor,
    width: 0.5 + i * 0.03,
    opacity: 0.1 + i * 0.02,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-blue-600" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default function FloatingPathsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <FloatingPaths position={1} color="blue" />
      <FloatingPaths position={-1} color="sky" />
    </div>
  )
}
