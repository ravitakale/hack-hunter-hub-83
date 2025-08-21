import { Link } from "react-router-dom";
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
  ArrowLeft, Heart, MessageSquare, Star, BookOpen, FileText, Target, Eye, 
  Download, Copy, Globe, Shield, Users, CheckCircle, Calendar, DollarSign,
  Monitor, Smartphone, Tablet, AlertTriangle, Info, HelpCircle, ExternalLink,
  Clock, TrendingUp, Award, Zap, Database, Settings, Lock, TestTube
} from "lucide-react";

const ManualTestingProgramDetail = () => {
  const { toast } = useToast();
  const [isFollowing, setIsFollowing] = useState(false);

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

  // Program data
  const program = {
    id: 1,
    title: "Manual Testing Program",
    company: "TechCorp",
    logo: "🧪",
    type: "Public",
    status: "Open",
    category: "Manual Testing",
    description: "Comprehensive manual testing program for UI/UX, functionality, and usability testing",
    participants: 245,
    submissions: 1456,
    resolved: 392,
    averageTime: "5 days"
  };

  // Rewards structure
  const rewardsStructure = [
    { 
      severity: "Critical", 
      reward: "₹1,50,000 - ₹2,50,000", 
      description: "Complete system failures, critical security flaws, data corruption",
      icon: <AlertTriangle className="h-4 w-4" />
    },
    { 
      severity: "High", 
      reward: "₹75,000 - ₹1,25,000", 
      description: "Major functionality issues, significant UX problems, security concerns",
      icon: <TrendingUp className="h-4 w-4" />
    },
    { 
      severity: "Medium", 
      reward: "₹25,000 - ₹50,000", 
      description: "Moderate functionality issues, minor security vulnerabilities",
      icon: <Info className="h-4 w-4" />
    },
    { 
      severity: "Low", 
      reward: "₹5,000 - ₹15,000", 
      description: "Minor UI inconsistencies, cosmetic issues, suggestions",
      icon: <CheckCircle className="h-4 w-4" />
    }
  ];

  // In-scope targets
  const inScopeTargets = [
    "*.techcorp.com",
    "app.techcorp.com", 
    "admin.techcorp.com",
    "staging.techcorp.com",
    "Mobile applications (iOS/Android)",
    "Internal APIs for UI testing"
  ];

  // Rules of engagement
  const rulesOfEngagement = {
    allowed: [
      "Test with your own accounts only",
      "Use provided test credentials",
      "Cross-browser compatibility testing",
      "Mobile responsive testing",
      "UI/UX validation testing",
      "Form validation testing",
      "Navigation and workflow testing"
    ],
    disallowed: [
      "No DDoS or stress testing",
      "No accessing real user data",
      "No social engineering attacks",
      "No physical testing of infrastructure",
      "No testing outside defined scope",
      "No automated scanning tools"
    ]
  };

  // User stories
  const userStories = [
    {
      id: 1,
      title: "User Registration and Authentication",
      description: "As a new user, I want to register and authenticate securely so that I can access the platform.",
      priority: "Critical",
      category: "Authentication",
      acceptanceCriteria: [
        "User can register with valid email and password",
        "Email verification process works correctly",
        "Login/logout functionality is secure",
        "Password reset mechanism functions properly",
        "Account lockout after failed attempts works"
      ]
    },
    {
      id: 2,
      title: "Product Search and Discovery",
      description: "As a customer, I want to search and filter products easily so that I can find what I need.",
      priority: "High",
      category: "E-commerce",
      acceptanceCriteria: [
        "Search functionality returns relevant results",
        "Filters work correctly and update results",
        "Sort options function as expected",
        "Product details are displayed accurately",
        "Navigation between categories is smooth"
      ]
    },
    {
      id: 3,
      title: "Shopping Cart and Checkout",
      description: "As a customer, I want to manage my cart and complete purchases seamlessly.",
      priority: "Critical",
      category: "E-commerce",
      acceptanceCriteria: [
        "Items can be added/removed from cart",
        "Cart quantities can be modified",
        "Checkout process is intuitive",
        "Payment methods work correctly",
        "Order confirmation is clear and accurate"
      ]
    },
    {
      id: 4,
      title: "User Profile Management",
      description: "As a user, I want to manage my profile information and preferences.",
      priority: "Medium",
      category: "User Management",
      acceptanceCriteria: [
        "Profile information can be updated",
        "Privacy settings are configurable",
        "Notification preferences work",
        "Account deletion process is clear",
        "Data export functionality works"
      ]
    }
  ];

  // Testing guidelines
  const testingGuidelines = {
    focusAreas: [
      {
        category: "🎯 User Interface (UI)",
        items: [
          "Visual consistency across pages",
          "Responsive design on different screen sizes",
          "Color contrast and accessibility",
          "Typography and readability",
          "Button and link functionality"
        ]
      },
      {
        category: "🚀 User Experience (UX)",
        items: [
          "Navigation flow and intuitiveness",
          "Page loading times and performance",
          "Error handling and user feedback",
          "Search functionality effectiveness",
          "Overall user journey satisfaction"
        ]
      },
      {
        category: "📝 Form Validation",
        items: [
          "Required field validation",
          "Input format validation (email, phone)",
          "Error message clarity",
          "Form submission behavior",
          "Auto-save and recovery features"
        ]
      },
      {
        category: "🔧 Functionality",
        items: [
          "Core business logic validation",
          "Data persistence and retrieval",
          "Integration between modules",
          "File upload/download functionality",
          "Real-time features (notifications, chat)"
        ]
      }
    ],
    supportedPlatforms: {
      desktop: [
        "Chrome 90+",
        "Firefox 88+", 
        "Safari 14+",
        "Edge 90+",
        "Opera 76+"
      ],
      mobile: [
        "iOS 14+ (Safari, Chrome)",
        "Android 10+ (Chrome, Firefox)",
        "Various screen sizes (320px - 2560px)",
        "Touch and gesture interactions",
        "Portrait and landscape orientations"
      ]
    },
    reportingRequirements: [
      "📸 Clear screenshots or screen recordings",
      "📝 Detailed step-by-step reproduction",
      "🎯 Expected vs actual behavior description",
      "🌐 Browser and device information",
      "⚡ Severity assessment with justification",
      "📊 Impact on user experience",
      "💡 Suggested improvements (optional)"
    ]
  };

  // Test environment
  const testEnvironment = {
    urls: [
      { name: "Main Application", url: "https://staging.techcorp.com", type: "staging" },
      { name: "Admin Panel", url: "https://admin-staging.techcorp.com", type: "admin" },
      { name: "Mobile App (Android)", url: "Download from staging store", type: "mobile" },
      { name: "Mobile App (iOS)", url: "TestFlight invitation required", type: "mobile" }
    ],
    credentials: [
      { role: "Regular User", username: "testuser@techcorp.com", password: "TestUser123!" },
      { role: "Premium User", username: "premium@techcorp.com", password: "Premium123!" },
      { role: "Admin User", username: "admin@techcorp.com", password: "Admin123!" }
    ],
    resetInstructions: [
      "Environment resets every 24 hours at 12:00 AM UTC",
      "Test data is restored to baseline state",
      "User accounts maintain their roles and permissions",
      "Uploaded files are cleared during reset",
      "Database returns to predefined test dataset"
    ]
  };

  // Recent activity
  const recentActivity = [
    {
      id: 1,
      type: "Report Accepted",
      title: "Mobile navigation inconsistency",
      reporter: "ui_tester_pro",
      severity: "Medium",
      reward: "₹35,000",
      date: "2 hours ago",
      status: "resolved"
    },
    {
      id: 2,
      type: "Report Accepted", 
      title: "Form validation bypass",
      reporter: "test_specialist",
      severity: "High",
      reward: "₹85,000",
      date: "5 hours ago",
      status: "resolved"
    },
    {
      id: 3,
      type: "Report Accepted",
      title: "Search functionality improvement",
      reporter: "ux_validator",
      severity: "Low",
      reward: "₹12,000",
      date: "1 day ago",
      status: "resolved"
    }
  ];

  // Hall of fame
  const hallOfFame = [
    { name: "manual_test_guru", avatar: "🏆", reports: 156, totalEarned: "₹8,50,000" },
    { name: "ui_perfectionist", avatar: "🎨", reports: 134, totalEarned: "₹7,25,000" },
    { name: "ux_specialist", avatar: "🚀", reports: 98, totalEarned: "₹5,60,000" },
    { name: "form_validator", avatar: "📝", reports: 87, totalEarned: "₹4,95,000" },
    { name: "mobile_tester", avatar: "📱", reports: 76, totalEarned: "₹4,20,000" }
  ];

  // Recently joined
  const recentlyJoined = [
    { name: "new_tester_2024", avatar: "🆕", joinDate: "2 hours ago" },
    { name: "fresh_validator", avatar: "✨", joinDate: "5 hours ago" },
    { name: "ui_newcomer", avatar: "🌟", joinDate: "1 day ago" },
    { name: "test_rookie", avatar: "🚀", joinDate: "2 days ago" }
  ];

  // Known issues
  const knownIssues = [
    "Search auto-complete occasionally shows stale results (under investigation)",
    "Mobile app loading animation may stutter on older devices (known limitation)",
    "Dark mode toggle in preferences requires page refresh (planned fix in next release)",
    "File upload progress bar doesn't update smoothly (cosmetic issue)",
    "Email notifications may have 5-10 minute delay (infrastructure limitation)"
  ];

  // Test data sets
  const testDataSets = [
    {
      category: "User Accounts",
      description: "Pre-configured test accounts with various roles and permissions",
      examples: "Regular users, admin users, premium subscribers, inactive accounts"
    },
    {
      category: "Product Catalog",
      description: "Sample products with different categories, prices, and attributes",
      examples: "Electronics, books, clothing, digital products, out-of-stock items"
    },
    {
      category: "Order History",
      description: "Simulated order data for testing purchase flows",
      examples: "Completed orders, cancelled orders, pending payments, refunded items"
    },
    {
      category: "Content Data",
      description: "Sample content for testing display and formatting",
      examples: "Articles, images, videos, user reviews, comments"
    }
  ];

  // FAQ
  const faq = [
    {
      question: "How do I access the test environment?",
      answer: "Use the staging URLs provided above with the test credentials. The environment is reset daily to ensure consistent testing conditions."
    },
    {
      question: "What should I include in my test reports?",
      answer: "Include detailed steps to reproduce, screenshots/recordings, expected vs actual behavior, browser/device info, and severity assessment."
    },
    {
      question: "How long does it take to review submitted reports?",
      answer: "Most reports are reviewed within 3-5 business days. Critical issues are prioritized and reviewed within 24 hours."
    },
    {
      question: "Can I test on real user accounts?",
      answer: "No, only use the provided test accounts. Testing on real user accounts is strictly prohibited and may result in program removal."
    },
    {
      question: "What browsers and devices should I test on?",
      answer: "Focus on the supported browsers and devices listed in the testing guidelines. Priority should be given to Chrome, Safari, and mobile devices."
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "critical": return "critical";
      case "high": return "high";
      case "medium": return "medium";
      case "low": return "low";
      default: return "secondary";
    }
  };

  const getSeverityVariant = (severity: string) => {
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
        <Link to="/programs" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Programs
        </Link>

        {/* Program Header */}
        <div className="flex flex-col xl:flex-row items-start gap-6 sm:gap-8 mb-8">
          <div className="text-4xl p-4 bg-muted rounded-xl shrink-0">{program.logo}</div>
          <div className="flex-1 min-w-0 w-full">
            <div className="mb-6">
              <h1 className="text-3xl lg:text-4xl font-bold break-words leading-tight mb-3">
                {program.company} / {program.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {program.description}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary" className="px-3 py-1">{program.type}</Badge>
              <Badge variant="default" className="px-3 py-1">{program.status}</Badge>
              <Badge variant="outline" className="px-3 py-1">{program.category}</Badge>
            </div>
          </div>
        </div>

        {/* Participation Section */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Want to participate?</h3>
                <p className="text-muted-foreground mb-4">
                  Feel free to join, this is a public engagement where anyone can participate.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  <ManualTestingReportDialog programId={program.id.toString()} />
                  <Link to="/programs/manual/submissions">
                    <Button variant="outline" size="sm" className="justify-start gap-2">
                      <Eye className="h-4 w-4" />
                      View My Submissions
                    </Button>
                  </Link>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="justify-start gap-2">
                        <BookOpen className="h-4 w-4" />
                        View User Stories
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[85vh]">
                      <DialogHeader>
                        <DialogTitle>User Stories & Acceptance Criteria</DialogTitle>
                      </DialogHeader>
                      <ScrollArea className="h-[65vh]">
                        <div className="space-y-4 pr-4">
                          {userStories.map((story) => (
                            <Card key={story.id}>
                              <CardHeader className="pb-3">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                                  <CardTitle className="text-lg break-words flex-1">{story.title}</CardTitle>
                                  <div className="flex flex-wrap gap-2">
                                    <Badge variant={story.priority === 'Critical' ? 'destructive' : 'outline'}>
                                      {story.priority}
                                    </Badge>
                                    <Badge variant="secondary">{story.category}</Badge>
                                  </div>
                                </div>
                              </CardHeader>
                              <CardContent className="pt-0">
                                <p className="text-muted-foreground mb-4">{story.description}</p>
                                <div>
                                  <h4 className="font-medium mb-2">Acceptance Criteria:</h4>
                                  <ul className="space-y-2">
                                    {story.acceptanceCriteria.map((criteria, idx) => (
                                      <li key={idx} className="flex items-start gap-2 text-sm">
                                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                        <span>{criteria}</span>
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
                </div>
              </div>
              
              {/* Program Actions */}
              <div className="lg:w-80">
                <h4 className="font-medium mb-3">Program Actions</h4>
                <div className="space-y-2">
                  <Button 
                    variant={isFollowing ? "secondary" : "outline"} 
                    size="sm" 
                    className="w-full justify-start gap-2"
                    onClick={handleFollowProgram}
                  >
                    <Heart className={`h-4 w-4 ${isFollowing ? 'fill-current' : ''}`} />
                    {isFollowing ? 'Following' : 'Follow Program'}
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start gap-2" onClick={handleGiveFeedback}>
                    <MessageSquare className="h-4 w-4" />
                    Give Feedback
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{program.participants}</div>
              <div className="text-sm text-muted-foreground">Participants</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <FileText className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{program.submissions}</div>
              <div className="text-sm text-muted-foreground">Total Submissions</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <CheckCircle className="h-6 w-6 mx-auto mb-2 text-green-500" />
              <div className="text-2xl font-bold">{program.resolved}</div>
              <div className="text-sm text-muted-foreground">Resolved Reports</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{program.averageTime}</div>
              <div className="text-sm text-muted-foreground">Avg Resolution</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6 h-auto">
            <TabsTrigger value="overview" className="px-3 py-2">Overview</TabsTrigger>
            <TabsTrigger value="guidelines" className="px-3 py-2">Guidelines</TabsTrigger>
            <TabsTrigger value="environment" className="px-3 py-2">Environment</TabsTrigger>
            <TabsTrigger value="activity" className="px-3 py-2">Activity</TabsTrigger>
            <TabsTrigger value="help" className="px-3 py-2">Help</TabsTrigger>
            <TabsTrigger value="docs" className="px-3 py-2">Documentation</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5" />
                  Program Description
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    This comprehensive manual testing program focuses on identifying usability issues, UI/UX inconsistencies, 
                    functional bugs, and workflow improvements across TechCorp's web applications and mobile platforms. 
                    Our goal is to ensure a seamless user experience through rigorous manual testing methodologies.
                  </p>
                  <h4 className="font-semibold mb-2">Scope of Testing:</h4>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>User interface consistency and visual design validation</li>
                    <li>User experience workflows and navigation patterns</li>
                    <li>Form validation and error handling mechanisms</li>
                    <li>Cross-browser and cross-device compatibility</li>
                    <li>Mobile responsiveness and touch interactions</li>
                    <li>Accessibility compliance and usability standards</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Rewards Structure */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Rewards Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {rewardsStructure.map((reward, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                      <div className={`p-2 rounded-lg bg-${getSeverityColor(reward.severity)}/10`}>
                        {reward.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant={getSeverityVariant(reward.severity)}>
                            {reward.severity}
                          </Badge>
                          <span className="font-semibold">{reward.reward}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{reward.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* In-Scope Targets */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  In-Scope Targets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {inScopeTargets.map((target, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <Globe className="h-4 w-4 text-primary" />
                      <span className="font-mono text-sm">{target}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Rules of Engagement */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Rules of Engagement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-3">✅ Allowed Activities</h4>
                    <ul className="space-y-2">
                      {rulesOfEngagement.allowed.map((rule, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-3">❌ Prohibited Activities</h4>
                    <ul className="space-y-2">
                      {rulesOfEngagement.disallowed.map((rule, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">📋 Responsible Disclosure Policy</h4>
                  <p className="text-sm text-muted-foreground">
                    All findings must be reported through the official platform. Do not disclose issues publicly 
                    until they have been reviewed and resolved. Maintain confidentiality of all test data and 
                    system information.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Guidelines Tab */}
          <TabsContent value="guidelines" className="space-y-6">
            {/* Testing Focus Areas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TestTube className="h-5 w-5" />
                  Manual Testing Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {testingGuidelines.focusAreas.map((area, index) => (
                    <div key={index}>
                      <h4 className="font-semibold mb-3">{area.category}</h4>
                      <ul className="space-y-2">
                        {area.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-sm">
                            <Target className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      {index < testingGuidelines.focusAreas.length - 1 && <Separator className="mt-4" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Supported Platforms */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  Supported Devices & Browsers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Monitor className="h-4 w-4" />
                      Desktop Browsers
                    </h4>
                    <ul className="space-y-2">
                      {testingGuidelines.supportedPlatforms.desktop.map((browser, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          {browser}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Smartphone className="h-4 w-4" />
                      Mobile Devices
                    </h4>
                    <ul className="space-y-2">
                      {testingGuidelines.supportedPlatforms.mobile.map((device, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          {device}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reporting Requirements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Reporting Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {testingGuidelines.reportingRequirements.map((requirement, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <Target className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Environment Tab */}
          <TabsContent value="environment" className="space-y-6">
            {/* Test Environment Access */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  Test Environment Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-semibold">🌐 Staging URLs</h4>
                  <div className="grid gap-3">
                    {testEnvironment.urls.map((env, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">{env.name}</div>
                          <div className="text-sm text-muted-foreground font-mono">{env.url}</div>
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleCopyCredentials(env.url)}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                          {env.url.startsWith('http') && (
                            <Button size="sm" variant="outline" asChild>
                              <a href={env.url} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Test Credentials */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  Test Credentials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 p-4 rounded-lg">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5" />
                      <div className="text-sm">
                        <strong>Important:</strong> Only use these test accounts. Never test with real user credentials.
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid gap-4">
                    {testEnvironment.credentials.map((cred, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline">{cred.role}</Badge>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleCopyCredentials(`${cred.username}:${cred.password}`)}
                          >
                            <Copy className="h-4 w-4 mr-2" />
                            Copy
                          </Button>
                        </div>
                        <div className="space-y-1 text-sm font-mono">
                          <div><strong>Username:</strong> {cred.username}</div>
                          <div><strong>Password:</strong> {cred.password}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Environment Reset Instructions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Environment Reset Instructions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {testEnvironment.resetInstructions.map((instruction, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Test Data Sets */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Test Data Sets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {testDataSets.map((dataset, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h4 className="font-semibold mb-2">{dataset.category}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{dataset.description}</p>
                      <div className="text-xs text-muted-foreground">
                        <strong>Examples:</strong> {dataset.examples}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity" className="space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center gap-4 p-4 border rounded-lg">
                      <div className="flex-shrink-0">
                        <Badge variant={getSeverityVariant(activity.severity)}>
                          {activity.severity}
                        </Badge>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{activity.title}</div>
                        <div className="text-sm text-muted-foreground">
                          by {activity.reporter} • {activity.date}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-green-600">{activity.reward}</div>
                        <div className="text-xs text-muted-foreground">Rewarded</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Hall of Fame & Recently Joined */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Hall of Fame */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Hall of Fame
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {hallOfFame.map((researcher, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <div className="text-2xl">{researcher.avatar}</div>
                        <div className="flex-1">
                          <div className="font-medium">{researcher.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {researcher.reports} reports • {researcher.totalEarned}
                          </div>
                        </div>
                        <div className="text-xl">#{index + 1}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recently Joined */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Recently Joined
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentlyJoined.map((user, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                        <div className="text-2xl">{user.avatar}</div>
                        <div className="flex-1">
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground">
                            Joined {user.joinDate}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Help Tab */}
          <TabsContent value="help" className="space-y-6">
            {/* FAQ */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {faq.map((item, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <h4 className="font-semibold mb-2">{item.question}</h4>
                      <p className="text-sm text-muted-foreground">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Known Issues */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Known Issues (Avoid Duplicate Reports)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {knownIssues.map((issue, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                      <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{issue}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Common Mistakes */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Common Mistakes to Avoid
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-red-600 mb-2">❌ Incomplete reproduction steps</h4>
                      <p className="text-sm text-muted-foreground">
                        Always provide detailed, step-by-step instructions that others can follow to reproduce the issue.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-red-600 mb-2">❌ Missing browser/device information</h4>
                      <p className="text-sm text-muted-foreground">
                        Include specific browser version, operating system, and device information for every report.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-red-600 mb-2">❌ Poor quality screenshots</h4>
                      <p className="text-sm text-muted-foreground">
                        Use clear, high-resolution screenshots that clearly show the issue. Avoid blurry or cropped images.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-semibold text-red-600 mb-2">❌ Incorrect severity assessment</h4>
                      <p className="text-sm text-muted-foreground">
                        Carefully assess the impact and assign appropriate severity. Minor UI issues are not critical bugs.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Documentation Tab */}
          <TabsContent value="docs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Documentation & Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold">📋 Requirements Documents</h4>
                    <div className="space-y-2">
                      <a href="#" className="flex items-center gap-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                        <FileText className="h-4 w-4" />
                        <div>
                          <div className="font-medium">Functional Requirements (FRD)</div>
                          <div className="text-sm text-muted-foreground">Detailed functional specifications</div>
                        </div>
                        <ExternalLink className="h-4 w-4 ml-auto" />
                      </a>
                      <a href="#" className="flex items-center gap-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                        <FileText className="h-4 w-4" />
                        <div>
                          <div className="font-medium">Business Requirements (BRD)</div>
                          <div className="text-sm text-muted-foreground">Business logic and workflows</div>
                        </div>
                        <ExternalLink className="h-4 w-4 ml-auto" />
                      </a>
                      <a href="#" className="flex items-center gap-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                        <FileText className="h-4 w-4" />
                        <div>
                          <div className="font-medium">Product Requirements (PRD)</div>
                          <div className="text-sm text-muted-foreground">Product specifications and goals</div>
                        </div>
                        <ExternalLink className="h-4 w-4 ml-auto" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">🎨 Design Resources</h4>
                    <div className="space-y-2">
                      <a href="#" className="flex items-center gap-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                        <Monitor className="h-4 w-4" />
                        <div>
                          <div className="font-medium">UI Wireframes</div>
                          <div className="text-sm text-muted-foreground">Interactive wireframes and mockups</div>
                        </div>
                        <ExternalLink className="h-4 w-4 ml-auto" />
                      </a>
                      <a href="#" className="flex items-center gap-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                        <Tablet className="h-4 w-4" />
                        <div>
                          <div className="font-medium">Design System Guide</div>
                          <div className="text-sm text-muted-foreground">Component library and style guide</div>
                        </div>
                        <ExternalLink className="h-4 w-4 ml-auto" />
                      </a>
                      <a href="#" className="flex items-center gap-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                        <FileText className="h-4 w-4" />
                        <div>
                          <div className="font-medium">Sample Test Reports</div>
                          <div className="text-sm text-muted-foreground">Examples of well-written reports</div>
                        </div>
                        <ExternalLink className="h-4 w-4 ml-auto" />
                      </a>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                <div>
                  <h4 className="font-semibold mb-3">🔗 Additional Resources</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <a href="#" className="flex items-center gap-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <FileText className="h-4 w-4" />
                      <span className="text-sm">Testing Best Practices</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <HelpCircle className="h-4 w-4" />
                      <span className="text-sm">Tester Guidelines</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <MessageSquare className="h-4 w-4" />
                      <span className="text-sm">Support Channel</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Engagement Rules */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Engagement Rules & Communication
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">📋 Coordinated Disclosure Policy</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      All testing findings must be reported exclusively through this platform. Public disclosure 
                      of issues before official resolution is strictly prohibited and may result in program exclusion.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">💬 Communication Channels</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <MessageSquare className="h-4 w-4 text-primary" />
                        <span>Primary support: Platform messaging system</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>Response time: 24-48 hours for general queries</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Zap className="h-4 w-4 text-primary" />
                        <span>Urgent issues: Escalated within 4 hours</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">⏱️ Response Timeline</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-3 border rounded-lg">
                        <div className="font-medium">Report Acknowledgment</div>
                        <div className="text-sm text-muted-foreground">Within 2 business days</div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="font-medium">Initial Review</div>
                        <div className="text-sm text-muted-foreground">3-5 business days</div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="font-medium">Final Resolution</div>
                        <div className="text-sm text-muted-foreground">7-14 business days</div>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="font-medium">Critical Issues</div>
                        <div className="text-sm text-muted-foreground">24-48 hours</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default ManualTestingProgramDetail;