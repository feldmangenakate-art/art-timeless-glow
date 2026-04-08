import { useRef, useState } from "react";
import { CIVILIZATIONS, type Civilization } from "@/data/civilizations";

const ERAS = [
  { label: "Prehistoric", start: -35000, end: -3500, color: "#8B7050" },
  { label: "Ancient", start: -3500, end: 476, color: "#8B5E3C" },
  { label: "Medieval", start: 476, end: 1400, color: "#6B6B80" },
  { label: "Early Modern", start: 1400, end: 1800, color: "#8B7D3C" },
  { label: "Modern", start: 1800, end: 2025, color: "#8B4050" },
];

// 3-segment non-linear scale:
// Prehistoric  (35,000 BC – 3,500 BC) →  0–12%
// Ancient      ( 3,500 BC –   500 AD) → 12–30%
// Medieval+    (   500 AD –  2025 AD) → 30–100%
function getTimelinePos(year: number): number {
  if (year <= -3500) {
    return ((year - (-35000)) / (-3500 - (-35000))) * 12;
  }
  if (year <= 500) {
    return 12 + ((year - (-3500)) / (500 - (-3500))) * 18;
  }
  return 30 + ((year - 500) / (2025 - 500)) * 70;
}

const ERA_H = 24;     // height of era band strip in px
const LINE_TOP = 86;  // px from container top
const LEVEL_PX = 16;  // px per stagger level (16px, 32px, 48px from line)
const MIN_GAP = 10;   // minimum % distance before staggering to next level

// Colors
const C_LABEL  = "#3a3228"; // civilization names — dark warm brown
const C_YEAR   = "#8a7a6a"; // year tick labels
const C_ERA    = "#5a4a3a"; // period band labels

interface LabelPlacement {
  civIndex: number;
  pos: number;
  side: "above" | "below";
  level: number; // 1=16px, 2=32px, 3=48px from line
}

function computeLabelPlacements(positions: number[]): LabelPlacement[] {
  const placements: LabelPlacement[] = [];
  // Track occupied slots: { pos, level } per side
  const occupied: { above: { pos: number; level: number }[]; below: { pos: number; level: number }[] } = {
    above: [],
    below: [],
  };

  positions.forEach((pos, i) => {
    const preferAbove = i % 2 === 0;
    const tryOrder: Array<"above" | "below"> = preferAbove
      ? ["above", "below"]
      : ["below", "above"];

    let placed = false;
    for (const side of tryOrder) {
      if (placed) break;
      for (let level = 1; level <= 3; level++) {
        const conflict = occupied[side].some(
          (o) => o.level === level && Math.abs(o.pos - pos) < MIN_GAP
        );
        if (!conflict) {
          occupied[side].push({ pos, level });
          placements.push({ civIndex: i, pos, side, level });
          placed = true;
          break;
        }
      }
    }
    // Fallback
    if (!placed) {
      placements.push({ civIndex: i, pos, side: preferAbove ? "above" : "below", level: 3 });
    }
  });

  return placements;
}

interface TimelineProps {
  onSelect: (civ: Civilization) => void;
  selectedId?: string;
}

