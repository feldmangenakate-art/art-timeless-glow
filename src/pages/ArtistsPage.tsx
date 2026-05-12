import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { RENAISSANCE_ARTISTS } from "@/data/artists-renaissance";
import { BAROQUE_ARTISTS } from "@/data/artists-baroque";
import { CENTURY_18_19_ARTISTS } from "@/data/artists-18th-19th";
import { MODERN_ARTISTS } from "@/data/artists-modern";

const GOLD = "#C9A84C";
const DARK = "#2A1E10";
const MUTED = "rgba(42,30,16,0.45)";

const ALL_ARTISTS = [...RENAISSANCE_ARTISTS, ...BAROQUE_ARTISTS, ...CENTURY_18_19_ARTISTS, ...MODERN_ARTISTS];

export default function ArtistsPage() {
  const navigate = useNavigate();

  return (
    <main style={{ background: "#EDE8DF", minHeight: "100vh" }} className="pt-16">

      {/* Header */}
      <section className="px-8 pt-8 pb-4 max-w-6xl mx-auto text-center">
        <h1 className="font-display text-6xl tracking-wide" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, color: DARK, marginBottom: "1.25rem", lineHeight: 1.0 }}>
          Artists
        </h1>
        <p style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: 400,
          fontStyle: "italic",
          fontSize: "16px",
          color: "#8a7a6a",
          lineHeight: 1.5,
        }}>
          {ALL_ARTISTS.length} artists · the lives behind the masterworks
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
          {ALL_ARTISTS.map((artist, i) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={{ y: -3 }}
              onClick={() => navigate(`/artists/${artist.id}`)}
              className="cursor-pointer overflow-hidden"
              style={{
                background: "#F8F4EE",
                borderRadius: "3px",
                borderTop: `2px solid ${artist.eraColor}`,
                boxShadow: "0 1px 4px rgba(42,30,16,0.07)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 6px 20px rgba(42,30,16,0.12), 0 0 0 1px ${artist.eraColor}30`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 4px rgba(42,30,16,0.07)";
              }}
            >
              {/* Portrait */}
              <div style={{ height: "320px", overflow: "hidden", background: `${artist.eraColor}18`, position: "relative" }}>
                <img
                  src={artist.portraitImage}
                  alt={artist.name}
                  loading="lazy"
                  width={360}
                  height={320}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: (({
                      "rembrandt": "center 10%",
                      "velazquez": "center 10%",
                      "rubens": "center 10%",
                    } as Record<string, string>)[artist.id] ?? "center 15%"),
                    opacity: 0.9,
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
                      parent.innerHTML = `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" style="opacity:0.18"><circle cx="12" cy="8" r="4" stroke="rgba(42,30,16,0.6)" stroke-width="1.5"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="rgba(42,30,16,0.6)" stroke-width="1.5" stroke-linecap="round"/></svg><span style="font-family:monospace;font-size:8px;text-transform:uppercase;letter-spacing:1.5px;color:rgba(42,30,16,0.3)">Portrait coming soon</span>`;
                    }
                  }}
                />
              </div>

              {/* Info */}
              <div style={{ padding: "14px 16px 18px", background: "#F5F0E8" }}>
                <p className="font-mono uppercase tracking-widest mb-1.5" style={{ fontSize: "8px", color: GOLD }}>
                  {artist.movement}
                </p>
                <h3 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: DARK,
                  lineHeight: 1.25,
                  marginBottom: "6px",
                }}>
                  {artist.name}
                </h3>
                <p style={{
                  fontFamily: "'Raleway', system-ui, sans-serif",
                  fontWeight: 300,
                  fontSize: "0.78rem",
                  color: MUTED,
                  lineHeight: 1.5,
                  marginBottom: "8px",
                }}>
                  {artist.tagline}
                </p>
                <p className="font-mono" style={{ fontSize: "9px", color: "rgba(42,30,16,0.35)" }}>
                  {artist.born.split("·")[0].trim()} – {artist.died.split("·")[0].trim()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
