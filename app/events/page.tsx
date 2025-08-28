import { getSortedEventsData, EventData } from "@/lib/events";
import { EventsPageClientContent } from "./events-client-content"; // We will create this next
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Club Programs & Events | International Unity Club - York University",
  description: "Explore upcoming and past programs, workshops, and social gatherings hosted by the International Unity Club at York University. Get involved and connect!",
  // Add more metadata as needed
};

export default async function AllEventsPage() {
  const allEvents = await getSortedEventsData(); // Now fetches full content

  return (
    <EventsPageClientContent allEvents={allEvents} />
  );
} 