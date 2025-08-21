import SubmitBugReportDialog from "./SubmitBugReportDialog";
import JoinProgramDialog from "./JoinProgramDialog";
import ViewReportsDialog from "./ViewReportsDialog";
import SecuritySkillsDialog from "./SecuritySkillsDialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Plus, 
  BarChart3,
  Shield,
  Smartphone,
  Network,
  Star,
  Clock,
  Users,
  ArrowRight,
  BookOpen
} from "lucide-react";

const SecurityResearchHub = () => {
  const researchActions = [
    {
      title: "Submit Bug Report",
      description: "Found a vulnerability? Report it now and earn rewards",
      icon: FileText,
      badge: "High Priority",
      badgeColor: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
      bgColor: "bg-red-50 dark:bg-red-950/20",
      iconColor: "text-red-600",
      component: SubmitBugReportDialog
    },
    {
      title: "Join New Program",
      description: "Discover and join the latest bug bounty programs",
      icon: Plus,
      badge: "Active",
      badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      iconColor: "text-blue-600",
      component: JoinProgramDialog
    },
    {
      title: "View My Reports",
      description: "Track your submissions and payout status",
      icon: BarChart3,
      badge: "Personal",
      badgeColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      iconColor: "text-green-600",
      component: ViewReportsDialog
    }
  ];

  const securitySkills = [
    {
      title: "Web Application Security",
      level: "Beginner to Advanced",
      description: "Master OWASP Top 10 and advanced web vulnerabilities",
      rating: 4.8,
      duration: "8 weeks",
      students: 1240,
      icon: Shield,
      color: "red",
      skillType: "web" as const,
      bgColor: "from-red-500 to-pink-500"
    },
    {
      title: "Mobile App Security", 
      level: "Intermediate",
      description: "iOS and Android security testing techniques",
      rating: 4.9,
      duration: "6 weeks",
      students: 890,
      icon: Smartphone,
      color: "blue",
      skillType: "mobile" as const,
      bgColor: "from-blue-500 to-cyan-500"
    },
    {
      title: "Network Security",
      level: "Advanced", 
      description: "Network protocols, penetration testing, and infrastructure",
      rating: 4.7,
      duration: "10 weeks",
      students: 560,
      icon: Network,
      color: "green",
      skillType: "network" as const,
      bgColor: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Security Research Hub Section */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Security Research Hub
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Everything you need to excel in bug bounty hunting and security research. From 
            submitting reports to mastering new skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {researchActions.map((action, index) => {
            const IconComponent = action.icon;
            const DialogComponent = action.component;
            
            return (
              <DialogComponent key={action.title}>
                <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-2 hover:border-primary/20">
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 ${action.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`h-10 w-10 ${action.iconColor}`} />
                      </div>
                      <Badge className={`absolute -top-2 -right-2 ${action.badgeColor}`}>
                        {action.badge}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {action.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {action.description}
                    </p>
                    
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      Get Started
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              </DialogComponent>
            );
          })}
        </div>
      </section>

      {/* Master Security Skills Section */}
      <section>
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="h-6 w-6 text-primary" />
            <Badge variant="outline" className="px-3 py-1">
              Learning Paths
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Master Security Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Structured learning paths designed by industry experts to take you from beginner to expert
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securitySkills.map((skill, index) => {
            const IconComponent = skill.icon;
            
            return (
              <SecuritySkillsDialog key={skill.title} skillType={skill.skillType}>
                <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden">
                  {/* Color bar */}
                  <div className={`h-1 bg-gradient-to-r ${skill.bgColor}`} />
                  
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 bg-gradient-to-r ${skill.bgColor} rounded-xl`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="font-semibold">{skill.rating}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <Badge variant="outline" className="mb-2 text-xs">
                        {skill.level}
                      </Badge>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {skill.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{skill.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{skill.students} students</span>
                      </div>
                    </div>
                    
                    <Button className={`w-full bg-gradient-to-r ${skill.bgColor} hover:opacity-90 transition-all duration-300 group-hover:shadow-lg`}>
                      <BookOpen className="h-4 w-4 mr-2" />
                      Start Learning
                    </Button>
                  </CardContent>
                </Card>
              </SecuritySkillsDialog>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default SecurityResearchHub;