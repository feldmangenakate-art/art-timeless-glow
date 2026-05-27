import { useEffect, useRef, useState, type ReactNode } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import StickyBreadcrumb from "@/components/StickyBreadcrumb";
import { CIVILIZATIONS } from "@/data/civilizations";
import { RENAISSANCE_MOVEMENTS } from "@/data/renaissance-content";
import { ANCIENT_MOVEMENTS } from "@/data/ancient-content";
import { BAROQUE_MOVEMENTS } from "@/data/baroque-content";
import { IMPRESSIONISM_MOVEMENTS } from "@/data/impressionism-content";
import { MODERN_MOVEMENTS } from "@/data/impressionism-modern-content";
import { MEDIEVAL_MOVEMENTS } from "@/data/medieval-content";
import RenaissanceMiniTimeline from "@/components/RenaissanceMiniTimeline";
import CivMiniTimeline from "@/components/CivMiniTimeline";
import TimelineButton from "@/components/TimelineButton";
import { MASTERWORKS } from "@/data/masterworks";
import { collectionWorks } from "@/data/collection";

const DARK = "#2A1E10";
const GOLD = "#C9A84C";
const MUTED = "rgba(42,30,16,0.45)";

const toSlug = (name: string) =>
  name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

const ARTIST_PORTRAITS: Record<string, string> = {
  "leonardo-da-vinci":      "/artists/leonardo.jpg",
  "michelangelo":           "/artists/michelangelo.jpg",
  "raphael":                "/artists/raphael.jpg",
  "titian":                 "/artists/titian.jpg",
  "albrecht-durer":         "/artists/durer.jpg",
  "caravaggio":             "/artists/caravaggio.jpg",
  "artemisia-gentileschi":  "/artists/artemisia.jpg",
  "rembrandt":              "/artists/rembrandt.jpg",
  "vermeer":                "/artists/vermeer.jpg",
  "claude-monet":           "/artists/monet.jpg",
  "vincent-van-gogh":       "/artists/van-gogh.jpg",
  "pablo-picasso":          "/artists/picasso.jpg",
  "salvador-dali":          "/artists/dali.jpg",
  "frida-kahlo":            "/artists/kahlo.jpg",
  "andy-warhol":            "/artists/warhol.jpg",
};

const WORK_IMAGES: Record<string, string> = {
  "sistine-ceiling":        "/timeline/sistine-ceiling.webp",
  "birth-of-venus":         "/timeline/birth-of-venus.webp",
  "creation-of-adam":       "/timeline/creation-of-adam.webp",
  "mona-lisa":              "/timeline/mona-lisa.webp",
  "school-of-athens":       "/timeline/school-of-athens.webp",
  "self-portrait-durer":    "/timeline/self-portrait-durer.webp",
  "venus-of-urbino":        "/timeline/venus-of-urbino.webp",
  "calling-saint-matthew":  "/timeline/calling-saint-matthew.webp",
  "judith-holofernes":      "/timeline/judith-holofernes.webp",
  "night-watch":            "/timeline/night-watch.webp",
  "girl-pearl-earring":     "/timeline/girl-pearl-earring.webp",
  "anatomy-lesson":         "/timeline/anatomy-lesson.webp",
  "water-lilies":           "/timeline/water-lilies.webp",
  "moulin-galette":         "/timeline/moulin-galette.webp",
  "dance-class":            "/timeline/dance-class.webp",
  "starry-night":           "/timeline/starry-night.webp",
  "sunflowers":             "/timeline/sunflowers.webp",
  "grande-jatte":           "/timeline/grande-jatte.webp",
  "card-players":           "/timeline/card-players.webp",
  "the-scream":             "/timeline/the-scream.webp",
  "the-kiss-klimt":         "/timeline/the-kiss-klimt.webp",
  "third-of-may":           "/timeline/third-of-may.webp",
  "bar-at-folies":          "/timeline/bar-at-folies.webp",
  "demoiselles-avignon":    "/timeline/demoiselles-avignon.webp",
  "the-dance-matisse":      "/timeline/the-dance-matisse.webp",
  "persistence-of-memory":  "/timeline/persistence-of-memory.webp",
  "guernica":               "/timeline/guernica.webp",
  "two-fridas":             "/timeline/two-fridas.webp",
  "campbells-soup":         "/timeline/campbells-soup.webp",
  "marilyn-diptych":        "/timeline/marilyn-diptych.webp",
  "nighthawks":             "/timeline/nighthawks.webp",
};

