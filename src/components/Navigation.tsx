import { Search, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const GOLD = "#C9A84C";
const WARM_WHITE = "#F0EAD6";

const NAV_LINKS = [
  { label: "Timeline", path: "/timeline" },
  { label: "Geography", path: "/geography" },
  { label: "Masterworks", path: "/masterworks" },
  { label: "Artists", path: "/artists" },
];

export default function Navigation() {
  const location = useLocation();
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <nav
      className="fixed top-0 w-full z-50 h-14 px-8 flex items-center justify-between"
      style={{
        background: "rgba(12, 10, 7, 0.92)",
        borderBottom: "1px solid rgba(201, 168, 76, 0.12)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: 700,
          fontSize: "1.1rem",
          color: GOLD,
          letterSpacing: "0.02em",
          textDecoration: "none",
        }}
      >
        Art Through the Ages
      </Link>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontFamily: "'Raleway', system-ui, sans-serif",
                fontSize: "11px",
                fontWeight: 300,
                textTransform: "uppercase" as const,
                letterSpacing: "0.18em",
                textDecoration: "none",
                color: isActive ? GOLD : `${WARM_WHITE}60`,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = WARM_WHITE; }}
              onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = `${WARM_WHITE}60`; }}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* Search */}
      <div
        className="flex items-center gap-2 px-3 py-1 transition-colors duration-200"
        style={{
          border: `1px solid ${searchFocused ? "rgba(201,168,76,0.4)" : "rgba(201,168,76,0.15)"}`,
          background: searchFocused ? "rgba(201,168,76,0.06)" : "transparent",
          borderRadius: "2px",
        }}
      >
        <Search className="w-3.5 h-3.5" strokeWidth={1.5} style={{ color: "rgba(201,168,76,0.5)" }} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-20 focus:w-32 transition-all duration-300"
          style={{
            fontSize: "11px",
            fontFamily: "'Raleway', system-ui, sans-serif",
            color: WARM_WHITE,
          }}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
        />
      </div>
    </nav>
  );
}
