import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Play, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  BookOpen, 
  Shield,
  Award,
  Target,
  ChevronRight,
  Download,
  Video
} from "lucide-react";
import { Link } from "react-router-dom";

const StartLearningFree = () => {
  const learningPath = [
    {
      id: 1,
      title: "Introduction to Cybersecurity",
      description: "Start with the fundamentals and build a strong foundation",
      duration: "4 weeks",
      lessons: 12,
      completed: false,
      difficulty: "Beginner",
      skills: ["Security Basics", "Threat Awareness", "Best Practices"],
      progress: 0
    },
    {
      id: 2,
      title: "Web Security Basics",
      description: "Learn about common web vulnerabilities and prevention",
      duration: "3 weeks", 
      lessons: 9,
      completed: false,
      difficulty: "Beginner",
      skills: ["HTTP/HTTPS", "XSS Prevention", "CSRF Protection"],
      progress: 0
    },
    {
      id: 3,
      title: "Network Security Fundamentals",
      description: "Understanding network protocols and security measures",
      duration: "5 weeks",
      lessons: 15,
      completed: false,
      difficulty: "Intermediate",
      skills: ["TCP/IP Security", "Firewalls", "VPN Configuration"],
      progress: 0
    }
  ];

  const benefits = [
    {
      icon: Video,
      title: "Video Lessons",
      description: "High-quality video content with practical examples"
    },
    {
      icon: Download,
      title: "Downloadable Resources",
      description: "PDFs, cheat sheets, and practice materials"
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Earn certificates upon course completion"
    },
    {
      icon: Target,
      title: "Hands-on Labs",
      description: "Practice with real-world scenarios"
    }
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted/20 to-background py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-accent/10 text-accent border-accent/20">
              🚀 Free Learning Path
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Start Your <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Cybersecurity</span>
              <br />Journey Today
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Follow our structured learning path designed by industry experts. From basics to advanced concepts, all completely free.
            </p>
            <Button size="lg" className="text-lg bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Play className="mr-2 h-5 w-5" />
              Begin Learning Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Free Learning Path</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Follow this carefully designed progression to master cybersecurity fundamentals
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {learningPath.map((course, index) => (
              <div key={course.id} className="relative mb-8 last:mb-0">
                {/* Connection Line */}
                {index < learningPath.length - 1 && (
                  <div className="absolute left-6 top-24 w-0.5 h-16 bg-gradient-to-b from-primary/50 to-primary/20 z-0"></div>
                )}
                
                <Card className="relative overflow-hidden border-0 bg-card/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
                  
                  <CardContent className="p-8 relative">
                    <div className="flex items-start gap-6">
                      {/* Step Number */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                          {index + 1}
                        </div>
                      </div>

                      {/* Course Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                            <p className="text-muted-foreground">{course.description}</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                              {course.difficulty}
                            </Badge>
                            <Badge variant="secondary">
                              FREE
                            </Badge>
                          </div>
                        </div>

                        {/* Course Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4 text-primary" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <BookOpen className="h-4 w-4 text-accent" />
                            <span>{course.lessons} lessons</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm col-span-2 md:col-span-1">
                            <Target className="h-4 w-4 text-medium" />
                            <span>Hands-on practice</span>
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="mb-6">
                          <p className="text-sm font-medium mb-2">What you'll learn:</p>
                          <div className="flex flex-wrap gap-2">
                            {course.skills.map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Progress */}
                        <div className="mb-6">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">Progress</span>
                            <span className="text-sm font-semibold">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>

                        {/* Action Button */}
                        <Button 
                          className="bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 group"
                          disabled={index > 0 && learningPath[index - 1].progress < 100}
                        >
                          <Play className="mr-2 h-4 w-4" />
                          <span className="group-hover:scale-105 transition-transform">
                            {course.progress > 0 ? "Continue" : "Start Course"}
                          </span>
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-muted/10 to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes Our Free Courses Special</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional quality education at no cost
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Level Up?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              After completing the free courses, explore our premium programs for advanced skills and certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/free-courses">
                <Button size="lg" className="text-lg bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Shield className="mr-2 h-5 w-5" />
                  View Free Courses
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline" size="lg" className="text-lg hover:bg-accent hover:text-accent-foreground border-2 hover:border-accent transition-all duration-300 hover:scale-105">
                  Explore All Courses
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

export default StartLearningFree;