// ── Helpers ────────────────────────────────────────────────────────────────

function resolveWorkRoute(id: string): string {
  if (MASTERWORKS.find((m) => m.id === id)) return `/masterworks/${id}`;
  if (collectionWorks.find((c) => c.id === id)) return `/collection/${id}`;
  return `/masterworks/${id}`;
}

function lookupWorkMeta(id: string): { artist: string; year: string } | null {
  const mw = MASTERWORKS.find((m) => m.id === id);
  if (mw) return { artist: mw.artist, year: mw.year };
  const cw = collectionWorks.find((c) => c.id === id);
  if (cw) return { artist: cw.artist, year: cw.year };
  return null;
}

// ── Normalised movement type (shared fields across all content interfaces) ─

type NormalisedMovement = {
  id: string;
  name: string;
  dates: string;
  parentCivilization: string;
  parentId: string;
  color: string;
  tagline: string;
  heroWork?: string;
  heroImage?: string;
  theMovement: string;
  whatItBroke: string;
  whatItInvented: string;
  historicalContext: string;
  keyArtists: { id: string; name: string; contribution: string }[];
  keyWorks: { id: string; title: string; why: string }[];
  prevMovement: { id: string; name: string } | null;
  nextMovement: { id: string; name: string } | null;
};

// ── Shared rich layout ─────────────────────────────────────────────────────

