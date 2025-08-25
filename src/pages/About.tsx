import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            About TLDRify
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're on a mission to make information consumption faster, smarter, and more efficient.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Our Story
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              TLDRify was born from the frustration of spending hours consuming content that could be 
              summarized in minutes. In today's information-overloaded world, we believe that 
              understanding the essence of content quickly is not just a luxury—it's a necessity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              What We Do
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We use advanced AI technology to analyze and summarize content from various sources 
              including YouTube videos, articles, PDFs, tweets, and more. Our platform extracts key 
              insights, generates concise summaries, and organizes information in a way that saves 
              you time while preserving the essential knowledge.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To democratize knowledge by making complex information accessible, digestible, and 
              actionable for everyone. Whether you're a student, professional, researcher, or 
              curious mind, TLDRify helps you learn more in less time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Technology
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Built with modern web technologies including React, TypeScript, and Tailwind CSS, 
              TLDRify leverages cutting-edge AI models to provide accurate and insightful summaries. 
              Our platform is designed to be fast, reliable, and user-friendly across all devices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Get Involved
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              TLDRify is an open-source project, and we welcome contributions from developers, 
              designers, and content creators. Visit our GitHub repository to learn more about 
              contributing to the project or to report issues and suggest features.
            </p>
            <div className="mt-6">
              <a
                href="https://github.com/Shantanu-Tiwari/TLDRify"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors duration-150"
              >
                View on GitHub
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
