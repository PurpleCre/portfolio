import AnimatedSection from "@/components/AnimatedSection";
import {
  Code2,
  Database,
  TestTube,
  Search,
  BookOpen,
  Smartphone,
} from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Web Development",
      icon: Code2,
      items: ["React", "Supabase", "Tailwind CSS", "REST APIs", "TypeScript"],
    },
    {
      category: "Software Testing",
      icon: TestTube,
      items: ["Selenium", "QA Testing", "Risk Management", "Test Automation"],
    },
    {
      category: "Business & SEO",
      icon: Search,
      items: ["SEO Optimization", "Marketing Websites", "Analytics", "Content Strategy"],
    },
    {
      category: "Other Skills",
      icon: Smartphone,
      items: ["Kotlin", "Python", "Technical Writing", "Data Entry"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A passionate developer combining technical expertise with creative problem-solving
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-8xl">👨‍💻</div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Hi, I'm a Full-Stack Developer
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I specialize in building modern web applications using React, Supabase, and
                  cutting-edge technologies. With a strong foundation in both frontend and backend
                  development, I create seamless user experiences backed by robust infrastructure.
                </p>
                <p>
                  Beyond development, I'm passionate about SEO optimization and software testing.
                  I've helped businesses in various industries improve their online presence and
                  ensure their applications meet the highest quality standards.
                </p>
                <p>
                  My diverse skill set includes everything from automated testing with Selenium to
                  technical writing and content creation. I believe in continuous learning and
                  staying ahead of industry trends.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              My Tech Stack
            </h2>
            <p className="text-muted-foreground text-lg">
              Technologies and tools I work with daily
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <AnimatedSection
                  key={skill.category}
                  animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
                >
                  <div className="p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 h-full">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {skill.category}
                    </h3>
                    <ul className="space-y-2">
                      {skill.items.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Me
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedSection animation="fade-in-up">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code2 className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Clean Code</h3>
                <p className="text-muted-foreground">
                  Writing maintainable, scalable code that stands the test of time
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  Embracing new technologies and pushing boundaries
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Continuous Learning</h3>
                <p className="text-muted-foreground">
                  Always growing, always improving my craft
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
