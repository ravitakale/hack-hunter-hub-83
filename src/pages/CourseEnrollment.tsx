import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { BookOpen, Clock, Users, Star, CheckCircle, ArrowLeft, CreditCard, User, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CourseEnrollment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [enrollmentData, setEnrollmentData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    motivation: "",
    paymentMethod: "card"
  });
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Mock course data - in real app, this would be fetched based on ID
  const allCourses = [
    {
      id: 1,
      title: "Web Application Security Fundamentals",
      instructor: "Dr. Rajesh Kumar",
      duration: "8 weeks",
      level: "Beginner",
      rating: 4.8,
      students: 2450,
      price: "₹4,999",
      originalPrice: "₹6,999",
      image: "🌐",
      description: "Master the basics of web application security, OWASP Top 10, and common vulnerabilities.",
      modules: ["XSS", "SQL Injection", "CSRF", "Authentication"],
      features: [
        "8 weeks of comprehensive training",
        "Hands-on lab exercises",
        "Industry-recognized certificate",
        "24/7 instructor support",
        "Access to exclusive security tools",
        "Real-world project assignments"
      ]
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
      originalPrice: "₹15,999",
      image: "🔍",
      description: "Deep dive into penetration testing methodologies, tools, and real-world scenarios.",
      modules: ["Network Pentesting", "Web App Testing", "Mobile Security", "Reporting"],
      features: [
        "12 weeks of advanced training",
        "Professional penetration testing tools",
        "Industry certification preparation",
        "Direct mentor access",
        "Live hacking demonstrations",
        "Career placement assistance"
      ]
    },
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
      modules: ["Security Basics", "Common Threats", "Best Practices", "Tools Overview"],
      features: [
        "4 weeks of foundational training",
        "Interactive learning modules",
        "Community forum access",
        "Basic security tools introduction",
        "Weekly assessments",
        "Certificate of completion"
      ]
    }
  ];

  const course = allCourses.find(c => c.id === parseInt(id || ""));

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <Button onClick={() => navigate("/courses")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Button>
        </div>
      </div>
    );
  }

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case "beginner": return "low";
      case "intermediate": return "medium";
      case "advanced": return "high";
      default: return "secondary";
    }
  };

  const handleEnrollment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreedToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions to proceed.",
        variant: "destructive"
      });
      return;
    }

    setIsEnrolling(true);
    
    // Simulate enrollment process
    setTimeout(() => {
      setIsEnrolling(false);
      toast({
        title: "Enrollment Successful!",
        description: `You have successfully enrolled in ${course.title}. Check your email for further instructions.`,
      });
      navigate("/dashboard");
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setEnrollmentData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6"
          onClick={() => navigate("/courses")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Courses
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Course Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl p-3 bg-muted/50 rounded-xl">
                      {course.image}
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{course.title}</CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <User className="mr-1 h-4 w-4" />
                          {course.instructor}
                        </span>
                        <span className="flex items-center">
                          <Clock className="mr-1 h-4 w-4" />
                          {course.duration}
                        </span>
                        <span className="flex items-center">
                          <Users className="mr-1 h-4 w-4" />
                          {course.students} students
                        </span>
                      </div>
                    </div>
                  </div>
                  <Badge variant={getLevelColor(course.level) as any}>
                    {course.level}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{course.description}</p>
                
                <div className="space-y-4">
                  <h3 className="font-semibold">What you'll learn:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold mb-3">Course Modules:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {course.modules.map((module, index) => (
                      <Badge key={index} variant="outline" className="justify-center">
                        {module}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enrollment Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Enrollment Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleEnrollment} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={enrollmentData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={enrollmentData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={enrollmentData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="experience">Experience Level</Label>
                    <Select value={enrollmentData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Complete Beginner</SelectItem>
                        <SelectItem value="some-knowledge">Some Knowledge</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="motivation">Why do you want to take this course?</Label>
                    <Textarea
                      id="motivation"
                      value={enrollmentData.motivation}
                      onChange={(e) => handleInputChange("motivation", e.target.value)}
                      placeholder="Tell us about your goals and what you hope to achieve..."
                      rows={3}
                    />
                  </div>

                  {course.price !== "Free" && (
                    <div>
                      <Label>Payment Method</Label>
                      <Select value={enrollmentData.paymentMethod} onValueChange={(value) => handleInputChange("paymentMethod", value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="card">Credit/Debit Card</SelectItem>
                          <SelectItem value="upi">UPI</SelectItem>
                          <SelectItem value="netbanking">Net Banking</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={agreedToTerms}
                      onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the <a href="/terms" className="text-primary hover:underline">Terms and Conditions</a> and <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                    </Label>
                  </div>

                  <Button type="submit" className="w-full" disabled={isEnrolling}>
                    {isEnrolling ? (
                      "Processing..."
                    ) : (
                      <>
                        {course.price !== "Free" && <CreditCard className="mr-2 h-4 w-4" />}
                        {course.price === "Free" ? "Enroll Now" : `Enroll for ${course.price}`}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Course Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Course Price:</span>
                  <div className="text-right">
                    {course.originalPrice && course.price !== "Free" && (
                      <span className="text-sm text-muted-foreground line-through block">
                        {course.originalPrice}
                      </span>
                    )}
                    <span className={`font-bold ${course.price === "Free" ? "text-accent" : "text-primary"}`}>
                      {course.price}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span>Rating:</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span>{course.duration}</span>
                </div>

                <div className="flex justify-between">
                  <span>Students:</span>
                  <span>{course.students.toLocaleString()}</span>
                </div>

                <div className="flex justify-between">
                  <span>Level:</span>
                  <Badge variant={getLevelColor(course.level) as any} className="text-xs">
                    {course.level}
                  </Badge>
                </div>

                {course.price !== "Free" && course.originalPrice && (
                  <div className="pt-4 border-t">
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>You save:</span>
                      <span className="text-accent font-medium">
                        ₹{parseInt(course.originalPrice.replace(/[₹,]/g, "")) - parseInt(course.price.replace(/[₹,]/g, ""))}
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Have questions about this course? Our support team is here to help.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>support@cybersecurity.com</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>+91 9876543210</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseEnrollment;