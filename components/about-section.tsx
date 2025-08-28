"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Calendar, Award } from "lucide-react"
import { useState } from "react"

export default function AboutSection() {
  const [isHovering, setIsHovering] = useState(false)

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.1 * i,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  // Target animation variants
  const circleVariants = {
    initial: { opacity: 0, scale: 0.8 },
    hover: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  // Dart animation variants
  const dartVariants = {
    initial: { opacity: 0, x: -200, y: 200 },
    hover: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.2,
      },
    },
  }

  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-blue-600" />,
      title: "Guidance",
      description:
        "Providing essential information and support to help international students navigate university life.",
    },
    {
      icon: <Users className="h-10 w-10 text-sky-600" />,
      title: "Community",
      description:
        "Creating a welcoming environment where international and domestic students can connect and build friendships.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-indigo-600" />,
      title: "Events",
      description:
        "Organizing cultural exchanges, social gatherings, and networking opportunities throughout the academic year.",
    },
    {
      icon: <Award className="h-10 w-10 text-cyan-600" />,
      title: "Resources",
      description:
        "Offering access to valuable resources that help international students thrive academically and socially.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-100 to-sky-100">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative py-16"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Background overlay for better contrast */}
          <div
            className="absolute inset-0 bg-blue-50/80 rounded-xl transition-opacity duration-500"
            style={{ opacity: isHovering ? 0.9 : 0 }}
          ></div>

          {/* Target and dart animation container */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
            <div className="relative w-full max-w-4xl h-full max-h-96">
              <svg
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full"
                style={{
                  opacity: isHovering ? 1 : 0.1,
                  transition: "opacity 0.5s ease",
                }}
              >
                {/* Outer circle */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="100"
                  stroke="#4299e1"
                  strokeWidth="8"
                  fill="transparent"
                  variants={circleVariants}
                  initial="initial"
                  animate={isHovering ? "hover" : "initial"}
                />

                {/* Middle circle */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="70"
                  stroke="#4299e1"
                  strokeWidth="6"
                  fill="transparent"
                  variants={circleVariants}
                  initial="initial"
                  animate={isHovering ? "hover" : "initial"}
                  transition={{ delay: 0.1 }}
                />

                {/* Inner circle */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="40"
                  stroke="#4299e1"
                  strokeWidth="4"
                  fill="#63b3ed"
                  fillOpacity="0.3"
                  variants={circleVariants}
                  initial="initial"
                  animate={isHovering ? "hover" : "initial"}
                  transition={{ delay: 0.2 }}
                />

                {/* Bullseye */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="15"
                  fill="#3182ce"
                  variants={circleVariants}
                  initial="initial"
                  animate={isHovering ? "hover" : "initial"}
                  transition={{ delay: 0.3 }}
                />

                {/* Dart */}
                <motion.g variants={dartVariants} initial="initial" animate={isHovering ? "hover" : "initial"}>
                  {/* Dart body */}
                  <path d="M200 200L120 280" stroke="#2c5282" strokeWidth="6" strokeLinecap="round" />

                  {/* Dart fletching */}
                  <path d="M120 280L100 300M120 280L140 300" stroke="#2c5282" strokeWidth="6" strokeLinecap="round" />

                  {/* Dart tip */}
                  <circle cx="200" cy="200" r="8" fill="#2c5282" />
                </motion.g>

                {/* Glow effect */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="120"
                  fill="url(#targetGradient)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovering ? 0.3 : 0 }}
                  transition={{ duration: 1 }}
                />

                {/* Gradient definition */}
                <defs>
                  <radialGradient id="targetGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                    <stop offset="0%" stopColor="#63b3ed" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#4299e1" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-sky-700">
              Our Mission
            </h2>
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-blue-100 rounded transform rotate-1 -z-10"></div>
              <span className="relative z-10 bg-white px-4 py-2 rounded font-medium text-blue-800 text-xl">UNITY</span>
            </div>
            <p className="text-blue-800/80 max-w-2xl mx-auto text-lg">
              Our mission at the International Unity Club (IUC) is to support and empower new international students
              with guidance, resources, and a welcoming community. We aim to bridge the gap between domestic and
              international students, fostering meaningful connections. Join us in creating lasting friendships and
              ensuring every student feels at home at York University.
            </p>
          </div>

          {/* Hover instruction */}
          <div
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-blue-500 text-sm transition-opacity duration-300"
            style={{ opacity: isHovering ? 0 : 0.7 }}
          >
            Hover to see our mission in action
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="bg-white/70 border-blue-200 h-full shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-blue-50">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">{feature.title}</h3>
                  <p className="text-blue-700/80">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
