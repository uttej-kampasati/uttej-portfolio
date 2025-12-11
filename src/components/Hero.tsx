import profilePhoto from "@/assets/profile-photo.png";
>>>>>>> a76b4c3039a9ce82605c2108fda7571bb02baebc
=======
import profilePhoto from "@/assets/profile-photo.png";
>>>>>>> a76b4c3039a9ce82605c2108fda7571bb02baebc
=======
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";
=======
import profilePhoto from "@/assets/profile-photo.png";
>>>>>>> a76b4c3039a9ce82605c2108fda7571bb02baebc

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Profile Image with 3D effect */}
        <div className="order-2 md:order-1 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-glow-pulse"></div>
            <div className="relative overflow-hidden rounded-2xl border-2 border-primary/30 transform transition-all duration-500 hover:scale-105 hover:rotate-2 card-3d max-w-xs">
              <img
                src={profilePhoto}
                alt="Uttej Kampasati"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="order-1 md:order-2 space-y-6 animate-fade-in-up">
          <div className="space-y-2">
            <p className="text-accent font-semibold tracking-wider uppercase text-sm animate-fade-in">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold glow-text animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Uttej Kampasati
            </h1>
            <h2 className="text-2xl md:text-3xl text-gradient animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Data Science & Web Development Student
            </h2>
          </div>
          
          <p className="text-muted-foreground text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            Computer Science student with a passion for data-driven solutions and innovative web development.
            Combining strong analytical skills with creative problem-solving to build impactful digital experiences
            that make a difference in people's lives.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.open("/UttejKampasati_Resume.pdf", "_blank")}
              className="border-primary text-primary hover:bg-primary/10 transition-all duration-300"
            >
              Download Resume
            </Button>
          </div>

          <div className="pt-8 animate-fade-in-up" style={{ animationDelay: "1s" }}>
            <button 
              onClick={() => scrollToSection("education")}
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
            >
              <span>Scroll to explore</span>
              <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-accent" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
