import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ── Strip definitions per civilization ──────────────────────────────────────

interface StripMovement {
  id: string;
  name: string;
  pct: number;
  color: string;
  above: boolean;
}

interface CivStrip {
  label: string;
  bandColor: string;
  movements: StripMovement[];
}

const CIV_STRIPS: Record<string, CivStrip> = {
  mesopotamia: {
    label: "Mesopotamia",
    bandColor: "rgba(196,130,58,0.28)",
    movements: [
      { id: "sumerian",  name: "Sumerian",  pct: 15, color: "#C4823A", above: true  },
      { id: "akkadian",  name: "Akkadian",  pct: 50, color: "#B87040", above: false },
      { id: "assyrian",  name: "Assyrian",  pct: 82, color: "#A06030", above: true  },
    ],
  },
  egypt: {
    label: "Ancient Egypt",
    bandColor: "rgba(212,168,67,0.28)",
    movements: [
      { id: "predynastic",     name: "Predynastic",  pct: 10, color: "#B8922A", above: true  },
      { id: "old-kingdom",     name: "Old Kingdom",  pct: 28, color: "#D4A843", above: false },
      { id: "middle-kingdom",  name: "Middle Kingdom",pct: 48, color: "#C49830", above: true  },
      { id: "amarna",          name: "Amarna",        pct: 68, color: "#E8C050", above: false },
      { id: "new-kingdom-egypt", name: "New Kingdom", pct: 86, color: "#C9A84C", above: true  },
    ],
  },
  greece: {
    label: "Ancient Greece",
    bandColor: "rgba(123,163,196,0.28)",
    movements: [
      { id: "archaic",     name: "Archaic",     pct: 15, color: "#8ABCE0", above: true  },
      { id: "classical",   name: "Classical",   pct: 50, color: "#7BA3C4", above: false },
      { id: "hellenistic", name: "Hellenistic", pct: 82, color: "#6A90B0", above: true  },
    ],
  },
  rome: {
    label: "Roman Empire",
    bandColor: "rgba(168,80,80,0.22)",
    movements: [
      { id: "republican", name: "Republican", pct: 30, color: "#C07070", above: true  },
      { id: "imperial",   name: "Imperial",   pct: 72, color: "#A85050", above: false },
    ],
  },
  baroque: {
    label: "Baroque",
    bandColor: "rgba(184,112,64,0.22)",
    movements: [
      { id: "italian-baroque",  name: "Italian Baroque",  pct: 12, color: "#C08050", above: true  },
      { id: "dutch-golden-age", name: "Dutch Golden Age", pct: 37, color: "#B87040", above: false },
      { id: "flemish-baroque",  name: "Flemish Baroque",  pct: 62, color: "#A86030", above: true  },
      { id: "rococo",           name: "Rococo",           pct: 84, color: "#D4A060", above: false },
    ],
  },
  impressionism: {
    label: "Impressionism",
    bandColor: "rgba(112,168,184,0.22)",
    movements: [
      { id: "realism",                name: "Realism",           pct:  8, color: "#807060", above: true  },
      { id: "impressionism-movement", name: "Impressionism",     pct: 24, color: "#70A8B8", above: false },
      { id: "post-impressionism",     name: "Post-Impressionism",pct: 40, color: "#7090B8", above: true  },
      { id: "symbolism",              name: "Symbolism",         pct: 56, color: "#9070A8", above: false },
      { id: "art-nouveau",            name: "Art Nouveau",       pct: 72, color: "#9B8040", above: true  },
      { id: "neo-impressionism",      name: "Neo-Impressionism", pct: 88, color: "#60A090", above: false },
    ],
  },
  byzantine: {
    label: "Byzantine",
    bandColor: "rgba(144,112,192,0.22)",
    movements: [
      { id: "early-byzantine",  name: "Early Byzantine",  pct: 20, color: "#9070C0", above: true  },
      { id: "middle-byzantine", name: "Middle Byzantine", pct: 50, color: "#8060C0", above: false },
      { id: "late-byzantine",   name: "Late Byzantine",   pct: 80, color: "#6A4AB0", above: true  },
    ],
  },
  islamic: {
    label: "Islamic Golden Age",
    bandColor: "rgba(90,156,122,0.22)",
    movements: [
      { id: "umayyad", name: "Umayyad", pct: 30, color: "#5A9C7A", above: true  },
      { id: "abbasid", name: "Abbasid", pct: 70, color: "#4A8C6A", above: false },
    ],
  },
  medieval: {
    label: "Medieval Europe",
    bandColor: "rgba(112,128,144,0.22)",
    movements: [
      { id: "romanesque", name: "Romanesque",          pct: 15, color: "#708090", above: true  },
      { id: "gothic",     name: "Gothic",              pct: 50, color: "#607090", above: false },
      { id: "manuscript", name: "Manuscript",          pct: 82, color: "#506080", above: true  },
    ],
  },
  modern: {
    label: "Modern & Contemporary",
    bandColor: "rgba(196,112,128,0.22)",
    movements: [
      { id: "fauvism-cubism",           name: "Fauvism & Cubism",              pct: 15, color: "#C47080", above: true  },
      { id: "expressionism-surrealism", name: "Expressionism & Surrealism",    pct: 50, color: "#6080A0", above: false },
      { id: "abstract-pop",             name: "Abstract & Pop",                pct: 82, color: "#C47080", above: true  },
    ],
  },
};

