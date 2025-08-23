import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import InsightPreviewSection from "@/components/InsightPreviewSection";
import WhyTLDRifySection from "@/components/WhyTLDRifySection";
import SupportedContentSection from "@/components/SupportedContentSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <InsightPreviewSection />
      <WhyTLDRifySection />
      <SupportedContentSection />
      <CTASection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
