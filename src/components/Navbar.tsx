import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold">TLDRify</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#how-it-works" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
            >
              How it works
            </a>
            <a 
              href="#features" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
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