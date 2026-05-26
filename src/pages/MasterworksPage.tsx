import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { MASTERWORKS } from "@/data/masterworks";
import { collectionWorks } from "@/data/collection";
import type { CollectionWork } from "@/types/collection";
import Footer from "@/components/Footer";

const GOLD = "#C9A84C";
const DARK = "#2A1E10";
const MUTED = "rgba(42,30,16,0.45)";

// ── Collection filter logic (mirrors CollectionPage) ─────────────────────────

type FilterKey =
  | "All" | "Prehistoric" | "Ancient World" | "Medieval"
  | "Renaissance" | "Northern Renaissance" | "Baroque" | "Dutch Golden Age"
  | "Impressionism" | "Post-Impressionism" | "Modern";

const FILTERS: FilterKey[] = [
  "All", "Prehistoric", "Ancient World", "Medieval",
  "Renaissance", "Northern Renaissance", "Baroque", "Dutch Golden Age",
  "Impressionism", "Post-Impressionism", "Modern",
];

function matchesFilter(work: CollectionWork, filter: FilterKey): boolean {
  if (filter === "All") return true;
  const era = work.era;
  const movement = work.movementId ?? "";
  switch (filter) {
    case "Prehistoric":          return era === "Prehistoric Art";
    case "Ancient World":        return ["Mesopotamia", "Ancient Egypt", "Ancient Greece", "Roman Empire", "Byzantine"].includes(era);
    case "Medieval":             return era === "Medieval Europe";
    case "Renaissance":          return era === "Renaissance";
    case "Northern Renaissance": return movement === "northern-renaissance";
    case "Baroque":              return era === "Baroque";
    case "Dutch Golden Age":     return era === "Dutch Golden Age";
    case "Impressionism":        return era === "Impressionism" && !movement.includes("post");
    case "Post-Impressionism":   return movement === "post-impressionism";
    case "Modern":               return era === "Modern & Contemporary";
    default:                     return true;
  }
}

// ── Collection card (mirrors CollectionPage) ─────────────────────────────────

