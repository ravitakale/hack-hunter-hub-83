import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, Search, Filter, Download, Eye, FileText, Calendar, 
  DollarSign, CheckCircle, Clock, XCircle, AlertTriangle, TrendingUp,
  Award, BarChart3, Target, Star, Building2
} from "lucide-react";

const ProgramSubmissions = () => {
  const { id } = useParams();
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock program data
  const programs = {
    "1": {
      name: "TechCorp Manual Testing Program",
      company: "TechCorp",
      logo: "📱"
    },
    "2": {
      name: "EcomStore Bug Bounty",
      company: "EcomStore",
      logo: "🛒"
    }
  };

  const currentProgram = programs[id as keyof typeof programs] || programs["1"];

  // Mock submissions data filtered by program
  const allSubmissions = [
    {
      id: "MT-001",
      title: "Login Form UI Inconsistency",
      program: "TechCorp Manual Testing Program",
      programId: "1",
      type: "UI/UX Issue",
      severity: "Medium",
      status: "Accepted",
      reward: 15000,
      submittedDate: "2024-01-20",
      resolvedDate: "2024-01-22",
      description: "Login button alignment issue on mobile devices affecting user experience.",
      steps: "1. Open login page on mobile\n2. Notice button misalignment\n3. Verify across different screen sizes",
      expectedResult: "Button should be properly aligned",
      actualResult: "Button appears misaligned on screens below 768px"
    },
    {
      id: "MT-002",
      title: "Form Validation Error",
      program: "TechCorp Manual Testing Program",
      programId: "1",
      type: "Functionality",
      severity: "High",
      status: "Under Review",
      reward: 0,
      submittedDate: "2024-01-25",
      resolvedDate: null,
      description: "Email validation allows invalid email formats in registration form.",
      steps: "1. Go to registration page\n2. Enter invalid email format\n3. Submit form",
      expectedResult: "Should show validation error",
      actualResult: "Form submits with invalid email"
    },
    {
      id: "EC-001",
      title: "Cart Calculation Bug",
      program: "EcomStore Bug Bounty",
      programId: "2",
      type: "Functionality",
      severity: "High",
      status: "Accepted",
      reward: 25000,
      submittedDate: "2024-01-18",
      resolvedDate: "2024-01-20",
      description: "Shopping cart total calculation incorrect with discount codes.",
      steps: "1. Add items to cart\n2. Apply discount code\n3. Check total calculation",
      expectedResult: "Discount should be applied correctly",
      actualResult: "Discount calculated incorrectly"
    },
    {
      id: "MT-003",
      title: "Responsive Design Flaw",
      program: "TechCorp Manual Testing Program",
      programId: "1",
      type: "UI/UX Issue",
      severity: "Medium",
      status: "Pending Payment",
      reward: 12000,
      submittedDate: "2024-01-28",
      resolvedDate: "2024-01-30",
      description: "Navigation menu overlaps content on tablet devices.",
      steps: "1. Access site on tablet (768-1024px)\n2. Open navigation menu\n3. Notice overlap with main content",
      expectedResult: "Menu should not overlap content",
      actualResult: "Menu overlaps main content area"
    }
  ];

  // Filter submissions by current program
  const submissions = allSubmissions.filter(sub => sub.programId === id);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High":
        return "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/30 dark:text-red-400";
      case "Medium":
        return "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/30 dark:text-orange-400";
      case "Low":
        return "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950/30 dark:text-yellow-400";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-950/30 dark:text-gray-400";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Accepted":
        return "bg-green-50 text-green-700 border-green-200 dark:bg-green-950/30 dark:text-green-400";
      case "Under Review":
        return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:text-blue-400";
      case "Rejected":
        return "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/30 dark:text-red-400";
      case "Pending Payment":
        return "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/30 dark:text-purple-400";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-950/30 dark:text-gray-400";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Accepted":
        return <CheckCircle className="h-4 w-4" />;
      case "Under Review":
        return <Clock className="h-4 w-4" />;
      case "Rejected":
        return <XCircle className="h-4 w-4" />;
      case "Pending Payment":
        return <DollarSign className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const filteredSubmissions = submissions.filter(submission => {
    const matchesStatus = filterStatus === "all" || submission.status.toLowerCase().replace(" ", "-") === filterStatus;
    const matchesSearch = searchQuery === "" || 
      submission.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      submission.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      submission.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesStatus && matchesSearch;
  });

  const totalRewards = submissions
    .filter(s => s.status === "Accepted" || s.status === "Pending Payment")
    .reduce((sum, s) => sum + s.reward, 0);

  const acceptedCount = submissions.filter(s => s.status === "Accepted").length;
  const pendingCount = submissions.filter(s => s.status === "Under Review").length;
  const rejectedCount = submissions.filter(s => s.status === "Rejected").length;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link to={`/programs/${id}`}>
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Program
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center gap-3 mb-2">
            <div className="text-2xl">{currentProgram.logo}</div>
            <div>
              <h1 className="text-3xl font-bold">My Submissions</h1>
              <p className="text-muted-foreground">{currentProgram.name}</p>
            </div>
          </div>
        </div>

        {/* Program-specific Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-green-600" />
                <CardTitle className="text-sm font-medium">Program Earnings</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-green-700 dark:text-green-400">₹{totalRewards.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground mt-1">From this program</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                <CardTitle className="text-sm font-medium">Submissions</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{submissions.length}</p>
              <p className="text-xs text-muted-foreground mt-1">Total for this program</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <CardTitle className="text-sm font-medium">Accepted</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{acceptedCount}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {submissions.length > 0 ? ((acceptedCount / submissions.length) * 100).toFixed(0) : 0}% success rate
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-orange-600" />
                <CardTitle className="text-sm font-medium">Under Review</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{pendingCount}</p>
              <p className="text-xs text-muted-foreground mt-1">Awaiting response</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filter & Search
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by title, ID, or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="accepted">Accepted</SelectItem>
                  <SelectItem value="under-review">Under Review</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                  <SelectItem value="pending-payment">Pending Payment</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Reports
              </Button>
              <Link to="/my-submissions">
                <Button variant="outline" size="sm">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View All Submissions
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Submissions List */}
        <div className="space-y-6">
          {filteredSubmissions.map((submission) => (
            <Card key={submission.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                  {/* Main Content */}
                  <div className="lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs font-mono">
                        {submission.id}
                      </Badge>
                      <Badge className={getSeverityColor(submission.severity)}>
                        {submission.severity}
                      </Badge>
                      <Badge className={getStatusColor(submission.status)}>
                        {getStatusIcon(submission.status)}
                        <span className="ml-1">{submission.status}</span>
                      </Badge>
                      <Badge variant="secondary">
                        {submission.type}
                      </Badge>
                    </div>

                    <h3 className="font-semibold text-lg mb-2">{submission.title}</h3>
                    <p className="text-sm mb-4">{submission.description}</p>

                    {/* Testing Details */}
                    <Tabs defaultValue="overview" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="steps">Test Steps</TabsTrigger>
                        <TabsTrigger value="results">Results</TabsTrigger>
                      </TabsList>
                      <TabsContent value="overview" className="mt-4">
                        <div className="text-sm space-y-2">
                          <p><strong>Type:</strong> {submission.type}</p>
                          <p><strong>Severity:</strong> {submission.severity}</p>
                          <p><strong>Status:</strong> {submission.status}</p>
                        </div>
                      </TabsContent>
                      <TabsContent value="steps" className="mt-4">
                        <div className="text-sm">
                          <strong>Steps to Reproduce:</strong>
                          <pre className="whitespace-pre-wrap mt-2 p-3 bg-muted rounded-md">
                            {submission.steps}
                          </pre>
                        </div>
                      </TabsContent>
                      <TabsContent value="results" className="mt-4">
                        <div className="text-sm space-y-3">
                          <div>
                            <strong>Expected Result:</strong>
                            <p className="mt-1 p-2 bg-green-50 dark:bg-green-950/20 rounded">
                              {submission.expectedResult}
                            </p>
                          </div>
                          <div>
                            <strong>Actual Result:</strong>
                            <p className="mt-1 p-2 bg-red-50 dark:bg-red-950/20 rounded">
                              {submission.actualResult}
                            </p>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>

                  {/* Reward & Dates */}
                  <div className="lg:col-span-3 text-center space-y-4">
                    <div>
                      <div className="text-2xl font-bold text-green-600">
                        {submission.reward > 0 ? `₹${submission.reward.toLocaleString()}` : "—"}
                      </div>
                      <p className="text-sm text-muted-foreground">Reward</p>
                    </div>

                    <div className="space-y-2">
                      <div>
                        <div className="text-sm font-medium">
                          {new Date(submission.submittedDate).toLocaleDateString()}
                        </div>
                        <p className="text-xs text-muted-foreground">Submitted</p>
                      </div>
                      {submission.resolvedDate && (
                        <div>
                          <div className="text-sm font-medium">
                            {new Date(submission.resolvedDate).toLocaleDateString()}
                          </div>
                          <p className="text-xs text-muted-foreground">Resolved</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="lg:col-span-2 flex flex-col gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-3 w-3 mr-2" />
                      View Details
                    </Button>
                    {(submission.status === "Accepted" || submission.status === "Pending Payment") && (
                      <Button size="sm">
                        <Download className="h-3 w-3 mr-2" />
                        Receipt
                      </Button>
                    )}
                    {submission.status === "Under Review" && (
                      <Button variant="outline" size="sm">
                        <FileText className="h-3 w-3 mr-2" />
                        Edit Report
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSubmissions.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <FileText className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-medium text-lg mb-2">No submissions found</h3>
              <p className="text-muted-foreground mb-6">
                {searchQuery || filterStatus !== "all"
                  ? "Try adjusting your filters or search terms."
                  : `You haven't submitted any reports for ${currentProgram.name} yet.`
                }
              </p>
              <Link to={`/programs/${id}`}>
                <Button>
                  <Target className="h-4 w-4 mr-2" />
                  Back to Program
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProgramSubmissions;