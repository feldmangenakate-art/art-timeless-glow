import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
// @ts-ignore — react-simple-maps has no bundled types
import { ComposableMap, Geographies, Geography, Marker, useMapContext } from "react-simple-maps";
import { GEO_COUNTRIES, type GeoMovement } from "@/data/geography-data";

const GOLD = "#C9A84C";
const DARK = "#2A1E10";
const MUTED = "rgba(42,30,16,0.45)";
const PANEL_BG = "#1A1610";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Geographic coordinates [longitude, latitude] for each country dot
const GEO_COORDS: Record<string, [number, number]> = {
  italy:       [12.5,   41.9],
  spain:       [-3.7,   40.4],
  france:      [2.3,    46.2],
  netherlands: [5.3,    52.1],
  germany:     [10.4,   51.2],
  england:     [-1.5,   52.5],
  russia:      [37.6,   55.7],
  egypt:       [30.8,   26.8],
  greece:      [21.8,   39.1],
  japan:       [138.2,  36.2],
  usa:         [-95.7,  37.1],
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

function formatYear(y: number): string {
  const n = Math.round(y);
  return n < 0 ? `${Math.abs(n)} BC` : `${n} AD`;
}

function sliderToYear(v: number): number {
  if (v <= 15) return -3000 + (v / 15) * 2500;
  if (v <= 45) return -500 + ((v - 15) / 30) * 1900;
  return 1400 + ((v - 45) / 55) * 625;
}

function yearToSlider(year: number): number {
  if (year <= -500) return ((year + 3000) / 2500) * 15;
  if (year <= 1400) return 15 + ((year + 500) / 1900) * 30;
  return 45 + ((year - 1400) / 625) * 55;
}

// Tick marks: [year, label]
const TICKS: [number, string][] = [
  [-3000, "3000 BC"],
  [-1000, "1000 BC"],
  [-500,  "500 BC"],
  [0,     "0"],
  [500,   "500"],
  [1000,  "1000"],
  [1400,  "1400"],
  [1600,  "1600"],
  [1800,  "1800"],
  [1900,  "1900"],
  [2000,  "2000"],
];

function isMovementActive(range: [number, number], year: number): boolean {
  return year >= range[0] && year <= range[1];
}

function hasActiveMovements(countryId: string, year: number): boolean {
  const c = GEO_COUNTRIES.find((x) => x.id === countryId);
  return c?.movements.some((m) => isMovementActive(m.activeRange, year)) ?? false;
}

function getPillPositions(dotX: number, dotY: number, country: (typeof GEO_COUNTRIES)[0]) {
  const n = country.movements.length;
  const arcStart = n >= 5 ? -170 : -160;
  const arcEnd   = n >= 5 ?  -10 :  -20;
  const arcRange = arcEnd - arcStart;
  const angleStep = n > 1 ? arcRange / (n - 1) : 0;
  const rayLength = 110;
  return country.movements.map((_, i) => {
    const deg = arcStart + angleStep * i;
    const rad = (deg * Math.PI) / 180;
    return {
      x: dotX + rayLength * Math.cos(rad),
      y: dotY + rayLength * Math.sin(rad),
    };
  });
}

const PILL_H = 23;

function pillWidth(name: string): number {
  return Math.max(120, name.length * 6 + 20);
}

interface PillProps {
  dotX: number;
  dotY: number;
  px: number;
  py: number;
  movement: GeoMovement;
  year: number;
  index: number;
  isSelected: boolean;
  hasSelection: boolean;
  onClick: () => void;
}

function RayPill({ dotX, dotY, px, py, movement, year, index, isSelected, hasSelection, onClick }: PillProps) {
  const active = isMovementActive(movement.activeRange, year);
  const rayOpacity = hasSelection
    ? isSelected ? 0.85 : 0.1
    : active ? 0.85 : 0.28;
  const pillOpacity = hasSelection
    ? isSelected ? 1 : 0.2
    : active ? 1 : 0.6;
  const pw = pillWidth(movement.name);

  const GOLD = "#C9A84C";

  return (
    <g>
      <motion.path
        d={`M ${dotX} ${dotY} L ${px} ${py}`}
        stroke={movement.color}
        strokeWidth={0.9}
        strokeDasharray="3 2"
        fill="none"
        strokeOpacity={rayOpacity}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: rayOpacity }}
        transition={{ delay: index * 0.1, duration: 0.32, ease: "easeOut" }}
      />
      <motion.g
        onClick={(e: any) => { e.stopPropagation(); onClick(); }}
        style={{ cursor: "pointer", filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.08))" }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: pillOpacity, scale: 1 }}
        transition={{ delay: index * 0.1 + 0.25, duration: 0.2, ease: "easeOut" }}
      >
        <rect
          x={px - pw / 2}
          y={py - PILL_H / 2}
          width={pw}
          height={PILL_H}
          rx={3}
          fill="#FAF8F4"
          stroke={isSelected ? GOLD : `${GOLD}99`}
          strokeWidth={isSelected ? 1.5 : 1}
        />
        <text
          x={px}
          y={py - 3}
          textAnchor="middle"
          fill="#2A1E10"
          fontSize={6.5}
          fontFamily="'Courier New', monospace"
          letterSpacing="0.06em"
          style={{ textTransform: "uppercase", userSelect: "none", pointerEvents: "none" }}
          fillOpacity={active ? 0.9 : 0.5}
        >
          {movement.name}
        </text>
        <text
          x={px}
          y={py + 8}
          textAnchor="middle"
          fill="#2A1E10"
          fontSize={5.5}
          fontFamily="'Courier New', monospace"
          fillOpacity={active ? 0.55 : 0.3}
          style={{ userSelect: "none", pointerEvents: "none" }}
        >
          {movement.dates}
        </text>
      </motion.g>
    </g>
  );
}

