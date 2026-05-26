import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
// @ts-ignore — react-simple-maps has no bundled types
import { ComposableMap, Geographies, Geography, Marker, useMapContext } from "react-simple-maps";
import { GEO_COUNTRIES, type GeoMovement } from "@/data/geography-data";
import { MASTERWORKS } from "@/data/masterworks";
import { collectionWorks as COLLECTION } from "@/data/collection";
import Footer from "@/components/Footer";

// Build fast workId → image / objectPosition / route lookups from both data sources
const WORK_IMAGE: Record<string, string> = {};
const WORK_POSITION: Record<string, string> = {};
const WORK_ROUTE: Record<string, string> = {};
MASTERWORKS.forEach((w) => {
  if (w.image) WORK_IMAGE[w.id] = w.image;
  WORK_POSITION[w.id] = "center top";      // masterworks have no field; default to top
  WORK_ROUTE[w.id] = `/masterworks/${w.id}`;
});
COLLECTION.forEach((w) => {
  if (w.image) WORK_IMAGE[w.id] = w.image;
  WORK_POSITION[w.id] = (w as any).objectPosition ?? "center top";
  WORK_ROUTE[w.id] = `/collection/${w.id}`;
});

// Era filter definitions
const ERA_FILTERS = [
  { label: "Ancient",     range: [-3000, 500]  },
  { label: "Medieval",    range: [500,  1400]  },
  { label: "Renaissance", range: [1400, 1600]  },
  { label: "Baroque",     range: [1600, 1750]  },
  { label: "Romantic",    range: [1750, 1900]  },
  { label: "Modern",      range: [1900, 2100]  },
] as const;
type EraLabel = typeof ERA_FILTERS[number]["label"];

const GOLD = "#C9A84C";
const DARK = "#2A1E10";
const MUTED = "rgba(42,30,16,0.45)";
const PANEL_BG = "#1A1610";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Geographic coordinates [longitude, latitude] for each country dot
const GEO_COORDS: Record<string, [number, number]> = {
  italy:       [11.0,   46.0],   // slightly northwest — clear of Roman dot
  spain:       [-3.7,   40.4],
  france:      [2.3,    46.2],
  netherlands: [5.3,    52.1],
  germany:     [10.4,   51.2],
  england:     [-1.5,   52.5],
  russia:      [37.6,   55.7],
  egypt:       [31.0,   27.0],   // slightly south — away from Greece
  greece:      [23.0,   38.0],
  japan:       [138.2,  36.2],
  usa:         [-95.7,  37.1],
  roman:       [15.0,   37.5],   // south of Italy centre — historically Rome area
  byzantine:   [29.0,   41.0],   // Constantinople/Istanbul — accurate & well-separated
};

// ISO 3166-1 numeric codes → country id
const ISO_TO_COUNTRY: Record<string, string> = {
  "380": "italy",
  "724": "spain",
  "250": "france",
  "528": "netherlands",
  "276": "germany",
  "826": "england",
  "643": "russia",
  "818": "egypt",
  "300": "greece",
  "392": "japan",
  "840": "usa",
};

// Per-country label offsets to prevent collisions in the dense Northern Europe cluster
const LABEL_CONFIG: Record<string, { dx: number; dy: number; anchor: string }> = {
  england:          { dx:   0, dy: -14, anchor: "middle" },
  netherlands:      { dx: -14, dy: -10, anchor: "start"  },
  germany:          { dx:   0, dy:  14, anchor: "middle" },
  france:           { dx:   0, dy:  -8, anchor: "middle" },
  italy:            { dx:   0, dy:  14, anchor: "middle" },
  roman:            { dx: -12, dy:  12, anchor: "middle" },
  greece:           { dx:   0, dy:  14, anchor: "middle" },
  byzantine:        { dx:   0, dy:  -8, anchor: "middle" },
  egypt:            { dx:   0, dy:  14, anchor: "middle" },
};

function getLabelProps(countryId: string) {
  return LABEL_CONFIG[countryId] ?? { dx: 0, dy: -8, anchor: "middle" };
}

// ---------------------------------------------------------------------------
// Sunbeam layout helpers
// ---------------------------------------------------------------------------

const BEAM_LENGTH = 150;
const PILL_H = 23;

