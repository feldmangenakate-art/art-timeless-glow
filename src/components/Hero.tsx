export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 overflow-hidden paper-texture">
      {/* Subtle warm gradient overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at center, transparent 40%, hsl(33 22% 82% / 0.6) 100%)",
      }} />

      <div className="relative z-10 text-center max-w-4xl animate-fade-in">
        <div className="tape-label mx-auto mb-6 text-muted-foreground">
          40,000 Years of Human Creativity
        </div>

        <h1 className="font-display text-[clamp(4rem,12vw,10rem)] leading-[0.9] tracking-wide text-primary mb-8">
          ART THROUGH<br />THE AGES.
        </h1>

        <p className="font-mono text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
          From cave walls to digital canvases — an immersive journey through
          every civilization that dared to make something beautiful.
        </p>

        <div className="flex items-center justify-center gap-4 mt-10">
          <a href="/timeline" className="inline-block px-8 py-3 bg-secondary text-secondary-foreground font-mono text-xs uppercase tracking-[0.2em] font-bold hover:opacity-90 transition-opacity">
            Explore
          </a>
          <a href="/masterworks" className="inline-block px-8 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-[0.2em] font-bold hover:opacity-90 transition-opacity">
            Masterworks
          </a>
        </div>
      </div>
    </section>
  );
}
