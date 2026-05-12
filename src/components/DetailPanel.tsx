import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CIVILIZATIONS, type Civilization, type Movement } from "@/data/civilizations";

const toSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

interface DetailPanelProps {
  civ: Civilization;
  onClose: () => void;
  onSelect: (civ: Civilization) => void;
}

const GOLD = "#C9A84C";
const DARK = "#2A1E10";
const MUTED = "rgba(42,30,16,0.45)";

export default function DetailPanel({ civ, onClose, onSelect }: DetailPanelProps) {
  const idx = CIVILIZATIONS.findIndex((c) => c.id === civ.id);
  const prev = idx > 0 ? CIVILIZATIONS[idx - 1] : null;
  const next = idx < CIVILIZATIONS.length - 1 ? CIVILIZATIONS[idx + 1] : null;

  const navigate = useNavigate();
  const [selectedMovement, setSelectedMovement] = useState<Movement | null>(null);

  // Reset selected movement whenever civilization changes
  useEffect(() => {
    setSelectedMovement(null);
  }, [civ.id]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && next) onSelect(next);
      if (e.key === "ArrowLeft" && prev) onSelect(prev);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [civ, onSelect, prev, next]);

  const displayDates = selectedMovement ? selectedMovement.dates : civ.dates;

  return (
    <section
      style={{
        background: "#F5F0E8",
        borderTop: `1px solid rgba(201,168,76,0.35)`,
        borderBottom: `1px solid rgba(201,168,76,0.15)`,
      }}
    >
      {/* Gold top accent */}
      <div
        style={{
          height: "2px",
          background: `linear-gradient(to right, transparent, ${GOLD}60, transparent)`,
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={civ.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="max-w-6xl mx-auto px-8 py-7"
        >
          <div className="grid grid-cols-1 gap-8" style={{ gridTemplateColumns: "1fr 340px" }}>

            {/* Left col: name + description + works */}
            <div className="space-y-4">

              {/* Back to civilization — shown when a movement is selected */}
              {selectedMovement && (
                <button
                  onClick={() => setSelectedMovement(null)}
                  className="flex items-center gap-1 transition-colors duration-200"
                  style={{ color: MUTED, fontFamily: "'Raleway', system-ui, sans-serif", fontWeight: 300, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
                >
                  <ChevronLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
                  Back to {civ.name}
                </button>
              )}

              {/* Date pill + region */}
              <div className="flex items-center gap-3 flex-wrap">
                <span
                  className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5"
                  style={{
                    color: selectedMovement ? selectedMovement.color : GOLD,
                    border: `1px solid ${selectedMovement ? selectedMovement.color + "66" : "rgba(201,168,76,0.4)"}`,
                    borderRadius: "2px",
                  }}
                >
                  {displayDates}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: MUTED }}>
                  {selectedMovement ? `within ${civ.name}` : civ.region}
                </span>
              </div>

              {/* Title */}
              <h2
                onClick={() => !selectedMovement && navigate(`/civilization/${civ.id}`)}
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.6rem, 3.2vw, 2.2rem)",
                  fontWeight: 700,
                  color: DARK,
                  lineHeight: 1.1,
                  letterSpacing: "0.01em",
                  margin: 0,
                  cursor: selectedMovement ? "default" : "pointer",
                }}
              >
                {selectedMovement ? selectedMovement.name : civ.name}
              </h2>

              {/* Movements within this period — directly after title */}
              {!selectedMovement && civ.movements.length > 0 && (
                <div>
                  <p
                    className="font-mono"
                    style={{ fontSize: "9px", textTransform: "uppercase", letterSpacing: "2px", color: MUTED, marginBottom: "10px" }}
                  >
                    Movements within this period
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                    {civ.movements.map((m) => {
                      const isActive = selectedMovement?.name === m.name;
                      return (
                        <button
                          key={m.name}
                          onClick={() => navigate(`/movement/${toSlug(m.name)}`, { state: { civName: civ.name, civId: civ.id } })}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "7px 10px",
                            background: isActive ? "rgba(201,168,76,0.06)" : "transparent",
                            borderLeft: isActive ? `2px solid ${m.color}` : "2px solid transparent",
                            borderTop: "none",
                            borderRight: "none",
                            borderBottom: "none",
                            borderRadius: "0 2px 2px 0",
                            cursor: "pointer",
                            textAlign: "left",
                            width: "100%",
                            transition: "background 0.15s",
                          }}
                          onMouseEnter={(e) => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = "rgba(42,30,16,0.03)"; }}
                          onMouseLeave={(e) => { if (!isActive) (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: m.color, flexShrink: 0 }} />
                            <span style={{
                              fontFamily: "'Raleway', system-ui, sans-serif",
                              fontWeight: isActive ? 400 : 300,
                              fontSize: "11px",
                              color: isActive ? DARK : "rgba(42,30,16,0.75)",
                            }}>
                              {m.name}
                            </span>
                          </div>
                          <span style={{
                            fontFamily: "monospace",
                            fontSize: "10px",
                            letterSpacing: "0.06em",
                            color: isActive ? m.color : "rgba(201,168,76,0.55)",
                          }}>
                            {m.dates}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Description — only for civilization view */}
              {!selectedMovement && (
                <p
                  style={{
                    fontFamily: "'Raleway', system-ui, sans-serif",
                    fontWeight: 300,
                    fontSize: "0.875rem",
                    lineHeight: 1.75,
                    color: "rgba(42,30,16,0.8)",
                    margin: 0,
                  }}
                >
                  {civ.longDescription || civ.description}
                </p>
              )}

              {/* Key works — image cards */}
              {!selectedMovement && (
                <div>
                  <p className="font-mono uppercase tracking-widest mb-3" style={{ fontSize: "9px", color: MUTED }}>
                    Key Works
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {civ.keyWorks.map((work, i) => (
                      <div
                        key={i}
                        onClick={() => work.masterId && navigate(`/masterworks/${work.masterId}`)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          padding: "7px 10px",
                          background: "#FAF8F4",
                          border: "1px solid rgba(42,30,16,0.1)",
                          borderRadius: "2px",
                          cursor: work.masterId ? "pointer" : "default",
                          transition: "border-color 0.15s, box-shadow 0.15s",
                        }}
                        onMouseEnter={(e) => {
                          if (work.masterId) {
                            (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.45)";
                            (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 8px rgba(42,30,16,0.07)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(42,30,16,0.1)";
                          (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                        }}
                      >
                        {/* Text */}
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={{
                            fontFamily: "'Raleway', system-ui, sans-serif",
                            fontWeight: 400,
                            fontSize: "0.75rem",
                            color: work.masterId ? DARK : "rgba(42,30,16,0.7)",
                            lineHeight: 1.3,
                            marginBottom: "2px",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}>
                            {work.title}
                          </p>
                          <p style={{
                            fontFamily: "monospace",
                            fontSize: "9px",
                            color: MUTED,
                            lineHeight: 1,
                          }}>
                            {work.date}
                          </p>
                        </div>
                        {/* Arrow for linked works */}
                        {work.masterId && (
                          <span style={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(201,168,76,0.5)", flexShrink: 0 }}>
                            →
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Art Movement Tags */}
              {!selectedMovement && civ.artMovementTags && civ.artMovementTags.length > 0 && (
                <div>
                  <p className="font-mono uppercase tracking-widest mb-3" style={{ fontSize: "9px", color: MUTED }}>
                    Art Movements
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {civ.artMovementTags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: "'Raleway', system-ui, sans-serif",
                          fontWeight: 300,
                          fontSize: "10px",
                          padding: "3px 10px",
                          border: "1px solid rgba(201,168,76,0.35)",
                          borderRadius: "2px",
                          color: "rgba(201,168,76,0.75)",
                          background: "rgba(201,168,76,0.04)",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Closing insight */}
              {!selectedMovement && civ.insight && (
                <p style={{
                  fontFamily: "'Libre Baskerville', Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "0.8rem",
                  color: "rgba(42,30,16,0.45)",
                  lineHeight: 1.6,
                  margin: 0,
                  paddingTop: "4px",
                }}>
                  {civ.insight}
                </p>
              )}

              {/* Facts row — only for civilization view */}
              {!selectedMovement && (
                <div
                  className="grid grid-cols-3 gap-4 pt-4"
                  style={{ borderTop: "1px solid rgba(42,30,16,0.08)" }}
                >
                  {[
                    { label: "Duration", value: civ.duration },
                    { label: "Defining Quality", value: civ.quality },
                    { label: "Legacy", value: civ.legacy },
                  ].map((fact) => (
                    <div key={fact.label}>
                      <p className="font-mono uppercase tracking-widest mb-1" style={{ fontSize: "8px", color: MUTED }}>
                        {fact.label}
                      </p>
                      <p className="font-mono leading-snug" style={{ fontSize: "9px", color: "rgba(42,30,16,0.7)" }}>
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right col: image — natural aspect ratio; Egypt gets a tall portrait crop */}
            <div className="hidden md:block">
              {civ.image ? (
                (civ.id === 'egypt' || civ.id === 'modern' || civ.id === 'prehistoric') ? (
                  <div style={{ width: "100%", height: "520px", borderRadius: "2px", overflow: "hidden" }}>
                    <img
                      src={civ.image}
                      alt={civ.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: civ.id === 'egypt' ? "50% 18%" : civ.id === 'modern' ? "50% 20%" : "center", display: "block", opacity: 0.9 }}
                    />
                  </div>
                ) : (
                <img
                  src={civ.image}
                  alt={civ.name}
                  style={{ width: "100%", height: "auto", display: "block", borderRadius: "2px", opacity: 0.9 }}
                />
                )
              ) : (
                <div
                  className="w-full rounded flex items-center justify-center flex-col gap-2"
                  style={{ minHeight: "200px", background: "#E8E4DC" }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.3 }}>
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="rgba(42,30,16,0.5)" strokeWidth="1.5"/>
                    <circle cx="8.5" cy="8.5" r="1.5" stroke="rgba(42,30,16,0.5)" strokeWidth="1.5"/>
                    <path d="M21 15l-5-5L5 21" stroke="rgba(42,30,16,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-mono uppercase tracking-widest" style={{ fontSize: "8px", color: "rgba(42,30,16,0.35)" }}>
                    Image coming soon
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Navigation row */}
          <div
            className="flex items-center justify-between mt-6 pt-4"
            style={{ borderTop: "1px solid rgba(42,30,16,0.08)" }}
          >
            {prev ? (
              <button
                onClick={() => onSelect(prev)}
                className="flex items-center gap-2 transition-colors duration-200 group"
                style={{ color: MUTED }}
                onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
                onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
              >
                <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
                <span className="font-mono text-[10px] uppercase tracking-[0.1em]">{prev.name}</span>
              </button>
            ) : <div />}

            {/* Dot indicators */}
            <div className="flex items-center gap-1.5">
              {CIVILIZATIONS.map((c) => {
                const isActive = c.id === civ.id;
                return isActive ? (
                  <div
                    key={c.id}
                    onClick={() => onSelect(c)}
                    className="cursor-pointer transition-all duration-200"
                    style={{ position: "relative", width: "26px", height: "26px", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    {/* Outer ring */}
                    <div style={{ position: "absolute", width: "26px", height: "26px", borderRadius: "50%", border: `0.5px solid ${c.color}40` }} />
                    {/* Inner ring */}
                    <div style={{ position: "absolute", width: "18px", height: "18px", borderRadius: "50%", border: `1.5px solid ${c.color}80` }} />
                    {/* Filled dot */}
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: c.color }} />
                  </div>
                ) : (
                  <div
                    key={c.id}
                    className="rounded-full cursor-pointer transition-all duration-200"
                    style={{ width: "4px", height: "4px", backgroundColor: "rgba(42,30,16,0.2)" }}
                    onClick={() => onSelect(c)}
                  />
                );
              })}
            </div>

            {next ? (
              <button
                onClick={() => onSelect(next)}
                className="flex items-center gap-2 transition-colors duration-200"
                style={{ color: MUTED }}
                onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
                onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.1em]">{next.name}</span>
                <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
              </button>
            ) : <div />}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
