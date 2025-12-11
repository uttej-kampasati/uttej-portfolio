import { GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const educationData = [
  {
    institution: "KL University",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering",
    duration: "Aug 2022 - Mar 2026",
    gpa: "9.2 / 10.0",
    icon: GraduationCap,
  },
  {
    institution: "SASI EM HIGH SCHOOL & COLLEGE",
    degree: "Intermediate in MPC",
    field: "Mathematics, Physics, Chemistry",
    duration: "Jun 2020 - Mar 2022",
    gpa: "8.9 / 10.0",
    icon: Award,
  },
  {
    institution: "SASI EM HIGH SCHOOL & COLLEGE",
    degree: "Secondary School Certificate (SSC)",
    field: "High School",
    duration: "Jun 2019 - Mar 2020",
    gpa: "10 / 10",
    icon: Award,
  },
];

const Education = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" ref={ref} className="section-padding bg-secondary/30">
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`text-center mb-16 ${isVisible ? 'animate-reveal' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Academic Journey</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building a strong foundation in computer science and engineering through academic excellence and continuous learning
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {educationData.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <Card
                key={index}
                className={`glass-card p-8 card-3d hover:shadow-glow transition-all duration-500 ${
                  isVisible ? 'animate-zoom-in opacity-100' : 'opacity-0'
                } stagger-${index + 1}`}
              >
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-primary to-primary-glow p-4 rounded-xl">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">{edu.institution}</h3>
                        <p className="text-primary font-semibold">{edu.degree}</p>
                        <p className="text-muted-foreground">{edu.field}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-accent font-bold text-xl">GPA: {edu.gpa}</p>
                        <p className="text-muted-foreground text-sm">{edu.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
