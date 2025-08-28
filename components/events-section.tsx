import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { getSortedEventsData, EventData } from "@/lib/events"
import { AnimatedEventCard } from "@/components/ui/animated-event-card"
import { AnimatedSectionHeader } from "@/components/ui/animated-section-header"

export async function EventsSection() {
  const allEvents = await getSortedEventsData()
  // Display the 3 most recent events, regardless of status
  const displayedEvents = allEvents.slice(0, 3)

  return (
    <section id="events" className="py-12 md:py-20 bg-gradient-to-b from-sky-50 to-blue-100">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSectionHeader title="Our Events" description="Discover our latest activities and engagements." />
        
        {displayedEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {displayedEvents.map((event, index) => (
              <AnimatedEventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        ) : (
          <p className="text-center text-blue-700/80 mt-10 text-lg">
            No programs to display at the moment. Check back soon!
          </p>
        )}

        {allEvents.length > 0 && (
          <div className="mt-12 text-center">
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-blue-300 text-blue-700 hover:bg-blue-100 hover:text-blue-800 transition-all duration-200 ease-in-out shadow-sm hover:shadow-md hover:scale-105 transform">
              <Link href="/events">View All Programs</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
