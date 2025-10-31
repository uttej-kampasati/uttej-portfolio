import { Code, Database, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillsData = {
  languages: ["C", "Java", "Python", "HTML", "JavaScript", "CSS", "SQL"],
  specializations: [
    "Data Analysis",
    "Data Visualization",
    "Web Development",
    "Database Management",
  ],
  tools: [
    "Power BI",
    "Visual Studio Code",
    "Microsoft Excel",
    "Microsoft Word",
    "Tableau",
  ],
};

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" ref={ref} className="section-padding bg-secondary/30">
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`text-center mb-16 ${isVisible ? 'animate-reveal' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Technical Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive technical expertise across programming, data analysis, and modern development tools
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className={`glass-card p-8 card-3d hover:shadow-glow transition-all duration-500 ${isVisible ? 'animate-zoom-in opacity-100' : 'opacity-0'} stagger-2`}>
            <div className="bg-gradient-to-br from-primary to-primary-glow p-4 rounded-xl w-fit mb-6">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Programming Languages</h3>
            <div className="flex flex-wrap gap-3">
              {skillsData.languages.map((lang, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-primary/20 text-primary-glow rounded-lg text-sm font-medium border border-primary/30 hover:bg-primary/30 transition-colors"
                >
                  {lang}
                </span>
              ))}
            </div>
          </Card>

          <Card className={`glass-card p-8 card-3d hover:shadow-glow transition-all duration-500 ${isVisible ? 'animate-zoom-in opacity-100' : 'opacity-0'} stagger-3`}>
            <div className="bg-gradient-to-br from-accent to-primary p-4 rounded-xl w-fit mb-6">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Specializations</h3>
            <div className="flex flex-wrap gap-3">
              {skillsData.specializations.map((spec, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-accent/20 text-accent rounded-lg text-sm font-medium border border-accent/30 hover:bg-accent/30 transition-colors"
                >
                  {spec}
                </span>
              ))}
            </div>
          </Card>

          <Card className={`glass-card p-8 card-3d hover:shadow-glow transition-all duration-500 ${isVisible ? 'animate-zoom-in opacity-100' : 'opacity-0'} stagger-4`}>
            <div className="bg-gradient-to-br from-primary-glow to-accent p-4 rounded-xl w-fit mb-6">
              <Wrench className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skillsData.tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-primary-glow/20 text-primary-glow rounded-lg text-sm font-medium border border-primary-glow/30 hover:bg-primary-glow/30 transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
