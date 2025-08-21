import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Play, 
  GraduationCap, 
  FileText, 
  PlusCircle, 
  BarChart3, 
  Trophy, 
  Target,
  Zap,
  ArrowRight,
  Star,
  Users,
  Clock,
  Shield,
  CheckSquare,
  ClipboardList
} from "lucide-react";

const QuickActions = () => {
  const quickActions = [
    {
      id: 1,
      title: "Submit Bug Report",
      description: "Found a vulnerability? Report it now and earn rewards",
      icon: FileText,
      color: "bg-gradient-to-br from-critical to-critical/80",
      textColor: "text-critical-foreground",
      link: "/programs",
      badge: "Bug Bounty",
      badgeColor: "critical"
    },
    {
      id: 2,
      title: "Manual Testing Jobs",
      description: "Apply for comprehensive manual testing projects",
      icon: CheckSquare,
      color: "bg-gradient-to-br from-medium to-medium/80",
      textColor: "text-medium-foreground",
      link: "/jobs",
      badge: "Testing Jobs",
      badgeColor: "medium"
    },
    {
      id: 3,
      title: "Join New Program",
      description: "Discover and join the latest bug bounty programs",
      icon: PlusCircle,
      color: "bg-gradient-to-br from-primary to-primary-glow",
      textColor: "text-primary-foreground",
      link: "/programs",
      badge: "Active",
      badgeColor: "default"
    },
    {
      id: 4,
      title: "View My Reports",
      description: "Track your submissions and payout status",
      icon: BarChart3,
      color: "bg-gradient-to-br from-accent to-accent/80",
      textColor: "text-accent-foreground",
      link: "/my-submissions",
      badge: "Personal",
      badgeColor: "secondary"
    }
  ];

  const learningPaths = [
    {
      id: 1,
      title: "Manual Testing Fundamentals",
      description: "Learn comprehensive manual testing methodologies and best practices",
      duration: "6 weeks",
      level: "Beginner to Intermediate",
      students: 980,
      rating: 4.9,
      link: "/courses/manual-testing"
    },
    {
      id: 2,
      title: "Web Application Security",
      description: "Master OWASP Top 10 and advanced web vulnerabilities for bug bounty",
      duration: "8 weeks",
      level: "Beginner to Advanced",
      students: 1240,
      rating: 4.8,
      link: "/courses/web-security"
    },
    {
      id: 3,
      title: "Mobile App Testing",
      description: "Manual testing techniques for iOS and Android applications",
      duration: "7 weeks",
      level: "Intermediate",
      students: 650,
      rating: 4.7,
      link: "/courses/mobile-testing"
    }
  ];

  const stats = [
    { label: "Active Researchers", value: "12,500+", icon: Users },
    { label: "Programs Available", value: "450+", icon: Shield },
    { label: "Avg Response Time", value: "< 2 hours", icon: Clock },
    { label: "Total Rewards Paid", value: "₹50M+", icon: Trophy }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/10 to-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Quick Actions Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
            <Zap className="h-4 w-4" />
            <span>Quick Actions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Start Your Security Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Access bug bounty programs, manual testing jobs, security courses, and track your progress
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {quickActions.map((action, index) => (
            <Link key={action.id} to={action.link}>
              <Card className="group relative overflow-hidden border-0 bg-card/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up cursor-pointer" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-4 rounded-xl ${action.color} group-hover:scale-110 transition-transform duration-300`}>
                      <action.icon className={`h-6 w-6 ${action.textColor}`} />
                    </div>
                    <Badge variant={action.badgeColor as any} className="text-xs">
                      {action.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {action.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {action.description}
                  </p>
                  <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Learning Paths Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <GraduationCap className="h-4 w-4" />
              <span>Learning Paths</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Master Security Skills</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Structured learning paths designed by industry experts to take you from beginner to expert
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {learningPaths.map((course, index) => (
              <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-card/80 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {course.level}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Star className="h-3 w-3 mr-1 fill-primary text-primary" />
                      {course.rating}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {course.students} students
                      </div>
                    </div>
                  </div>

                  <Link to={course.link}>
                    <Button className="w-full mt-4 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/80 hover:to-accent border-0">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Start Learning
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Action Buttons - Removed per user request */}
        <div className="text-center">
          {/* Start Learning, View Free Courses, and Security Researchers Leaderboard sections removed */}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;