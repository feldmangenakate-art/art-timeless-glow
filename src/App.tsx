import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";

// ─── Lazy-loaded page bundles ─────────────────────────────────────────────────
const Index                = lazy(() => import("./pages/Index"));
const TimelinePage         = lazy(() => import("./pages/TimelinePage"));
const MasterworksPage      = lazy(() => import("./pages/MasterworksPage"));
const MasterworkDetailPage = lazy(() => import("./pages/MasterworkDetailPage"));
const ArtistsPage          = lazy(() => import("./pages/ArtistsPage"));
const ArtistDetailPage     = lazy(() => import("./pages/ArtistDetailPage"));
const MovementPage         = lazy(() => import("./pages/MovementPage"));
const CivilizationPage     = lazy(() => import("./pages/CivilizationPage"));
const GeographyPage        = lazy(() => import("./pages/GeographyPage"));
const CollectionDetailPage = lazy(() => import("./pages/CollectionDetailPage"));
const AboutPage            = lazy(() => import("./pages/AboutPage"));
const NotFound             = lazy(() => import("./pages/NotFound"));

// ─── Minimal full-screen fallback while a page chunk loads ───────────────────
function PageLoader() {
  return (
    <div style={{
      minHeight: "60vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#FAF8F4",
    }}>
      <div style={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        border: "2px solid rgba(201,168,76,0.2)",
        borderTopColor: "#C9A84C",
        animation: "spin 0.7s linear infinite",
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"                  element={<Index />} />
            <Route path="/timeline"          element={<TimelinePage />} />
            <Route path="/geography"         element={<GeographyPage />} />
            <Route path="/masterworks"       element={<MasterworksPage />} />
            <Route path="/masterworks/:id"   element={<MasterworkDetailPage />} />
            <Route path="/artists"           element={<ArtistsPage />} />
            <Route path="/artists/:id"       element={<ArtistDetailPage />} />
            <Route path="/collection/:id"    element={<CollectionDetailPage />} />
            <Route path="/movement/:id"      element={<MovementPage />} />
            <Route path="/civilization/:id"  element={<CivilizationPage />} />
            <Route path="/about"             element={<AboutPage />} />
            <Route path="*"                  element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
