import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import TiktokIndex from "./pages/tiktok/Index.tsx";
import SaoCarlosIndex from "./pages/saocarlos/Index.tsx";
import SaoCarlosTiktokIndex from "./pages/saocarlos/tiktok/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Rio Claro */}
          <Route path="/" element={<Index />} />
          <Route path="/ttq" element={<TiktokIndex />} />

          {/* São Carlos */}
          <Route path="/saocarlos" element={<SaoCarlosIndex />} />
          <Route path="/saocarlos/ttq" element={<SaoCarlosTiktokIndex />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;