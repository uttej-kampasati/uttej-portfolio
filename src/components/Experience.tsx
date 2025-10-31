import { Briefcase, Calendar, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    company: "Null Class",
    role: "Intern",
    duration: "Sep 2024 - Oct 2024",
    description: "Created a Twitter Analysis Dashboard using Power BI to analyze engagement metrics and deliver insights.",
    achievements: [
      "Created a real-time Twitter Analysis Dashboard in Power BI to track and analyze key social media metrics",
      "Created interactive visualizations to display engagement rates, media views, and user interactions",
      "Applied advanced data filters and metrics for enhanced analysis of social media performance",
      "Completed the project ahead of the deadline and received a certificate of achievement",
    ],
  },
  {
    company: "KL Radio, KL University",
    role: "Station Head",
    duration: "Dec 2022 - Present",
    description: "Oversee operations, manage student team, create engaging content, and ensure timely execution of all activities.",
    achievements: [
      "Lead a team of 60 students, managing all station operations, from content creation to broadcasting",
      "Developed tech-driven solutions and data analysis strategies, increasing listener engagement",
      "Coordinated live events and collaborations, enhancing teamwork, communication, and problem-solving skills",
    ],
  },
];

const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" ref={ref} className="section-padding">
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`text-center mb-16 ${isVisible ? 'animate-reveal' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Professional Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Demonstrating leadership, technical innovation, and practical application of skills in real-world projects
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`glass-card p-8 card-3d hover:shadow-glow transition-all duration-500 ${
                isVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0'
              } stagger-${index + 2}`}
            >
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-xl hidden md:block">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{exp.role}</h3>
                      <p className="text-primary-glow text-lg font-semibold mb-1">{exp.company}</p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-foreground/80 mb-6 leading-relaxed">{exp.description}</p>

                  <div className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <p className="text-foreground/90">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
