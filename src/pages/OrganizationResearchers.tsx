import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { OrganizationSidebar } from "@/components/OrganizationSidebar";
import { OrganizationNavbar } from "@/components/OrganizationNavbar";
import { ResearcherMessageDialog } from "@/components/ResearcherMessageDialog";
import { ResearcherProfileDialog } from "@/components/ResearcherProfileDialog";
import { 
  Search,
  UserPlus,
  MessageSquare,
  Award,
  Eye,
  MapPin,
  Calendar,
  Shield,
  Star,
  TrendingUp
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const mockResearchers = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/placeholder.svg",
    reputation: 4.8,
    level: "Expert",
    location: "San Francisco, CA",
    joinedAt: "2023-06-15",
    stats: {
      reportsSubmitted: 45,
      validReports: 42,
      totalEarnings: 15750,
      averageSeverity: "High"
    },
    specialties: ["Web Applications", "API Security", "Mobile Apps"],
    lastActive: "2 hours ago",
    status: "Active"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    avatar: "/placeholder.svg",
    reputation: 4.6,
    level: "Advanced",
    location: "New York, NY",
    joinedAt: "2023-08-22",
    stats: {
      reportsSubmitted: 32,
      validReports: 30,
      totalEarnings: 8900,
      averageSeverity: "Medium"
    },
    specialties: ["Network Security", "Cryptography"],
    lastActive: "1 day ago",
    status: "Active"
  },
  {
    id: 3,
    name: "Bob Wilson",
    email: "bob.wilson@example.com",
    avatar: "/placeholder.svg",
    reputation: 4.3,
    level: "Intermediate",
    location: "Austin, TX",
    joinedAt: "2023-09-10",
    stats: {
      reportsSubmitted: 28,
      validReports: 25,
      totalEarnings: 6200,
      averageSeverity: "Medium"
    },
    specialties: ["OWASP Top 10", "Penetration Testing"],
    lastActive: "3 days ago",
    status: "Active"
  },
  {
    id: 4,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    avatar: "/placeholder.svg",
    reputation: 4.9,
    level: "Expert",
    location: "Seattle, WA",
    joinedAt: "2023-03-05",
    stats: {
      reportsSubmitted: 67,
      validReports: 64,
      totalEarnings: 22400,
      averageSeverity: "High"
    },
    specialties: ["Cloud Security", "DevSecOps", "Infrastructure"],
    lastActive: "30 minutes ago",
    status: "Active"
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    avatar: "/placeholder.svg",
    reputation: 3.8,
    level: "Beginner",
    location: "Denver, CO",
    joinedAt: "2023-11-18",
    stats: {
      reportsSubmitted: 12,
      validReports: 10,
      totalEarnings: 1800,
      averageSeverity: "Low"
    },
    specialties: ["Web Applications"],
    lastActive: "1 week ago",
    status: "Inactive"
  }
];

