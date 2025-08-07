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
import EditingCurriculum from "./pages/EditingCurriculum";
import EditingEnroll from "./pages/EditingEnroll";
import PartnershipProgram from "./pages/PartnershipProgram";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";

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
          <Route path="/editing-curriculum" element={<EditingCurriculum />} />
          <Route path="/editing-enroll" element={<EditingEnroll />} />
          <Route path="/partnership-program" element={<PartnershipProgram />} />
          <Route path="/ryze" element={<PartnershipProgram />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