function CollectionCard({ work, index }: { work: CollectionWork; index: number }) {
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.025 }}
      onClick={() => navigate(`/collection/${work.id}`)}
      style={{
        cursor: "pointer",
        background: "#FAF8F4",
        borderRadius: "3px",
        overflow: "hidden",
        border: "1px solid rgba(201,168,76,0.14)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(42,30,16,0.14)" }}
    >
      {!imgError ? (
        <div style={{ aspectRatio: "1 / 1", overflow: "hidden", background: `${work.eraColor}18` }}>
          <img
            src={work.image}
            alt={work.title}
            loading="lazy"
            onError={() => setImgError(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: (work.objectFit ?? "cover") as React.CSSProperties["objectFit"],
              objectPosition: work.objectPosition ?? "center",
              display: "block",
            }}
          />
        </div>
      ) : (
        <div style={{
          aspectRatio: "1 / 1",
          background: "#F0EBE1",
          border: `1px solid rgba(201,168,76,0.22)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <span style={{
            fontFamily: "'Raleway', system-ui, sans-serif",
            fontSize: "10px",
            letterSpacing: "0.12em",
            color: "rgba(42,30,16,0.25)",
            textTransform: "uppercase",
          }}>
            {work.era}
          </span>
        </div>
      )}

      <div style={{ padding: "14px 16px 16px", background: "#F5F0E8" }}>
        <p className="font-mono uppercase tracking-widest mb-1.5" style={{ fontSize: "8px", color: work.eraColor }}>
          {work.era}
        </p>
        <h3 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: 700,
          fontSize: "1rem",
          color: DARK,
          lineHeight: 1.25,
          marginBottom: "4px",
        }}>
          {work.title}
        </h3>
        <p style={{
          fontFamily: "'Raleway', system-ui, sans-serif",
          fontWeight: 300,
          fontSize: "0.78rem",
          color: MUTED,
          marginBottom: "2px",
        }}>
          {work.artist}
        </p>
        <p className="font-mono" style={{ fontSize: "9px", color: "rgba(42,30,16,0.35)" }}>
          {work.year} · {work.location.split(",")[0]}
        </p>
      </div>
    </motion.div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function MasterworksPage() {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");

  const activeTab = searchParams.get("tab") === "collection" ? "collection" : "masterworks";

  function setTab(tab: "masterworks" | "collection") {
    setSearchParams(tab === "collection" ? { tab: "collection" } : {});
    setActiveFilter("All");
  }

  const filteredCollection = collectionWorks.filter((w) => matchesFilter(w, activeFilter));

  const subtitle = activeTab === "collection"
    ? `${collectionWorks.length} works · the complete collection`
    : `${MASTERWORKS.length} works · from ancient Egypt to the present day`;

  return (
    <main style={{ background: "#EDE8DF", minHeight: "100vh" }} className="pt-16">

      {/* Header */}
      <section className={isMobile ? "px-4 pt-8 pb-4 max-w-6xl mx-auto text-center" : "px-8 pt-8 pb-4 max-w-6xl mx-auto text-center"}>
        <h1 className="font-display text-6xl tracking-wide page-title" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, color: DARK, marginBottom: "1.25rem", lineHeight: 1.0, fontSize: isMobile ? "2.25rem" : undefined }}>
          Masterworks
        </h1>
        <p style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: 400,
          fontStyle: "italic",
          fontSize: "16px",
          color: "#8a7a6a",
          lineHeight: 1.5,
        }}>
          {subtitle}
        </p>
      </section>

      {/* Tabs */}
      <section className={isMobile ? "px-4 max-w-6xl mx-auto" : "px-8 max-w-6xl mx-auto"}>
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "0" }}>
          {(["masterworks", "collection"] as const).map((tab) => {
            const active = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setTab(tab)}
                style={{
                  fontFamily: "'Raleway', system-ui, sans-serif",
                  fontWeight: active ? 600 : 400,
                  fontSize: "13px",
                  letterSpacing: "0.07em",
                  padding: "8px 32px",
                  borderRadius: "2px 2px 0 0",
                  border: active ? "1px solid transparent" : `1px solid #9a7c3a`,
                  borderBottom: active ? "1px solid transparent" : `1px solid #9a7c3a`,
                  background: active ? "#2c2013" : "transparent",
                  color: active ? "#F0EAD6" : "rgba(154,124,58,0.85)",
                  cursor: "pointer",
                  transition: "all 0.18s ease",
                }}
                onMouseEnter={(e) => {
                  if (!active) e.currentTarget.style.color = "#9a7c3a";
                }}
                onMouseLeave={(e) => {
                  if (!active) e.currentTarget.style.color = "rgba(154,124,58,0.85)";
                }}
              >
                {tab === "masterworks" ? "★ Masterworks" : "The Collection"}
              </button>
            );
          })}
        </div>
        {/* Gold divider below tabs */}
        <div style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(201,168,76,0.35), transparent)",
          marginBottom: "1.5rem",
        }} />
      </section>

      {/* ── Masterworks tab ── */}
      {activeTab === "masterworks" && (
        <section className={isMobile ? "px-4 pb-16 max-w-6xl mx-auto" : "px-8 pb-16 max-w-6xl mx-auto"}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {MASTERWORKS.map((work, i) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                whileHover={{ y: -3 }}
                onClick={() => navigate(`/masterworks/${work.id}`, { state: { from: "masterworks" } })}
                className="cursor-pointer overflow-hidden"
                style={{
                  background: "#F8F4EE",
                  borderRadius: "3px",
                  borderTop: `2px solid ${work.eraColor}`,
                  boxShadow: "0 1px 4px rgba(42,30,16,0.07)",
                  transition: "box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = `0 6px 20px rgba(42,30,16,0.12), 0 0 0 1px ${work.eraColor}30`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 4px rgba(42,30,16,0.07)";
                }}
              >
                {/* Image area */}
                <div style={{ aspectRatio: "1 / 1", overflow: "hidden", background: `${work.eraColor}18`, position: "relative" }}>
                  <img
                    src={work.image}
                    alt={work.title}
                    loading="lazy"
                    width={360}
                    style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85,
                      transform: work.id === "mona-lisa" ? "scale(1.28)" : work.id === "the-kiss-klimt" ? "scale(1.6) translateY(22%)" : undefined,
                      objectPosition: (({
                        "venus-de-milo": "75% top",
                        "mona-lisa": "center 22%",
                        "laocoon": "center top",
                        "girl-pearl-earring": "center 20%",
                        "anatomy-lesson": "center top",
                        "third-of-may": "40% 25%",
                        "fighting-temeraire": "center 20%",
                        "bar-at-folies": "50% 35%",
                        "starry-night": "center top",
                        "las-meninas": "center 75%",
                        "liberty-leading": "center 25%",
                        "night-watch": "center 30%",
                        "self-portrait-durer": "center 15%",
                        "venus-of-urbino": "20% center",
                        "calling-saint-matthew": "42% 45%",
                        "nighthawks": "60% center",
                        "the-dance-matisse": "center center",
                        "campbells-soup": "center top",
                        "marilyn-diptych": "center top",
                        "comedian": "center center",
                        "for-love-of-god": "center center",
                        "the-kiss-klimt": "50% 0%",
                        "demoiselles-avignon": "center 25%",
                        "two-fridas": "center 25%",
                        "american-gothic": "center 20%",
                        "david": "center 30%",
                        "winged-victory": "top",
                        "transfiguration": "top",
                      } as Record<string, string>)[work.id] ?? "center center")
                    }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                      const parent = (e.currentTarget as HTMLImageElement).parentElement;
                      if (parent) {
                        parent.style.display = "flex";
                        parent.style.flexDirection = "column";
                        parent.style.alignItems = "center";
                        parent.style.justifyContent = "center";
                        parent.style.gap = "8px";
                        parent.innerHTML = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" style="opacity:0.25"><rect x="3" y="3" width="18" height="18" rx="2" stroke="rgba(42,30,16,0.6)" stroke-width="1.5"/><circle cx="8.5" cy="8.5" r="1.5" stroke="rgba(42,30,16,0.6)" stroke-width="1.5"/><path d="M21 15l-5-5L5 21" stroke="rgba(42,30,16,0.6)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><span style="font-family:monospace;font-size:8px;text-transform:uppercase;letter-spacing:1.5px;color:rgba(42,30,16,0.3)">Image coming soon</span>`;
                      }
                    }}
                  />
                </div>

                {/* Info */}
                <div style={{ padding: "14px 16px 16px", background: "#F5F0E8" }}>
                  <p className="font-mono uppercase tracking-widest mb-1.5" style={{ fontSize: "8px", color: GOLD }}>
                    {work.era}
                  </p>
                  <h3 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: DARK,
                    lineHeight: 1.25,
                    marginBottom: "4px",
                  }}>
                    {work.title}
                  </h3>
                  <p style={{
                    fontFamily: "'Raleway', system-ui, sans-serif",
                    fontWeight: 300,
                    fontSize: "0.78rem",
                    color: MUTED,
                    marginBottom: "2px",
                  }}>
                    {work.artist}
                  </p>
                  <p className="font-mono" style={{ fontSize: "9px", color: "rgba(42,30,16,0.35)" }}>
                    {work.year} · {work.location.split(",")[0]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* ── Collection tab ── */}
      {activeTab === "collection" && (
        <>
          {/* Filter pills */}
          <section className={isMobile ? "px-4 pb-4 max-w-6xl mx-auto" : "px-8 pb-4 max-w-6xl mx-auto"}>
            <div style={{ display: "flex", flexWrap: "wrap" as React.CSSProperties["flexWrap"], gap: "8px", justifyContent: "center" }}>
              {FILTERS.map((filter) => {
                const active = filter === activeFilter;
                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    style={{
                      fontFamily: "'Raleway', system-ui, sans-serif",
                      fontWeight: active ? 600 : 400,
                      fontSize: "12px",
                      letterSpacing: "0.08em",
                      padding: "6px 16px",
                      borderRadius: "2px",
                      border: active ? "1px solid transparent" : `1px solid ${GOLD}55`,
                      background: active ? DARK : "transparent",
                      color: active ? "#F0EAD6" : MUTED,
                      cursor: "pointer",
                      transition: "all 0.18s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!active) {
                        e.currentTarget.style.borderColor = GOLD;
                        e.currentTarget.style.color = DARK;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        e.currentTarget.style.borderColor = `${GOLD}55`;
                        e.currentTarget.style.color = MUTED;
                      }
                    }}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Collection grid */}
          <section className={isMobile ? "px-4 pb-16 max-w-6xl mx-auto" : "px-8 pb-16 max-w-6xl mx-auto"}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
            }}>
              {filteredCollection.map((work, i) => (
                <CollectionCard key={work.id} work={work} index={i} />
              ))}
            </div>
          </section>
        </>
      )}

      <Footer />
    </main>
  );
}
