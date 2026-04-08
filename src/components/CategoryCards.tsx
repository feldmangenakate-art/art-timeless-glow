import { Clock, Globe, Image, Users } from "lucide-react";
import { Link } from "react-router-dom";

const GOLD = "#C9A84C";
const DARK = "#2A1E10";

const CATEGORIES = [
  {
    icon: Clock,
    name: "Timeline",
    description: "40,000 years on a single axis",
    path: "/timeline",
    num: "01",
  },
  {
    icon: Globe,
    name: "Geography",
    description: "Art mapped across civilizations",
    path: "/geography",
    num: "02",
  },
  {
    icon: Image,
    name: "Masterworks",
    description: "The works that changed everything",
    path: "/masterworks",
    num: "03",
  },
  {
    icon: Users,
    name: "Artists",
    description: "The minds behind the movements",
    path: "/artists",
    num: "04",
  },
];

export default function CategoryCards() {
  return (
    <section
      className="px-8 py-16 animate-fade-in"
      style={{ animationDelay: "0.4s" }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.path}
            to={cat.path}
            className="group block p-5 transition-all duration-300"
            style={{
              background: "rgba(42,30,16,0.04)",
              border: "1px solid rgba(42,30,16,0.1)",
              textDecoration: "none",
              borderRadius: "2px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.5)";
              (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.06)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(42,30,16,0.1)";
              (e.currentTarget as HTMLElement).style.background = "rgba(42,30,16,0.04)";
            }}
          >
            {/* Number */}
            <div
              className="font-mono mb-3"
              style={{
                fontSize: "11px",
                color: `${GOLD}55`,
                letterSpacing: "0.1em",
              }}
            >
              {cat.num}
            </div>

            {/* Icon */}
            <cat.icon
              className="w-5 h-5 mb-3 transition-colors duration-300"
              strokeWidth={1.5}
              style={{ color: `${GOLD}70` }}
            />

            {/* Title */}
            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                color: DARK,
                marginBottom: "0.35rem",
                letterSpacing: "0.01em",
              }}
            >
              {cat.name}
            </h3>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Raleway', system-ui, sans-serif",
                fontWeight: 300,
                fontSize: "11px",
                color: "rgba(42,30,16,0.45)",
                lineHeight: 1.5,
              }}
            >
              {cat.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
