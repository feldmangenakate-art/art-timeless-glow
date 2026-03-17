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
    <section className="px-8 py-16 animate-fade-in" style={{ animationDelay: "0.5s" }}>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.path}
            to={cat.path}
            className="group border border-primary/10 rounded-sm p-6 bg-card hover:border-primary/30 transition-all duration-500"
          >
            <cat.icon className="w-5 h-5 text-primary/50 group-hover:text-primary transition-colors duration-500 mb-4" strokeWidth={1} />
            <h3 className="font-display text-base text-foreground mb-1">{cat.name}</h3>
            <p className="font-sans font-light text-xs text-muted-foreground">{cat.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
