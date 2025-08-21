import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import ManualTestingReportDialog from "@/components/ManualTestingReportDialog";
import { 
  Building2, 
  DollarSign, 
  Calendar, 
  Shield, 
  Users, 
  CheckCircle,
  ArrowLeft,
  ExternalLink,
  Heart,
  MessageSquare,
  Star,
  BookOpen,
  FileText,
  Target,
  Eye,
  Download,
  Copy,
  Globe
} from "lucide-react";

const ProgramDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [isFollowing, setIsFollowing] = useState(false);
  const [showUserStories, setShowUserStories] = useState(false);
  const [showGuidelines, setShowGuidelines] = useState(false);
  const [showTestScenarios, setShowTestScenarios] = useState(false);

  const handleFollowProgram = () => {
    setIsFollowing(!isFollowing);
    toast({
      title: isFollowing ? "Unfollowed Program" : "Following Program",
      description: isFollowing 
        ? "You will no longer receive updates about this program." 
        : "You will now receive updates about this program.",
    });
  };

  const handleGiveFeedback = () => {
    toast({
      title: "Feedback Submitted",
      description: "Thank you for your feedback! We'll review it shortly.",
    });
  };

  const handleCopyCredentials = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Credentials have been copied to your clipboard.",
    });
  };

  const userStories = [
    {
      id: 1,
      title: "User Registration Flow",
      description: "As a new user, I want to register for an account so that I can access the platform features.",
      priority: "High",
      category: "Core Flow",
      acceptanceCriteria: [
        "User can enter valid email and password",
        "Email verification is sent upon registration",
        "User is redirected to dashboard after verification",
        "Proper error messages for invalid inputs"
      ]
    },
    {
      id: 2,
      title: "Shopping Cart Management",
      description: "As a customer, I want to add/remove items from my cart so that I can manage my purchases.",
      priority: "High",
      category: "E-commerce",
      acceptanceCriteria: [
        "Items can be added to cart from product pages",
        "Cart quantity can be updated",
        "Items can be removed from cart",
        "Cart persists across browser sessions"
      ]
    },
    {
      id: 3,
      title: "Payment Processing",
      description: "As a customer, I want to securely complete my payment so that I can purchase items.",
      priority: "Critical",
      category: "Security",
      acceptanceCriteria: [
        "Multiple payment methods supported",
        "Payment data is encrypted",
        "Order confirmation is displayed",
        "Payment failure scenarios handled gracefully"
      ]
    }
  ];

  // Demo data for the program detail
  const programs = {
    "1": {
      id: 1,
      title: "Manual Testing Program",
      company: "TechCorp",
      logo: "📱",
      type: "Public",
      status: "Open",
      category: "Manual Testing",
      testingType: "manual-testing",
      description: "Comprehensive manual testing program for UI/UX, functionality, and usability testing",
      minReward: "₹5,000",
      maxReward: "₹2,50,000",
      participants: 245,
      submissions: 1456,
      resolved: 392,
      averageTime: "5 days"
    },
    "2": {
      id: 2,
      title: "Penetration Testing Program",
      company: "SecureTech",
      logo: "🔒",
      type: "Private",
      status: "Open",
      category: "Penetration Testing",
      testingType: "penetration-testing",
      description: "Advanced penetration testing program for security vulnerabilities, infrastructure testing, and threat assessment",
      minReward: "₹15,000",
      maxReward: "₹5,00,000",
      participants: 89,
      submissions: 567,
      resolved: 234,
      averageTime: "7 days"
    }
  };

  const program = programs[id as keyof typeof programs] || programs["1"];

  const testingScenarios = program.testingType === 'penetration-testing' ? [
    { severity: "Critical", reward: "₹3,00,000 - ₹5,00,000", description: "Remote code execution, SQL injection, authentication bypass" },
    { severity: "High", reward: "₹1,50,000 - ₹2,50,000", description: "Cross-site scripting (XSS), privilege escalation, data exposure" },
    { severity: "Medium", reward: "₹50,000 - ₹1,00,000", description: "CSRF, session management flaws, information disclosure" },
    { severity: "Low", reward: "₹15,000 - ₹35,000", description: "Security misconfigurations, weak cryptography, minor leaks" }
  ] : [
    { severity: "Critical", reward: "₹1,50,000 - ₹2,50,000", description: "Complete user flow testing, core functionality validation" },
    { severity: "High", reward: "₹75,000 - ₹1,25,000", description: "UI/UX testing, form validation, navigation testing" },
    { severity: "Medium", reward: "₹25,000 - ₹50,000", description: "Browser compatibility, responsive design testing" },
    { severity: "Low", reward: "₹5,000 - ₹15,000", description: "Content verification, minor UI inconsistencies" }
  ];

  const rulesOfEngagement = program.testingType === 'penetration-testing' ? [
    "Only test on designated target applications",
    "No denial of service (DoS/DDoS) attacks",
    "Do not access or modify sensitive user data",
    "Report all vulnerabilities through proper channels",
    "No social engineering or physical attacks",
    "Respect system availability and performance",
    "Follow responsible disclosure guidelines",
    "Use only authorized testing tools and techniques"
  ] : [
    "Only test on your own accounts",
    "No DDoS or spam", 
    "Respect user privacy",
    "Do not access or modify user data",
    "Report vulnerabilities responsibly",
    "No social engineering attacks"
  ];

  const recentActivity = [
    {
      id: 1,
      type: "Submission accepted",
      target: "*.chloe.com",
      points: "P3",
      researcher: "john_doe",
      date: "2 Jul 2024",
      status: "accepted"
    },
    {
      id: 2,
      type: "Submission accepted", 
      target: "app.aaitlabs.com",
      points: "P4",
      researcher: "security_ninja",
      date: "28 Jun 2024",
      status: "accepted"
    },
    {
      id: 3,
      type: "Submission accepted",
      target: "*.chloe.com",
      points: "P2",
      researcher: "bug_hunter_pro",
      date: "5 Jun 2024", 
      status: "accepted"
    }
  ];

  const hallOfFame = [
    { name: "alex_sec", avatar: "👨‍💻", points: 2840 },
    { name: "cyber_queen", avatar: "👩‍💻", points: 2156 },
    { name: "bug_master", avatar: "🔍", points: 1923 },
    { name: "sec_wizard", avatar: "🧙‍♂️", points: 1677 },
    { name: "code_hunter", avatar: "🎯", points: 1445 },
    { name: "vuln_finder", avatar: "🔎", points: 1298 },
    { name: "hack_hero", avatar: "🦸‍♂️", points: 1156 },
    { name: "pen_tester", avatar: "✏️", points: 1043 }
  ];

  const recentlyJoined = [
    { name: "new_hunter", avatar: "🆕", joinDate: "2 days ago" },
    { name: "fresh_eyes", avatar: "👀", joinDate: "3 days ago" },
    { name: "cyber_rookie", avatar: "🚀", joinDate: "5 days ago" },
    { name: "sec_newbie", avatar: "🌟", joinDate: "1 week ago" },
    { name: "bug_starter", avatar: "🐛", joinDate: "1 week ago" },
    { name: "code_seeker", avatar: "🔍", joinDate: "2 weeks ago" },
    { name: "vuln_scout", avatar: "⚡", joinDate: "2 weeks ago" },
    { name: "hack_learner", avatar: "📚", joinDate: "3 weeks ago" }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "critical": return "destructive";
      case "high": return "destructive";
      case "medium": return "secondary";
      case "low": return "outline";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <Link to="/programs" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Programs
        </Link>

        {/* Program Header - Fully Responsive */}
        <div className="flex flex-col xl:flex-row items-start gap-6 sm:gap-8 mb-8">
          <div className="text-3xl sm:text-4xl p-3 sm:p-4 bg-muted rounded-xl shrink-0">{program.logo}</div>
          <div className="flex-1 min-w-0 w-full">
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold break-words leading-tight mb-3">
                {program.company} / {program.title}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                {program.description}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary" className="text-xs sm:text-sm px-3 py-1">{program.type}</Badge>
              <Badge variant="default" className="text-xs sm:text-sm px-3 py-1">{program.status}</Badge>
              <Badge variant="outline" className="text-xs sm:text-sm px-3 py-1">{program.category}</Badge>
            </div>
          </div>
          <div className="w-full xl:w-80 xl:text-right xl:min-w-fit">
            <h3 className="text-base sm:text-lg font-semibold mb-2">Want to participate?</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Feel free to join in, this is a public engagement where anyone can participate.
            </p>
            {program.testingType === 'manual-testing' ? (
              <div className="space-y-3">
                <ManualTestingReportDialog programId={program.id.toString()} />
                <Link to={`/programs/${id}/submissions`}>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full text-xs sm:text-sm px-3 py-2 h-9 flex items-center justify-start gap-2"
                  >
                    <Eye className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">View my submissions</span>
                  </Button>
                </Link>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="w-full text-xs sm:text-sm px-3 py-2 h-9 flex items-center justify-start gap-2">
                      <BookOpen className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">📖 View User Stories</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-[95vw] max-w-4xl max-h-[85vh] mx-auto">
                    <DialogHeader>
                      <DialogTitle className="text-lg sm:text-xl">User Stories & Acceptance Criteria</DialogTitle>
                    </DialogHeader>
                    <ScrollArea className="h-[65vh]">
                      <div className="space-y-4 pr-4">
                        {userStories.map((story) => (
                          <Card key={story.id}>
                            <CardHeader className="pb-3">
                              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                                <CardTitle className="text-base sm:text-lg break-words flex-1">{story.title}</CardTitle>
                                <div className="flex flex-wrap gap-2">
                                  <Badge variant={story.priority === 'Critical' ? 'destructive' : 'outline'} className="text-xs">
                                    {story.priority}
                                  </Badge>
                                  <Badge variant="secondary" className="text-xs">{story.category}</Badge>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{story.description}</p>
                              <div>
                                <h4 className="font-medium mb-2 text-sm">Acceptance Criteria:</h4>
                                <ul className="space-y-2">
                                  {story.acceptanceCriteria.map((criteria, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm">
                                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                      <span className="break-words">{criteria}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="w-full text-xs sm:text-sm px-3 py-2 h-9 flex items-center justify-start gap-2">
                      <FileText className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">📋 Testing Guidelines</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-[95vw] max-w-3xl max-h-[85vh] mx-auto">
                    <DialogHeader>
                      <DialogTitle className="text-lg sm:text-xl">Manual Testing Guidelines</DialogTitle>
                    </DialogHeader>
                    <Tabs defaultValue="focus" className="w-full">
                      <TabsList className="grid w-full grid-cols-3 h-auto">
                        <TabsTrigger value="focus" className="text-xs sm:text-sm px-2 py-2">Focus Areas</TabsTrigger>
                        <TabsTrigger value="devices" className="text-xs sm:text-sm px-2 py-2">Devices</TabsTrigger>
                        <TabsTrigger value="reporting" className="text-xs sm:text-sm px-2 py-2">Reporting</TabsTrigger>
                      </TabsList>
                      <TabsContent value="focus" className="space-y-4 mt-4">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base sm:text-lg">🎯 Testing Focus Areas</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-3">
                                <Target className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm break-words">User Interface (UI) consistency and design</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <Target className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm break-words">User Experience (UX) flow and navigation</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <Target className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm break-words">Form validation and error handling</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <Target className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm break-words">Cross-browser compatibility</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <Target className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm break-words">Mobile responsiveness</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <Target className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm break-words">Performance and loading times</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </TabsContent>
                      <TabsContent value="devices" className="space-y-4 mt-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <Card>
                            <CardHeader>
                              <CardTitle className="text-base sm:text-lg">💻 Desktop Browsers</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-2 text-sm">
                                <li>• Chrome 90+</li>
                                <li>• Firefox 88+</li>
                                <li>• Safari 14+</li>
                                <li>• Edge 90+</li>
                              </ul>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardHeader>
                              <CardTitle className="text-base sm:text-lg">📱 Mobile Devices</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-2 text-sm">
                                <li>• iOS 14+</li>
                                <li>• Android 10+</li>
                                <li>• Various screen sizes</li>
                                <li>• Touch interactions</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      </TabsContent>
                      <TabsContent value="reporting" className="space-y-4 mt-4">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base sm:text-lg">📊 Reporting Requirements</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-3">
                                <FileText className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm break-words">Detailed steps to reproduce</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <FileText className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm break-words">Screenshots or screen recordings</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <FileText className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm break-words">Expected vs actual behavior</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <FileText className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm break-words">Browser and device information</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <FileText className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm break-words">Severity and impact assessment</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </TabsContent>
                    </Tabs>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="w-full text-xs sm:text-sm px-3 py-2 h-9 flex items-center justify-start gap-2">
                      <Target className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">🎯 Test Scenarios</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-[95vw] max-w-2xl max-h-[85vh] mx-auto">
                    <DialogHeader>
                      <DialogTitle className="text-lg sm:text-xl">Detailed Test Scenarios</DialogTitle>
                    </DialogHeader>
                    <ScrollArea className="h-[65vh]">
                      <div className="space-y-4 pr-4">
                        {testingScenarios.map((scenario, index) => (
                          <Card key={index}>
                            <CardContent className="p-4">
                              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-3">
                                <Badge variant={getSeverityColor(scenario.severity)} className="text-xs w-fit">
                                  {scenario.severity}
                                </Badge>
                                <span className="font-medium text-sm break-words">{scenario.reward}</span>
                              </div>
                              <p className="text-sm mb-3 break-words leading-relaxed">{scenario.description}</p>
                              <div className="text-xs text-muted-foreground">
                                <p className="font-medium mb-1">Expected deliverables:</p>
                                <ul className="space-y-1">
                                  <li>• Comprehensive test report</li>
                                  <li>• Video demonstration</li>
                                  <li>• Step-by-step reproduction guide</li>
                                </ul>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </div>
            ) : (
              <div className="space-y-3">
                <Link to={`/submit-report/${program.id}`} className="block">
                  <Button 
                    className="w-full text-xs sm:text-sm px-3 py-2 h-9 flex items-center justify-center gap-2"
                  >
                    <Shield className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">Submit Vulnerability</span>
                  </Button>
                </Link>
                <Link to={`/programs/${id}/submissions`}>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full text-xs sm:text-sm px-3 py-2 h-9 flex items-center justify-start gap-2"
                  >
                    <Eye className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">View my submissions</span>
                  </Button>
                </Link>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="w-full text-xs sm:text-sm px-3 py-2 h-9 flex items-center justify-start gap-2">
                      <FileText className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">🛡️ Security Guidelines</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-[95vw] max-w-3xl max-h-[85vh] mx-auto">
                    <DialogHeader>
                      <DialogTitle className="text-lg sm:text-xl">Penetration Testing Guidelines</DialogTitle>
                    </DialogHeader>
                    <Tabs defaultValue="scope" className="w-full">
                      <TabsList className="grid w-full grid-cols-3 h-auto">
                        <TabsTrigger value="scope" className="text-xs sm:text-sm px-2 py-2">Testing Scope</TabsTrigger>
                        <TabsTrigger value="methodology" className="text-xs sm:text-sm px-2 py-2">Methodology</TabsTrigger>
                        <TabsTrigger value="reporting" className="text-xs sm:text-sm px-2 py-2">Reporting</TabsTrigger>
                      </TabsList>
                      <TabsContent value="scope" className="space-y-4 mt-4">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base sm:text-lg">🎯 Testing Scope</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-3">
                                <Shield className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm break-words">Web application security vulnerabilities</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <Shield className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm break-words">API endpoint security testing</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <Shield className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm break-words">Authentication and authorization flaws</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <Shield className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm break-words">Input validation and injection attacks</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <Shield className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm break-words">Business logic vulnerabilities</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <Shield className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm break-words">Session management issues</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </TabsContent>
                      <TabsContent value="methodology" className="space-y-4 mt-4">
                        <div className="grid grid-cols-1 gap-4">
                          <Card>
                            <CardHeader>
                              <CardTitle className="text-base sm:text-lg">🔍 Testing Methodology</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-2 text-sm">
                                <li>• Information gathering and reconnaissance</li>
                                <li>• Vulnerability scanning and enumeration</li>
                                <li>• Manual testing and exploitation</li>
                                <li>• Privilege escalation attempts</li>
                                <li>• Post-exploitation analysis</li>
                                <li>• Impact assessment and reporting</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      </TabsContent>
                      <TabsContent value="reporting" className="space-y-4 mt-4">
                        <Card>
                          <CardHeader>
                            <CardTitle className="text-base sm:text-lg">📊 Vulnerability Reporting</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-3">
                                <FileText className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm break-words">Detailed vulnerability description</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <FileText className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm break-words">Step-by-step reproduction steps</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <FileText className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm break-words">Proof of concept (PoC) evidence</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <FileText className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm break-words">Impact assessment and CVSS score</span>
                              </li>
                              <li className="flex items-start gap-3">
                                <FileText className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm break-words">Recommended remediation steps</span>
                              </li>
                            </ul>
                          </CardContent>
                        </Card>
                      </TabsContent>
                    </Tabs>
                  </DialogContent>
                </Dialog>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
          {/* Sidebar - Show first on mobile */}
          <div className="xl:col-start-3 xl:row-start-1 space-y-6">
            {/* Program Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Program actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={handleFollowProgram}
                >
                  <Heart className={`h-4 w-4 mr-2 ${isFollowing ? 'fill-red-500 text-red-500' : ''}`} />
                  {isFollowing ? 'Following' : 'Follow program'}
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={handleGiveFeedback}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Give feedback
                </Button>
              </CardContent>
            </Card>

            {/* Statistics */}
            <Card>
              <CardHeader>
                <CardTitle>Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Participants</span>
                  <span className="font-medium">{program.participants}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Submissions</span>
                  <span className="font-medium">{program.submissions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Resolved</span>
                  <span className="font-medium">{program.resolved}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Avg. Resolution</span>
                  <span className="font-medium">{program.averageTime}</span>
                </div>
              </CardContent>
            </Card>

            {/* Scope */}
            <Card>
              <CardHeader>
                <CardTitle>In Scope</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <ExternalLink className="h-3 w-3" />
                    <span className="font-mono break-all">*.flipkart.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="h-3 w-3" />
                    <span className="font-mono break-all">api.flipkart.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="h-3 w-3" />
                    <span className="font-mono break-all">seller.flipkart.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="h-3 w-3" />
                    <span className="font-mono">mobile apps</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {program.description}
                </p>
              </CardContent>
            </Card>

            {/* Testing Scenarios / Bounties */}
            <Card>
              <CardHeader>
                <CardTitle>{program.testingType === 'manual-testing' ? 'Testing Scenarios' : 'Bounties'}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {program.testingType === 'manual-testing' 
                    ? 'Manual testing rewards based on testing complexity and findings.' 
                    : 'This is a responsible disclosure program without bounties.'}
                </p>
                <div className="space-y-3">
                  {testingScenarios.map((scenario, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 sm:p-4 border rounded-lg">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <Badge variant={getSeverityColor(scenario.severity)} className="w-fit text-xs sm:text-sm">
                          {scenario.severity}
                        </Badge>
                        <span className="text-sm break-words leading-relaxed">{scenario.description}</span>
                      </div>
                      <span className="font-medium text-sm break-words text-right sm:text-left">{scenario.reward}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Rules of Engagement */}
            <Card>
              <CardHeader>
                <CardTitle>Rules of engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {rulesOfEngagement.map((rule, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
                      {rule}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Manual Testing Specific Sections */}
            {program.testingType === 'manual-testing' && (
              <>
                {/* User Stories & Documentation */}
                <Card>
                  <CardHeader>
                    <CardTitle>📖 User Stories & Documentation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-2">📝 User Registration Flow</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          As a new user, I want to register for an account so that I can access the platform features.
                        </p>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs">High Priority</Badge>
                          <Badge variant="secondary" className="text-xs">Core Flow</Badge>
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-2">🛒 Shopping Cart Management</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          As a customer, I want to add/remove items from my cart so that I can manage my purchases.
                        </p>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="text-xs">High Priority</Badge>
                          <Badge variant="secondary" className="text-xs">E-commerce</Badge>
                        </div>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-medium mb-2">💳 Payment Processing</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          As a customer, I want to securely complete my payment so that I can purchase items.
                        </p>
                        <div className="flex gap-2">
                          <Badge variant="destructive" className="text-xs">Critical</Badge>
                          <Badge variant="secondary" className="text-xs">Security</Badge>
                        </div>
                      </div>
                      <Button variant="link" className="p-0 text-sm">
                        View all user stories (15 total) →
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Testing Guidelines for Researchers */}
                <Card>
                  <CardHeader>
                    <CardTitle>📋 Manual Testing Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">🎯 Testing Focus Areas</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• User Interface (UI) consistency and design</li>
                          <li>• User Experience (UX) flow and navigation</li>
                          <li>• Form validation and error handling</li>
                          <li>• Cross-browser compatibility</li>
                          <li>• Mobile responsiveness</li>
                          <li>• Performance and loading times</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">📱 Supported Devices & Browsers</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-medium">Desktop Browsers:</p>
                            <p className="text-muted-foreground break-words">Chrome 90+, Firefox 88+, Safari 14+, Edge 90+</p>
                          </div>
                          <div>
                            <p className="font-medium">Mobile Devices:</p>
                            <p className="text-muted-foreground break-words">iOS 14+, Android 10+</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">📊 Reporting Requirements</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Detailed steps to reproduce</li>
                          <li>• Screenshots or screen recordings</li>
                          <li>• Expected vs actual behavior</li>
                          <li>• Browser and device information</li>
                          <li>• Severity and impact assessment</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Test Environment Access */}
                <Card>
                  <CardHeader>
                    <CardTitle>🔐 Test Environment Access</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-medium mb-2">🌐 Test Environment URLs</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2">
                            <ExternalLink className="h-3 w-3" />
                            <span className="font-mono">staging.flipkart.com</span>
                            <Badge variant="secondary" className="text-xs">Main App</Badge>
                          </div>
                          <div className="flex items-center gap-2">
                            <ExternalLink className="h-3 w-3" />
                            <span className="font-mono">admin-staging.flipkart.com</span>
                            <Badge variant="secondary" className="text-xs">Admin Panel</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-medium mb-2">👤 Test Credentials</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Use these credentials for testing purposes only:
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-2 bg-background rounded border">
                            <span className="text-sm font-mono">tester@flipkart.com</span>
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              onClick={() => handleCopyCredentials('tester@flipkart.com')}
                              className="h-6 w-6 p-0"
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                          <div className="flex items-center justify-between p-2 bg-background rounded border">
                            <span className="text-sm font-mono">TestUser123!</span>
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              onClick={() => handleCopyCredentials('TestUser123!')}
                              className="h-6 w-6 p-0"
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full mt-3"
                          onClick={() => {
                            window.open('https://staging.flipkart.com', '_blank');
                            toast({ title: "Opening Test Environment", description: "Staging environment opened in new tab." });
                          }}
                        >
                          <Globe className="h-3 w-3 mr-1" />
                          Open Test Environment
                        </Button>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        ⚠️ Note: These are shared test credentials. Do not use for sensitive testing scenarios.
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 border rounded-lg">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm break-words">
                          <span className="text-blue-600">{activity.type}</span> on target: <span className="font-mono text-xs break-all">{activity.target}</span>
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Accepted on {activity.date}
                        </p>
                      </div>
                      <Badge variant="outline" className="text-xs w-fit self-start sm:self-center">
                        {activity.points}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Hall of Fame & Recently Joined */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Latest hall of famers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {hallOfFame.map((user, index) => (
                      <div key={index} className="flex items-center gap-1">
                        <span className="text-lg">{user.avatar}</span>
                        <span className="text-xs font-medium">{user.name}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="link" className="mt-2 p-0 text-xs">
                    See all fame →
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recently joined this engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {recentlyJoined.map((user, index) => (
                      <div key={index} className="flex items-center gap-1">
                        <span className="text-lg">{user.avatar}</span>
                        <span className="text-xs font-medium">{user.name}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {recentlyJoined.length} total
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Bottom Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Testing problems</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    For any testing issues (e.g., broken credential, inaccessible application, etc.) related to this specific program please reach out to the program admin.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Engagement rules</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    This engagement follows this program's standard disclosure terms. Please review them before testing or reporting.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Coordinated Disclosure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    Vulnerabilities found in this engagement require explicit permission before publication. Please contact admin for details on the disclosure policy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProgramDetail;