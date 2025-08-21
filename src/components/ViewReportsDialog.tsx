import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  BarChart3, 
  Search, 
  Filter,
  Download,
  Calendar,
  DollarSign,
  CheckCircle,
  Clock,
  XCircle,
  Eye,
  FileText,
  TrendingUp,
  Award
} from "lucide-react";

interface ViewReportsDialogProps {
  children: React.ReactNode;
}

const ViewReportsDialog = ({ children }: ViewReportsDialogProps) => {
  const [filterStatus, setFilterStatus] = useState("all");
  
  const reports = [
    {
      id: "VR-001",
      title: "SQL Injection in Login Form",
      program: "TechCorp Web Security",
      severity: "Critical",
      status: "Accepted",
      reward: 2500,
      submittedDate: "2024-01-15",
      resolvedDate: "2024-01-18",
      description: "Critical SQL injection vulnerability found in the main login form allowing authentication bypass."
    },
    {
      id: "VR-002", 
      title: "XSS in Comments Section",
      program: "EcomStore Bug Bounty",
      severity: "High",
      status: "Under Review",
      reward: 0,
      submittedDate: "2024-01-20",
      resolvedDate: null,
      description: "Stored XSS vulnerability in the product comments section."
    },
    {
      id: "VR-003",
      title: "CSRF Token Bypass",
      program: "FinanceApp Mobile Security",
      severity: "Medium",
      status: "Rejected",
      reward: 0,
      submittedDate: "2024-01-10",
      resolvedDate: "2024-01-12",
      description: "CSRF protection bypass in password reset functionality."
    },
    {
      id: "VR-004",
      title: "Information Disclosure",
      program: "CloudSys Infrastructure",
      severity: "Low",
      status: "Accepted",
      reward: 500,
      submittedDate: "2024-01-08",
      resolvedDate: "2024-01-14",
      description: "Sensitive information disclosed in error messages."
    },
    {
      id: "VR-005",
      title: "Authentication Bypass",
      program: "TechCorp Web Security",
      severity: "Critical",
      status: "Pending Payment",
      reward: 5000,
      submittedDate: "2024-01-25",
      resolvedDate: "2024-01-28",
      description: "Critical authentication bypass allowing admin access."
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      case "High":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
      case "Medium":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "Low":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Accepted":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "Under Review":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      case "Rejected":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      case "Pending Payment":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400";
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

  const filteredReports = filterStatus === "all" 
    ? reports 
    : reports.filter(report => report.status.toLowerCase().replace(" ", "-") === filterStatus);

  const totalRewards = reports
    .filter(r => r.status === "Accepted" || r.status === "Pending Payment")
    .reduce((sum, r) => sum + r.reward, 0);

  const acceptedReports = reports.filter(r => r.status === "Accepted").length;
  const pendingReports = reports.filter(r => r.status === "Under Review").length;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <div className="p-2 bg-green-500/10 rounded-full">
              <BarChart3 className="h-5 w-5 text-green-600" />
            </div>
            View My Reports
          </DialogTitle>
        </DialogHeader>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
            <div className="flex items-center gap-2 mb-2">
              <Award className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium">Total Earned</span>
            </div>
            <p className="text-2xl font-bold text-green-700 dark:text-green-400">${totalRewards.toLocaleString()}</p>
          </Card>
          
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium">Total Reports</span>
            </div>
            <p className="text-2xl font-bold">{reports.length}</p>
          </Card>
          
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium">Accepted</span>
            </div>
            <p className="text-2xl font-bold">{acceptedReports}</p>
          </Card>
          
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-orange-600" />
              <span className="text-sm font-medium">Pending</span>
            </div>
            <p className="text-2xl font-bold">{pendingReports}</p>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mt-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search reports by title, program, or ID..."
              className="pl-10"
            />
          </div>
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="accepted">Accepted</SelectItem>
              <SelectItem value="under-review">Under Review</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
              <SelectItem value="pending-payment">Pending Payment</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>

        {/* Reports List */}
        <div className="space-y-4 mt-6">
          {filteredReports.map((report) => (
            <Card key={report.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {report.id}
                      </Badge>
                      <Badge className={getSeverityColor(report.severity)}>
                        {report.severity}
                      </Badge>
                      <Badge className={getStatusColor(report.status)}>
                        {getStatusIcon(report.status)}
                        <span className="ml-1">{report.status}</span>
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{report.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{report.program}</p>
                    <p className="text-sm">{report.description}</p>
                  </div>
                  
                  <div className="lg:col-span-3 text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {report.reward > 0 ? `$${report.reward.toLocaleString()}` : "—"}
                    </div>
                    <p className="text-sm text-muted-foreground">Reward</p>
                  </div>
                  
                  <div className="lg:col-span-2 text-center">
                    <div className="text-sm font-medium">
                      {new Date(report.submittedDate).toLocaleDateString()}
                    </div>
                    <p className="text-xs text-muted-foreground">Submitted</p>
                    {report.resolvedDate && (
                      <>
                        <div className="text-sm font-medium mt-1">
                          {new Date(report.resolvedDate).toLocaleDateString()}
                        </div>
                        <p className="text-xs text-muted-foreground">Resolved</p>
                      </>
                    )}
                  </div>
                  
                  <div className="lg:col-span-2 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                    {(report.status === "Accepted" || report.status === "Pending Payment") && (
                      <Button size="sm" className="flex-1">
                        <Download className="h-3 w-3 mr-1" />
                        Receipt
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredReports.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="font-medium mb-2">No reports found</h3>
            <p className="text-sm text-muted-foreground">
              {filterStatus === "all" 
                ? "You haven't submitted any reports yet."
                : `No reports with status "${filterStatus.replace("-", " ")}" found.`
              }
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ViewReportsDialog;