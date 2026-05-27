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
    padding: "4px 10px",
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
    <>
      <style>{`
        .footer-inner {
          max-width: 72rem;
          margin: 0 auto;
          padding: 1.5rem 2rem;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 1rem;
        }
        .footer-wordmark {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 0.03em;
          color: ${GOLD};
          white-space: nowrap;
        }
        .footer-copyright {
          font-family: 'Raleway', system-ui, sans-serif;
          font-weight: 300;
          font-size: 9px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(201,168,76,0.4);
          text-align: right;
        }
        @media (max-width: 640px) {
          .footer-inner {
            grid-template-columns: 1fr;
            justify-items: center;
            text-align: center;
            gap: 1rem;
            padding: 1.5rem 1rem;
          }
          .footer-wordmark {
            font-size: 0.9rem;
          }
          .footer-copyright {
            text-align: center;
          }
        }
      `}</style>
      <footer style={{ background: "#1A1208", borderTop: "1px solid rgba(201,168,76,0.12)" }}>
        <div className="footer-inner">

          {/* Wordmark */}
          <p className="footer-wordmark">Art Through the Ages</p>

          {/* Centre: two rows of links */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.3rem" }}>
            <nav style={{ display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
              {ROW1_LINKS.map((link) => (
                <NavLink key={link.to} {...link} />
              ))}
            </nav>

            <div style={{ height: "1px", width: "100%", background: "rgba(201,168,76,0.07)" }} />

            <nav style={{ display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
              {ROW2_LINKS.map((link) => (
                <NavLink key={link.to} {...link} />
              ))}
            </nav>
          </div>

          {/* Copyright */}
          <p className="footer-copyright">
            © {new Date().getFullYear()} Art Through the Ages
          </p>

        </div>
      </footer>
    </>
  );
}
