import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";
import { MASTERWORKS } from "@/data/masterworks";

const GOLD = "#C9A84C";
const WARM_WHITE = "#F0EAD6";

export default function MasterworkDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const idx = MASTERWORKS.findIndex((m) => m.id === id);
  const work = MASTERWORKS[idx];

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

      {/* Back nav — fixed so always visible while scrolling */}
      <div style={{ position: "fixed", top: "72px", left: "32px", zIndex: 50 }}>
        <button
          onClick={() => navigate("/masterworks")}
          className="flex items-center gap-2 transition-colors duration-200"
          style={{ color: `${WARM_WHITE}50`, fontFamily: "'Raleway', system-ui, sans-serif", fontWeight: 300, fontSize: "0.8rem" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
          onMouseLeave={(e) => (e.currentTarget.style.color = `${WARM_WHITE}50`)}
        >
          <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
          Masterworks
        </button>
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
              <span
                className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5"
                style={{
                  color: work.eraColor,
                  border: `1px solid ${work.eraColor}50`,
                  borderRadius: "2px",
                }}
              >
                {work.era}
              </span>
              <span className="font-mono text-[10px]" style={{ color: `${WARM_WHITE}40` }}>
                {work.year}
              </span>
            </div>

            {/* Title */}
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              color: WARM_WHITE,
              lineHeight: 1.1,
              letterSpacing: "0.01em",
              margin: 0,
            }}>
              {work.title}
            </h1>

            {/* Artist */}
            <p style={{
              fontFamily: "'Raleway', system-ui, sans-serif",
              fontWeight: 300,
              fontSize: "1rem",
              color: `${WARM_WHITE}70`,
              margin: 0,
            }}>
              {work.artist}
            </p>

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