const CLOCK_BEAM_ANGLES: Record<number, number[]> = {
  1: [-90],
  2: [-150, -30],
  3: [-150, -30, 90],
  4: [-150, -60, 30, 120],
  5: [-150, -90, -30, 30, 120],
  6: [-150, -90, -30, 30, 90, 150],
  7: [-150, -90, -60, 0, 60, 120, 150],
  8: [-150, -105, -45, -15, 30, 75, 140, 165],
};

function getClockAngles(count: number): number[] {
  if (CLOCK_BEAM_ANGLES[count]) return CLOCK_BEAM_ANGLES[count];
  return Array.from({ length: count }, (_, i) => -150 + (360 / count) * i);
}

const COUNTRY_ANGLE_OVERRIDES: Partial<Record<string, number[]>> = {
  japan: [-120, 180, 120],
  usa:   [-60, -20, 20, 60],
};

function pillWidth(name: string): number {
  return Math.max(120, name.length * 6 + 20);
}

/** Returns the point where the line from (dotX,dotY)→(cx,cy) hits the pill rect border. */
function pillEdgePoint(
  dotX: number, dotY: number,
  cx: number, cy: number,
  pw: number, ph: number
): { x: number; y: number } {
  const dx = cx - dotX;
  const dy = cy - dotY;
  const hw = pw / 2;
  const hh = ph / 2;

  const candidates: number[] = [];
  if (Math.abs(dx) > 0.001) {
    candidates.push((cx - hw - dotX) / dx); // left edge
    candidates.push((cx + hw - dotX) / dx); // right edge
  }
  if (Math.abs(dy) > 0.001) {
    candidates.push((cy - hh - dotY) / dy); // top edge
    candidates.push((cy + hh - dotY) / dy); // bottom edge
  }

  for (const t of candidates) {
    if (t <= 0 || t >= 1) continue;
    const ix = dotX + t * dx;
    const iy = dotY + t * dy;
    if (ix >= cx - hw - 0.5 && ix <= cx + hw + 0.5 &&
        iy >= cy - hh - 0.5 && iy <= cy + hh + 0.5) {
      return { x: ix, y: iy };
    }
  }
  return { x: cx, y: cy }; // fallback
}

interface PillProps {
  dotX: number;
  dotY: number;
  px: number;
  py: number;
  movement: GeoMovement;
  index: number;
  isSelected: boolean;
  hasSelection: boolean;
  onClick: () => void;
}

function RayPill({ dotX, dotY, px, py, movement, index, isSelected, hasSelection, onClick }: PillProps) {
  const rayOpacity  = hasSelection ? (isSelected ? 0.9 : 0.2) : 0.8;
  const pillOpacity = hasSelection ? (isSelected ? 1   : 0.25) : 1;
  const pw = pillWidth(movement.name);
  const edge = pillEdgePoint(dotX, dotY, px, py, pw, PILL_H);

  return (
    <g>
      <motion.path
        d={`M ${dotX} ${dotY} L ${edge.x} ${edge.y}`}
        stroke={movement.color}
        strokeWidth={0.8}
        fill="none"
        strokeOpacity={rayOpacity}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: rayOpacity }}
        transition={{ delay: index * 0.08, duration: 0.3, ease: "easeOut" }}
      />
      <motion.g
        onClick={(e: any) => { e.stopPropagation(); onClick(); }}
        style={{ cursor: "pointer", filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.1))" }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: pillOpacity, scale: 1 }}
        transition={{ delay: index * 0.08 + 0.2, duration: 0.22, ease: "easeOut" }}
      >
        <rect
          x={px - pw / 2}
          y={py - PILL_H / 2}
          width={pw}
          height={PILL_H}
          rx={3}
          fill={`${movement.color}18`}
          stroke={isSelected ? movement.color : `${movement.color}77`}
          strokeWidth={isSelected ? 1.5 : 0.8}
        />
        <text
          x={px}
          y={py - 3}
          textAnchor="middle"
          fill={movement.color}
          fontSize={6.5}
          fontFamily="'Courier New', monospace"
          fontWeight="bold"
          letterSpacing="0.06em"
          style={{ textTransform: "uppercase", userSelect: "none", pointerEvents: "none" }}
        >
          {movement.name}
        </text>
        <text
          x={px}
          y={py + 8}
          textAnchor="middle"
          fill={movement.color}
          fontSize={5.5}
          fontFamily="'Courier New', monospace"
          fillOpacity={0.6}
          style={{ userSelect: "none", pointerEvents: "none" }}
        >
          {movement.dates}
        </text>
      </motion.g>
    </g>
  );
}

