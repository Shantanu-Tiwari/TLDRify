import { Youtube, Twitter, FileText, Globe, File, BookOpen, Database, MessageSquare } from "lucide-react";

const SupportedContentSection = () => {
  const contentTypes = [
    { icon: Youtube, name: "YouTube" },
    { icon: Twitter, name: "Twitter" },
    { icon: BookOpen, name: "Substack" },
    { icon: Globe, name: "Medium" },
    { icon: File, name: "PDFs" },
    { icon: FileText, name: "Articles" },
    { icon: Database, name: "Notion" },
    { icon: MessageSquare, name: "Threads" }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {contentTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <div 
                key={index} 
                className="flex flex-col items-center space-y-3 group cursor-default"
              >
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-150">
                  <IconComponent className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors duration-150" />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-150">
                  {type.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SupportedContentSection;