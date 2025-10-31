import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "uttejkampasati@gmail.com",
    href: "mailto:uttejkampasati@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9392535829",
    href: "tel:+919392535829",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Andhra Pradesh, India",
    href: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://linkedin.com/in/uttejkampasati",
  },
];

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_jwbqma5',
        'template_4b8e3jr',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Uttej Kampasati',
        },
        'fEr-wFH5dFpj7MOmg'
      );

      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast.error("Failed to send message. Please try again or contact me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="section-padding">
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className={`text-center mb-16 ${isVisible ? 'animate-reveal' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Let's Connect</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to collaborate on innovative projects? Let's discuss how we can bring your ideas to life together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className={`glass-card p-8 card-3d hover:shadow-glow transition-all duration-500 ${isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-0'} stagger-2`}>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-border focus:border-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50 border-border focus:border-primary transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 border-border focus:border-primary transition-colors min-h-32"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4 mr-2" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0'} stagger-3`}>
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 group cursor-pointer"
                      onClick={() => info.href && window.open(info.href, "_blank")}
                    >
                      <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-lg group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="glass-card p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
              <h3 className="text-xl font-bold mb-3 text-foreground">Available for Opportunities</h3>
              <p className="text-foreground/80 leading-relaxed">
                I'm actively seeking entry-level opportunities in data science, web development, and software engineering.
                With a strong foundation in computer science and hands-on experience in modern technologies, I'm eager to contribute
                to innovative projects and grow within a dynamic team. Feel free to reach out for collaborations or opportunities!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
