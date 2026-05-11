import { Search } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { MASTERWORKS } from "@/data/masterworks";
import { RENAISSANCE_ARTISTS } from "@/data/artists-renaissance";
import { BAROQUE_ARTISTS } from "@/data/artists-baroque";
import { CENTURY_18_19_ARTISTS } from "@/data/artists-18th-19th";
import { MODERN_ARTISTS } from "@/data/artists-modern";

const ALL_ARTISTS = [...RENAISSANCE_ARTISTS, ...BAROQUE_ARTISTS, ...CENTURY_18_19_ARTISTS, ...MODERN_ARTISTS];

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
  const navigate = useNavigate();
  const [searchFocused, setSearchFocused] = useState(false);
  const [query, setQuery] = useState("");
  const [overlayOpen, setOverlayOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isHome = location.pathname === "/";

  const q = query.toLowerCase().trim();

  const matchedWorks = q.length < 1 ? [] : MASTERWORKS.filter(
    (w) => w.title.toLowerCase().includes(q) || w.artist.toLowerCase().includes(q)
  ).slice(0, 8);

  const matchedArtists = q.length < 1 ? [] : ALL_ARTISTS.filter(
    (a) => a.name.toLowerCase().includes(q) || a.movement.toLowerCase().includes(q)
  ).slice(0, 6);

  const hasResults = matchedWorks.length > 0 || matchedArtists.length > 0;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOverlayOpen(false); setQuery(""); inputRef.current?.blur(); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  function goTo(path: string) {
    setOverlayOpen(false);
    setQuery("");
    setSearchFocused(false);
    navigate(path);
  }

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 h-14 px-8 flex items-center justify-between"
        style={{
          background: isHome ? "rgba(12, 10, 7, 0.4)" : "rgba(12, 10, 7, 0.92)",
          borderBottom: isHome ? "1px solid rgba(201, 168, 76, 0.08)" : "1px solid rgba(201, 168, 76, 0.12)",
          backdropFilter: isHome ? "blur(8px)" : "blur(12px)",
          WebkitBackdropFilter: isHome ? "blur(8px)" : "blur(12px)",
          transition: "background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 600,
            fontSize: "1.1rem",
            color: isHome ? WARM_WHITE : GOLD,
            letterSpacing: "0.02em",
            textDecoration: "none",
            transition: "color 0.3s ease",
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
                  color: isActive ? GOLD : (isHome ? `${WARM_WHITE}CC` : `${WARM_WHITE}60`),
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = WARM_WHITE; }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = isHome ? `${WARM_WHITE}CC` : `${WARM_WHITE}60`; }}
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
            border: isHome
              ? `1px solid ${searchFocused ? "rgba(240,234,214,0.5)" : "rgba(240,234,214,0.25)"}`
              : `1px solid ${searchFocused ? "rgba(201,168,76,0.4)" : "rgba(201,168,76,0.15)"}`,
            background: searchFocused ? "rgba(201,168,76,0.06)" : "transparent",
            borderRadius: "2px",
            transition: "border-color 0.3s ease",
          }}
        >
          <Search className="w-3.5 h-3.5" strokeWidth={1.5} style={{ color: "rgba(201,168,76,0.5)" }} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            value={query}
            className="outline-none w-20 focus:w-32 transition-all duration-300 placeholder:text-[rgba(240,234,214,0.35)]"
            style={{
              fontSize: "11px",
              fontFamily: "'Raleway', system-ui, sans-serif",
              color: WARM_WHITE,
              backgroundColor: "transparent",
            }}
            onFocus={() => { setSearchFocused(true); setOverlayOpen(true); }}
            onBlur={() => setSearchFocused(false)}
            onChange={(e) => { setQuery(e.target.value); setOverlayOpen(true); }}
          />
        </div>
      </nav>

      {/* Search overlay */}
      {overlayOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 49,
            background: "rgba(10, 8, 5, 0.92)",
            backdropFilter: "blur(8px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "80px",
          }}
          onClick={() => { setOverlayOpen(false); setQuery(""); }}
        >
          <div
            style={{ width: "100%", maxWidth: "560px", padding: "0 24px" }}
            onClick={(e) => e.stopPropagation()}
          >
            {!q && (
              <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: `${WARM_WHITE}35`, textAlign: "center", marginTop: "24px" }}>
                Start typing to search artworks and artists
              </p>
            )}

            {q && !hasResults && (
              <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "11px", letterSpacing: "0.12em", color: `${WARM_WHITE}35`, textAlign: "center", marginTop: "24px" }}>
                No results for "{query}"
              </p>
            )}

            {matchedWorks.length > 0 && (
              <div style={{ marginBottom: "24px" }}>
                <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "9px", fontWeight: 300, letterSpacing: "0.2em", textTransform: "uppercase", color: `${WARM_WHITE}40`, marginBottom: "8px" }}>
                  Artworks
                </p>
                {matchedWorks.map((w) => (
                  <button
                    key={w.id}
                    onClick={() => goTo(`/masterworks/${w.id}`)}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      width: "100%",
                      padding: "9px 12px",
                      marginBottom: "2px",
                      background: "rgba(255,255,255,0.03)",
                      border: "none",
                      borderRadius: "2px",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.08)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
                  >
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.9rem", color: WARM_WHITE }}>{w.title}</span>
                    <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "10px", color: `${WARM_WHITE}45`, marginLeft: "12px", whiteSpace: "nowrap" }}>{w.era} · {w.year}</span>
                  </button>
                ))}
              </div>
            )}

            {matchedArtists.length > 0 && (
              <div>
                <p style={{ fontFamily: "'Raleway', sans-serif", fontSize: "9px", fontWeight: 300, letterSpacing: "0.2em", textTransform: "uppercase", color: `${WARM_WHITE}40`, marginBottom: "8px" }}>
                  Artists
                </p>
                {matchedArtists.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => goTo(`/artists/${a.id}`)}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      width: "100%",
                      padding: "9px 12px",
                      marginBottom: "2px",
                      background: "rgba(255,255,255,0.03)",
                      border: "none",
                      borderRadius: "2px",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.08)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
                  >
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.9rem", color: WARM_WHITE }}>{a.name}</span>
                    <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "10px", color: `${WARM_WHITE}45`, marginLeft: "12px", whiteSpace: "nowrap" }}>{a.era} · {a.movement}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
