"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#about" },
  { name: "Resources", href: "#resources" },
  { name: "Get Involved", href: "#get-involved" },
  { name: "Events", href: "#events" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md border-b border-blue-100">
      <nav className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden relative">
            <Image
              src="/images/logo.png"
              alt="International Unity Club Logo"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <span className="text-xl font-bold text-blue-800">International Unity Club</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-blue-700 hover:text-blue-900 transition-colors">
              {item.name}
            </Link>
          ))}
          <Button
            size="sm"
            className="bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white border-none ml-4"
            onClick={() => (window.location.href = "#contact")}
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-blue-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 bg-white/95 z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xl text-blue-700 hover:text-blue-900 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button
            className="bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white border-none mt-4"
            onClick={() => {
              setMobileMenuOpen(false)
              window.location.href = "#contact"
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  )
}
