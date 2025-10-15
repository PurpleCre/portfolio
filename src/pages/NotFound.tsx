import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";
import GridPattern from "@/components/GridPattern";

// Not Found Page Component
const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/10 to-background" />
      <GridPattern className="opacity-20" />
      
      <div className="container relative mx-auto px-4 text-center">
        <GlassCard className="max-w-2xl mx-auto p-12">
          <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
            404
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/">
                <Home size={18} />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2">
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default NotFound;
