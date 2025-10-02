import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Mahwe Mining Website",
      description: "SEO optimization and marketing website for Zimbabwe's mining industry",
      tags: ["SEO", "Marketing", "WordPress"],
      image: "🏭",
      link: "#",
    },
    {
      id: 2,
      title: "Student-Employer Web App",
      description: "React + Supabase application with onboarding flows and job matching",
      tags: ["React", "Supabase", "Full-Stack"],
      image: "👥",
      link: "#",
    },
    {
      id: 3,
      title: "RFID Attendance System",
      description: "Python + Tkinter desktop app with database integration",
      tags: ["Python", "Tkinter", "Database"],
      image: "📱",
      link: "#",
    },
    {
      id: 4,
      title: "QR Scanner App",
      description: "React demo with live QR code scanning and permission handling",
      tags: ["React", "QR Code", "WebRTC"],
      image: "📷",
      link: "#",
    },
    {
      id: 5,
      title: "Book Reviews Platform",
      description: "OnlineBookClub reviews and professional writing portfolio",
      tags: ["Writing", "Content", "Reviews"],
      image: "📚",
      link: "#",
    },
    {
      id: 6,
      title: "E-Commerce Dashboard",
      description: "Analytics and inventory management system",
      tags: ["React", "TypeScript", "Charts"],
      image: "📊",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              My Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A showcase of my work across web development, SEO, software testing, and more
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection
                key={project.id}
                animation={index % 3 === 0 ? "slide-in-left" : index % 3 === 1 ? "fade-in-up" : "slide-in-right"}
              >
                <div className="group relative rounded-xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all duration-300 hover:scale-105">
                  {/* Project Image Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl">
                    {project.image}
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
                    >
                      View Case Study
                      <ArrowRight size={16} />
                    </a>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Like What You See?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's work together on your next project. I'm available for freelance opportunities.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/contact">
                Get In Touch
                <ArrowRight size={18} />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Projects;
