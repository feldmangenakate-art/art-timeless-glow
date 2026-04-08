import { getTodayInArt } from "@/data/civilizations";

const GOLD = "#C9A84C";
const WARM_WHITE = "#F0EAD6";

export default function Hero() {
  const todayEvent = getTodayInArt();

  return (
    <section
      className="relative flex flex-col items-center justify-center px-6 overflow-hidden"
      style={{ background: "#EDE8DF", paddingTop: "5rem", paddingBottom: "3rem" }}
    >
      {/* Blurred gold glow orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-10%",
          left: "-5%",
          width: "40vw",
          height: "40vw",
          background: `radial-gradient(circle, rgba(201,168,76,0.13) 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "5%",
          right: "-8%",
          width: "35vw",
          height: "35vw",
          background: `radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)`,
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "40%",
          left: "55%",
          width: "20vw",
          height: "20vw",
          background: `radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 text-center max-w-4xl animate-fade-in">

        {/* "Today in Art History" pill */}
        {todayEvent && (
          <div
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full"
            style={{
              border: `1px solid rgba(201,168,76,0.35)`,
              background: "rgba(201,168,76,0.06)",
            }}
          >
            <span
              className="rounded-full animate-pulse-dot"
              style={{
                display: "inline-block",
                width: "6px",
                height: "6px",
                backgroundColor: GOLD,
                flexShrink: 0,
              }}
            />
            <span
              className="font-mono uppercase tracking-widest"
              style={{
                fontSize: "9px",
                color: GOLD,
                letterSpacing: "0.18em",
              }}
            >
              Today in Art History
            </span>
          </div>
        )}

        {/* Hero title */}
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: "clamp(3.5rem, 10vw, 7.5rem)",
            lineHeight: 1.0,
            color: "#2A1E10",
            letterSpacing: "-0.01em",
            marginBottom: "1.25rem",
          }}
        >
          Art Through<br />the Ages
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(0.9rem, 2vw, 1.15rem)",
            color: "rgba(42,30,16,0.5)",
            marginBottom: "1.5rem",
          }}
        >
          From cave walls to the present — 40,000 years of human creativity.
        </p>

        {/* Today's event text */}
        {todayEvent && (
          <p
            className="font-mono mx-auto mb-8"
            style={{
              fontSize: "11px",
              color: "rgba(42,30,16,0.5)",
              maxWidth: "480px",
              lineHeight: 1.7,
              borderLeft: `2px solid rgba(201,168,76,0.3)`,
              paddingLeft: "12px",
              textAlign: "left",
            }}
          >
            {todayEvent}
          </p>
        )}

        {/* CTA buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="/timeline"
            className="inline-block px-8 py-3 font-mono text-xs uppercase tracking-[0.2em] font-bold transition-all duration-200"
            style={{
              background: GOLD,
              color: "#EDE8DF",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Explore Timeline
          </a>
          <a
            href="/masterworks"
            className="inline-block px-8 py-3 font-mono text-xs uppercase tracking-[0.2em] font-bold transition-all duration-200"
            style={{
              border: `1px solid rgba(201,168,76,0.4)`,
              color: GOLD,
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(201,168,76,0.08)";
              e.currentTarget.style.borderColor = "rgba(201,168,76,0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)";
            }}
          >
            Masterworks
          </a>
        </div>
      </div>
    </section>
  );
}
