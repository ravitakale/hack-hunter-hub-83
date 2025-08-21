import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQAndContact from "@/components/FAQAndContact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  FileText, 
  BookOpen,
  Target,
  TrendingUp,
  Award,
  Clock,
  Shield,
  Zap,
  Trophy,
  Calendar,
  CheckCircle,
  Star,
  Activity
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8 lg:py-16">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Target className="h-4 w-4 mr-2" />
            Security Dashboard
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            Welcome to Your Security Hub
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your central command center for bug bounty hunting, security research, and skill development. 
            Everything you need to succeed in cybersecurity.
          </p>
        </div>


        {/* Progress & Stats Dashboard */}
        <div className="mt-16 lg:mt-24 mb-16 lg:mb-24 space-y-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Reports Submitted", value: "24", icon: FileText, color: "text-blue-500", change: "+3 this month" },
              { label: "Valid Reports", value: "22", icon: Award, color: "text-green-500", change: "91.7% success rate" },
              { label: "Total Earnings", value: "₹45,000", icon: TrendingUp, color: "text-purple-500", change: "+₹12,500 this month" },
              { label: "Rank", value: "#127", icon: Trophy, color: "text-orange-500", change: "Up 23 positions" }
            ].map((stat) => {
              const IconComponent = stat.icon;
              return (
                <Card key={stat.label} className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 bg-muted rounded-lg">
                        <IconComponent className={`h-5 w-5 ${stat.color}`} />
                      </div>
                    </div>
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
                    <div className="text-xs text-green-600">{stat.change}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Progress Tracking */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Skill Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Security Skills Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  { skill: "Web Application Security", progress: 85, level: "Advanced" },
                  { skill: "Network Security", progress: 65, level: "Intermediate" },
                  { skill: "Mobile Security", progress: 40, level: "Beginner" },
                  { skill: "Cloud Security", progress: 25, level: "Beginner" }
                ].map((item) => (
                  <div key={item.skill} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{item.skill}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">{item.level}</Badge>
                        <span className="text-sm text-muted-foreground">{item.progress}%</span>
                      </div>
                    </div>
                    <Progress value={item.progress} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { action: "Submitted SQL injection report", time: "2 hours ago", status: "success" },
                  { action: "Completed XSS fundamentals course", time: "1 day ago", status: "success" },
                  { action: "Report #23 validated", time: "2 days ago", status: "success" },
                  { action: "Earned ₹5,000 bounty", time: "3 days ago", status: "success" },
                  { action: "Joined Advanced OWASP program", time: "5 days ago", status: "info" }
                ].map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`p-1 rounded-full mt-1 ${
                      activity.status === 'success' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                      <CheckCircle className="h-3 w-3" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Achievements & Next Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { title: "Bug Hunter Pro", description: "Submitted 20+ valid reports", earned: "3 days ago" },
                  { title: "Learning Enthusiast", description: "Completed 3 security courses", earned: "1 week ago" },
                  { title: "Quick Finder", description: "Found critical bug in <24h", earned: "2 weeks ago" }
                ].map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-2 bg-yellow-100 text-yellow-600 rounded-lg">
                      <Trophy className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{achievement.title}</h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      <p className="text-xs text-muted-foreground">{achievement.earned}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Recommended Next Steps
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { task: "Complete Mobile Security course", progress: 60, category: "Learning" },
                  { task: "Submit 5 more reports for Silver tier", progress: 80, category: "Bug Hunting" },
                  { task: "Join Advanced penetration testing", progress: 0, category: "Skill Building" }
                ].map((step, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">{step.task}</p>
                        <Badge variant="outline" className="text-xs mt-1">{step.category}</Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">{step.progress}%</span>
                    </div>
                    <Progress value={step.progress} className="h-1.5" />
                  </div>
                ))}
                <Button className="w-full mt-4" variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  View Learning Path
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ and Contact Section */}
        <FAQAndContact />

        {/* CTA Section */}
        <div className="text-center mt-16 lg:mt-24">
          <Card className="max-w-4xl mx-auto p-8 lg:p-12 bg-gradient-to-br from-primary/10 via-background to-accent/10 border-primary/20">
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold">Ready to Level Up Your Security Skills?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of security researchers who are earning while learning. 
                Start your journey today with our comprehensive platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/programs">
                  <Button size="lg" className="px-8">
                    <Target className="h-5 w-5 mr-2" />
                    Start Bug Hunting
                  </Button>
                </Link>
                <Link to="/courses">
                  <Button variant="outline" size="lg" className="px-8">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Explore Courses
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;