import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Timeline from "@/components/Timeline";
import DetailPanel from "@/components/DetailPanel";
import Footer from "@/components/Footer";
import { CIVILIZATIONS, type Civilization } from "@/data/civilizations";
import { useIsMobile } from "@/hooks/use-mobile";

const PREHISTORIC = CIVILIZATIONS.find((c) => c.id === "prehistoric")!;

// Normalize incoming civilizationId aliases to the actual CIVILIZATIONS data IDs
const CIV_ID_MAP: Record<string, string> = {
  "ancient-egypt":       "egypt",
  "ancient-greece":      "greece",
  "roman-empire":        "rome",
  "medieval-europe":     "medieval",
  "islamic-golden-age":  "medieval",
  "modern-contemporary": "modern",
};

// Which civilization IDs (actual CIVILIZATIONS IDs) belong to each era band
const ERA_CIVS: Record<string, string[]> = {
  "Prehistoric":  ["prehistoric"],
  "Ancient":      ["mesopotamia", "egypt", "greece", "rome", "byzantine"],
  "Medieval":     ["medieval"],
  "Early Modern": ["renaissance", "baroque"],
  "Modern":       ["impressionism", "modern"],
};

function getEraCivs(label: string): Civilization[] {
  const ids = ERA_CIVS[label] ?? [];
  return ids
    .map((id) => CIVILIZATIONS.find((c) => c.id === id))
    .filter(Boolean) as Civilization[];
}

const GOLD = "#C9A84C";
const DARK = "#2A1E10";

function resolvecivId(raw: string | undefined): Civilization {
  if (!raw) return PREHISTORIC;
  const normalized = CIV_ID_MAP[raw] ?? raw;
  return CIVILIZATIONS.find((c) => c.id === normalized) ?? PREHISTORIC;
}

// ── Period selection panel ────────────────────────────────────────────────

