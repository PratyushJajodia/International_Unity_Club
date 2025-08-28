"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

export default function HashtagSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const hashtags = [
    "#InternationalUnity",
    "#StudentSupport",
    "#GlobalCommunity",
    "#CulturalExchange",
    "#Diversity",
    "#Inclusion",
    "#StudentSuccess",
    "#YorkU",
    "#BridgingGaps",
    "#Belonging",
    "#Empowerment",
    "#CrossCultural",
    "#StudentLife",
    "#InternationalStudents",
    "#CampusCommunity",
    "#Friendship",
    "#Guidance",
    "#Resources",
    "#Mentorship",
    "#GlobalPerspectives",
  ]

  return (
    <section className="pt-0 pb-8 bg-gradient-to-b from-sky-50 to-blue-50 overflow-hidden -mt-8">
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-sky-200/20 rounded-full filter blur-3xl" />
        </div>

        <div ref={sectionRef} className="relative">
          <div className="flex flex-wrap justify-center">
            {hashtags.map((hashtag, index) => (
              <motion.div
                key={hashtag}
                className="m-2 md:m-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: (index * 0.05) % 0.5, // Create wave effect by cycling delays
                  },
                }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div
                  className={`
                    px-4 py-2 rounded-full text-sm md:text-base font-medium
                    ${
                      index % 3 === 0
                        ? "bg-blue-100/60 text-blue-700"
                        : index % 3 === 1
                          ? "bg-sky-100/60 text-sky-700"
                          : "bg-indigo-100/60 text-indigo-700"
                    }
                    hover:shadow-md transition-all duration-300 transform hover:-translate-y-1
                  `}
                >
                  {hashtag}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
