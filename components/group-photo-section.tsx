"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function GroupPhotoSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-100 to-sky-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg border-4 border-white">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent z-10"></div>
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="International Unity Club Group Photo"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-sky-700">
              Our Community
            </h2>
            <p className="text-blue-800/80 mb-6 text-lg">
              The International Unity Club brings together students from all corners of the world. We celebrate
              diversity, foster cross-cultural understanding, and create a supportive environment where everyone feels
              welcome.
            </p>
            <p className="text-blue-800/80 mb-6">
              Through our events, programs, and initiatives, we've built a strong community of international and
              domestic students who learn from each other and form lasting friendships.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white">
              Join Our Community
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
