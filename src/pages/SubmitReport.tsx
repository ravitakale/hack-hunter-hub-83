import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SubmitReport = () => {
  const { id } = useParams();
  const { toast } = useToast();
  
  // Determine program type based on ID (1 = manual testing, 2 = penetration testing)
  const isManualTesting = id === "1";
  const [formData, setFormData] = useState({
    title: "",
    asset: "",
    type: "",
    manualTestingType: "",
    vulnerableComponent: "",
    severity: "",
    description: "",
    impact: "",
    recommendation: "",
    ipAddress: "",
    submissionQuestions: "",
    attachments: [] as File[]
  });

  const vulnerabilityTypes = [
    "Cross-Site Scripting (XSS)",
    "SQL Injection",
    "Cross-Site Request Forgery (CSRF)",
    "Authentication Bypass",
    "Authorization Bypass",
    "Privilege Escalation",
    "Remote Code Execution (RCE)",
    "Local File Inclusion (LFI)",
    "Remote File Inclusion (RFI)",
    "Server-Side Request Forgery (SSRF)",
    "XML External Entity (XXE)",
    "Insecure Direct Object Reference (IDOR)",
    "Security Misconfiguration",
    "Sensitive Data Exposure",
    "Broken Access Control",
    "Injection Flaws",
    "Insecure Deserialization",
    "Using Components with Known Vulnerabilities",
    "Insufficient Logging & Monitoring",
    "Business Logic Vulnerabilities",
    "Race Condition",
    "Time-of-check Time-of-use (TOCTOU)",
    "Buffer Overflow",
    "Directory Traversal",
    "Command Injection",
    "LDAP Injection",
    "XPath Injection",
    "Template Injection",
    "HTTP Header Injection",
    "Host Header Injection",
    "Open Redirect",
    "Clickjacking",
    "Session Fixation",
    "Session Hijacking",
    "Weak Cryptography",
    "Weak Password Policy",
    "Brute Force Attack",
    "Denial of Service (DoS)",
    "Distributed Denial of Service (DDoS)",
    "Man-in-the-Middle (MitM)",
    "Certificate Validation Issues",
    "Improper Certificate Validation",
    "Information Disclosure",
    "Privacy Violation",
    "CORS Misconfiguration",
    "Content Security Policy (CSP) Bypass",
    "Same-Origin Policy Bypass",
    "URL Redirection",
    "HTTP Response Splitting",
    "Cache Poisoning",
    "HTTP Parameter Pollution",
    "Subdomain Takeover",
    "DNS Spoofing",
    "Email Spoofing",
    "SMS Spoofing",
    "OAuth Implementation Issues",
    "JWT Implementation Flaws",
    "API Security Issues",
    "GraphQL Injection",
    "NoSQL Injection",
    "SMTP Injection",
    "IMAP Injection",
    "POP3 Injection",
    "FTP Injection",
    "SSH Command Injection",
    "Telnet Command Injection",
    "Memory Corruption",
    "Integer Overflow",
    "Format String Vulnerability",
    "Use After Free",
    "Double Free",
    "Null Pointer Dereference",
    "Uninitialized Variable",
    "Logic Bomb",
    "Backdoor",
    "Rootkit",
    "Keylogger",
    "Screen Scraping",
    "Social Engineering",
    "Phishing",
    "Typosquatting",
    "Cybersquatting",
    "Domain Hijacking",
    "DNS Hijacking",
    "BGP Hijacking",
    "ARP Spoofing",
    "MAC Spoofing",
    "IP Spoofing",
    "TCP Hijacking",
    "UDP Flooding",
    "ICMP Flooding",
    "SYN Flooding",
    "Ping of Death",
    "Smurf Attack",
    "Fraggle Attack",
    "Land Attack",
    "Teardrop Attack",
    "Ping Flood",
    "HTTP Flood",
    "Slowloris Attack",
    "R.U.D.Y Attack",
    "Application Layer DDoS",
    "Protocol Layer DDoS",
    "Volumetric DDoS"
  ];

  const manualTestingTypes = [
    "Functional Testing",
    "Usability Testing", 
    "User Interface Testing",
    "Compatibility Testing",
    "Performance Testing",
    "Security Testing",
    "API Testing",
    "Database Testing",
    "Integration Testing",
    "Regression Testing",
    "Smoke Testing",
    "Exploratory Testing",
    "Ad-hoc Testing",
    "Monkey Testing",
    "Accessibility Testing"
  ];

  const severityLevels = [
    "Critical",
    "High", 
    "Medium",
    "Low",
    "Informational"
  ];

  const assets = [
    "*.flipkart.com",
    "api.flipkart.com",
    "seller.flipkart.com",
    "admin.flipkart.com",
    "mobile.flipkart.com",
    "m.flipkart.com",
    "payments.flipkart.com",
    "accounts.flipkart.com",
    "static.flipkart.com",
    "img.flipkart.com",
    "cdn.flipkart.com",
    "Android App",
    "iOS App",
    "Desktop Application",
    "Other"
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files]
    }));
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.title || !formData.asset || !formData.type || (isManualTesting && !formData.manualTestingType) || !formData.severity || !formData.description) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate submission
    toast({
      title: "Submission Successful",
      description: "Your vulnerability report has been submitted successfully. We'll review it and get back to you soon.",
    });

    // Reset form
    setFormData({
      title: "",
      asset: "",
      type: "",
      manualTestingType: "",
      vulnerableComponent: "",
      severity: "",
      description: "",
      impact: "",
      recommendation: "",
      ipAddress: "",
      submissionQuestions: "",
      attachments: []
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Navigation */}
        <Link to={`/programs/${id}`} className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Program Details
        </Link>

        {/* Header */}
        <div className="flex items-start gap-4 mb-8">
          <div className="text-4xl p-3 bg-muted rounded-lg">🛒</div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">Flipkart / Flipkart Bug Bounty</h1>
            <p className="text-muted-foreground">
              Submit a detailed report about the vulnerability you discovered
            </p>
          </div>
        </div>

        {/* Submission Form */}
        <Card className="max-w-4xl">
          <CardHeader>
            <CardTitle>General</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <Label htmlFor="title" className="text-sm font-medium">
                  Title *
                </Label>
                <Input
                  id="title"
                  placeholder="e.g. Reflected XSS"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="mt-1"
                />
              </div>

              {/* Select Asset */}
              <div>
                <Label htmlFor="asset" className="text-sm font-medium">
                  Select asset
                </Label>
                <Select value={formData.asset} onValueChange={(value) => setFormData(prev => ({ ...prev, asset: value }))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select asset" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border z-50">
                    {assets.map((asset) => (
                      <SelectItem key={asset} value={asset}>
                        {asset}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Type */}
              <div>
                <Label htmlFor="type" className="text-sm font-medium">
                  Type
                </Label>
                <Select value={formData.type} onValueChange={(value) => setFormData(prev => ({ ...prev, type: value }))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border z-50 max-h-60 overflow-y-auto">
                    {vulnerabilityTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Manual Testing Type - Only show for manual testing programs */}
              {isManualTesting && (
                <div>
                  <Label htmlFor="manualTestingType" className="text-sm font-medium">
                    Manual Testing Type *
                  </Label>
                  <Select value={formData.manualTestingType} onValueChange={(value) => setFormData(prev => ({ ...prev, manualTestingType: value }))}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select manual testing type" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border z-50 max-h-60 overflow-y-auto">
                      {manualTestingTypes.map((testingType) => (
                        <SelectItem key={testingType} value={testingType}>
                          {testingType}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Expected/vulnerable component */}
              <div>
                <Label htmlFor="component" className="text-sm font-medium">
                  Expected/vulnerable component (optional)
                </Label>
                <Input
                  id="component"
                  placeholder="https://example.com/vulnerable-page"
                  value={formData.vulnerableComponent}
                  onChange={(e) => setFormData(prev => ({ ...prev, vulnerableComponent: e.target.value }))}
                  className="mt-1"
                />
              </div>

              {/* Severity */}
              <div>
                <Label htmlFor="severity" className="text-sm font-medium">
                  Severity *
                </Label>
                <Select value={formData.severity} onValueChange={(value) => setFormData(prev => ({ ...prev, severity: value }))}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select severity" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border z-50">
                    {severityLevels.map((severity) => (
                      <SelectItem key={severity} value={severity}>
                        {severity}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Proof of Concept / description */}
              <div>
                <Label htmlFor="description" className="text-sm font-medium">
                  Proof of Concept / description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Describe the issue, steps to reproduce, attach screenshots, etc."
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="mt-1 min-h-[120px]"
                />
              </div>

              {/* Impact */}
              <div>
                <Label htmlFor="impact" className="text-sm font-medium">
                  Impact
                </Label>
                <Textarea
                  id="impact"
                  placeholder="Describe the impact of this issue"
                  value={formData.impact}
                  onChange={(e) => setFormData(prev => ({ ...prev, impact: e.target.value }))}
                  className="mt-1"
                />
              </div>

              {/* Recommended solution */}
              <div>
                <Label htmlFor="recommendation" className="text-sm font-medium">
                  Recommended solution (optional)
                </Label>
                <Textarea
                  id="recommendation"
                  placeholder="Suggest a fix or mitigation (optional)"
                  value={formData.recommendation}
                  onChange={(e) => setFormData(prev => ({ ...prev, recommendation: e.target.value }))}
                  className="mt-1"
                />
              </div>

              {/* IP address used for testing */}
              <div>
                <Label htmlFor="ipAddress" className="text-sm font-medium">
                  IP address used for testing (optional)
                </Label>
                <Input
                  id="ipAddress"
                  placeholder="127.0.0.1"
                  value={formData.ipAddress}
                  onChange={(e) => setFormData(prev => ({ ...prev, ipAddress: e.target.value }))}
                  className="mt-1"
                />
              </div>

              {/* Submission questions */}
              <div>
                <Label htmlFor="questions" className="text-sm font-medium">
                  Submission questions (optional)
                </Label>
                <Textarea
                  id="questions"
                  placeholder="When did you first notice during testing?"
                  value={formData.submissionQuestions}
                  onChange={(e) => setFormData(prev => ({ ...prev, submissionQuestions: e.target.value }))}
                  className="mt-1"
                />
              </div>

              {/* Attachments */}
              <div>
                <Label htmlFor="attachments" className="text-sm font-medium">
                  Attachments (optional)
                </Label>
                <div className="mt-1">
                  <div className="flex items-center gap-4">
                    <Label htmlFor="file-upload" className="cursor-pointer">
                      <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-md hover:bg-muted/80 transition-colors">
                        <Upload className="h-4 w-4" />
                        <span className="text-sm">Choose File</span>
                      </div>
                      <input
                        id="file-upload"
                        type="file"
                        multiple
                        className="hidden"
                        accept=".jpg,.jpeg,.png,.gif,.pdf,.txt,.doc,.docx"
                        onChange={handleFileChange}
                      />
                    </Label>
                    <span className="text-sm text-muted-foreground">
                      {formData.attachments.length === 0 ? "No file chosen" : `${formData.attachments.length} file(s) selected`}
                    </span>
                  </div>
                  
                  {/* File List */}
                  {formData.attachments.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {formData.attachments.map((file, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-muted rounded-md">
                          <span className="text-sm">{file.name}</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-4 pt-6">
                <Button type="submit" className="px-8">
                  Submit
                </Button>
                <Button type="button" variant="outline" onClick={() => window.history.back()}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default SubmitReport;