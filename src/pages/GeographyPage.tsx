import { useState, useMemo, useReducer, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus } from "lucide-react";
// @ts-ignore — react-simple-maps has no bundled types
import { ComposableMap, Geographies, Geography, Marker, useMapContext } from "react-simple-maps";
import { GEO_COUNTRIES, type GeoMovement } from "@/data/geography-data";

const GOLD = "#C9A84C";
const DARK = "#2A1E10";
const MUTED = "rgba(42,30,16,0.45)";
const PANEL_BG = "#1A1610";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const MIN_SCALE = 1;
const MAX_SCALE = 8;

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
  roman:       [11.5,   43.0],
  "medieval-france": [0.5, 47.8],
  byzantine:   [27.0,   38.5],
  iraq:        [44.0,   33.3],
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
  "368": "iraq",
};

// Per-country label offsets to prevent collisions in the dense Northern Europe cluster
const LABEL_CONFIG: Record<string, { dx: number; dy: number; anchor: string }> = {
  england:          { dx: -20, dy:  -8, anchor: "middle" },
  netherlands:      { dx:   8, dy: -16, anchor: "middle" },
  germany:          { dx:  18, dy:   4, anchor: "start"  },
  // Historical overlays — offset from their geographic neighbours
  roman:            { dx: -16, dy:   6, anchor: "middle" }, // below Italy dot
  "medieval-france":{ dx: -18, dy:  -8, anchor: "middle" }, // left of France dot
  byzantine:        { dx:  14, dy:   6, anchor: "start"  }, // right of Greece dot
};

function getLabelProps(countryId: string) {
  return LABEL_CONFIG[countryId] ?? { dx: 0, dy: -8, anchor: "middle" };
}

// ---------------------------------------------------------------------------
// Zoom / pan state
// ---------------------------------------------------------------------------
type ZoomState = { scale: number; x: number; y: number };
type ZoomAction =
  | { type: "wheel"; factor: number; ox: number; oy: number }
  | { type: "pinch"; scale: number; ox: number; oy: number }
  | { type: "drag";  dx: number; dy: number }
  | { type: "reset" };

function zoomReducer(state: ZoomState, action: ZoomAction): ZoomState {
  switch (action.type) {
    case "wheel": {
      const newScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, state.scale * action.factor));
      if (newScale === state.scale) return state;
      const ratio = newScale / state.scale;
      return {
        scale: newScale,
        x: action.ox - (action.ox - state.x) * ratio,
        y: action.oy - (action.oy - state.y) * ratio,
      };
    }
    case "pinch": {
      const newScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, action.scale));
      if (newScale === state.scale) return state;
      const ratio = newScale / state.scale;
      return {
        scale: newScale,
        x: action.ox - (action.ox - state.x) * ratio,
        y: action.oy - (action.oy - state.y) * ratio,
      };
    }
    case "drag":
      return { ...state, x: state.x + action.dx, y: state.y + action.dy };
    case "reset":
      return { scale: 1, x: 0, y: 0 };
  }
}

// ---------------------------------------------------------------------------
// Pill / stack layout helpers
// ---------------------------------------------------------------------------

const PILL_H    = 23;  // pill box height in SVG units
const PILL_GAP  = 8;   // gap between pill edges in SVG units
const PILL_STEP = PILL_H + PILL_GAP; // center-to-center distance
const DOT_MARGIN = 12; // min SVG units from dot centre to nearest pill edge

// Projected SVG Y below which a dot is considered "in the upper map" and
// should stack its labels downward instead of upward.
const UPPER_MAP_Y_THRESHOLD = 175;

// Horizontal distance from dot centre to pill centre for right-side stacking
const RIGHT_STACK_OFFSET = 95;

type StackDir = "above" | "below" | "right";

interface StackLayout {
  dir: StackDir;
  positions: { x: number; y: number }[];
}

/**
 * Compute pill positions for ALL movements of the selected country.
 * - USA: stack vertically to the right of the dot (ample map space)
 * - Upper-map dots (lat > ~52°N): stack downward so labels don't run off screen
 * - All others: stack upward above the dot
 */
function getStackLayout(
  dotX: number,
  dotY: number,
  countryId: string,
  count: number,
): StackLayout {
  // USA: vertical stack to the right, centred on dotY
  if (countryId === "usa") {
    const pillX  = dotX + RIGHT_STACK_OFFSET;
    const totalH = (count - 1) * PILL_STEP;
    const startY = dotY - totalH / 2;
    return {
      dir: "right",
      positions: Array.from({ length: count }, (_, i) => ({
        x: pillX,
        y: startY + i * PILL_STEP,
      })),
    };
  }

  // Upper map: stack below the dot
  if (dotY < UPPER_MAP_Y_THRESHOLD) {
    const topY = dotY + DOT_MARGIN + PILL_H / 2;
    return {
      dir: "below",
      positions: Array.from({ length: count }, (_, i) => ({
        x: dotX,
        y: topY + i * PILL_STEP,
      })),
    };
  }

  // Default: stack above the dot
  const bottomY = dotY - DOT_MARGIN - PILL_H / 2;
  return {
    dir: "above",
    positions: Array.from({ length: count }, (_, i) => ({
      x: dotX,
      y: bottomY - i * PILL_STEP,
    })),
  };
}

