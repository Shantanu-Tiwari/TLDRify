const WhyTLDRifySection = () => {
  const benefits = [
    {
      emoji: "🧠",
      text: "Think less, know more."
    },
    {
      emoji: "⚡",
      text: "Built for speed. No noise."
    },
    {
      emoji: "📚",
      text: "Organize your internet mind."
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="space-y-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <p className="text-xl font-medium leading-[1.4] hover:underline decoration-primary/30 underline-offset-8 transition-all duration-150 cursor-default">
                <span className="text-2xl mr-4" aria-hidden="true">{benefit.emoji}</span>
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTLDRifySection;