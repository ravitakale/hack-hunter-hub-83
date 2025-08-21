
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, Star, Play, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const FreeCourses = () => {
  const freeCourses = [
    {
      id: 1,
      title: "Introduction to Cybersecurity",
      instructor: "Dr. Rajesh Kumar",
      duration: "4 weeks",
      level: "Beginner",
      rating: 4.7,
      students: 5200,
      price: "Free",
      image: "🛡️",
      description: "Learn the fundamentals of cybersecurity and basic security principles.",
      modules: ["Security Basics", "Common Threats", "Best Practices", "Tools Overview"]
    },
    {
      id: 2,
      title: "Web Security Basics",
      instructor: "Priya Sharma",
      duration: "3 weeks",
      level: "Beginner",
      rating: 4.6,
      students: 3800,
      price: "Free",
      image: "🌐",
      description: "Understanding basic web vulnerabilities and how to prevent them.",
      modules: ["HTTP/HTTPS", "Basic XSS", "CSRF Prevention", "Secure Coding"]
    },
    {
      id: 3,
      title: "Network Security Fundamentals",
      instructor: "Arjun Singh",
      duration: "5 weeks",
      level: "Beginner",
      rating: 4.8,
      students: 4100,
      price: "Free",
      image: "🔒",
      description: "Basic concepts of network security and common attack vectors.",
      modules: ["TCP/IP Security", "Firewalls", "VPNs", "Network Monitoring"]
    },
    {
      id: 4,
      title: "Password Security & Management",
      instructor: "Sneha Patel",
      duration: "2 weeks",
      level: "Beginner",
      rating: 4.5,
      students: 2900,
      price: "Free",
      image: "🔑",
      description: "Learn about password security, management, and authentication methods.",
      modules: ["Strong Passwords", "2FA", "Password Managers", "Biometrics"]
    },
    {
      id: 5,
      title: "Social Engineering Awareness",
      instructor: "Vikash Gupta",
      duration: "3 weeks",
      level: "Beginner",
      rating: 4.4,
      students: 3500,
      price: "Free",
      image: "🎭",
      description: "Understanding social engineering attacks and how to defend against them.",
      modules: ["Phishing", "Pretexting", "Baiting", "Defense Strategies"]
    },
    {
      id: 6,
      title: "Mobile Security Basics",
      instructor: "Rohit Verma",
      duration: "3 weeks",
      level: "Beginner",
      rating: 4.6,
      students: 2700,
      price: "Free",
      image: "📱",
      description: "Essential mobile security practices for both Android and iOS devices.",
      modules: ["App Permissions", "Secure Communications", "Device Encryption", "Backup Security"]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "beginner": return "low";
      case "intermediate": return "medium";
      case "advanced": return "high";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted/20 to-background py-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors">
              🎁 100% Free Content
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Free <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Cybersecurity</span>
              <br />Courses for Everyone
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Start your cybersecurity journey with our carefully curated free courses. No hidden costs, just quality education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/start-learning-free">
                <Button size="lg" className="text-lg bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Play className="mr-2 h-5 w-5" />
                  Start Learning Free
                </Button>
              </Link>
              <Link to="/all-courses">
                <Button variant="outline" size="lg" className="text-lg hover:bg-accent hover:text-accent-foreground border-2 hover:border-accent transition-all duration-300 hover:scale-105">
                  View All Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-muted/30 via-muted/10 to-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "6", label: "Free Courses", color: "text-primary" },
              { value: "22K+", label: "Students Learning", color: "text-accent" },
              { value: "4.6", label: "Average Rating", color: "text-medium" },
              { value: "100%", label: "Free Access", color: "text-high" }
            ].map((stat, index) => (
              <div key={index} className="text-center group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`text-3xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Courses Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-muted/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Free Courses</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              High-quality cybersecurity education accessible to everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freeCourses.map((course, index) => (
              <Card key={course.id} className="group relative overflow-hidden border-0 bg-card/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative">
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-4xl p-3 bg-muted/50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      {course.image}
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge variant={getLevelColor(course.level) as any} className="shadow-sm">
                        {course.level}
                      </Badge>
                      <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                        FREE
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {course.instructor}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 relative">
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="bg-muted/30 rounded-lg p-3 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-1 text-accent fill-current" />
                        {course.rating}
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      {course.students.toLocaleString()} students
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {course.modules.slice(0, 3).map((module) => (
                      <Badge key={module} variant="outline" className="text-xs hover:bg-primary/10 transition-colors">
                        {module}
                      </Badge>
                    ))}
                    {course.modules.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{course.modules.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                      {course.price}
                    </div>
                    <Button className="bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <span className="group-hover:scale-105 transition-transform">Start Learning</span>
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-muted/10 to-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Advanced Learning?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              After completing our free courses, take your skills to the next level with our comprehensive paid programs and specialized training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/all-courses">
                <Button size="lg" className="text-lg bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <BookOpen className="mr-2 h-5 w-5" />
                  View All Courses
                </Button>
              </Link>
              <Link to="/programs">
                <Button variant="outline" size="lg" className="text-lg hover:bg-accent hover:text-accent-foreground border-2 hover:border-accent transition-all duration-300 hover:scale-105">
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreeCourses;
