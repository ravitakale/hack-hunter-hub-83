import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star, 
  Search,
  Filter,
  ChevronRight,
  Shield,
  Smartphone,
  Network,
  Code,
  Lock,
  Globe,
  Award,
  Play
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const AllCourses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allCourses = [
    // Free Courses
    {
      id: 1,
      title: "Introduction to Cybersecurity",
      instructor: "Dr. Rajesh Kumar",
      duration: "4 weeks",
      level: "Beginner",
      rating: 4.7,
      students: 5200,
      price: "Free",
      type: "free",
      image: "🛡️",
      category: "Security Fundamentals",
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
      type: "free",
      image: "🌐",
      category: "Web Security",
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
      type: "free",
      image: "🔒",
      category: "Network Security",
      description: "Basic concepts of network security and common attack vectors.",
      modules: ["TCP/IP Security", "Firewalls", "VPNs", "Network Monitoring"]
    },
    // Premium Courses
    {
      id: 4,
      title: "Advanced Penetration Testing",
      instructor: "Michael Chen",
      duration: "12 weeks",
      level: "Advanced",
      rating: 4.9,
      students: 1240,
      price: "₹12,999",
      type: "premium",
      image: "⚔️",
      category: "Penetration Testing",
      description: "Master advanced penetration testing techniques and methodologies.",
      modules: ["OSCP Prep", "Advanced Exploitation", "Post-Exploitation", "Reporting"]
    },
    {
      id: 5,
      title: "Ethical Hacking Masterclass",
      instructor: "Sarah Wilson",
      duration: "16 weeks",
      level: "Intermediate",
      rating: 4.8,
      students: 2150,
      price: "₹18,999",
      type: "premium",
      image: "🎭",
      category: "Ethical Hacking",
      description: "Comprehensive ethical hacking course covering all major domains.",
      modules: ["Reconnaissance", "Exploitation", "Web App Security", "Wireless Security"]
    },
    {
      id: 6,
      title: "Cloud Security Architecture",
      instructor: "David Kumar",
      duration: "10 weeks",
      level: "Advanced",
      rating: 4.7,
      students: 890,
      price: "₹15,999",
      type: "premium",
      image: "☁️",
      category: "Cloud Security",
      description: "Design and implement secure cloud architectures.",
      modules: ["AWS Security", "Azure Security", "GCP Security", "DevSecOps"]
    },
    {
      id: 7,
      title: "Mobile Application Security",
      instructor: "Lisa Park",
      duration: "8 weeks",
      level: "Intermediate",
      rating: 4.6,
      students: 1560,
      price: "₹11,999",
      type: "premium",
      image: "📱",
      category: "Mobile Security",
      description: "Secure mobile application development and testing.",
      modules: ["Android Security", "iOS Security", "OWASP Mobile", "Reverse Engineering"]
    },
    {
      id: 8,
      title: "Incident Response & Forensics",
      instructor: "Robert Taylor",
      duration: "14 weeks",
      level: "Advanced",
      rating: 4.8,
      students: 720,
      price: "₹16,999",
      type: "premium",
      image: "🔍",
      category: "Digital Forensics",
      description: "Learn incident response and digital forensics techniques.",
      modules: ["Incident Response", "Memory Forensics", "Network Forensics", "Malware Analysis"]
    }
  ];

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === "all" || course.level.toLowerCase() === selectedLevel;
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    
    return matchesSearch && matchesLevel && matchesCategory;
  });

  const freeCourses = filteredCourses.filter(course => course.type === "free");
  const premiumCourses = filteredCourses.filter(course => course.type === "premium");

  const categories = ["all", ...Array.from(new Set(allCourses.map(course => course.category)))];

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "beginner": return "low";
      case "intermediate": return "medium";
      case "advanced": return "high";
      default: return "secondary";
    }
  };

  const CourseCard = ({ course }: { course: any }) => (
    <Card className="group relative overflow-hidden border-0 bg-card/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
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
            <Badge 
              variant={course.type === "free" ? "secondary" : "default"} 
              className={course.type === "free" ? "bg-accent/10 text-accent border-accent/20" : "bg-primary/10 text-primary border-primary/20"}
            >
              {course.type === "free" ? "FREE" : "PREMIUM"}
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
        <Badge variant="outline" className="w-fit text-xs">
          {course.category}
        </Badge>
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
          <Button className="bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 group">
            <span className="group-hover:scale-105 transition-transform">
              {course.type === "free" ? "Start Learning" : "Enroll Now"}
            </span>
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

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
              📚 Complete Course Library
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              All <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Cybersecurity</span>
              <br />Courses in One Place
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              From free beginner courses to advanced premium programs. Find the perfect learning path for your cybersecurity career.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-80"
                />
              </div>
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-52">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="text-sm text-muted-foreground">
              {filteredCourses.length} courses found
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="all">All Courses ({filteredCourses.length})</TabsTrigger>
              <TabsTrigger value="free">Free ({freeCourses.length})</TabsTrigger>
              <TabsTrigger value="premium">Premium ({premiumCourses.length})</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="free">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {freeCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="premium">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {premiumCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No courses found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-muted/10 to-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Learning Journey</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Whether you're just starting out or looking to advance your skills, we have the perfect course for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/start-learning-free">
                <Button size="lg" className="text-lg bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Play className="mr-2 h-5 w-5" />
                  Start Learning Free
                </Button>
              </Link>
              <Link to="/free-courses">
                <Button variant="outline" size="lg" className="text-lg hover:bg-accent hover:text-accent-foreground border-2 hover:border-accent transition-all duration-300 hover:scale-105">
                  Browse Free Courses
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

export default AllCourses;