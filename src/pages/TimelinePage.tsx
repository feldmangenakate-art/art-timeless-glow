import { useState } from "react";
import Timeline from "@/components/Timeline";
import DetailPanel from "@/components/DetailPanel";
import { CIVILIZATIONS, type Civilization } from "@/data/civilizations";

const RENAISSANCE = CIVILIZATIONS.find((c) => c.id === "renaissance")!;

export default function TimelinePage() {
  const [selected, setSelected] = useState<Civilization>(RENAISSANCE);

  return (
    <main className="min-h-screen pt-16 flex flex-col">
      <section className="px-8 pt-8 pb-2 max-w-6xl mx-auto w-full text-center">
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            lineHeight: 1.05,
            color: "#2A1E10",
            marginBottom: "0.75rem",
            letterSpacing: "-0.01em",
          }}
        >
          The Timeline of Art
        </h1>
        <p
          style={{
            fontFamily: "'Raleway', system-ui, sans-serif",
            fontWeight: 300,
            color: "rgba(42,30,16,0.45)",
            fontSize: "0.9rem",
            letterSpacing: "0.02em",
          }}
        >
          From the first cave paintings to the present day. Click any civilization to explore its story.
        </p>
      </section>

      {/* Thin gold divider */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)",
          margin: "1rem 2rem",
        }}
      />

      <Timeline onSelect={setSelected} selectedId={selected.id} />

      {/* Info panel — always visible, part of page flow */}
      <div className="flex-1">
        <DetailPanel
          civ={selected}
          onClose={() => setSelected(RENAISSANCE)}
          onSelect={setSelected}
        />
      </div>
    </main>
  );
}
