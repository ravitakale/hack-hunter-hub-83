import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, DollarSign, Calendar, Shield, Star, Users, TrendingUp, Award } from "lucide-react";

const FeaturedPrograms = () => {
  const programs = [
    {
      id: 1,
      title: "TechCorp Security Program",
      company: "TechCorp India",
      logo: "🏢",
      minReward: "₹10,000",
      maxReward: "₹5,00,000",
      scope: "Web Application, Mobile App",
      launched: "2 days ago",
      status: "Active",
      severity: ["Critical", "High", "Medium", "Low"],
      description: "Find vulnerabilities in our core platform and mobile applications.",
      participants: 245,
      rating: 4.8,
      responseTime: "< 1 day",
      isFeatured: true,
      type: "bug-bounty"
    },
    {
      id: 2,
      title: "Manual Testing - Banking App",
      company: "SecureBank",
      logo: "🏦",
      minReward: "₹8,000",
      maxReward: "₹25,000",
      scope: "Banking App, User Experience",
      launched: "1 week ago",
      status: "Active",
      severity: ["Functional", "UI/UX", "Performance"],
      description: "Comprehensive manual testing of our mobile banking application.",
      participants: 89,
      rating: 4.9,
      responseTime: "< 2 hours",
      isFeatured: true,
      type: "manual-testing"
    },
    {
      id: 3,
      title: "E-Commerce Security Challenge",
      company: "ShopSafe",
      logo: "🛒",
      minReward: "₹5,000",
      maxReward: "₹2,50,000",
      scope: "E-commerce Platform",
      launched: "3 days ago",
      status: "Active",
      severity: ["Critical", "High", "Medium"],
      description: "Help us protect customer data and payment systems.",
      participants: 156,
      rating: 4.7,
      responseTime: "< 3 hours",
      isFeatured: false,
      type: "bug-bounty"
    },
    {
      id: 4,
      title: "Manual QA Testing Project",
      company: "EduTech Solutions",
      logo: "📚",
      minReward: "₹6,000",
      maxReward: "₹15,000",
      scope: "Learning Platform, API Testing",
      launched: "4 days ago",
      status: "Active",
      severity: ["Functional", "Regression", "API"],
      description: "End-to-end manual testing of our online learning platform.",
      participants: 67,
      rating: 4.6,
      responseTime: "< 4 hours",
      isFeatured: false,
      type: "manual-testing"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "critical": return "critical";
      case "high": return "high";
      case "medium": return "medium";
      case "low": return "low";
      default: return "secondary";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
            <Star className="h-4 w-4" />
            <span>Featured Programs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Security Programs & Testing Jobs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore bug bounty programs and manual testing opportunities from top companies. 
            Find vulnerabilities and earn rewards while making the internet safer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card 
              key={program.id} 
              className={`group relative overflow-hidden border-0 bg-card/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up ${
                program.isFeatured ? 'ring-2 ring-primary/20 shadow-lg' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-4 right-4 z-10 flex flex-col gap-1">
                {program.isFeatured && (
                  <Badge className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground border-0 shadow-lg">
                    <Award className="h-3 w-3 mr-1" />
                    Featured
                  </Badge>
                )}
                <Badge variant={program.type === 'manual-testing' ? 'secondary' : 'default'} className="text-xs">
                  {program.type === 'manual-testing' ? 'Manual Testing' : 'Bug Bounty'}
                </Badge>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="text-3xl p-3 bg-muted/50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        {program.logo}
                      </div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                        {program.title}
                      </CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground mt-2">
                        <Building2 className="h-4 w-4 mr-2" />
                        {program.company}
                      </div>
                      <div className="flex items-center mt-2 space-x-4">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Star className="h-3 w-3 mr-1 fill-primary text-primary" />
                          {program.rating}
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Users className="h-3 w-3 mr-1" />
                          {program.participants}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-5 relative">
                <p className="text-sm text-muted-foreground leading-relaxed">{program.description}</p>
                
                <div className="bg-muted/30 rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm">
                      <DollarSign className="h-4 w-4 mr-2 text-accent" />
                      <span className="font-semibold text-foreground">{program.minReward} - {program.maxReward}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {program.responseTime}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {program.launched}
                    </div>
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 mr-2" />
                      {program.scope.split(',')[0]}...
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {program.severity.map((sev) => (
                    <Badge 
                      key={sev} 
                      variant={getSeverityColor(sev) as any}
                      className="text-xs font-medium shadow-sm hover:shadow-md transition-shadow"
                    >
                      {sev}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-3 pt-6">
                <Link to={`/programs/${program.id}`} className="flex-1">
                  <Button className="w-full bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <span className="group-hover:scale-105 transition-transform">View Program</span>
                  </Button>
                </Link>
                <Button variant="outline" size="icon" className="hover:bg-accent hover:text-accent-foreground border-border/50">
                  <Star className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/programs">
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg font-semibold hover:bg-primary hover:text-primary-foreground border-2 hover:border-primary transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <TrendingUp className="h-5 w-5 mr-2" />
              Explore All Programs
              <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;