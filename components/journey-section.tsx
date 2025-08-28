"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Lightbulb, Users, Rocket, TrendingUp, Target, Flag } from "lucide-react"; // Example icons

const journeyPhases = [
  {
    phase: "PHASE 1",
    icon: Lightbulb,
    imageSrc: "/placeholder.svg?width=300&height=300&text=Phase+1+Idea",
    altText: "Illustration of a lightbulb moment",
    title: "Spark of an Idea",
    subtitle: "Professor Anirban's Vision",
    description: "Professor Anirban had the brilliant idea of creating a club specifically for international students. He reached out to his top BCom students to gauge interest in this initiative.",
  },
  {
    phase: "PHASE 2",
    icon: Users,
    imageSrc: "/placeholder.svg?width=300&height=300&text=Phase+2+Community",
    altText: "Illustration of diverse students connecting",
    title: "Group Formation & First Event",
    subtitle: "Building Our Foundation",
    description: "The group was officially formed and registered as an organized club. We immediately organized our first event - the Welcome Mixer, marking the beginning of our journey in creating meaningful experiences for international students.",
  },
  {
    phase: "PHASE 3",
    icon: Rocket,
    imageSrc: "/placeholder.svg?width=300&height=300&text=Phase+3+Current+Events",
    altText: "Illustration of current events",
    title: "More Events & Growth",
    subtitle: "Expanding Our Reach",
    description: "We're now hosting multiple exciting events including Welcome Week Orientation, Movie Night, Board Game Night, and our upcoming SLDC event. Our community continues to grow with more international students joining us every day.",
  },
];

export default function JourneySection() {
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.3, // Stagger animation slightly more for timeline items
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };
  const itemVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.3,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
            Our Journey So Far
          </h2>
          <p className="text-blue-700/80 max-w-2xl mx-auto text-lg">
            From a simple idea to a thriving community, here's how we've grown and what drives us forward.
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Timeline Bar - hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-sky-200 transform -translate-x-1/2"></div>

          {journeyPhases.map((item, index) => {
            const IconComponent = item.icon;
            const isEven = index % 2 === 0;
            return (
                             <motion.div
                 key={`${item.phase}-${index}`}
                 custom={index}
                variants={isEven || typeof window !== 'undefined' && window.innerWidth < 768 ? itemVariants : itemVariantsRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={`mb-12 md:mb-16 flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-8' : 'md:pl-8'} ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-sky-50/60 p-6 rounded-xl shadow-lg border border-sky-100 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                    <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
                      {item.phase} - <span className="italic">{item.subtitle}</span>
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-blue-800 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-blue-700/90 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Marker on Timeline Bar */}
                <div className="hidden md:flex md:w-2/12 items-center justify-center relative">
                  <div className="absolute w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-md z-10 flex items-center justify-center">
                    <IconComponent className="w-3 h-3 text-white" />
                  </div>
                </div>

                {/* Image (Placeholder on opposite side for alternating layout) - or image can be part of the card */}
                {/* For this design, image is better inside the card or next to text, let's simplify by not having it as a separate alternating element */}
                {/* Let's integrate image into the card for a cleaner timeline item */}
                 {/* The image is not used in this new timeline design to keep items cleaner. */}
                 {/* If you want images: place <Image> inside the content card above or below description. */}
                 {/* E.g., after description: */}
                 {/* <div className="relative w-full aspect-video mt-4 rounded-lg overflow-hidden shadow-inner"> */}
                 {/*   <Image src={item.imageSrc} alt={item.altText} fill className="object-cover" /> */}
                 {/* </div> */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
