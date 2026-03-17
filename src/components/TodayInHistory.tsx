import { Calendar } from "lucide-react";
import { getTodayInArt } from "@/data/civilizations";

export default function TodayInHistory() {
  const todayEvent = getTodayInArt();

  return (
    <section className="px-8 py-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <div className="max-w-4xl mx-auto border border-primary/20 rounded-sm px-8 py-5 flex items-start gap-4 bg-muted/50">
        <Calendar className="w-4 h-4 text-primary mt-0.5 shrink-0" strokeWidth={1} />
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-primary/60 font-sans font-medium mb-1">
            Today in Art History
          </p>
          <p className="font-sans font-light text-sm text-foreground/80 leading-relaxed">
            {todayEvent}
          </p>
        </div>
      </div>
    </section>
  );
}