interface RayLayerProps {
  selectedCountryId: string | null;
  sidePanelMovement: GeoMovement | null;
  hasSelection: boolean;
  onPillClick: (movement: GeoMovement, countryName: string) => void;
  eraFilter: EraLabel | null;
}

function RayLayer({ selectedCountryId, sidePanelMovement, hasSelection, onPillClick, eraFilter }: RayLayerProps) {
  const { projection } = useMapContext();
  const selectedCountry = GEO_COUNTRIES.find((c) => c.id === selectedCountryId) ?? null;

  const dotPos = useMemo(() => {
    if (!selectedCountry || !projection) return null;
    const coords = GEO_COORDS[selectedCountry.id];
    if (!coords) return null;
    const pt = projection(coords);
    if (!pt) return null;
    return { x: pt[0], y: pt[1] };
  }, [selectedCountry, projection]);

  if (!selectedCountry || !dotPos) return null;

  const allMovements = [...selectedCountry.movements].sort(
    (a, b) => a.activeRange[0] - b.activeRange[0]
  );

  const eraRange = eraFilter ? ERA_FILTERS.find((e) => e.label === eraFilter)?.range : null;
  const sortedMovements = eraRange
    ? allMovements.filter((m) => m.activeRange[0] < eraRange[1] && m.activeRange[1] > eraRange[0])
    : allMovements;

  const override = selectedCountry ? COUNTRY_ANGLE_OVERRIDES[selectedCountry.id] : undefined;
  const angles = override ?? getClockAngles(sortedMovements.length);

  const positions = angles.map((deg) => {
    const rad = (deg * Math.PI) / 180;
    return {
      x: dotPos.x + BEAM_LENGTH * Math.cos(rad),
      y: dotPos.y + BEAM_LENGTH * Math.sin(rad),
    };
  });

  return (
    <>
      {sortedMovements.map((movement, i) => (
        <RayPill
          key={`${selectedCountry.id}-${movement.id}`}
          dotX={dotPos.x}
          dotY={dotPos.y}
          px={positions[i].x}
          py={positions[i].y}
          movement={movement}
          index={i}
          isSelected={sidePanelMovement?.id === movement.id}
          hasSelection={hasSelection}
          onClick={() => onPillClick(movement, selectedCountry.name)}
        />
      ))}
    </>
  );
}

