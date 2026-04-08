import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Index from "./pages/Index";
import TimelinePage from "./pages/TimelinePage";
import MasterworksPage from "./pages/MasterworksPage";
import MasterworkDetailPage from "./pages/MasterworkDetailPage";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/geography" element={<ComingSoon />} />
          <Route path="/masterworks" element={<MasterworksPage />} />
          <Route path="/masterworks/:id" element={<MasterworkDetailPage />} />
          <Route path="/artists" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
