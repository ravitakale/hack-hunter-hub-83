import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { SidebarProvider } from "@/components/ui/sidebar";
import { OrganizationSidebar } from "@/components/OrganizationSidebar";
import { OrganizationNavbar } from "@/components/OrganizationNavbar";
import { Separator } from "@/components/ui/separator";
import { 
  Edit,
  Calendar,
  FileText,
  Building2,
  Globe,
  Lock,
  DollarSign,
  Shield,
  Users,
  Eye,
  CheckCircle2,
  Clock,
  Trophy,
  BookOpen,
  AlertCircle,
  CheckSquare,
  X,
  Target,
  Activity,
  Star,
  MessageCircle,
  Download,
  ExternalLink
} from "lucide-react";

// Mock data - in real app this would come from API
const mockProgram = {
  id: 1,
  name: "Web Application Security",
  organization: "TechCorp",
  description: "Comprehensive security testing for our main web application platform. We're looking for security researchers to help identify vulnerabilities in our core web application that serves millions of users daily.",
  quickSummary: "Manual testing program focused on identifying UI/UX issues, functional bugs, and usability problems in our e-commerce platform before major releases.",
  status: "Public",
  programStatus: "Open",
  type: "manual-testing",
  startDate: "2024-01-15",
  endDate: "2024-12-31",
  reportsCount: 45,
  createdOn: "2024-01-15",
  scope: [
    "Main web application (app.company.com)",
    "API endpoints (api.company.com)", 
    "Authentication system",
    "Payment processing",
    "Mobile apps (iOS and Android)"
  ],
  outOfScope: [
    "Staging servers (staging.company.com)",
    "Third-party integrations not owned by company",
    "Social engineering attacks",
    "Physical security",
    "DDoS attacks"
  ],
  rulesOfEngagement: {
    allowed: [
      "UI/UX testing across different browsers",
      "Functional testing of user workflows",
      "Usability testing and user experience evaluation",
      "Cross-browser and cross-device compatibility testing",
      "Performance testing under normal usage"
    ],
    prohibited: [
      "Automated scanning or DDoS attacks",
      "Social engineering or phishing attempts",
      "Testing on production data without permission",
      "Accessing other users' accounts or data",
      "Modifying or deleting any data"
    ],
    privacy: "All testing must comply with privacy laws. Do not access, modify, or store any personal user data.",
    disclosure: "Vulnerabilities must be reported through this platform only. Public disclosure without permission is prohibited."
  },
  testingMethodology: {
    process: [
      "Read and understand all provided documentation (User Story, FRD, BRD, PRD)",
      "Plan your testing approach based on the requirements",
      "Execute manual testing across different scenarios and devices", 
      "Document findings with clear reproduction steps",
      "Submit reports through the platform with proper evidence"
    ],
    testTypes: [
      "UI/UX Testing - Visual elements, layout, responsiveness",
      "Functional Testing - Feature behavior, user workflows",
      "Usability Testing - User experience, accessibility",
      "Cross-browser Testing - Chrome, Firefox, Safari, Edge",
      "Cross-device Testing - Desktop, tablet, mobile"
    ],
    submissionFormat: {
      title: "Clear, descriptive title of the issue",
      steps: "Detailed steps to reproduce the problem",
      expected: "What should happen (based on documentation)",
      actual: "What actually happens",
      evidence: "Screenshots, videos, or other proof",
      documentation: "Reference to relevant documentation (User Story, FRD, etc.)",
      severity: "Impact level based on business requirements"
    }
  },
  rewardRange: {
    min: "₹5,000",
    max: "₹2,50,000"
  },
  severityRewards: {
    low: "₹5,000 - ₹15,000",
    medium: "₹15,000 - ₹50,000",
    high: "₹50,000 - ₹1,50,000", 
    critical: "₹1,50,000 - ₹2,50,000"
  },
  severityExamples: {
    critical: "Complete system failure, data loss, security breach",
    high: "Major feature broken, significant user impact",
    medium: "Feature partially working, moderate user impact", 
    low: "Minor UI issues, small usability problems"
  },
  guidelines: [
    "Provide clear steps to reproduce",
    "Include proof of concept when possible", 
    "Do not access or modify user data",
    "Report responsibly and allow time for fixes"
  ],
  contacts: {
    security: "security@company.com",
    program: "bugbounty@company.com",
    responseTime: "2-3 business days"
  },
  documentation: {
    userStory: {
      file: "user-story.pdf",
      content: "As a user, I want to be able to login securely to access my account..."
    },
    frd: {
      file: "functional-requirements.pdf",
      content: "The system shall provide secure authentication..."
    },
    brd: {
      file: "business-requirements.pdf", 
      content: "Business requirement to ensure 99.9% uptime..."
    },
    prd: {
      file: "product-requirements.pdf",
      content: "Product shall support OAuth2.0 authentication..."
    }
  },
  recentSubmissions: [
    {
      id: "RPT-001",
      title: "Login form validation bypass",
      researcher: "researcher1",
      severity: "Medium",
      status: "Accepted",
      reward: "₹25,000",
      submittedDate: "2024-08-10"
    },
    {
      id: "RPT-002", 
      title: "Mobile UI overlap on iOS Safari",
      researcher: "researcher2",
      severity: "Low",
      status: "Under Review",
      reward: "Pending",
      submittedDate: "2024-08-12"
    }
  ],
  hallOfFame: [
    { researcher: "alex_researcher", points: 1250, submissions: 15 },
    { researcher: "security_pro", points: 980, submissions: 12 },
    { researcher: "bug_hunter", points: 750, submissions: 8 }
  ],
  metrics: {
    activeResearchers: 67,
    totalSubmissions: 156,
    totalResolved: 134,
    averageResponseTime: "2.3 days",
    rewardsPaid: "₹18,50,000",
    totalParticipants: 89
  }
};