// Inner component that accesses the map projection context
interface RayLayerProps {
  selectedCountryId: string | null;
  sidePanelMovement: GeoMovement | null;
  year: number;
  hasSelection: boolean;
  onPillClick: (movement: GeoMovement, countryName: string) => void;
}

function RayLayer({ selectedCountryId, sidePanelMovement, year, hasSelection, onPillClick }: RayLayerProps) {
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

  const pills = getPillPositions(dotPos.x, dotPos.y, selectedCountry);

  return (
    <>
      {selectedCountry.movements.map((movement, i) => (
        <RayPill
          key={`${selectedCountry.id}-${movement.id}`}
          dotX={dotPos.x}
          dotY={dotPos.y}
          px={pills[i].x}
          py={pills[i].y}
          movement={movement}
          year={year}
          index={i}
          isSelected={sidePanelMovement?.id === movement.id}
          hasSelection={hasSelection}
          onClick={() => onPillClick(movement, selectedCountry.name)}
        />
      ))}
    </>
  );
}

export default function GeographyPage() {
  const navigate = useNavigate();
  const [sliderPos, setSliderPos] = useState(yearToSlider(1500));
  const year = Math.round(sliderToYear(sliderPos));
  const [selectedCountryId, setSelectedCountryId] = useState<string | null>(null);
  const [hoveredCountryId, setHoveredCountryId] = useState<string | null>(null);
  const [sidePanelMovement, setSidePanelMovement] = useState<GeoMovement | null>(null);
  const [sidePanelCountryName, setSidePanelCountryName] = useState("");

  const selectedCountry = GEO_COUNTRIES.find((c) => c.id === selectedCountryId) ?? null;

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
      <section
        style={{
          padding: "2rem 2rem 0.5rem",
          maxWidth: "64rem",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: "3.75rem",
            lineHeight: 1.0,
            color: DARK,
            marginBottom: "0.75rem",
            letterSpacing: "0.025em",
          }}
        >
          Geography
        </h1>
        <p
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 400,
            fontStyle: "italic",
            color: MUTED,
            fontSize: "1rem",
          }}
        >
          Explore art history by place — click any country to see its movements
        </p>
      </section>

      <div
        style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)",
          margin: "1rem 2rem",
        }}
      />

      {/* MAP */}
      <div style={{ position: "relative", width: "100%", userSelect: "none" }}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 220, center: [20, 45] }}
          width={800}
          height={500}
          style={{ width: "100%", height: "60vh", minHeight: 320, display: "block", backgroundColor: "#EAE4D8" }}
        >
          {/* Background click target — deselects everything */}
          <rect
            width={800}
            height={500}
            fill="transparent"
            style={{ cursor: "default" }}
            onClick={() => { setSidePanelMovement(null); setSelectedCountryId(null); }}
          />

          {/* World country fills */}
          <Geographies geography={GEO_URL}>
            {({ geographies }: { geographies: any[] }) =>
              geographies.map((geo) => {
                const countryId = ISO_TO_COUNTRY[String(geo.id)] ?? null;
                const isSelected = countryId === selectedCountryId;
                const isHovered = countryId === hoveredCountryId;
                const active = countryId ? hasActiveMovements(countryId, year) : false;

                let fill = "#E8E0D0";
                if (isSelected) fill = "rgba(201,168,76,0.25)";
                else if (isHovered) fill = "#DDD5C0";
                else if (countryId && !active) fill = "#EDEAE4";

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill,
                        stroke: "rgba(201,168,76,0.4)",
                        strokeWidth: 0.5,
                        outline: "none",
                        cursor: countryId ? "pointer" : "default",
                      },
                      hover: {
                        fill,
                        stroke: "rgba(201,168,76,0.4)",
                        strokeWidth: 0.5,
                        outline: "none",
                        cursor: countryId ? "pointer" : "default",
                      },
                      pressed: {
                        fill,
                        stroke: "rgba(201,168,76,0.5)",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                    }}
                    onClick={countryId ? (e: any) => { e.stopPropagation(); handleCountryClick(countryId); } : undefined}
                    onMouseEnter={countryId ? () => setHoveredCountryId(countryId) : undefined}
                    onMouseLeave={countryId ? () => setHoveredCountryId(null) : undefined}
                  />
                );
              })
            }
          </Geographies>

          {/* Rays and pills — needs projection context */}
          <RayLayer
            selectedCountryId={selectedCountryId}
            sidePanelMovement={sidePanelMovement}
            year={year}
            hasSelection={sidePanelMovement !== null}
            onPillClick={handlePillClick}
          />

          {/* Country dot markers */}
          {GEO_COUNTRIES.map((country) => {
            const coords = GEO_COORDS[country.id];
            if (!coords) return null;
            const isSelected = country.id === selectedCountryId;
            const isHovered = country.id === hoveredCountryId;
            const active = hasActiveMovements(country.id, year);

            return (
              <Marker key={country.id} coordinates={coords}>
                {isSelected && (
                  <circle
                    r={9}
                    fill="none"
                    stroke={sidePanelMovement ? sidePanelMovement.color : GOLD}
                    strokeWidth={sidePanelMovement ? 1.5 : 1}
                    strokeOpacity={sidePanelMovement ? 0.9 : 0.5}
                  />
                )}
                <circle
                  r={isHovered && !isSelected ? 5.5 : 4.5}
                  fill={active ? GOLD : "rgba(201,168,76,0.35)"}
                  stroke={isSelected ? GOLD : "rgba(201,168,76,0.6)"}
                  strokeWidth={isSelected ? 1.5 : 0.8}
                  onClick={(e: any) => { e.stopPropagation(); handleCountryClick(country.id); }}
                  onMouseEnter={() => setHoveredCountryId(country.id)}
                  onMouseLeave={() => setHoveredCountryId(null)}
                  style={{ cursor: "pointer" }}
                />
                <text
                  textAnchor="middle"
                  y={-8}
                  style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: 6,
                    fill: isSelected || isHovered ? DARK : MUTED,
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
        </ComposableMap>

        {/* Time slider */}
        <div
          style={{
            padding: "0.75rem 2rem 1rem",
            backgroundColor: "#EDE8DF",
            borderTop: "1px solid rgba(201,168,76,0.15)",
          }}
        >
          {/* Current year display */}
          <div style={{ textAlign: "center", marginBottom: "0.25rem" }}>
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1rem",
                color: DARK,
              }}
            >
              {formatYear(year)}
            </span>
          </div>

          {/* Slider + ticks */}
          <div
            style={{
              position: "relative",
              maxWidth: "60rem",
              margin: "0 auto",
              paddingBottom: "1.25rem",
            }}
          >
            <input
              type="range"
              min={0}
              max={100}
              step={0.1}
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              style={{
                width: "100%",
                height: "2px",
                appearance: "none",
                backgroundColor: "rgba(42,30,16,0.15)",
                outline: "none",
                cursor: "pointer",
                accentColor: GOLD,
                display: "block",
              }}
            />

            {/* Tick marks */}
            <div style={{ position: "relative", height: "1.25rem" }}>
              {TICKS.map(([tickYear, label]) => {
                const pct = yearToSlider(tickYear);
                return (
                  <div
                    key={tickYear}
                    style={{
                      position: "absolute",
                      left: `${pct}%`,
                      transform: "translateX(-50%)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "1px",
                    }}
                  >
                    <div
                      style={{
                        width: "1px",
                        height: "4px",
                        backgroundColor: "rgba(42,30,16,0.2)",
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: "0.55rem",
                        color: MUTED,
                        letterSpacing: "0.05em",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <p
            style={{
              textAlign: "center",
              fontFamily: "'Courier New', monospace",
              fontSize: "0.65rem",
              color: MUTED,
              letterSpacing: "0.08em",
              marginTop: "0.4rem",
              textTransform: "uppercase",
            }}
          >
            {selectedCountry
              ? `${selectedCountry.name} · ${
                  selectedCountry.movements.filter((m) => isMovementActive(m.activeRange, year))
                    .length
                } active movement${
                  selectedCountry.movements.filter((m) => isMovementActive(m.activeRange, year))
                    .length !== 1
                    ? "s"
                    : ""
                } this year`
              : "Click a country to explore its art movements"}
          </p>
        </div>
      </div>

      {/* Side panel — fixed right overlay */}
      <AnimatePresence>
        {sidePanelMovement && (
          <motion.div
            key="geo-panel"
            initial={{ x: 340 }}
            animate={{ x: 0 }}
            exit={{ x: 340 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "fixed",
              top: "4rem",
              right: 0,
              bottom: 0,
              width: 320,
              backgroundColor: PANEL_BG,
              borderLeft: "1px solid rgba(201,168,76,0.15)",
              overflowY: "auto",
              zIndex: 50,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Close */}
            <div style={{ display: "flex", justifyContent: "flex-end", padding: "1rem 1rem 0" }}>
              <button
                onClick={() => setSidePanelMovement(null)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: MUTED,
                  padding: "0.25rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <X size={16} />
              </button>
            </div>

            <div style={{ padding: "0.5rem 1.5rem 2rem" }}>
              {/* Country name */}
              <p
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: "0.65rem",
                  color: MUTED,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "0.4rem",
                }}
              >
                {sidePanelCountryName}
              </p>

              {/* Movement name */}
              <h2
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1.6rem",
                  fontWeight: 400,
                  color: "#F5F0E8",
                  lineHeight: 1.15,
                  marginBottom: "0.5rem",
                }}
              >
                {sidePanelMovement.name}
              </h2>

              {/* Dates badge */}
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "'Courier New', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  color: sidePanelMovement.color,
                  border: `1px solid ${sidePanelMovement.color}66`,
                  borderRadius: "2px",
                  padding: "0.15rem 0.5rem",
                  textTransform: "uppercase",
                  marginBottom: "1.25rem",
                }}
              >
                {sidePanelMovement.dates}
              </span>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Raleway', system-ui, sans-serif",
                  fontWeight: 300,
                  fontSize: "0.82rem",
                  color: "rgba(245,240,232,0.75)",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                }}
              >
                {sidePanelMovement.description}
              </p>

              {/* Key Artists */}
              {sidePanelMovement.keyArtists.length > 0 && (
                <div style={{ marginBottom: "1.25rem" }}>
                  <h3
                    style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: MUTED,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Key Artists
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                    {sidePanelMovement.keyArtists.map((artist) =>
                      artist.artistId ? (
                        <button
                          key={artist.name}
                          onClick={() => navigate(`/artists/${artist.artistId}`)}
                          style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            textAlign: "left",
                            fontFamily: "'Raleway', system-ui, sans-serif",
                            fontWeight: 300,
                            fontSize: "0.8rem",
                            color: GOLD,
                            padding: 0,
                            textDecoration: "underline",
                            textDecorationColor: "rgba(201,168,76,0.35)",
                            textUnderlineOffset: "3px",
                          }}
                        >
                          {artist.name}
                        </button>
                      ) : (
                        <span
                          key={artist.name}
                          style={{
                            fontFamily: "'Raleway', system-ui, sans-serif",
                            fontWeight: 300,
                            fontSize: "0.8rem",
                            color: "rgba(245,240,232,0.65)",
                          }}
                        >
                          {artist.name}
                        </span>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Key Works */}
              {sidePanelMovement.keyWorks.length > 0 && (
                <div style={{ marginBottom: "1.5rem" }}>
                  <h3
                    style={{
                      fontFamily: "'Courier New', monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: MUTED,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Key Works
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                    {sidePanelMovement.keyWorks.map((work) =>
                      work.workId ? (
                        <button
                          key={work.title}
                          onClick={() => navigate(`/masterworks/${work.workId}`)}
                          style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            textAlign: "left",
                            fontFamily: "'Raleway', system-ui, sans-serif",
                            fontWeight: 300,
                            fontSize: "0.8rem",
                            color: GOLD,
                            padding: 0,
                            textDecoration: "underline",
                            textDecorationColor: "rgba(201,168,76,0.35)",
                            textUnderlineOffset: "3px",
                          }}
                        >
                          {work.title}
                        </button>
                      ) : (
                        <span
                          key={work.title}
                          style={{
                            fontFamily: "'Raleway', system-ui, sans-serif",
                            fontWeight: 300,
                            fontSize: "0.8rem",
                            color: "rgba(245,240,232,0.65)",
                          }}
                        >
                          {work.title}
                        </span>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Explore movement button */}
              {sidePanelMovement.movementPageId && (
                <button
                  onClick={() => navigate(`/movement/${sidePanelMovement.movementPageId}`)}
                  style={{
                    width: "100%",
                    padding: "0.6rem 1rem",
                    backgroundColor: "transparent",
                    border: `1px solid ${sidePanelMovement.color}66`,
                    borderRadius: "3px",
                    cursor: "pointer",
                    fontFamily: "'Courier New', monospace",
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: sidePanelMovement.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                >
                  Explore Movement →
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
