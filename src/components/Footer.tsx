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

            {/* Ko-fi button inline */}
            <a
              href="https://ko-fi.com/artthroughtheages"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                padding: "2px 10px",
                marginLeft: "2px",
                background: "transparent",
                border: "1px solid rgba(255,94,91,0.45)",
                borderRadius: "2px",
                textDecoration: "none",
                fontFamily: "'Raleway', system-ui, sans-serif",
                fontWeight: 300,
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(255,94,91,0.6)",
                transition: "color 0.15s, border-color 0.15s, background 0.15s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "#FF5E5B";
                el.style.borderColor = "rgba(255,94,91,0.8)";
                el.style.background = "rgba(255,94,91,0.06)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "rgba(255,94,91,0.6)";
                el.style.borderColor = "rgba(255,94,91,0.45)";
                el.style.background = "transparent";
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"/>
              </svg>
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