export default function OrganizationResearchers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [levelFilter, setLevelFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [messageDialogOpen, setMessageDialogOpen] = useState(false);
  const [profileDialogOpen, setProfileDialogOpen] = useState(false);
  const [selectedResearcher, setSelectedResearcher] = useState<{
    id: number;
    name: string;
    email: string;
    avatar?: string;
    rating: number;
    level: string;
    status: string;
    location: string;
    joinedDate: string;
    specialties: string[];
    reports: number;
    validReports: number;
    earnings: number;
    avgSeverity: string;
    lastActive: string;
  } | null>(null);

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'expert': return 'destructive';
      case 'advanced': return 'high';
      case 'intermediate': return 'medium';
      case 'beginner': return 'low';
      default: return 'secondary';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active': return 'default';
      case 'inactive': return 'secondary';
      default: return 'secondary';
    }
  };

  const filteredResearchers = mockResearchers.filter(researcher => {
    const matchesSearch = researcher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         researcher.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = levelFilter === "all" || researcher.level.toLowerCase() === levelFilter;
    const matchesStatus = statusFilter === "all" || researcher.status.toLowerCase() === statusFilter;
    
    return matchesSearch && matchesLevel && matchesStatus;
  });

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleMessageClick = (researcher: typeof mockResearchers[0]) => {
    setSelectedResearcher({
      id: researcher.id,
      name: researcher.name,
      email: researcher.email,
      avatar: researcher.avatar,
      rating: researcher.reputation,
      level: researcher.level,
      status: researcher.status,
      location: researcher.location,
      joinedDate: formatDate(researcher.joinedAt),
      specialties: researcher.specialties,
      reports: researcher.stats.reportsSubmitted,
      validReports: researcher.stats.validReports,
      earnings: researcher.stats.totalEarnings,
      avgSeverity: researcher.stats.averageSeverity,
      lastActive: researcher.lastActive
    });
    setMessageDialogOpen(true);
  };

  const handleProfileClick = (researcher: typeof mockResearchers[0]) => {
    setSelectedResearcher({
      id: researcher.id,
      name: researcher.name,
      email: researcher.email,
      avatar: researcher.avatar,
      rating: researcher.reputation,
      level: researcher.level,
      status: researcher.status,
      location: researcher.location,
      joinedDate: formatDate(researcher.joinedAt),
      specialties: researcher.specialties,
      reports: researcher.stats.reportsSubmitted,
      validReports: researcher.stats.validReports,
      earnings: researcher.stats.totalEarnings,
      avgSeverity: researcher.stats.averageSeverity,
      lastActive: researcher.lastActive
    });
    setProfileDialogOpen(true);
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
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold">Researchers</h1>
                  <p className="text-muted-foreground">
                    Manage and engage with security researchers
                  </p>
                </div>
                <Button>
                  <UserPlus className="h-4 w-4 mr-2" />
                  Invite Researcher
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Researchers</CardTitle>
                    <Shield className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{mockResearchers.length}</div>
                    <p className="text-xs text-muted-foreground">
                      +2 this month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Researchers</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {mockResearchers.filter(r => r.status === "Active").length}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      80% active rate
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
                    <Star className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">4.5</div>
                    <p className="text-xs text-muted-foreground">
                      +0.2 from last month
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Expert Level</CardTitle>
                    <Award className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {mockResearchers.filter(r => r.level === "Expert").length}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      40% expert level
                    </p>
                  </CardContent>
                </Card>
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
                          placeholder="Search researchers..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </div>
                    <Select value={levelFilter} onValueChange={setLevelFilter}>
                      <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Filter by level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Levels</SelectItem>
                        <SelectItem value="expert">Expert</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="beginner">Beginner</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Researchers List */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredResearchers.map((researcher) => (
                  <Card key={researcher.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={researcher.avatar} alt={researcher.name} />
                              <AvatarFallback>{getInitials(researcher.name)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold">{researcher.name}</h3>
                              <p className="text-sm text-muted-foreground">{researcher.email}</p>
                              <div className="flex items-center space-x-1 mt-1">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                <span className="text-sm font-medium">{researcher.reputation}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end space-y-1">
                            <Badge variant={getLevelColor(researcher.level) as any}>
                              {researcher.level}
                            </Badge>
                            <Badge variant={getStatusColor(researcher.status) as any}>
                              {researcher.status}
                            </Badge>
                          </div>
                        </div>

                        {/* Location and Join Date */}
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{researcher.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>Joined {formatDate(researcher.joinedAt)}</span>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-muted-foreground">Reports</p>
                            <p className="font-semibold">{researcher.stats.reportsSubmitted}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Valid Reports</p>
                            <p className="font-semibold">{researcher.stats.validReports}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Earnings</p>
                            <p className="font-semibold">${researcher.stats.totalEarnings.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Avg Severity</p>
                            <p className="font-semibold">{researcher.stats.averageSeverity}</p>
                          </div>
                        </div>

                        {/* Specialties */}
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">Specialties</p>
                          <div className="flex flex-wrap gap-1">
                            {researcher.specialties.map((specialty, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Last Active */}
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-muted-foreground">
                            Last active: {researcher.lastActive}
                          </p>
                          <div className="flex space-x-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleMessageClick(researcher)}
                              className="hover:bg-primary/10 hover:border-primary hover:text-primary"
                            >
                              <MessageSquare className="h-4 w-4 mr-1" />
                              Message
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleProfileClick(researcher)}
                              className="hover:bg-secondary hover:border-secondary-foreground hover:text-secondary-foreground"
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              Profile
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredResearchers.length === 0 && (
                <Card>
                  <CardContent className="text-center py-8">
                    <Shield className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No researchers found</h3>
                    <p className="text-muted-foreground">
                      No researchers match your current filters. Try adjusting your search criteria.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Message Dialog */}
      <ResearcherMessageDialog
        open={messageDialogOpen}
        onOpenChange={setMessageDialogOpen}
        researcher={selectedResearcher}
      />

      {/* Profile Dialog */}
      <ResearcherProfileDialog
        open={profileDialogOpen}
        onOpenChange={setProfileDialogOpen}
        researcher={selectedResearcher}
        onMessageClick={() => {
          setProfileDialogOpen(false);
          setMessageDialogOpen(true);
        }}
      />
    </SidebarProvider>
  );
}