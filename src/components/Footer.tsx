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
  { label: "Support the project", to: "https://ko-fi.com/artthroughtheages", external: true },
];

function NavLink({ label, to, external }: { label: string; to: string; external?: boolean }) {
  const style = {
    fontFamily: "'Raleway', system-ui, sans-serif",
    fontWeight: 300,
    fontSize: "10px",
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "rgba(201,168,76,0.65)",
    textDecoration: "none",
    padding: "2px 10px",
    borderRadius: "2px",
    transition: "color 0.15s, background 0.15s",
  };
  const onEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = GOLD;
    e.currentTarget.style.background = "rgba(201,168,76,0.07)";
  };
  const onLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = "rgba(201,168,76,0.38)";
    e.currentTarget.style.background = "transparent";
  };

  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer"
        style={style} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        {label}
      </a>
    );
  }
  return (
    <Link to={to} style={style} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "#1A1208", borderTop: "1px solid rgba(201,168,76,0.12)" }}>
      <div style={{
        maxWidth: "72rem",
        margin: "0 auto",
        padding: "1.5rem 2rem",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        gap: "1rem",
      }}>

        {/* Left: wordmark */}
        <p style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: 700,
          fontSize: "1rem",
          letterSpacing: "0.03em",
          color: GOLD,
        }}>
          Art Through the Ages
        </p>

        {/* Centre: two rows of links */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.3rem" }}>
          {/* Row 1 */}
          <nav style={{ display: "flex", alignItems: "center" }}>
            {ROW1_LINKS.map((link) => (
              <NavLink key={link.to} {...link} />
            ))}
          </nav>

          <div style={{ height: "1px", width: "100%", background: "rgba(201,168,76,0.07)" }} />

          {/* Row 2 */}
          <nav style={{ display: "flex", alignItems: "center" }}>
            {ROW2_LINKS.map((link) => (
              <NavLink key={link.to} {...link} />
            ))}
          </nav>
        </div>

        {/* Right: copyright */}
        <p style={{
          fontFamily: "'Raleway', system-ui, sans-serif",
          fontWeight: 300,
          fontSize: "9px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(201,168,76,0.4)",
          textAlign: "right",
        }}>
          © {new Date().getFullYear()} Art Through the Ages
        </p>

      </div>
    </footer>
  );
}
