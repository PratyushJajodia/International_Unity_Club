"use client"

import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { Pacifico } from "next/font/google"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import FloatingPathsBackground from "@/components/floating-paths"
import Image from "next/image"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
  scrollYProgress,
  parallaxFactor = 0.2,
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
  scrollYProgress?: MotionValue<number>
  parallaxFactor?: number
}) {
  const y = scrollYProgress
    ? useTransform(scrollYProgress, [0, 1], [0, -height * parallaxFactor])
    : 0;

  return (
    <motion.div
      style={{ y }}
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.25]",
            "shadow-[0_8px_32px_0_rgba(100,181,246,0.2)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_70%)]",
          )}
        />
      </motion.div>
    </motion.div>
  )
}

export default function HeroSection({
  badge = "York University",
  title1 = "International",
  title2 = "Unity Club",
}: {
  badge?: string
  title1?: string
  title2?: string
}) {
  const { scrollYProgress } = useScroll();

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-hidden bg-gradient-to-b from-sky-50 to-blue-100">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/[0.3] via-transparent to-sky-200/[0.3] blur-3xl" />

        {/* Floating Paths Background */}
        <FloatingPathsBackground />

        <div className="absolute inset-0 overflow-hidden">
          <ElegantShape
            scrollYProgress={scrollYProgress}
            parallaxFactor={0.3}
            delay={0.3}
            width={600}
            height={140}
            rotate={12}
            gradient="from-blue-300/[0.25]"
            className="left-[-20%] md:left-[-5%] top-[10%] md:top-[20%] w-[300px] md:w-[600px] h-[70px] md:h-[140px]"
          />

          <ElegantShape
            scrollYProgress={scrollYProgress}
            parallaxFactor={-0.2}
            delay={0.5}
            width={500}
            height={120}
            rotate={-15}
            gradient="from-sky-300/[0.25]"
            className="right-[-15%] md:right-[0%] top-[65%] md:top-[75%] w-[250px] md:w-[500px] h-[60px] md:h-[120px]"
          />

          <ElegantShape
            scrollYProgress={scrollYProgress}
            parallaxFactor={0.15}
            delay={0.4}
            width={300}
            height={80}
            rotate={-8}
            gradient="from-indigo-300/[0.25]"
            className="left-[2%] md:left-[10%] bottom-[3%] md:bottom-[10%] w-[150px] md:w-[300px] h-[40px] md:h-[80px]"
          />

          <ElegantShape
            scrollYProgress={scrollYProgress}
            parallaxFactor={-0.25}
            delay={0.6}
            width={200}
            height={60}
            rotate={20}
            gradient="from-cyan-300/[0.25]"
            className="right-[10%] md:right-[20%] top-[8%] md:top-[15%] w-[100px] md:w-[200px] h-[30px] md:h-[60px]"
          />

          <ElegantShape
            scrollYProgress={scrollYProgress}
            parallaxFactor={0.1}
            delay={0.7}
            width={150}
            height={40}
            rotate={-25}
            gradient="from-blue-200/[0.25]"
            className="left-[15%] md:left-[25%] top-[3%] md:top-[10%] w-[75px] md:w-[150px] h-[20px] md:h-[40px]"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.5] border border-blue-200/[0.5] mb-8 md:mb-12"
            >
              <Image
                src="/images/york-university-logo.png"
                alt="York University Logo"
                width={20}
                height={20}
                className="rounded-full"
              />
              <span className="text-sm text-blue-700 tracking-wide">{badge}</span>
            </motion.div>

            <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-700 to-blue-900">
                  {title1}
                </span>
                <br />
                <span
                  className={cn(
                    "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600",
                    pacifico.className,
                  )}
                >
                  {title2}
                </span>
              </h1>
            </motion.div>

            <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
              <p className="text-base sm:text-lg md:text-xl text-blue-700/80 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                Navigate University Life with Us. Supporting and empowering international students with guidance,
                resources, and a welcoming community.
              </p>
            </motion.div>

            <motion.div
              custom={3}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white border-none transform transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl"
                asChild
              >
                <a href="#get-involved">Get Involved</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-300 text-blue-700 hover:bg-blue-100/50 hover:text-blue-800 transform transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg"
                asChild
              >
                <a href="#events">Our Programs</a>
              </Button>
            </motion.div>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-sky-50 via-transparent to-sky-50/80 pointer-events-none" />
      </div>
    </div>
  )
}
