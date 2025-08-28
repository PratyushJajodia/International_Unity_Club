"use client";

import { EventData } from "@/lib/events";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import Image from 'next/image';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EventCardProps {
  event: EventData;
  isExpanded: boolean;
  onToggleExpand: (id: string) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, isExpanded, onToggleExpand }) => {
  return (
    <motion.div 
      layout 
      className="mb-6 transform transition-transform duration-300 ease-in-out hover:scale-[1.02]"
    >
      <Card className="bg-white/80 border-blue-200 overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative w-full aspect-[311/453] max-h-[500px] overflow-hidden">
          {event.image && (
            <Image
              src={event.image}
              alt={event.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-4 flex flex-col justify-end z-10">
            <h3 className="text-2xl font-semibold text-white mb-1">{event.title}</h3>
            {event.status === 'upcoming' && (
                <span className="px-2 py-0.5 text-xs font-semibold bg-green-500 text-white rounded-full inline-block mb-1">Upcoming</span>
            )}
            {event.status === 'past' && (
                <span className="px-2 py-0.5 text-xs font-semibold bg-gray-500 text-white rounded-full inline-block mb-1">Past</span>
            )}
          </div>
        </div>
        <CardContent className="p-6">
          <div className="space-y-2 mb-4 text-sm">
            {event.display_date && (
              <div className="flex items-center text-blue-700/90">
                <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{event.display_date}</span>
              </div>
            )}
            {event.time && (
              <div className="flex items-center text-blue-700/90">
                <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{event.time}</span>
              </div>
            )}
            {event.location && (
              <div className="flex items-center text-blue-700/90">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>{event.location}</span>
              </div>
            )}
          </div>
          
          <AnimatePresence initial={false}>
            {isExpanded ? (
              <motion.div
                key="content"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 }
                }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                className="overflow-hidden prose prose-sm max-w-none text-gray-700 reset-prose"
              >
                <div dangerouslySetInnerHTML={{ __html: event.contentHtml || "<p>No detailed description available.</p>" }} />
              </motion.div>
            ) : (
              <p className="text-gray-600 text-sm line-clamp-3">{event.short_description || "Click to read more."}</p>
            )}
          </AnimatePresence>

        </CardContent>
        <CardFooter className="p-6 pt-2 flex justify-between items-center">
          <Button 
            variant="outline"
            size="sm" 
            onClick={() => onToggleExpand(event.id)} 
            className="text-blue-600 border-blue-300 hover:bg-blue-50"
          >
            {isExpanded ? "Show Less" : "Read More"}
            {isExpanded ? <ChevronUp className="h-4 w-4 ml-2" /> : <ChevronDown className="h-4 w-4 ml-2" />}
          </Button>
          {event.status === 'upcoming' && event.registration_link && (
            <Button asChild size="sm" className="bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white">
              <Link href={event.registration_link} target="_blank" rel="noopener noreferrer">Register Now</Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

interface EventsPageClientContentProps {
  allEvents: EventData[];
}

export function EventsPageClientContent({ allEvents }: EventsPageClientContentProps) {
  const [expandedEventId, setExpandedEventId] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('upcoming'); // Default to upcoming

  // Scroll to event if ID is in URL hash
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setExpandedEventId(hash); // Optionally auto-expand if you link directly to an event detail
        }
      }
    }
  }, []);

  const handleToggleExpand = (id: string) => {
    setExpandedEventId(expandedEventId === id ? null : id);
  };

  const filteredEvents = allEvents.filter(event => {
    if (filter === 'all') return true;
    return event.status === filter;
  });
  // Sorting is now handled by getSortedEventsData, but you can re-sort client-side if needed after filtering

  return (
    <div className="bg-gradient-to-b from-sky-50 to-blue-100 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-sky-700">
            Club Programs & Events
          </h1>
          <p className="text-blue-800/80 max-w-2xl mx-auto text-lg">
            Explore our upcoming and past events. Find opportunities to connect, learn, and grow with the International Unity Club.
          </p>
        </motion.div>

        <div className="mb-8 flex justify-center space-x-2 md:space-x-4 sticky top-0 z-10 py-4 bg-sky-50/80 backdrop-blur-md rounded-md shadow-sm">
          {(['upcoming', 'past', 'all'] as const).map(statusFilter => (
            <Button 
              key={statusFilter} 
              variant={filter === statusFilter ? "default" : "outline"}
              onClick={() => setFilter(statusFilter)}
              className={`capitalize transform transition-all duration-200 ease-in-out hover:scale-105 ${ 
                filter === statusFilter 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg'
                  : 'border-blue-300 text-blue-700 hover:bg-blue-100 hover:shadow-md'
              }`}
            >
              {statusFilter} Events
            </Button>
          ))}
        </div>

        {filteredEvents.length > 0 ? (
          <div className="max-w-3xl mx-auto">
            <AnimatePresence>
            {filteredEvents.map((event) => (
              // Add an id to the EventCard container for direct linking
              <div id={event.id} key={event.id}>
                <EventCard 
                  event={event} 
                  isExpanded={expandedEventId === event.id} 
                  onToggleExpand={handleToggleExpand} 
                />
              </div>
            ))}
            </AnimatePresence>
          </div>
        ) : (
          <motion.p 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className="text-center text-xl text-blue-700/80 mt-10"
          >
            No {filter !== 'all' ? filter : ''} events to display at the moment.
          </motion.p>
        )}

        <div className="text-center mt-16">
          <Link href="/#programs" passHref>
            <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100 hover:text-blue-800">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 