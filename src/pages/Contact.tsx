import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";
import GridPattern from "@/components/GridPattern";
import SEO from "@/components/SEO";
import MagneticButton from "@/components/MagneticButton";
import ParticleBackground from "@/components/ParticleBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Briefcase,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// Contact Page Component
const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (formData.name.trim().length < 2) {
      toast({
        title: "Invalid name",
        description: "Please enter your full name.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.email.includes("@") || formData.email.trim().length < 5) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    if (formData.message.trim().length < 10) {
      toast({
        title: "Message too short",
        description: "Please provide more details about your project.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  // Handle Input Changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <SEO
        title="Contact Panashe Gonese - Get In Touch"
        description="Have a project in mind? Contact Panashe Gonese to discuss web development, Android apps, IoT projects, SEO optimization, or software testing. Available for freelance work."
        keywords="contact Panashe Gonese, hire developer, freelance web developer, Android developer contact, IoT developer, React developer contact"
      />
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
          <ParticleBackground />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Mail size={16} className="text-primary" />
                <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Let's Work Together
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Have a project in mind? Get in touch and let's create something
                amazing
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative py-20">
          <GridPattern className="opacity-20" />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <AnimatedSection animation="slide-in-left">
                <GlassCard className="p-8">
                  <h2 className="text-3xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Send Me a Message
                    </span>
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    I usually respond within 24 hours
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        rows={6}
                        className="w-full"
                      />
                    </div>

                    <MagneticButton strength={0.3} className="w-full">
                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <ArrowRight size={18} />
                      </Button>
                    </MagneticButton>
                  </form>
                </GlassCard>
              </AnimatedSection>

              {/* Contact Info */}
              <AnimatedSection animation="slide-in-right">
                <div className="space-y-8">
                  {/* Contact Details */}
                  <GlassCard className="p-8">
                    <h2 className="text-3xl font-bold mb-2">
                      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Contact Information
                      </span>
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Reach out through any channel
                    </p>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-[var(--shadow-glow)] group-hover:scale-110 transition-transform">
                          <Mail className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground mb-1">
                            Email
                          </h3>
                          <a
                            href="mailto:contact@example.com"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            contact@example.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-[var(--shadow-glow)] group-hover:scale-110 transition-transform">
                          <Phone className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground mb-1">
                            Phone
                          </h3>
                          <a
                            href="tel:+15551234567"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            +1 (555) 123-4567
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 group hover:translate-x-2 transition-transform">
                        <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-[var(--shadow-glow)] group-hover:scale-110 transition-transform">
                          <MapPin className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground mb-1">
                            Location
                          </h3>
                          <p className="text-muted-foreground">
                            Available worldwide (Remote)
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlassCard>

                  {/* Social Links */}
                  <GlassCard className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6">
                      Connect With Me
                    </h3>
                    <div className="flex gap-4">
                      <MagneticButton strength={0.4}>
                        <a
                          href="https://github.com/purplecre"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/30 rounded-xl flex items-center justify-center hover:from-primary hover:to-accent hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-[var(--shadow-glow)] group"
                          aria-label="Visit my GitHub profile"
                        >
                          <Github
                            size={24}
                            className="text-foreground group-hover:text-white transition-colors"
                          />
                        </a>
                      </MagneticButton>
                      <MagneticButton strength={0.4}>
                        <a
                          href="https://www.linkedin.com/in/panashegonese1"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/30 rounded-xl flex items-center justify-center hover:from-primary hover:to-accent hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-[var(--shadow-glow)] group"
                          aria-label="Visit my LinkedIn profile"
                        >
                          <Linkedin
                            size={24}
                            className="text-foreground group-hover:text-white transition-colors"
                          />
                        </a>
                      </MagneticButton>
                      <MagneticButton strength={0.4}>
                        <a
                          href="https://www.fiverr.com/s/NN12kPp"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/30 rounded-xl flex items-center justify-center hover:from-primary hover:to-accent hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-[var(--shadow-glow)] group"
                          aria-label="Visit my Fiverr profile"
                        >
                          <Briefcase
                            size={24}
                            className="text-foreground group-hover:text-white transition-colors"
                          />
                        </a>
                      </MagneticButton>
                    </div>
                  </GlassCard>

                  {/* Availability */}
                  <GlassCard className="p-8 border-primary/30">
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mt-1.5" />
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          Currently Available
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          I'm open to freelance opportunities and new projects.
                          Let's discuss how I can help you achieve your goals.
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
