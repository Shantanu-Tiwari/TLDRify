const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <p className="text-sm text-muted-foreground">
          © 2025 TLDRify
        </p>
        <div className="flex space-x-8">
          <a
            href="/about"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
          >
            About
          </a>
          <a
            href="https://github.com/Shantanu-Tiwari/TLDRify"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
          >
            GitHub
          </a>
          <a
            href="/privacy"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;