// ── Layout constants (matches RenaissanceMiniTimeline) ────────────────────

const ERA_H       = 14;
const ERA_GAP     = 8;
const LINE_TOP    = 32;
const DIST_PX     = 14;
const DOT_SIZE    = 8;
const TICK_H      = DIST_PX - 4;
const CONTAINER_H = LINE_TOP + DIST_PX + 16;
const RING_OFFSET = "4px";

const C_LINE = "rgba(42,30,16,0.14)";
const C_ERA  = "#5a4a3a";

interface Props {
  civId: string;
  activeId?: string | null;
}

export default function CivMiniTimeline({ civId, activeId = null }: Props) {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const strip = CIV_STRIPS[civId];
  if (!strip) return null;

  return (
    <div style={{ marginBottom: "2.5rem" }}>

      {/* ── Era band ── */}
      <div style={{
        width: "100%",
        height: `${ERA_H}px`,
        backgroundColor: strip.bandColor,
        borderBottom: `1px solid rgba(42,30,16,0.12)`,
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
          {strip.label}
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

        {strip.movements.map((m) => {
          const isActive  = m.id === activeId;
          const isHovered = m.id === hoveredId;
          const above     = m.above;

          const labelTop = above
            ? LINE_TOP - DIST_PX - 10
            : LINE_TOP + DIST_PX;

          const tickTop = above ? "100%" : `-${TICK_H}px`;

          const labelColor  = (isActive || isHovered) ? m.color : "rgba(42,30,16,0.45)";
          const labelWeight = isActive ? 600 : 400;

          const dotBg = isActive
            ? m.color
            : isHovered
              ? m.color
              : `${m.color}B3`;

          const ringColor = isActive ? `${m.color}66` : `${m.color}59`;
          const showRing  = isActive || isHovered;

          const dotTransform = isHovered && !isActive
            ? "translate(-50%, -50%) scale(1.3)"
            : "translate(-50%, -50%)";

          return (
            <div key={m.id}>
              {/* Label + tick */}
              <div style={{
                position: "absolute",
                left: `${m.pct}%`,
                top: `${labelTop}px`,
                transform: "translateX(-50%)",
                pointerEvents: "none",
                zIndex: 3,
              }}>
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

              {/* Dot */}
              <button
                onClick={() => navigate(`/movement/${m.id}`, { state: { civName: strip.label, civId } })}
                onMouseEnter={() => setHoveredId(m.id)}
                onMouseLeave={() => setHoveredId(null)}
                title={m.name}
                style={{
                  position: "absolute",
                  left: `${m.pct}%`,
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
