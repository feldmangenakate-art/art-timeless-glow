import { useLocation, Link } from "react-router-dom";

const PAGE_INFO: Record<string, { title: string; description: string }> = {
  "/geography": {
    title: "GEOGRAPHY",
    description: "Art mapped across civilizations and continents — explore how place shaped creation, from the Nile Valley to the streets of Paris.",
  },
  "/masterworks": {
    title: "MASTERWORKS",
    description: "The works that changed everything — a curated collection of the most significant artworks in human history, each with the story of why it mattered.",
  },
  "/artists": {
    title: "ARTISTS",
    description: "The minds behind the movements — from anonymous cave painters to Picasso, the lives and obsessions that drove artistic revolution.",
  },
};

export default function ComingSoon() {
  const location = useLocation();
  const info = PAGE_INFO[location.pathname] || { title: "COMING SOON", description: "" };

  return (
    <main className="min-h-screen pt-14 flex items-center justify-center paper-texture">
      <div className="text-center max-w-md px-8 animate-fade-in">
        <div className="tape-label text-muted-foreground mx-auto mb-6">
          Coming Soon
        </div>
        <h1 className="font-display text-6xl tracking-wide text-primary mb-5">
          {info.title}
        </h1>
        <p className="font-mono text-xs text-muted-foreground leading-relaxed">
          {info.description}
        </p>
        <div className="mt-8">
          <Link to="/" className="inline-block px-6 py-2 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.15em] font-bold hover:opacity-90 transition-opacity">
            Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}
