import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import VisionSection from "@/components/vision-section"
import HashtagSection from "@/components/hashtag-section"
import ResourcesSection from "@/components/resources-section"
import GetInvolvedSection from "@/components/get-involved-section"
import { EventsSection } from "@/components/events-section"
import TeamSection from "@/components/team-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import CommunitySection from "@/components/community-section"
import FloatingBubbles from "@/components/floating-bubbles"
import FaqSection from "@/components/faq-section"
import JourneySection from "@/components/journey-section" 
import RandomQuote from "@/components/random-quote"
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "International Unity Club - York University | Welcome Home",
  description: "Join the International Unity Club at York University! Discover events, resources, and a vibrant community for international students. Your home away from home.",
  // You can add more metadata here like openGraph, keywords, etc.
};

export default function Home() {
  return (
    <main className="min-h-screen">
    
      <FloatingBubbles />
      <HeroSection badge="York University" title1="International" title2="Unity Club" />
      <AboutSection />
      <VisionSection />
      <HashtagSection />
      <ResourcesSection />
      <CommunitySection />
      <GetInvolvedSection />
      <EventsSection />
      <TeamSection />
       <JourneySection />
       <FaqSection />
      <ContactSection />
      <section className="py-8 md:py-12 bg-gray-100 dark:bg-gray-800 w-full">
        <div className="container mx-auto px-4 md:px-6">
          <RandomQuote />
        </div>
      </section>
      <Footer />
    </main>
  )
}
