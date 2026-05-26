export interface CollectionWork {
  id: string;
  title: string;
  artist: string;
  artistId: string | null;
  year: string;
  era: string;
  eraColor: string;
  location: string;
  medium: string;
  image: string;
  caption: string;
  civilizationId: string | null;
  movementId: string | null;
  objectFit?: string;
  objectPosition?: string;
}
