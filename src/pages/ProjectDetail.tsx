import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Calendar, User, Tag } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GridPattern from "@/components/GridPattern";
import GlassCard from "@/components/GlassCard";
import SEO from "@/components/SEO";
import MagneticButton from "@/components/MagneticButton";
import SkillBadge from "@/components/SkillBadge";
import { Button } from "@/components/ui/button";
import ParticleBackground from "@/components/ParticleBackground";

// Project data - in a real app, this would come from an API or database
const projectsData = {
  "mahwe-marketing": {
    id: 1,
    title: "Mahwe Marketing Website",
    description: "SEO optimization and marketing website for Zimbabwe's semi-precious stone mining industry",
    fullDescription: "Developed a comprehensive marketing and SEO-optimized website for Mahwe Mining, one of Zimbabwe's leading mining companies. The project focused on improving online visibility, showcasing services, and generating quality leads through strategic content placement and technical SEO implementations.",
    tags: ["SEO", "Marketing", "React", "e-commerce"],
    image: "🏭",
    date: "2024",
    client: "Mahwe Marketing Ltd",
    role: "Lead Web Developer & SEO Specialist",
    challenges: [
      "Optimizing site performance for low-bandwidth regions",
      "Implementing comprehensive SEO strategy for competitive industry",
      "Creating engaging content showcase for mining services"
    ],
    solutions: [
      "Implemented progressive image loading and caching strategies",
      "Developed keyword-rich content with proper schema markup",
      "Created custom WordPress theme optimized for conversion"
    ],
    results: [
      "150% increase in organic traffic within 3 months",
      "Improved page load time by 60%",
      "Achieved first-page rankings for 12 target keywords"
    ],
    technologies: ["React", "Javascript", "SEO Tools", "Google Analytics", "Tailwind CSS", "Github", "CPanel"],
    link: "https://mahwe.co.zw",
  },
  "kukura-zimbabwe": {
    id: 2,
    title: "Kukura Zimbabwe Web App",
    description: "React + Supabase application with onboarding flows and job matching",
    fullDescription: "Built a full-stack web application connecting students with potential employers. Features include user authentication, profile management, job posting and matching system, and real-time notifications. The platform streamlines the hiring process for both students and employers.",
    tags: ["React", "Supabase", "Full-Stack"],
    image: "👥",
    date: "2024",
    client: "Kukura Zimbabwe",
    role: "Full-Stack Developer",
    challenges: [
      "Designing intuitive onboarding flows for three user types",
      "Implementing real-time job matching algorithm",
      "Ensuring data security and privacy compliance"
    ],
    solutions: [
      "Created step-by-step onboarding with progress indicators",
      "Developed matching algorithm based on skills and preferences",
      "Implemented Row Level Security policies in Supabase"
    ],
    results: [
      "500+ active users in first month",
      "85% completion rate for onboarding process",
      "Average match satisfaction score of 4.5/5"
    ],
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    link: "#",
  },
  "rfid-attendance": {
    id: 3,
    title: "RFID Attendance System",
    description: "Python + Tkinter desktop app with database integration",
    fullDescription: "Developed an IoT-based attendance management system using RFID technology. The desktop application interfaces with RFID readers to track student/employee attendance, generate reports, and manage user data. Features include real-time attendance tracking, automated reporting, and database management.",
    tags: ["Python", "Tkinter", "Database"],
    image: "📱",
    date: "2023",
    client: "VinciTech Research and Development",
    role: "IoT Developer & Lead Software Engineer",
    challenges: [
      "Integrating hardware RFID readers with software interface",
      "Managing real-time data synchronization",
      "Creating user-friendly interface for non-technical staff"
    ],
    solutions: [
      "Developed Python serial communication module for RFID readers",
      "Implemented SQLite database with transaction management",
      "Designed intuitive Tkinter GUI with minimal training needed"
    ],
    results: [
      "99.8% accuracy in attendance tracking",
      "Reduced attendance processing time by 90%",
      "Successfully deployed across 5 departments"
    ],
    technologies: ["Python", "Tkinter", "SQLite", "RFID Hardware", "Serial Communication", "Arduino"],
    link: "#",
  },
  "pogos-loyalty": {
    id: 4,
    title: "Pogos Loyalty App",
    description: "Loyalty app for a restaraunt utilixing cutting edge tech",
    fullDescription: "Created a progressive android native application for scanning QR codes using device camera. The app demonstrates WebRTC capabilities, camera permission handling, and real-time barcode detection. Features include scan history, data validation, export functionality, points award system, and user interactoin and management.",
    tags: ["Commercial", "QR Code", "WebRTC", "Android"],
    image: "📷",
    date: "2024",
    client: "Pogos",
    role: "Full-Stack Developer",
    challenges: [
      "Handling camera permissions across different browsers and devices",
      "Implementing reliable QR code detection in varying lighting",
      "Creating responsive interface for mobile devices"
    ],
    solutions: [
      "Built progressive permission request flow with fallbacks",
      "Integrated multiple QR detection libraries for reliability",
      "Designed mobile-first responsive layout"
    ],
    results: [
      "Successfully scans QR codes in <500ms",
      "Works across all major browsers and devices",
      "Featured in android development showcase"
    ],
    technologies: ["React", "WebRTC", "HTML5 Canvas", "Progressive Web App", "React", "QR Code", "TypeScript", "TailwindCSS", "Capacitor", "Kotlin", "Android Studio"],
    link: "#",
  },
  "book-reviews": {
    id: 5,
    title: "Book Reviews Platform",
    description: "OnlineBookClub reviews and professional writing portfolio",
    fullDescription: "Contributed professional book reviews to OnlineBookClub, demonstrating content creation and analytical writing skills. Created engaging, SEO-optimized reviews that helped readers make informed decisions while showcasing literary analysis capabilities.",
    tags: ["Writing", "Content", "Reviews"],
    image: "📚",
    date: "2023-2024",
    client: "OnlineBookClub",
    role: "Content Writer & Reviewer",
    challenges: [
      "Maintaining consistent review quality and style",
      "Balancing critical analysis with reader engagement",
      "Meeting tight deadlines for review publication"
    ],
    solutions: [
      "Developed personal review framework and checklist",
      "Created engaging narrative style with structured analysis",
      "Implemented efficient reading and note-taking process"
    ],
    results: [
      "Published 20+ professional reviews",
      "Average reader rating of 4.7/5 for review helpfulness",
      "Built portfolio demonstrating content creation skills"
    ],
    technologies: ["Content Writing", "SEO", "Literary Analysis"],
    link: "#",
  },
  "ecommerce-dashboard": {
    id: 6,
    title: "E-Commerce Dashboard",
    description: "Analytics and inventory management system",
    fullDescription: "Built a comprehensive dashboard for e-commerce businesses to track sales, manage inventory, and analyze customer behavior. Features include real-time analytics, automated reporting, inventory alerts, and sales forecasting using data visualization.",
    tags: ["React", "TypeScript", "Charts"],
    image: "📊",
    date: "2024",
    client: "E-Commerce Startup",
    role: "Frontend Developer",
    challenges: [
      "Displaying large datasets with optimal performance",
      "Creating intuitive data visualization for non-technical users",
      "Implementing real-time updates for inventory tracking"
    ],
    solutions: [
      "Used React Query for efficient data fetching and caching",
      "Integrated Recharts for interactive data visualizations",
      "Implemented WebSocket connections for real-time updates"
    ],
    results: [
      "Reduced inventory management time by 70%",
      "Improved decision-making with actionable insights",
      "Successfully handling 10,000+ products"
    ],
    technologies: ["React", "TypeScript", "Recharts", "WebSocket", "REST API"],
    link: "#",
  },
};

