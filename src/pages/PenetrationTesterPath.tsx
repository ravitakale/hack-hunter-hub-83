import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, Clock, Users, BookOpen, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PenetrationTesterPath = () => {
  const modules = [
    {
      title: "Advanced Network Security",
      duration: "4 weeks",
      level: "Advanced",
      topics: ["Network Protocols", "Firewall Bypass", "Network Pivoting", "Advanced Scanning"]
    },
    {
      title: "Web Application Security",
      duration: "5 weeks", 
      level: "Advanced",
      topics: ["OWASP Top 10", "SQL Injection", "XSS Attacks", "Authentication Bypass"]
    },
    {
      title: "System Exploitation", 
      duration: "6 weeks",
      level: "Expert", 
      topics: ["Buffer Overflows", "Privilege Escalation", "Exploit Development", "Post-Exploitation"]
    },
    {
      title: "Wireless & Mobile Security",
      duration: "4 weeks",
      level: "Advanced",
      topics: ["WiFi Attacks", "Mobile App Testing", "Bluetooth Security", "IoT Penetration"]
    },
    {
      title: "Red Team Operations",
      duration: "5 weeks",
      level: "Expert",
      topics: ["Social Engineering", "Physical Security", "Covert Operations", "Persistence"]
    }
  ];

  const skills = [
    "Advanced Penetration Testing Methodologies",
    "Exploit Development and Vulnerability Research", 
    "Web Application and Network Penetration Testing",
    "Social Engineering and Physical Security Testing",
    "Red Team Operations and Advanced Persistent Threats",
    "Mobile and Wireless Security Assessment"
  ];

  const prerequisites = [
    "Basic networking knowledge",
    "Linux command line proficiency",
    "Programming experience (Python/Bash)",
    "Basic cybersecurity concepts"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-destructive/10 rounded-full mb-6">
            <Lock className="h-10 w-10 text-destructive" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Penetration Tester Path</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced path for ethical hackers and penetration testers. Master the art of offensive security and red team operations.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Badge variant="destructive" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              24 weeks total
            </Badge>
            <Badge variant="destructive" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Advanced level
            </Badge>
            <Badge variant="destructive" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              5 modules
            </Badge>
          </div>
        </div>

        {/* Prerequisites Warning */}
        <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              <CardTitle className="text-amber-800 dark:text-amber-200">Prerequisites Required</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-amber-700 dark:text-amber-300 mb-4">
              This is an advanced course. Please ensure you meet these prerequisites:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {prerequisites.map((prereq, index) => (
                <div key={index} className="flex items-center text-sm text-amber-700 dark:text-amber-300">
                  <CheckCircle className="h-4 w-4 text-amber-600 mr-2" />
                  {prereq}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Course Modules */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Learning Modules</h2>
            <div className="space-y-6">
              {modules.map((module, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl">{module.title}</CardTitle>
                        <CardDescription className="mt-2">
                          {module.duration} • {module.level} Level
                        </CardDescription>
                      </div>
                      <Badge variant={module.level === "Expert" ? "destructive" : "secondary"}>
                        {module.level}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {module.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {topic}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills & Enrollment */}
          <div className="space-y-8">
            {/* Skills You'll Learn */}
            <Card>
              <CardHeader>
                <CardTitle>Advanced Skills You'll Master</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Enrollment Card */}
            <Card>
              <CardHeader>
                <CardTitle>Ready for the Challenge?</CardTitle>
                <CardDescription>
                  Master advanced penetration testing techniques
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$299</div>
                  <p className="text-sm text-muted-foreground">One-time payment • Lifetime access</p>
                </div>
                <Link to="/courses">
                  <Button className="w-full">
                    Enroll Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground text-center">
                  Includes hands-on labs • Certificate upon completion
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Career Outcomes */}
        <Card>
          <CardHeader>
            <CardTitle>Career Outcomes</CardTitle>
            <CardDescription>
              Advanced roles for penetration testing professionals
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Senior Penetration Tester</h3>
                <p className="text-sm text-muted-foreground">Lead complex security assessments</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Red Team Operator</h3>
                <p className="text-sm text-muted-foreground">Simulate advanced persistent threats</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Security Consultant</h3>
                <p className="text-sm text-muted-foreground">Provide expert security guidance</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default PenetrationTesterPath;