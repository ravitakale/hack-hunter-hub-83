import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  Clock,
  DollarSign,
  User,
  Tag,
  FileText,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ExternalLink,
  Send,
  Paperclip,
  Eye,
  MessageSquare,
  ArrowLeft,
  Copy,
  Download,
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

interface TimelineEntry {
  id: number;
  type: "comment" | "status_change" | "submission" | "reward";
  user: string;
  avatar: string;
  content: string;
  timestamp: string;
  metadata?: any;
}

const ReportDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newComment, setNewComment] = useState("");

  // Mock report data based on the ID - Multiple report examples
  const reportExamples = {
    1: {
      id: 1,
      title: "SQL Injection in Authentication Module",
      reportId: "#840759",
      researcher: "Rahul Sharma",
      researcherAvatar: "RS",
      severity: "Critical",
      status: "New", 
      program: "TechCorp",
      submittedAt: "August 19, 2024, 10:00am UTC",
      disclosedAt: null,
      reward: 250000,
      cvss: "9.1",
      weakness: "SQL Injection",
      cveId: "Pending",
      poc: `## Summary
A critical SQL injection vulnerability was discovered in the user authentication module that allows attackers to bypass login mechanisms and access unauthorized user accounts.

## Steps to Reproduce
1. Navigate to the login page at /auth/login
2. Intercept the login request using Burp Suite
3. Inject SQL payload in the username parameter
4. Observe successful authentication bypass

## Proof of Concept
**Vulnerable Parameter:** username

**Payload:**
\`\`\`sql
admin' OR '1'='1' -- 
\`\`\`

**Request:**
\`\`\`http
POST /api/auth/login HTTP/1.1
Host: techcorp.com
Content-Type: application/json

{
  "username": "admin' OR '1'='1' -- ",
  "password": "anything"
}
\`\`\`

**Response:**
Returns authentication token and admin access without valid credentials.

## Impact
- Complete authentication bypass
- Unauthorized access to any user account
- Administrative privilege escalation
- Full database access potential
- Complete system compromise

## Recommended Fix
- Use parameterized queries/prepared statements
- Implement proper input validation
- Add rate limiting on authentication endpoints
- Enable database query logging`
    },
    2: {
      id: 2,
      title: "Cross-Site Scripting (XSS) in User Profile",
      reportId: "#741852", 
      researcher: "securitydev",
      researcherAvatar: "SD",
      severity: "High",
      status: "Triaged",
      program: "Bug Ka Baap",
      submittedAt: "December 15, 2024, 10:30am UTC",
      disclosedAt: null,
      reward: null,
      cvss: "8.1",
      weakness: "Cross-Site Scripting (XSS)",
      cveId: "Pending",
      poc: `## Summary
Discovered stored XSS vulnerability in user profile functionality that allows persistent script execution.

## Steps to Reproduce
1. Navigate to user profile edit page
2. Inject XSS payload in the bio field
3. Save profile and view public profile
4. Observe script execution

## Proof of Concept
**Payload:**
\`\`\`html
<script>alert('XSS - User Data Compromised')</script>
\`\`\`

**Impact:**
- Session hijacking
- Credential theft
- Malicious redirects
- Defacement attacks`
    },
    6: {
      id: 6,
      title: "Cross-Site Scripting (XSS) in Product Search",
      reportId: "#741856",
      researcher: "Vikash Kumar", 
      researcherAvatar: "VK",
      severity: "Medium",
      status: "Triaged",
      program: "E-Commerce Security Challenge",
      submittedAt: "August 18, 2024, 2:30pm UTC",
      disclosedAt: null,
      reward: 45000,
      cvss: "6.1",
      weakness: "Cross-Site Scripting (XSS) - Reflected",
      cveId: "None",
      poc: `## Summary
A reflected XSS vulnerability was found in the product search functionality that allows attackers to execute malicious scripts in the context of other users' browsers.

## Steps to Reproduce
1. Navigate to product search page
2. Enter XSS payload in search field
3. Submit search request
4. Observe script execution in results page

## Proof of Concept
**Payload:**
\`\`\`html
<script>alert('XSS in Search')</script>
\`\`\`

**URL:**
https://ecommerce.example.com/search?q=<script>alert('XSS')</script>

## Impact
- Session token theft
- User impersonation
- Malicious content injection
- Phishing attacks`
    },
    101: {
      id: 101,
      title: "User Authentication Flow Testing Report",
      reportId: "#MT101",
      researcher: "Aditi Sharma",
      researcherAvatar: "AS", 
      severity: "Manual Testing",
      status: "Completed",
      program: "Mobile Banking App Testing",
      submittedAt: "August 19, 2024, 2:00am UTC",
      disclosedAt: "August 19, 2024, 8:00am UTC",
      reward: 35000,
      cvss: "N/A",
      weakness: "Manual Testing Report",
      cveId: "N/A",
      poc: `## Testing Summary
Comprehensive manual testing of the user authentication flow including edge cases, error handling, and security validation.

## Test Scenarios Covered
1. **Valid Login Attempts**
   - Successful login with correct credentials
   - Multi-factor authentication validation
   - Session management verification

2. **Invalid Login Attempts**
   - Wrong password handling
   - Account lockout mechanisms
   - Rate limiting validation

3. **Edge Cases**
   - Network connectivity issues
   - Concurrent login attempts
   - Password policy enforcement

## Issues Identified
- Minor UI inconsistency in error messages
- Session timeout not properly communicated
- Loading indicators missing in some flows

## Recommendations
- Standardize error message formatting
- Add clear session timeout notifications
- Implement loading states for all async operations

## Test Evidence
- 47 test cases executed
- 3 minor issues identified
- All critical security checks passed`
    },
    102: {
      id: 102,
      title: "Payment Gateway Edge Cases Testing",
      reportId: "#MT102",
      researcher: "Rohit Gupta",
      researcherAvatar: "RG",
      severity: "Manual Testing", 
      status: "Approved",
      program: "Payment Gateway Integration",
      submittedAt: "August 18, 2024, 8:00pm UTC",
      disclosedAt: "August 19, 2024, 12:00pm UTC",
      reward: 50000,
      cvss: "N/A",
      weakness: "Manual Testing Report",
      cveId: "N/A",
      poc: `## Testing Summary
Detailed manual testing of payment gateway edge cases including network failures, timeout scenarios, and transaction rollbacks.

## Test Coverage
1. **Network Failure Scenarios**
   - Connection timeout during payment
   - Network interruption handling
   - Gateway unavailability responses

2. **Transaction Edge Cases**
   - Insufficient balance scenarios
   - Duplicate transaction prevention
   - Partial payment handling

3. **Security Validations**
   - Payment data encryption
   - Session security during transactions
   - Audit trail completeness

## Results
- All critical payment flows tested successfully
- Proper error handling confirmed
- Transaction rollback mechanisms working correctly
- Security measures validated`
    }
  };

  const report = reportExamples[parseInt(id || "1") as keyof typeof reportExamples] || reportExamples[1];

  const timeline: TimelineEntry[] = [
    {
      id: 1,
      type: "submission",
      user: report.researcher,
      avatar: report.researcherAvatar,
      content: `submitted a report to ${report.program}.\n\nGood day :)`,
      timestamp: report.submittedAt
    },
    {
      id: 2,
      type: "status_change",
      user: report.program,
      avatar: report.program === "TechCorp" ? "TC" : report.program === "Bug Ka Baap" ? "BK" : "PG",
      content: "changed the state to Triaged",
      timestamp: report.status === "New" ? "Pending" : "April 8, 2020, 2:30pm UTC"
    },
    {
      id: 3,
      type: "comment",
      user: "security-team",
      avatar: "ST",
      content: "Thanks for the report! We've confirmed the vulnerability and are working on a fix. This will be resolved in our next security patch.",
      timestamp: "April 10, 2020, 10:15am UTC"
    },
    {
      id: 4,
      type: "status_change",
      user: report.program,
      avatar: report.program === "TechCorp" ? "TC" : report.program === "Bug Ka Baap" ? "BK" : "PG",
      content: `changed the state to ${report.status}`,
      timestamp: "May 1, 2020, 3:45pm UTC"
    },
    ...(report.reward ? [{
      id: 5,
      type: "reward" as const,
      user: report.program,
      avatar: report.program === "TechCorp" ? "TC" : report.program === "Bug Ka Baap" ? "BK" : "PG",
      content: `awarded ₹${report.reward.toLocaleString()}`,
      timestamp: "May 5, 2020, 5:47pm UTC"
    }] : [])
  ];

  const participants = [
    { name: report.researcher, avatar: report.researcherAvatar, role: "Reporter" },
    { name: report.program, avatar: report.program === "TechCorp" ? "TC" : report.program === "Bug Ka Baap" ? "BK" : "PG", role: "Program" },
    { name: "security-team", avatar: "ST", role: "Triager" }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical': return 'destructive';
      case 'high': return 'high';
      case 'medium': return 'medium';
      case 'low': return 'low';
      default: return 'secondary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'new': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'triaged': return <Eye className="h-4 w-4 text-blue-500" />;
      case 'in progress': return <Clock className="h-4 w-4 text-orange-500" />;
      case 'resolved': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'duplicate': return <XCircle className="h-4 w-4 text-gray-500" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getTimelineIcon = (type: string) => {
    switch (type) {
      case 'submission': return <FileText className="h-4 w-4" />;
      case 'status_change': return <CheckCircle className="h-4 w-4" />;
      case 'comment': return <MessageSquare className="h-4 w-4" />;
      case 'reward': return <DollarSign className="h-4 w-4" />;
      default: return <MessageSquare className="h-4 w-4" />;
    }
  };

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      // Here you would typically submit the comment to your backend
      console.log("Submitting comment:", newComment);
      setNewComment("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate('/activity')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Activity
          </Button>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="font-mono text-sm">
              {report.reportId}
            </Badge>
            <Button variant="outline" size="sm">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Report Header */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl leading-tight">
                      {report.title}
                    </CardTitle>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(report.status)}
                        <span className="font-medium">{report.status}</span>
                      </div>
                      <Badge variant={getSeverityColor(report.severity) as any}>
                        {report.severity}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      379
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Vulnerability Details / POC */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Vulnerability Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none dark:prose-invert">
                  <div className="whitespace-pre-wrap break-words">
                    {report.poc.split('\n').map((line, index) => {
                      if (line.startsWith('## ')) {
                        return <h3 key={index} className="text-lg font-semibold mt-6 mb-3 text-foreground">{line.replace('## ', '')}</h3>;
                      } else if (line.startsWith('**') && line.endsWith('**')) {
                        return <h4 key={index} className="font-medium mt-4 mb-2 text-foreground">{line.replace(/\*\*/g, '')}</h4>;
                      } else if (line.startsWith('- ')) {
                        return <li key={index} className="ml-4 text-muted-foreground">{line.replace('- ', '')}</li>;
                      } else if (line.match(/^\d+\./)) {
                        return <li key={index} className="ml-4 text-muted-foreground list-decimal">{line.replace(/^\d+\.\s/, '')}</li>;
                      } else if (line.startsWith('```')) {
                        return null; // Handle code blocks separately
                      } else if (line.includes('http') && !line.includes('**')) {
                        return (
                          <div key={index} className="font-mono text-sm bg-muted/50 p-2 rounded border-l-4 border-accent my-2 break-all">
                            {line}
                          </div>
                        );
                      } else if (line.trim() === '') {
                        return <br key={index} />;
                      } else {
                        return <p key={index} className="text-muted-foreground mb-2">{line}</p>;
                      }
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {timeline.map((entry, index) => (
                    <div key={entry.id} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={undefined} />
                          <AvatarFallback className="text-xs">{entry.avatar}</AvatarFallback>
                        </Avatar>
                        {index < timeline.length - 1 && (
                          <div className="w-px h-8 bg-border mt-2" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          {getTimelineIcon(entry.type)}
                          <span className="font-medium text-sm">{entry.user}</span>
                          <span className="text-sm text-muted-foreground">
                            {entry.content.split('\n')[0]}
                          </span>
                        </div>
                        {entry.content.includes('\n') && (
                          <div className="mt-2 p-3 bg-muted/50 rounded-lg">
                            <pre className="text-sm whitespace-pre-wrap font-mono">
                              {entry.content.split('\n').slice(1).join('\n')}
                            </pre>
                          </div>
                        )}
                        <div className="text-xs text-muted-foreground mt-2">
                          {entry.timestamp}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />

                {/* Comment Form */}
                <div className="space-y-4">
                  <h4 className="font-medium">Add a comment</h4>
                  <Textarea
                    placeholder="Write your comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="min-h-[100px]"
                  />
                  <div className="flex items-center justify-between">
                    <Button variant="outline" size="sm">
                      <Paperclip className="h-4 w-4 mr-2" />
                      Attach file
                    </Button>
                    <Button onClick={handleSubmitComment} disabled={!newComment.trim()}>
                      <Send className="h-4 w-4 mr-2" />
                      Submit
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Report Metadata */}
            <Card>
              <CardContent className="p-4 space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Reported on</div>
                  <div className="text-sm font-medium">{report.submittedAt}</div>
                </div>

                <div>
                  <div className="text-sm text-muted-foreground mb-2">Reported by</div>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={undefined} />
                      <AvatarFallback className="text-xs">{report.researcherAvatar}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{report.researcher}</span>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-muted-foreground mb-2">Reported to</div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {report.program}
                    </Badge>
                    <span className="text-xs text-accent">Managed</span>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-muted-foreground mb-2">Participants</div>
                  <div className="flex -space-x-2">
                    {participants.map((participant, index) => (
                      <Avatar key={index} className="h-6 w-6 border-2 border-background">
                        <AvatarImage src={undefined} />
                        <AvatarFallback className="text-xs">{participant.avatar}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </div>

                <Separator />

                <div>
                  <div className="text-sm text-muted-foreground mb-1">Report Id</div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="font-mono text-xs">
                      {report.reportId}
                    </Badge>
                    <span className="text-xs text-accent">{report.status}</span>
                  </div>
                </div>

                 <div>
                   <div className="text-sm text-muted-foreground mb-1">Severity</div>
                   <div className="flex items-center gap-2">
                     <div className={`w-3 h-3 rounded-full ${
                       report.severity === 'Critical' ? 'bg-critical' :
                       report.severity === 'High' ? 'bg-high' :
                       report.severity === 'Medium' ? 'bg-medium' :
                       'bg-low'
                     }`} />
                     <span className="text-sm">{report.severity} ({report.cvss})</span>
                   </div>
                 </div>

                 <div>
                   <div className="text-sm text-muted-foreground mb-1">Disclosed</div>
                   <div className="text-sm">{report.disclosedAt || "Not disclosed"}</div>
                 </div>

                 <div>
                   <div className="text-sm text-muted-foreground mb-1">Weakness</div>
                   <div className="text-sm">{report.weakness}</div>
                 </div>

                 <div>
                   <div className="text-sm text-muted-foreground mb-1">CVE ID</div>
                   <div className="text-sm">{report.cveId}</div>
                 </div>

                 <Separator />

                 {report.reward && (
                   <div>
                     <div className="text-sm text-muted-foreground mb-1">Bounty</div>
                     <div className="text-lg font-bold text-accent">₹{report.reward.toLocaleString()}</div>
                   </div>
                 )}

                <div>
                  <div className="text-sm text-muted-foreground mb-1">Account details</div>
                  <div className="text-sm">None</div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Download Report
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Link
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Share Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ReportDetail;