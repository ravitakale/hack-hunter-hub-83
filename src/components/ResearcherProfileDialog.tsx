import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Star,
  MapPin,
  Calendar,
  Award,
  TrendingUp,
  Shield,
  Target,
  DollarSign,
  User,
  MessageSquare,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  Trophy,
  Zap
} from "lucide-react";

interface Researcher {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  rating: number;
  level: string;
  status: string;
  location: string;
  joinedDate: string;
  specialties: string[];
  reports: number;
  validReports: number;
  earnings: number;
  avgSeverity: string;
  lastActive: string;
}

interface ResearcherProfileDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  researcher: Researcher | null;
  onMessageClick?: () => void;
}

const mockAchievements = [
  { name: "Critical Hunter", description: "Found 10+ critical vulnerabilities", icon: Trophy },
  { name: "Speed Demon", description: "Fastest response time in Q1", icon: Zap },
  { name: "Top Performer", description: "Highest earnings this month", icon: Award },
  { name: "Verified Expert", description: "Verified security expert", icon: CheckCircle },
];

const mockRecentReports = [
  {
    title: "SQL Injection in Login Form",
    severity: "Critical",
    program: "Web Application Security",
    reward: 1500,
    date: "2024-01-15"
  },
  {
    title: "XSS in User Profile",
    severity: "High", 
    program: "Web Application Security",
    reward: 800,
    date: "2024-01-12"
  },
  {
    title: "CSRF in Settings",
    severity: "Medium",
    program: "Web Application Security", 
    reward: 300,
    date: "2024-01-10"
  },
];

export function ResearcherProfileDialog({ open, onOpenChange, researcher, onMessageClick }: ResearcherProfileDialogProps) {
  if (!researcher) return null;

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'expert': return 'destructive';
      case 'advanced': return 'medium';
      case 'intermediate': return 'secondary';
      default: return 'outline';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical': return 'destructive';
      case 'high': return 'high';
      case 'medium': return 'medium';
      case 'low': return 'low';
      default: return 'secondary';
    }
  };

  const validityRate = Math.round((researcher.validReports / researcher.reports) * 100);
  const successRate = validityRate;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-4 border-b">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={researcher.avatar} />
                <AvatarFallback className="text-lg">
                  <User className="h-8 w-8" />
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <DialogTitle className="text-2xl">{researcher.name}</DialogTitle>
                  <Badge variant={getLevelColor(researcher.level) as any} className="text-sm">
                    {researcher.level}
                  </Badge>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {researcher.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="font-medium">{researcher.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{researcher.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Joined {researcher.joinedDate}</span>
                  </div>
                </div>
                <DialogDescription className="text-base">
                  {researcher.email}
                </DialogDescription>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <ExternalLink className="h-4 w-4 mr-2" />
                Portfolio
              </Button>
              <Button onClick={onMessageClick}>
                <MessageSquare className="h-4 w-4 mr-2" />
                Message
              </Button>
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="flex-1">
          <div className="p-6 space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">{researcher.reports}</div>
                  <div className="text-sm text-muted-foreground">Total Reports</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">{researcher.validReports}</div>
                  <div className="text-sm text-muted-foreground">Valid Reports</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">${researcher.earnings.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Total Earnings</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">{researcher.avgSeverity}</div>
                  <div className="text-sm text-muted-foreground">Avg Severity</div>
                </CardContent>
              </Card>
            </div>

            {/* Performance Metrics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Performance Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Report Validity Rate</span>
                    <span className="font-medium">{validityRate}%</span>
                  </div>
                  <Progress value={validityRate} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Success Rate</span>
                    <span className="font-medium">{successRate}%</span>
                  </div>
                  <Progress value={successRate} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Response Time</span>
                    <span className="font-medium">2.4 hours avg</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Specialties */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Specialties
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {researcher.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {mockAchievements.map((achievement, index) => {
                    const IconComponent = achievement.icon;
                    return (
                      <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{achievement.name}</div>
                          <div className="text-xs text-muted-foreground">{achievement.description}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Recent Reports */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Recent Reports
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockRecentReports.map((report, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium text-sm mb-1">{report.title}</div>
                        <div className="text-xs text-muted-foreground">{report.program}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={getSeverityColor(report.severity) as any} className="text-xs">
                          {report.severity}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm font-medium">
                          <DollarSign className="h-3 w-3" />
                          <span>{report.reward}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button variant="outline" size="sm">
                    <Twitter className="h-4 w-4 mr-2" />
                    Twitter
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}