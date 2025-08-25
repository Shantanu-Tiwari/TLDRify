import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-10% 0px -70% 0px',
        threshold: [0.1, 0.3, 0.5],
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    // Handle scroll to manually check which section is most visible
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]') as NodeListOf<HTMLElement>;
      let currentSection = 'home';
      const navbarHeight = 64;
      const scrollPosition = window.scrollY + navbarHeight + 200;
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;
        
        // Check if we're in this section
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = section.id;
        }
      });
      
      // Special handling for the last section (pricing) when near bottom
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      
      if (scrollTop + windowHeight >= documentHeight - 100) {
        currentSection = 'pricing';
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // 4rem = 64px
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold"
            >
              TLDRify
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className={`text-sm relative ${
                activeSection === 'how-it-works' 
                  ? 'text-foreground font-medium' 
                  : 'text-muted-foreground'
              }`}
            >
              How it works
              {activeSection === 'how-it-works' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className={`text-sm relative ${
                activeSection === 'features' 
                  ? 'text-foreground font-medium' 
                  : 'text-muted-foreground'
              }`}
            >
              Features
              {activeSection === 'features' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className={`text-sm relative ${
                activeSection === 'pricing' 
                  ? 'text-foreground font-medium' 
                  : 'text-muted-foreground'
              }`}
            >
              Pricing
            </a>
            <a 
              href="/about" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
            >
              About
            </a>
            <a 
              href="/privacy" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
            >
              Privacy
            </a>
              {activeSection === 'pricing' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </button>
          </div>

          {/* CTA */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Shantanu-Tiwari/TLDRify"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 hidden sm:inline-flex"
            >
              GitHub
            </a>
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Sign in
            </Button>
            <Button size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;