// Project Detail Page Component
const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug as keyof typeof projectsData] : null;

  // If project not found, show 404 message
  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects">
            <Button variant="outline">
              <ArrowLeft size={16} />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${project.title} - Panashe Gonese`}
        description={project.description}
        keywords={`${project.title}, ${project.tags.join(", ")}, project case study`}
      />
      <div className="min-h-screen pt-20">
        <ParticleBackground />
        
        {/* Back Button */}
        <section className="relative py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <MagneticButton strength={0.2}>
              <Button asChild variant="outline" size="sm">
                <Link to="/projects">
                  <ArrowLeft size={16} />
                  Back to Projects
                </Link>
              </Button>
            </MagneticButton>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
          <GridPattern className="opacity-30" />
          
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-12">
                <div className="text-8xl mb-6">{project.image}</div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    {project.title}
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-8">
                  {project.tags.map((tag) => (
                    <SkillBadge key={tag} variant="primary">
                      {tag}
                    </SkillBadge>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Project Info */}
        <section className="relative py-12">
          <GridPattern className="opacity-20" />
          
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <AnimatedSection>
                <GlassCard className="p-6 text-center">
                  <Calendar className="mx-auto mb-3 text-primary" size={32} />
                  <h3 className="font-semibold mb-2">Date</h3>
                  <p className="text-muted-foreground">{project.date}</p>
                </GlassCard>
              </AnimatedSection>
              <AnimatedSection animation="fade-in-up">
                <GlassCard className="p-6 text-center">
                  <User className="mx-auto mb-3 text-primary" size={32} />
                  <h3 className="font-semibold mb-2">Role</h3>
                  <p className="text-muted-foreground">{project.role}</p>
                </GlassCard>
              </AnimatedSection>
              <AnimatedSection animation="slide-in-right">
                <GlassCard className="p-6 text-center">
                  <Tag className="mx-auto mb-3 text-primary" size={32} />
                  <h3 className="font-semibold mb-2">Client</h3>
                  <p className="text-muted-foreground">{project.client}</p>
                </GlassCard>
              </AnimatedSection>
            </div>

            {/* Full Description */}
            <AnimatedSection className="mb-16">
              <GlassCard className="p-8">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Project Overview
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
              </GlassCard>
            </AnimatedSection>

            {/* Challenges, Solutions, Results */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <AnimatedSection>
                <GlassCard className="p-8 h-full">
                  <h3 className="text-2xl font-bold mb-6 text-primary">Challenges</h3>
                  <ul className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </AnimatedSection>

              <AnimatedSection animation="fade-in-up">
                <GlassCard className="p-8 h-full">
                  <h3 className="text-2xl font-bold mb-6 text-accent">Solutions</h3>
                  <ul className="space-y-4">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="text-accent mt-1">•</span>
                        <span className="text-muted-foreground">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </AnimatedSection>

              <AnimatedSection animation="slide-in-right">
                <GlassCard className="p-8 h-full">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Results
                  </h3>
                  <ul className="space-y-4">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="text-primary mt-1">✓</span>
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </AnimatedSection>
            </div>

            {/* Technologies */}
            <AnimatedSection>
              <GlassCard className="p-8">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <SkillBadge key={tech} variant="accent">
                      {tech}
                    </SkillBadge>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
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
                    Interested in Working Together?
                  </span>
                </h2>
                <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                  I'm available for freelance projects and collaborations. Let's create something amazing!
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <MagneticButton strength={0.3}>
                    <Button asChild variant="hero" size="lg">
                      <Link to="/contact">
                        Get In Touch
                      </Link>
                    </Button>
                  </MagneticButton>
                  <MagneticButton strength={0.3}>
                    <Button asChild variant="outline" size="lg">
                      <Link to="/projects">
                        View All Projects
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

export default ProjectDetail;