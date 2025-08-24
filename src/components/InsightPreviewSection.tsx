import { Search, Tag, FileText } from "lucide-react";

const InsightPreviewSection = () => {
  return (
    <section className="py-24 px-6 bg-foreground text-background">
      <div className="max-w-5xl mx-auto">
        <div className="bg-foreground/95 rounded-2xl p-8 scale-90 border border-background/10">
          {/* Search Bar */}
          <div className="flex items-center space-x-3 mb-8">
            <Search className="w-5 h-5 text-background/60" />
            <div className="flex-1 h-10 bg-background/10 rounded-lg border border-background/20 flex items-center px-4">
              <span className="text-background/60 text-sm">Search your insights...</span>
            </div>
          </div>

            {/* New Tag Filters (replaced old flex layout to fix overflow issue) */}
          <div className="max-w-4xl mx-auto mb-8">
            <div
              className="grid gap-3"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))" }}
            >
              <div className="flex items-center justify-center px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
                All
              </div>
              <div className="flex items-center justify-center px-3 py-1.5 bg-background/10 text-background/70 rounded-lg text-sm hover:bg-background/20 transition-colors cursor-pointer">
                Articles
              </div>
              <div className="flex items-center justify-center px-3 py-1.5 bg-background/10 text-background/70 rounded-lg text-sm hover:bg-background/20 transition-colors cursor-pointer">
                Videos
              </div>
              <div className="flex items-center justify-center px-3 py-1.5 bg-background/10 text-background/70 rounded-lg text-sm hover:bg-background/20 transition-colors cursor-pointer">
                Research
              </div>
            </div>
          </div>
 
          {/* Previous implementation (commented out for reference) */}

          {/* <div className="flex flex-wrap gap-3 mb-8 items-center ">
            <div className=" flex flex-1 min-w-[90px] items-center justify-center px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
              All
            </div>
            <div className=" flex flex-1 min-w-[90px] items-center justify-center px-3 py-1.5 bg-background/10 text-background/70 rounded-lg text-sm hover:bg-background/20 transition-colors cursor-pointer">
              Articles
            </div>
            <div className=" flex flex-1 min-w-[90px] items-center justify-center px-3 py-1.5 bg-background/10 text-background/70 rounded-lg text-sm hover:bg-background/20 transition-colors cursor-pointer">
              Videos
            </div>
            <div className=" flex flex-1 min-w-[90px] items-center justify-center px-3 py-1.5 bg-background/10 text-background/70 rounded-lg text-sm hover:bg-background/20 transition-colors cursor-pointer">
              Research
            </div>
          </div> */}

          {/* Insights List */}
          <div className="space-y-6">
            {[
              {
                title: "The Future of AI Development",
                summary: "Three key trends shaping how AI systems are built: distributed training, multimodal architectures, and ethical frameworks becoming standard.",
                tags: ["AI", "Technology", "Development"],
                type: "Article"
              },
              {
                title: "Building Scalable React Applications",
                summary: "Best practices for component architecture, state management patterns, and performance optimization in large React codebases.",
                tags: ["React", "Frontend", "Architecture"],
                type: "Video"
              },
              {
                title: "The Psychology of User Experience",
                summary: "How cognitive biases influence user behavior and practical techniques for designing interfaces that align with human psychology.",
                tags: ["UX", "Psychology", "Design"],
                type: "Research"
              }
            ].map((insight, index) => (
              <div key={index} className="border-b border-background/10 pb-6 last:border-b-0">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-medium text-background leading-tight">{insight.title}</h3>
                  <div className="flex items-center space-x-2 text-background/60 text-sm ml-4">
                    <FileText className="w-4 h-4" />
                    <span>{insight.type}</span>
                  </div>
                </div>
                <p className="text-background/80 text-sm leading-relaxed mb-3">
                  {insight.summary}
                </p>
                <div className="flex space-x-2">
                  {insight.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-background/10 text-background/70 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightPreviewSection;