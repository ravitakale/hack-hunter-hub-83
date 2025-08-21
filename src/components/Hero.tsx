import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Target, Award, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-muted">
      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge 
            variant="secondary" 
            className="mb-8 text-sm font-medium cursor-pointer"
          >
            🚀 India's Premier Security Testing Platform
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-foreground">Hunt Bugs &</span>
            <br />
            <span className="text-primary font-extrabold">
              Test Manually
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of security researchers discovering vulnerabilities through bug bounties and comprehensive manual testing programs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/programs">
              <Button 
                variant="hero" 
                size="xl" 
                className="text-lg group"
              >
                Bug Bounty Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/manual-testing">
              <Button 
                variant="outline" 
                size="xl" 
                className="text-lg"
              >
                Manual Testing Jobs
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground">Active Programs</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent">₹50L+</div>
              <div className="text-muted-foreground">Rewards Paid</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 bg-medium/10 rounded-full mb-4">
                <Award className="h-8 w-8 text-medium" />
              </div>
              <div className="text-3xl font-bold text-medium">10K+</div>
              <div className="text-muted-foreground">Researchers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Background decoration */}
      <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
        <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;