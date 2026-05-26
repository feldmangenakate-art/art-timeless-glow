import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Footer from "@/components/Footer";
import StickyBreadcrumb from "@/components/StickyBreadcrumb";
import { RENAISSANCE_CIVILIZATION } from "@/data/renaissance-content";
import { PREHISTORIC_CIVILIZATION } from "@/data/prehistoric-content";
import { ANCIENT_CIVILIZATIONS } from "@/data/ancient-content";
import { BAROQUE_CIVILIZATION } from "@/data/baroque-content";
import { IMPRESSIONISM_CIVILIZATION } from "@/data/impressionism-content";
import { MODERN_CIVILIZATION } from "@/data/impressionism-modern-content";
import { MEDIEVAL_CIVILIZATIONS } from "@/data/medieval-content";
import RenaissanceMiniTimeline from "@/components/RenaissanceMiniTimeline";
import CivMiniTimeline from "@/components/CivMiniTimeline";
import TimelineButton from "@/components/TimelineButton";

const GOLD = "#C9A84C";
const DARK = "#2A1E10";
const MUTED = "rgba(42,30,16,0.45)";

export default function CivilizationPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const slideStyle = {
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(40px)",
    transition: "opacity 0.4s ease-out, transform 0.4s ease-out",
  };

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

  // Page title for sticky right-side label (computed before early returns)
  const civPageTitle = (() => {
    if (id === "prehistoric") return PREHISTORIC_CIVILIZATION.name;
    const ac = ANCIENT_CIVILIZATIONS.find((c) => c.id === id);
    if (ac) return ac.name;
    if (id === "baroque") return BAROQUE_CIVILIZATION.name;
    if (id === "impressionism") return IMPRESSIONISM_CIVILIZATION.name;
    if (id === "modern") return MODERN_CIVILIZATION.name;
    const mc = MEDIEVAL_CIVILIZATIONS.find((c) => c.id === id);
    if (mc) return mc.name;
    return RENAISSANCE_CIVILIZATION.name;
  })();

  // Left breadcrumb content for sticky bar (all civ pages: ← Timeline)
  const civStickyLeft = (
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

  // ── Prehistoric page ───────────────────────────────────────────────────────
  if (id === "prehistoric") {
    const p = PREHISTORIC_CIVILIZATION;
    const sections = [
      { label: "Overview", text: p.overview },
      { label: "Historical Context", text: p.historicalContext },
      { label: "Why It Mattered", text: p.whyItMattered },
    ];
    const factItems = [
      { label: "Duration", value: p.facts.duration },
      { label: "Where", value: p.facts.where },
      { label: "Medium", value: p.facts.medium },
      { label: "Defining Quality", value: p.facts.defining },
      { label: "Legacy", value: p.facts.legacy },
    ];

    return (
      <div style={{ background: "#EDE8DF", minHeight: "100vh", ...slideStyle }} className="pt-16">
        <div className="max-w-5xl mx-auto px-8 py-10">

          {/* Back link */}
          <button
            onClick={() => navigate("/timeline", { state: { highlightDot: p.id } })}
            className="flex items-center gap-2 mb-10 transition-colors duration-200"
            style={{ color: MUTED, fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
            onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
            Timeline
          </button>

          {/* Hero */}
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ marginBottom: "1rem" }}>
              <span
                className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5"
                style={{ color: GOLD, border: "1px solid rgba(201,168,76,0.4)", borderRadius: "2px" }}
              >
                {p.dates}
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "3.75rem",
              color: DARK,
              lineHeight: 1.0,
              marginBottom: "1rem",
              letterSpacing: "0.025em",
            }} ref={titleRef}>
              {p.name}
            </h1>

            <p style={{
              fontFamily: "'Raleway', system-ui, sans-serif",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "1rem",
              lineHeight: 1.6,
              color: "rgba(42,30,16,0.6)",
              maxWidth: "680px",
            }}>
              {p.tagline}
            </p>
          </div>

          {/* Gold divider */}
          <div style={{ height: "1px", background: `linear-gradient(to right, ${GOLD}40, transparent)`, marginBottom: "3rem" }} />

          {/* Three content sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10" style={{ marginBottom: "4rem" }}>
            {sections.map((s) => (
              <div key={s.label}>
                <p className="font-mono uppercase tracking-widest mb-4" style={{ fontSize: "9px", color: MUTED }}>
                  {s.label}
                </p>
                {s.text.split("\n\n").map((para, i, arr) => (
                  <p key={i} style={{
                    fontFamily: "'Raleway', system-ui, sans-serif",
                    fontWeight: 300,
                    fontSize: "0.8rem",
                    lineHeight: 1.8,
                    color: "rgba(42,30,16,0.75)",
                    marginBottom: i < arr.length - 1 ? "0.75rem" : 0,
                  }}>
                    {para.trim()}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Thin divider */}
          <div style={{ height: "1px", background: "rgba(42,30,16,0.08)", marginBottom: "3rem" }} />

          {/* Key Works */}
          <div style={{ marginBottom: "4rem" }}>
            <p className="font-mono uppercase tracking-widest mb-6" style={{ fontSize: "9px", color: MUTED }}>
              Key Works
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {p.keyWorks.map((work) => (
                <div
                  key={work.id}
                  style={{
                    borderLeft: `2px solid ${GOLD}60`,
                    paddingLeft: "14px",
                    paddingTop: "2px",
                    paddingBottom: "2px",
                  }}
                >
                  <p style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    color: DARK,
                    lineHeight: 1.3,
                    marginBottom: "4px",
                  }}>
                    {work.title}
                  </p>
                  <p className="font-mono" style={{ fontSize: "8px", color: GOLD, marginBottom: "6px", letterSpacing: "0.04em" }}>
                    {work.date} · {work.location}
                  </p>
                  <p style={{
                    fontFamily: "'Raleway', system-ui, sans-serif",
                    fontWeight: 300,
                    fontSize: "0.78rem",
                    lineHeight: 1.65,
                    color: "rgba(42,30,16,0.65)",
                  }}>
                    {work.why}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Thin divider */}
          <div style={{ height: "1px", background: "rgba(42,30,16,0.08)", marginBottom: "2.5rem" }} />

          {/* Facts strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6" style={{ paddingBottom: "3rem" }}>
            {factItems.map((f) => (
              <div key={f.label}>
                <p className="font-mono uppercase tracking-widest mb-2" style={{ fontSize: "8px", color: MUTED }}>
                  {f.label}
                </p>
                <p style={{
                  fontFamily: "'Raleway', system-ui, sans-serif",
                  fontWeight: 300,
                  fontSize: "0.78rem",
                  lineHeight: 1.6,
                  color: "rgba(42,30,16,0.7)",
                }}>
                  {f.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      <StickyBreadcrumb isSticky={isSticky} left={civStickyLeft} right={civPageTitle} />
      <TimelineButton />
      </div>
    );
  }

  // ── Ancient civilization pages (Mesopotamia, Egypt, Greece, Rome) ──────────
  const ancientCiv = ANCIENT_CIVILIZATIONS.find((c) => c.id === id);

  if (ancientCiv) {
    const ac = ancientCiv;
    const sections = [
      { label: "Overview",          text: ac.overview },
      { label: "Historical Context", text: ac.historicalContext },
      { label: "Why It Mattered",   text: ac.whyItMattered },
    ];
    const factItems = [
      { label: "Duration",        value: ac.facts.duration },
      { label: "Where",           value: ac.facts.where },
      { label: "Medium",          value: ac.facts.medium },
      { label: "Defining Quality",value: ac.facts.defining },
      { label: "Legacy",          value: ac.facts.legacy },
    ];

    return (
      <div style={{ background: "#EDE8DF", minHeight: "100vh", ...slideStyle }} className="pt-16">
        <div className="max-w-5xl mx-auto px-8 py-10">

          {/* Back link */}
          <button
            onClick={() => navigate("/timeline", { state: { highlightDot: ac.id } })}
            className="flex items-center gap-2 mb-10 transition-colors duration-200"
            style={{ color: MUTED, fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
            onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
            Timeline
          </button>

          {/* Hero */}
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ marginBottom: "1rem" }}>
              <span
                className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5"
                style={{ color: GOLD, border: "1px solid rgba(201,168,76,0.4)", borderRadius: "2px" }}
              >
                {ac.dates}
              </span>
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "3.75rem",
              color: DARK,
              lineHeight: 1.0,
              marginBottom: "1rem",
              letterSpacing: "0.025em",
            }} ref={titleRef}>
              {ac.name}
            </h1>
            <p style={{
              fontFamily: "'Raleway', system-ui, sans-serif",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "1rem",
              lineHeight: 1.6,
              color: "rgba(42,30,16,0.6)",
              maxWidth: "680px",
            }}>
              {ac.tagline}
            </p>
          </div>

          {/* Mini timeline strip */}
          <CivMiniTimeline civId={ac.id} />

          {/* Gold divider */}
          <div style={{ height: "1px", background: `linear-gradient(to right, ${GOLD}40, transparent)`, marginBottom: "3rem" }} />

          {/* Three content sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10" style={{ marginBottom: "4rem" }}>
            {sections.map((s) => (
              <div key={s.label}>
                <p className="font-mono uppercase tracking-widest mb-4" style={{ fontSize: "9px", color: MUTED }}>
                  {s.label}
                </p>
                {s.text.split("\n\n").map((para, i, arr) => (
                  <p key={i} style={{
                    fontFamily: "'Raleway', system-ui, sans-serif",
                    fontWeight: 300,
                    fontSize: "0.8rem",
                    lineHeight: 1.8,
                    color: "rgba(42,30,16,0.75)",
                    marginBottom: i < arr.length - 1 ? "0.75rem" : 0,
                  }}>
                    {para.trim()}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Thin divider */}
          <div style={{ height: "1px", background: "rgba(42,30,16,0.08)", marginBottom: "3rem" }} />

          {/* Key Works */}
          <div style={{ marginBottom: "4rem" }}>
            <p className="font-mono uppercase tracking-widest mb-6" style={{ fontSize: "9px", color: MUTED }}>
              Key Works
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ac.keyWorks.map((work) => (
                <div
                  key={work.id}
                  style={{
                    borderLeft: `2px solid ${GOLD}60`,
                    paddingLeft: "14px",
                    paddingTop: "2px",
                    paddingBottom: "2px",
                  }}
                >
                  <p style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    color: DARK,
                    lineHeight: 1.3,
                    marginBottom: "4px",
                  }}>
                    {work.title}
                  </p>
                  <p className="font-mono" style={{ fontSize: "8px", color: GOLD, marginBottom: "0", letterSpacing: "0.04em" }}>
                    {work.date} · {work.location}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Thin divider */}
          <div style={{ height: "1px", background: "rgba(42,30,16,0.08)", marginBottom: "2.5rem" }} />

          {/* Facts strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6" style={{ paddingBottom: "3rem" }}>
            {factItems.map((f) => (
              <div key={f.label}>
                <p className="font-mono uppercase tracking-widest mb-2" style={{ fontSize: "8px", color: MUTED }}>
                  {f.label}
                </p>
                <p style={{
                  fontFamily: "'Raleway', system-ui, sans-serif",
                  fontWeight: 300,
                  fontSize: "0.78rem",
                  lineHeight: 1.6,
                  color: "rgba(42,30,16,0.7)",
                }}>
                  {f.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      <StickyBreadcrumb isSticky={isSticky} left={civStickyLeft} right={civPageTitle} />
      <TimelineButton />
      </div>
    );
  }

  // ── Baroque page ──────────────────────────────────────────────────────────
  if (id === "baroque") {
    const bc = BAROQUE_CIVILIZATION;
    const sections = [
      { label: "Overview",           text: bc.overview },
      { label: "Historical Context", text: bc.historicalContext },
      { label: "Why It Mattered",    text: bc.whyItMattered },
    ];
    const factItems = [
      { label: "Duration",         value: bc.facts.duration },
      { label: "Where",            value: bc.facts.where },
      { label: "Medium",           value: bc.facts.medium },
      { label: "Defining Quality", value: bc.facts.defining },
      { label: "Legacy",           value: bc.facts.legacy },
    ];

    return (
      <div style={{ background: "#EDE8DF", minHeight: "100vh", ...slideStyle }} className="pt-16">
        <div className="max-w-5xl mx-auto px-8 py-10">

          {/* Back link */}
          <button
            onClick={() => navigate("/timeline", { state: { highlightDot: "baroque" } })}
            className="flex items-center gap-2 mb-10 transition-colors duration-200"
            style={{ color: MUTED, fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
            onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
            Timeline
          </button>

          {/* Hero */}
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ marginBottom: "1rem" }}>
              <span
                className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5"
                style={{ color: GOLD, border: "1px solid rgba(201,168,76,0.4)", borderRadius: "2px" }}
              >
                {bc.dates}
              </span>
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "3.75rem",
              color: DARK,
              lineHeight: 1.0,
              marginBottom: "1rem",
              letterSpacing: "0.025em",
            }} ref={titleRef}>
              {bc.name}
            </h1>
            <p style={{
              fontFamily: "'Raleway', system-ui, sans-serif",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "1rem",
              lineHeight: 1.6,
              color: "rgba(42,30,16,0.6)",
              maxWidth: "680px",
            }}>
              {bc.tagline}
            </p>
          </div>

          {/* Mini timeline strip */}
          <CivMiniTimeline civId="baroque" />

          {/* Gold divider */}
          <div style={{ height: "1px", background: `linear-gradient(to right, ${GOLD}40, transparent)`, marginBottom: "3rem" }} />

          {/* Three content sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10" style={{ marginBottom: "4rem" }}>
            {sections.map((s) => (
              <div key={s.label}>
                <p className="font-mono uppercase tracking-widest mb-4" style={{ fontSize: "9px", color: MUTED }}>
                  {s.label}
                </p>
                {s.text.split("\n\n").map((para, i, arr) => (
                  <p key={i} style={{
                    fontFamily: "'Raleway', system-ui, sans-serif",
                    fontWeight: 300,
                    fontSize: "0.8rem",
                    lineHeight: 1.8,
                    color: "rgba(42,30,16,0.75)",
                    marginBottom: i < arr.length - 1 ? "0.75rem" : 0,
                  }}>
                    {para.trim()}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Thin divider */}
          <div style={{ height: "1px", background: "rgba(42,30,16,0.08)", marginBottom: "2.5rem" }} />

          {/* Facts strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6" style={{ paddingBottom: "3rem" }}>
            {factItems.map((f) => (
              <div key={f.label}>
                <p className="font-mono uppercase tracking-widest mb-2" style={{ fontSize: "8px", color: MUTED }}>
                  {f.label}
                </p>
                <p style={{
                  fontFamily: "'Raleway', system-ui, sans-serif",
                  fontWeight: 300,
                  fontSize: "0.78rem",
                  lineHeight: 1.6,
                  color: "rgba(42,30,16,0.7)",
                }}>
                  {f.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      <StickyBreadcrumb isSticky={isSticky} left={civStickyLeft} right={civPageTitle} />
      <TimelineButton />
      </div>
    );
  }

  // ── Impressionism page ────────────────────────────────────────────────────
  if (id === "impressionism") {
    const ic = IMPRESSIONISM_CIVILIZATION;
    const sections = [
      { label: "Overview",           text: ic.overview },
      { label: "Historical Context", text: ic.historicalContext },
      { label: "Why It Mattered",    text: ic.whyItMattered },
    ];
    const factItems = [
      { label: "Duration",         value: ic.facts.duration },
      { label: "Where",            value: ic.facts.where },
      { label: "Medium",           value: ic.facts.medium },
      { label: "Defining Quality", value: ic.facts.defining },
      { label: "Legacy",           value: ic.facts.legacy },
    ];

    return (
      <div style={{ background: "#EDE8DF", minHeight: "100vh", ...slideStyle }} className="pt-16">
        <div className="max-w-5xl mx-auto px-8 py-10">

          {/* Back link */}
          <button
            onClick={() => navigate("/timeline", { state: { highlightDot: "impressionism" } })}
            className="flex items-center gap-2 mb-10 transition-colors duration-200"
            style={{ color: MUTED, fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
            onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
            Timeline
          </button>

          {/* Hero */}
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ marginBottom: "1rem" }}>
              <span
                className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5"
                style={{ color: GOLD, border: "1px solid rgba(201,168,76,0.4)", borderRadius: "2px" }}
              >
                {ic.dates}
              </span>
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "3.75rem",
              color: DARK,
              lineHeight: 1.0,
              marginBottom: "1rem",
              letterSpacing: "0.025em",
            }} ref={titleRef}>
              {ic.name}
            </h1>
            <p style={{
              fontFamily: "'Raleway', system-ui, sans-serif",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "1rem",
              lineHeight: 1.6,
              color: "rgba(42,30,16,0.6)",
              maxWidth: "680px",
            }}>
              {ic.tagline}
            </p>
          </div>

          {/* Mini timeline strip */}
          <CivMiniTimeline civId="impressionism" />

          {/* Gold divider */}
          <div style={{ height: "1px", background: `linear-gradient(to right, ${GOLD}40, transparent)`, marginBottom: "3rem" }} />

          {/* Three content sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10" style={{ marginBottom: "4rem" }}>
            {sections.map((s) => (
              <div key={s.label}>
                <p className="font-mono uppercase tracking-widest mb-4" style={{ fontSize: "9px", color: MUTED }}>
                  {s.label}
                </p>
                {s.text.split("\n\n").map((para, i, arr) => (
                  <p key={i} style={{
                    fontFamily: "'Raleway', system-ui, sans-serif",
                    fontWeight: 300,
                    fontSize: "0.8rem",
                    lineHeight: 1.8,
                    color: "rgba(42,30,16,0.75)",
                    marginBottom: i < arr.length - 1 ? "0.75rem" : 0,
                  }}>
                    {para.trim()}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Thin divider */}
          <div style={{ height: "1px", background: "rgba(42,30,16,0.08)", marginBottom: "3rem" }} />

          {/* Key Works */}
          <div style={{ marginBottom: "4rem" }}>
            <p className="font-mono uppercase tracking-widest mb-6" style={{ fontSize: "9px", color: MUTED }}>
              Key Works
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ic.keyWorks.map((work) => (
                <div
                  key={work.id}
                  style={{ borderLeft: `2px solid ${GOLD}60`, paddingLeft: "14px" }}
                >
                  <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600, fontSize: "0.875rem", color: DARK, lineHeight: 1.3, marginBottom: "4px" }}>
                    {work.title}
                  </p>
                  <p className="font-mono" style={{ fontSize: "8px", color: GOLD, letterSpacing: "0.04em" }}>
                    {work.date} · {work.location}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Thin divider */}
          <div style={{ height: "1px", background: "rgba(42,30,16,0.08)", marginBottom: "2.5rem" }} />

          {/* Facts strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6" style={{ paddingBottom: "3rem" }}>
            {factItems.map((f) => (
              <div key={f.label}>
                <p className="font-mono uppercase tracking-widest mb-2" style={{ fontSize: "8px", color: MUTED }}>
                  {f.label}
                </p>
                <p style={{ fontFamily: "'Raleway', system-ui, sans-serif", fontWeight: 300, fontSize: "0.78rem", lineHeight: 1.6, color: "rgba(42,30,16,0.7)" }}>
                  {f.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      <StickyBreadcrumb isSticky={isSticky} left={civStickyLeft} right={civPageTitle} />
      <TimelineButton />
      </div>
    );
  }

  // ── Medieval civilization pages (Byzantine, Islamic, Medieval Europe) ──────
  const medievalCiv = MEDIEVAL_CIVILIZATIONS.find((c) => c.id === id);

  if (medievalCiv) {
    const mc = medievalCiv;
    const sections = [
      { label: "Overview",           text: mc.overview },
      { label: "Historical Context", text: mc.historicalContext },
      { label: "Why It Mattered",    text: mc.whyItMattered },
    ];
    const factItems = [
      { label: "Duration",         value: mc.facts.duration },
      { label: "Where",            value: mc.facts.where },
      { label: "Medium",           value: mc.facts.medium },
      { label: "Defining Quality", value: mc.facts.defining },
      { label: "Legacy",           value: mc.facts.legacy },
    ];

    return (
      <div style={{ background: "#EDE8DF", minHeight: "100vh", ...slideStyle }} className="pt-16">
        <div className="max-w-5xl mx-auto px-8 py-10">

          {/* Back link */}
          <button
            onClick={() => navigate("/timeline", { state: { highlightDot: mc.id } })}
            className="flex items-center gap-2 mb-10 transition-colors duration-200"
            style={{ color: MUTED, fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
            onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
            Timeline
          </button>

          {/* Hero */}
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ marginBottom: "1rem" }}>
              <span
                className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5"
                style={{ color: GOLD, border: "1px solid rgba(201,168,76,0.4)", borderRadius: "2px" }}
              >
                {mc.dates}
              </span>
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "3.75rem",
              color: DARK,
              lineHeight: 1.0,
              marginBottom: "1rem",
              letterSpacing: "0.025em",
            }} ref={titleRef}>
              {mc.name}
            </h1>
            <p style={{
              fontFamily: "'Raleway', system-ui, sans-serif",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "1rem",
              lineHeight: 1.6,
              color: "rgba(42,30,16,0.6)",
              maxWidth: "680px",
            }}>
              {mc.tagline}
            </p>
          </div>

          {/* Mini timeline strip */}
          <CivMiniTimeline civId={mc.id} />

          {/* Gold divider */}
          <div style={{ height: "1px", background: `linear-gradient(to right, ${GOLD}40, transparent)`, marginBottom: "3rem" }} />

          {/* Three content sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10" style={{ marginBottom: "4rem" }}>
            {sections.map((s) => (
              <div key={s.label}>
                <p className="font-mono uppercase tracking-widest mb-4" style={{ fontSize: "9px", color: MUTED }}>
                  {s.label}
                </p>
                {s.text.split("\n\n").map((para, i, arr) => (
                  <p key={i} style={{
                    fontFamily: "'Raleway', system-ui, sans-serif",
                    fontWeight: 300,
                    fontSize: "0.8rem",
                    lineHeight: 1.8,
                    color: "rgba(42,30,16,0.75)",
                    marginBottom: i < arr.length - 1 ? "0.75rem" : 0,
                  }}>
                    {para.trim()}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Thin divider */}
          <div style={{ height: "1px", background: "rgba(42,30,16,0.08)", marginBottom: "2.5rem" }} />

          {/* Facts strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6" style={{ paddingBottom: "3rem" }}>
            {factItems.map((f) => (
              <div key={f.label}>
                <p className="font-mono uppercase tracking-widest mb-2" style={{ fontSize: "8px", color: MUTED }}>
                  {f.label}
                </p>
                <p style={{
                  fontFamily: "'Raleway', system-ui, sans-serif",
                  fontWeight: 300,
                  fontSize: "0.78rem",
                  lineHeight: 1.6,
                  color: "rgba(42,30,16,0.7)",
                }}>
                  {f.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      <StickyBreadcrumb isSticky={isSticky} left={civStickyLeft} right={civPageTitle} />
      <TimelineButton />
      </div>
    );
  }

  // ── Modern & Contemporary page ────────────────────────────────────────────
  if (id === "modern") {
    const mo = MODERN_CIVILIZATION;
    const sections = [
      { label: "Overview",           text: mo.overview },
      { label: "Historical Context", text: mo.historicalContext },
      { label: "Why It Mattered",    text: mo.whyItMattered },
    ];
    const factItems = [
      { label: "Duration",         value: mo.facts.duration },
      { label: "Where",            value: mo.facts.where },
      { label: "Medium",           value: mo.facts.medium },
      { label: "Defining Quality", value: mo.facts.defining },
      { label: "Legacy",           value: mo.facts.legacy },
    ];

    return (
      <div style={{ background: "#EDE8DF", minHeight: "100vh", ...slideStyle }} className="pt-16">
        <div className="max-w-5xl mx-auto px-8 py-10">

          {/* Back link */}
          <button
            onClick={() => navigate("/timeline", { state: { highlightDot: "modern" } })}
            className="flex items-center gap-2 mb-10 transition-colors duration-200"
            style={{ color: MUTED, fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
            onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
            Timeline
          </button>

          {/* Hero */}
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ marginBottom: "1rem" }}>
              <span
                className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5"
                style={{ color: GOLD, border: "1px solid rgba(201,168,76,0.4)", borderRadius: "2px" }}
              >
                {mo.dates}
              </span>
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: "3.75rem",
              color: DARK,
              lineHeight: 1.0,
              marginBottom: "1rem",
              letterSpacing: "0.025em",
            }} ref={titleRef}>
              {mo.name}
            </h1>
            <p style={{
              fontFamily: "'Raleway', system-ui, sans-serif",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "1rem",
              lineHeight: 1.6,
              color: "rgba(42,30,16,0.6)",
              maxWidth: "680px",
            }}>
              {mo.tagline}
            </p>
          </div>

          {/* Mini timeline strip */}
          <CivMiniTimeline civId="modern" />

          {/* Gold divider */}
          <div style={{ height: "1px", background: `linear-gradient(to right, ${GOLD}40, transparent)`, marginBottom: "3rem" }} />

          {/* Three content sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10" style={{ marginBottom: "4rem" }}>
            {sections.map((s) => (
              <div key={s.label}>
                <p className="font-mono uppercase tracking-widest mb-4" style={{ fontSize: "9px", color: MUTED }}>
                  {s.label}
                </p>
                {s.text.split("\n\n").map((para, i, arr) => (
                  <p key={i} style={{
                    fontFamily: "'Raleway', system-ui, sans-serif",
                    fontWeight: 300,
                    fontSize: "0.8rem",
                    lineHeight: 1.8,
                    color: "rgba(42,30,16,0.75)",
                    marginBottom: i < arr.length - 1 ? "0.75rem" : 0,
                  }}>
                    {para.trim()}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Thin divider */}
          <div style={{ height: "1px", background: "rgba(42,30,16,0.08)", marginBottom: "2.5rem" }} />

          {/* Facts strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6" style={{ paddingBottom: "3rem" }}>
            {factItems.map((f) => (
              <div key={f.label}>
                <p className="font-mono uppercase tracking-widest mb-2" style={{ fontSize: "8px", color: MUTED }}>
                  {f.label}
                </p>
                <p style={{
                  fontFamily: "'Raleway', system-ui, sans-serif",
                  fontWeight: 300,
                  fontSize: "0.78rem",
                  lineHeight: 1.6,
                  color: "rgba(42,30,16,0.7)",
                }}>
                  {f.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      <StickyBreadcrumb isSticky={isSticky} left={civStickyLeft} right={civPageTitle} />
      <TimelineButton />
      </div>
    );
  }

  // ── Renaissance page ───────────────────────────────────────────────────────
  const civ = id === "renaissance" ? RENAISSANCE_CIVILIZATION : null;

  if (!civ) {
    return (
      <div style={{ background: "#EDE8DF", minHeight: "100vh", ...slideStyle }} className="pt-16">
        <div className="max-w-3xl mx-auto px-8 py-12">
          <button
            onClick={() => navigate("/timeline", { state: { highlightDot: id } })}
            className="flex items-center gap-2 mb-8 transition-colors duration-200"
            style={{ color: MUTED, fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
            onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
            Timeline
          </button>
          <p style={{ fontFamily: "'Raleway', sans-serif", color: MUTED }}>Coming soon.</p>
        </div>
      <StickyBreadcrumb isSticky={isSticky} left={civStickyLeft} right={civPageTitle} />
      <TimelineButton />
      </div>
    );
  }

  const sections = [
    { label: "Overview", text: civ.overview },
    { label: "Historical Context", text: civ.historicalContext },
    { label: "Why It Mattered", text: civ.whyItMattered },
  ];

  return (
    <div style={{ background: "#EDE8DF", minHeight: "100vh", ...slideStyle }} className="pt-16">
      <div className="max-w-5xl mx-auto px-8 py-10">

        {/* Back link */}
        <button
          onClick={() => navigate("/timeline", { state: { highlightDot: civ.id } })}
          className="flex items-center gap-2 mb-10 transition-colors duration-200"
          style={{ color: MUTED, fontFamily: "'Raleway', sans-serif", fontWeight: 300, fontSize: "0.8rem", background: "none", border: "none", cursor: "pointer", padding: 0 }}
          onMouseEnter={(e) => (e.currentTarget.style.color = DARK)}
          onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
        >
          <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
          Timeline
        </button>

        {/* Hero */}
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <span
              className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5"
              style={{ color: GOLD, border: "1px solid rgba(201,168,76,0.4)", borderRadius: "2px" }}
            >
              {civ.dates}
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: "3.75rem",
            color: DARK,
            lineHeight: 1.0,
            marginBottom: "1rem",
            letterSpacing: "0.025em",
          }} ref={titleRef}>
            {civ.name}
          </h1>

          <p style={{
            fontFamily: "'Raleway', system-ui, sans-serif",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "1rem",
            lineHeight: 1.6,
            color: "rgba(42,30,16,0.6)",
            maxWidth: "680px",
          }}>
            {civ.tagline}
          </p>
        </div>

        {/* Mini timeline strip — immediately after title/tagline */}
        <RenaissanceMiniTimeline />

        {/* Gold divider */}
        <div style={{ height: "1px", background: `linear-gradient(to right, ${GOLD}40, transparent)`, marginBottom: "3rem" }} />

        {/* Three content sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10" style={{ marginBottom: "4rem" }}>
          {sections.map((s) => (
            <div key={s.label}>
              <p className="font-mono uppercase tracking-widest mb-4" style={{ fontSize: "9px", color: MUTED }}>
                {s.label}
              </p>
              {s.text.split("\n\n").map((para, i, arr) => (
                <p key={i} style={{
                  fontFamily: "'Raleway', system-ui, sans-serif",
                  fontWeight: 300,
                  fontSize: "0.8rem",
                  lineHeight: 1.8,
                  color: "rgba(42,30,16,0.75)",
                  marginBottom: i < arr.length - 1 ? "0.75rem" : 0,
                }}>
                  {para.trim()}
                </p>
              ))}
            </div>
          ))}
        </div>

      <Footer />
      <StickyBreadcrumb isSticky={isSticky} left={civStickyLeft} right={civPageTitle} />
      <TimelineButton />
      </div>
    </div>
  );
}
