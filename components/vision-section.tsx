"use client"

import { motion } from "framer-motion"

export default function VisionSection() {
  return (
    <section id="vision" className="py-12 pb-16 bg-gradient-to-b from-blue-100 to-sky-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-sky-700">
            Our Vision
          </h2>
          <p className="text-blue-800/80 max-w-2xl mx-auto text-lg">
            Be transparent, create a sense of belongingness, setting up international students for success by changing
            the perception and having inclusivity by bridging the gap between Domestic students and International
            students.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
