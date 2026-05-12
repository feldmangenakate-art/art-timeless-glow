import { useState } from "react";
import { Link } from "react-router-dom";
import { getTodayInArt } from "@/data/civilizations";

const GOLD = "#C9A84C";

const NAV_CARDS = [
  { name: "Timeline",    desc: "40,000 years of art history",      path: "/timeline",    accent: "#C9A84C" },
  { name: "Geography",   desc: "Art by place and civilization",     path: "/geography",   accent: "#4A8C6A" },
  { name: "Masterworks", desc: "The most iconic works ever made",   path: "/masterworks", accent: "#A03030" },
  { name: "Artists",     desc: "Lives behind the masterworks",      path: "/artists",     accent: "#3060A0" },
];

const FEATURED = [
  { image: "/timeline/mona-lisa.webp",   label: "Masterwork",   title: "Mona Lisa",         subtitle: "Leonardo da Vinci · 1503–1519",  href: "/masterworks/mona-lisa" },
  { image: "/artists/leonardo.jpg",      label: "Artist",       title: "Leonardo da Vinci", subtitle: "1452–1519 · Italian Renaissance", href: "/artists/leonardo-da-vinci" },
  { image: "/timeline/renaissance.webp", label: "Civilization", title: "The Renaissance",   subtitle: "1400–1600 · Italy & Europe",      href: "/civilization/renaissance" },
];

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

function FeaturedCard({ image, label, title, subtitle, href }: (typeof FEATURED)[0]) {
  const [hovered, setHovered] = useState(false);
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
      <div style={{ height: 200, overflow: "hidden" }}>
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", transition: "transform 0.4s ease", transform: hovered ? "scale(1.04)" : "scale(1)" }}
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

export default function Index() {
  const todayEvent = getTodayInArt();

  return (
    <main style={{ minHeight: "100vh" }}>

      {/* HERO — 65vh */}
      <section style={{ position: "relative", height: "65vh", minHeight: 380, overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/timeline/birth-of-venus.webp')", backgroundSize: "cover", backgroundPosition: "62% 15%", zIndex: 0 }} />

        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(12,10,7,0.4) 0%, rgba(12,10,7,0.62) 55%, rgba(245,240,232,1) 100%)", zIndex: 1 }} />

        <div style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: "56rem", padding: "0 2rem" }}>

          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: "72px", lineHeight: 1.05, color: "#F0EAD6", letterSpacing: "-0.01em", marginBottom: "0.9rem", textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}>
            Art Through the Ages
          </h1>

          <p style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontStyle: "italic", fontSize: "1rem", color: "rgba(240,234,214,0.7)", lineHeight: 1.5, marginBottom: "1.5rem" }}>
            From cave walls to the present &#8212; 40,000 years of human creativity
          </p>

          <div style={{ width: 60, height: 1, background: GOLD, opacity: 0.4, margin: "0 auto 1.5rem" }} />

          {todayEvent && (
            <>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem", padding: "0.3rem 0.9rem", borderRadius: 9999, border: "1px solid rgba(201,168,76,0.4)", background: "rgba(12,10,7,0.45)", backdropFilter: "blur(2px)" }}>
                <span className="animate-pulse-dot" style={{ display: "inline-block", width: 5, height: 5, borderRadius: "50%", backgroundColor: GOLD, flexShrink: 0 }} />
                <span style={{ fontFamily: "'Courier New', monospace", fontSize: 8, color: GOLD, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                  Today in Art History
                </span>
              </div>

              <p style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontStyle: "italic", fontSize: "0.85rem", color: "rgba(240,234,214,0.65)", lineHeight: 1.5, maxWidth: "38rem", margin: "0 auto" }}>
                {todayEvent}
              </p>
            </>
          )}

        </div>
      </section>

      {/* ABOVE-FOLD CARDS — 35vh */}
      <div style={{ backgroundColor: "#F5F0E8", padding: "28px 40px 20px", display: "flex", flexDirection: "column", alignItems: "center", boxSizing: "border-box" }}>

        {todayEvent && (
          <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "0.8rem", color: "rgba(130,100,40,0.75)", letterSpacing: "0.015em", marginBottom: "16px", textAlign: "center" }}>
            Today &#183; {todayEvent}
          </p>
        )}

        <div style={{ width: "100%", maxWidth: "72rem", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
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
        <section style={{ padding: "0.75rem 2rem 2rem" }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontWeight: 700, fontSize: "1.9rem", color: "rgba(42,30,16,0.45)", textAlign: "center", marginBottom: "2.75rem" }}>
            Where would you like to begin?
          </h2>
          <div style={{ maxWidth: "64rem", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {FEATURED.map((item) => (
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
            background: "#FAF8F4",
            border: "1px solid rgba(201,168,76,0.2)",
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: "0 1px 3px rgba(42,30,16,0.04)",
          }}>
            {/* Image */}
            <div style={{ flexShrink: 0, width: "42%", minHeight: 340 }}>
              <img
                src="/timeline/las-meninas.webp"
                alt="Las Meninas"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
              />
            </div>

            {/* Text */}
            <div style={{ padding: "2.25rem 2.5rem", display: "flex", flexDirection: "column", justifyContent: "center", gap: "0.6rem" }}>
              <p style={{
                fontFamily: "'Raleway', system-ui, sans-serif",
                fontWeight: 400,
                fontSize: "0.6rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: GOLD,
                marginBottom: "0.25rem",
              }}>
                Baroque · Spain
              </p>
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: "2rem",
                color: "#2A1E10",
                lineHeight: 1.1,
                marginBottom: "0.15rem",
              }}>
                Las Meninas
              </h3>
              <p style={{
                fontFamily: "'Raleway', system-ui, sans-serif",
                fontWeight: 300,
                fontSize: "0.8rem",
                color: "rgba(42,30,16,0.5)",
                marginBottom: "0.1rem",
              }}>
                Diego Velázquez · 1656
              </p>
              <p style={{
                fontFamily: "'Raleway', system-ui, sans-serif",
                fontWeight: 300,
                fontSize: "0.75rem",
                color: "rgba(42,30,16,0.4)",
                marginBottom: "1rem",
              }}>
                Museo del Prado, Madrid
              </p>
              <p style={{
                fontFamily: "'Libre Baskerville', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "0.875rem",
                color: "rgba(42,30,16,0.65)",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
              }}>
                The most analyzed painting in Western art. Velázquez paints himself at work, the Infanta Margarita surrounded by her attendants — and in a mirror at the back of the room, the blurred reflections of the king and queen. You are standing where the monarchs stood.
              </p>
              <Link
                to="/masterworks/las-meninas"
                style={{
                  fontFamily: "'Raleway', system-ui, sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.08em",
                  color: GOLD,
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(201,168,76,0.4)",
                  paddingBottom: "1px",
                  alignSelf: "flex-start",
                }}
              >
                Explore &#8594;
              </Link>
            </div>
          </div>
        </section>
      </div>

    </main>
  );
}
