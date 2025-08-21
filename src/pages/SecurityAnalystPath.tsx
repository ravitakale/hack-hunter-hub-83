import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, Users, BookOpen, ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SecurityAnalystPath = () => {
  const modules = [
    {
      title: "Security Fundamentals",
      duration: "2 weeks",
      level: "Beginner",
      topics: ["Network Security Basics", "Threat Landscape", "Security Policies", "Risk Assessment"]
    },
    {
      title: "Incident Response",
      duration: "3 weeks", 
      level: "Beginner",
      topics: ["SIEM Tools", "Log Analysis", "Threat Detection", "Response Procedures"]
    },
    {
      title: "Vulnerability Assessment",
      duration: "4 weeks",
      level: "Intermediate", 
      topics: ["Vulnerability Scanning", "Report Writing", "Remediation Planning", "Compliance"]
    },
    {
      title: "Security Operations Center",
      duration: "3 weeks",
      level: "Intermediate",
      topics: ["SOC Operations", "Monitoring Tools", "Threat Hunting", "Forensics Basics"]
    }
  ];

  const skills = [
    "Security Information and Event Management (SIEM)",
    "Incident Response and Handling",
    "Vulnerability Assessment and Management", 
    "Security Monitoring and Analysis",
    "Compliance and Risk Management",
    "Threat Intelligence Analysis"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Shield className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Security Analyst Path</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Perfect for beginners looking to start a career in cybersecurity. Learn the fundamentals of security analysis and incident response.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Badge variant="secondary" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              12 weeks total
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Beginner friendly
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              4 modules
            </Badge>
          </div>
        </div>

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
                      <Badge variant={module.level === "Beginner" ? "secondary" : "outline"}>
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
                <CardTitle>Skills You'll Learn</CardTitle>
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
                <CardTitle>Ready to Start?</CardTitle>
                <CardDescription>
                  Begin your cybersecurity journey with our structured learning path
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">Free</div>
                  <p className="text-sm text-muted-foreground">Complete access to all materials</p>
                </div>
                <Link to="/start-learning-free">
                  <Button className="w-full">
                    Start Learning Path
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground text-center">
                  No credit card required • Access immediately
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
              Graduates of this path typically pursue these cybersecurity roles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Security Analyst</h3>
                <p className="text-sm text-muted-foreground">Monitor and analyze security events</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">SOC Analyst</h3>
                <p className="text-sm text-muted-foreground">Work in Security Operations Centers</p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Incident Response Specialist</h3>
                <p className="text-sm text-muted-foreground">Handle security incidents and breaches</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default SecurityAnalystPath;