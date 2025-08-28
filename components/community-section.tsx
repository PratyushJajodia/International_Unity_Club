"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function CommunitySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-sky-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-sky-500/10 z-10"></div>
              <Image
                src="/images/iuc_group_image.avif"
                alt="Diverse group of international students"
                width={800}
                height={800}
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/30 to-transparent h-1/4 z-10"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center mb-4">
              <div className="px-4 py-1.5 rounded-full border-2 border-blue-400 bg-blue-100/50 text-blue-700 text-sm font-medium">
                Join Our Community
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-sky-700">
              Connect With Students From Around The World
            </h2>
            <p className="text-blue-800/80 mb-6 text-lg">
              The International Unity Club brings together students from over 50 countries, creating a vibrant community
              where you can share experiences, learn about different cultures, and build lasting friendships.
            </p>
            <p className="text-blue-800/80 mb-8">
              Whether you're looking to connect with students from your home country or expand your global network, our
              community offers a welcoming space for everyone. Join us for cultural celebrations, language exchanges,
              and social gatherings throughout the academic year.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white"
                onClick={() => (window.location.href = "#contact")}
              >
                Join Our Community
              </Button>
              <Button 
                variant="outline" 
                className="border-blue-300 text-blue-700 hover:bg-blue-100"
                onClick={() => (window.location.href = "#events")}
              >
                Upcoming Events
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
