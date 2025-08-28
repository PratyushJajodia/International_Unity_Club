"use client"

import { useState, useEffect } from "react"

const MOBILE_BREAKPOINT = 768

export function useMobile(breakpoint = MOBILE_BREAKPOINT): boolean {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Initial check
    checkMobile()

    // Add event listener
    window.addEventListener("resize", checkMobile)

    // Clean up
    return () => window.removeEventListener("resize", checkMobile)
  }, [breakpoint])

  return isMobile
}
