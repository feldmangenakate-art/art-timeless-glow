import { getTodayInArt } from "@/data/civilizations";

export default function TodayInHistory() {
  const todayEvent = getTodayInArt();

  return (
    <section className="px-8 py-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <div className="max-w-3xl mx-auto">
        <div className="tape-label text-muted-foreground mb-3">
          Today in Art History
        </div>
        <p className="font-mono text-sm text-foreground/80 leading-relaxed pl-4 border-l-2 border-primary/40">
          {todayEvent}
        </p>
      </div>
    </section>
  );
}
