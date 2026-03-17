import { useRef } from "react";
import { CIVILIZATIONS, type Civilization } from "@/data/civilizations";

const ERAS = [
  { label: "Prehistoric", start: -35000, end: -3500, color: "#8B7050" },
  { label: "Ancient", start: -3500, end: 476, color: "#8B5E3C" },
  { label: "Medieval", start: 476, end: 1400, color: "#6B6B80" },
  { label: "Early Modern", start: 1400, end: 1800, color: "#8B7D3C" },
  { label: "Modern", start: 1800, end: 2025, color: "#8B4050" },
];

function getTimelinePos(year: number): number {
  if (year <= -3500) {
    return ((year - (-35000)) / (-3500 - (-35000))) * 12;
  }
  return 12 + ((year - (-3500)) / (2025 - (-3500))) * 88;
}

interface TimelineProps {
  onSelect: (civ: Civilization) => void;
  selectedId?: string;
}

export default function Timeline({ onSelect, selectedId }: TimelineProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="tape-label text-muted-foreground mb-2">
          35,000 BC — Present
        </div>
        <h2 className="font-display text-5xl tracking-wide text-foreground mb-3">
          THE TIMELINE
        </h2>
        <p className="font-mono text-xs text-muted-foreground mb-12">
          Scroll to explore · Click a civilization to learn more
        </p>

        <div ref={scrollRef} className="overflow-x-auto pb-8">
          <div className="relative min-w-[1000px] h-64">
            {/* Era bands */}
            {ERAS.map((era) => {
              const left = getTimelinePos(era.start);
              const right = getTimelinePos(era.end);
              return (
                <div
                  key={era.label}
                  className="absolute top-0 h-7 flex items-center justify-center"
                  style={{
                    left: `${left}%`,
                    width: `${right - left}%`,
                    backgroundColor: `${era.color}18`,
                    borderBottom: `2px solid ${era.color}40`,
                  }}
                >
                  <span className="text-[9px] uppercase tracking-[0.15em] font-mono font-bold" style={{ color: `${era.color}` }}>
                    {era.label}
                  </span>
                </div>
              );
            })}

            {/* Main timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border/30" />

            {/* Scale break marker */}
            <div className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center" style={{ left: "12%" }}>
              <div className="flex flex-col items-center gap-1 -translate-y-10">
                <div className="w-px h-8 border-l-2 border-dashed border-border/40" />
                <div className="flex flex-col gap-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                </div>
              </div>
              <p className="absolute top-full mt-8 tape-label text-[8px] text-muted-foreground whitespace-nowrap">
                Scale Break: 30,000 Years
              </p>
            </div>

            {/* Civilization dots */}
            {CIVILIZATIONS.map((civ, i) => {
              const midYear = (civ.start + civ.end) / 2;
              const pos = getTimelinePos(midYear);
              const isAbove = i % 2 === 0;
              const isSelected = selectedId === civ.id;

              return (
                <div
                  key={civ.id}
                  className="group absolute flex flex-col items-center cursor-pointer"
                  style={{
                    left: `${pos}%`,
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  onClick={() => onSelect(civ)}
                >
                  <span
                    className={`absolute whitespace-nowrap text-[10px] uppercase tracking-[0.12em] font-mono font-bold transition-colors duration-200 ${
                      isSelected ? "text-primary" : "text-foreground/50 group-hover:text-primary"
                    }`}
                    style={isAbove ? { bottom: "22px" } : { top: "22px" }}
                  >
                    {civ.name}
                  </span>

                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${
                      isSelected
                        ? "scale-150 border-primary"
                        : "border-transparent group-hover:border-primary group-hover:scale-125"
                    }`}
                    style={{ backgroundColor: civ.color }}
                  />
                </div>
              );
            })}

            {/* Year markers */}
            {[-35000, -3500, -1000, 0, 500, 1000, 1500, 2000].map((year) => {
              const pos = getTimelinePos(year);
              return (
                <div key={year} className="absolute flex flex-col items-center" style={{ left: `${pos}%`, bottom: "0" }}>
                  <div className="w-px h-3 bg-border/30" />
                  <span className="text-[9px] text-muted-foreground font-mono mt-1">
                    {year < 0 ? `${Math.abs(year)} BC` : year === 0 ? "0" : `${year} AD`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