function RichLayout({
  mc,
  miniTimeline,
  keyArtistsNode,
  slideStyle,
  navigate,
}: {
  mc: NormalisedMovement;
  miniTimeline: ReactNode;
  keyArtistsNode: ReactNode;
  slideStyle: React.CSSProperties;
  navigate: ReturnType<typeof useNavigate>;
}) {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-56px 0px 0px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [mc.id]);

  const heroImage =
    mc.heroImage ??
    (mc.heroWork ? WORK_IMAGES[mc.heroWork] : undefined) ??
    (mc.keyWorks[0]?.id ? WORK_IMAGES[mc.keyWorks[0].id] : undefined);

  const sections = [
    { label: "The Movement",       text: mc.theMovement },
    { label: "What It Broke",      text: mc.whatItBroke },
    { label: "What It Invented",   text: mc.whatItInvented },
    { label: "Historical Context", text: mc.historicalContext },
  ];

  const movStickyLeft = (
    <>
      <button
        onClick={() => navigate("/timeline", { state: { civilizationId: mc.parentId } })}
        style={{ color: DARK, fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", gap: "6px" }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
        {mc.parentCivilization}
      </button>
      <span style={{ color: "rgba(42,30,16,0.30)", fontSize: "0.75rem" }}>·</span>
      <button
        onClick={() => navigate("/timeline")}
        style={{ color: "rgba(42,30,16,0.40)", fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.72rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}
        onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(42,30,16,0.40)")}
      >
        Timeline
      </button>
      <span style={{ color: "rgba(42,30,16,0.20)", fontSize: "0.72rem" }}>/</span>
      <button
        onClick={() => navigate("/geography")}
        style={{ color: "rgba(42,30,16,0.40)", fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.72rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}
        onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(42,30,16,0.40)")}
      >
        Geography
      </button>
    </>
  );

  return (
    <div style={{ background: "#EDE8DF", minHeight: "100vh", ...slideStyle }} className="pt-16">

      {/* Breadcrumb */}
      <div className="max-w-3xl mx-auto px-8 pt-10 pb-3">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button
            onClick={() => navigate("/timeline", { state: { civilizationId: mc.parentId } })}
            style={{ color: DARK, fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", gap: "6px" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
            {mc.parentCivilization}
          </button>
          <span style={{ color: "rgba(42,30,16,0.30)", fontSize: "0.75rem" }}>·</span>
          <button
            onClick={() => navigate("/timeline")}
            style={{ color: "rgba(42,30,16,0.40)", fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.72rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(42,30,16,0.40)")}
          >
            Timeline
          </button>
          <span style={{ color: "rgba(42,30,16,0.20)", fontSize: "0.72rem" }}>/</span>
          <button
            onClick={() => navigate("/geography")}
            style={{ color: "rgba(42,30,16,0.40)", fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.72rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(42,30,16,0.40)")}
          >
            Geography
          </button>
        </div>
      </div>

      {/* Civilization context strip */}
      <div style={{
        background: "#F0EAD8",
        borderTop: "1px solid rgba(201,168,76,0.18)",
        borderBottom: "1px solid rgba(201,168,76,0.18)",
      }}>
        <div className="max-w-3xl mx-auto px-8 py-2">
          <button
            onClick={() => navigate(`/civilization/${mc.parentId}`)}
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
              fontSize: "10px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: GOLD,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Part of: {mc.parentCivilization}
            <ChevronRight className="w-3 h-3" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Hero banner */}
      <div
        ref={heroRef}
        style={{
          height: "350px",
          position: "relative",
          overflow: "hidden",
          background: "#1a1208",
        }}
      >
        {heroImage && (
          <img
            src={heroImage}
            alt={mc.name}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              opacity: 0.85,
            }}
          />
        )}
        {/* Dark overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))",
        }} />

        {/* Date badge — top left */}
        <div style={{ position: "absolute", top: "20px", left: "28px" }}>
          <span
            className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5"
            style={{
              color: "rgba(255,255,255,0.85)",
              border: "1px solid rgba(255,255,255,0.38)",
              borderRadius: "2px",
            }}
          >
            {mc.dates}
          </span>
        </div>

        {/* Centered name + tagline */}
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 2rem",
          textAlign: "center",
        }}>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            color: "#ffffff",
            lineHeight: 1.05,
            marginBottom: "0.8rem",
            letterSpacing: "0.02em",
            textShadow: "0 2px 14px rgba(0,0,0,0.45)",
          }}>
            {mc.name}
          </h1>
          <p style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(0.9rem, 1.8vw, 1.1rem)",
            color: "rgba(255,255,255,0.82)",
            lineHeight: 1.5,
            maxWidth: "580px",
            textShadow: "0 1px 6px rgba(0,0,0,0.4)",
          }}>
            {mc.tagline}
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-8 py-10">

        {/* Mini timeline */}
        {miniTimeline}

        {/* Colored divider */}
        <div style={{ height: "1px", background: `linear-gradient(to right, ${mc.color}50, transparent)`, marginBottom: "2.5rem" }} />

        {/* 4 text sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {sections.map((s) => (
            <div key={s.label}>
              <p className="font-mono uppercase tracking-widest mb-3" style={{ fontSize: "9px", color: MUTED }}>
                {s.label}
              </p>
              {s.text.split("\n\n").map((para, i, arr) => (
                <p key={i} style={{
                  fontFamily: "'Raleway', system-ui, sans-serif",
                  fontWeight: 300,
                  fontSize: "0.875rem",
                  lineHeight: 1.75,
                  color: "rgba(42,30,16,0.7)",
                  marginBottom: i < arr.length - 1 ? "0.75rem" : 0,
                }}>
                  {para.trim()}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Closing insight */}
        <div style={{ padding: "3.5rem 0 3rem", textAlign: "center" }}>
          <p style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(1.2rem, 2.5vw, 1.55rem)",
            color: GOLD,
            lineHeight: 1.45,
            maxWidth: "520px",
            margin: "0 auto",
          }}>
            "{mc.tagline}"
          </p>
        </div>

        {/* Key Artists — passed verbatim per content type */}
        {keyArtistsNode}

        {/* Key Works — card grid */}
        {mc.keyWorks.length > 0 && (
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ height: "1px", background: "rgba(42,30,16,0.08)", marginBottom: "2rem" }} />
            <p className="font-mono uppercase tracking-widest mb-5" style={{ fontSize: "9px", color: MUTED }}>
              Key Works
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            }}>
              {mc.keyWorks.map((work) => {
                const img = WORK_IMAGES[work.id];
                const meta = lookupWorkMeta(work.id);
                const route = resolveWorkRoute(work.id);
                return (
                  <div
                    key={work.id + work.title}
                    onClick={() => navigate(route, { state: { from: "movement", movementId: mc.id, movementName: mc.name, civilizationId: mc.parentId } })}
                    style={{
                      cursor: "pointer",
                      background: "#FAF8F4",
                      borderRadius: "3px",
                      overflow: "hidden",
                      border: "1px solid rgba(201,168,76,0.14)",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 28px rgba(42,30,16,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    }}
                  >
                    <div style={{ aspectRatio: "1 / 1", overflow: "hidden", background: "rgba(42,30,16,0.06)" }}>
                      {img ? (
                        <img
                          src={img}
                          alt={work.title}
                          loading="lazy"
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      ) : (
                        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          <span style={{ fontFamily: "monospace", fontSize: "9px", color: "rgba(42,30,16,0.25)", textTransform: "uppercase", letterSpacing: "1px" }}>
                            Image coming soon
                          </span>
                        </div>
                      )}
                    </div>
                    <div style={{ padding: "12px 14px 14px", background: "#F5F0E8" }}>
                      <h4 style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontWeight: 700,
                        fontSize: "0.875rem",
                        color: DARK,
                        lineHeight: 1.25,
                        marginBottom: "4px",
                      }}>
                        {work.title}
                      </h4>
                      {meta && (
                        <p style={{
                          fontFamily: "'Raleway', sans-serif",
                          fontWeight: 300,
                          fontSize: "0.72rem",
                          color: MUTED,
                        }}>
                          {meta.artist} · {meta.year}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Prev / Next navigation */}
        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "0.5rem" }}>
          {mc.prevMovement ? (
            <button
              onClick={() => navigate(`/movement/${mc.prevMovement!.id}`, { state: { civName: mc.parentCivilization, civId: mc.parentId } })}
              className="flex items-center gap-2 transition-colors duration-200"
              style={{ color: MUTED, fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
              onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
              {mc.prevMovement.name}
            </button>
          ) : <div />}
          {mc.nextMovement ? (
            <button
              onClick={() => navigate(`/movement/${mc.nextMovement!.id}`, { state: { civName: mc.parentCivilization, civId: mc.parentId } })}
              className="flex items-center gap-2 transition-colors duration-200"
              style={{ color: MUTED, fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
              onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
            >
              {mc.nextMovement.name}
              <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          ) : <div />}
        </div>

      </div>

      <StickyBreadcrumb isSticky={isSticky} left={movStickyLeft} right={mc.name} />
      <TimelineButton />
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────

export default function MovementPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { civName?: string; civId?: string } | null;

  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const slideStyle: React.CSSProperties = {
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(40px)",
    transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
  };

  // ── Content resolution ─────────────────────────────────────────────────
  const richContent       = RENAISSANCE_MOVEMENTS.find((m) => m.id === id);
  const ancientContent    = !richContent ? ANCIENT_MOVEMENTS.find((m) => m.id === id) : undefined;
  const baroqueContent    = !richContent && !ancientContent ? BAROQUE_MOVEMENTS.find((m) => m.id === id) : undefined;
  const impressionismContent = !richContent && !ancientContent && !baroqueContent
    ? IMPRESSIONISM_MOVEMENTS.find((m) => m.id === id) : undefined;
  const medievalContent   = !richContent && !ancientContent && !baroqueContent && !impressionismContent
    ? MEDIEVAL_MOVEMENTS.find((m) => m.id === id) : undefined;
  const modernContent     = !richContent && !ancientContent && !baroqueContent && !impressionismContent && !medievalContent
    ? MODERN_MOVEMENTS.find((m) => m.id === id) : undefined;

  // Fallback: find in CIVILIZATIONS
  let foundCiv: typeof CIVILIZATIONS[0] | null = null;
  let foundMovement: { name: string; dates: string; color: string } | null = null;
  if (!richContent && !ancientContent && !baroqueContent && !impressionismContent && !medievalContent && !modernContent) {
    for (const civ of CIVILIZATIONS) {
      for (const m of civ.movements) {
        if (toSlug(m.name) === id) { foundCiv = civ; foundMovement = m; break; }
      }
      if (foundCiv) break;
    }
  }

  // Fallback sticky breadcrumb refs (only used by the not-found / placeholder paths)
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsSticky(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-56px 0px 0px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [id]);

  const backCivName = state?.civName ?? foundCiv?.name ?? "Timeline";
  const backCivId   = state?.civId  ?? foundCiv?.id  ?? null;
  const currentMovementName = foundMovement?.name ?? id ?? "";

  const movStickyLeft = backCivId ? (
    <>
      <button
        onClick={() => navigate(`/civilization/${backCivId}`)}
        style={{ color: DARK, fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", gap: "6px" }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
        {backCivName}
      </button>
      <span style={{ color: "rgba(42,30,16,0.30)", fontSize: "0.75rem" }}>·</span>
      <button
        onClick={() => navigate("/timeline")}
        style={{ color: "rgba(42,30,16,0.40)", fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.72rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}
        onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(42,30,16,0.40)")}
      >
        Timeline
      </button>
      <span style={{ color: "rgba(42,30,16,0.20)", fontSize: "0.72rem" }}>/</span>
      <button
        onClick={() => navigate("/geography")}
        style={{ color: "rgba(42,30,16,0.40)", fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.72rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}
        onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(42,30,16,0.40)")}
      >
        Geography
      </button>
    </>
  ) : (
    <>
      <button
        onClick={() => navigate("/timeline")}
        style={{ color: MUTED, fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", gap: "6px" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
        onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
      >
        <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
        Timeline
      </button>
      <span style={{ color: "rgba(42,30,16,0.20)", fontSize: "0.72rem" }}>/</span>
      <button
        onClick={() => navigate("/geography")}
        style={{ color: "rgba(42,30,16,0.40)", fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.72rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}
        onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(42,30,16,0.40)")}
      >
        Geography
      </button>
    </>
  );

  // ── Renaissance ────────────────────────────────────────────────────────
  if (richContent) {
    const mc = richContent;
    const keyArtistsNode = mc.keyArtists.length > 0 ? (
      <div style={{ marginBottom: "3rem" }}>
        <div style={{ height: "1px", background: "rgba(42,30,16,0.08)", marginBottom: "2rem" }} />
        <p className="font-mono uppercase tracking-widest mb-4" style={{ fontSize: "9px", color: MUTED }}>Key Artists</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {mc.keyArtists.map((artist) => (
            <div key={artist.id + artist.name} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: `1px solid ${mc.color}30`, background: "rgba(42,30,16,0.06)" }}>
                {ARTIST_PORTRAITS[artist.id] && (
                  <img src={ARTIST_PORTRAITS[artist.id]} alt={artist.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%" }} />
                )}
              </div>
              <div style={{ flex: 1, paddingTop: "4px" }}>
                <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: "0.875rem", color: DARK, marginBottom: "5px" }}>{artist.name}</p>
                <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.65, color: "rgba(42,30,16,0.6)" }}>{artist.contribution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : null;

    return (
      <RichLayout
        mc={mc}
        miniTimeline={<RenaissanceMiniTimeline activeId={mc.id} />}
        keyArtistsNode={keyArtistsNode}
        slideStyle={slideStyle}
        navigate={navigate}
      />
    );
  }

  // ── Baroque ────────────────────────────────────────────────────────────
  if (baroqueContent) {
    const mc = baroqueContent;
    const keyArtistsNode = mc.keyArtists.length > 0 ? (
      <div style={{ marginBottom: "3rem" }}>
        <div style={{ height: "1px", background: "rgba(42,30,16,0.08)", marginBottom: "2rem" }} />
        <p className="font-mono uppercase tracking-widest mb-4" style={{ fontSize: "9px", color: MUTED }}>Key Artists</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {mc.keyArtists.map((artist) => (
            <div key={artist.id}
              style={{ display: "flex", alignItems: "flex-start", gap: "16px", cursor: "pointer" }}
              onClick={() => navigate(`/artists/${artist.id}`)}
            >
              <div style={{ width: "52px", height: "52px", borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: `1px solid ${mc.color}30`, background: "rgba(42,30,16,0.06)" }}>
                {ARTIST_PORTRAITS[artist.id] && (
                  <img src={ARTIST_PORTRAITS[artist.id]} alt={artist.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%" }} />
                )}
              </div>
              <div style={{ flex: 1, paddingTop: "4px" }}>
                <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: "0.875rem", color: DARK, marginBottom: "5px", textDecoration: "underline", textUnderlineOffset: "3px", textDecorationColor: `${mc.color}60` }}>{artist.name}</p>
                <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.65, color: "rgba(42,30,16,0.6)" }}>{artist.contribution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : null;

    return (
      <RichLayout
        mc={mc}
        miniTimeline={<CivMiniTimeline civId={mc.parentId} activeId={mc.id} />}
        keyArtistsNode={keyArtistsNode}
        slideStyle={slideStyle}
        navigate={navigate}
      />
    );
  }

  // ── Ancient ────────────────────────────────────────────────────────────
  if (ancientContent) {
    const mc = ancientContent;
    const keyArtistsNode = mc.keyArtists.length > 0 ? (
      <div style={{ marginBottom: "3rem" }}>
        <div style={{ height: "1px", background: "rgba(42,30,16,0.08)", marginBottom: "2rem" }} />
        <p className="font-mono uppercase tracking-widest mb-4" style={{ fontSize: "9px", color: MUTED }}>Key Artists</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {mc.keyArtists.map((artist) => (
            <div key={artist.id + artist.name}>
              <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: "0.875rem", color: DARK, marginBottom: "4px" }}>{artist.name}</p>
              <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.65, color: "rgba(42,30,16,0.6)" }}>{artist.contribution}</p>
            </div>
          ))}
        </div>
      </div>
    ) : null;

    return (
      <RichLayout
        mc={mc}
        miniTimeline={<CivMiniTimeline civId={mc.parentId} activeId={mc.id} />}
        keyArtistsNode={keyArtistsNode}
        slideStyle={slideStyle}
        navigate={navigate}
      />
    );
  }

  // ── Impressionism ──────────────────────────────────────────────────────
  if (impressionismContent) {
    const mc = impressionismContent;
    const keyArtistsNode = mc.keyArtists.length > 0 ? (
      <div style={{ marginBottom: "3rem" }}>
        <div style={{ height: "1px", background: "rgba(42,30,16,0.08)", marginBottom: "2rem" }} />
        <p className="font-mono uppercase tracking-widest mb-4" style={{ fontSize: "9px", color: MUTED }}>Key Artists</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {mc.keyArtists.map((artist) => (
            <div
              key={artist.id}
              style={{ display: "flex", alignItems: "flex-start", gap: "16px", cursor: "pointer" }}
              onClick={() => navigate(`/artists/${artist.id}`)}
            >
              <div style={{ width: "52px", height: "52px", borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: `1px solid ${mc.color}30`, background: "rgba(42,30,16,0.06)" }}>
                {ARTIST_PORTRAITS[artist.id] && (
                  <img src={ARTIST_PORTRAITS[artist.id]} alt={artist.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%" }} />
                )}
              </div>
              <div style={{ flex: 1, paddingTop: "4px" }}>
                <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: "0.875rem", color: DARK, marginBottom: "5px", textDecoration: "underline", textUnderlineOffset: "3px", textDecorationColor: `${mc.color}60` }}>{artist.name}</p>
                <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.65, color: "rgba(42,30,16,0.6)" }}>{artist.contribution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : null;

    return (
      <RichLayout
        mc={mc}
        miniTimeline={<CivMiniTimeline civId={mc.parentId} activeId={mc.id} />}
        keyArtistsNode={keyArtistsNode}
        slideStyle={slideStyle}
        navigate={navigate}
      />
    );
  }

  // ── Medieval ───────────────────────────────────────────────────────────
  if (medievalContent) {
    const mc = medievalContent;
    return (
      <RichLayout
        mc={mc}
        miniTimeline={<CivMiniTimeline civId={mc.parentId} activeId={mc.id} />}
        keyArtistsNode={null}
        slideStyle={slideStyle}
        navigate={navigate}
      />
    );
  }

  // ── Modern ─────────────────────────────────────────────────────────────
  if (modernContent) {
    const mc = modernContent;
    const keyArtistsNode = mc.keyArtists.length > 0 ? (
      <div style={{ marginBottom: "3rem" }}>
        <div style={{ height: "1px", background: "rgba(42,30,16,0.08)", marginBottom: "2rem" }} />
        <p className="font-mono uppercase tracking-widest mb-4" style={{ fontSize: "9px", color: MUTED }}>Key Artists</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {mc.keyArtists.map((artist) => (
            <div key={artist.id}
              style={{ display: "flex", alignItems: "flex-start", gap: "16px", cursor: "pointer" }}
              onClick={() => navigate(`/artists/${artist.id}`)}
            >
              <div style={{ width: "52px", height: "52px", borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: `1px solid ${mc.color}30`, background: "rgba(42,30,16,0.06)" }}>
                {ARTIST_PORTRAITS[artist.id] && (
                  <img src={ARTIST_PORTRAITS[artist.id]} alt={artist.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%" }} />
                )}
              </div>
              <div style={{ flex: 1, paddingTop: "4px" }}>
                <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: "0.875rem", color: DARK, marginBottom: "5px", textDecoration: "underline", textUnderlineOffset: "3px", textDecorationColor: `${mc.color}60` }}>{artist.name}</p>
                <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.65, color: "rgba(42,30,16,0.6)" }}>{artist.contribution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : null;

    return (
      <RichLayout
        mc={mc}
        miniTimeline={<CivMiniTimeline civId={mc.parentId} activeId={mc.id} />}
        keyArtistsNode={keyArtistsNode}
        slideStyle={slideStyle}
        navigate={navigate}
      />
    );
  }

  // ─── Fallback: not found ───────────────────────────────────────────────
  if (!foundMovement) {
    return (
      <div style={{ background: "#EDE8DF", minHeight: "100vh", ...slideStyle }} className="pt-16">
        <div className="max-w-3xl mx-auto px-8 py-12">
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "2rem" }}>
            <button
              onClick={() => navigate(backCivId ? `/civilization/${backCivId}` : "/timeline")}
              style={{ color: DARK, fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", gap: "6px" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
              {backCivName}
            </button>
            <span style={{ color: "rgba(42,30,16,0.30)", fontSize: "0.75rem" }}>·</span>
            <button
              onClick={() => navigate("/timeline")}
              style={{ color: "rgba(42,30,16,0.40)", fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.72rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(42,30,16,0.40)")}
            >
              Timeline
            </button>
            <span style={{ color: "rgba(42,30,16,0.20)", fontSize: "0.72rem" }}>/</span>
            <button
              onClick={() => navigate("/geography")}
              style={{ color: "rgba(42,30,16,0.40)", fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.72rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(42,30,16,0.40)")}
            >
              Geography
            </button>
          </div>
          <p style={{ fontFamily: "'Raleway', sans-serif", color: MUTED }}>Coming soon.</p>
        </div>
        <StickyBreadcrumb isSticky={isSticky} left={movStickyLeft} right={currentMovementName} />
        <TimelineButton />
      </div>
    );
  }

  // ─── Placeholder: found in CIVILIZATIONS but no rich content ──────────
  const placeholderSections = [
    { label: "The Movement" },
    { label: "Key Artists" },
    { label: "Key Works" },
  ];

  return (
    <div style={{ background: "#EDE8DF", minHeight: "100vh", ...slideStyle }} className="pt-16">
      <div className="max-w-3xl mx-auto px-8 py-10">

        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "2rem" }}>
          <button
            onClick={() => navigate(backCivId ? `/civilization/${backCivId}` : "/timeline")}
            style={{ color: DARK, fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", gap: "6px" }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
            {backCivName}
          </button>
          <span style={{ color: "rgba(42,30,16,0.30)", fontSize: "0.75rem" }}>·</span>
          <button
            onClick={() => navigate("/timeline")}
            style={{ color: "rgba(42,30,16,0.40)", fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.72rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(42,30,16,0.40)")}
          >
            Timeline
          </button>
          <span style={{ color: "rgba(42,30,16,0.20)", fontSize: "0.72rem" }}>/</span>
          <button
            onClick={() => navigate("/geography")}
            style={{ color: "rgba(42,30,16,0.40)", fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.72rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(42,30,16,0.40)")}
          >
            Geography
          </button>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <span
            className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5"
            style={{ color: foundMovement.color, border: `1px solid ${foundMovement.color}66`, borderRadius: "2px" }}
          >
            {foundMovement.dates}
          </span>
        </div>

        <h1
          ref={titleRef}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: "3.75rem",
            color: DARK,
            lineHeight: 1.0,
            marginBottom: "2.5rem",
            letterSpacing: "0.025em",
          }}
        >
          {foundMovement.name}
        </h1>

        <div style={{ height: "1px", background: `linear-gradient(to right, ${foundMovement.color}40, transparent)`, marginBottom: "2.5rem" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {placeholderSections.map((s) => (
            <div key={s.label}>
              <p className="font-mono uppercase tracking-widest mb-3" style={{ fontSize: "9px", color: MUTED }}>
                {s.label}
              </p>
              <p style={{ fontFamily: "'Raleway', system-ui, sans-serif", fontWeight: 300, fontSize: "0.875rem", lineHeight: 1.75, color: "rgba(42,30,16,0.7)" }}>
                Coming soon.
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <StickyBreadcrumb isSticky={isSticky} left={movStickyLeft} right={currentMovementName} />
      <TimelineButton />
    </div>
  );
}
