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
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[55]"
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 120 }}
        className="fixed bottom-0 left-0 right-0 bg-muted border-t border-primary/20 z-[60] overflow-y-auto"
        style={{ height: "70vh" }}
      >
        <div className="max-w-5xl mx-auto p-8 md:p-12">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: civ.color }} />
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-sans">
                  {civ.dates}
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight text-foreground">
                {civ.name}
              </h2>
              <p className="font-sans font-light text-sm text-primary/60 mt-1">{civ.region}</p>
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors p-2"
            >
              <X className="w-5 h-5" strokeWidth={1} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="md:col-span-2 space-y-8">
              <p className="font-sans font-light text-foreground/80 leading-relaxed">
                {civ.description}
              </p>

              <div>
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-primary/60 font-sans font-medium mb-4">
                  Key Works
                </h3>
                <ul className="space-y-2">
                  {civ.works.map((work, i) => (
                    <li key={i} className="font-sans font-light text-sm text-foreground/70 pl-4 border-l border-primary/20">
                      {work}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar facts */}
            <div className="space-y-6 border-l border-primary/10 pl-6">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary/40 mt-0.5 shrink-0" strokeWidth={1} />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-sans mb-1">Duration</p>
                  <p className="font-sans font-light text-sm text-foreground/80">{civ.duration}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary/40 mt-0.5 shrink-0" strokeWidth={1} />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-sans mb-1">Location</p>
                  <p className="font-sans font-light text-sm text-foreground/80">{civ.region}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-primary/40 mt-0.5 shrink-0" strokeWidth={1} />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-sans mb-1">Defining Quality</p>
                  <p className="font-sans font-light text-sm text-foreground/80">{civ.quality}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Landmark className="w-4 h-4 text-primary/40 mt-0.5 shrink-0" strokeWidth={1} />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-sans mb-1">Legacy</p>
                  <p className="font-sans font-light text-sm text-foreground/80">{civ.legacy}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12 pt-6 border-t border-primary/10">
            {prev ? (
              <button
                onClick={() => onSelect(prev)}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeft className="w-4 h-4" strokeWidth={1} />
                <span className="font-sans text-xs uppercase tracking-[0.15em]">{prev.name}</span>
              </button>
            ) : <div />}
            {next ? (
              <button
                onClick={() => onSelect(next)}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="font-sans text-xs uppercase tracking-[0.15em]">{next.name}</span>
                <ChevronRight className="w-4 h-4" strokeWidth={1} />
              </button>
            ) : <div />}
          </div>
        </div>
      </motion.div>
    </>
  );
}
