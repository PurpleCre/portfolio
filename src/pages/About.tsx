import AnimatedSection from "@/components/AnimatedSection";
import GridPattern from "@/components/GridPattern";
import GlassCard from "@/components/GlassCard";
import SEO from "@/components/SEO";
import SkillBadge from "@/components/SkillBadge";
import {
  Code2,
  Database,
  TestTube,
  Search,
  BookOpen,
  Smartphone,
  Sparkles,
  Zap,
  Target,
  Award,
  TrendingUp,
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
    <>
      <SEO 
        title="About Me - Full-Stack Developer"
        description="Passionate full-stack developer combining technical expertise with creative problem-solving. Specializing in React, Supabase, SEO, and software testing."
        keywords="about developer, full-stack developer skills, React developer, web development expertise, software testing professional"
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
                Get to Know Me
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A passionate developer combining technical expertise with creative problem-solving
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Bio Section */}
      <section className="relative py-20">
        <GridPattern className="opacity-20" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-in-left">
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center overflow-hidden backdrop-blur-xl border border-primary/20">
                  <div className="text-9xl animate-float">👨‍💻</div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <GlassCard className="p-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Hi, I'm a Full-Stack Developer
                  </span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
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
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
        <GridPattern className="opacity-20" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                My Tech Stack
              </span>
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
                  <GlassCard className="p-8 group h-full">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[var(--shadow-glow)]">
                        <Icon className="text-white" size={28} />
                      </div>
                      <div className="absolute -top-2 -left-2 w-20 h-20 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {skill.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <SkillBadge key={item} variant="primary">
                          {item}
                        </SkillBadge>
                      ))}
                    </div>
                  </GlassCard>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24">
        <GridPattern className="opacity-20" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                What Drives Me
              </span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Zap, title: "Clean Code", desc: "Writing maintainable, scalable code that stands the test of time" },
              { icon: Target, title: "Innovation", desc: "Embracing new technologies and pushing boundaries" },
              { icon: BookOpen, title: "Continuous Learning", desc: "Always growing, always improving my craft" },
              { icon: Award, title: "Quality First", desc: "Delivering excellence in every project, every time" },
            ].map((value, i) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={value.title} animation="fade-in-up">
                  <GlassCard className="p-10 text-center group">
                    <div className="relative inline-block mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[var(--shadow-glow)]">
                        <Icon className="text-white" size={36} />
                      </div>
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.desc}
                    </p>
                  </GlassCard>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default About;
