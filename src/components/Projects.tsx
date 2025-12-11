import { Code2, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "Movie Recommendation System",
    description: "Developed using the MERN stack, this system offers personalized movie recommendations by analyzing user preferences and viewing patterns. The platform provides a smooth and engaging user experience, ensuring easy navigation and interaction.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    highlights: [
      "Designed and implemented the frontend for seamless user interaction",
      "Collected data to populate the movie recommendation database",
      "Personalized recommendations based on user preferences",
    ],
  },
  {
    title: "Banking Management System",
    description: "A Python-based system designed to efficiently manage banking operations, including transactions, account management, and secure data handling. It provides users with a secure and user-friendly platform to perform banking tasks with ease.",
    technologies: ["Python", "Database Management", "SQL"],
    highlights: [
      "Created the frontend with a focus on user-friendly navigation",
      "Collected data for the banking database to support system functionality",
      "Secure transaction handling and account management",
    ],
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" ref={ref} className="section-padding bg-secondary/30">
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`text-center mb-16 ${isVisible ? 'animate-reveal' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing innovative solutions built with modern technologies and creative problem-solving approaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`glass-card p-8 card-3d hover:shadow-glow transition-all duration-500 group ${
                isVisible ? 'animate-rotate-in opacity-100' : 'opacity-0'
              } stagger-${index + 3}`}
            >
              <div className="mb-6">
                <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">{project.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/20 text-primary-glow rounded-full text-sm font-medium border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <h4 className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider">Key Features</h4>
                {project.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/80 text-sm">{highlight}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1 border-primary text-primary hover:bg-primary/10 transition-all duration-300"
                  onClick={() => window.open("#", "_blank")}
                >
                  <span>View Demo</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-accent text-accent hover:bg-accent/10 transition-all duration-300"
                  onClick={() => window.open("#", "_blank")}
                >
                  <span>Source Code</span>
                  <Code2 className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
