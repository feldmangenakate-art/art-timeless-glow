import { useRef } from "react";
import { CIVILIZATIONS, type Civilization } from "@/data/civilizations";

const ERAS = [
  { label: "Prehistoric", start: -35000, end: -3500, color: "#8B7050" },
  { label: "Ancient", start: -3500, end: 476, color: "#C4823A" },
  { label: "Medieval", start: 476, end: 1400, color: "#607090" },
  { label: "Early Modern", start: 1400, end: 1800, color: "#C9A84C" },
  { label: "Modern", start: 1800, end: 2025, color: "#C47080" },
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
    <section className="px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl tracking-tight text-foreground mb-2">
          The Timeline
        </h2>
        <p className="font-sans font-light text-sm text-muted-foreground mb-12">
          35,000 BC to present — scroll to explore
        </p>

        <div ref={scrollRef} className="overflow-x-auto pb-8">
          <div className="relative min-w-[1000px] h-60">
            {/* Era bands */}
            {ERAS.map((era) => {
              const left = getTimelinePos(era.start);
              const right = getTimelinePos(era.end);
              return (
                <div
                  key={era.label}
                  className="absolute top-0 h-6 flex items-center justify-center"
                  style={{
                    left: `${left}%`,
                    width: `${right - left}%`,
                    backgroundColor: `${era.color}15`,
                    borderBottom: `1px solid ${era.color}30`,
                  }}
                >
                  <span className="text-[9px] uppercase tracking-[0.15em] font-sans font-medium" style={{ color: `${era.color}99` }}>
                    {era.label}
                  </span>
                </div>
              );
            })}

            {/* Main timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-primary/20" />

            {/* Scale break marker at 12% */}
            <div className="absolute top-1/2 -translate-y-1/2 flex flex-col items-center" style={{ left: "12%" }}>
              <div className="flex flex-col items-center gap-1 mb-2 -translate-y-8">
                <div className="w-px h-6 border-l border-dashed border-primary/30" />
                <div className="flex flex-col gap-0.5">
                  <div className="w-1 h-1 rounded-full bg-primary/40" />
                  <div className="w-1 h-1 rounded-full bg-primary/40" />
                  <div className="w-1 h-1 rounded-full bg-primary/40" />
                </div>
              </div>
              <p className="absolute top-full mt-6 text-[8px] uppercase tracking-[0.15em] text-primary/40 font-sans whitespace-nowrap">
                Scale Compression: 30,000 Years
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
                  {/* Label */}
                  <span
                    className={`absolute whitespace-nowrap text-[10px] uppercase tracking-[0.2em] font-sans transition-colors duration-300 ${
                      isSelected ? "text-primary" : "text-primary/50 group-hover:text-primary"
                    }`}
                    style={isAbove ? { bottom: "20px" } : { top: "20px" }}
                  >
                    {civ.name}
                  </span>

                  {/* Dot */}
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-500 ${
                      isSelected
                        ? "gold-glow scale-150"
                        : "group-hover:shadow-[0_0_15px_rgba(212,175,55,0.8)] group-hover:scale-150"
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
                  <div className="w-px h-3 bg-primary/15" />
                  <span className="text-[9px] text-muted-foreground font-sans mt-1">
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
