import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-surface-soft">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
          Paste a link. Get the idea. Try TLDRify.
        </h2>
        <Button size="lg" className="px-12 font-medium">
          <Link to="/signup">Get Started</Link>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;