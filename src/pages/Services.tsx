import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Services I Offer
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedSection
                  key={service.title}
                  animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
                >
                  <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                      <Icon className="text-white" size={32} />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/contact">
                        Get Started
                        <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Expertise
            </h2>
            <p className="text-muted-foreground text-lg">
              Other areas where I can help
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in-up">
              <div className="p-6 rounded-xl bg-card border border-border text-center">
                <Database className="text-primary mx-auto mb-4" size={40} />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Database Management
                </h3>
                <p className="text-sm text-muted-foreground">
                  SQL, PostgreSQL, and database optimization
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up">
              <div className="p-6 rounded-xl bg-card border border-border text-center">
                <Smartphone className="text-primary mx-auto mb-4" size={40} />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Mobile Development
                </h3>
                <p className="text-sm text-muted-foreground">
                  Kotlin and cross-platform solutions
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up">
              <div className="p-6 rounded-xl bg-card border border-border text-center">
                <FileText className="text-primary mx-auto mb-4" size={40} />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Data Entry
                </h3>
                <p className="text-sm text-muted-foreground">
                  Accurate data processing and management
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help bring your vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Contact Me
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/projects">
                  View My Work
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;
