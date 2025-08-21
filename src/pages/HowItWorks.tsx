import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  FileText, 
  DollarSign, 
  Shield, 
  Users, 
  Target,
  CheckCircle,
  ArrowRight,
  Zap,
  Award,
  BookOpen,
  TrendingUp,
  Play,
  Clock,
  Globe,
  Code,
  Lightbulb,
  Rocket
} from "lucide-react";

const steps = [
  {
    id: 1,
    icon: Search,
    title: "Discover Programs",
    description: "Browse through hundreds of bug bounty programs from top companies worldwide",
    details: [
      "Filter by company size, industry, and reward range",
      "View program scope and testing guidelines",
      "Check real-time program statistics"
    ]
  },
  {
    id: 2,
    icon: BookOpen,
    title: "Learn & Prepare",
    description: "Access our comprehensive learning resources and security courses",
    details: [
      "Complete hands-on security courses",
      "Practice with real-world scenarios",
      "Get certified in various security domains"
    ]
  },
  {
    id: 3,
    icon: Target,
    title: "Find Vulnerabilities",
    description: "Use our tools and methodologies to discover security issues",
    details: [
      "Access professional testing tools",
      "Follow structured testing methodologies",
      "Document findings with our templates"
    ]
  },
  {
    id: 4,
    icon: FileText,
    title: "Submit Reports",
    description: "Create detailed vulnerability reports using our guided templates",
    details: [
      "Use our report templates for consistency",
      "Include proof-of-concept demonstrations",
      "Track submission status in real-time"
    ]
  },
  {
    id: 5,
    icon: DollarSign,
    title: "Get Rewarded",
    description: "Receive bounties for valid vulnerabilities and build your reputation",
    details: [
      "Fast payment processing",
      "Multiple payment options available",
      "Build your security researcher profile"
    ]
  }
];

const features = [
  {
    icon: Shield,
    title: "Secure Platform",
    description: "Enterprise-grade security for all your bug bounty activities"
  },
  {
    icon: Users,
    title: "Global Community",
    description: "Connect with thousands of security researchers worldwide"
  },
  {
    icon: Zap,
    title: "Fast Payouts",
    description: "Quick and reliable payment processing for valid submissions"
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Build your reputation and showcase your security expertise"
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Advance your cybersecurity career with real-world experience"
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Access cutting-edge security courses and training materials"
  }
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="relative text-center mb-20 py-12">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl" />
          <div className="relative max-w-5xl mx-auto">
            <Badge variant="outline" className="mb-6 text-sm font-medium border-primary/20 bg-primary/5">
              <Rocket className="mr-2 h-4 w-4" />
              How It Works
            </Badge>
            <h1 className="text-4xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Your Journey to
              <br className="hidden sm:block" />
              <span className="text-primary"> Bug Bounty Success</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover how Bug Ka Baap transforms security researchers into successful bug bounty hunters
              through our comprehensive platform, cutting-edge tools, and vibrant community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-6 rounded-xl border-2 hover:bg-primary/5">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto text-sm text-muted-foreground">
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Free to start</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No setup required</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Join 50,000+ researchers</span>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              5 Simple Steps to Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow our proven methodology to become a successful bug bounty hunter
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <Card key={step.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-card to-card/50">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <CardHeader className="p-8 lg:p-12">
                    <div className="flex items-center space-x-6 mb-6">
                      <div className="relative">
                        <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-2xl font-bold shadow-lg">
                          {step.id}
                        </div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                          <step.icon className="h-3 w-3 text-accent-foreground" />
                        </div>
                      </div>
                      <div className="p-4 rounded-2xl bg-primary/10">
                        <step.icon className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-3xl lg:text-4xl mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                      {step.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-lg lg:text-xl mb-8 leading-relaxed">
                      {step.description}
                    </p>
                    <Button variant="outline" className="w-fit px-6 py-3 rounded-xl border-2 hover:bg-primary/5">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardHeader>
                  <CardContent className="p-8 lg:p-12 bg-gradient-to-br from-muted/20 to-muted/10 backdrop-blur-sm">
                    <h4 className="font-bold mb-6 text-xl text-primary">What You'll Do:</h4>
                    <ul className="space-y-4">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-4">
                          <div className="p-1 rounded-full bg-green-500/10 mt-1">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          </div>
                          <span className="text-muted-foreground text-lg leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Bug Ka Baap?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide everything you need to succeed in the bug bounty world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-b from-card to-card/50 hover:scale-105">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                      <feature.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground text-lg">Security Researchers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">$2M+</div>
              <div className="text-muted-foreground text-lg">Bounties Paid</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground text-lg">Partner Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground text-lg">Uptime</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative text-center rounded-3xl p-12 md:p-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_50%)]" />
          <div className="relative">
            <Badge variant="outline" className="mb-6 border-primary/20 bg-primary/5">
              <Lightbulb className="mr-2 h-4 w-4" />
              Start Your Journey
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of security researchers who are already earning through bug bounties
              and building successful cybersecurity careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-6 rounded-xl border-2 hover:bg-primary/5">
                Contact Sales
              </Button>
            </div>
            <div className="mt-8 text-sm text-muted-foreground">
              No credit card required • Free 30-day trial • Cancel anytime
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}