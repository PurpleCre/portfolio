import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <AnimatedSection animation="fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>Available for freelance work</span>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Full-Stack Developer &<br />
              <span className="text-primary">Digital Solutions Expert</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up">
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Building modern web applications, optimizing SEO, and delivering quality software testing. 
              From React apps to automated testing frameworks—I bring your ideas to life.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scale-in">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/projects">
                  View My Work
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  <Code size={18} />
                  Hire Me
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">5+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">20+</h3>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">100%</h3>
                <p className="text-muted-foreground">Quality Assured</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What I Do Best
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Specialized services tailored to your business needs
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="slide-in-left">
              <div className="p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Web Development
                </h3>
                <p className="text-muted-foreground">
                  React, Supabase, and modern web technologies to build scalable applications.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up">
              <div className="p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  SEO Optimization
                </h3>
                <p className="text-muted-foreground">
                  Boost your rankings and drive traffic with data-driven SEO strategies.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Software Testing
                </h3>
                <p className="text-muted-foreground">
                  Manual and automated testing with Selenium to ensure quality.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                View All Services
                <ArrowRight size={18} />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