function PeriodSelectionPanel({
  eraLabel,
  civs,
  onSelect,
}: {
  eraLabel: string;
  civs: Civilization[];
  onSelect: (civ: Civilization) => void;
}) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div style={{ background: "#F5F0E8", borderTop: "1px solid rgba(201,168,76,0.18)" }}>
      <div className="max-w-6xl mx-auto px-8 py-8">
        {/* Header */}
        <div style={{ marginBottom: "1.5rem" }}>
          <p
            className="font-mono uppercase tracking-widest"
            style={{ fontSize: "9px", color: "rgba(42,30,16,0.45)", marginBottom: "0.25rem" }}
          >
            {eraLabel} period
          </p>
          <p
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "1rem",
              color: "rgba(42,30,16,0.5)",
            }}
          >
            Select a civilization to explore
          </p>
        </div>

        {/* Cards — horizontal row */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          {civs.map((civ) => {
            const isHovered = hoveredId === civ.id;
            return (
              <button
                key={civ.id}
                onClick={() => onSelect(civ)}
                onMouseEnter={() => setHoveredId(civ.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  flex: "1 1 180px",
                  minWidth: "160px",
                  maxWidth: "260px",
                  background: isHovered ? "#FDF6E8" : "#FAF8F4",
                  border: isHovered
                    ? `1px solid ${GOLD}60`
                    : "1px solid rgba(42,30,16,0.08)",
                  borderRadius: "4px",
                  padding: "20px 18px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "border-color 0.2s, background 0.2s, box-shadow 0.2s",
                  boxShadow: isHovered ? `0 2px 12px ${GOLD}18` : "none",
                }}
              >
                {/* Date badge */}
                <span
                  className="font-mono uppercase tracking-widest"
                  style={{
                    display: "inline-block",
                    fontSize: "8px",
                    color: civ.color,
                    border: `1px solid ${civ.color}50`,
                    borderRadius: "2px",
                    padding: "2px 6px",
                    marginBottom: "10px",
                  }}
                >
                  {civ.dates}
                </span>

                {/* Civilization name */}
                <p
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: DARK,
                    lineHeight: 1.2,
                    marginBottom: "6px",
                  }}
                >
                  {civ.name}
                </p>

                {/* Region */}
                <p
                  className="font-mono uppercase tracking-widest"
                  style={{
                    fontSize: "8px",
                    color: "rgba(42,30,16,0.4)",
                    marginBottom: "10px",
                  }}
                >
                  {civ.region}
                </p>

                {/* One-line description */}
                <p
                  style={{
                    fontFamily: "'Raleway', system-ui, sans-serif",
                    fontWeight: 300,
                    fontSize: "0.78rem",
                    lineHeight: 1.6,
                    color: "rgba(42,30,16,0.6)",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {civ.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const ERAS_LIST = [
  { label: "Prehistoric",  color: "#8B7050" },
  { label: "Ancient",      color: "#8B5E3C" },
  { label: "Medieval",     color: "#6B6B80" },
  { label: "Early Modern", color: "#8B7D3C" },
  { label: "Modern",       color: "#8B4050" },
];

function MobileTimeline({
  onSelect,
  selectedId,
}: {
  onSelect: (civ: Civilization) => void;
  selectedId: string;
}) {
  const [eraFilter, setEraFilter] = useState<string | null>(null);

  const visibleCivs = eraFilter
    ? CIVILIZATIONS.filter((c) => ERA_CIVS[eraFilter]?.includes(c.id))
    : CIVILIZATIONS;

  // Group visible civs by era for section headers
  const groups: { era: typeof ERAS_LIST[0]; civs: Civilization[] }[] = ERAS_LIST.map((era) => ({
    era,
    civs: visibleCivs.filter((c) => ERA_CIVS[era.label]?.includes(c.id)),
  })).filter((g) => g.civs.length > 0);

  return (
    <div style={{ padding: "0 1rem 1rem" }}>
      {/* Era filter pills */}
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "1.25rem" }}>
        {ERAS_LIST.map((era) => {
          const active = eraFilter === era.label;
          return (
            <button
              key={era.label}
              onClick={() => setEraFilter(active ? null : era.label)}
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "0.25rem 0.65rem",
                borderRadius: "2px",
                border: `1px solid ${active ? era.color : era.color + "55"}`,
                background: active ? era.color + "22" : "transparent",
                color: active ? era.color : "rgba(42,30,16,0.5)",
                cursor: "pointer",
              }}
            >
              {era.label}
            </button>
          );
        })}
      </div>

      {/* Grouped vertical list */}
      {groups.map(({ era, civs }) => (
        <div key={era.label} style={{ marginBottom: "1rem" }}>
          {/* Era section header */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "0.5rem",
          }}>
            <span style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: era.color,
            }}>
              {era.label}
            </span>
            <div style={{ flex: 1, height: "1px", background: era.color + "44" }} />
          </div>

          {/* Civilization rows */}
          {civs.map((civ) => {
            const isSelected = selectedId === civ.id;
            return (
              <button
                key={civ.id}
                onClick={() => onSelect(civ)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  width: "100%",
                  padding: "10px 12px",
                  marginBottom: "4px",
                  background: isSelected ? civ.color + "14" : "transparent",
                  border: `1px solid ${isSelected ? civ.color + "55" : "rgba(42,30,16,0.07)"}`,
                  borderRadius: "3px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background 0.15s, border-color 0.15s",
                }}
              >
                {/* Dot */}
                <div style={{
                  width: isSelected ? "12px" : "9px",
                  height: isSelected ? "12px" : "9px",
                  borderRadius: "50%",
                  background: civ.color,
                  flexShrink: 0,
                  boxShadow: isSelected ? `0 0 0 3px ${civ.color}30` : "none",
                  transition: "all 0.15s",
                }} />
                {/* Name + dates */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: isSelected ? 700 : 400,
                    fontSize: "0.95rem",
                    color: isSelected ? DARK : "rgba(42,30,16,0.8)",
                    lineHeight: 1.2,
                    margin: 0,
                  }}>
                    {civ.name}
                  </p>
                  <p style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.08em",
                    color: isSelected ? civ.color : "rgba(42,30,16,0.38)",
                    margin: "2px 0 0",
                  }}>
                    {civ.dates}
                  </p>
                </div>
                {/* Arrow */}
                <span style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: "0.7rem",
                  color: isSelected ? civ.color : "rgba(42,30,16,0.2)",
                  flexShrink: 0,
                }}>
                  →
                </span>
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default function TimelinePage() {
  const location = useLocation();
  const isMobile = useIsMobile();
  const detailRef = useRef<HTMLDivElement>(null);

  const [selected, setSelected] = useState<Civilization>(() => {
    const state = location.state as { civilizationId?: string; highlightDot?: string } | null;
    return resolvecivId(state?.civilizationId ?? state?.highlightDot);
  });

  // Period selection mode: when an era with multiple civs is clicked
  const [periodMode, setPeriodMode] = useState<string | null>(null);

  function handleEraClick(label: string) {
    const civs = getEraCivs(label);
    if (civs.length === 1) {
      setSelected(civs[0]);
      setPeriodMode(null);
    } else if (civs.length > 1) {
      setPeriodMode(label);
    }
  }

  function handleCivSelect(civ: Civilization) {
    setSelected(civ);
    setPeriodMode(null);
    if (isMobile) {
      setTimeout(() => detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    }
  }

  // Keyboard: left/right arrows navigate between civs within the selected period
  useEffect(() => {
    if (!periodMode) return;
    const civs = getEraCivs(periodMode);

    function onKey(e: KeyboardEvent) {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      const currentIdx = civs.findIndex((c) => c.id === selected.id);
      let nextIdx: number;
      if (currentIdx === -1) {
        nextIdx = e.key === "ArrowRight" ? 0 : civs.length - 1;
      } else {
        nextIdx =
          e.key === "ArrowRight"
            ? (currentIdx + 1) % civs.length
            : (currentIdx - 1 + civs.length) % civs.length;
      }
      setSelected(civs[nextIdx]);
      setPeriodMode(null);
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [periodMode, selected.id]);

  return (
    <main className="min-h-screen pt-16 flex flex-col">
      <section style={{ padding: isMobile ? "1.5rem 1rem 0.5rem" : "2rem 2rem 0.5rem" }} className="max-w-6xl mx-auto w-full text-center">
        <h1
          className="page-title"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: isMobile ? "2rem" : "3.75rem",
            lineHeight: 1.0,
            color: "#2A1E10",
            marginBottom: "0.75rem",
            letterSpacing: "0.025em",
          }}
        >
          The Timeline of Art
        </h1>
        <p
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 400,
            fontStyle: "italic",
            color: "rgba(42,30,16,0.45)",
            fontSize: isMobile ? "0.85rem" : "1rem",
          }}
        >
          {isMobile
            ? "Tap any civilization to explore its story."
            : "From the first cave paintings to the present day. Click any civilization to explore its story."}
        </p>
      </section>

      <div
        style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)",
          margin: "1rem 1rem",
        }}
      />

      {isMobile ? (
        <MobileTimeline onSelect={handleCivSelect} selectedId={selected.id} />
      ) : (
        <>
          <Timeline
            onSelect={handleCivSelect}
            selectedId={selected.id}
            onEraClick={handleEraClick}
            activeEra={periodMode ?? undefined}
          />
          {periodMode && (
            <PeriodSelectionPanel
              eraLabel={periodMode}
              civs={getEraCivs(periodMode)}
              onSelect={handleCivSelect}
            />
          )}
        </>
      )}

      {/* Detail panel */}
      <div className="flex-1" ref={detailRef}>
        {!periodMode && (
          <DetailPanel
            civ={selected}
            onClose={() => setSelected(PREHISTORIC)}
            onSelect={setSelected}
          />
        )}
      </div>
      <Footer />
    </main>
  );
}