// ---------------------------------------------------------------------------
// Mobile country list
// ---------------------------------------------------------------------------
function MobileGeography({
  onMovementClick,
  selectedMovement,
  onCountryExpand,
}: {
  onMovementClick: (movement: GeoMovement, countryName: string) => void;
  selectedMovement: GeoMovement | null;
  onCountryExpand: (id: string | null) => void;
}) {
  const [expandedCountryId, setExpandedCountryId] = useState<string | null>(null);
  const [eraFilter, setEraFilter] = useState<EraLabel | null>(null);

  function toggleCountry(id: string) {
    setExpandedCountryId((prev) => {
      const next = prev === id ? null : id;
      onCountryExpand(next);
      return next;
    });
  }

  const eraRange = eraFilter ? ERA_FILTERS.find((e) => e.label === eraFilter)?.range : null;

  return (
    <div style={{ padding: "0 0 2rem" }}>
      {/* Era filter pills */}
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "1.25rem", padding: "1rem 1rem 0" }}>
        {ERA_FILTERS.map((era) => {
          const active = eraFilter === era.label;
          return (
            <button
              key={era.label}
              onClick={() => setEraFilter(active ? null : era.label)}
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "0.58rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "0.25rem 0.65rem",
                borderRadius: "2px",
                border: `1px solid ${active ? GOLD : "rgba(201,168,76,0.35)"}`,
                background: active ? `${GOLD}22` : "transparent",
                color: active ? GOLD : MUTED,
                cursor: "pointer",
              }}
            >
              {era.label}
            </button>
          );
        })}
      </div>

      {/* Country list */}
      <div style={{ padding: "0 1rem" }}>
      {GEO_COUNTRIES.map((country) => {
        const isExpanded = expandedCountryId === country.id;
        const filteredMovements = eraRange
          ? country.movements.filter((m) => m.activeRange[0] < eraRange[1] && m.activeRange[1] > eraRange[0])
          : country.movements;

        if (filteredMovements.length === 0) return null;

        return (
          <div key={country.id} style={{ marginBottom: "6px" }}>
            {/* Country header */}
            <button
              onClick={() => toggleCountry(country.id)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: "12px 14px",
                background: isExpanded ? "rgba(201,168,76,0.08)" : "#E8E2D8",
                border: `1px solid ${isExpanded ? "rgba(201,168,76,0.3)" : "rgba(42,30,16,0.1)"}`,
                borderRadius: isExpanded ? "3px 3px 0 0" : "3px",
                cursor: "pointer",
                textAlign: "left",
                transition: "background 0.15s, border-color 0.15s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: DARK,
                }}>
                  {country.name}
                </span>
                <span style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: "0.58rem",
                  letterSpacing: "0.1em",
                  color: MUTED,
                  background: "rgba(42,30,16,0.06)",
                  padding: "2px 6px",
                  borderRadius: "2px",
                }}>
                  {filteredMovements.length} movements
                </span>
              </div>
              {isExpanded
                ? <ChevronUp size={14} style={{ color: GOLD, flexShrink: 0 }} />
                : <ChevronDown size={14} style={{ color: MUTED, flexShrink: 0 }} />
              }
            </button>

            {/* Movement rows */}
            {isExpanded && (
              <div style={{
                border: "1px solid rgba(201,168,76,0.25)",
                borderTop: "none",
                borderRadius: "0 0 3px 3px",
                overflow: "hidden",
              }}>
                {filteredMovements.map((movement, i) => {
                  const isSelected = selectedMovement?.id === movement.id;
                  return (
                    <button
                      key={movement.id}
                      onClick={() => onMovementClick(movement, country.name)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        width: "100%",
                        padding: "10px 14px",
                        background: isSelected ? `${movement.color}14` : i % 2 === 0 ? "#E8E2D8" : "#E2DCD2",
                        border: "none",
                        borderTop: i > 0 ? "1px solid rgba(42,30,16,0.05)" : "none",
                        cursor: "pointer",
                        textAlign: "left",
                        transition: "background 0.15s",
                      }}
                    >
                      <div style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: movement.color,
                        flexShrink: 0,
                        boxShadow: isSelected ? `0 0 0 2px ${movement.color}44` : "none",
                      }} />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{
                          fontFamily: "'Playfair Display', Georgia, serif",
                          fontWeight: isSelected ? 700 : 400,
                          fontSize: "0.875rem",
                          color: isSelected ? movement.color : DARK,
                          margin: 0,
                          lineHeight: 1.2,
                        }}>
                          {movement.name}
                        </p>
                        <p style={{
                          fontFamily: "'Courier New', monospace",
                          fontSize: "0.58rem",
                          letterSpacing: "0.08em",
                          color: isSelected ? movement.color : MUTED,
                          margin: "2px 0 0",
                        }}>
                          {movement.dates}
                        </p>
                      </div>
                      <span style={{ fontSize: "0.7rem", color: isSelected ? movement.color : "rgba(42,30,16,0.2)", flexShrink: 0 }}>→</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------
export default function GeographyPage() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [selectedCountryId, setSelectedCountryId] = useState<string | null>(null);
  const [hoveredCountryId,  setHoveredCountryId]  = useState<string | null>(null);
  const [sidePanelMovement,    setSidePanelMovement]    = useState<GeoMovement | null>(null);
  const [sidePanelCountryName, setSidePanelCountryName] = useState("");
  const [eraFilter, setEraFilter] = useState<EraLabel | null>(null);
  const [mobileExpandedCountryId, setMobileExpandedCountryId] = useState<string | null>(null);

  const selectedCountry = GEO_COUNTRIES.find((c) => c.id === selectedCountryId) ?? null;

  // For the sticky mobile mini-map: prefer the panel's country when a movement is open
  const mobileMapHighlight = sidePanelMovement
    ? GEO_COUNTRIES.find((c) => c.name === sidePanelCountryName)?.id ?? null
    : mobileExpandedCountryId;

  function handleCountryClick(countryId: string) {
    if (selectedCountryId === countryId) {
      setSelectedCountryId(null);
      setSidePanelMovement(null);
    } else {
      setSelectedCountryId(countryId);
      setSidePanelMovement(null);
    }
  }

  function handlePillClick(movement: GeoMovement, countryName: string) {
    if (sidePanelMovement?.id === movement.id) {
      setSidePanelMovement(null);
    } else {
      setSidePanelMovement(movement);
      setSidePanelCountryName(countryName);
    }
  }

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#EDE8DF", paddingTop: "4rem" }}>
      {/* Header */}
      <section style={{ padding: isMobile ? "1.5rem 1rem 0.5rem" : "2rem 2rem 0.5rem", maxWidth: "64rem", margin: "0 auto", textAlign: "center" }}>
        <h1 className="page-title" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: isMobile ? "2rem" : "3.75rem", lineHeight: 1.0, color: DARK, marginBottom: "0.75rem", letterSpacing: "0.025em" }}>
          Geography
        </h1>
        <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontStyle: "italic", color: MUTED, fontSize: isMobile ? "0.85rem" : "1rem" }}>
          {isMobile ? "Tap a country to explore its art movements." : "Explore art history by place — click any country to see its movements"}
        </p>
      </section>

      <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)", margin: "1rem 1rem" }} />

      {/* Mobile: sticky mini-map + list */}
      {isMobile && (
        <>
          {/* Sticky decorative mini-map */}
          <div style={{
            position: "sticky",
            top: "56px",
            zIndex: 20,
            width: "100%",
            height: "22vh",
            overflow: "hidden",
            pointerEvents: "none",
            touchAction: "none",
            background: "#EDE8DF",
            borderBottom: "1px solid rgba(201,168,76,0.18)",
          }}>
            <ComposableMap
              projectionConfig={{ scale: 120, center: [15, 30] }}
              width={800}
              height={400}
              style={{ width: "100%", height: "100%" }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }: { geographies: any[] }) =>
                  geographies.map((geo) => {
                    const isoCode = String(geo.id ?? "");
                    const countryId = ISO_TO_COUNTRY[isoCode];
                    const isHighlighted = !!countryId && countryId === mobileMapHighlight;
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: {
                            fill: isHighlighted ? `${GOLD}55` : "#C8C0B0",
                            stroke: isHighlighted ? GOLD : "#B8B0A0",
                            strokeWidth: isHighlighted ? 0.8 : 0.3,
                            outline: "none",
                          },
                          hover:   { fill: isHighlighted ? `${GOLD}55` : "#C8C0B0", outline: "none" },
                          pressed: { fill: isHighlighted ? `${GOLD}55` : "#C8C0B0", outline: "none" },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
          </div>

          <MobileGeography
            onMovementClick={handlePillClick}
            selectedMovement={sidePanelMovement}
            onCountryExpand={setMobileExpandedCountryId}
          />
        </>
      )}

      {/* Desktop: era filter + map */}
      {!isMobile && <>
      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", padding: "0.5rem 2rem 0.75rem", flexWrap: "wrap" }}>
        {ERA_FILTERS.map((era) => {
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
                padding: "0.25rem 0.75rem",
                borderRadius: "2px",
                border: `1px solid ${active ? GOLD : "rgba(201,168,76,0.35)"}`,
                background: active ? `${GOLD}22` : "transparent",
                color: active ? GOLD : MUTED,
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => { if (!active) { e.currentTarget.style.borderColor = `${GOLD}88`; e.currentTarget.style.color = DARK; } }}
              onMouseLeave={(e) => { if (!active) { e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)"; e.currentTarget.style.color = MUTED; } }}
            >
              {era.label}
            </button>
          );
        })}
      </div>

      {/* MAP — static, no zoom or pan */}
      <div style={{ position: "relative", width: "100%", height: "75vh", minHeight: 420, overflow: "hidden", userSelect: "none" }}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 168, center: [10, 48] }}
          width={800}
          height={500}
          style={{ width: "100%", height: "100%", display: "block", backgroundColor: "#D8D2C5" }}
        >
          {/* Background click target — deselects everything */}
          <rect
            width={800}
            height={500}
            fill="transparent"
            style={{ cursor: "default" }}
            onClick={() => { setSidePanelMovement(null); setSelectedCountryId(null); }}
          />

          {/* Faded layer: world shapes + non-selected dots */}
          <g
            style={{ opacity: selectedCountryId ? 0.25 : 1, transition: "opacity 0.5s ease" }}
            onClick={() => { setSelectedCountryId(null); setSidePanelMovement(null); }}
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }: { geographies: any[] }) =>
                geographies.map((geo) => {
                  const countryId = ISO_TO_COUNTRY[String(geo.id)] ?? null;
                  const hasArt    = countryId !== null;
                  const isHovered = countryId === hoveredCountryId;

                  const fill        = isHovered ? "#C4B89E" : "#D4C9B2";
                  const fillOpacity = hasArt ? 1 : 0.3;
                  const stroke      = hasArt ? "rgba(201,168,76,0.55)" : "rgba(201,168,76,0.12)";
                  const strokeWidth = hasArt ? 0.6 : 0.4;

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default:  { fill, fillOpacity, stroke, strokeWidth, outline: "none", cursor: hasArt ? "pointer" : "default" },
                        hover:    { fill, fillOpacity, stroke, strokeWidth, outline: "none", cursor: hasArt ? "pointer" : "default" },
                        pressed:  { fill, fillOpacity, stroke: "rgba(201,168,76,0.65)", strokeWidth, outline: "none" },
                      }}
                      onClick={countryId ? (e: any) => { e.stopPropagation(); handleCountryClick(countryId); } : undefined}
                      onMouseEnter={countryId ? () => setHoveredCountryId(countryId) : undefined}
                      onMouseLeave={countryId ? () => setHoveredCountryId(null) : undefined}
                    />
                  );
                })
              }
            </Geographies>

            {/* Non-selected country dots */}
            {GEO_COUNTRIES.filter((c) => c.id !== selectedCountryId).map((country) => {
              const coords = GEO_COORDS[country.id];
              if (!coords) return null;
              const isHovered  = country.id === hoveredCountryId;
              const labelProps = getLabelProps(country.id);
              return (
                <Marker key={country.id} coordinates={coords}>
                  <circle
                    r={isHovered ? 5.5 : 4.5}
                    fill={GOLD}
                    stroke="rgba(201,168,76,0.6)"
                    strokeWidth={0.8}
                    onClick={(e: any) => { e.stopPropagation(); handleCountryClick(country.id); }}
                    onMouseEnter={() => setHoveredCountryId(country.id)}
                    onMouseLeave={() => setHoveredCountryId(null)}
                    style={{ cursor: "pointer" }}
                  />
                  <text
                    textAnchor={labelProps.anchor as any}
                    x={labelProps.dx}
                    y={labelProps.dy}
                    style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: 5.5,
                      fill: isHovered ? DARK : MUTED,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      userSelect: "none",
                      pointerEvents: "none",
                    }}
                  >
                    {country.name}
                  </text>
                </Marker>
              );
            })}
          </g>

          {/* Selected country highlight — rendered outside the faded group */}
          {selectedCountryId && (
            <Geographies geography={GEO_URL}>
              {({ geographies }: { geographies: any[] }) =>
                geographies
                  .filter((geo) => ISO_TO_COUNTRY[String(geo.id)] === selectedCountryId)
                  .map((geo) => (
                    <Geography
                      key={`highlight-${geo.rsmKey}`}
                      geography={geo}
                      style={{
                        default:  { fill: "#C9A84C33", stroke: "rgba(201,168,76,0.65)", strokeWidth: 1, outline: "none", cursor: "pointer" },
                        hover:    { fill: "#C9A84C33", stroke: "rgba(201,168,76,0.65)", strokeWidth: 1, outline: "none", cursor: "pointer" },
                        pressed:  { fill: "#C9A84C44", stroke: "rgba(201,168,76,0.75)", strokeWidth: 1, outline: "none" },
                      }}
                      onClick={(e: any) => { e.stopPropagation(); handleCountryClick(selectedCountryId); }}
                    />
                  ))
              }
            </Geographies>
          )}

          {/* Selected dot — full opacity with one-shot pulse animation */}
          {selectedCountry && (() => {
            const coords = GEO_COORDS[selectedCountry.id];
            if (!coords) return null;
            const labelProps = getLabelProps(selectedCountry.id);
            return (
              <Marker key={`active-${selectedCountry.id}`} coordinates={coords}>
                <motion.circle
                  key={selectedCountry.id}
                  fill="none"
                  stroke={GOLD}
                  strokeWidth={1.5}
                  initial={{ r: 5, strokeOpacity: 0.8 }}
                  animate={{ r: 16, strokeOpacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                <circle
                  r={5.5}
                  fill={GOLD}
                  stroke={GOLD}
                  strokeWidth={1.5}
                  onClick={(e: any) => { e.stopPropagation(); handleCountryClick(selectedCountry.id); }}
                  onMouseEnter={() => setHoveredCountryId(selectedCountry.id)}
                  onMouseLeave={() => setHoveredCountryId(null)}
                  style={{ cursor: "pointer" }}
                />
                <text
                  textAnchor={getLabelProps(selectedCountry.id).anchor as any}
                  x={labelProps.dx}
                  y={labelProps.dy}
                  style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: 5.5,
                    fill: DARK,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  {selectedCountry.name}
                </text>
              </Marker>
            );
          })()}

          {/* Sunbeam labels */}
          <RayLayer
            selectedCountryId={selectedCountryId}
            sidePanelMovement={sidePanelMovement}
            hasSelection={sidePanelMovement !== null}
            onPillClick={handlePillClick}
            eraFilter={eraFilter}
          />
        </ComposableMap>
      </div>
      </>}

      {/* Click-outside backdrop — on mobile starts below the sticky mini-map */}
      {sidePanelMovement && (
        <div
          style={{
            position: "fixed",
            top: isMobile ? "calc(22vh + 56px)" : 0,
            left: 0, right: 0, bottom: 0,
            zIndex: 49,
            cursor: "default",
          }}
          onClick={() => setSidePanelMovement(null)}
        />
      )}

      {/* Side panel (desktop) / Bottom sheet (mobile) */}
      <AnimatePresence>
        {sidePanelMovement && (
          <motion.div
            key="geo-panel"
            initial={isMobile ? { y: "100%" } : { x: 340 }}
            animate={isMobile ? { y: 0 } : { x: 0 }}
            exit={isMobile ? { y: "100%" } : { x: 340 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            style={isMobile ? {
              position: "fixed",
              left: 0,
              right: 0,
              bottom: 0,
              top: "calc(22vh + 56px)",
              backgroundColor: PANEL_BG,
              borderTop: "1px solid rgba(201,168,76,0.2)",
              borderRadius: "12px 12px 0 0",
              overflowY: "auto",
              overscrollBehavior: "contain",
              zIndex: 50,
              display: "flex",
              flexDirection: "column",
            } : {
              position: "fixed",
              top: "4rem",
              right: 0,
              bottom: 0,
              width: 320,
              backgroundColor: PANEL_BG,
              borderLeft: "1px solid rgba(201,168,76,0.15)",
              overflowY: "auto",
              overscrollBehavior: "contain",
              zIndex: 50,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Close */}
            <div style={{ display: "flex", justifyContent: "flex-end", padding: "1rem 1rem 0" }}>
              <button
                onClick={() => setSidePanelMovement(null)}
                style={{ background: "none", border: "none", cursor: "pointer", color: MUTED, padding: "0.25rem", display: "flex", alignItems: "center" }}
              >
                <X size={16} />
              </button>
            </div>

            <div style={{ padding: "0.5rem 1.5rem 2rem" }}>
              <p style={{ fontFamily: "'Courier New', monospace", fontSize: "0.65rem", color: MUTED, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
                {sidePanelCountryName}
              </p>

              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.6rem", fontWeight: 400, color: "#F5F0E8", lineHeight: 1.15, marginBottom: "0.5rem" }}>
                {sidePanelMovement.name}
              </h2>

              <span style={{ display: "inline-block", fontFamily: "'Courier New', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", color: sidePanelMovement.color, border: `1px solid ${sidePanelMovement.color}66`, borderRadius: "2px", padding: "0.15rem 0.5rem", textTransform: "uppercase", marginBottom: "1.25rem" }}>
                {sidePanelMovement.dates}
              </span>

              <p style={{ fontFamily: "'Raleway', system-ui, sans-serif", fontWeight: 300, fontSize: "0.82rem", color: "rgba(245,240,232,0.75)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                {sidePanelMovement.description}
              </p>

              {/* Artwork thumbnail — first keyWork with a known image */}
              {(() => {
                const firstWork = sidePanelMovement.keyWorks.find((w) => w.workId && WORK_IMAGE[w.workId]);
                if (!firstWork || !firstWork.workId) return null;
                const imgSrc = WORK_IMAGE[firstWork.workId];
                return (
                  <div
                    style={{ marginBottom: "1.5rem", cursor: firstWork.workId ? "pointer" : "default" }}
                    onClick={() => firstWork.workId && WORK_ROUTE[firstWork.workId] && navigate(WORK_ROUTE[firstWork.workId])}
                  >
                    <div style={{ position: "relative", borderRadius: "3px", overflow: "hidden", border: `1px solid ${sidePanelMovement.color}44` }}>
                      <img
                        src={imgSrc}
                        alt={firstWork.title}
                        style={{ width: "100%", height: "180px", objectFit: "cover", objectPosition: WORK_POSITION[firstWork.workId!] ?? "center top", display: "block", opacity: 0.9 }}
                        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                      />
                      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0.4rem 0.6rem", background: "linear-gradient(transparent, rgba(0,0,0,0.7))" }}>
                        <p style={{ fontFamily: "'Raleway', system-ui, sans-serif", fontWeight: 300, fontSize: "0.65rem", color: "rgba(245,240,232,0.85)", margin: 0, fontStyle: "italic" }}>
                          {firstWork.title}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {sidePanelMovement.keyArtists.length > 0 && (
                <div style={{ marginBottom: "1.25rem" }}>
                  <h3 style={{ fontFamily: "'Courier New', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: MUTED, marginBottom: "0.5rem" }}>
                    Key Artists
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                    {sidePanelMovement.keyArtists.map((artist) =>
                      artist.artistId ? (
                        <button
                          key={artist.name}
                          onClick={() => navigate(`/artists/${artist.artistId}`)}
                          style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "'Raleway', system-ui, sans-serif", fontWeight: 300, fontSize: "0.8rem", color: GOLD, padding: 0, textDecoration: "underline", textDecorationColor: "rgba(201,168,76,0.35)", textUnderlineOffset: "3px" }}
                        >
                          {artist.name}
                        </button>
                      ) : (
                        <span key={artist.name} style={{ fontFamily: "'Raleway', system-ui, sans-serif", fontWeight: 300, fontSize: "0.8rem", color: "rgba(245,240,232,0.65)" }}>
                          {artist.name}
                        </span>
                      )
                    )}
                  </div>
                </div>
              )}

              {sidePanelMovement.keyWorks.length > 0 && (
                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 style={{ fontFamily: "'Courier New', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: MUTED, marginBottom: "0.5rem" }}>
                    Key Works
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                    {sidePanelMovement.keyWorks.map((work) =>
                      work.workId && WORK_ROUTE[work.workId] ? (
                        <button
                          key={work.title}
                          onClick={() => navigate(WORK_ROUTE[work.workId!])}
                          style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", fontFamily: "'Raleway', system-ui, sans-serif", fontWeight: 300, fontSize: "0.8rem", color: GOLD, padding: 0, textDecoration: "underline", textDecorationColor: "rgba(201,168,76,0.35)", textUnderlineOffset: "3px" }}
                        >
                          {work.title}
                        </button>
                      ) : (
                        <span key={work.title} style={{ fontFamily: "'Raleway', system-ui, sans-serif", fontWeight: 300, fontSize: "0.8rem", color: "rgba(245,240,232,0.65)" }}>
                          {work.title}
                        </span>
                      )
                    )}
                  </div>
                </div>
              )}

              {sidePanelMovement.movementPageId && (
                <button
                  onClick={() => navigate(`/movement/${sidePanelMovement.movementPageId}`)}
                  style={{ width: "100%", padding: "0.6rem 1rem", backgroundColor: "transparent", border: `1px solid ${sidePanelMovement.color}66`, borderRadius: "3px", cursor: "pointer", fontFamily: "'Courier New', monospace", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: sidePanelMovement.color, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
                >
                  Explore Movement →
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </main>
  );
}
