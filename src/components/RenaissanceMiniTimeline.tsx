import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Fixed percentage positions — evenly spread to avoid label overlap.
// Order and above/below alternation are both explicitly specified.
const STRIP_MOVEMENTS = [
  { id: "proto-renaissance",    name: "Proto-Renaissance",    pct: 10, color: "#8B6914" }, // 0 → above — deep antique gold
  { id: "early-renaissance",    name: "Early Renaissance",    pct: 26, color: "#C4882A" }, // 1 → below — warm amber
  { id: "high-renaissance",     name: "High Renaissance",     pct: 42, color: "#C9A84C" }, // 2 → above — brightest gold, the peak
  { id: "northern-renaissance", name: "Northern Renaissance", pct: 55, color: "#7A8B3A" }, // 3 → below — olive green, northern light
  { id: "venetian-school",      name: "Venetian School",      pct: 68, color: "#4A7A9B" }, // 4 → above — venetian blue
  { id: "mannerism",            name: "Mannerism",            pct: 84, color: "#8B5A7A" }, // 5 → below — muted mauve
];

// Dimensions — matches main timeline aesthetic at smaller scale
const ERA_H       = 14;  // height of the era band strip
const ERA_GAP     = 8;   // gap between era band and the dot line area
const LINE_TOP    = 32;  // px from top of the dot container to the timeline line
const DIST_PX     = 14;  // px from line center to the near edge of the label
const DOT_SIZE    = 8;   // px diameter
const TICK_H      = DIST_PX - 4;  // 10px tick connecting label to dot
const CONTAINER_H = LINE_TOP + DIST_PX + 16;

// Ring: 18px outer diameter from an 8px dot → (18 - 8) / 2 - 1 = 4px outline-offset, 1px outline-width
const RING_OFFSET = "4px";

const C_ERA  = "#5a4a3a";
const C_LINE = "rgba(42,30,16,0.14)";
const GOLD   = "#C9A84C";

interface Props {
  /** id of the currently active movement; undefined/null on the civilization overview */
  activeId?: string | null;
}

export default function RenaissanceMiniTimeline({ activeId = null }: Props) {
  const navigate   = useNavigate();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div style={{ marginBottom: "2.5rem" }}>

      {/* ── Era band ── */}
      <div style={{
        width: "100%",
        height: `${ERA_H}px`,
        backgroundColor: "rgba(201,168,76,0.30)",
        borderBottom: `1px solid ${GOLD}50`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: `${ERA_GAP}px`,
        overflow: "hidden",
      }}>
        <span style={{
          fontFamily: "monospace",
          fontSize: "7px",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "1.5px",
          color: C_ERA,
          userSelect: "none",
        }}>
          Renaissance
        </span>
      </div>

      {/* ── Dot row ── */}
      <div style={{ position: "relative", width: "100%", height: `${CONTAINER_H}px` }}>

        {/* Horizontal line */}
        <div style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: `${LINE_TOP}px`,
          height: "1px",
          background: `linear-gradient(to right, transparent, ${C_LINE} 3%, ${C_LINE} 97%, transparent)`,
        }} />

        {STRIP_MOVEMENTS.map((m, i) => {
          const pos       = m.pct;
          const isActive  = m.id === activeId;
          const isHovered = m.id === hoveredId;
          const above     = i % 2 === 0;

          // Label block top — mirrors the main timeline label placement logic
          const labelTop = above
            ? LINE_TOP - DIST_PX - 10
            : LINE_TOP + DIST_PX;

          const tickTop = above ? "100%" : `-${TICK_H}px`;

          // Label color: full color when active or hovered, muted otherwise
          const labelColor = (isActive || isHovered) ? m.color : "rgba(42,30,16,0.45)";
          const labelWeight = isActive ? 600 : 400;

          // Dot fill: active = full opacity, hover = full opacity, default = 70% opacity
          const dotBg = isActive
            ? m.color
            : isHovered
              ? m.color
              : `${m.color}B3`;  // B3 = ~70% opacity

          // Ring: active uses 40% opacity, hover uses 35% opacity
          const ringColor = isActive ? `${m.color}66` : `${m.color}59`;  // 66=40%, 59=35%
          const showRing  = isActive || isHovered;

          // Dot transform: hovered (not active) scales up
          const dotTransform = isHovered && !isActive
            ? "translate(-50%, -50%) scale(1.3)"
            : "translate(-50%, -50%)";

          return (
            <div key={m.id}>
              {/* Label + tick — pointer-events: none, color driven by hover state */}
              <div style={{
                position: "absolute",
                left: `${pos}%`,
                top: `${labelTop}px`,
                transform: "translateX(-50%)",
                pointerEvents: "none",
                zIndex: 3,
              }}>
                {/* Tick line from label to dot */}
                <div style={{
                  position: "absolute",
                  width: "1px",
                  height: `${TICK_H}px`,
                  backgroundColor: (isActive || isHovered) ? m.color : C_LINE,
                  left: "50%",
                  top: tickTop,
                  transition: "background-color 0.2s ease",
                }} />
                <span style={{
                  display: "block",
                  fontFamily: "monospace",
                  fontSize: "8px",
                  fontWeight: labelWeight,
                  color: labelColor,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                  transition: "color 0.2s ease",
                }}>
                  {m.name}
                </span>
              </div>

              {/* Dot — the interactive element */}
              <button
                onClick={() => navigate(`/movement/${m.id}`, { state: { civName: "Renaissance", civId: "renaissance" } })}
                onMouseEnter={() => setHoveredId(m.id)}
                onMouseLeave={() => setHoveredId(null)}
                title={m.name}
                style={{
                  position: "absolute",
                  left: `${pos}%`,
                  top: `${LINE_TOP}px`,
                  transform: dotTransform,
                  width: `${DOT_SIZE}px`,
                  height: `${DOT_SIZE}px`,
                  borderRadius: "50%",
                  border: `1.5px solid ${m.color}`,
                  backgroundColor: dotBg,
                  outline: showRing ? `1px solid ${ringColor}` : "none",
                  outlineOffset: RING_OFFSET,
                  cursor: "pointer",
                  padding: 0,
                  zIndex: 5,
                  transition: "background-color 0.2s ease, transform 0.2s ease, outline-color 0.2s ease",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
