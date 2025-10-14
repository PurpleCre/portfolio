import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Sparkles, Zap, Rocket, Star, Brain, Globe, Trophy, ChevronDown, Pause, Play } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GridPattern from "@/components/GridPattern";
import GlassCard from "@/components/GlassCard";
import Terminal from "@/components/Terminal";
import MagneticButton from "@/components/MagneticButton";
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid";
import { useCountUp } from "@/hooks/useCountUp";
import SEO from "@/components/SEO";
import ParticleBackground from "@/components/ParticleBackground";
import { useAutoScroll } from "@/hooks/useAutoScroll";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const { currentSection, isAutoScrolling, pauseAutoScroll, resumeAutoScroll } = useAutoScroll({
    sectionCount: 4,
    intervalMs: 10000,
    enabled: true,
  });

  return (
    <>
      <SEO 
        title="Full-Stack Developer & Digital Solutions Expert"
        description="Full-stack developer specializing in React, Supabase, SEO optimization, and software testing. Building modern web applications with 5+ years of experience."
        keywords="full-stack developer, React developer, Supabase, TypeScript, SEO optimization, software testing, web development, Tailwind CSS"
      />
      
      {/* Auto-scroll controls */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-2">
        <button
          onClick={isAutoScrolling ? pauseAutoScroll : resumeAutoScroll}
          className="p-3 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 hover:bg-primary/30 transition-all"
          aria-label={isAutoScrolling ? "Pause auto-scroll" : "Resume auto-scroll"}
        >
          {isAutoScrolling ? <Pause className="w-5 h-5 text-primary" /> : <Play className="w-5 h-5 text-primary" />}
        </button>
        <div className="flex flex-col gap-1 items-center">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSection === index ? "bg-primary scale-125" : "bg-primary/30"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        {/* Section 1: Hero/Introduction */}
        <section data-section="0" className="relative h-screen flex items-center justify-center overflow-hidden snap-start snap-always">
        {/* Particle Background */}
        <ParticleBackground />
        
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
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              <MagneticButton strength={0.3}>
                <Button asChild variant="hero" size="lg" className="group relative overflow-hidden">
                  <Link to="/projects">
                    <span className="relative z-10">View My Work</span>
                    <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </Button>
              </MagneticButton>
              <MagneticButton strength={0.3}>
                <Button asChild variant="outline" size="lg" className="group border-2">
                  <Link to="/contact">
                    <Code size={18} className="group-hover:rotate-12 transition-transform" />
                    Hire Me
                  </Link>
                </Button>
              </MagneticButton>
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
          <ChevronDown className="w-8 h-8 text-primary/70" />
        </div>
      </section>

      {/* Section 2: Terminal Animation & Skills */}
      <section data-section="1" className="relative h-screen flex items-center justify-center overflow-hidden snap-start snap-always">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
        <GridPattern className="opacity-20" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Building With Modern Tech
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Full-stack development powered by cutting-edge tools and frameworks
            </p>
          </AnimatedSection>

          {/* Terminal Animation */}
          <AnimatedSection animation="fade-in" className="mb-12">
            <Terminal 
              lines={[
                "npm install @talent/developer",
                "Initializing modern web stack...",
                "✓ React + TypeScript loaded",
                "✓ Supabase connected",
                "✓ Tailwind CSS compiled",
                "Ready to build amazing things! 🚀"
              ]}
              typingSpeed={30}
            />
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatCard value={5} suffix="+" label="Years Experience" icon={Zap} delay={0} />
              <StatCard value={50} suffix="+" label="Projects Completed" icon={Rocket} delay={0.2} />
              <StatCard value={20} suffix="+" label="Happy Clients" icon={Star} delay={0.4} />
              <StatCard value={100} suffix="%" label="Quality Assured" icon={Sparkles} delay={0.6} />
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary/70" />
        </div>
      </section>

      {/* Section 3: Why Work With Me - Bento Grid */}
      <section data-section="2" className="relative h-screen flex items-center justify-center overflow-hidden snap-start snap-always">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/10" />
        <GridPattern className="opacity-20" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Why Work With Me
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A unique blend of technical expertise and creative problem-solving
            </p>
          </AnimatedSection>

          <BentoGrid>
            <BentoGridItem
              title="Full-Stack Expertise"
              description="From React frontends to Supabase backends, I build complete solutions"
              icon={<Code size={40} />}
              className="md:col-span-2"
            >
              <div className="mt-4 space-y-2">
                {["React & TypeScript", "Supabase & PostgreSQL", "RESTful APIs"].map((tech) => (
                  <div key={tech} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </BentoGridItem>

            <BentoGridItem
              title="SEO Master"
              description="Drive organic traffic and rankings"
              icon={<Globe size={40} />}
            >
              <div className="mt-4 text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                300%
              </div>
              <p className="text-xs text-muted-foreground mt-1">Avg. traffic increase</p>
            </BentoGridItem>

            <BentoGridItem
              title="Quality First"
              description="Automated testing with Selenium ensures zero bugs"
              icon={<Trophy size={40} />}
            />

            <BentoGridItem
              title="Fast Delivery"
              description="Agile workflow means quick iterations"
              icon={<Zap size={40} />}
              className="md:col-span-2"
            >
              <div className="mt-4 flex gap-4">
                <div>
                  <div className="text-2xl font-bold text-primary">2-3 weeks</div>
                  <p className="text-xs text-muted-foreground">Typical MVP timeline</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">24/7</div>
                  <p className="text-xs text-muted-foreground">Support available</p>
                </div>
              </div>
            </BentoGridItem>
          </BentoGrid>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary/70" />
        </div>
      </section>

      {/* Section 4: Services & Capabilities */}
      <section data-section="3" className="relative h-screen flex items-center justify-center overflow-hidden snap-start snap-always">
        <GridPattern className="opacity-20" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                What I Do Best
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Specialized services tailored to your business needs
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: Code, title: "Web Development", desc: "React, Supabase, and modern web technologies to build scalable applications.", delay: "0s" },
                { icon: Sparkles, title: "SEO Optimization", desc: "Boost your rankings and drive traffic with data-driven SEO strategies.", delay: "0.1s" },
                { icon: Code, title: "Software Testing", desc: "Manual and automated testing with Selenium to ensure quality.", delay: "0.2s" },
              ].map((service, i) => {
                const Icon = service.icon;
                return (
                  <AnimatedSection key={service.title} animation={i === 0 ? "slide-in-left" : i === 1 ? "fade-in-up" : "slide-in-right"}>
                    <GlassCard className="p-8 group" tilt3d>
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

          <AnimatedSection className="text-center">
            <MagneticButton strength={0.25}>
              <Button asChild variant="outline" size="lg" className="group border-2">
                <Link to="/services">
                  View All Services
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </MagneticButton>
          </AnimatedSection>
        </div>

        {/* Final scroll indicator (removed for last section) */}
      </section>
      </div>
    </>
  );
};

// Animated Stat Card Component
const StatCard = ({ value, suffix, label, icon: Icon, delay }: { 
  value: number; 
  suffix: string; 
  label: string; 
  icon: any; 
  delay: number;
}) => {
  const { count, ref } = useCountUp({ end: value, duration: 2000 });
  
  return (
    <div ref={ref} className="text-center">
      <GlassCard className="p-6" hover={false} tilt3d>
        <Icon className="text-primary mx-auto mb-3 animate-float" size={32} style={{ animationDelay: `${delay}s` }} />
        <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
          {count}{suffix}
        </h3>
        <p className="text-muted-foreground text-sm md:text-base">{label}</p>
      </GlassCard>
    </div>
  );
};

export default Home;
