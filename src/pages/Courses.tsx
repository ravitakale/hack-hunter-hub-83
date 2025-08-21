import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpen, Clock, Users, Star, Play, ChevronRight, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [levelFilter, setLevelFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  const paidCourses = [
    {
      id: 1,
      title: "Web Application Security Fundamentals",
      instructor: "Dr. Rajesh Kumar",
      duration: "8 weeks",
      level: "Beginner",
      rating: 4.8,
      students: 2450,
      price: "₹4,999",
      image: "🌐",
      description: "Master the basics of web application security, OWASP Top 10, and common vulnerabilities.",
      modules: ["XSS", "SQL Injection", "CSRF", "Authentication"]
    },
    {
      id: 2,
      title: "Advanced Penetration Testing",
      instructor: "Priya Sharma",
      duration: "12 weeks",
      level: "Advanced",
      rating: 4.9,
      students: 1280,
      price: "₹12,999",
      image: "🔍",
      description: "Deep dive into penetration testing methodologies, tools, and real-world scenarios.",
      modules: ["Network Pentesting", "Web App Testing", "Mobile Security", "Reporting"]
    },
    {
      id: 3,
      title: "Bug Bounty Hunting Mastery",
      instructor: "Arjun Singh",
      duration: "10 weeks",
      level: "Intermediate",
      rating: 4.7,
      students: 3200,
      price: "₹8,999",
      image: "🎯",
      description: "Learn professional bug bounty hunting techniques and maximize your earnings.",
      modules: ["Reconnaissance", "Vulnerability Analysis", "Exploitation", "Reporting"]
    },
    {
      id: 4,
      title: "Mobile Application Security",
      instructor: "Sneha Patel",
      duration: "6 weeks",
      level: "Intermediate",
      rating: 4.6,
      students: 1850,
      price: "₹6,999",
      image: "📱",
      description: "Comprehensive mobile app security testing for Android and iOS platforms.",
      modules: ["Static Analysis", "Dynamic Analysis", "Runtime Testing", "Secure Coding"]
    },
    {
      id: 5,
      title: "Cloud Security Assessment",
      instructor: "Vikash Gupta",
      duration: "8 weeks",
      level: "Advanced",
      rating: 4.8,
      students: 980,
      price: "₹10,999",
      image: "☁️",
      description: "Master cloud security assessment across AWS, Azure, and GCP platforms.",
      modules: ["IAM Security", "Container Security", "Serverless Security", "Compliance"]
    },
    {
      id: 6,
      title: "API Security Testing",
      instructor: "Rohit Verma",
      duration: "4 weeks",
      level: "Intermediate",
      rating: 4.5,
      students: 1650,
      price: "₹3,999",
      image: "🔗",
      description: "Specialized course on API security testing and vulnerability assessment.",
      modules: ["REST API Testing", "GraphQL Security", "OAuth Testing", "Rate Limiting"]
    },
    {
      id: 7,
      title: "Professional Manual Testing Mastery",
      instructor: "Anita Desai",
      duration: "10 weeks",
      level: "Intermediate",
      rating: 4.8,
      students: 2800,
      price: "₹7,999",
      image: "🧪",
      description: "Comprehensive manual testing course covering web, mobile, and API testing methodologies.",
      modules: ["Test Case Design", "Exploratory Testing", "Cross-browser Testing", "Mobile Testing"]
    },
    {
      id: 8,
      title: "Advanced Manual Testing Techniques",
      instructor: "Ravi Patel",
      duration: "8 weeks",
      level: "Advanced",
      rating: 4.7,
      students: 1450,
      price: "₹9,999",
      image: "🔬",
      description: "Advanced manual testing strategies, usability testing, and accessibility testing.",
      modules: ["Usability Testing", "Accessibility Testing", "Performance Testing", "Security Testing"]
    },
    {
      id: 9,
      title: "Mobile Manual Testing Specialist",
      instructor: "Deepika Singh",
      duration: "6 weeks",
      level: "Intermediate",
      rating: 4.6,
      students: 1920,
      price: "₹5,999",
      image: "📲",
      description: "Specialized manual testing for mobile applications across different platforms and devices.",
      modules: ["Device Testing", "OS Compatibility", "App Store Guidelines", "Performance Testing"]
    }
  ];

  const freeCourses = [
    {
      id: 101,
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
      id: 102,
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
      id: 103,
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
      id: 104,
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
      id: 105,
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
      id: 106,
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
    },
    {
      id: 107,
      title: "Manual Testing Fundamentals",
      instructor: "Anita Desai",
      duration: "4 weeks",
      level: "Beginner",
      rating: 4.7,
      students: 4800,
      price: "Free",
      image: "🧪",
      description: "Learn the basics of manual testing, test case writing, and bug reporting.",
      modules: ["Test Planning", "Test Cases", "Bug Reporting", "Testing Types"]
    },
    {
      id: 108,
      title: "Web Manual Testing Basics",
      instructor: "Ravi Patel",
      duration: "3 weeks",
      level: "Beginner",
      rating: 4.5,
      students: 3200,
      price: "Free",
      image: "🌍",
      description: "Introduction to manual testing of web applications and basic testing techniques.",
      modules: ["Browser Testing", "Form Testing", "Navigation Testing", "Responsive Testing"]
    },
    {
      id: 109,
      title: "API Testing Introduction",
      instructor: "Deepika Singh",
      duration: "3 weeks",
      level: "Beginner",
      rating: 4.6,
      students: 2900,
      price: "Free",
      image: "🔌",
      description: "Get started with API testing using manual techniques and basic tools.",
      modules: ["API Basics", "Postman Introduction", "Request Testing", "Response Validation"]
    }
  ];

  const allCourses = [...paidCourses, ...freeCourses];

  const filterCourses = (courses: typeof allCourses) => {
    return courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesLevel = levelFilter === "all" || course.level.toLowerCase() === levelFilter.toLowerCase();
      
      return matchesSearch && matchesLevel;
    });
  };

  const getPaginatedCourses = (courses: typeof allCourses) => {
    const filtered = filterCourses(courses);
    const startIndex = (currentPage - 1) * coursesPerPage;
    const endIndex = startIndex + coursesPerPage;
    return {
      courses: filtered.slice(startIndex, endIndex),
      totalPages: Math.ceil(filtered.length / coursesPerPage),
      totalCourses: filtered.length
    };
  };

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
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
              🎓 Learn from Industry Experts
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Master <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Cybersecurity</span>
              <br />with Expert-Led Courses
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Choose from free beginner courses or advanced paid programs. Start your cybersecurity journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="text-lg bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Play className="mr-2 h-5 w-5" />
                Start Learning
              </Button>
              <Link to="/start-learning-free">
                <Button variant="outline" size="lg" className="text-lg hover:bg-accent hover:text-accent-foreground border-2 hover:border-accent transition-all duration-300 hover:scale-105">
                  Start Free Learning
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
              { value: "15", label: "Total Courses", color: "text-primary" },
              { value: "9", label: "Free Courses", color: "text-accent" },
              { value: "4.7", label: "Average Rating", color: "text-medium" },
              { value: "30K+", label: "Students Learning", color: "text-high" }
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

      {/* Courses Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-muted/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">All Courses</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our complete curriculum with free and paid courses
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Select value={levelFilter} onValueChange={setLevelFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Tabs defaultValue="all" className="space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="all">All Courses</TabsTrigger>
              <TabsTrigger value="free">Free</TabsTrigger>
              <TabsTrigger value="paid">Paid</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              {(() => {
                const { courses, totalPages } = getPaginatedCourses(allCourses);
                return (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {courses.map((course, index) => (
                        <CourseCard key={course.id} course={course} index={index} />
                      ))}
                    </div>
                    {totalPages > 1 && (
                      <Pagination>
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious 
                              href="#" 
                              onClick={(e) => {
                                e.preventDefault();
                                if (currentPage > 1) setCurrentPage(currentPage - 1);
                              }}
                              className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                            />
                          </PaginationItem>
                          {[...Array(totalPages)].map((_, i) => (
                            <PaginationItem key={i + 1}>
                              <PaginationLink
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setCurrentPage(i + 1);
                                }}
                                isActive={currentPage === i + 1}
                              >
                                {i + 1}
                              </PaginationLink>
                            </PaginationItem>
                          ))}
                          <PaginationItem>
                            <PaginationNext
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                              }}
                              className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                            />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    )}
                  </>
                );
              })()}
            </TabsContent>

            <TabsContent value="free" className="space-y-8">
              {(() => {
                const { courses, totalPages } = getPaginatedCourses(freeCourses);
                return (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {courses.map((course, index) => (
                        <CourseCard key={course.id} course={course} index={index} />
                      ))}
                    </div>
                    {totalPages > 1 && (
                      <Pagination>
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious 
                              href="#" 
                              onClick={(e) => {
                                e.preventDefault();
                                if (currentPage > 1) setCurrentPage(currentPage - 1);
                              }}
                              className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                            />
                          </PaginationItem>
                          {[...Array(totalPages)].map((_, i) => (
                            <PaginationItem key={i + 1}>
                              <PaginationLink
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setCurrentPage(i + 1);
                                }}
                                isActive={currentPage === i + 1}
                              >
                                {i + 1}
                              </PaginationLink>
                            </PaginationItem>
                          ))}
                          <PaginationItem>
                            <PaginationNext
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                              }}
                              className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                            />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    )}
                  </>
                );
              })()}
            </TabsContent>

            <TabsContent value="paid" className="space-y-8">
              {(() => {
                const { courses, totalPages } = getPaginatedCourses(paidCourses);
                return (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {courses.map((course, index) => (
                        <CourseCard key={course.id} course={course} index={index} />
                      ))}
                    </div>
                    {totalPages > 1 && (
                      <Pagination>
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious 
                              href="#" 
                              onClick={(e) => {
                                e.preventDefault();
                                if (currentPage > 1) setCurrentPage(currentPage - 1);
                              }}
                              className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                            />
                          </PaginationItem>
                          {[...Array(totalPages)].map((_, i) => (
                            <PaginationItem key={i + 1}>
                              <PaginationLink
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setCurrentPage(i + 1);
                                }}
                                isActive={currentPage === i + 1}
                              >
                                {i + 1}
                              </PaginationLink>
                            </PaginationItem>
                          ))}
                          <PaginationItem>
                            <PaginationNext
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                              }}
                              className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                            />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    )}
                  </>
                );
              })()}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-muted/10 to-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Learning Paths</h2>
            <p className="text-xl text-muted-foreground">
              Structured learning journeys to guide your cybersecurity career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                emoji: "🛡️",
                title: "Security Analyst Path",
                description: "Perfect for beginners looking to start a career in cybersecurity",
                link: "/security-analyst-path"
              },
              {
                emoji: "🔒",
                title: "Penetration Tester Path", 
                description: "Advanced path for ethical hackers and penetration testers",
                link: "/penetration-tester-path"
              },
              {
                emoji: "🏆",
                title: "Bug Bounty Hunter Path",
                description: "Specialized training for professional bug bounty hunters",
                link: "/bug-bounty-hunter-path"
              }
            ].map((path, index) => (
              <Card key={index} className="group text-center p-8 border-0 bg-card/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
                <div className="relative">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{path.emoji}</div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{path.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {path.description}
                  </p>
                  <Link to={path.link}>
                    <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground border-2 hover:border-primary transition-all duration-300 hover:scale-105">
                      View Path
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const CourseCard = ({ course, index }: { course: any; index: number }) => {
  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "beginner": return "low";
      case "intermediate": return "medium";
      case "advanced": return "high";
      default: return "secondary";
    }
  };

  return (
    <Card className="group relative overflow-hidden border-0 bg-card/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
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
            {course.price === "Free" && (
              <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                FREE
              </Badge>
            )}
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
          {course.modules.slice(0, 3).map((module: string) => (
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
          <Link to={`/courses/${course.id}/enroll`}>
            <Button className="bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 group">
              <span className="group-hover:scale-105 transition-transform">
                Enroll Now
              </span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default Courses;
