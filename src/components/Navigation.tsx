import { Search, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

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
    <nav className="fixed top-0 w-full z-50 h-14 px-8 flex items-center justify-between bg-background/95 border-b border-border/10">
      <Link to="/" className="font-display text-2xl tracking-wide text-foreground">
        ART THROUGH THE AGES
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-xs uppercase tracking-[0.15em] font-mono font-bold transition-colors duration-200 ${
              location.pathname === link.path
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div
        className={`flex items-center gap-2 px-3 py-1 border transition-colors duration-200 ${
          searchFocused
            ? "border-border/40 bg-muted"
            : "border-border/10 bg-transparent"
        }`}
      >
        <Search className="w-3.5 h-3.5 text-muted-foreground" strokeWidth={1.5} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-xs font-mono text-foreground placeholder:text-muted-foreground outline-none w-20 focus:w-32 transition-all duration-300"
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
        />
      </div>
    </nav>
  );
}
