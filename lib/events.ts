import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const eventsDirectory = path.join(process.cwd(), 'content/events');

export interface EventData {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD for sorting
  display_date: string; // For display
  time?: string;
  location?: string;
  image?: string;
  status: 'upcoming' | 'past';
  short_description?: string;
  contentHtml: string; // Full description as HTML
  [key: string]: any; // Allow other frontmatter fields
}

export async function getSortedEventsData(): Promise<EventData[]> {
  const fileNames = fs.readdirSync(eventsDirectory);
  const allEventsData = await Promise.all(fileNames.map(async (fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(eventsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      id,
      contentHtml,
      ...(matterResult.data as Omit<EventData, 'id' | 'contentHtml'>),
    } as EventData;
  }));

  return allEventsData.sort((a, b) => {
    // Sort by date: upcoming events oldest first, past events newest first
    // You might want to adjust this logic based on how you want combined lists to appear
    if (a.status === 'upcoming' && b.status === 'upcoming') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    if (a.status === 'past' && b.status === 'past') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    // If mixing, upcoming usually comes before past
    if (a.status === 'upcoming' && b.status === 'past') return -1;
    if (a.status === 'past' && b.status === 'upcoming') return 1;
    // Default sort by date (e.g. newest first if statuses are mixed and not handled above)
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Optional: Function to get a single event with its full content rendered to HTML
export async function getEventData(id: string): Promise<EventData> {
  const fullPath = path.join(eventsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as Omit<EventData, 'id' | 'contentHtml'>),
  } as EventData;
}

// Function to get all event IDs for dynamic routing if you create individual event pages
export function getAllEventIds() {
  const fileNames = fs.readdirSync(eventsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
} 