import { useLocation } from "react-router-dom";

const PAGE_INFO: Record<string, { title: string; description: string }> = {
  "/geography": {
    title: "Geography",
    description: "Art mapped across civilizations and continents — explore how place shaped creation, from the Nile Valley to the streets of Paris.",
  },
  "/masterworks": {
    title: "Masterworks",
    description: "The works that changed everything — a curated collection of the most significant artworks in human history, each with the story of why it mattered.",
  },
  "/artists": {
    title: "Artists",
    description: "The minds behind the movements — from anonymous cave painters to Picasso, the lives and obsessions that drove artistic revolution.",
  },
};

export default function ComingSoon() {
  const location = useLocation();
  const info = PAGE_INFO[location.pathname] || { title: "Coming Soon", description: "" };

  return (
    <main className="min-h-screen pt-16 flex items-center justify-center selection:bg-primary/30">
      <div className="text-center max-w-md px-8 animate-fade-in">
        <p className="text-[10px] uppercase tracking-[0.3em] text-primary/50 font-sans font-medium mb-4">
          Coming Soon
        </p>
        <h1 className="font-display text-4xl tracking-tight text-foreground mb-4">
          {info.title}
        </h1>
        <p className="font-sans font-light text-sm text-muted-foreground leading-relaxed">
          {info.description}
        </p>
        <div className="mt-8 w-12 h-px bg-primary/20 mx-auto" />
      </div>
    </main>
  );
}
