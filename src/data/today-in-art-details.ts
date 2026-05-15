// today-in-art-details.ts
// Thin adapter — re-exports the rich detail dataset under the camelCase name
// that the Lovable UI layer expects: todayInArtDetails
//
// Source of truth is today-in-art-detail.ts.
// Add or edit entries there; this file follows automatically.

import { TODAY_IN_ART_DETAIL } from "./today-in-art-detail";

export interface TodayInArtDetail {
  dateLabel: string;        // e.g. "MAY 15, 1863"
  title: string;            // short editorial headline
  body: string[];           // 2–3 paragraphs
  relatedWorkId?: string;   // links to /masterworks/:id
  relatedArtistId?: string; // links to /artists/:id
}

/** Keyed by "MM-DD". Only dates with rich editorial copy are present. */
export const todayInArtDetails: Record<string, TodayInArtDetail> =
  TODAY_IN_ART_DETAIL as Record<string, TodayInArtDetail>;

/** Returns today's rich entry, or null if none exists for this date. */
export function getTodayInArtDetail(): TodayInArtDetail | null {
  const now = new Date();
  const key = `${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  return todayInArtDetails[key] ?? null;
}
