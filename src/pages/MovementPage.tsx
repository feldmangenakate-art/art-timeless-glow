import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
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

const DARK = "#2A1E10";
const MUTED = "rgba(42,30,16,0.45)";

const toSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

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

export default function MovementPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as { civName?: string; civId?: string } | null;

  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const slideStyle = {
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(40px)",
    transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
  };

  // Check Renaissance rich content first
  const richContent = RENAISSANCE_MOVEMENTS.find((m) => m.id === id);

  // Check Ancient rich content second
  const ancientContent = !richContent ? ANCIENT_MOVEMENTS.find((m) => m.id === id) : undefined;

  // Check Baroque rich content third
  const baroqueContent = !richContent && !ancientContent ? BAROQUE_MOVEMENTS.find((m) => m.id === id) : undefined;

  // Check Impressionism rich content fourth
  const impressionismContent = !richContent && !ancientContent && !baroqueContent ? IMPRESSIONISM_MOVEMENTS.find((m) => m.id === id) : undefined;

  // Check Medieval rich content fifth
  const medievalContent = !richContent && !ancientContent && !baroqueContent && !impressionismContent ? MEDIEVAL_MOVEMENTS.find((m) => m.id === id) : undefined;

  // Check Modern rich content sixth
  const modernContent = !richContent && !ancientContent && !baroqueContent && !impressionismContent && !medievalContent ? MODERN_MOVEMENTS.find((m) => m.id === id) : undefined;

  // Fallback: find in CIVILIZATIONS
  let foundCiv: typeof CIVILIZATIONS[0] | null = null;
  let foundMovement: { name: string; dates: string; color: string } | null = null;
  if (!richContent) {
    for (const civ of CIVILIZATIONS) {
      for (const m of civ.movements) {
        if (toSlug(m.name) === id) {
          foundCiv = civ;
          foundMovement = m;
          break;
        }
      }
      if (foundCiv) break;
    }
  }

  const backCivName = state?.civName ?? richContent?.parentCivilization ?? ancientContent?.parentCivilization ?? baroqueContent?.parentCivilization ?? impressionismContent?.parentCivilization ?? medievalContent?.parentCivilization ?? modernContent?.parentCivilization ?? foundCiv?.name ?? "Timeline";
  const backCivId = state?.civId ?? richContent?.parentId ?? ancientContent?.parentId ?? baroqueContent?.parentId ?? impressionismContent?.parentId ?? medievalContent?.parentId ?? modernContent?.parentId ?? foundCiv?.id ?? null;

  // ── Sticky breadcrumb ──────────────────────────────────────────────────────
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

  const currentMovementName =
    richContent?.name ??
    ancientContent?.name ??
    baroqueContent?.name ??
    impressionismContent?.name ??
    medievalContent?.name ??
    modernContent?.name ??
    foundMovement?.name ??
    id ?? "";

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
    </>
  ) : (
    <button
      onClick={() => navigate("/timeline")}
      style={{ color: MUTED, fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", gap: "6px" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
      onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
    >
      <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
      Timeline
    </button>
  );

  // ─── Rich content layout ───────────────────────────────────────────────────
  if (richContent) {
    const mc = richContent;
    const sections = [
      { label: "The Movement", text: mc.theMovement },
      { label: "What It Broke", text: mc.whatItBroke },
      { label: "What It Invented", text: mc.whatItInvented },
      { label: "Historical Context", text: mc.historicalContext },
    ];

    return (
      <div style={{ background: "#EDE8DF", minHeight: "100vh", ...slideStyle }} className="pt-16">
        <div className="max-w-3xl mx-auto px-8 py-10">

          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "2rem" }}>
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
          </div>

          {/* Date badge */}
          <div style={{ marginBottom: "1rem" }}>
            <span
              className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5"
              style={{ color: mc.color, border: `1px solid ${mc.color}66`, borderRadius: "2px" }}
            >
              {mc.dates}
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: "3.75rem",
            color: DARK,
            lineHeight: 1.0,
            marginBottom: "0.75rem",
            letterSpacing: "0.025em",
          }} ref={titleRef}>
            {mc.name}
          </h1>

          {/* Tagline */}
          <p style={{
            fontFamily: "'Raleway', system-ui, sans-serif",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "0.95rem",
            lineHeight: 1.6,
            color: "rgba(42,30,16,0.6)",
            marginBottom: "2rem",
          }}>
            {mc.tagline}
          </p>

          {/* Mini timeline strip — immediately after title/tagline */}
          <RenaissanceMiniTimeline activeId={mc.id} />

          {/* Colored divider */}
          <div style={{ height: "1px", background: `linear-gradient(to right, ${mc.color}50, transparent)`, marginBottom: "2.5rem" }} />

          {/* 4 content sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", marginBottom: "3.5rem" }}>
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

          {/* Key Artists */}
          {mc.keyArtists.length > 0 && (
            <div style={{ marginBottom: "3rem" }}>
              <div style={{ height: "1px", background: "rgba(42,30,16,0.08)", marginBottom: "2rem" }} />
              <p className="font-mono uppercase tracking-widest mb-4" style={{ fontSize: "9px", color: MUTED }}>
                Key Artists
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {mc.keyArtists.map((artist) => (
                  <div key={artist.id + artist.name} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    <div style={{ width: "52px", height: "52px", borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: `1px solid ${mc.color}30`, background: "rgba(42,30,16,0.06)" }}>
                      {ARTIST_PORTRAITS[artist.id] && (
                        <img
                          src={ARTIST_PORTRAITS[artist.id]}
                          alt={artist.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%" }}
                        />
                      )}
                    </div>
                    <div style={{ flex: 1, paddingTop: "4px" }}>
                      <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: "0.875rem", color: DARK, marginBottom: "5px" }}>
                        {artist.name}
                      </p>
                      <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.65, color: "rgba(42,30,16,0.6)" }}>
                        {artist.contribution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Works */}
          {mc.keyWorks.length > 0 && (
            <div style={{ marginBottom: "3rem" }}>
              <div style={{ height: "1px", background: "rgba(42,30,16,0.08)", marginBottom: "2rem" }} />
              <p className="font-mono uppercase tracking-widest mb-4" style={{ fontSize: "9px", color: MUTED }}>
                Key Works
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {mc.keyWorks.map((work) => (
                  <div key={work.id + work.title} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    <div style={{ width: "80px", height: "56px", borderRadius: "2px", overflow: "hidden", flexShrink: 0, border: "1px solid rgba(42,30,16,0.1)", background: "rgba(42,30,16,0.04)" }}>
                      {WORK_IMAGES[work.id] && (
                        <img
                          src={WORK_IMAGES[work.id]}
                          alt={work.title}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      )}
                    </div>
                    <div style={{ flex: 1, paddingTop: "4px" }}>
                      <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: "0.875rem", color: DARK, marginBottom: "5px" }}>
                        {work.title}
                      </p>
                      <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.65, color: "rgba(42,30,16,0.6)" }}>
                        {work.why}
                      </p>
                    </div>
                  </div>
                ))}
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
      <StickyBreadcrumb isSticky={isSticky} left={movStickyLeft} right={currentMovementName} />
      <TimelineButton />
      </div>
    );
  }

  // ─── Baroque rich content layout ──────────────────────────────────────────
  if (baroqueContent) {
    const mc = baroqueContent;
    const sections = [
      { label: "The Movement",       text: mc.theMovement },
      { label: "What It Broke",      text: mc.whatItBroke },
      { label: "What It Invented",   text: mc.whatItInvented },
      { label: "Historical Context", text: mc.historicalContext },
    ];

    return (
      <div style={{ background: "#EDE8DF", minHeight: "100vh", ...slideStyle }} className="pt-16">
        <div className="max-w-3xl mx-auto px-8 py-10">

          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "2rem" }}>
            <button
              onClick={() => navigate(`/civilization/${mc.parentId}`)}
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
          </div>

          {/* Date badge */}
          <div style={{ marginBottom: "1rem" }}>
            <span
              className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5"
              style={{ color: mc.color, border: `1px solid ${mc.color}66`, borderRadius: "2px" }}
            >
              {mc.dates}
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: "3.75rem",
            color: DARK,
            lineHeight: 1.0,
            marginBottom: "0.75rem",
            letterSpacing: "0.025em",
          }} ref={titleRef}>
            {mc.name}
          </h1>

          {/* Tagline */}
          <p style={{
            fontFamily: "'Raleway', system-ui, sans-serif",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "0.95rem",
            lineHeight: 1.6,
            color: "rgba(42,30,16,0.6)",
            marginBottom: "2rem",
          }}>
            {mc.tagline}
          </p>

          {/* Mini timeline strip */}
          <CivMiniTimeline civId={mc.parentId} activeId={mc.id} />

          {/* Colored divider */}
          <div style={{ height: "1px", background: `linear-gradient(to right, ${mc.color}50, transparent)`, marginBottom: "2.5rem" }} />

          {/* 4 content sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", marginBottom: "3.5rem" }}>
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

          {/* Key Artists — portrait links to artist detail page */}
          {mc.keyArtists.length > 0 && (
            <div style={{ marginBottom: "3rem" }}>
              <div style={{ height: "1px", background: "rgba(42,30,16,0.08)", marginBottom: "2rem" }} />
              <p className="font-mono uppercase tracking-widest mb-4" style={{ fontSize: "9px", color: MUTED }}>
                Key Artists
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {mc.keyArtists.map((artist) => (
                  <div key={artist.id}
                    style={{ display: "flex", alignItems: "flex-start", gap: "16px", cursor: "pointer" }}
                    onClick={() => navigate(`/artists/${artist.id}`)}
                  >
                    <div style={{ width: "52px", height: "52px", borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: `1px solid ${mc.color}30`, background: "rgba(42,30,16,0.06)" }}>
                      {ARTIST_PORTRAITS[artist.id] && (
                        <img
                          src={ARTIST_PORTRAITS[artist.id]}
                          alt={artist.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%" }}
                        />
                      )}
                    </div>
                    <div style={{ flex: 1, paddingTop: "4px" }}>
                      <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: "0.875rem", color: DARK, marginBottom: "5px", textDecoration: "underline", textUnderlineOffset: "3px", textDecorationColor: `${mc.color}60` }}>
                        {artist.name}
                      </p>
                      <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.65, color: "rgba(42,30,16,0.6)" }}>
                        {artist.contribution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Works — image thumbnail + link to masterwork page */}
          {mc.keyWorks.length > 0 && (
            <div style={{ marginBottom: "3rem" }}>
              <div style={{ height: "1px", background: "rgba(42,30,16,0.08)", marginBottom: "2rem" }} />
              <p className="font-mono uppercase tracking-widest mb-4" style={{ fontSize: "9px", color: MUTED }}>
                Key Works
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {mc.keyWorks.map((work) => (
                  <div
                    key={work.id}
                    style={{ display: "flex", alignItems: "flex-start", gap: "16px", cursor: "pointer" }}
                    onClick={() => navigate(`/masterworks/${work.id}`)}
                  >
                    <div style={{ width: "80px", height: "56px", borderRadius: "2px", overflow: "hidden", flexShrink: 0, border: "1px solid rgba(42,30,16,0.1)", background: "rgba(42,30,16,0.04)" }}>
                      {WORK_IMAGES[work.id] && (
                        <img
                          src={WORK_IMAGES[work.id]}
                          alt={work.title}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      )}
                    </div>
                    <div style={{ flex: 1, paddingTop: "4px" }}>
                      <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: "0.875rem", color: DARK, marginBottom: "5px", textDecoration: "underline", textUnderlineOffset: "3px", textDecorationColor: `${mc.color}60` }}>
                        {work.title}
                      </p>
                      <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.65, color: "rgba(42,30,16,0.6)" }}>
                        {work.why}
                      </p>
                    </div>
                  </div>
                ))}
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
      <StickyBreadcrumb isSticky={isSticky} left={movStickyLeft} right={currentMovementName} />
      <TimelineButton />
      </div>
    );
  }

  // ─── Ancient rich content layout ──────────────────────────────────────────
  if (ancientContent) {
    const mc = ancientContent;
    const sections = [
      { label: "The Movement",      text: mc.theMovement },
      { label: "What It Broke",     text: mc.whatItBroke },
      { label: "What It Invented",  text: mc.whatItInvented },
      { label: "Historical Context",text: mc.historicalContext },
    ];

    return (
      <div style={{ background: "#EDE8DF", minHeight: "100vh", ...slideStyle }} className="pt-16">
        <div className="max-w-3xl mx-auto px-8 py-10">

          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "2rem" }}>
            <button
              onClick={() => navigate(`/civilization/${mc.parentId}`)}
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
          </div>

          {/* Date badge */}
          <div style={{ marginBottom: "1rem" }}>
            <span
              className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5"
              style={{ color: mc.color, border: `1px solid ${mc.color}66`, borderRadius: "2px" }}
            >
              {mc.dates}
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: "3.75rem",
            color: DARK,
            lineHeight: 1.0,
            marginBottom: "0.75rem",
            letterSpacing: "0.025em",
          }} ref={titleRef}>
            {mc.name}
          </h1>

          {/* Tagline */}
          <p style={{
            fontFamily: "'Raleway', system-ui, sans-serif",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "0.95rem",
            lineHeight: 1.6,
            color: "rgba(42,30,16,0.6)",
            marginBottom: "2rem",
          }}>
            {mc.tagline}
          </p>

          {/* Mini timeline strip */}
          <CivMiniTimeline civId={mc.parentId} activeId={mc.id} />

          {/* Colored divider */}
          <div style={{ height: "1px", background: `linear-gradient(to right, ${mc.color}50, transparent)`, marginBottom: "2.5rem" }} />

          {/* 4 content sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", marginBottom: "3.5rem" }}>
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

          {/* Key Artists */}
          {mc.keyArtists.length > 0 && (
            <div style={{ marginBottom: "3rem" }}>
              <div style={{ height: "1px", background: "rgba(42,30,16,0.08)", marginBottom: "2rem" }} />
              <p className="font-mono uppercase tracking-widest mb-4" style={{ fontSize: "9px", color: MUTED }}>
                Key Artists
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {mc.keyArtists.map((artist) => (
                  <div key={artist.id + artist.name}>
                    <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: "0.875rem", color: DARK, marginBottom: "4px" }}>
                      {artist.name}
                    </p>
                    <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.65, color: "rgba(42,30,16,0.6)" }}>
                      {artist.contribution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Works */}
          {mc.keyWorks.length > 0 && (
            <div style={{ marginBottom: "3rem" }}>
              <div style={{ height: "1px", background: "rgba(42,30,16,0.08)", marginBottom: "2rem" }} />
              <p className="font-mono uppercase tracking-widest mb-4" style={{ fontSize: "9px", color: MUTED }}>
                Key Works
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {mc.keyWorks.map((work) => (
                  <div
                    key={work.id + work.title}
                    style={{
                      borderLeft: `2px solid ${mc.color}60`,
                      paddingLeft: "14px",
                    }}
                  >
                    <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, fontSize: "0.875rem", color: DARK, marginBottom: "5px", lineHeight: 1.3 }}>
                      {work.title}
                    </p>
                    <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.65, color: "rgba(42,30,16,0.6)" }}>
                      {work.why}
                    </p>
                  </div>
                ))}
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
      <StickyBreadcrumb isSticky={isSticky} left={movStickyLeft} right={currentMovementName} />
      <TimelineButton />
      </div>
    );
  }

  // ─── Impressionism rich content layout ────────────────────────────────────
  if (impressionismContent) {
    const mc = impressionismContent;
    const sections = [
      { label: "The Movement",       text: mc.theMovement },
      { label: "What It Broke",      text: mc.whatItBroke },
      { label: "What It Invented",   text: mc.whatItInvented },
      { label: "Historical Context", text: mc.historicalContext },
    ];

    return (
      <div style={{ background: "#EDE8DF", minHeight: "100vh", ...slideStyle }} className="pt-16">
        <div className="max-w-3xl mx-auto px-8 py-10">

          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "2rem" }}>
            <button
              onClick={() => navigate(`/civilization/${mc.parentId}`)}
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
          </div>

          {/* Date badge */}
          <div style={{ marginBottom: "1rem" }}>
            <span
              className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5"
              style={{ color: mc.color, border: `1px solid ${mc.color}66`, borderRadius: "2px" }}
            >
              {mc.dates}
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: "3.75rem",
            color: DARK,
            lineHeight: 1.0,
            marginBottom: "0.75rem",
            letterSpacing: "0.025em",
          }} ref={titleRef}>
            {mc.name}
          </h1>

          {/* Tagline */}
          <p style={{
            fontFamily: "'Raleway', system-ui, sans-serif",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "0.95rem",
            lineHeight: 1.6,
            color: "rgba(42,30,16,0.6)",
            marginBottom: "2rem",
          }}>
            {mc.tagline}
          </p>

          {/* Mini timeline strip */}
          <CivMiniTimeline civId={mc.parentId} activeId={mc.id} />

          {/* Colored divider */}
          <div style={{ height: "1px", background: `linear-gradient(to right, ${mc.color}50, transparent)`, marginBottom: "2.5rem" }} />

          {/* 4 content sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", marginBottom: "3.5rem" }}>
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

          {/* Key Artists */}
          {mc.keyArtists.length > 0 && (
            <div style={{ marginBottom: "3rem" }}>
              <div style={{ height: "1px", background: "rgba(42,30,16,0.08)", marginBottom: "2rem" }} />
              <p className="font-mono uppercase tracking-widest mb-4" style={{ fontSize: "9px", color: MUTED }}>
                Key Artists
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {mc.keyArtists.map((artist) => (
                  <div
                    key={artist.id}
                    style={{ display: "flex", alignItems: "flex-start", gap: "16px", cursor: "pointer" }}
                    onClick={() => navigate(`/artists/${artist.id}`)}
                  >
                    <div style={{ width: "52px", height: "52px", borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: `1px solid ${mc.color}30`, background: "rgba(42,30,16,0.06)" }}>
                      {ARTIST_PORTRAITS[artist.id] && (
                        <img src={ARTIST_PORTRAITS[artist.id]} alt={artist.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%" }} />
                      )}
                    </div>
                    <div style={{ flex: 1, paddingTop: "4px" }}>
                      <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: "0.875rem", color: DARK, marginBottom: "5px", textDecoration: "underline", textUnderlineOffset: "3px", textDecorationColor: `${mc.color}60` }}>
                        {artist.name}
                      </p>
                      <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.65, color: "rgba(42,30,16,0.6)" }}>
                        {artist.contribution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Works */}
          {mc.keyWorks.length > 0 && (
            <div style={{ marginBottom: "3rem" }}>
              <div style={{ height: "1px", background: "rgba(42,30,16,0.08)", marginBottom: "2rem" }} />
              <p className="font-mono uppercase tracking-widest mb-4" style={{ fontSize: "9px", color: MUTED }}>
                Key Works
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {mc.keyWorks.map((work) => (
                  <div
                    key={work.id}
                    style={{ display: "flex", alignItems: "flex-start", gap: "16px", cursor: "pointer" }}
                    onClick={() => navigate(`/masterworks/${work.id}`)}
                  >
                    <div style={{ width: "80px", height: "56px", borderRadius: "2px", overflow: "hidden", flexShrink: 0, border: "1px solid rgba(42,30,16,0.1)", background: "rgba(42,30,16,0.04)" }}>
                      {WORK_IMAGES[work.id] && (
                        <img src={WORK_IMAGES[work.id]} alt={work.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      )}
                    </div>
                    <div style={{ flex: 1, paddingTop: "4px" }}>
                      <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: "0.875rem", color: DARK, marginBottom: "5px", textDecoration: "underline", textUnderlineOffset: "3px", textDecorationColor: `${mc.color}60` }}>
                        {work.title}
                      </p>
                      <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.65, color: "rgba(42,30,16,0.6)" }}>
                        {work.why}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Prev / Next */}
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
      <StickyBreadcrumb isSticky={isSticky} left={movStickyLeft} right={currentMovementName} />
      <TimelineButton />
      </div>
    );
  }

  // ─── Medieval rich content layout ────────────────────────────────────────
  if (medievalContent) {
    const mc = medievalContent;
    const sections = [
      { label: "The Movement",       text: mc.theMovement },
      { label: "What It Broke",      text: mc.whatItBroke },
      { label: "What It Invented",   text: mc.whatItInvented },
      { label: "Historical Context", text: mc.historicalContext },
    ];

    return (
      <div style={{ background: "#EDE8DF", minHeight: "100vh", ...slideStyle }} className="pt-16">
        <div className="max-w-3xl mx-auto px-8 py-10">

          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "2rem" }}>
            <button
              onClick={() => navigate(`/civilization/${mc.parentId}`)}
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
          </div>

          {/* Date badge */}
          <div style={{ marginBottom: "1rem" }}>
            <span
              className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5"
              style={{ color: mc.color, border: `1px solid ${mc.color}66`, borderRadius: "2px" }}
            >
              {mc.dates}
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: "3.75rem",
            color: DARK,
            lineHeight: 1.0,
            marginBottom: "0.75rem",
            letterSpacing: "0.025em",
          }} ref={titleRef}>
            {mc.name}
          </h1>

          {/* Tagline */}
          <p style={{
            fontFamily: "'Raleway', system-ui, sans-serif",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "0.95rem",
            lineHeight: 1.6,
            color: "rgba(42,30,16,0.6)",
            marginBottom: "2rem",
          }}>
            {mc.tagline}
          </p>

          {/* Mini timeline strip */}
          <CivMiniTimeline civId={mc.parentId} activeId={mc.id} />

          {/* Colored divider */}
          <div style={{ height: "1px", background: `linear-gradient(to right, ${mc.color}50, transparent)`, marginBottom: "2.5rem" }} />

          {/* 4 content sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", marginBottom: "3.5rem" }}>
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

          {/* Key Works */}
          {mc.keyWorks.length > 0 && (
            <div style={{ marginBottom: "3rem" }}>
              <div style={{ height: "1px", background: "rgba(42,30,16,0.08)", marginBottom: "2rem" }} />
              <p className="font-mono uppercase tracking-widest mb-4" style={{ fontSize: "9px", color: MUTED }}>
                Key Works
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {mc.keyWorks.map((work) => (
                  <div
                    key={work.id + work.title}
                    style={{
                      borderLeft: `2px solid ${mc.color}60`,
                      paddingLeft: "14px",
                    }}
                  >
                    <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, fontSize: "0.875rem", color: DARK, marginBottom: "5px", lineHeight: 1.3 }}>
                      {work.title}
                    </p>
                    <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.65, color: "rgba(42,30,16,0.6)" }}>
                      {work.why}
                    </p>
                  </div>
                ))}
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
      <StickyBreadcrumb isSticky={isSticky} left={movStickyLeft} right={currentMovementName} />
      <TimelineButton />
      </div>
    );
  }

  // ─── Modern rich content layout ──────────────────────────────────────────
  if (modernContent) {
    const mc = modernContent;
    const sections = [
      { label: "The Movement",       text: mc.theMovement },
      { label: "What It Broke",      text: mc.whatItBroke },
      { label: "What It Invented",   text: mc.whatItInvented },
      { label: "Historical Context", text: mc.historicalContext },
    ];

    return (
      <div style={{ background: "#EDE8DF", minHeight: "100vh", ...slideStyle }} className="pt-16">
        <div className="max-w-3xl mx-auto px-8 py-10">

          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "2rem" }}>
            <button
              onClick={() => navigate(`/civilization/${mc.parentId}`)}
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
          </div>

          {/* Date badge */}
          <div style={{ marginBottom: "1rem" }}>
            <span
              className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5"
              style={{ color: mc.color, border: `1px solid ${mc.color}66`, borderRadius: "2px" }}
            >
              {mc.dates}
            </span>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: "3.75rem",
            color: DARK,
            lineHeight: 1.0,
            marginBottom: "0.75rem",
            letterSpacing: "0.025em",
          }} ref={titleRef}>
            {mc.name}
          </h1>

          {/* Tagline */}
          <p style={{
            fontFamily: "'Raleway', system-ui, sans-serif",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "0.95rem",
            lineHeight: 1.6,
            color: "rgba(42,30,16,0.6)",
            marginBottom: "2rem",
          }}>
            {mc.tagline}
          </p>

          {/* Mini timeline strip */}
          <CivMiniTimeline civId={mc.parentId} activeId={mc.id} />

          {/* Colored divider */}
          <div style={{ height: "1px", background: `linear-gradient(to right, ${mc.color}50, transparent)`, marginBottom: "2.5rem" }} />

          {/* 4 content sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", marginBottom: "3.5rem" }}>
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

          {/* Key Artists — portrait links */}
          {mc.keyArtists.length > 0 && (
            <div style={{ marginBottom: "3rem" }}>
              <div style={{ height: "1px", background: "rgba(42,30,16,0.08)", marginBottom: "2rem" }} />
              <p className="font-mono uppercase tracking-widest mb-4" style={{ fontSize: "9px", color: MUTED }}>
                Key Artists
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {mc.keyArtists.map((artist) => (
                  <div key={artist.id}
                    style={{ display: "flex", alignItems: "flex-start", gap: "16px", cursor: "pointer" }}
                    onClick={() => navigate(`/artists/${artist.id}`)}
                  >
                    <div style={{ width: "52px", height: "52px", borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: `1px solid ${mc.color}30`, background: "rgba(42,30,16,0.06)" }}>
                      {ARTIST_PORTRAITS[artist.id] && (
                        <img
                          src={ARTIST_PORTRAITS[artist.id]}
                          alt={artist.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%" }}
                        />
                      )}
                    </div>
                    <div style={{ flex: 1, paddingTop: "4px" }}>
                      <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: "0.875rem", color: DARK, marginBottom: "5px", textDecoration: "underline", textUnderlineOffset: "3px", textDecorationColor: `${mc.color}60` }}>
                        {artist.name}
                      </p>
                      <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.65, color: "rgba(42,30,16,0.6)" }}>
                        {artist.contribution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Works — image thumbnail + link to masterwork page */}
          {mc.keyWorks.length > 0 && (
            <div style={{ marginBottom: "3rem" }}>
              <div style={{ height: "1px", background: "rgba(42,30,16,0.08)", marginBottom: "2rem" }} />
              <p className="font-mono uppercase tracking-widest mb-4" style={{ fontSize: "9px", color: MUTED }}>
                Key Works
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {mc.keyWorks.map((work) => (
                  <div
                    key={work.id}
                    style={{ display: "flex", alignItems: "flex-start", gap: "16px", cursor: "pointer" }}
                    onClick={() => navigate(`/masterworks/${work.id}`)}
                  >
                    <div style={{ width: "80px", height: "56px", borderRadius: "2px", overflow: "hidden", flexShrink: 0, border: "1px solid rgba(42,30,16,0.1)", background: "rgba(42,30,16,0.04)" }}>
                      {WORK_IMAGES[work.id] && (
                        <img src={WORK_IMAGES[work.id]} alt={work.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      )}
                    </div>
                    <div style={{ flex: 1, paddingTop: "4px" }}>
                      <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 400, fontSize: "0.875rem", color: DARK, marginBottom: "5px", textDecoration: "underline", textUnderlineOffset: "3px", textDecorationColor: `${mc.color}60` }}>
                        {work.title}
                      </p>
                      <p style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.65, color: "rgba(42,30,16,0.6)" }}>
                        {work.why}
                      </p>
                    </div>
                  </div>
                ))}
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
      <StickyBreadcrumb isSticky={isSticky} left={movStickyLeft} right={currentMovementName} />
      <TimelineButton />
      </div>
    );
  }

  // ─── Fallback / not found ──────────────────────────────────────────────────
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
          </div>
          <p style={{ fontFamily: "'Raleway', sans-serif", color: MUTED }}>Coming soon.</p>
        </div>
      <StickyBreadcrumb isSticky={isSticky} left={movStickyLeft} right={currentMovementName} />
      <TimelineButton />
      </div>
    );
  }

  // ─── Placeholder: movement found in CIVILIZATIONS but no rich content ──────
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
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <span
            className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5"
            style={{ color: foundMovement.color, border: `1px solid ${foundMovement.color}66`, borderRadius: "2px" }}
          >
            {foundMovement.dates}
          </span>
        </div>

        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: 700,
          fontSize: "3.75rem",
          color: DARK,
          lineHeight: 1.0,
          marginBottom: "2.5rem",
          letterSpacing: "0.025em",
        }} ref={titleRef}>
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
    <StickyBreadcrumb isSticky={isSticky} left={movStickyLeft} right={currentMovementName} />
    <TimelineButton />
    </div>
  );
}
