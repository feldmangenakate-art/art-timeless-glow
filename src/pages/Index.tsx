import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";
import { CIVILIZATIONS, getTodayInArt, getTodayDetail } from "@/data/civilizations";
import { MASTERWORKS } from "@/data/masterworks";
import { getCurrentFeaturedId } from "@/data/featured-schedule";
import { RENAISSANCE_ARTISTS } from "@/data/artists-renaissance";
import { BAROQUE_ARTISTS } from "@/data/artists-baroque";
import { CENTURY_18_19_ARTISTS } from "@/data/artists-18th-19th";
import { MODERN_ARTISTS } from "@/data/artists-modern";

const GOLD = "#C9A84C";

const NAV_CARDS = [
  { name: "Timeline",    desc: "40,000 years of art history",      path: "/timeline",    accent: "#C9A84C" },
  { name: "Geography",   desc: "Art by place and civilization",     path: "/geography",   accent: "#4A8C6A" },
  { name: "Masterworks", desc: "The most iconic works ever made",   path: "/masterworks", accent: "#A03030" },
  { name: "Artists",     desc: "Lives behind the masterworks",      path: "/artists",     accent: "#3060A0" },
];

type FeaturedItem = { image: string; label: string; title: string; subtitle: string; href: string; imagePosition?: string };

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function NavCard({ name, desc, path, accent }: (typeof NAV_CARDS)[0]) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to={path}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "0.4rem",
        height: 130,
        background: "#FAF8F4",
        borderTop: `2px solid ${accent}`,
        borderRight: "1px solid rgba(201,168,76,0.3)",
        borderBottom: "1px solid rgba(201,168,76,0.3)",
        borderLeft: "1px solid rgba(201,168,76,0.3)",
        borderRadius: 3,
        textDecoration: "none",
        padding: "1rem 1.1rem",
        boxSizing: "border-box",
        transition: "box-shadow 0.22s ease, transform 0.22s ease",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 6px 20px rgba(42,30,16,0.1), inset 0 0 0 1px rgba(201,168,76,0.45)"
          : "0 1px 3px rgba(42,30,16,0.04)",
      } as React.CSSProperties}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "1.25rem", color: "#2A1E10", lineHeight: 1.15 }}>
        {name}
      </span>
      <span style={{ fontFamily: "'Raleway', system-ui, sans-serif", fontStyle: "italic", fontWeight: 300, fontSize: 12, color: "rgba(42,30,16,0.5)", lineHeight: 1.4 }}>
        {desc}
      </span>
    </Link>
  );
}

function FeaturedCard({ image, label, title, subtitle, href, imagePosition }: FeaturedItem) {
  const [hovered, setHovered] = useState(false);
  // Artist cards show portraits — anchor to top so the face is never cropped.
  // Civilization cards use per-entry imagePosition when set (e.g. Roman Empire statue needs "top").
  // Masterwork and Civilization images default to center.
  const objectPosition = imagePosition ?? (label === "Artist" ? "top" : "center");
  return (
    <Link
      to={href}
      style={{
        display: "block",
        textDecoration: "none",
        borderRadius: 3,
        overflow: "hidden",
        border: `1px solid rgba(201,168,76,${hovered ? "0.5" : "0.2"})`,
        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
        boxShadow: hovered ? "0 6px 20px rgba(42,30,16,0.1)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ aspectRatio: "1 / 1", overflow: "hidden" }}>
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition, transition: "transform 0.4s ease", transform: hovered ? "scale(1.04)" : "scale(1)" }}
        />
      </div>
      <div style={{ padding: "1rem 1.25rem 1.25rem", backgroundColor: "#FAF8F4" }}>
        <p style={{ fontFamily: "'Raleway', system-ui, sans-serif", fontWeight: 400, fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: GOLD, marginBottom: "0.4rem" }}>
          {label}
        </p>
        <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 400, fontSize: "1.15rem", color: "#2A1E10", marginBottom: "0.25rem", lineHeight: 1.2 }}>
          {title}
        </h3>
        <p style={{ fontFamily: "'Raleway', system-ui, sans-serif", fontWeight: 300, fontSize: "0.75rem", color: "rgba(42,30,16,0.5)", marginBottom: "0.75rem" }}>
          {subtitle}
        </p>
        <span style={{ fontFamily: "'Raleway', system-ui, sans-serif", fontSize: "0.7rem", letterSpacing: "0.08em", color: GOLD, borderBottom: `1px solid rgba(201,168,76,0.4)` }}>
          Explore &#8594;
        </span>
      </div>
    </Link>
  );
}

