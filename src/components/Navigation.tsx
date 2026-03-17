import { Search } from "lucide-react";
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
    <nav className="fixed top-0 w-full z-50 h-16 px-8 flex items-center justify-between backdrop-blur-md bg-background/80 border-b border-primary/10">
      <Link to="/" className="font-display text-lg tracking-tight text-foreground hover:text-primary transition-colors duration-300">
        Art Through the Ages
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-xs uppercase tracking-[0.2em] font-sans font-medium transition-colors duration-300 ${
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
        className={`flex items-center gap-2 px-4 py-1.5 rounded-full border transition-all duration-300 ${
          searchFocused
            ? "border-primary/40 bg-muted"
            : "border-primary/10 bg-transparent"
        }`}
      >
        <Search className="w-3.5 h-3.5 text-muted-foreground" strokeWidth={1} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-sm font-sans font-light text-foreground placeholder:text-muted-foreground outline-none w-24 focus:w-40 transition-all duration-300"
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
        />
      </div>
    </nav>
  );
}