export default function OrganizationProgramView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [program] = useState(mockProgram);
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

  const DocumentViewDialog = ({ docType, doc }: { docType: string, doc: any }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center space-x-2">
          <FileText className="h-4 w-4" />
          <span>View {docType}</span>
          <ExternalLink className="h-3 w-3" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5" />
            <span>{docType} Documentation</span>
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-primary" />
              <span className="font-medium">{doc.file}</span>
            </div>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
          <div className="p-6 border rounded-lg bg-background">
            <div className="prose max-w-none">
              <p className="text-muted-foreground whitespace-pre-wrap">{doc.content}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <OrganizationSidebar />
        
        <div className="flex-1 flex flex-col">
          <OrganizationNavbar />
          
          <main className="flex-1 p-6">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    onClick={() => navigate("/org-programs")}
                    className="text-muted-foreground"
                  >
                    ← Back to Programs
                  </Button>
                </div>
                <Button onClick={() => navigate(`/org-program/${id}/edit`)}>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Program
                </Button>
              </div>

              {/* Program Header */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="h-16 w-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center">
                        <Building2 className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">{program.organization}</div>
                        <CardTitle className="text-2xl mb-2">{program.name}</CardTitle>
                        <div className="flex items-center space-x-4 mb-2">
                          <Badge 
                            variant={program.status === 'Public' ? 'default' : 'secondary'}
                            className="flex items-center space-x-1"
                          >
                            {program.status === 'Public' ? (
                              <Globe className="h-3 w-3" />
                            ) : (
                              <Lock className="h-3 w-3" />
                            )}
                            <span>{program.status}</span>
                          </Badge>
                          <Badge 
                            variant={program.programStatus === 'Open' ? 'default' : 'secondary'}
                            className="flex items-center space-x-1"
                          >
                            <Activity className="h-3 w-3" />
                            <span>{program.programStatus}</span>
                          </Badge>
                          <Badge variant="outline">{program.type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</Badge>
                        </div>
                        <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(program.startDate).toLocaleDateString()} - {new Date(program.endDate).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Program Description</h4>
                    <p className="text-muted-foreground">{program.description}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Quick Summary</h4>
                    <p className="text-sm text-muted-foreground">{program.quickSummary}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Program Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold">{program.metrics.totalParticipants}</div>
                    <div className="text-sm text-muted-foreground">Total Participants</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Activity className="h-6 w-6 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold">{program.metrics.activeResearchers}</div>
                    <div className="text-sm text-muted-foreground">Active Researchers</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <FileText className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{program.metrics.totalSubmissions}</div>
                    <div className="text-sm text-muted-foreground">Total Submissions</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <CheckCircle2 className="h-6 w-6 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{program.metrics.totalResolved}</div>
                    <div className="text-sm text-muted-foreground">Resolved Issues</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Clock className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{program.metrics.averageResponseTime}</div>
                    <div className="text-sm text-muted-foreground">Avg Response</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <DollarSign className="h-6 w-6 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold">{program.metrics.rewardsPaid}</div>
                    <div className="text-sm text-muted-foreground">Rewards Paid</div>
                  </CardContent>
                </Card>
              </div>

              {/* Documentation Section for Manual Testing */}
              {program.type === 'manual-testing' && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BookOpen className="h-5 w-5" />
                      <span>Testing Documentation</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      All required documentation for this manual testing program. Please review these documents thoroughly before starting your testing.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg space-y-3">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">User Story</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Describes the use case and user scenarios for testing.
                        </p>
                        <DocumentViewDialog docType="User Story" doc={program.documentation.userStory} />
                      </div>
                      
                      <div className="p-4 border rounded-lg space-y-3">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">FRD (Functional Requirements)</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Functional requirements to understand intended behavior.
                        </p>
                        <DocumentViewDialog docType="FRD" doc={program.documentation.frd} />
                      </div>
                      
                      <div className="p-4 border rounded-lg space-y-3">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">BRD (Business Requirements)</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Business goals and requirements to understand impact.
                        </p>
                        <DocumentViewDialog docType="BRD" doc={program.documentation.brd} />
                      </div>
                      
                      <div className="p-4 border rounded-lg space-y-3">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-5 w-5 text-primary" />
                          <h4 className="font-medium">PRD (Product Requirements)</h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Product specifications and feature expectations.
                        </p>
                        <DocumentViewDialog docType="PRD" doc={program.documentation.prd} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Scope */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Eye className="h-5 w-5" />
                      <span>In Scope</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {program.scope.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Out of Scope */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="h-5 w-5" />
                      <span>Out of Scope</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {program.outOfScope.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="h-4 w-4 rounded-full bg-red-100 flex items-center justify-center">
                          <div className="h-2 w-2 bg-red-600 rounded-full" />
                        </div>
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Rewards & Severity Examples */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5" />
                    <span>Reward Structure & Severity Guidelines</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 rounded-lg bg-red-50 border border-red-200">
                      <Badge variant="destructive" className="mb-2">Critical</Badge>
                      <div className="text-sm font-medium mb-2">{program.severityRewards.critical}</div>
                      <div className="text-xs text-muted-foreground">{program.severityExamples.critical}</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-orange-50 border border-orange-200">
                      <Badge variant="destructive" className="mb-2 bg-orange-600">High</Badge>
                      <div className="text-sm font-medium mb-2">{program.severityRewards.high}</div>
                      <div className="text-xs text-muted-foreground">{program.severityExamples.high}</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-yellow-50 border border-yellow-200">
                      <Badge variant="secondary" className="mb-2 bg-yellow-600 text-white">Medium</Badge>
                      <div className="text-sm font-medium mb-2">{program.severityRewards.medium}</div>
                      <div className="text-xs text-muted-foreground">{program.severityExamples.medium}</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-green-50 border border-green-200">
                      <Badge variant="secondary" className="mb-2 bg-green-600 text-white">Low</Badge>
                      <div className="text-sm font-medium mb-2">{program.severityRewards.low}</div>
                      <div className="text-xs text-muted-foreground">{program.severityExamples.low}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Rules of Engagement */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5" />
                    <span>Rules of Engagement</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-green-700 mb-3 flex items-center">
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        Allowed Activities
                      </h4>
                      <div className="space-y-2">
                        {program.rulesOfEngagement.allowed.map((rule, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <CheckSquare className="h-4 w-4 text-green-600 mt-0.5" />
                            <span className="text-sm">{rule}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-700 mb-3 flex items-center">
                        <X className="h-4 w-4 mr-2" />
                        Prohibited Activities
                      </h4>
                      <div className="space-y-2">
                        {program.rulesOfEngagement.prohibited.map((rule, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <X className="h-4 w-4 text-red-600 mt-0.5" />
                            <span className="text-sm">{rule}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-2 text-blue-600" />
                        Privacy & Legal Boundaries
                      </h4>
                      <p className="text-sm text-muted-foreground">{program.rulesOfEngagement.privacy}</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 flex items-center">
                        <MessageCircle className="h-4 w-4 mr-2 text-purple-600" />
                        Disclosure Policy
                      </h4>
                      <p className="text-sm text-muted-foreground">{program.rulesOfEngagement.disclosure}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testing Methodology */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5" />
                    <span>Testing Methodology & Guidelines</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3">Manual Testing Process</h4>
                    <div className="space-y-2">
                      {program.testingMethodology.process.map((step, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary">
                            {index + 1}
                          </div>
                          <span className="text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium mb-3">Test Types to Focus On</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {program.testingMethodology.testTypes.map((type, index) => (
                        <div key={index} className="flex items-start space-x-2 p-3 border rounded-lg">
                          <Target className="h-4 w-4 text-primary mt-0.5" />
                          <span className="text-sm">{type}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium mb-3">Submission Format Requirements</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(program.testingMethodology.submissionFormat).map(([key, value]) => (
                        <div key={key} className="p-3 border rounded-lg">
                          <div className="font-medium text-sm mb-1 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                          <div className="text-xs text-muted-foreground">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Submissions & Hall of Fame */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="h-5 w-5" />
                      <span>Recent Submissions</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {program.recentSubmissions.map((submission) => (
                      <div key={submission.id} className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="text-xs">{submission.id}</Badge>
                          <Badge 
                            variant={submission.severity === 'Critical' ? 'destructive' : 
                                    submission.severity === 'High' ? 'destructive' :
                                    submission.severity === 'Medium' ? 'secondary' : 'outline'}
                            className="text-xs"
                          >
                            {submission.severity}
                          </Badge>
                        </div>
                        <div className="font-medium text-sm mb-1">{submission.title}</div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>by {submission.researcher}</span>
                          <span>{new Date(submission.submittedDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <Badge variant="secondary" className="text-xs">{submission.status}</Badge>
                          <span className="text-sm font-medium text-green-600">{submission.reward}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Trophy className="h-5 w-5" />
                      <span>Hall of Fame</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {program.hallOfFame.map((researcher, index) => (
                      <div key={researcher.researcher} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                            {index === 0 ? <Trophy className="h-4 w-4 text-yellow-600" /> :
                             index === 1 ? <Star className="h-4 w-4 text-gray-500" /> :
                             index === 2 ? <Star className="h-4 w-4 text-orange-600" /> :
                             <span className="text-xs font-medium">{index + 1}</span>}
                          </div>
                          <div>
                            <div className="font-medium text-sm">{researcher.researcher}</div>
                            <div className="text-xs text-muted-foreground">{researcher.submissions} submissions</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-sm">{researcher.points}</div>
                          <div className="text-xs text-muted-foreground">points</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Guidelines */}
              <Card>
                <CardHeader>
                  <CardTitle>Submission Guidelines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {program.guidelines.map((guideline, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                        <span className="text-sm">{guideline}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Program Documentation */}
              {program.type === 'manual-testing' && program.documentation && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="h-5 w-5" />
                      <span>Program Documentation</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg">
                          <div className="font-medium text-sm mb-2">User Story</div>
                          <div className="text-xs text-muted-foreground mb-2">📄 {program.documentation.userStory.file}</div>
                          <div className="text-sm bg-muted/50 p-2 rounded text-muted-foreground">
                            {program.documentation.userStory.content.substring(0, 100)}...
                          </div>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <div className="font-medium text-sm mb-2">Business Requirements (BRD)</div>
                          <div className="text-xs text-muted-foreground mb-2">📄 {program.documentation.brd.file}</div>
                          <div className="text-sm bg-muted/50 p-2 rounded text-muted-foreground">
                            {program.documentation.brd.content.substring(0, 100)}...
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg">
                          <div className="font-medium text-sm mb-2">Functional Requirements (FRD)</div>
                          <div className="text-xs text-muted-foreground mb-2">📄 {program.documentation.frd.file}</div>
                          <div className="text-sm bg-muted/50 p-2 rounded text-muted-foreground">
                            {program.documentation.frd.content.substring(0, 100)}...
                          </div>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <div className="font-medium text-sm mb-2">Product Requirements (PRD)</div>
                          <div className="text-xs text-muted-foreground mb-2">📄 {program.documentation.prd.file}</div>
                          <div className="text-sm bg-muted/50 p-2 rounded text-muted-foreground">
                            {program.documentation.prd.content.substring(0, 100)}...
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Contact Information & Support */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5" />
                    <span>Support & Contact</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-sm font-medium mb-1">Security Team</div>
                      <div className="text-sm text-muted-foreground">{program.contacts.security}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Bug Bounty Program</div>
                      <div className="text-sm text-muted-foreground">{program.contacts.program}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium mb-1">Response Time</div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {program.contacts.responseTime}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}