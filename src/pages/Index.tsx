import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import InsightPreviewSection from "@/components/InsightPreviewSection";
import WhyTLDRifySection from "@/components/WhyTLDRifySection";
import SupportedContentSection from "@/components/SupportedContentSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="how-it-works">
        <HowItWorksSection />
      </section>
      <section id="features">
        <InsightPreviewSection />
        <WhyTLDRifySection />
        <SupportedContentSection />
      </section>
      <section id="pricing">
        <CTASection />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
