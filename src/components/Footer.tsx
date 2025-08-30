import { FaTwitter, FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
        
        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} TLDRify
        </p>

        {/* Navigation Links */}
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
            Privacy
          </a>
          <a
            href="mailto:contact@tldrify.com"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
          >
            Contact Us
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-lg">
          <a
            href="https://x.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-150"
            aria-label="X (Twitter)"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/shantanutiwari24/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-150"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://discord.gg/SdcTSk8Z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-150"
            aria-label="Discord"
          >
            <FaDiscord />
          </a>
          <a
            href="https://github.com/Shantanu-Tiwari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-150"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