/**
 * Returns the point on the pill's nearest edge that a connector line should
 * target — so lines attach to the pill boundary, not its centre.
 */
function pillEdgePoint(
  dotX: number,
  dotY: number,
  px: number,
  py: number,
  pw: number,
): [number, number] {
  if (py + PILL_H / 2 < dotY - 2) return [px, py + PILL_H / 2]; // pill is above
  if (py - PILL_H / 2 > dotY + 2) return [px, py - PILL_H / 2]; // pill is below
  if (px > dotX)                   return [px - pw / 2, py];      // pill is right
  return                                  [px + pw / 2, py];      // pill is left
}

function pillWidth(name: string): number {
  return Math.max(120, name.length * 6 + 20);
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
  const rayOpacity  = hasSelection ? (isSelected ? 0.85 : 0.1) : 0.85;
  const pillOpacity = hasSelection ? (isSelected ? 1    : 0.2) : 1;
  const pw = pillWidth(movement.name);
  const GOLD_LOCAL = "#C9A84C";
  const [ex, ey] = pillEdgePoint(dotX, dotY, px, py, pw);

  return (
    <g>
      <motion.path
        d={`M ${dotX} ${dotY} L ${ex} ${ey}`}
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
          stroke={isSelected ? GOLD_LOCAL : `${GOLD_LOCAL}99`}
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
          fillOpacity={0.9}
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
          fillOpacity={0.55}
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
  hasSelection: boolean;
  onPillClick: (movement: GeoMovement, countryName: string) => void;
}

function RayLayer({ selectedCountryId, sidePanelMovement, hasSelection, onPillClick }: RayLayerProps) {
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

  const { positions } = getStackLayout(
    dotPos.x,
    dotPos.y,
    selectedCountry.id,
    selectedCountry.movements.length,
  );

  return (
    <>
      {selectedCountry.movements.map((movement, i) => (
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
// Main page
// ---------------------------------------------------------------------------
export default function GeographyPage() {
  const navigate = useNavigate();
  const [selectedCountryId, setSelectedCountryId] = useState<string | null>(null);
  const [hoveredCountryId,  setHoveredCountryId]  = useState<string | null>(null);
  const [sidePanelMovement,     setSidePanelMovement]     = useState<GeoMovement | null>(null);
  const [sidePanelCountryName,  setSidePanelCountryName]  = useState("");
  const [dragging, setDragging] = useState(false);

  // Zoom / pan
  const [zoomState, dispatch] = useReducer(zoomReducer, { scale: 1, x: 0, y: 0 });
  const mapContainerRef  = useRef<HTMLDivElement>(null);
  const isDragging       = useRef(false);
  const lastMousePos     = useRef({ x: 0, y: 0 });
  const pinchStartDist   = useRef<number | null>(null);
  const pinchStartMid    = useRef({ x: 0, y: 0 });
  const pinchStartScale  = useRef(1);

  const selectedCountry = GEO_COUNTRIES.find((c) => c.id === selectedCountryId) ?? null;

  // Non-passive wheel listener so we can preventDefault
  useEffect(() => {
    const el = mapContainerRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      const rect = el.getBoundingClientRect();
      dispatch({
        type: "wheel",
        factor: e.deltaY < 0 ? 1.12 : 1 / 1.12,
        ox: e.clientX - rect.left,
        oy: e.clientY - rect.top,
      });
    };
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, []);

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

  // Mouse drag (pan when zoomed in)
  function handleMouseDown(e: React.MouseEvent) {
    isDragging.current = true;
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (!isDragging.current) return;
    const dx = e.clientX - lastMousePos.current.x;
    const dy = e.clientY - lastMousePos.current.y;
    lastMousePos.current = { x: e.clientX, y: e.clientY };
    if (zoomState.scale > 1) {
      if (!dragging) setDragging(true);
      dispatch({ type: "drag", dx, dy });
    }
  }

  function stopDrag() {
    isDragging.current = false;
    setDragging(false);
  }

  // Pinch-to-zoom (touch)
  function handleTouchStart(e: React.TouchEvent) {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      pinchStartDist.current  = Math.hypot(dx, dy);
      pinchStartMid.current   = {
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
      };
      pinchStartScale.current = zoomState.scale;
    }
  }

  function handleTouchMove(e: React.TouchEvent) {
    if (e.touches.length === 2 && pinchStartDist.current !== null) {
      const dx   = e.touches[0].clientX - e.touches[1].clientX;
      const dy   = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      const rect = mapContainerRef.current!.getBoundingClientRect();
      dispatch({
        type: "pinch",
        scale: pinchStartScale.current * (dist / pinchStartDist.current),
        ox: pinchStartMid.current.x - rect.left,
        oy: pinchStartMid.current.y - rect.top,
      });
    }
  }

  function handleTouchEnd() {
    pinchStartDist.current = null;
  }

  // Hide country name labels when zoomed in (countries become self-evident)
  const showLabels = zoomState.scale < 2;

  // Cursor style: grab when zoomed, grabbing while dragging
  const mapCursor = dragging ? "grabbing" : zoomState.scale > 1 ? "grab" : "default";

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

      {/* MAP — outer container clips overflow and handles pointer events */}
      <div
        ref={mapContainerRef}
        style={{
          position: "relative",
          width: "100%",
          height: "calc(100vh - 13rem)",
          minHeight: 420,
          overflow: "hidden",
          userSelect: "none",
          cursor: mapCursor,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Zoom / pan transform wrapper */}
        <div
          style={{
            transform: `translate(${zoomState.x}px, ${zoomState.y}px) scale(${zoomState.scale})`,
            transformOrigin: "0 0",
            willChange: "transform",
            width: "100%",
            height: "100%",
          }}
        >
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 220, center: [20, 45] }}
            width={800}
            height={500}
            style={{ width: "100%", height: "100%", display: "block", backgroundColor: "#EAE4D8" }}
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
                  const isHovered  = countryId === hoveredCountryId;

                  let fill = "#E8E0D0";
                  if (isSelected)      fill = "rgba(201,168,76,0.25)";
                  else if (isHovered)  fill = "#DDD5C0";

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      style={{
                        default:  { fill, stroke: "rgba(201,168,76,0.4)", strokeWidth: 0.5, outline: "none", cursor: countryId ? "pointer" : "default" },
                        hover:    { fill, stroke: "rgba(201,168,76,0.4)", strokeWidth: 0.5, outline: "none", cursor: countryId ? "pointer" : "default" },
                        pressed:  { fill, stroke: "rgba(201,168,76,0.5)", strokeWidth: 0.5, outline: "none" },
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
              hasSelection={sidePanelMovement !== null}
              onPillClick={handlePillClick}
            />

            {/* Country dot markers */}
            {GEO_COUNTRIES.map((country) => {
              const coords = GEO_COORDS[country.id];
              if (!coords) return null;
              const isSelected  = country.id === selectedCountryId;
              const isHovered   = country.id === hoveredCountryId;
              const labelProps  = getLabelProps(country.id);

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
                    fill={GOLD}
                    stroke={isSelected ? GOLD : "rgba(201,168,76,0.6)"}
                    strokeWidth={isSelected ? 1.5 : 0.8}
                    onClick={(e: any) => { e.stopPropagation(); handleCountryClick(country.id); }}
                    onMouseEnter={() => setHoveredCountryId(country.id)}
                    onMouseLeave={() => setHoveredCountryId(null)}
                    style={{ cursor: "pointer" }}
                  />
                  {showLabels && (
                    <text
                      textAnchor={labelProps.anchor as any}
                      x={labelProps.dx}
                      y={labelProps.dy}
                      style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: 5.5,
                        fill: isSelected || isHovered ? DARK : MUTED,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        userSelect: "none",
                        pointerEvents: "none",
                      }}
                    >
                      {country.name}
                    </text>
                  )}
                </Marker>
              );
            })}
          </ComposableMap>
        </div>

        {/* Zoom controls — bottom-right corner of map */}
        <div
          style={{
            position: "absolute",
            bottom: 16,
            right: 16,
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <button
            onClick={() => {
              const rect = mapContainerRef.current!.getBoundingClientRect();
              dispatch({ type: "wheel", factor: 1.3, ox: rect.width / 2, oy: rect.height / 2 });
            }}
            title="Zoom in"
            style={{
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(250,248,244,0.92)",
              border: "1px solid rgba(201,168,76,0.4)",
              borderRadius: 3,
              cursor: "pointer",
              color: DARK,
            }}
          >
            <Plus size={14} />
          </button>
          <button
            onClick={() => {
              const rect = mapContainerRef.current!.getBoundingClientRect();
              dispatch({ type: "wheel", factor: 1 / 1.3, ox: rect.width / 2, oy: rect.height / 2 });
            }}
            title="Zoom out"
            style={{
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(250,248,244,0.92)",
              border: "1px solid rgba(201,168,76,0.4)",
              borderRadius: 3,
              cursor: "pointer",
              color: DARK,
            }}
          >
            <Minus size={14} />
          </button>
          {zoomState.scale > 1 && (
            <button
              onClick={() => dispatch({ type: "reset" })}
              title="Reset zoom"
              style={{
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(250,248,244,0.92)",
                border: "1px solid rgba(201,168,76,0.4)",
                borderRadius: 3,
                cursor: "pointer",
                color: MUTED,
                fontFamily: "'Courier New', monospace",
                fontSize: "0.55rem",
                letterSpacing: "0.05em",
              }}
            >
              1:1
            </button>
          )}
        </div>
      </div>

      {/* Click-outside backdrop — closes movement panel when clicking anywhere outside it */}
      {sidePanelMovement && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 49, cursor: "default" }}
          onClick={() => setSidePanelMovement(null)}
        />
      )}

      {/* Side panel — fixed right overlay (z-50, above backdrop) */}
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
