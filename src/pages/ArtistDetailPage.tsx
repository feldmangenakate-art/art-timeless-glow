import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";
import { RENAISSANCE_ARTISTS } from "@/data/artists-renaissance";
import { BAROQUE_ARTISTS } from "@/data/artists-baroque";
import { CENTURY_18_19_ARTISTS } from "@/data/artists-18th-19th";
import { MODERN_ARTISTS } from "@/data/artists-modern";
import { MASTERWORKS } from "@/data/masterworks";

const GOLD = "#C9A84C";
const WARM_WHITE = "#F0EAD6";

const ALL_ARTISTS = [...RENAISSANCE_ARTISTS, ...BAROQUE_ARTISTS, ...CENTURY_18_19_ARTISTS, ...MODERN_ARTISTS];

export default function ArtistDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  const idx = ALL_ARTISTS.findIndex((a) => a.id === id);
  const artist = ALL_ARTISTS[idx];

  if (!artist) {
    return (
      <div style={{ background: "#0F0D0A", minHeight: "100vh", color: WARM_WHITE, display: "flex", alignItems: "center", justifyContent: "center" }} className="pt-16">
        <p>Artist not found.</p>
      </div>
    );
  }

  const prev = idx > 0 ? ALL_ARTISTS[idx - 1] : null;
  const next = idx < ALL_ARTISTS.length - 1 ? ALL_ARTISTS[idx + 1] : null;

  // Find cross-linked masterworks that actually exist in our data
  const linkedWorks = artist.masterworksIds
    .map((mid) => MASTERWORKS.find((m) => m.id === mid))
    .filter(Boolean) as typeof MASTERWORKS;

  const sections = [
    { label: "Biography", icon: "◎", content: artist.biography },
    { label: "Shocking Truth", icon: "✦", content: artist.shockingTruth },
    { label: "Why They Matter", icon: "◈", content: artist.whyTheyMatter },
  ];

  return (
    <div style={{ background: "#0F0D0A", minHeight: "100vh" }} className="pt-16">

      {/* Back nav — fixed */}
      <div style={{ position: "fixed", top: "72px", left: "32px", zIndex: 50 }}>
        <button
          onClick={() => navigate("/artists")}
          className="flex items-center gap-2 transition-colors duration-200"
          style={{ color: `${WARM_WHITE}50`, fontFamily: "'Raleway', system-ui, sans-serif", fontWeight: 300, fontSize: "0.8rem" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
          onMouseLeave={(e) => (e.currentTarget.style.color = `${WARM_WHITE}50`)}
        >
          <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
          Artists
        </button>
      </div>

      {/* Main content */}
      <div className="px-8 py-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:sticky md:top-24 self-start"
          >
            <div style={{
              width: "100%",
              borderRadius: "3px",
              overflow: "hidden",
              background: `${artist.eraColor}15`,
            }}>
              <img
                src={artist.portraitImage}
                alt={artist.name}
                style={{ width: "100%", height: "auto", display: "block" }}
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.style.display = "none";
                  const parent = img.parentElement;
                  if (parent) {
                    parent.style.height = "400px";
                    parent.style.display = "flex";
                    parent.style.flexDirection = "column";
                    parent.style.alignItems = "center";
                    parent.style.justifyContent = "center";
                    parent.style.gap = "12px";
                    parent.innerHTML = `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" style="opacity:0.2"><circle cx="12" cy="8" r="4" stroke="${WARM_WHITE}" stroke-width="1.5"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="${WARM_WHITE}" stroke-width="1.5" stroke-linecap="round"/></svg><span style="font-family:monospace;font-size:9px;text-transform:uppercase;letter-spacing:1.5px;color:rgba(240,234,214,0.25)">Portrait coming soon</span>`;
                  }
                }}
              />
            </div>

            {/* Dates + nationality below portrait */}
            <div className="mt-4 space-y-1.5">
              <p className="font-mono uppercase tracking-widest" style={{ fontSize: "9px", color: `${WARM_WHITE}40` }}>
                {artist.born}
              </p>
              <p className="font-mono uppercase tracking-widest" style={{ fontSize: "9px", color: `${WARM_WHITE}30` }}>
                {artist.died}
              </p>
            </div>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Era + movement */}
            <div className="flex items-center gap-3 flex-wrap">
              <span
                className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5"
                style={{
                  color: artist.eraColor,
                  border: `1px solid ${artist.eraColor}50`,
                  borderRadius: "2px",
                }}
              >
                {artist.era}
              </span>
              <span className="font-mono text-[10px]" style={{ color: `${WARM_WHITE}40` }}>
                {artist.movement}
              </span>
              <span className="font-mono text-[10px]" style={{ color: `${WARM_WHITE}30` }}>
                {artist.nationality}
              </span>
            </div>

            {/* Name */}
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 400,
              fontSize: "3.75rem",
              color: WARM_WHITE,
              lineHeight: 1.0,
              letterSpacing: "0.025em",
              margin: 0,
            }}>
              {artist.name}
            </h1>

            {/* Tagline */}
            <p style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "1rem",
              color: `${WARM_WHITE}60`,
              margin: 0,
              lineHeight: 1.6,
            }}>
              {artist.tagline}
            </p>

            {/* Text sections */}
            <div className="space-y-6">
              {sections.map((section) => (
                <div
                  key={section.label}
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "20px" }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span style={{ color: artist.eraColor, fontSize: "12px" }}>{section.icon}</span>
                    <p
                      className="font-mono uppercase tracking-widest"
                      style={{ fontSize: "9px", color: `${WARM_WHITE}45` }}
                    >
                      {section.label}
                    </p>
                  </div>
                  {section.content.split("\n\n").map((para, pi) => (
                    <p
                      key={pi}
                      style={{
                        fontFamily: "'Raleway', system-ui, sans-serif",
                        fontWeight: 300,
                        fontSize: "0.875rem",
                        lineHeight: 1.8,
                        color: `${WARM_WHITE}CC`,
                        marginBottom: pi < section.content.split("\n\n").length - 1 ? "1rem" : 0,
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Linked Masterworks */}
            {linkedWorks.length > 0 && (
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "20px" }}>
                <div className="flex items-center gap-2 mb-4">
                  <span style={{ color: artist.eraColor, fontSize: "12px" }}>⊞</span>
                  <p
                    className="font-mono uppercase tracking-widest"
                    style={{ fontSize: "9px", color: `${WARM_WHITE}45` }}
                  >
                    Masterworks
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {linkedWorks.map((work) => (
                    <button
                      key={work.id}
                      onClick={() => navigate(`/masterworks/${work.id}`, { state: { from: "artist", artistName: artist.name, artistId: artist.id } })}
                      className="flex items-center gap-3 transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: `1px solid ${artist.eraColor}25`,
                        borderRadius: "3px",
                        padding: "8px 12px",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.07)";
                        (e.currentTarget as HTMLButtonElement).style.borderColor = `${artist.eraColor}60`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.04)";
                        (e.currentTarget as HTMLButtonElement).style.borderColor = `${artist.eraColor}25`;
                      }}
                    >
                      {work.image && (
                        <div style={{ width: "36px", height: "36px", overflow: "hidden", borderRadius: "2px", flexShrink: 0 }}>
                          <img
                            src={work.image}
                            alt={work.title}
                            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                          />
                        </div>
                      )}
                      <div>
                        <p style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: "0.8rem",
                          color: WARM_WHITE,
                          lineHeight: 1.2,
                        }}>
                          {work.title}
                        </p>
                        <p className="font-mono" style={{ fontSize: "8px", color: `${WARM_WHITE}40`, marginTop: "2px" }}>
                          {work.year}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Prev / Next navigation */}
      <div
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: "3rem" }}
        className="px-8 py-6 max-w-6xl mx-auto flex items-center justify-between"
      >
        {prev ? (
          <button
            onClick={() => navigate(`/artists/${prev.id}`)}
            className="flex items-center gap-3 transition-colors duration-200 text-left"
            style={{ color: `${WARM_WHITE}40` }}
            onMouseEnter={(e) => (e.currentTarget.style.color = WARM_WHITE)}
            onMouseLeave={(e) => (e.currentTarget.style.color = `${WARM_WHITE}40`)}
          >
            <ArrowLeft className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
            <div>
              <p className="font-mono uppercase tracking-widest" style={{ fontSize: "8px", marginBottom: "2px", color: "inherit", opacity: 0.6 }}>Previous</p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.9rem", color: "inherit" }}>{prev.name}</p>
            </div>
          </button>
        ) : <div />}

        {next ? (
          <button
            onClick={() => navigate(`/artists/${next.id}`)}
            className="flex items-center gap-3 transition-colors duration-200 text-right"
            style={{ color: `${WARM_WHITE}40` }}
            onMouseEnter={(e) => (e.currentTarget.style.color = WARM_WHITE)}
            onMouseLeave={(e) => (e.currentTarget.style.color = `${WARM_WHITE}40`)}
          >
            <div>
              <p className="font-mono uppercase tracking-widest" style={{ fontSize: "8px", marginBottom: "2px", color: "inherit", opacity: 0.6 }}>Next</p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.9rem", color: "inherit" }}>{next.name}</p>
            </div>
            <ArrowRight className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
          </button>
        ) : <div />}
      </div>
    </div>
  );
}
