export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Atmospheric orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse-gold" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-[100px] animate-pulse-gold" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[150px]" />
      </div>

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 text-center max-w-3xl animate-fade-in">
        <p className="text-xs uppercase tracking-[0.3em] text-primary/60 font-sans font-medium mb-6">
          An Immersive Archive
        </p>
        <h1 className="font-display text-5xl md:text-7xl tracking-tight text-foreground mb-6">
          Art Through<br />
          <em className="text-gold-gradient">the Ages</em>
        </h1>
        <p className="font-sans font-light text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
          Forty thousand years of human creativity — from cave walls to digital canvases. 
          A journey through every civilization that dared to make something beautiful.
        </p>
      </div>
    </section>
  );
}
