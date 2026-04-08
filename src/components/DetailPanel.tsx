import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CIVILIZATIONS, type Civilization } from "@/data/civilizations";

interface DetailPanelProps {
  civ: Civilization;
  onClose: () => void;
  onSelect: (civ: Civilization) => void;
}

const GOLD = "#C9A84C";
const DARK = "#2A1E10";
const MUTED = "rgba(42,30,16,0.45)";

export default function DetailPanel({ civ, onClose, onSelect }: DetailPanelProps) {
  const idx = CIVILIZATIONS.findIndex((c) => c.id === civ.id);
  const prev = idx > 0 ? CIVILIZATIONS[idx - 1] : null;
  const next = idx < CIVILIZATIONS.length - 1 ? CIVILIZATIONS[idx + 1] : null;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && next) onSelect(next);
      if (e.key === "ArrowLeft" && prev) onSelect(prev);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [civ, onSelect, prev, next]);

  return (
    <section
      style={{
        background: "#F5F0E8",
        borderTop: `1px solid rgba(201,168,76,0.35)`,
        borderBottom: `1px solid rgba(201,168,76,0.15)`,
      }}
    >
      {/* Gold top accent */}
      <div
        style={{
          height: "2px",
          background: `linear-gradient(to right, transparent, ${GOLD}60, transparent)`,
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={civ.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="max-w-6xl mx-auto px-8 py-7"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Left col: name + description + works */}
            <div className="md:col-span-2 space-y-4">

              {/* Date pill + region */}
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5"
                  style={{
                    color: GOLD,
                    border: `1px solid rgba(201,168,76,0.4)`,
                    borderRadius: "2px",
                  }}
                >
                  {civ.dates}
                </span>
                <span
                  className="font-mono text-[10px] uppercase tracking-widest"
                  style={{ color: MUTED }}
                >
                  {civ.region}
                </span>
              </div>

              {/* Title */}
              <h2
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.6rem, 3.2vw, 2.2rem)",
                  fontWeight: 700,
                  color: DARK,
                  lineHeight: 1.1,
                  letterSpacing: "0.01em",
                  margin: 0,
                }}
              >
                {civ.name}
              </h2>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Raleway', system-ui, sans-serif",
                  fontWeight: 300,
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  color: "rgba(42,30,16,0.8)",
                  margin: 0,
                }}
              >
                {civ.description}
              </p>

              {/* Key works */}
              <div>
                <p
                  className="font-mono uppercase tracking-widest mb-2"
                  style={{ fontSize: "9px", color: MUTED }}
                >
                  Key Works
                </p>
                <div className="flex flex-wrap gap-2">
                  {civ.works.map((work, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 font-mono"
                      style={{
                        fontSize: "9px",
                        border: `1px solid rgba(42,30,16,0.15)`,
                        borderRadius: "2px",
                        color: "rgba(42,30,16,0.65)",
                        background: "rgba(42,30,16,0.03)",
                      }}
                    >
                      {work}
                    </span>
                  ))}
                </div>
              </div>

              {/* Facts row */}
              <div
                className="grid grid-cols-3 gap-4 pt-4"
                style={{ borderTop: "1px solid rgba(42,30,16,0.08)" }}
              >
                {[
                  { label: "Duration", value: civ.duration },
                  { label: "Defining Quality", value: civ.quality },
                  { label: "Legacy", value: civ.legacy },
                ].map((fact) => (
                  <div key={fact.label}>
                    <p
                      className="font-mono uppercase tracking-widest mb-1"
                      style={{ fontSize: "8px", color: MUTED }}
                    >
                      {fact.label}
                    </p>
                    <p
                      className="font-mono leading-snug"
                      style={{ fontSize: "9px", color: "rgba(42,30,16,0.7)" }}
                    >
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right col: image */}
            <div className="hidden md:flex flex-col gap-4">
              <div
                className="w-full rounded overflow-hidden flex items-center justify-center flex-col gap-2"
                style={{
                  height: "180px",
                  background: civ.image ? "transparent" : "#E8E4DC",
                }}
              >
                {civ.image ? (
                  <img
                    src={civ.image}
                    alt={civ.name}
                    className="w-full h-full object-cover"
                    style={{ opacity: 0.9 }}
                  />
                ) : (
                  <>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.3 }}>
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="rgba(42,30,16,0.5)" strokeWidth="1.5"/>
                      <circle cx="8.5" cy="8.5" r="1.5" stroke="rgba(42,30,16,0.5)" strokeWidth="1.5"/>
                      <path d="M21 15l-5-5L5 21" stroke="rgba(42,30,16,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span
                      className="font-mono uppercase tracking-widest"
                      style={{ fontSize: "8px", color: "rgba(42,30,16,0.35)" }}
                    >
                      Image coming soon
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Navigation row */}
          <div
            className="flex items-center justify-between mt-6 pt-4"
            style={{ borderTop: "1px solid rgba(42,30,16,0.08)" }}
          >
            {prev ? (
              <button
                onClick={() => onSelect(prev)}
                className="flex items-center gap-2 transition-colors duration-200 group"
                style={{ color: MUTED }}
                onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
                onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
              >
                <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
                <span className="font-mono text-[10px] uppercase tracking-[0.1em]">{prev.name}</span>
              </button>
            ) : <div />}

            {/* Dot indicators */}
            <div className="flex items-center gap-1.5">
              {CIVILIZATIONS.map((c) => (
                <div
                  key={c.id}
                  className="rounded-full cursor-pointer transition-all duration-200"
                  style={{
                    width: c.id === civ.id ? "6px" : "4px",
                    height: c.id === civ.id ? "6px" : "4px",
                    backgroundColor: c.id === civ.id ? GOLD : "rgba(42,30,16,0.2)",
                  }}
                  onClick={() => onSelect(c)}
                />
              ))}
            </div>

            {next ? (
              <button
                onClick={() => onSelect(next)}
                className="flex items-center gap-2 transition-colors duration-200"
                style={{ color: MUTED }}
                onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
                onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.1em]">{next.name}</span>
                <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
              </button>
            ) : <div />}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