export default function Timeline({ onSelect, selectedId }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const positions = CIVILIZATIONS.map((civ) =>
    getTimelinePos((civ.start + civ.end) / 2)
  );

  const labelPlacements = computeLabelPlacements(positions);

  // Container must hold 3 levels below the line + year markers
  const CONTAINER_H = LINE_TOP + 3 * LEVEL_PX + 32;

  return (
    <section className="px-8 py-2">
      <div className="max-w-6xl mx-auto">

        {/* Metadata row */}
        <div className="flex items-center gap-4 mb-2">
          <span className="font-mono text-[10px]" style={{ color: C_ERA }}>
            35,000 BC — Present
          </span>
          <span className="font-mono text-[10px]" style={{ color: C_YEAR }}>
            · Click a dot to explore
          </span>
        </div>

        {/* Timeline container */}
        <div
          ref={containerRef}
          className="relative w-full"
          style={{ height: `${CONTAINER_H}px`, overflow: "visible" }}
        >

          {/* Era bands */}
          {ERAS.map((era) => {
            const left = getTimelinePos(era.start);
            const right = getTimelinePos(era.end);
            const width = right - left;
            const isNarrow = width < 7;

            return (
              <div
                key={era.label}
                className="absolute flex items-center justify-center overflow-visible"
                style={{
                  left: `${left}%`,
                  width: `${width}%`,
                  top: 0,
                  height: `${ERA_H}px`,
                  backgroundColor: `${era.color}20`,
                  borderBottom: `1px solid ${era.color}40`,
                  borderRight: `1px solid ${era.color}20`,
                }}
              >
                <span
                  className="uppercase font-mono font-semibold whitespace-nowrap select-none"
                  style={{
                    color: C_ERA,
                    fontSize: isNarrow ? "0px" : "7px",
                    letterSpacing: "1.5px",
                  }}
                >
                  {era.label}
                </span>

                {isNarrow && (
                  <span
                    className="absolute uppercase font-mono font-semibold whitespace-nowrap select-none"
                    style={{
                      color: C_ERA,
                      fontSize: "7px",
                      letterSpacing: "1.5px",
                      left: `${width + 1}%`,
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  >
                    {era.label}
                  </span>
                )}
              </div>
            );
          })}

          {/* Timeline line */}
          <div
            className="absolute left-0 right-0"
            style={{
              top: `${LINE_TOP}px`,
              height: "1px",
              background: "linear-gradient(to right, transparent, rgba(42,30,16,0.18) 5%, rgba(42,30,16,0.18) 95%, transparent)",
            }}
          />

          {/* Always-visible dot labels */}
          {labelPlacements.map(({ civIndex, pos, side, level }) => {
            const civ = CIVILIZATIONS[civIndex];
            const isSelected = selectedId === civ.id;
            const isHovered = hoveredId === civ.id;
            const active = isSelected || isHovered;

            // 16px, 32px, 48px from line center
            const distPx = level * LEVEL_PX;
            const labelTop = side === "above"
              ? LINE_TOP - distPx - 10  // label bottom sits distPx above line
              : LINE_TOP + distPx;       // label top sits distPx below line

            const tickHeight = distPx - 4;
            const tickTop = side === "above" ? "100%" : `-${tickHeight}px`;

            return (
              <div
                key={`label-${civ.id}`}
                className="absolute pointer-events-none select-none"
                style={{
                  left: `${pos}%`,
                  top: `${labelTop}px`,
                  transform: "translateX(-50%)",
                  zIndex: 3,
                }}
              >
                {/* Tick line connecting label to dot */}
                <div
                  className="absolute"
                  style={{
                    width: "1px",
                    backgroundColor: active ? civ.color : C_YEAR,
                    left: "50%",
                    height: `${tickHeight}px`,
                    top: tickTop,
                    transition: "background-color 0.2s",
                  }}
                />
                <span
                  className="font-mono uppercase tracking-widest whitespace-nowrap"
                  style={{
                    fontSize: "8px",
                    color: active ? civ.color : C_LABEL,
                    fontWeight: active ? 600 : 400,
                    transition: "color 0.2s",
                    display: "block",
                    textAlign: "center",
                  }}
                >
                  {civ.name}
                </span>
              </div>
            );
          })}

          {/* Civilization dots */}
          {CIVILIZATIONS.map((civ, i) => {
            const pos = positions[i];
            const isSelected = selectedId === civ.id;
            const isHovered = hoveredId === civ.id;

            return (
              <div
                key={civ.id}
                className="absolute cursor-pointer"
                style={{
                  left: `${pos}%`,
                  top: `${LINE_TOP}px`,
                  transform: "translate(-50%, -50%)",
                  zIndex: isHovered ? 50 : 5,
                }}
                onClick={() => onSelect(civ)}
                onMouseEnter={() => setHoveredId(civ.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div
                  className="rounded-full transition-all duration-200"
                  style={{
                    width: isHovered || isSelected ? "14px" : "9px",
                    height: isHovered || isSelected ? "14px" : "9px",
                    backgroundColor: civ.color,
                    boxShadow: isHovered || isSelected
                      ? `0 0 0 3px ${civ.color}30, 0 0 12px ${civ.color}60`
                      : `0 0 4px ${civ.color}40`,
                    outline: isSelected ? `2px solid ${civ.color}` : "none",
                    outlineOffset: "2px",
                  }}
                />
              </div>
            );
          })}

          {/* Year markers */}
          {[-3500, 0, 500, 1000, 1500, 2000].map((year) => {
            const pos = getTimelinePos(year);
            return (
              <div
                key={year}
                className="absolute flex flex-col items-center pointer-events-none"
                style={{
                  left: pos > 97 ? "auto" : `${pos}%`,
                  right: pos > 97 ? "0" : undefined,
                  top: `${LINE_TOP + 4}px`,
                  transform: pos > 97 ? undefined : "translateX(-50%)",
                }}
              >
                <div className="w-px h-2" style={{ backgroundColor: C_YEAR }} />
                <span className="font-mono text-[7px] mt-0.5 whitespace-nowrap"
                  style={{ color: C_YEAR }}>
                  {year < 0 ? `${Math.abs(year)} BC` : year === 0 ? "0" : `${year} AD`}
                </span>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
