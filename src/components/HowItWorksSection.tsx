import { Link, Brain, Archive } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Link,
      title: "Paste any content",
      description: "YouTube, Tweets, PDFs, articles — anything."
    },
    {
      icon: Brain,
      title: "AI summarizes the core idea",
      description: "You get a clean TLDR, no filler."
    },
    {
      icon: Archive,
      title: "Save and search your insights",
      description: "Your personal knowledge bank, always ready."
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-medium leading-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;