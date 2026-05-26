import { useParams, useNavigate, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import Footer from "@/components/Footer";
import { collectionWorks } from "@/data/collection";

const GOLD       = "#C9A84C";
const WARM_WHITE = "#F0EAD6";

export default function CollectionDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const locationState = location.state as {
    from?: string;
    movementId?: string;
    movementName?: string;
    artistId?: string;
    artistName?: string;
  } | null;
  const cameFromMovement = locationState?.from === "movement";
  const cameFromArtist = locationState?.from === "artist";

  const work = collectionWorks.find((w) => w.id === id) ?? null;
  const isMobile = useIsMobile();

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!work) {
    return (
      <div
        style={{ background: "#0F0D0A", minHeight: "100vh", color: WARM_WHITE, display: "flex", alignItems: "center", justifyContent: "center" }}
        className="pt-16"
      >
        <p style={{ fontFamily: "'Raleway', system-ui, sans-serif", fontWeight: 300 }}>
          Work not found.
        </p>
      </div>
    );
  }

  return (
    <div style={{ background: "#0F0D0A", minHeight: "100vh" }} className="pt-16">

      {/* Breadcrumb */}
      <div style={{ position: "fixed", top: isMobile ? "62px" : "72px", left: isMobile ? "16px" : "32px", zIndex: 50 }}>
        {/* Primary: always back to Collection */}
        <button
          onClick={() => navigate("/masterworks?tab=collection")}
          className="flex items-center gap-2 transition-colors duration-200"
          style={{
            color: `${WARM_WHITE}50`,
            fontFamily: "'Raleway', system-ui, sans-serif",
            fontWeight: 300,
            fontSize: "0.8rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = GOLD)}
          onMouseLeave={(e) => (e.currentTarget.style.color = `${WARM_WHITE}50`)}
        >
          <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
          Collection
        </button>


{/* Secondary: back to movement — only if navigated from a movement page */}
        {cameFromMovement && (
          <button
            onClick={() => navigate(`/movement/${locationState?.movementId}`)}
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
            ← Back to {locationState?.movementName}
          </button>
        )}
      </div>

      {/* Main content */}
      <div className={isMobile ? "px-4 py-6 max-w-6xl mx-auto" : "px-8 py-8 max-w-6xl mx-auto"}>
        <div className={`grid grid-cols-1 md:grid-cols-2 ${isMobile ? "gap-6" : "gap-12"}`}>

          {/* Left: Image */}
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
              background: `${work.eraColor}15`,
              minHeight: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <img
                src={work.image}
                alt={work.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.display = "none";
                  const parent = el.parentElement;
                  if (parent) {
                    parent.style.background = `${work.eraColor}20`;
                    const label = document.createElement("span");
                    label.textContent = work.era;
                    label.style.cssText = `
                      font-family: 'Raleway', system-ui, sans-serif;
                      font-size: 10px;
                      letter-spacing: 0.15em;
                      text-transform: uppercase;
                      color: ${WARM_WHITE}40;
                    `;
                    parent.appendChild(label);
                  }
                }}
              />
            </div>

            {/* Location + medium */}
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
            {/* Era tag + year */}
            <div className="flex items-center gap-3 flex-wrap">
              {work.civilizationId ? (
                <Link
                  to="/timeline"
                  state={{ civilizationId: work.civilizationId }}
                  style={{
                    fontFamily: "'Raleway', system-ui, sans-serif",
                    fontWeight: 600,
                    fontSize: "9px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: work.eraColor,
                    border: `1px solid ${work.eraColor}50`,
                    borderRadius: "2px",
                    padding: "3px 8px",
                    textDecoration: "none",
                    transition: "border-color 0.2s, background-color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = work.eraColor;
                    (e.currentTarget as HTMLElement).style.backgroundColor = `${work.eraColor}12`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${work.eraColor}50`;
                    (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  }}
                >
                  {work.era}
                </Link>
              ) : (
                <span style={{
                  fontFamily: "'Raleway', system-ui, sans-serif",
                  fontWeight: 600,
                  fontSize: "9px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: work.eraColor,
                  border: `1px solid ${work.eraColor}50`,
                  borderRadius: "2px",
                  padding: "3px 8px",
                }}>
                  {work.era}
                </span>
              )}

              <span className="font-mono" style={{ fontSize: "10px", color: `${WARM_WHITE}40` }}>
                {work.year}
              </span>
            </div>

            {/* Title */}
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: WARM_WHITE,
              lineHeight: 1.05,
              letterSpacing: "0.02em",
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

            {/* Caption */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "24px" }}>
              <p style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "1.1rem",
                lineHeight: 1.85,
                color: `${WARM_WHITE}CC`,
              }}>
                {work.caption}
              </p>
            </div>

            {/* Location + medium (repeated in body for mobile) */}
            <div
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "20px" }}
              className="md:hidden"
            >
              <p className="font-mono uppercase tracking-widest" style={{ fontSize: "9px", color: `${WARM_WHITE}40`, marginBottom: "4px" }}>
                {work.location}
              </p>
              <p className="font-mono uppercase tracking-widest" style={{ fontSize: "9px", color: `${WARM_WHITE}30` }}>
                {work.medium}
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
