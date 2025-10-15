import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import GridPattern from "@/components/GridPattern";
import GlassCard from "@/components/GlassCard";
import SEO from "@/components/SEO";
import MagneticButton from "@/components/MagneticButton";
import SkillBadge from "@/components/SkillBadge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react";

// Projects Page Component
const Projects = () => {
  // Sample Projects Data
  const projects = [
    {
      id: 1,
      slug: "mahwe-marketing",
      title: "Mahwe Marketing Website",
      description: "SEO optimization and marketing website for Zimbabwe's semi-precious stone mining industry",
      tags: ["SEO", "Marketing", "React", "TypeScript", "TailwindCSS", "Vite", "supabase"],
      image: "🏭",
      category: "Web Development",
    },
    {
      id: 2,
      slug: "kukura-zimbabwe",
      title: "Kukura Zimbabwe Web App",
      description: "React + Supabase application with onboarding flows and job matching",
      tags: ["React", "Supabase", "Full-Stack", "TypeScript", "TailwindCSS", "Vite", "SEO", "Web Development"],
      image: "👥",
      category: "Full-Stack",
    },
    {
      id: 3,
      slug: "rfid-attendance",
      title: "RFID Attendance System",
      description: "Python + Tkinter desktop app with database integration",
      tags: ["Python", "Tkinter", "Database"],
      image: "📱",
      category: "IoT & Software",
    },
    {
      id: 4,
      slug: "pogos-loyalty",
      title: "Pogos Loyalty App",
      description: "Loyalty app for a restaraunt utilixing cutting edge tech",
      tags: ["React", "QR Code", "WebRTC", "TypeScript", "TailwindCSS", "Capacitor", "Kotlin", "Android"],
      image: "📷",
      category: "Anrdoid Development",
    },
    {
      id: 5,
      slug: "book-reviews",
      title: "Book Reviews Platform",
      description: "OnlineBookClub reviews and professional writing portfolio",
      tags: ["Writing", "Content", "Reviews"],
      image: "📚",
      category: "Content Creation",
    },
    {
      id: 6,
      slug: "ecommerce-dashboard",
      title: "E-Commerce Dashboard",
      description: "Analytics and inventory management system",
      tags: ["React", "TypeScript", "Charts"],
      image: "📊",
      category: "Web Development",
    },
  ];

  return (
    <>
      <SEO 
        title="Panashe Gonese - Projects Portfolio"
        description="Explore Panashe Gonese's portfolio: web development, Android apps, IoT projects, SEO optimization, React applications, and more. 50+ completed projects."
        keywords="Panashe Gonese portfolio, web development projects, Android projects, IoT projects, React applications, full-stack projects, Supabase projects"
      />
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
        <GridPattern className="opacity-30" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Portfolio Showcase
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of my work across web development, SEO, software testing, and more
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-20">
        <GridPattern className="opacity-20" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection
                key={project.id}
                animation={index % 3 === 0 ? "slide-in-left" : index % 3 === 1 ? "fade-in-up" : "slide-in-right"}
              >
                <Link to={`/projects/${project.slug}`} className="block">
                  <GlassCard className="group overflow-hidden p-0 cursor-pointer hover:shadow-[var(--shadow-lifted)]">
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <SkillBadge variant="accent" className="backdrop-blur-md">
                        {project.category}
                      </SkillBadge>
                    </div>

                    {/* Project Image with gradient overlay */}
                    <div className="relative aspect-video bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center overflow-hidden">
                      <div className="text-7xl group-hover:scale-110 transition-transform duration-500">
                        {project.image}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <SkillBadge key={tag} variant="primary">
                            {tag}
                          </SkillBadge>
                        ))}
                      </div>

                      {/* Link */}
                      <div className="inline-flex items-center gap-2 text-primary hover:gap-3 font-semibold transition-all group/link">
                        View Case Study
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
        <GridPattern className="opacity-20" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <GlassCard className="p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Like What You See?
                </span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Let's work together on your next project. I'm available for freelance opportunities.
              </p>
              <MagneticButton strength={0.3}>
                <Button asChild variant="hero" size="lg" className="group">
                  <Link to="/contact">
                    Get In Touch
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </MagneticButton>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
      </div>
    </>
  );
};

export default Projects;
