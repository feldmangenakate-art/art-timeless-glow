import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Timeline from "@/components/Timeline";
import DetailPanel from "@/components/DetailPanel";
import type { Civilization } from "@/data/civilizations";

export default function TimelinePage() {
  const [selected, setSelected] = useState<Civilization | null>(null);

  return (
    <main className="min-h-screen pt-16 selection:bg-primary/30">
      <section className="px-8 pt-20 pb-4 max-w-6xl mx-auto">
        <p className="text-[10px] uppercase tracking-[0.3em] text-primary/50 font-sans font-medium mb-3">
          Explore
        </p>
        <h1 className="font-display text-4xl md:text-5xl tracking-tight text-foreground">
          The Timeline of Art
        </h1>
        <p className="font-sans font-light text-muted-foreground mt-3 max-w-xl">
          From the first cave paintings to the present day. Click any civilization to explore its story.
        </p>
      </section>

      <Timeline onSelect={setSelected} selectedId={selected?.id} />

      <AnimatePresence>
        {selected && (
          <DetailPanel
            civ={selected}
            onClose={() => setSelected(null)}
            onSelect={setSelected}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
