import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin, Clock, Sparkles, Landmark } from "lucide-react";
import { CIVILIZATIONS, type Civilization } from "@/data/civilizations";

interface DetailPanelProps {
  civ: Civilization;
  onClose: () => void;
  onSelect: (civ: Civilization) => void;
}

export default function DetailPanel({ civ, onClose, onSelect }: DetailPanelProps) {
  const idx = CIVILIZATIONS.findIndex((c) => c.id === civ.id);
  const prev = idx > 0 ? CIVILIZATIONS[idx - 1] : null;
  const next = idx < CIVILIZATIONS.length - 1 ? CIVILIZATIONS[idx + 1] : null;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && next) onSelect(next);
      if (e.key === "ArrowLeft" && prev) onSelect(prev);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [civ, onClose, onSelect, prev, next]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-foreground/40 z-[55]"
        onClick={onClose}
      />

      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 120 }}
        className="fixed bottom-0 left-0 right-0 bg-background border-t-2 border-primary/30 z-[60] overflow-y-auto paper-texture"
        style={{ height: "70vh" }}
      >
        <div className="max-w-5xl mx-auto p-8 md:p-12">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: civ.color }} />
                <span className="tape-label text-muted-foreground">
                  {civ.dates}
                </span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl tracking-wide text-primary">
                {civ.name.toUpperCase()}
              </h2>
              <p className="font-mono text-xs text-muted-foreground mt-2 uppercase tracking-[0.1em]">{civ.region}</p>
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-primary transition-colors p-2"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <p className="font-mono text-sm text-foreground/80 leading-relaxed">
                {civ.description}
              </p>

              <div>
                <div className="tape-label text-muted-foreground mb-4">
                  Key Works
                </div>
                <ul className="space-y-2">
                  {civ.works.map((work, i) => (
                    <li key={i} className="font-mono text-xs text-foreground/70 pl-4 border-l-2 border-primary/30">
                      {work}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-5 border-l-2 border-border/15 pl-6">
              {[
                { icon: Clock, label: "Duration", value: civ.duration },
                { icon: MapPin, label: "Location", value: civ.region },
                { icon: Sparkles, label: "Defining Quality", value: civ.quality },
                { icon: Landmark, label: "Legacy", value: civ.legacy },
              ].map((fact) => (
                <div key={fact.label} className="flex items-start gap-3">
                  <fact.icon className="w-4 h-4 text-primary/50 mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-mono font-bold mb-1">{fact.label}</p>
                    <p className="font-mono text-xs text-foreground/70">{fact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12 pt-6 border-t-2 border-border/15">
            {prev ? (
              <button
                onClick={() => onSelect(prev)}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
                <span className="font-mono text-xs uppercase tracking-[0.1em] font-bold">{prev.name}</span>
              </button>
            ) : <div />}
            {next ? (
              <button
                onClick={() => onSelect(next)}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="font-mono text-xs uppercase tracking-[0.1em] font-bold">{next.name}</span>
                <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
              </button>
            ) : <div />}
          </div>
        </div>
      </motion.div>
    </>
  );
}
