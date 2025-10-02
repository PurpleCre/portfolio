import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Sparkles, Zap, Rocket, Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GridPattern from "@/components/GridPattern";
import GlassCard from "@/components/GlassCard";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background with mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{ background: 'var(--gradient-mesh)' }}
        />
        <GridPattern className="opacity-40" />
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <AnimatedSection animation="fade-in">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-sm font-medium mb-8 backdrop-blur-sm">
              <Sparkles size={16} className="text-primary animate-pulse" />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">
                Available for freelance work
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                Full-Stack Developer &
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer" 
                    style={{ backgroundSize: '200% auto' }}>
                Digital Solutions Expert
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up">
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Building modern web applications, optimizing SEO, and delivering quality software testing. 
              From React apps to automated testing frameworks—I bring your ideas to life.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scale-in">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button asChild variant="hero" size="lg" className="group relative overflow-hidden">
                <Link to="/projects">
                  <span className="relative z-10">View My Work</span>
                  <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="group border-2">
                <Link to="/contact">
                  <Code size={18} className="group-hover:rotate-12 transition-transform" />
                  Hire Me
                </Link>
              </Button>
            </div>
          </AnimatedSection>

          {/* Tech badges */}
          <AnimatedSection animation="fade-in">
            <div className="flex flex-wrap gap-3 justify-center items-center max-w-2xl mx-auto">
              {["React", "TypeScript", "Supabase", "Tailwind", "SEO"].map((tech, i) => (
                <div 
                  key={tech}
                  className="px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 text-sm font-medium hover:border-primary/50 transition-colors"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2 bg-background/50 backdrop-blur-sm">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
        <GridPattern className="opacity-20" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "5+", label: "Years Experience", icon: Zap },
                { value: "50+", label: "Projects Completed", icon: Rocket },
                { value: "20+", label: "Happy Clients", icon: Star },
                { value: "100%", label: "Quality Assured", icon: Sparkles },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center">
                    <GlassCard className="p-6" hover={false}>
                      <Icon className="text-primary mx-auto mb-3 animate-float" size={32} style={{ animationDelay: `${i * 0.2}s` }} />
                      <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                        {stat.value}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
                    </GlassCard>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="relative py-24">
        <GridPattern className="opacity-20" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                What I Do Best
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Specialized services tailored to your business needs
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Code, title: "Web Development", desc: "React, Supabase, and modern web technologies to build scalable applications.", delay: "0s" },
              { icon: Sparkles, title: "SEO Optimization", desc: "Boost your rankings and drive traffic with data-driven SEO strategies.", delay: "0.1s" },
              { icon: Code, title: "Software Testing", desc: "Manual and automated testing with Selenium to ensure quality.", delay: "0.2s" },
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} animation={i === 0 ? "slide-in-left" : i === 1 ? "fade-in-up" : "slide-in-right"}>
                  <GlassCard className="p-8 group">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                        <Icon className="text-white" size={28} />
                      </div>
                      <div className="absolute -top-2 -right-2 w-20 h-20 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </GlassCard>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection className="text-center mt-16">
            <Button asChild variant="outline" size="lg" className="group border-2">
              <Link to="/services">
                View All Services
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
