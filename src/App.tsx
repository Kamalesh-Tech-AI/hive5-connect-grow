import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FoundingMembers from "./pages/FoundingMembers";
import InternshipApplication from "./pages/InternshipApplication";
import EditingTraining from "./pages/EditingTraining";
import PartnershipProgram from "./pages/PartnershipProgram";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/founders" element={<FoundingMembers />} />
          <Route path="/apply" element={<InternshipApplication />} />
          <Route path="/editing-training" element={<EditingTraining />} />
          <Route path="/partnership-program" element={<PartnershipProgram />} />
          <Route path="/ryze" element={<PartnershipProgram />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
