import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MASTERWORKS } from "@/data/masterworks";

const GOLD = "#C9A84C";
const DARK = "#2A1E10";
const MUTED = "rgba(42,30,16,0.45)";

export default function MasterworksPage() {
  const navigate = useNavigate();

  return (
    <main style={{ background: "#EDE8DF", minHeight: "100vh" }} className="pt-16">

      {/* Header */}
      <section className="px-8 pt-10 pb-4 max-w-6xl mx-auto text-center">
        <button
          onClick={() => navigate("/")}
          className="font-mono uppercase tracking-widest mb-6 block transition-colors duration-200"
          style={{ fontSize: "9px", color: MUTED, letterSpacing: "0.15em" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
          onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
        >
          ← Home
        </button>
        <h1 className="font-display text-6xl tracking-wide" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, color: DARK, marginBottom: "1.25rem", lineHeight: 1.0 }}>
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
          {MASTERWORKS.length} works · from ancient Egypt to the present day
        </p>
      </section>

      {/* Gold divider */}
      <div style={{
        height: "1px",
        background: "linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent)",
        margin: "0 2rem 1.5rem",
      }} />


      {/* Grid */}
      <section className="px-8 pb-16 max-w-6xl mx-auto">
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
              <div style={{ height: "200px", overflow: "hidden", background: `${work.eraColor}18`, position: "relative" }}>
                <img
                  src={work.image}
                  alt={work.title}
                  loading="lazy"
                  width={360}
                  height={200}
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
    </main>
  );
}
