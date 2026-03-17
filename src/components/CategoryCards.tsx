import { Clock, Globe, Image, Users } from "lucide-react";
import { Link } from "react-router-dom";

const CATEGORIES = [
  {
    icon: Clock,
    name: "Timeline",
    description: "40,000 years on a single axis",
    path: "/timeline",
  },
  {
    icon: Globe,
    name: "Geography",
    description: "Art mapped across civilizations",
    path: "/geography",
  },
  {
    icon: Image,
    name: "Masterworks",
    description: "The works that changed everything",
    path: "/masterworks",
  },
  {
    icon: Users,
    name: "Artists",
    description: "The minds behind the movements",
    path: "/artists",
  },
];

export default function CategoryCards() {
  return (
    <section className="px-8 py-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.path}
            to={cat.path}
            className="group border border-border/15 p-5 bg-card hover:border-primary/30 transition-colors duration-300"
          >
            <cat.icon className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors duration-300 mb-3" strokeWidth={1.5} />
            <h3 className="font-display text-xl tracking-wide text-foreground mb-1">{cat.name}</h3>
            <p className="font-mono text-[11px] text-muted-foreground">{cat.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
