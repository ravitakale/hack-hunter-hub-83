import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { SidebarProvider } from "@/components/ui/sidebar";
import { OrganizationSidebar } from "@/components/OrganizationSidebar";
import { OrganizationNavbar } from "@/components/OrganizationNavbar";
import { ReportCommentDialog } from "@/components/ReportCommentDialog";
import { ReportDetailsDialog } from "@/components/ReportDetailsDialog";
import { 
  Search,
  Filter,
  Eye,
  MessageSquare,
  Calendar,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Clock,
  XCircle
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const mockReports = [
  {
    id: 1,
    title: "SQL Injection in Login Form",
    researcher: "John Doe",
    severity: "Critical",
    status: "New",
    program: "Web Application Security",
    submittedAt: "2024-01-15T10:30:00Z",
    reward: 1500,
    description: "Found SQL injection vulnerability in the main login form that allows unauthorized access..."
  },
  {
    id: 2,
    title: "XSS in User Profile Page",
    researcher: "Jane Smith",
    severity: "High",
    status: "Triaged",
    program: "Web Application Security",
    submittedAt: "2024-01-14T15:45:00Z",
    reward: 800,
    description: "Cross-site scripting vulnerability allows execution of malicious scripts..."
  },
  {
    id: 3,
    title: "CSRF in Settings Update",
    researcher: "Bob Wilson",
    severity: "Medium",
    status: "Resolved",
    program: "Web Application Security",
    submittedAt: "2024-01-13T09:20:00Z",
    reward: 300,
    description: "Cross-site request forgery vulnerability in user settings update functionality..."
  },
  {
    id: 4,
    title: "Information Disclosure in API",
    researcher: "Alice Johnson",
    severity: "Low",
    status: "Duplicate",
    program: "API Security Assessment",
    submittedAt: "2024-01-12T14:10:00Z",
    reward: 0,
    description: "API endpoint leaks sensitive user information in error responses..."
  },
  {
    id: 5,
    title: "Authentication Bypass",
    researcher: "Charlie Brown",
    severity: "Critical",
    status: "In Progress",
    program: "Mobile App Testing",
    submittedAt: "2024-01-11T11:30:00Z",
    reward: 2000,
    description: "Critical authentication bypass vulnerability in mobile application..."
  }
];

export default function OrganizationReports() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [severityFilter, setSeverityFilter] = useState("all");
  const [commentDialogOpen, setCommentDialogOpen] = useState(false);
  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<typeof mockReports[0] | null>(null);

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

  const filteredReports = mockReports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.researcher.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || report.status.toLowerCase() === statusFilter;
    const matchesSeverity = severityFilter === "all" || report.severity.toLowerCase() === severityFilter;
    
    return matchesSearch && matchesStatus && matchesSeverity;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <OrganizationSidebar />
        
        <div className="flex-1 flex flex-col">
          <OrganizationNavbar />
          
          <main className="flex-1 p-6">
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h1 className="text-3xl font-bold">Reports</h1>
                <p className="text-muted-foreground">
                  Manage and review security vulnerability reports
                </p>
              </div>

              {/* Filters */}
              <Card>
                <CardHeader>
                  <CardTitle>Filters</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          placeholder="Search reports..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="triaged">Triaged</SelectItem>
                        <SelectItem value="in progress">In Progress</SelectItem>
                        <SelectItem value="resolved">Resolved</SelectItem>
                        <SelectItem value="duplicate">Duplicate</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={severityFilter} onValueChange={setSeverityFilter}>
                      <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Filter by severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Severities</SelectItem>
                        <SelectItem value="critical">Critical</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Reports List */}
              <div className="space-y-4">
                {filteredReports.map((report) => (
                  <Card key={report.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between space-x-4">
                        <div className="flex-1 space-y-3">
                          <div className="flex items-start justify-between">
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                {getStatusIcon(report.status)}
                                <h3 className="text-lg font-semibold">{report.title}</h3>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                by {report.researcher} • {report.program}
                              </p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge variant={getSeverityColor(report.severity) as any}>
                                {report.severity}
                              </Badge>
                              <Badge variant="outline">
                                {report.status}
                              </Badge>
                            </div>
                          </div>
                          
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {report.description}
                          </p>
                          
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>{formatDate(report.submittedAt)}</span>
                              </div>
                              {report.reward > 0 && (
                                <div className="flex items-center space-x-1">
                                  <DollarSign className="h-4 w-4" />
                                  <span>${report.reward}</span>
                                </div>
                              )}
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="hover:bg-primary/10 hover:border-primary hover:text-primary"
                                onClick={() => {
                                  setSelectedReport(report);
                                  setCommentDialogOpen(true);
                                }}
                              >
                                <MessageSquare className="h-4 w-4 mr-1" />
                                Comment
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="hover:bg-secondary hover:border-secondary-foreground hover:text-secondary-foreground"
                                onClick={() => {
                                  setSelectedReport(report);
                                  setDetailsDialogOpen(true);
                                }}
                              >
                                <Eye className="h-4 w-4 mr-1" />
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredReports.length === 0 && (
                <Card>
                  <CardContent className="text-center py-8">
                    <AlertTriangle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No reports found</h3>
                    <p className="text-muted-foreground">
                      No reports match your current filters. Try adjusting your search criteria.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Comment Dialog */}
      <ReportCommentDialog
        open={commentDialogOpen}
        onOpenChange={setCommentDialogOpen}
        reportTitle={selectedReport?.title || ""}
        reportId={selectedReport?.id || 0}
      />

      {/* Details Dialog */}
      <ReportDetailsDialog
        open={detailsDialogOpen}
        onOpenChange={setDetailsDialogOpen}
        report={selectedReport}
      />
    </SidebarProvider>
  );
}