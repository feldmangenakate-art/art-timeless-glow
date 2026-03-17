import Hero from "@/components/Hero";
import TodayInHistory from "@/components/TodayInHistory";
import CategoryCards from "@/components/CategoryCards";

export default function Index() {
  return (
    <main className="min-h-screen pt-16 selection:bg-primary/30">
      <Hero />
      <TodayInHistory />
      <CategoryCards />
    </main>
  );
}
