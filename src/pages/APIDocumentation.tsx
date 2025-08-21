import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  Code, 
  Key, 
  Shield, 
  Globe, 
  Copy, 
  CheckCircle, 
  AlertCircle,
  Book,
  Zap,
  Users,
  FileText,
  Settings,
  ExternalLink,
  Terminal,
  Database,
  Cloud
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const APIDocumentation = () => {
  const { toast } = useToast();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(label);
    toast({
      title: "Copied to clipboard",
      description: `${label} has been copied to your clipboard.`,
    });
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const endpoints = [
    {
      method: "GET",
      path: "/api/v1/programs",
      description: "Get all available bug bounty programs",
      auth: "Bearer Token",
      parameters: [
        { name: "page", type: "integer", required: false, description: "Page number for pagination" },
        { name: "limit", type: "integer", required: false, description: "Number of results per page (max 100)" },
        { name: "type", type: "string", required: false, description: "Filter by program type (public, private)" },
        { name: "status", type: "string", required: false, description: "Filter by status (active, paused, closed)" }
      ],
      response: `{
  "data": [
    {
      "id": "prog_123456789",
      "name": "TechCorp Bug Bounty",
      "company": "TechCorp Inc.",
      "type": "public",
      "status": "active",
      "min_reward": 100,
      "max_reward": 50000,
      "scope": ["*.techcorp.com", "api.techcorp.com"],
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-20T14:22:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 45,
    "total_pages": 3
  }
}`
    },
    {
      method: "GET",
      path: "/api/v1/programs/{id}",
      description: "Get detailed information about a specific program",
      auth: "Bearer Token",
      parameters: [
        { name: "id", type: "string", required: true, description: "Program ID" }
      ],
      response: `{
  "data": {
    "id": "prog_123456789",
    "name": "TechCorp Bug Bounty",
    "description": "Find vulnerabilities in our web application and APIs",
    "company": "TechCorp Inc.",
    "type": "public",
    "status": "active",
    "min_reward": 100,
    "max_reward": 50000,
    "scope": ["*.techcorp.com", "api.techcorp.com"],
    "out_of_scope": ["*.staging.techcorp.com"],
    "rules": ["No social engineering", "No DoS attacks"],
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-20T14:22:00Z"
  }
}`
    },
    {
      method: "POST",
      path: "/api/v1/reports",
      description: "Submit a new vulnerability report",
      auth: "Bearer Token",
      parameters: [
        { name: "program_id", type: "string", required: true, description: "ID of the program" },
        { name: "title", type: "string", required: true, description: "Report title" },
        { name: "description", type: "string", required: true, description: "Detailed vulnerability description" },
        { name: "severity", type: "string", required: true, description: "critical, high, medium, low, info" },
        { name: "asset", type: "string", required: true, description: "Affected asset/URL" },
        { name: "type", type: "string", required: true, description: "Vulnerability type" },
        { name: "proof_of_concept", type: "string", required: false, description: "Steps to reproduce" },
        { name: "impact", type: "string", required: false, description: "Impact description" }
      ],
      response: `{
  "data": {
    "id": "report_987654321",
    "program_id": "prog_123456789",
    "title": "XSS in Search Function",
    "status": "pending",
    "severity": "medium",
    "submitted_at": "2024-01-21T09:15:00Z",
    "researcher_id": "user_456789123"
  }
}`
    },
    {
      method: "GET",
      path: "/api/v1/reports",
      description: "Get researcher's submitted reports",
      auth: "Bearer Token",
      parameters: [
        { name: "status", type: "string", required: false, description: "Filter by status (pending, accepted, rejected)" },
        { name: "program_id", type: "string", required: false, description: "Filter by program ID" },
        { name: "page", type: "integer", required: false, description: "Page number" }
      ],
      response: `{
  "data": [
    {
      "id": "report_987654321",
      "program_id": "prog_123456789",
      "program_name": "TechCorp Bug Bounty",
      "title": "XSS in Search Function",
      "status": "accepted",
      "severity": "medium",
      "reward": 500,
      "submitted_at": "2024-01-21T09:15:00Z",
      "resolved_at": "2024-01-25T14:30:00Z"
    }
  ]
}`
    },
    {
      method: "GET",
      path: "/api/v1/user/profile",
      description: "Get current user profile information",
      auth: "Bearer Token",
      parameters: [],
      response: `{
  "data": {
    "id": "user_456789123",
    "username": "security_researcher",
    "email": "researcher@example.com",
    "reputation": 1250,
    "rank": "Advanced",
    "total_reports": 15,
    "accepted_reports": 12,
    "total_rewards": 15750,
    "joined_at": "2023-06-15T08:00:00Z"
  }
}`
    }
  ];

  const sdks = [
    {
      language: "JavaScript",
      icon: "🟨",
      installation: "npm install @bugbounty/api-client",
      example: `import { BugBountyAPI } from '@bugbounty/api-client';

const client = new BugBountyAPI({
  apiKey: 'your_api_key_here',
  baseURL: 'https://api.bugbounty.platform'
});

// Get programs
const programs = await client.programs.list({
  type: 'public',
  status: 'active'
});

// Submit report
const report = await client.reports.create({
  program_id: 'prog_123456789',
  title: 'XSS Vulnerability',
  description: 'Found XSS in search functionality',
  severity: 'medium',
  asset: 'https://example.com/search'
});`
    },
    {
      language: "Python",
      icon: "🐍",
      installation: "pip install bugbounty-api",
      example: `from bugbounty import BugBountyAPI

client = BugBountyAPI(
    api_key='your_api_key_here',
    base_url='https://api.bugbounty.platform'
)

# Get programs
programs = client.programs.list(
    type='public',
    status='active'
)

# Submit report
report = client.reports.create(
    program_id='prog_123456789',
    title='XSS Vulnerability',
    description='Found XSS in search functionality',
    severity='medium',
    asset='https://example.com/search'
)`
    },
    {
      language: "cURL",
      icon: "💻",
      installation: "Available by default on most systems",
      example: `# Get programs
curl -X GET "https://api.bugbounty.platform/api/v1/programs" \\
  -H "Authorization: Bearer your_api_key_here" \\
  -H "Content-Type: application/json"

# Submit report
curl -X POST "https://api.bugbounty.platform/api/v1/reports" \\
  -H "Authorization: Bearer your_api_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "program_id": "prog_123456789",
    "title": "XSS Vulnerability",
    "description": "Found XSS in search functionality",
    "severity": "medium",
    "asset": "https://example.com/search"
  }'`
    }
  ];

  const statusCodes = [
    { code: "200", description: "Success - Request completed successfully" },
    { code: "201", description: "Created - Resource created successfully" },
    { code: "400", description: "Bad Request - Invalid request parameters" },
    { code: "401", description: "Unauthorized - Invalid or missing API key" },
    { code: "403", description: "Forbidden - Insufficient permissions" },
    { code: "404", description: "Not Found - Resource not found" },
    { code: "429", description: "Too Many Requests - Rate limit exceeded" },
    { code: "500", description: "Internal Server Error - Server error" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Code className="h-8 w-8 text-primary" />
            <Badge variant="outline" className="px-4 py-2 text-sm">
              Developer Tools
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            API Documentation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Integrate with our platform programmatically. Access programs, submit reports, 
            and manage your security research workflow through our RESTful API.
          </p>
        </div>

        {/* Quick Start */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Zap className="h-6 w-6 text-primary" />
              Quick Start
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Get API Key</h3>
                  <p className="text-sm text-muted-foreground">
                    Generate your API key from your account settings to authenticate requests.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Make Request</h3>
                  <p className="text-sm text-muted-foreground">
                    Include your API key in the Authorization header for authenticated requests.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Build Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    Use our SDKs or make direct HTTP requests to integrate with your workflow.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <Tabs defaultValue="endpoints" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto mb-8">
            <TabsTrigger value="endpoints" className="flex items-center gap-2 py-3">
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">Endpoints</span>
            </TabsTrigger>
            <TabsTrigger value="authentication" className="flex items-center gap-2 py-3">
              <Key className="h-4 w-4" />
              <span className="hidden sm:inline">Authentication</span>
            </TabsTrigger>
            <TabsTrigger value="sdks" className="flex items-center gap-2 py-3">
              <Code className="h-4 w-4" />
              <span className="hidden sm:inline">SDKs</span>
            </TabsTrigger>
            <TabsTrigger value="errors" className="flex items-center gap-2 py-3">
              <AlertCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Errors</span>
            </TabsTrigger>
          </TabsList>

          {/* Endpoints Tab */}
          <TabsContent value="endpoints">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Globe className="h-6 w-6 text-primary" />
                    API Endpoints
                    <Badge variant="secondary">v1</Badge>
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Base URL: <code className="px-2 py-1 bg-muted rounded text-sm">https://api.bugbounty.platform</code>
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {endpoints.map((endpoint, index) => (
                      <Card key={index} className="border-l-4 border-l-primary">
                        <CardHeader className="pb-4">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                            <Badge 
                              variant={endpoint.method === 'GET' ? 'secondary' : 'default'}
                              className="w-fit"
                            >
                              {endpoint.method}
                            </Badge>
                            <code className="text-sm bg-muted px-3 py-1 rounded flex-1">
                              {endpoint.path}
                            </code>
                            <Badge variant="outline" className="w-fit">
                              {endpoint.auth}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground">{endpoint.description}</p>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <Accordion type="single" collapsible>
                            <AccordionItem value="parameters">
                              <AccordionTrigger>
                                Parameters ({endpoint.parameters.length})
                              </AccordionTrigger>
                              <AccordionContent>
                                {endpoint.parameters.length > 0 ? (
                                  <div className="space-y-3">
                                    {endpoint.parameters.map((param, idx) => (
                                      <div key={idx} className="grid grid-cols-1 sm:grid-cols-4 gap-2 p-3 bg-muted/30 rounded">
                                        <div className="font-mono text-sm">{param.name}</div>
                                        <div className="text-sm text-muted-foreground">{param.type}</div>
                                        <div>
                                          <Badge variant={param.required ? "destructive" : "secondary"} className="text-xs">
                                            {param.required ? "Required" : "Optional"}
                                          </Badge>
                                        </div>
                                        <div className="text-sm text-muted-foreground">{param.description}</div>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <p className="text-muted-foreground text-sm">No parameters required</p>
                                )}
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="response">
                              <AccordionTrigger>Example Response</AccordionTrigger>
                              <AccordionContent>
                                <div className="relative">
                                  <ScrollArea className="h-64 w-full rounded border">
                                    <pre className="p-4 text-xs">
                                      <code>{endpoint.response}</code>
                                    </pre>
                                  </ScrollArea>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="absolute top-2 right-2"
                                    onClick={() => copyToClipboard(endpoint.response, `${endpoint.method} ${endpoint.path} response`)}
                                  >
                                    {copiedCode === `${endpoint.method} ${endpoint.path} response` ? (
                                      <CheckCircle className="h-4 w-4" />
                                    ) : (
                                      <Copy className="h-4 w-4" />
                                    )}
                                  </Button>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Authentication Tab */}
          <TabsContent value="authentication">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Key className="h-6 w-6 text-primary" />
                  Authentication
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">API Key Authentication</h3>
                  <p className="text-muted-foreground mb-4">
                    Our API uses Bearer token authentication. Include your API key in the Authorization header of each request.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Request Header</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard('Authorization: Bearer your_api_key_here', 'Authorization header')}
                      >
                        {copiedCode === 'Authorization header' ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <code className="text-sm">Authorization: Bearer your_api_key_here</code>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3">Getting Your API Key</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold mt-0.5">
                        1
                      </div>
                      <div>
                        <p className="font-medium">Navigate to Settings</p>
                        <p className="text-sm text-muted-foreground">Go to your account settings page</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold mt-0.5">
                        2
                      </div>
                      <div>
                        <p className="font-medium">Find API Section</p>
                        <p className="text-sm text-muted-foreground">Look for the "API Keys" or "Developer" section</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold mt-0.5">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Generate New Key</p>
                        <p className="text-sm text-muted-foreground">Click "Generate API Key" and copy the token</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3">Rate Limiting</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="border-l-4 border-l-blue-500">
                      <CardContent className="p-4">
                        <div className="text-2xl font-bold text-blue-600">1,000</div>
                        <p className="text-sm text-muted-foreground">Requests per hour</p>
                      </CardContent>
                    </Card>
                    <Card className="border-l-4 border-l-green-500">
                      <CardContent className="p-4">
                        <div className="text-2xl font-bold text-green-600">100</div>
                        <p className="text-sm text-muted-foreground">Concurrent requests</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SDKs Tab */}
          <TabsContent value="sdks">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Code className="h-6 w-6 text-primary" />
                  SDKs & Code Examples
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {sdks.map((sdk, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <span className="text-2xl">{sdk.icon}</span>
                          {sdk.language}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Terminal className="h-4 w-4" />
                            Installation
                          </h4>
                          <div className="bg-muted p-3 rounded-lg relative">
                            <code className="text-sm">{sdk.installation}</code>
                            <Button
                              size="sm"
                              variant="outline"
                              className="absolute top-2 right-2"
                              onClick={() => copyToClipboard(sdk.installation, `${sdk.language} installation`)}
                            >
                              {copiedCode === `${sdk.language} installation` ? (
                                <CheckCircle className="h-4 w-4" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            Example Usage
                          </h4>
                          <div className="relative">
                            <ScrollArea className="h-64 w-full rounded border">
                              <pre className="p-4 text-xs">
                                <code>{sdk.example}</code>
                              </pre>
                            </ScrollArea>
                            <Button
                              size="sm"
                              variant="outline"
                              className="absolute top-2 right-2"
                              onClick={() => copyToClipboard(sdk.example, `${sdk.language} example`)}
                            >
                              {copiedCode === `${sdk.language} example` ? (
                                <CheckCircle className="h-4 w-4" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Errors Tab */}
          <TabsContent value="errors">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <AlertCircle className="h-6 w-6 text-primary" />
                  Error Handling
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">HTTP Status Codes</h3>
                    <div className="space-y-3">
                      {statusCodes.map((status, index) => (
                        <div key={index} className="flex items-center gap-4 p-3 bg-muted/30 rounded">
                          <Badge 
                            variant={
                              status.code.startsWith('2') ? 'default' :
                              status.code.startsWith('4') ? 'destructive' : 'secondary'
                            }
                            className="font-mono"
                          >
                            {status.code}
                          </Badge>
                          <span className="text-sm">{status.description}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Error Response Format</h3>
                    <div className="bg-muted p-4 rounded-lg">
                      <pre className="text-xs">
                        <code>{`{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The request contains invalid parameters",
    "details": [
      {
        "field": "severity",
        "message": "severity must be one of: critical, high, medium, low, info"
      }
    ]
  }
}`}</code>
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Common Error Codes</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-muted/30 rounded">
                        <div className="font-mono text-sm mb-1">INVALID_API_KEY</div>
                        <div className="text-sm text-muted-foreground">The provided API key is invalid or has been revoked</div>
                      </div>
                      <div className="p-3 bg-muted/30 rounded">
                        <div className="font-mono text-sm mb-1">RATE_LIMIT_EXCEEDED</div>
                        <div className="text-sm text-muted-foreground">Too many requests have been made within the rate limit window</div>
                      </div>
                      <div className="p-3 bg-muted/30 rounded">
                        <div className="font-mono text-sm mb-1">VALIDATION_ERROR</div>
                        <div className="text-sm text-muted-foreground">Request parameters failed validation</div>
                      </div>
                      <div className="p-3 bg-muted/30 rounded">
                        <div className="font-mono text-sm mb-1">RESOURCE_NOT_FOUND</div>
                        <div className="text-sm text-muted-foreground">The requested resource could not be found</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Support Section */}
        <div className="mt-16">
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="flex justify-center gap-4 mb-6">
                <Book className="h-8 w-8 text-blue-500" />
                <Users className="h-8 w-8 text-green-500" />
                <Settings className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our developer support team is here to help you integrate successfully. 
                Check out our resources or get in touch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="flex items-center gap-2">
                  <Book className="h-4 w-4" />
                  View Full Documentation
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Join Developer Community
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Contact Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default APIDocumentation;