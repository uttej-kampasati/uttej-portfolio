import { Award, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const certificates = [
  {
    title: "Red Hat Certified Enterprise Application Developer",
    issuer: "Red Hat",
    date: "2024",
    credentialUrl: "https://www.credly.com/badges/39d43cf0-bb39-4e60-844e-187eb5e4ea11/public_url",
    description: "Certified in enterprise application development with Red Hat technologies",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialUrl: "https://www.credly.com/badges/30cecb8e-7a7e-4a30-9b1c-fbc939f21401/public_url",
    description: "Foundational knowledge of AWS Cloud concepts, services, and terminology",
  },
  {
    title: "Salesforce Certified AI Associate",
    issuer: "Salesforce",
    date: "2024",
    credentialUrl: "https://drive.google.com/file/d/1gy_skTUFQAjv3Te0vGVUjkDHG-YrXUHJ/view?usp=sharing",
    description: "Expertise in AI concepts and implementation within Salesforce ecosystem",
  },
];

const Certificates = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certificates" ref={ref} className="section-padding">
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`text-center mb-16 ${isVisible ? 'animate-reveal' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Professional Certifications</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating expertise in cutting-edge technologies and cloud platforms
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className={`glass-card p-8 card-3d hover:shadow-glow transition-all duration-500 group flex flex-col ${
                isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0'
              } stagger-${index + 2}`}
            >
              <div className="flex-1">
                <div className="bg-gradient-to-br from-accent to-primary p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform group-hover:rotate-6">
                  <Award className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground leading-tight">
                  {cert.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <p className="text-primary-glow font-semibold">{cert.issuer}</p>
                  <p className="text-muted-foreground text-sm">{cert.date}</p>
                </div>

                <p className="text-foreground/80 text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <Button
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary/10 transition-all duration-300 group-hover:border-accent group-hover:text-accent mt-auto"
                onClick={() => window.open(cert.credentialUrl, "_blank")}
              >
                <span>View Credential</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
