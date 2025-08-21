import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Clock, Users, BookOpen, ArrowRight, CheckCircle, DollarSign } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BugBountyHunterPath = () => {
  const modules = [
    {
      title: "Bug Bounty Fundamentals",
      duration: "3 weeks",
      level: "Intermediate",
      topics: ["Platform Overview", "Legal Considerations", "Scope Definition", "Report Writing"]
    },
    {
      title: "Web Application Hunting",
      duration: "6 weeks", 
      level: "Intermediate",
      topics: ["Reconnaissance", "OWASP Testing", "Business Logic Flaws", "API Security"]
    },
    {
      title: "Mobile App Bug Hunting", 
      duration: "4 weeks",
      level: "Advanced", 
      topics: ["Android Security", "iOS Security", "Mobile APIs", "Static/Dynamic Analysis"]
    },
    {
      title: "Advanced Hunting Techniques",
      duration: "5 weeks",
      level: "Advanced",
      topics: ["Chain Exploits", "Zero-Day Research", "Automation Tools", "Custom Payloads"]
    },
    {
      title: "Building Your Reputation",
      duration: "2 weeks",
      level: "Intermediate",
      topics: ["Platform Strategy", "Networking", "Personal Branding", "Income Optimization"]
    }
  ];

  const skills = [
    "Professional Bug Bounty Methodologies",
    "Advanced Web Application Security Testing", 
    "Mobile Application Security Assessment",
    "API Security and Testing Techniques",
    "Vulnerability Research and Zero-Day Discovery",
    "Business Strategy for Bug Bounty Success"
  ];

  const platforms = [
    { name: "HackerOne", earning: "$50K - $500K+" },
    { name: "Bugcrowd", earning: "$30K - $300K+" },
    { name: "Synack", earning: "$40K - $400K+" },
    { name: "Intigriti", earning: "$25K - $200K+" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 dark:bg-amber-900/20 rounded-full mb-6">
            <Trophy className="h-10 w-10 text-amber-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Bug Bounty Hunter Path</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized training for professional bug bounty hunters. Learn to find vulnerabilities and build a profitable security career.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Badge variant="outline" className="flex items-center gap-2 border-amber-200 text-amber-700">
              <Clock className="h-4 w-4" />
              20 weeks total
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2 border-amber-200 text-amber-700">
              <Users className="h-4 w-4" />
              Intermediate+
            </Badge>
            <Badge variant="outline" className="flex items-center gap-2 border-amber-200 text-amber-700">
              <BookOpen className="h-4 w-4" />
              5 modules
            </Badge>
          </div>
        </div>

        {/* Earning Potential */}
        <Card className="border-emerald-200 bg-emerald-50 dark:bg-emerald-950/20 dark:border-emerald-800 mb-8">
          <CardHeader>
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-emerald-600" />
              <CardTitle className="text-emerald-800 dark:text-emerald-200">Earning Potential</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-emerald-700 dark:text-emerald-300 mb-4">
              Top bug bounty hunters earn significant income from major platforms:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {platforms.map((platform, index) => (
                <div key={index} className="text-center p-3 bg-white dark:bg-emerald-900/10 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  <h3 className="font-semibold text-emerald-800 dark:text-emerald-200">{platform.name}</h3>
                  <p className="text-sm text-emerald-600 dark:text-emerald-400">{platform.earning}/year</p>
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
                      <Badge variant={module.level === "Advanced" ? "destructive" : "secondary"}>
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
                <CardTitle>Professional Skills</CardTitle>
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
                <CardTitle>Start Your Hunt</CardTitle>
                <CardDescription>
                  Begin your journey to professional bug bounty hunting
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$199</div>
                  <p className="text-sm text-muted-foreground">One-time payment • Lifetime access</p>
                </div>
                <Link to="/courses">
                  <Button className="w-full">
                    Start Hunting Path
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground text-center">
                  ROI guarantee • Platform access included
                </p>
              </CardContent>
            </Card>

            {/* Community Access */}
            <Card>
              <CardHeader>
                <CardTitle>Exclusive Community</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Private Discord community
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Weekly live Q&A sessions
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Collaboration opportunities
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mentorship from top hunters
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Success Stories */}
        <Card>
          <CardHeader>
            <CardTitle>Success Stories</CardTitle>
            <CardDescription>
              Real results from our bug bounty hunter graduates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">Sarah M.</h3>
                <p className="text-2xl font-bold text-primary mb-2">$125K</p>
                <p className="text-sm text-muted-foreground">First year earnings</p>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">Alex R.</h3>
                <p className="text-2xl font-bold text-primary mb-2">$85K</p>
                <p className="text-sm text-muted-foreground">Part-time hunting</p>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-2">Maya K.</h3>
                <p className="text-2xl font-bold text-primary mb-2">$200K+</p>
                <p className="text-sm text-muted-foreground">Full-time hunter</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default BugBountyHunterPath;