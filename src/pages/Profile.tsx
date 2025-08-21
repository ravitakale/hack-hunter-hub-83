import Navigation from "@/components/Navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { 
  User, 
  Mail, 
  MapPin, 
  Calendar, 
  Award, 
  Shield, 
  Bug, 
  Trophy, 
  Star,
  Github,
  Linkedin,
  Globe
} from "lucide-react";

const Profile = () => {
  // Mock data - replace with actual user data
  const userData = {
    name: "Alex Chen",
    username: "alexsec",
    email: "alex.chen@email.com",
    avatar: "/placeholder-avatar.jpg",
    bio: "Passionate security researcher specializing in web application vulnerabilities and penetration testing. Always looking for the next challenge.",
    location: "San Francisco, CA",
    joinDate: "January 2023",
    totalReports: 127,
    validReports: 98,
    criticalFindings: 23,
    reputation: 4850,
    rank: "Elite Researcher",
    level: 8,
    nextLevelProgress: 75,
    specializations: ["Web Application Security", "API Testing", "Mobile Security", "Network Penetration"],
    recentAchievements: [
      { name: "Bug Hunter", description: "Found 50+ valid vulnerabilities", icon: Bug },
      { name: "Critical Eye", description: "Discovered 20+ critical issues", icon: Shield },
      { name: "Hall of Fame", description: "Recognized by 10+ organizations", icon: Trophy },
    ],
    socialLinks: {
      github: "https://github.com/alexsec",
      linkedin: "https://linkedin.com/in/alexsec",
      website: "https://alexsec.dev"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <Avatar className="h-32 w-32">
                <AvatarImage src={userData.avatar} alt={userData.name} />
                <AvatarFallback className="text-2xl">{userData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl font-bold">{userData.name}</h1>
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {userData.rank}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">@{userData.username}</p>
                  <p className="text-sm text-muted-foreground mt-2 max-w-2xl">{userData.bio}</p>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    {userData.email}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {userData.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Joined {userData.joinDate}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Stats and Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Stats Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Research Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{userData.totalReports}</div>
                    <div className="text-xs text-muted-foreground">Total Reports</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{userData.validReports}</div>
                    <div className="text-xs text-muted-foreground">Valid Reports</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">{userData.criticalFindings}</div>
                    <div className="text-xs text-muted-foreground">Critical</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">{userData.reputation}</div>
                    <div className="text-xs text-muted-foreground">Reputation</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Level Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Level Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Level {userData.level}</span>
                    <span>Level {userData.level + 1}</span>
                  </div>
                  <Progress value={userData.nextLevelProgress} className="h-2" />
                  <p className="text-sm text-muted-foreground">
                    {userData.nextLevelProgress}% to next level
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a href={userData.socialLinks.github} className="flex items-center gap-3 text-sm hover:text-primary">
                  <Github className="h-4 w-4" />
                  GitHub Profile
                </a>
                <a href={userData.socialLinks.linkedin} className="flex items-center gap-3 text-sm hover:text-primary">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn Profile
                </a>
                <a href={userData.socialLinks.website} className="flex items-center gap-3 text-sm hover:text-primary">
                  <Globe className="h-4 w-4" />
                  Personal Website
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Recent Achievements
                </CardTitle>
                <CardDescription>Your latest accomplishments and milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {userData.recentAchievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                      <div className="p-2 rounded-full bg-primary/10">
                        <achievement.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{achievement.name}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Specializations */}
            <Card>
              <CardHeader>
                <CardTitle>Specializations</CardTitle>
                <CardDescription>Areas of expertise and focus</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {userData.specializations.map((spec, index) => (
                    <Badge key={index} variant="outline" className="px-3 py-1">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest research activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                    <div>
                      <p className="text-sm">Submitted vulnerability report for <strong>TechCorp API</strong></p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2"></div>
                    <div>
                      <p className="text-sm">Received bounty payment of <strong>$500</strong></p>
                      <p className="text-xs text-muted-foreground">1 day ago</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                    <div>
                      <p className="text-sm">Joined bug bounty program: <strong>SecureBank</strong></p>
                      <p className="text-xs text-muted-foreground">3 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;