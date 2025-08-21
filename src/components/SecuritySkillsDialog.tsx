import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Star, 
  Clock, 
  Users,
  PlayCircle,
  BookOpen,
  Shield,
  Smartphone,
  Network,
  Award,
  CheckCircle
} from "lucide-react";

interface SecuritySkillsDialogProps {
  children: React.ReactNode;
  skillType: "web" | "mobile" | "network";
}

const SecuritySkillsDialog = ({ children, skillType }: SecuritySkillsDialogProps) => {
  const skillsData = {
    web: {
      title: "Web Application Security",
      level: "Beginner to Advanced",
      rating: 4.8,
      duration: "8 weeks",
      students: 1240,
      description: "Master OWASP Top 10 and advanced web vulnerabilities",
      color: "red",
      icon: Shield,
      modules: [
        { name: "Introduction to Web Security", duration: "1 week", completed: true },
        { name: "OWASP Top 10 Deep Dive", duration: "2 weeks", completed: true },
        { name: "SQL Injection Mastery", duration: "1 week", completed: false },
        { name: "XSS and CSRF Attacks", duration: "1 week", completed: false },
        { name: "Authentication & Session Management", duration: "1 week", completed: false },
        { name: "Advanced Web Vulnerabilities", duration: "2 weeks", completed: false }
      ]
    },
    mobile: {
      title: "Mobile App Security",
      level: "Intermediate",
      rating: 4.9,
      duration: "6 weeks", 
      students: 890,
      description: "iOS and Android security testing techniques",
      color: "blue",
      icon: Smartphone,
      modules: [
        { name: "Mobile Security Fundamentals", duration: "1 week", completed: false },
        { name: "Android Security Testing", duration: "2 weeks", completed: false },
        { name: "iOS Security Assessment", duration: "2 weeks", completed: false },
        { name: "Mobile App Reverse Engineering", duration: "1 week", completed: false }
      ]
    },
    network: {
      title: "Network Security",
      level: "Advanced",
      rating: 4.7,
      duration: "10 weeks",
      students: 560,
      description: "Network protocols, penetration testing, and infrastructure",
      color: "green",
      icon: Network,
      modules: [
        { name: "Network Protocols & Architecture", duration: "2 weeks", completed: false },
        { name: "Network Scanning & Reconnaissance", duration: "2 weeks", completed: false },
        { name: "Vulnerability Assessment", duration: "2 weeks", completed: false },
        { name: "Penetration Testing Methodology", duration: "2 weeks", completed: false },
        { name: "Post-Exploitation Techniques", duration: "2 weeks", completed: false }
      ]
    }
  };

  const skill = skillsData[skillType];
  const IconComponent = skill.icon;
  const completedModules = skill.modules.filter(m => m.completed).length;
  const progressPercentage = (completedModules / skill.modules.length) * 100;

  const getColorClasses = (color: string) => {
    switch (color) {
      case "red":
        return {
          bg: "bg-red-500",
          text: "text-red-600",
          bgLight: "bg-red-50 dark:bg-red-950/20",
          border: "border-red-500"
        };
      case "blue":
        return {
          bg: "bg-blue-500",
          text: "text-blue-600", 
          bgLight: "bg-blue-50 dark:bg-blue-950/20",
          border: "border-blue-500"
        };
      case "green":
        return {
          bg: "bg-green-500",
          text: "text-green-600",
          bgLight: "bg-green-50 dark:bg-green-950/20", 
          border: "border-green-500"
        };
      default:
        return {
          bg: "bg-gray-500",
          text: "text-gray-600",
          bgLight: "bg-gray-50 dark:bg-gray-950/20",
          border: "border-gray-500"
        };
    }
  };

  const colors = getColorClasses(skill.color);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <div className={`p-2 ${colors.bgLight} rounded-full`}>
              <IconComponent className={`h-5 w-5 ${colors.text}`} />
            </div>
            {skill.title}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Course Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className={`${colors.bgLight} ${colors.border} border-l-4`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground">{skill.level}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="font-semibold">{skill.rating}</span>
                  </div>
                </div>
                
                <p className="text-sm mb-4">{skill.description}</p>
                
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{skill.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{skill.students} students</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Your Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Course Completion</span>
                    <span className="text-sm font-semibold">{Math.round(progressPercentage)}%</span>
                  </div>
                  <Progress value={progressPercentage} className="h-2" />
                  <p className="text-sm text-muted-foreground">
                    {completedModules} of {skill.modules.length} modules completed
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Modules */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Course Modules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {skill.modules.map((module, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                      <div className={`p-1 rounded-full ${module.completed ? 'bg-green-100 dark:bg-green-900/30' : 'bg-gray-100 dark:bg-gray-900/30'}`}>
                        {module.completed ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <PlayCircle className="h-4 w-4 text-gray-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{module.name}</h4>
                        <p className="text-xs text-muted-foreground">{module.duration}</p>
                      </div>
                      <Button 
                        variant={module.completed ? "outline" : "default"} 
                        size="sm"
                        disabled={index > 0 && !skill.modules[index - 1].completed && !module.completed}
                      >
                        {module.completed ? "Review" : "Start"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Enrollment */}
            <Card>
              <CardContent className="p-6 text-center">
                <div className={`p-4 ${colors.bgLight} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className={`h-8 w-8 ${colors.text}`} />
                </div>
                <h3 className="font-semibold mb-2">Ready to Start?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Join thousands of security professionals
                </p>
                <Button className={`w-full ${colors.bg} hover:opacity-90`}>
                  <PlayCircle className="h-4 w-4 mr-2" />
                  Start Learning
                </Button>
              </CardContent>
            </Card>

            {/* What You'll Learn */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What You'll Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  {skillType === "web" && (
                    <>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>OWASP Top 10 vulnerabilities</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Manual and automated testing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Real-world attack scenarios</span>
                      </div>
                    </>
                  )}
                  {skillType === "mobile" && (
                    <>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>iOS/Android app analysis</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Static and dynamic analysis</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Mobile malware detection</span>
                      </div>
                    </>
                  )}
                  {skillType === "network" && (
                    <>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Network protocol analysis</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Penetration testing tools</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Infrastructure hardening</span>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Prerequisites */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Prerequisites</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {skillType === "web" && "Basic knowledge of web technologies (HTML, HTTP)"}
                {skillType === "mobile" && "Understanding of mobile development and networking"}
                {skillType === "network" && "Solid foundation in networking and system administration"}
              </CardContent>
            </Card>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SecuritySkillsDialog;