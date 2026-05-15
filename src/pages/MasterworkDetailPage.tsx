import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";
import { MASTERWORKS } from "@/data/masterworks";
import { RENAISSANCE_ARTISTS } from "@/data/artists-renaissance";
import { BAROQUE_ARTISTS } from "@/data/artists-baroque";
import { CENTURY_18_19_ARTISTS } from "@/data/artists-18th-19th";
import { MODERN_ARTISTS } from "@/data/artists-modern";

const ALL_ARTISTS = [...RENAISSANCE_ARTISTS, ...BAROQUE_ARTISTS, ...CENTURY_18_19_ARTISTS, ...MODERN_ARTISTS];

const GOLD = "#C9A84C";
const WARM_WHITE = "#F0EAD6";

export default function MasterworkDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const idx = MASTERWORKS.findIndex((m) => m.id === id);
  const work = MASTERWORKS[idx];

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  const locationState = location.state as { from?: string; artistName?: string; artistId?: string } | null;
  const cameFromArtist = locationState?.from === "artist";
  const cameFromMasterworks = locationState?.from === "masterworks";

  // Find the artist associated with this work (for secondary link)
  const associatedArtist = ALL_ARTISTS.find((a) => a.masterworksIds.includes(id ?? ""));

  if (!work) {
    return (
      <div style={{ background: "#0F0D0A", minHeight: "100vh", color: WARM_WHITE, display: "flex", alignItems: "center", justifyContent: "center" }} className="pt-16">
        <p>Artwork not found.</p>
      </div>
    );
  }

  const prev = idx > 0 ? MASTERWORKS[idx - 1] : null;
  const next = idx < MASTERWORKS.length - 1 ? MASTERWORKS[idx + 1] : null;

  const pillars = [
    { label: "Why It Endures", icon: "◎", content: work.whyFamous },
    { label: "The Story Behind It", icon: "✦", content: work.fascinatingFact },
    { label: "What You're Looking At", icon: "◈", content: work.iconography },
    { label: "How It's Made", icon: "⊞", content: work.formalDescription },
  ];

  return (
    <div style={{ background: "#0F0D0A", minHeight: "100vh" }} className="pt-16">

      {/* Breadcrumb nav — fixed so always visible while scrolling */}
      <div style={{ position: "fixed", top: "72px", left: "32px", zIndex: 50 }}>
        {/* Primary: always Back to Masterworks */}
        <button
          onClick={() => navigate("/masterworks")}
          className="flex items-center gap-2 transition-colors duration-200"
          style={{ color: `${WARM_WHITE}50`, fontFamily: "'Raleway', system-ui, sans-serif", fontWeight: 300, fontSize: "0.8rem" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
          onMouseLeave={(e) => (e.currentTarget.style.color = `${WARM_WHITE}50`)}
        >
          <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
          Back to Masterworks
        </button>

        {/* Secondary: Back to Artist — only if navigated from an artist page */}
        {cameFromArtist && (
          <button
            onClick={() => navigate(`/artists/${locationState?.artistId}`)}
            style={{
              display: "block",
              marginTop: "4px",
              fontFamily: "'Raleway', system-ui, sans-serif",
              fontSize: "11px",
              fontWeight: 300,
              letterSpacing: "0.08em",
              color: `${WARM_WHITE}28`,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = `${WARM_WHITE}55`)}
            onMouseLeave={(e) => (e.currentTarget.style.color = `${WARM_WHITE}28`)}
          >
            ← Back to {locationState?.artistName}
          </button>
        )}
      </div>

      {/* Main content */}
      <div className="px-8 py-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:sticky md:top-24 self-start"
          >
            <div
              style={{
                width: "100%",
                borderRadius: "3px",
                overflow: "hidden",
                background: `${work.eraColor}15`,
              }}
            >
              <img
                src={work.image}
                alt={work.title}
                style={{ width: "100%", height: "auto", display: "block" }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>

            {/* Location + medium below image */}
            <div className="mt-4 space-y-1">
              <p className="font-mono uppercase tracking-widest" style={{ fontSize: "9px", color: `${WARM_WHITE}40` }}>
                {work.location}
              </p>
              <p className="font-mono uppercase tracking-widest" style={{ fontSize: "9px", color: `${WARM_WHITE}30` }}>
                {work.medium}
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
            {/* Era + year */}
            <div className="flex items-center gap-3 flex-wrap">
              <Link
                to={`/timeline#${work.civilizationId}`}
                className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5"
                style={{
                  color: work.eraColor,
                  border: `1px solid ${work.eraColor}50`,
                  borderRadius: "2px",
                  textDecoration: "none",
                  transition: "border-color 0.2s, background-color 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = work.eraColor; (e.currentTarget as HTMLElement).style.backgroundColor = `${work.eraColor}12`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${work.eraColor}50`; (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
              >
                {work.era}
              </Link>
              <span className="font-mono text-[10px]" style={{ color: `${WARM_WHITE}40` }}>
                {work.year}
              </span>
            </div>

            {/* Title */}
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "3.75rem",
              color: WARM_WHITE,
              lineHeight: 1.0,
              letterSpacing: "0.025em",
              margin: 0,
            }}>
              {work.title}
            </h1>

            {/* Artist */}
            {work.artistId ? (
              <Link
                to={`/artists/${work.artistId}`}
                style={{
                  fontFamily: "'Raleway', system-ui, sans-serif",
                  fontWeight: 300,
                  fontSize: "1rem",
                  color: `${GOLD}99`,
                  textDecoration: "none",
                  display: "block",
                  margin: 0,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = GOLD; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = `${GOLD}99`; }}
              >
                {work.artist}
              </Link>
            ) : (
              <p style={{
                fontFamily: "'Raleway', system-ui, sans-serif",
                fontWeight: 300,
                fontSize: "1rem",
                color: `${WARM_WHITE}70`,
                margin: 0,
              }}>
                {work.artist}
              </p>
            )}

            {/* 4 Pillars */}
            <div className="space-y-6">
              {pillars.map((pillar) => (
                <div
                  key={pillar.label}
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "20px" }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span style={{ color: work.eraColor, fontSize: "12px" }}>{pillar.icon}</span>
                    <p
                      className="font-mono uppercase tracking-widest"
                      style={{ fontSize: "9px", color: `${WARM_WHITE}45` }}
                    >
                      {pillar.label}
                    </p>
                  </div>
                  <p style={{
                    fontFamily: "'Raleway', system-ui, sans-serif",
                    fontWeight: 300,
                    fontSize: "0.875rem",
                    lineHeight: 1.75,
                    color: `${WARM_WHITE}CC`,
                  }}>
                    {pillar.content}
                  </p>
                </div>
              ))}
            </div>
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
            onClick={() => navigate(`/masterworks/${prev.id}`)}
            className="flex items-center gap-3 transition-colors duration-200 text-left"
            style={{ color: `${WARM_WHITE}40` }}
            onMouseEnter={(e) => (e.currentTarget.style.color = WARM_WHITE)}
            onMouseLeave={(e) => (e.currentTarget.style.color = `${WARM_WHITE}40`)}
          >
            <ArrowLeft className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
            <div>
              <p className="font-mono uppercase tracking-widest" style={{ fontSize: "8px", marginBottom: "2px", color: "inherit", opacity: 0.6 }}>Previous</p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.9rem", color: "inherit" }}>{prev.title}</p>
            </div>
          </button>
        ) : <div />}

        {next ? (
          <button
            onClick={() => navigate(`/masterworks/${next.id}`)}
            className="flex items-center gap-3 transition-colors duration-200 text-right"
            style={{ color: `${WARM_WHITE}40` }}
            onMouseEnter={(e) => (e.currentTarget.style.color = WARM_WHITE)}
            onMouseLeave={(e) => (e.currentTarget.style.color = `${WARM_WHITE}40`)}
          >
            <div>
              <p className="font-mono uppercase tracking-widest" style={{ fontSize: "8px", marginBottom: "2px", color: "inherit", opacity: 0.6 }}>Next</p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.9rem", color: "inherit" }}>{next.title}</p>
            </div>
            <ArrowRight className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
          </button>
        ) : <div />}
      </div>
    </div>
  );
}
