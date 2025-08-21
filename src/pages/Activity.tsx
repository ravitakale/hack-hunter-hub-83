import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ReportDetailsDialog } from "@/components/ReportDetailsDialog";
import { Calendar, Clock, DollarSign, Shield, Trophy, Zap, TrendingUp, Users, FileCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Activity = () => {
  const navigate = useNavigate();
  const recentActivities = [
    {
      id: 1,
      type: "bounty_submission",
      user: { name: "Rahul Sharma", avatar: "RS", image: null },
      action: "submitted",
      vulnerability: "SQL Injection in Authentication Module",
      target: "TechCorp Security Program",
      reward: "₹2,50,000",
      time: "2 hours ago",
      severity: "Critical",
      report: {
        id: 1,
        title: "SQL Injection in Authentication Module",
        researcher: "Rahul Sharma",
        severity: "Critical",
        status: "New",
        program: "TechCorp Security Program",
        submittedAt: "2024-08-19T10:00:00Z",
        reward: 250000,
        description: "A critical SQL injection vulnerability was discovered in the user authentication module that allows attackers to bypass login mechanisms and access unauthorized user accounts."
      }
    },
    {
      id: 2,
      type: "bounty_reward",
      user: { name: "Priya Patel", avatar: "PP", image: null },
      action: "received bounty reward for",
      vulnerability: "Cross-Site Request Forgery (CSRF)",
      target: "FinanceSecure Bug Bounty",
      reward: "₹75,000",
      time: "4 hours ago",
      severity: "High"
    },
    {
      id: 3,
      type: "program_launch",
      user: { name: "SecureBank", avatar: "SB", image: null },
      action: "launched new bug bounty program",
      vulnerability: "Banking Platform Security",
      target: "Banking Platform Security",
      reward: "₹10,00,000",
      time: "6 hours ago",
      severity: "Program"
    },
    {
      id: 4,
      type: "course_completion",
      user: { name: "Arjun Singh", avatar: "AS", image: null },
      action: "completed course",
      vulnerability: "Advanced Penetration Testing",
      target: "Advanced Penetration Testing",
      reward: "Certificate",
      time: "8 hours ago",
      severity: "Education"
    },
    {
      id: 5,
      type: "manual_testing_report",
      user: { name: "Aditi Sharma", avatar: "AS", image: null },
      action: "submitted",
      vulnerability: "User Authentication Flow Testing Report",
      target: "Mobile Banking App Testing",
      reward: "₹35,000",
      time: "10 hours ago",
      severity: "Manual Testing",
      report: {
        id: 101,
        title: "User Authentication Flow Testing Report",
        researcher: "Aditi Sharma",
        severity: "Manual Testing",
        status: "Completed",
        program: "Mobile Banking App Testing",
        submittedAt: "2024-08-19T02:00:00Z",
        reward: 35000,
        description: "Comprehensive manual testing of the user authentication flow including edge cases, error handling, and security validation."
      }
    },
    {
      id: 6,
      type: "leaderboard",
      user: { name: "Sneha Verma", avatar: "SV", image: null },
      action: "reached #5 position",
      vulnerability: "Monthly Leaderboard",
      target: "Monthly Leaderboard",
      reward: "₹1,25,000",  
      time: "12 hours ago",
      severity: "Achievement"
    },
    {
      id: 7,
      type: "manual_testing_report",
      user: { name: "Rohit Gupta", avatar: "RG", image: null },
      action: "completed",
      vulnerability: "Payment Gateway Edge Cases Testing",
      target: "Payment Gateway Integration",
      reward: "₹50,000",
      time: "18 hours ago",
      severity: "Manual Testing",
      report: {
        id: 102,
        title: "Payment Gateway Edge Cases Testing",
        researcher: "Rohit Gupta",
        severity: "Manual Testing",
        status: "Approved",
        program: "Payment Gateway Integration",
        submittedAt: "2024-08-18T20:00:00Z",
        reward: 50000,
        description: "Detailed manual testing of payment gateway edge cases including network failures, timeout scenarios, and transaction rollbacks."
      }
    },
    {
      id: 8,
      type: "bounty_submission",
      user: { name: "Vikash Kumar", avatar: "VK", image: null },
      action: "submitted",
      vulnerability: "Cross-Site Scripting (XSS) in Product Search",
      target: "E-Commerce Security Challenge",
      reward: "₹45,000",
      time: "1 day ago",
      severity: "Medium",
      report: {
        id: 6,
        title: "Cross-Site Scripting (XSS) in Product Search",
        researcher: "Vikash Kumar",
        severity: "Medium",
        status: "Triaged",
        program: "E-Commerce Security Challenge",
        submittedAt: "2024-08-18T14:30:00Z",
        reward: 45000,
        description: "A reflected XSS vulnerability was found in the product search functionality that allows attackers to execute malicious scripts in the context of other users' browsers."
      }
    }
  ];

  const trending = [
    { program: "TechCorp Security Program", submissions: 145, growth: "+23%" },
    { program: "FinanceSecure Bug Bounty", submissions: 89, growth: "+15%" },
    { program: "E-Commerce Security Challenge", submissions: 67, growth: "+31%" },
    { program: "Healthcare Data Protection", submissions: 42, growth: "+8%" }
  ];

  const topHunters = [
    { rank: 1, name: "CyberNinja", earnings: "₹12,45,000", bugs: 247 },
    { rank: 2, name: "SecGuardian", earnings: "₹9,87,000", bugs: 189 },
    { rank: 3, name: "BugHunter_Pro", earnings: "₹8,34,000", bugs: 156 },
    { rank: 4, name: "WhiteHat_Elite", earnings: "₹7,92,000", bugs: 134 },
    { rank: 5, name: "VulnFinder", earnings: "₹6,78,000", bugs: 112 }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "bounty_submission": return <Shield className="h-4 w-4" />;
      case "bounty_reward": return <DollarSign className="h-4 w-4" />;
      case "program_launch": return <Zap className="h-4 w-4" />;
      case "course_completion": return <Trophy className="h-4 w-4" />;
      case "leaderboard": return <TrendingUp className="h-4 w-4" />;
      case "manual_testing_report": return <FileCheck className="h-4 w-4" />;
      default: return <Shield className="h-4 w-4" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "critical": return "critical";
      case "high": return "high";
      case "medium": return "medium";
      case "low": return "low";
      case "program": return "secondary";
      case "education": return "secondary";
      case "achievement": return "secondary";
      case "manual testing": return "secondary";
      default: return "secondary";
    }
  };

  const handleReportClick = (activity: any) => {
    if (activity.type === "bounty_submission" && activity.report) {
      navigate(`/reports/${activity.report.id}`);
    } else if (activity.type === "manual_testing_report" && activity.report) {
      navigate(`/reports/${activity.report.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Recent Activity Feed */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Recent Activity</h2>
                <Button variant="outline" size="sm">
                  <Clock className="h-4 w-4 mr-2" />
                  Live Feed
                </Button>
              </div>

              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <Card 
                    key={activity.id} 
                    className={`hover:shadow-md transition-shadow ${
                      (activity.type === "bounty_submission" || activity.type === "manual_testing_report") ? "cursor-pointer" : ""
                    }`}
                    onClick={() => handleReportClick(activity)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={activity.user.image || undefined} />
                          <AvatarFallback>{activity.user.avatar}</AvatarFallback>
                        </Avatar>
                        
                         <div className="flex-1 min-w-0">
                           <div className="flex items-center space-x-2 mb-1">
                             {getActivityIcon(activity.type)}
                             <span className="font-medium text-foreground">{activity.vulnerability}</span>
                           </div>
                           
                           <div className="text-sm text-muted-foreground mb-2">
                             {activity.target}
                           </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Badge variant={getSeverityColor(activity.severity) as any} className="text-xs">
                                {activity.severity}
                              </Badge>
                              <span className="text-sm font-medium text-accent">
                                {activity.reward}
                              </span>
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {activity.time}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button variant="outline">Load More Activities</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Trending Programs */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Trending Programs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {trending.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-sm">{item.program}</div>
                        <div className="text-xs text-muted-foreground">
                          {item.submissions} submissions
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {item.growth}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Top Hunters */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="h-5 w-5 mr-2" />
                    Top Hunters This Month
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {topHunters.map((hunter) => (
                    <div key={hunter.rank} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
                        {hunter.rank}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm">{hunter.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {hunter.bugs} bugs • {hunter.earnings}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" size="sm">
                    Submit Bug Report
                  </Button>
                  <Button variant="outline" className="w-full" size="sm">
                    Join New Program
                  </Button>
                  <Button variant="outline" className="w-full" size="sm">
                    View My Reports
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Activity;