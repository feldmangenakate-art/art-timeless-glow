// featured-schedule.ts
// Weekly featured masterwork — update this list to curate the schedule.
// Each entry goes live on the Monday of that week (midnight UTC).
// After the last entry, the schedule loops from the beginning.

export interface FeaturedWeek {
  weekOf: string;   // YYYY-MM-DD (Monday of that week)
  workId: string;   // id from MASTERWORKS
  note?: string;    // optional internal editorial note
}

export const FEATURED_SCHEDULE: FeaturedWeek[] = [
  { weekOf: "2026-05-27", workId: "mona-lisa",              note: "Launch week — the most iconic painting in history" },
  { weekOf: "2026-06-03", workId: "starry-night",           note: "Van Gogh's vision of the cosmos from an asylum window" },
  { weekOf: "2026-06-10", workId: "las-meninas",            note: "The most analyzed painting in art history" },
  { weekOf: "2026-06-17", workId: "birth-of-venus",         note: "Summer — beauty rising from the sea" },
  { weekOf: "2026-06-24", workId: "great-wave",             note: "The most reproduced artwork in human history" },
  { weekOf: "2026-07-01", workId: "guernica",               note: "The most powerful anti-war painting ever made" },
  { weekOf: "2026-07-08", workId: "night-watch",            note: "Rembrandt's organized chaos, the Dutch Golden Age at its peak" },
  { weekOf: "2026-07-15", workId: "persistence-of-memory",  note: "The painting that defined Surrealism for popular culture" },
  { weekOf: "2026-07-22", workId: "sistine-ceiling",        note: "Michelangelo's four-year act of furious genius" },
  { weekOf: "2026-07-29", workId: "the-scream",             note: "The face of modern anxiety — born from a real sunset" },
  { weekOf: "2026-08-05", workId: "girl-pearl-earring",     note: "The Mona Lisa of the North — intimate, unresolved, unforgettable" },
  { weekOf: "2026-08-12", workId: "water-lilies",           note: "Monet's final 26 years distilled into light and water" },
  { weekOf: "2026-08-19", workId: "creation-of-adam",       note: "The gap between two fingers — the most reproduced image in art" },
  { weekOf: "2026-08-26", workId: "third-of-may",           note: "The first modern anti-war painting, 200 years ahead of its time" },
  { weekOf: "2026-09-02", workId: "venus-de-milo",          note: "Her missing arms became part of the mystique" },
  { weekOf: "2026-09-09", workId: "the-kiss-klimt",         note: "Gold leaf, two lovers, the edge of the world" },
  { weekOf: "2026-09-16", workId: "judith-holofernes",      note: "Artemisia's reckoning — personal history as biblical narrative" },
  { weekOf: "2026-09-23", workId: "school-of-athens",       note: "The Renaissance's manifesto of human reason" },
  { weekOf: "2026-09-30", workId: "fighting-temeraire",     note: "A ghost ship towed into obsolescence — the greatest British painting" },
  { weekOf: "2026-10-07", workId: "two-fridas",             note: "Heartbreak, painted with the calm precision of a surgeon" },
  { weekOf: "2026-10-14", workId: "saturn-devouring",       note: "Painted alone, in secret, on the walls of his own house" },
  { weekOf: "2026-10-21", workId: "david",                  note: "The moment before courage becomes action" },
  { weekOf: "2026-10-28", workId: "demoiselles-avignon",    note: "The painting that broke every rule and made modern art possible" },
  { weekOf: "2026-11-04", workId: "arnolfini-portrait",     note: "Jan van Eyck was here — one of painting's earliest signatures" },
  { weekOf: "2026-11-11", workId: "nighthawks",             note: "The loneliest painting in America, lit from within" },
  { weekOf: "2026-11-18", workId: "snow-storm-turner",      note: "Turner lashed to a mast — or so he claimed" },
  { weekOf: "2026-11-25", workId: "nefertiti",              note: "The most reproduced face of the ancient world" },
  { weekOf: "2026-12-02", workId: "liberty-leading",        note: "The image that defined revolutionary France" },
  { weekOf: "2026-12-09", workId: "calling-saint-matthew",  note: "The painting that invented cinematic light" },
  { weekOf: "2026-12-16", workId: "transfiguration",        note: "Raphael's last painting — on his easel when he died" },
];

/**
 * Returns the scheduled featured work for the current week.
 * Falls back to the first entry if today is before the schedule begins,
 * and loops from the start once the schedule is exhausted.
 */
export function getCurrentFeaturedId(): string {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Find entries that have already started, sorted newest-first
  const started = FEATURED_SCHEDULE
    .filter(e => new Date(e.weekOf) <= today)
    .sort((a, b) => new Date(b.weekOf).getTime() - new Date(a.weekOf).getTime());

  if (started.length > 0) return started[0].workId;

  // Before the schedule starts → show first entry
  return FEATURED_SCHEDULE[0].workId;
}
