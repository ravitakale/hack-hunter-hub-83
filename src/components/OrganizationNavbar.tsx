import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { 
  Bell, 
  Building2, 
  User, 
  Settings, 
  LogOut,
  FileText,
  Users,
  Award,
  BellRing,
  Code,
  UserPlus,
  AlertTriangle,
  CheckCircle,
  Clock
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ReportDetailsDialog } from "./ReportDetailsDialog";

const mockNotifications = [
  {
    id: 1,
    title: "New Report Submitted",
    description: "Critical vulnerability in Payment System",
    time: "2 minutes ago",
    type: "report",
    link: "/org-report/1",
    isRead: false,
    priority: "high",
    reportData: {
      id: 1,
      title: "SQL Injection in Login Form",
      researcher: "John Doe",
      severity: "Critical",
      status: "New",
      program: "Web Application Security",
      submittedAt: "2024-01-15T10:30:00Z",
      reward: 1500,
      description: "Critical SQL injection vulnerability discovered in the login authentication system that allows unauthorized access to user accounts and sensitive data."
    }
  },
  {
    id: 2,
    title: "Researcher Commented",
    description: "Additional details provided for Report #23",
    time: "1 hour ago",
    type: "comment",
    link: "/org-report/23",
    isRead: false,
    priority: "medium",
    reportData: {
      id: 23,
      title: "XSS in User Profile",
      researcher: "Jane Smith",
      severity: "High",
      status: "In Progress",
      program: "Web Application Security",
      submittedAt: "2024-01-14T14:20:00Z",
      reward: 800,
      description: "Cross-site scripting vulnerability in user profile page that allows attackers to execute malicious scripts."
    }
  },
  {
    id: 3,
    title: "New Report - CSRF Vulnerability",
    description: "CSRF in Settings Page reported by Bob Wilson",
    time: "3 hours ago",
    type: "report",
    link: "/org-report/3",
    isRead: true,
    priority: "medium",
    reportData: {
      id: 3,
      title: "CSRF in Settings Page",
      researcher: "Bob Wilson",
      severity: "Medium",
      status: "Resolved",
      program: "Web Application Security",
      submittedAt: "2024-01-14T09:15:00Z",
      reward: 500,
      description: "Cross-site request forgery vulnerability in the settings page allows attackers to perform unauthorized actions on behalf of authenticated users."
    }
  },
  {
    id: 4,
    title: "Program Updated",
    description: "Security assessment program guidelines updated",
    time: "5 hours ago",
    type: "program",
    link: "/org-programs",
    isRead: true,
    priority: "medium"
  },
  {
    id: 5,
    title: "New Researcher Joined",
    description: "Expert security researcher Sarah Johnson joined",
    time: "1 day ago",
    type: "researcher",
    link: "/org-researchers",
    isRead: true,
    priority: "low"
  }
];

export function OrganizationNavbar() {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [selectedReport, setSelectedReport] = useState(null);
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const handleLogout = () => {
    localStorage.removeItem("bugkabaap_user");
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate("/organization/signin");
  };

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, isRead: true }))
    );
    toast({
      title: "All notifications marked as read",
      description: "Your notification list has been updated.",
    });
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'report': 
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'comment': 
        return <Users className="h-5 w-5 text-blue-500" />;
      case 'reward': 
        return <Award className="h-5 w-5 text-yellow-500" />;
      case 'program':
        return <Code className="h-5 w-5 text-purple-500" />;
      case 'researcher':
        return <UserPlus className="h-5 w-5 text-green-500" />;
      default: 
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <Badge variant="destructive" className="text-xs">High</Badge>;
      case 'medium':
        return <Badge variant="secondary" className="text-xs">Medium</Badge>;
      case 'low':
        return <Badge variant="outline" className="text-xs">Low</Badge>;
      default:
        return null;
    }
  };

  const handleNotificationClick = (notification: any) => {
    markAsRead(notification.id);
    
    // For report-type notifications, show the detailed dialog
    if ((notification.type === 'report' || notification.type === 'comment') && notification.reportData) {
      setSelectedReport(notification.reportData);
      setIsReportDialogOpen(true);
    } else {
      navigate(notification.link);
    }
  };

  return (
    <>
      <header className="h-16 border-b bg-background flex items-center justify-between px-4 animate-fade-in-down">
        <div className="flex items-center space-x-4">
          <SidebarTrigger />
          <div className="flex items-center space-x-2">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="font-semibold">Organization Portal</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative hover:bg-primary/10 transition-all duration-200 hover-scale"
              >
                {unreadCount > 0 ? (
                  <BellRing className="h-5 w-5 text-primary animate-pulse" />
                ) : (
                  <Bell className="h-5 w-5" />
                )}
                {unreadCount > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs p-0 animate-bounce"
                  >
                    {unreadCount}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-96 max-h-96 overflow-y-auto animate-scale-in">
              <div className="flex items-center justify-between p-3">
                <DropdownMenuLabel className="text-base font-semibold">
                  Notifications
                </DropdownMenuLabel>
                {unreadCount > 0 && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={markAllAsRead}
                    className="text-xs hover:bg-primary/10"
                  >
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Mark all read
                  </Button>
                )}
              </div>
              <DropdownMenuSeparator />
              
              {notifications.length === 0 ? (
                <div className="p-8 text-center">
                  <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <p className="text-muted-foreground text-sm">No notifications yet</p>
                  <p className="text-muted-foreground text-xs">We'll notify you when something important happens</p>
                </div>
              ) : (
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((notification) => (
                    <DropdownMenuItem 
                      key={notification.id}
                      className={`flex items-start space-x-3 p-4 cursor-pointer transition-all duration-200 hover:bg-primary/5 ${
                        !notification.isRead 
                          ? 'bg-primary/10 border-l-4 border-l-primary' 
                          : 'hover:bg-muted/50'
                      }`}
                      onClick={() => handleNotificationClick(notification)}
                    >
                      <div className="flex-shrink-0 mt-1">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1 min-w-0 space-y-2">
                        <div className="flex items-start justify-between">
                          <p className={`text-sm font-medium leading-tight ${
                            !notification.isRead ? 'text-foreground' : 'text-muted-foreground'
                          }`}>
                            {notification.title}
                          </p>
                          {getPriorityBadge(notification.priority)}
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {notification.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1" />
                            {notification.time}
                          </div>
                          {!notification.isRead && (
                            <div className="h-2 w-2 bg-primary rounded-full"></div>
                          )}
                        </div>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </div>
              )}
              
              <DropdownMenuSeparator />
              <DropdownMenuItem className="p-3 text-center">
                <Link 
                  to="/org-notifications" 
                  className="w-full text-primary hover:text-primary/80 font-medium text-sm"
                >
                  View All Notifications
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/org-settings")}>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <ReportDetailsDialog
        open={isReportDialogOpen}
        onOpenChange={setIsReportDialogOpen}
        report={selectedReport}
      />
    </>
  );
}