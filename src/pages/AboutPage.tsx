import Footer from "@/components/Footer";

const GOLD = "#C9A84C";
const DARK = "#2A1E10";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16 flex flex-col" style={{ background: "#F5F0E8" }}>
      {/* Hero */}
      <section
        style={{
          maxWidth: "48rem",
          margin: "0 auto",
          padding: "4rem 2rem 2rem",
          width: "100%",
        }}
      >
        <p
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "9px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(201,168,76,0.55)",
            marginBottom: "1rem",
          }}
        >
          About this project
        </p>

        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            lineHeight: 1.05,
            color: DARK,
            letterSpacing: "0.01em",
            marginBottom: "1.5rem",
          }}
        >
          Art Through the Ages
        </h1>

        <div
          style={{
            height: "1px",
            background: `linear-gradient(to right, ${GOLD}55, transparent)`,
            marginBottom: "2rem",
          }}
        />

        {/* Body copy */}
        <div
          style={{
            fontFamily: "'Raleway', system-ui, sans-serif",
            fontWeight: 300,
            fontSize: "1rem",
            lineHeight: 1.85,
            color: "rgba(42,30,16,0.75)",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          <p>
            <em style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: DARK }}>Art Through the Ages</em> is
            a personal project born from a simple conviction: that the greatest works of human
            creativity deserve more than a museum label. Every painting, sculpture, and monument
            carried here has a story — of the person who made it, the world they lived in, and
            the leap of imagination that brought it into being.
          </p>
          <p>
            This is not a catalogue. It is a journey — organized by civilization, by movement, by
            geography — designed to let you follow your curiosity wherever it leads. From the
            cave paintings of Lascaux to Warhol's Brillo Boxes, the thread is unbroken: human
            beings have always needed to make images of the world, and of themselves.
          </p>
          <p>
            The site is built and maintained independently, without institutional funding. Every
            entry is written with care, every image selected for its quality and relevance.
            If you find it valuable — if it has sent you down a rabbit hole, changed how you look
            at a painting, or simply kept you company on a long afternoon — please consider
            supporting it. It makes a real difference.
          </p>
        </div>

        {/* Support button */}
        <div style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
          <a
            href="https://ko-fi.com/artthroughtheages"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 28px",
              background: "#FF5E5B",
              borderRadius: "4px",
              textDecoration: "none",
              fontFamily: "'Raleway', system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "13px",
              letterSpacing: "0.06em",
              color: "#fff",
              transition: "opacity 0.15s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            {/* Ko-fi cup icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"/>
            </svg>
            Support on Ko-fi
          </a>
        </div>

        <p
          style={{
            fontFamily: "'Raleway', system-ui, sans-serif",
            fontWeight: 300,
            fontSize: "11px",
            color: "rgba(42,30,16,0.35)",
            letterSpacing: "0.04em",
          }}
        >
          Every contribution, however small, helps keep this project alive and growing.
        </p>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(201,168,76,0.12)",
            margin: "3rem 0 2rem",
          }}
        />

        {/* What's inside */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
          {[
            { label: "Civilizations", value: "11", note: "From Prehistoric to Modern" },
            { label: "Masterworks", value: "25+", note: "Four-pillar deep dives" },
            { label: "Collection works", value: "79", note: "Linked to era & movement" },
            { label: "Artists", value: "50+", note: "Biographical entries" },
          ].map((stat) => (
            <div key={stat.label}>
              <p
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "2rem",
                  color: GOLD,
                  lineHeight: 1,
                  marginBottom: "0.25rem",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: "9px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: DARK,
                  marginBottom: "0.2rem",
                }}
              >
                {stat.label}
              </p>
              <p
                style={{
                  fontFamily: "'Raleway', system-ui, sans-serif",
                  fontWeight: 300,
                  fontSize: "11px",
                  color: "rgba(42,30,16,0.45)",
                }}
              >
                {stat.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ flex: 1 }} />
      <Footer />
    </main>
  );
}
