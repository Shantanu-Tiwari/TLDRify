import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Information We Collect
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Content You Submit:</strong> When you use TLDRify, you may submit URLs, text, or other content for summarization. We process this content to provide our services.
              </p>
              <p>
                <strong>Usage Information:</strong> We collect information about how you interact with our service, including the features you use and the content you access.
              </p>
              <p>
                <strong>Technical Information:</strong> We may collect technical information such as your IP address, browser type, and device information for security and service improvement purposes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              How We Use Your Information
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Service Provision:</strong> We use your information to provide, maintain, and improve our summarization services.
              </p>
              <p>
                <strong>AI Processing:</strong> Your content is processed by AI models to generate summaries and insights. This processing is necessary for our core service functionality.
              </p>
              <p>
                <strong>Service Improvement:</strong> We analyze usage patterns to improve our services and develop new features.
              </p>
              <p>
                <strong>Security:</strong> We use information to protect against fraud, abuse, and security threats.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Data Sharing and Disclosure
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Third-Party Services:</strong> We may use third-party services for AI processing, hosting, and analytics. These services are bound by confidentiality agreements.
              </p>
              <p>
                <strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights and safety.
              </p>
              <p>
                <strong>No Sale:</strong> We do not sell, trade, or rent your personal information to third parties.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Data Security
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We implement appropriate security measures to protect your information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p>
                However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Data Retention
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We retain your information only as long as necessary to provide our services and comply with legal obligations.
              </p>
              <p>
                You may request deletion of your data at any time by contacting us.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Your Rights
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Access:</strong> You have the right to access the personal information we hold about you.
              </p>
              <p>
                <strong>Correction:</strong> You can request correction of inaccurate or incomplete information.
              </p>
              <p>
                <strong>Deletion:</strong> You can request deletion of your personal information.
              </p>
              <p>
                <strong>Portability:</strong> You can request a copy of your data in a portable format.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Cookies and Tracking
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content.
              </p>
              <p>
                You can control cookie settings through your browser preferences.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Children's Privacy
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Changes to This Policy
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
              </p>
              <p>
                Your continued use of our service after any changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Contact Us
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                If you have any questions about this privacy policy or our data practices, please contact us:
              </p>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="font-medium">Email:</p>
                <p>privacy@tldrify.com</p>
                <p className="font-medium mt-2">GitHub:</p>
                <a
                  href="https://github.com/Shantanu-Tiwari/TLDRify"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:underline"
                >
                  https://github.com/Shantanu-Tiwari/TLDRify
                </a>
              </div>
            </div>
          </section>

          <section className="pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground text-center">
              Last updated: January 2025
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