function FeaturedWorkOfWeek({ isMobile }: { isMobile: boolean }) {
  const work = MASTERWORKS.find(m => m.id === getCurrentFeaturedId()) ?? MASTERWORKS[0];
  return (
    <div style={{ backgroundColor: "#F5F0E8", paddingBottom: "5rem" }}>
      <section style={{ padding: "0 2rem" }}>
        <p style={{
          fontFamily: "'Raleway', system-ui, sans-serif",
          fontWeight: 400,
          fontSize: "0.6rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(201,168,76,0.65)",
          textAlign: "center",
          marginBottom: "2rem",
        }}>
          Featured Work of the Week
        </p>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          flexDirection: isMobile ? "column" : "row" as React.CSSProperties["flexDirection"],
          background: "#FAF8F4",
          border: "1px solid rgba(201,168,76,0.2)",
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: "0 1px 3px rgba(42,30,16,0.04)",
        }}>
          <div style={{ flexShrink: 0, width: isMobile ? "100%" : "42%", minHeight: isMobile ? 220 : 340 }}>
            <img
              src={work.image}
              alt={work.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
            />
          </div>
          <div style={{ padding: "2.25rem 2.5rem", display: "flex", flexDirection: "column", justifyContent: "center", gap: "0.6rem" }}>
            <p style={{ fontFamily: "'Raleway', system-ui, sans-serif", fontWeight: 400, fontSize: "0.6rem", letterSpacing: "0.14em", textTransform: "uppercase", color: GOLD, marginBottom: "0.25rem" }}>
              {work.era}
            </p>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "2rem", color: "#2A1E10", lineHeight: 1.1, marginBottom: "0.15rem" }}>
              {work.title}
            </h3>
            <p style={{ fontFamily: "'Raleway', system-ui, sans-serif", fontWeight: 300, fontSize: "0.8rem", color: "rgba(42,30,16,0.5)", marginBottom: "0.1rem" }}>
              {work.artist} · {work.year}
            </p>
            <p style={{ fontFamily: "'Raleway', system-ui, sans-serif", fontWeight: 300, fontSize: "0.75rem", color: "rgba(42,30,16,0.4)", marginBottom: "1rem" }}>
              {work.location}
            </p>
            <p style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontStyle: "italic", fontWeight: 400, fontSize: "0.875rem", color: "rgba(42,30,16,0.65)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              {work.whyFamous}
            </p>
            <Link
              to={`/masterworks/${work.id}`}
              style={{ fontFamily: "'Raleway', system-ui, sans-serif", fontSize: "0.7rem", letterSpacing: "0.08em", color: GOLD, textDecoration: "none", borderBottom: "1px solid rgba(201,168,76,0.4)", paddingBottom: "1px", alignSelf: "flex-start" }}
            >
              Explore &#8594;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Index() {
  const isMobile = useIsMobile();
  const todayEvent = getTodayInArt();
  const todayDetail = getTodayDetail();
  const [expanded, setExpanded] = useState(false);
  const now = new Date();
  const formattedDate = now.toLocaleDateString("en-US", { month: "long", day: "numeric" }).toUpperCase();

  const featured = useMemo((): FeaturedItem[] => {
    const ALL_ARTISTS = [...RENAISSANCE_ARTISTS, ...BAROQUE_ARTISTS, ...CENTURY_18_19_ARTISTS, ...MODERN_ARTISTS];
    const work   = pickRandom(MASTERWORKS);
    const artist = pickRandom(ALL_ARTISTS);
    const civ    = pickRandom(CIVILIZATIONS);
    return [
      { image: work.image,           label: "Masterwork",   title: work.title,   subtitle: `${work.artist} · ${work.year}`,               href: `/masterworks/${work.id}` },
      { image: artist.portraitImage, label: "Artist",       title: artist.name,  subtitle: `${artist.nationality} · ${artist.movement}`,  href: `/artists/${artist.id}` },
      { image: civ.image,            label: "Civilization", title: civ.name,     subtitle: `${civ.dates} · ${civ.region}`,                href: `/civilization/${civ.id}`, imagePosition: civ.imagePosition },
    ];
  }, []);

  return (
    <main style={{ minHeight: "100vh" }}>

      {/* Click-outside backdrop for Today panel — sits between page (z≤2) and raised card (z=51) */}
      {expanded && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 50, cursor: "default" }}
          onClick={() => setExpanded(false)}
        />
      )}

      {/* HERO */}
      <section style={{ position: "relative", minHeight: "65vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "5rem 0 4rem" }}>

        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/timeline/birth-of-venus.webp')", backgroundSize: "cover", backgroundPosition: "62% 15%", zIndex: 0 }} />

        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(12,10,7,0.4) 0%, rgba(12,10,7,0.62) 55%, rgba(245,240,232,1) 100%)", zIndex: 1 }} />

        {/* zIndex raised to 51 when expanded so card sits above the z-50 backdrop */}
        <div style={{ position: "relative", zIndex: expanded ? 51 : 2, textAlign: "center", width: "100%", maxWidth: "56rem", padding: isMobile ? "0 1.25rem" : "0 2rem", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center" }}>

          <h1 className="hero-title" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "72px", lineHeight: 1.05, color: "#F0EAD6", letterSpacing: "-0.01em", marginBottom: "0.9rem", textShadow: "0 2px 24px rgba(0,0,0,0.6)", width: "100%" }}>
            Art Through the Ages
          </h1>

          <p style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontStyle: "italic", fontSize: "clamp(0.8rem, 3vw, 1rem)", color: "rgba(240,234,214,0.7)", lineHeight: 1.5, marginBottom: "1.5rem", width: "100%" }}>
            From cave walls to the present &#8212; 40,000 years of human creativity
          </p>

          <div style={{ width: 60, height: 1, background: GOLD, opacity: 0.4, margin: "0 auto 1.5rem" }} />

          {todayEvent && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>

              {/* Pill toggle */}
              <button
                onClick={() => setExpanded((e) => !e)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.3rem 0.9rem",
                  borderRadius: 9999,
                  border: `1px solid rgba(201,168,76,${expanded ? "0.65" : "0.4"})`,
                  background: "rgba(12,10,7,0.45)",
                  backdropFilter: "blur(2px)",
                  cursor: "pointer",
                  transition: "filter 0.2s ease, border-color 0.2s ease",
                  marginBottom: "0.85rem",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.filter = "brightness(1.25)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.filter = "brightness(1)"; }}
              >
                {expanded ? (
                  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 8, height: 8, color: GOLD, fontSize: 11, lineHeight: 1, flexShrink: 0, marginBottom: 1 }}>×</span>
                ) : (
                  <span className="animate-pulse-dot" style={{ display: "inline-block", width: 5, height: 5, borderRadius: "50%", backgroundColor: GOLD, flexShrink: 0 }} />
                )}
                <span style={{ fontFamily: "'Courier New', monospace", fontSize: 8, color: GOLD, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                  {expanded ? "Close" : "Today in Art History"}
                </span>
              </button>

              {/* Short fact — slides up and fades out when expanded */}
              <AnimatePresence mode="wait">
                {!expanded && (
                  <motion.p
                    key="short-fact"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      fontFamily: "'Libre Baskerville', Georgia, serif",
                      fontStyle: "italic",
                      fontSize: "0.8rem",
                      color: "rgba(240,234,214,0.65)",
                      lineHeight: 1.6,
                      maxWidth: "34rem",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    {todayEvent}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Expanded panel — slides down */}
              <AnimatePresence>
                {expanded && (
                  <motion.div
                    key="expanded-panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ overflow: "hidden", width: "100%" }}
                  >
                    <div style={{
                      background: "rgba(12,10,7,0.72)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(201,168,76,0.2)",
                      borderRadius: 4,
                      padding: isMobile ? "1.25rem 1rem" : "1.75rem 2.5rem",
                      maxWidth: "44rem",
                      width: "100%",
                      boxSizing: "border-box",
                      margin: "0 auto",
                      textAlign: "center",
                    }}>

                      {/* Historical date */}
                      <p style={{
                        fontFamily: "'Courier New', monospace",
                        fontSize: "9px",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: GOLD,
                        margin: "0 0 0.75rem",
                      }}>
                        {todayDetail?.date ?? formattedDate}
                      </p>

                      {/* Title */}
                      <h2 style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontStyle: "italic",
                        fontWeight: 700,
                        fontSize: "clamp(1.15rem, 3vw, 1.6rem)",
                        color: "#F0EAD6",
                        lineHeight: 1.2,
                        margin: "0 0 0.75rem",
                        textShadow: "0 1px 8px rgba(0,0,0,0.5)",
                      }}>
                        {todayDetail?.title ?? "Today in Art History"}
                      </h2>

                      {/* Gold rule */}
                      <div style={{ width: 36, height: 1, background: GOLD, opacity: 0.35, margin: "0 auto 1.25rem" }} />

                      {/* Body paragraphs */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", textAlign: "left" }}>
                        {(todayDetail?.body ?? [todayEvent]).map((para, i) => (
                          <p key={i} style={{
                            fontFamily: "'Raleway', system-ui, sans-serif",
                            fontWeight: 300,
                            fontSize: "0.8rem",
                            lineHeight: 1.8,
                            color: "rgba(240,234,214,0.82)",
                            margin: 0,
                          }}>
                            {para}
                          </p>
                        ))}
                      </div>

                      {/* Related link */}
                      {todayDetail?.relatedWorkId && (
                        <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid rgba(201,168,76,0.15)", textAlign: "center" }}>
                          <Link
                            to={`/masterworks/${todayDetail.relatedWorkId}`}
                            style={{
                              fontFamily: "'Raleway', system-ui, sans-serif",
                              fontSize: "0.7rem",
                              letterSpacing: "0.1em",
                              color: GOLD,
                              textDecoration: "none",
                              borderBottom: "1px solid rgba(201,168,76,0.4)",
                              paddingBottom: "1px",
                            }}
                          >
                            Explore the work &#8594;
                          </Link>
                        </div>
                      )}

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          )}

        </div>
      </section>

      {/* ABOVE-FOLD CARDS — 35vh */}
      <div style={{ backgroundColor: "#F5F0E8", padding: isMobile ? "28px 16px 20px" : "28px 40px 20px", display: "flex", flexDirection: "column", alignItems: "center", boxSizing: "border-box" }}>

        <div style={{ width: "100%", maxWidth: "72rem", display: "grid", gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)", gap: "16px" }}>
          {NAV_CARDS.map((card) => (
            <NavCard key={card.path} {...card} />
          ))}
        </div>

        <p style={{ marginTop: "16px", fontFamily: "'Raleway', system-ui, sans-serif", fontWeight: 400, fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(42,30,16,0.3)" }}>
          &#8595; scroll to explore
        </p>

      </div>

      {/* FEATURED — below the fold */}
      <div style={{ backgroundColor: "#F5F0E8" }}>
        <section style={{ padding: isMobile ? "0.75rem 1rem 2rem" : "0.75rem 2rem 2rem" }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 700, fontSize: "1.9rem", color: "rgba(42,30,16,0.45)", textAlign: "center", marginBottom: "2.75rem" }}>
            Where would you like to begin?
          </h2>
          <div style={{ maxWidth: "64rem", margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "1.5rem" }}>
            {featured.map((item) => (
              <FeaturedCard key={item.href} {...item} />
            ))}
          </div>
        </section>
      </div>

      {/* EDITORIAL STATEMENT */}
      <div style={{ backgroundColor: "#F5F0E8" }}>
        <section style={{ padding: "2rem 2rem 3.5rem", textAlign: "center" }}>
          <p style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            color: "rgba(42,30,16,0.7)",
            lineHeight: 1.65,
            maxWidth: "36rem",
            margin: "0 auto",
          }}>
            Every great painting holds a world.<br />
            This is your guide to all of them.
          </p>
        </section>
      </div>

      {/* FEATURED WORK OF THE WEEK */}
      <FeaturedWorkOfWeek isMobile={isMobile} />

      <Footer />
    </main>
  );
}
