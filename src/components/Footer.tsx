import { Link } from "react-router-dom";

const GOLD = "#C9A84C";

const ROW1_LINKS = [
  { label: "Timeline", to: "/timeline" },
  { label: "Geography", to: "/geography" },
  { label: "Masterworks", to: "/masterworks" },
  { label: "Artists", to: "/artists" },
  { label: "Collection", to: "/masterworks?tab=collection" },
];

const ROW2_LINKS = [
  { label: "About", to: "/about" },
  { label: "Legal", to: "/legal" },
];

function NavLink({ label, to }: { label: string; to: string }) {
  return (
    <Link
      to={to}
      style={{
        fontFamily: "'Raleway', system-ui, sans-serif",
        fontWeight: 300,
        fontSize: "10px",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "rgba(201,168,76,0.38)",
        textDecoration: "none",
        padding: "2px 10px",
        borderRadius: "2px",
        transition: "color 0.15s, background 0.15s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color = GOLD;
        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,168,76,0.07)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.color = "rgba(201,168,76,0.38)";
        (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
      }}
    >
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "#1A1208", borderTop: "1px solid rgba(201,168,76,0.12)" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0.85rem 2rem" }}>

        {/* Row 1: main nav */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "0.45rem",
        }}>
          <nav style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
            {ROW1_LINKS.map((link) => (
              <NavLink key={link.to} {...link} />
            ))}
          </nav>

          <p style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 700,
            fontSize: "0.85rem",
            letterSpacing: "0.03em",
            color: `${GOLD}55`,
            flexShrink: 0,
          }}>
            Art Through the Ages
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(201,168,76,0.07)", marginBottom: "0.45rem" }} />

        {/* Row 2: About · Support · Legal · copyright */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0", flexWrap: "wrap" }}>
            {ROW2_LINKS.map((link) => (
              <NavLink key={link.to} {...link} />
            ))}

            {/* Ko-fi link — same style as other footer links */}
            <a
              href="https://ko-fi.com/artthroughtheages"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Raleway', system-ui, sans-serif",
                fontWeight: 300,
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.38)",
                textDecoration: "none",
                padding: "2px 10px",
                borderRadius: "2px",
                transition: "color 0.15s, background 0.15s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = GOLD;
                el.style.background = "rgba(201,168,76,0.07)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "rgba(201,168,76,0.38)";
                el.style.background = "transparent";
              }}
            >
              Support the project
            </a>
          </div>

          <p style={{
            fontFamily: "'Raleway', system-ui, sans-serif",
            fontWeight: 300,
            fontSize: "9px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(201,168,76,0.18)",
            flexShrink: 0,
          }}>
            © {new Date().getFullYear()} Art Through the Ages
          </p>
        </div>

      </div>
    </footer>
  );
}
