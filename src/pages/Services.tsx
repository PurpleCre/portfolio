import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import GridPattern from "@/components/GridPattern";
import GlassCard from "@/components/GlassCard";
import SEO from "@/components/SEO";
import MagneticButton from "@/components/MagneticButton";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Search,
  TestTube,
  FileText,
  Database,
  Smartphone,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Full-stack web applications with modern technologies",
      features: [
        "React & TypeScript development",
        "Supabase backend integration",
        "REST API development",
        "Responsive design with Tailwind CSS",
        "Progressive Web Apps (PWA)",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Drive organic traffic and improve search rankings",
      features: [
        "Technical SEO audits",
        "On-page optimization",
        "Keyword research & strategy",
        "Content optimization",
        "Performance monitoring",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: TestTube,
      title: "Software Testing",
      description: "Comprehensive testing for quality assurance",
      features: [
        "Manual testing & QA",
        "Automated testing with Selenium",
        "Test case development",
        "Bug tracking & reporting",
        "Risk management",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FileText,
      title: "Content & Writing",
      description: "Professional writing and documentation services",
      features: [
        "Technical documentation",
        "Book reviews",
        "Content creation",
        "Copy writing",
        "Blog posts",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <>
      <SEO 
        title="Services - Web Development & Digital Solutions"
        description="Professional web development, SEO optimization, software testing, and content writing services. Specialized in React, Supabase, and modern web technologies."
        keywords="web development services, SEO optimization, software testing, React development, Supabase development, technical writing, freelance developer"
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
                Professional Services
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Services I Offer
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20">
        <GridPattern className="opacity-20" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection
                  key={service.title}
                  animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
                >
                  <GlassCard className="p-8 group h-full">
                    <div className="relative">
                      {/* Icon with gradient glow */}
                      <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[var(--shadow-glow)]`}>
                        <Icon className="text-white" size={36} />
                      </div>
                      <div className="absolute -top-2 -left-2 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={feature} className="flex items-start gap-3 group/item">
                          <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" size={20} />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <MagneticButton strength={0.2} className="w-full">
                      <Button asChild variant="outline" className="w-full group/btn border-2">
                        <Link to="/contact">
                          Get Started
                          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </MagneticButton>
                  </GlassCard>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
        <GridPattern className="opacity-20" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Additional Expertise
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Other areas where I can help
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Database, title: "Database Management", desc: "SQL, PostgreSQL, and database optimization" },
              { icon: Smartphone, title: "Mobile Development", desc: "Kotlin and cross-platform solutions" },
              { icon: FileText, title: "Data Entry", desc: "Accurate data processing and management" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={item.title} animation="fade-in-up">
                  <GlassCard className="p-8 text-center group">
                    <div className="relative inline-block mb-6">
                      <Icon className="text-primary mx-auto group-hover:scale-110 transition-transform duration-500" size={48} />
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </GlassCard>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <GlassCard className="p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Ready to Start Your Project?
                </span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how I can help bring your vision to life
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton strength={0.3}>
                  <Button asChild variant="hero" size="lg" className="group">
                    <Link to="/contact">
                      Contact Me
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </MagneticButton>
                <MagneticButton strength={0.2}>
                  <Button asChild variant="outline" size="lg" className="border-2">
                    <Link to="/projects">
                      View My Work
                    </Link>
                  </Button>
                </MagneticButton>
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
      </div>
    </>
  );
};

export default Services;
