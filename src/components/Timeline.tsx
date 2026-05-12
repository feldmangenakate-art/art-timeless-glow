import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CIVILIZATIONS, type Civilization } from "@/data/civilizations";

const ERAS = [
  { label: "Prehistoric", start: -35000, end: -3500, color: "#8B7050" },
  { label: "Ancient", start: -3500, end: 476, color: "#8B5E3C" },
  { label: "Medieval", start: 476, end: 1400, color: "#6B6B80" },
  { label: "Early Modern", start: 1400, end: 1800, color: "#8B7D3C" },
  { label: "Modern", start: 1800, end: 2025, color: "#8B4050" },
];

const ERA_LINKS: Record<string, string> = {
  "Prehistoric":  "/civilization/prehistoric",
  "Ancient":      "/civilization/mesopotamia",
  "Medieval":     "/civilization/byzantine",
  "Early Modern": "/civilization/renaissance",
  "Modern":       "/civilization/modern",
};

function toPct(year: number): number {
  if (year <= -3500) {
    return ((year - (-35000)) / (-3500 - (-35000))) * 7;
  }
  else if (year <= 500) {
    return 7 + ((year - (-3500)) / (500 - (-3500))) * 33;
  }
  else if (year <= 1600) {
    return 40 + ((year - 500) / (1600 - 500)) * 25;
  }
  else {
    return 62 + ((year - 1600) / (2025 - 1600)) * 38;
  }
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
  offsetPx?: number; // optional horizontal nudge in px
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
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [hoveredEra, setHoveredEra] = useState<string | null>(null);

  // Visual-only dot position overrides (does not affect panel data)
  const DOT_YEAR_OVERRIDES: Record<string, number> = {
    byzantine: 600,
medieval: 1100,
  };

  const positions = CIVILIZATIONS.map((civ) =>
    toPct(DOT_YEAR_OVERRIDES[civ.id] ?? (civ.start + civ.end) / 2)
  );

  const labelPlacements = computeLabelPlacements(positions);
  // Force specific label sides to prevent overlaps
  const overrideSides: Record<string, { side: "above" | "below"; offsetPx?: number }> = {
    impressionism: { side: "above" },
    modern:        { side: "below" },
byzantine:     { side: "below" },
    medieval:      { side: "below", offsetPx: -20 },
  };
  for (const placement of labelPlacements) {
    const id = CIVILIZATIONS[placement.civIndex].id;
    if (overrideSides[id]) {
      placement.side = overrideSides[id].side;
      if (overrideSides[id].offsetPx !== undefined) placement.offsetPx = overrideSides[id].offsetPx;
    }
  }

  // Tick marks sit below all 3 dot-label levels + 8px gap
  const TICK_TOP = LINE_TOP + 3 * LEVEL_PX + 8;
  // Container must hold tick marks + tick bar (8px) + text (~12px)
  const CONTAINER_H = TICK_TOP + 24;

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

          {/* Era bands — isolated wrapper prevents overflow past container edges */}
          <div className="absolute left-0 right-0 top-0" style={{ height: `${ERA_H}px`, overflow: "hidden" }}>
          {ERAS.map((era) => {
            const left = Math.max(0, toPct(era.start));
            const right = toPct(era.end);
            const width = right - left;
            const isNarrow = width < 7;

            const isEraHovered = hoveredEra === era.label;

            return (
              <div
                key={era.label}
                className="absolute flex items-center justify-center overflow-visible"
                onClick={() => navigate(ERA_LINKS[era.label])}
                onMouseEnter={() => setHoveredEra(era.label)}
                onMouseLeave={() => setHoveredEra(null)}
                style={{
                  left: `${left}%`,
                  width: `${width}%`,
                  top: 0,
                  height: `${ERA_H}px`,
                  backgroundColor: isEraHovered ? `${era.color}35` : `${era.color}20`,
                  borderBottom: `1px solid ${era.color}40`,
                  borderRight: `1px solid ${era.color}20`,
                  cursor: "pointer",
                  transition: "background-color 0.2s ease",
                }}
              >
                <span
                  className="uppercase font-mono font-bold whitespace-nowrap select-none"
                  style={{
                    color: isEraHovered ? era.color : C_ERA,
                    fontSize: isNarrow ? "0px" : "7px",
                    letterSpacing: "1.5px",
                    textDecoration: isEraHovered && !isNarrow ? "underline" : "none",
                    textUnderlineOffset: "2px",
                    transition: "color 0.2s ease",
                  }}
                >
                  {era.label}
                </span>

                {isNarrow && (
                  <span
                    className="absolute uppercase font-mono font-semibold whitespace-nowrap select-none"
                    style={{
                      color: isEraHovered ? era.color : C_ERA,
                      fontSize: "7px",
                      letterSpacing: "1.5px",
                      textDecoration: isEraHovered ? "underline" : "none",
                      textUnderlineOffset: "2px",
                      transition: "color 0.2s ease",
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
          </div>

          {/* Timeline line */}
          <div
            className="absolute left-0 right-0"
            style={{
              top: `${LINE_TOP}px`,
              height: "2px",
              background: "linear-gradient(to right, transparent, rgba(42,30,16,0.22) 5%, rgba(42,30,16,0.22) 95%, transparent)",
            }}
          />

          {/* Always-visible dot labels */}
          {labelPlacements.map(({ civIndex, pos, side, level, offsetPx = 0 }) => {
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
                  transform: `translateX(calc(-50% + ${offsetPx}px))`,
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
                    color: active ? "#C9A84C" : C_LABEL,
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
                    width: isHovered || isSelected ? "17px" : "11px",
                    height: isHovered || isSelected ? "17px" : "11px",
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
          {[-3500, 0, 500, 1000, 1500].map((year) => {
            const pos = toPct(year);
            return (
              <div
                key={year}
                className="absolute flex flex-col items-center pointer-events-none"
                style={{
                  left: pos > 97 ? "auto" : `${pos}%`,
                  right: pos > 97 ? "0" : undefined,
                  top: `${TICK_TOP}px`,
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
