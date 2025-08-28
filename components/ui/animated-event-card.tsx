"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import { EventData } from "@/lib/events"; // Assuming EventData is in this path

interface AnimatedEventCardProps {
  event: EventData;
  index: number; // For animation delay
}

export function AnimatedEventCard({ event, index }: AnimatedEventCardProps) {
  return (
    <motion.div
      key={event.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="transform transition-transform duration-300 ease-in-out hover:scale-[1.03]"
    >
      <Card className="bg-white/70 border-blue-200 overflow-hidden h-full flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-sky-500/20 z-0" />
          {event.image && (
            <Image
              src={event.image}
              alt={event.title}
              fill
              style={{ objectFit: "cover" }}
              className="z-10"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          {(event.status === 'upcoming' || event.status === 'past') && (
            <div className="absolute top-2 right-2 z-20">
              <span className={`px-3 py-1 text-xs font-semibold text-white rounded-full ${event.status === 'upcoming' ? 'bg-green-500' : 'bg-gray-500'}`}>
                {event.status === 'upcoming' ? 'Upcoming' : 'Past'}
              </span>
            </div>
          )}
        </div>
        <CardContent className="p-6 flex-1">
          <h3 className="text-xl font-semibold mb-3 text-blue-800">{event.title}</h3>
          <div className="space-y-2 mb-4">
            {event.display_date && (
              <div className="flex items-center text-blue-700/80">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm">{event.display_date}</span>
              </div>
            )}
            {event.time && (
              <div className="flex items-center text-blue-700/80">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-sm">{event.time}</span>
              </div>
            )}
            {event.location && (
              <div className="flex items-center text-blue-700/80">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">{event.location}</span>
              </div>
            )}
          </div>
          <p className="text-blue-700/80 text-sm line-clamp-3">{event.short_description}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Link href={`/events#${event.id}`} passHref className='w-full'>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white">
              Learn More
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
} 