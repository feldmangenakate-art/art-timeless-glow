import { Link } from "react-router-dom";

const GOLD = "#C9A84C";
const DARK = "#2A1E10";
const MUTED = "rgba(42,30,16,0.4)";

const NAV_LINKS = [
  { label: "Timeline", to: "/timeline" },
  { label: "Geography", to: "/geography" },
  { label: "Masterworks", to: "/masterworks" },
  { label: "Artists", to: "/artists" },
  { label: "Collection", to: "/masterworks?tab=collection" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1A1208",
        borderTop: `1px solid rgba(201,168,76,0.15)`,
        marginTop: "auto",
      }}
    >
      {/* Gold rule */}
      <div style={{
        height: "1px",
        background: `linear-gradient(to right, transparent, ${GOLD}55, transparent)`,
      }} />

      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "3rem 2rem 2rem",
        }}
      >
        {/* Top row: wordmark + nav */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Wordmark */}
          <div>
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: "1.35rem",
                letterSpacing: "0.03em",
                color: GOLD,
                marginBottom: "0.35rem",
              }}
            >
              Art Through the Ages
            </p>
            <p
              style={{
                fontFamily: "'Raleway', system-ui, sans-serif",
                fontWeight: 300,
                fontSize: "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.4)",
              }}
            >
              From the first mark to the present
            </p>
          </div>

          {/* Nav links */}
          <nav
            style={{
              display: "flex",
              gap: "0.25rem",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  fontFamily: "'Raleway', system-ui, sans-serif",
                  fontWeight: 300,
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(201,168,76,0.5)",
                  textDecoration: "none",
                  padding: "4px 12px",
                  borderRadius: "2px",
                  transition: "color 0.15s, background 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = GOLD;
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,168,76,0.07)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(201,168,76,0.5)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div style={{
          height: "1px",
          background: "rgba(201,168,76,0.08)",
          marginBottom: "1.5rem",
        }} />

        {/* Quote */}
        <p
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "0.8rem",
            color: "rgba(201,168,76,0.25)",
            textAlign: "center",
            letterSpacing: "0.02em",
            marginBottom: "1.5rem",
            lineHeight: 1.7,
          }}
        >
          "Art is not what you see, but what you make others see."
          <span style={{ display: "block", fontFamily: "'Raleway', sans-serif", fontStyle: "normal", fontSize: "9px", letterSpacing: "0.14em", textTransform: "uppercase", marginTop: "0.4rem", color: "rgba(201,168,76,0.18)" }}>
            Edgar Degas
          </span>
        </p>

        {/* Bottom row: copyright */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}>
          <p
            style={{
              fontFamily: "'Raleway', system-ui, sans-serif",
              fontWeight: 300,
              fontSize: "9px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(201,168,76,0.2)",
            }}
          >
            © {new Date().getFullYear()} Art Through the Ages — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
