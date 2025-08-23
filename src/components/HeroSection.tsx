import { Button } from "@/components/ui/button";
import { ArrowRight, Link } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 pt-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
                Summarize anything. Instantly.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                TLDRify gives you the key insights from any link — YouTube, PDFs, Tweets, articles, and more.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="font-medium">
                Try TLDRify
              </Button>
              <Button 
                variant="link" 
                className="font-medium p-0 h-auto underline-offset-8"
                onClick={() => scrollToSection('how-it-works')}
              >
                How it works
              </Button>
            </div>
          </div>

          {/* Right Demo */}
          <div className="lg:col-span-3 lg:justify-self-end w-full">
            <div className="bg-surface-soft border border-border/50 rounded-2xl p-8 w-full max-w-3xl">
              <div className="space-y-6">
                <div className="relative">
                  <Link className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input 
                    type="text" 
                    placeholder="Paste any YouTube, article, or PDF link..."
                    className="w-full h-14 pl-12 pr-4 bg-background border border-border rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all duration-150"
                  />
                </div>
                
                <Button className="w-full" size="lg">
                  <span>Summarize</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                
                <div className="pt-4 border-t border-border/30">
                  <p className="text-xs text-muted-foreground mb-3">Try with:</p>
                  <div className="space-y-2">
                    <div className="text-xs text-muted-foreground bg-background/50 rounded-lg p-3 border border-border/30">
                      <span className="text-primary font-medium">YouTube:</span> https://youtube.com/watch?v=...
                    </div>
                    <div className="text-xs text-muted-foreground bg-background/50 rounded-lg p-3 border border-border/30">
                      <span className="text-primary font-medium">Article:</span> https://techcrunch.com/article...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;