import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SidebarProvider } from "@/components/ui/sidebar";
import { OrganizationSidebar } from "@/components/OrganizationSidebar";
import { OrganizationNavbar } from "@/components/OrganizationNavbar";
import { 
  FolderOpen, 
  FileText, 
  Clock, 
  DollarSign,
  Plus,
  Eye,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Users,
  GraduationCap
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const mockStats = {
  activePrograms: 5,
  totalReports: 142,
  pendingReports: 8,
  rewardsPaid: 15750
};

const recentReports = [
  { id: 1, title: "SQL Injection in Login Form", severity: "Critical", status: "New", researcher: "John Doe", time: "2 hours ago" },
  { id: 2, title: "XSS in User Profile", severity: "High", status: "Triaged", researcher: "Jane Smith", time: "4 hours ago" },
  { id: 3, title: "CSRF in Settings Page", severity: "Medium", status: "Resolved", researcher: "Bob Wilson", time: "1 day ago" },
];

const topPrograms = [
  { id: 1, name: "Web Application Security", reports: 45, status: "Public" },
  { id: 2, name: "Mobile App Testing", reports: 32, status: "Private" },
  { id: 3, name: "API Security Assessment", reports: 28, status: "Public" },
];

export default function OrganizationDashboard() {
  const navigate = useNavigate();

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
      case 'triaged': return <Clock className="h-4 w-4 text-blue-500" />;
      case 'resolved': return <CheckCircle className="h-4 w-4 text-green-500" />;
      default: return <FileText className="h-4 w-4" />;
    }
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
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">
                  Welcome to your organization portal
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Programs</CardTitle>
                    <FolderOpen className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{mockStats.activePrograms}</div>
                    <p className="text-xs text-muted-foreground">
                      +2 from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Reports</CardTitle>
                    <FileText className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{mockStats.totalReports}</div>
                    <p className="text-xs text-muted-foreground">
                      +12 from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pending Reports</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{mockStats.pendingReports}</div>
                    <p className="text-xs text-muted-foreground">
                      -3 from yesterday
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Rewards Paid</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${mockStats.rewardsPaid.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">
                      +$2,500 from last month
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <Button onClick={() => navigate("/org-program/create")}>
                      <Plus className="h-4 w-4 mr-2" />
                      Create Program
                    </Button>
                    <Button variant="outline" onClick={() => navigate("/org-submissions")}>
                      <Eye className="h-4 w-4 mr-2" />
                      View All Reports
                    </Button>
                    <Button variant="outline" onClick={() => navigate("/org-researchers")}>
                      <Users className="h-4 w-4 mr-2" />
                      Manage Researchers
                    </Button>
                    <Button variant="outline" onClick={() => navigate("/org-courses")}>
                      <GraduationCap className="h-4 w-4 mr-2" />
                      Manage Courses
                    </Button>
                    <Button variant="outline" onClick={() => navigate("/org-analytics")}>
                      <TrendingUp className="h-4 w-4 mr-2" />
                      View Analytics
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Reports */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Reports</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentReports.map((report) => (
                        <div key={report.id} className="flex items-start justify-between space-x-4">
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center space-x-2">
                              {getStatusIcon(report.status)}
                              <p className="text-sm font-medium">{report.title}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge variant={getSeverityColor(report.severity) as any}>
                                {report.severity}
                              </Badge>
                              <span className="text-xs text-muted-foreground">
                                by {report.researcher}
                              </span>
                            </div>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {report.time}
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button 
                      variant="ghost" 
                      className="w-full mt-4"
                      onClick={() => navigate("/org-submissions")}
                    >
                      View All Reports
                    </Button>
                  </CardContent>
                </Card>

                {/* Top Programs */}
                <Card>
                  <CardHeader>
                    <CardTitle>Top Programs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topPrograms.map((program) => (
                        <div key={program.id} className="flex items-center justify-between">
                          <div className="space-y-1">
                            <p className="text-sm font-medium">{program.name}</p>
                            <div className="flex items-center space-x-2">
                              <Badge variant={program.status === 'Public' ? 'default' : 'secondary'}>
                                {program.status}
                              </Badge>
                              <span className="text-xs text-muted-foreground">
                                {program.reports} reports
                              </span>
                            </div>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => navigate(`/org-program/${program.id}/view`)}
                          >
                            View
                          </Button>
                        </div>
                      ))}
                    </div>
                    <Button 
                      variant="ghost" 
                      className="w-full mt-4"
                      onClick={() => navigate("/org-programs")}
                    >
                      View All Programs
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}