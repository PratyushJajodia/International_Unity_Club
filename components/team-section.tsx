"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ChevronLeft, ChevronRight, Sparkles, Coffee, Heart } from "lucide-react"
import Image from 'next/image';

// Team data organized by department
const teamData = [
  {
    department: "Presidents",
    members: [
      {
        name: "Julie Nguyen",
        role: "Co-President",
        image: "/images/Teampics/Julie.jpeg",
      },
      {
        name: "Devang Patel",
        role: "Co-President",
        image: "/images/Teampics/Devang.jpeg",
      },
    ],
  },
  {
    department: "Operation Management",
    members: [
      {
        name: "Fatou Sow (Binta)",
        role: "Vice-President",
        image: "/images/Teampics/Binta.jpeg",
      },
      {
        name: "Erlin Gan",
        role: "Associate",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  },
  {
    department: "HR",
    members: [
      {
        name: "Sumeet Kapadia",
        role: "Vice-President",
        image: "/images/Teampics/sumeet.jpeg",
      },
      {
        name: "Pushti Dave",
        role: "Director",
        image: "/images/Teampics/pushti.jpeg",
      },
      {
        name: "Sugana Sathies",
        role: "Associate",
        image: "/placeholder.svg?height=300&width=300",

      },
      {
        name: "Simranjitsingh Ajitp Bal",
        role: "Director",
        image: "/placeholder.svg?height=300&width=300",

      },
      {
        name: "Leighann Catipon",
        role: "Associate",
        image: "/placeholder.svg?height=300&width=300",

      },
    ],
  },
  {
    department: "Marketing",
    members: [
      {
        name: "Madinah",
        role: "Vice-President",
        image: "/images/Teampics/Madinah.jpeg",
      },
      {
        name: "Mahin",
        role: "Director",
        image: "/placeholder.svg?height=300&width=300",

      },
      {
        name: "Malalai",
        role: "Associate",
        image: "/placeholder.svg?height=300&width=300",

      },
      {
        name: "Akanksha",
        role: "Associate",
        image: "/placeholder.svg?height=300&width=300",

      },
      {
        name: "Ann Le",
        role: "Associate",
        image: "/placeholder.svg?height=300&width=300",

      },
      {
        name: "Mehak Lalwani",
        role: "Associate",
        image: "/images/Teampics/Mehak.jpeg",
      },
      {
        name: "Uwanaga Mushwana",
        role: "Associate",
        image: "/placeholder.svg?height=300&width=300",

      },
      {
        name: "Riya Singh",
        role: "Associate",
        image: "/images/Teampics/WhatsApp Image 2025-08-27 at 12.14.31 PM.jpeg",
      },
    ],
  },
  {
    department: "Finance & Accounting",
    members: [
      {
        name: "Kupakwashe Nzenze",
        role: "Vice-President",
      },
      {
        name: "Elizabeth Adesina",
        role: "Accounting Director",
        image: "/placeholder.svg?height=300&width=300",

      },
      {
        name: "Melanie Miranda-Macias",
        role: "Accounting Associate",
        image: "/placeholder.svg?height=300&width=300",

      },
      {
        name: "Sally Pham",
        role: "Finance associate",
        image: "/images/Teampics/Sally.jpeg",
      },
      {
        name: "Sakthi SureshKumar",
        role: "Associate",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  },
  {
    department: "Technology",
    members: [
      {
        name: "Gunrattan Bakshi",
        role: "Vice-President",
        image: "/images/Teampics/Gunrattan.jpeg",
      },
      {
        name: "Pratyush Jajodia",
        role: "Director",
        image: "/images/Teampics/pj.jpg",
      },
    ],
  },
  {
    department: "Legal",
    members: [
      {
        name: "Reshad Whahedi",
        role: "Vice-President",
        image: "/placeholder.svg?height=300&width=300",

      },
      {
        name: "Ayesha Khan",
        role: "Director",
        image: "/images/Teampics/Ayesha.jpeg",
      },
      {
        name: "Esmachiah Ankomah",
        role: "Associate",
        image: "/placeholder.svg?height=300&width=300",

      },
    ],
  },
]

// Define Member type based on teamData structure
interface Member {
  name: string;
  role: string;
  image?: string;
  github?: string;    // Optional social links
  linkedin?: string;
}

interface MemberCardProps {
  member: Member;
  index: number;
}

const MemberCard: React.FC<MemberCardProps> = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full flex flex-col transform transition-all duration-300 ease-in-out hover:scale-[1.03]"
    >
      <Card className="bg-white/80 border-blue-200 overflow-hidden h-full flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out">
        <div className="relative w-full aspect-square">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-sky-400/20 z-0" />
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            style={{ objectFit: "cover", objectPosition: "center 25%" }}
            className="z-10"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <CardContent className="p-6 text-center flex flex-col flex-1">
          <h4 className="text-xl font-semibold text-blue-800">{member.name}</h4>
          <p className="text-blue-600 mb-2">{member.role}</p>

          <div className="flex justify-center space-x-3 mt-auto">
            {member.github && (
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-all duration-150 ease-in-out hover:scale-125 transform">
                <Github className="h-5 w-5" />
              </a>
            )}
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-all duration-150 ease-in-out hover:scale-125 transform">
                <Linkedin className="h-5 w-5" />
              </a>
            )}

          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function TeamSection() {
  const [activeDepartment, setActiveDepartment] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollToNextDepartment = () => {
    if (activeDepartment < teamData.length - 1) {
      setActiveDepartment(activeDepartment + 1)
    }
  }

  const scrollToPrevDepartment = () => {
    if (activeDepartment > 0) {
      setActiveDepartment(activeDepartment - 1)
    }
  }

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-blue-50 to-sky-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block text-yellow-500 font-semibold text-2xl mb-3 mt-0">Your Campus Crew</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-sky-700">
            Built by Students, For Students!
          </h2>
          <p className="text-blue-800/80 max-w-2xl mx-auto text-lg">
            We started as a bunch of international students trying to make campus life more awesome and inclusive. Now
            we're a diverse crew of passionate individuals from around the globe, dedicated to creating the ultimate
            university experience for everyone!
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/70 rounded-xl p-6 shadow-sm border border-blue-100">
              <div className="flex justify-center mb-3">
                <Sparkles className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Student-Centric</h3>
              <p className="text-blue-700/80 text-sm">
                Everything we do is designed with international students in mind. From events to resources, we've got
                your back!
              </p>
            </div>

            <div className="bg-white/70 rounded-xl p-6 shadow-sm border border-blue-100">
              <div className="flex justify-center mb-3">
                <Heart className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Community Focused</h3>
              <p className="text-blue-700/80 text-sm">
                We're more than just a club; we're a family! Join our vibrant community of global friends.
              </p>
            </div>

            <div className="bg-white/70 rounded-xl p-6 shadow-sm border border-blue-100">
              <div className="flex justify-center mb-3">
                <Coffee className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Always Welcoming</h3>
              <p className="text-blue-700/80 text-sm">
                Need help or just want to chat? Our friendly team is always here to support you through your university
                journey.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Department Filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-2 md:gap-4 px-4">
          {teamData.map((dept, index) => (
            <Button
              key={dept.department}
              variant={activeDepartment === index ? "default" : "outline"}
              onClick={() => setActiveDepartment(index)}
              className={`capitalize transition-all duration-300 ease-in-out text-sm md:text-base px-3 md:px-4 py-2 md:py-3
                          ${activeDepartment === index 
                            ? 'bg-blue-600 hover:bg-blue-700 text-white scale-105 shadow-lg'
                            : 'border-blue-300 text-blue-700 hover:bg-blue-100 hover:shadow-md'}`}
            >
              {dept.department} ({dept.members.length})
            </Button>
          ))}
        </div>

        {/* Department Title */}
        <motion.h3 
          key={teamData[activeDepartment].department}
          initial={{ opacity: 0, y:10 }}
          animate={{ opacity: 1, y:0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-center mb-10 text-blue-700"
        >
          {teamData[activeDepartment].department}
        </motion.h3>

        {/* Member Cards Grid - Wrapped for centering */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-2 w-full max-w-6xl px-4 md:px-0">
            {teamData[activeDepartment].members.map((member, index) => (
              <MemberCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* Navigation for Departments - this is a conceptual placement, not a carousel for members */}
        {/* Actual member carousel/scrolling would be within the map if needed */}
        <div className="flex justify-center items-center mt-16 space-x-4 relative">
          <Button
            variant="outline"
            size="icon"
            className={`md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 z-10 bg-white/80 border-blue-200 text-blue-700 hover:bg-blue-100 ${
              activeDepartment === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={scrollToPrevDepartment}
            disabled={activeDepartment === 0}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className={`md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 z-10 bg-white/80 border-blue-200 text-blue-700 hover:bg-blue-100 ${
              activeDepartment === teamData.length - 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={scrollToNextDepartment}
            disabled={activeDepartment === teamData.length - 1}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center mt-2 space-x-2">
          {teamData.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 md:w-3 md:h-3 rounded-full ${
                activeDepartment === index ? "bg-blue-600" : "bg-blue-200"
              } transition-colors`}
              onClick={() => setActiveDepartment(index)}
              aria-label={`Go to ${teamData[index].department} team`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
