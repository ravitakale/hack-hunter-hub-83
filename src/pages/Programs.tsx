import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, DollarSign, Calendar, Shield, Search, Filter } from "lucide-react";
import ManualTestingReportDialog from "@/components/ManualTestingReportDialog";

const Programs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const programs = [
    {
      id: 1,
      title: "TechCorp Manual Testing Program",
      company: "TechCorp India",
      logo: "🏢",
      minReward: "₹5,000",
      maxReward: "₹2,50,000",
      scope: "Web Application, Mobile App",
      launched: "2 days ago",
      status: "Active",
      severity: ["Critical", "High", "Medium", "Low"],
      description: "Manual testing program for UI/UX, functionality, and usability testing.",
      participants: 145,
      type: "manual-testing"
    },
    {
      id: 2,
      title: "FinanceSecure Penetration Testing",
      company: "SecureBank",
      logo: "🏦",
      minReward: "₹25,000",
      maxReward: "₹10,00,000",
      scope: "Banking Platform, API",
      launched: "1 week ago",
      status: "Active",
      severity: ["Critical", "High"],
      description: "Advanced penetration testing for financial platform security vulnerabilities.",
      participants: 89,
      type: "penetration-testing"
    },
    {
      id: 3,
      title: "E-Commerce Manual QA Program",
      company: "ShopSafe",
      logo: "🛒",
      minReward: "₹3,000",
      maxReward: "₹1,50,000",
      scope: "E-commerce Platform",
      launched: "3 days ago",
      status: "Active",
      severity: ["High", "Medium", "Low"],
      description: "Manual testing for user flows, checkout process, and UI functionality.",
      participants: 210,
      type: "manual-testing"
    },
    {
      id: 4,
      title: "CloudTech Infrastructure Penetration",
      company: "CloudTech Solutions",
      logo: "☁️",
      minReward: "₹15,000",
      maxReward: "₹7,50,000",
      scope: "Cloud Infrastructure, APIs",
      launched: "5 days ago",
      status: "Active",
      severity: ["Critical", "High", "Medium"],
      description: "Penetration testing for cloud infrastructure and API security.",
      participants: 67,
      type: "penetration-testing"
    },
    {
      id: 5,
      title: "HealthTech Manual Testing Suite",
      company: "MedSecure",
      logo: "🏥",
      minReward: "₹8,000",
      maxReward: "₹4,00,000",
      scope: "Healthcare Platform, Patient Data",
      launched: "1 week ago",
      status: "Active",
      severity: ["Critical", "High", "Medium"],
      description: "Manual testing for healthcare workflows, data entry, and patient management.",
      participants: 123,
      type: "manual-testing"
    },
    {
      id: 6,
      title: "EdTech Security Penetration Test",
      company: "EduSecure",
      logo: "📚",
      minReward: "₹12,000",
      maxReward: "₹5,00,000",
      scope: "Learning Platform, Student Data",
      launched: "2 weeks ago",
      status: "Active",
      severity: ["Critical", "High", "Medium"],
      description: "Penetration testing for educational platform security and student data protection.",
      participants: 54,
      type: "penetration-testing"
    },
    {
      id: 7,
      title: "Mobile App Manual Testing Program",
      company: "AppTech Solutions",
      logo: "📱",
      minReward: "₹4,000",
      maxReward: "₹2,00,000",
      scope: "Mobile Applications",
      launched: "4 days ago",
      status: "Active",
      severity: ["High", "Medium", "Low"],
      description: "Comprehensive manual testing for mobile app functionality and user experience.",
      participants: 189,
      type: "manual-testing"
    },
    {
      id: 8,
      title: "API Security Penetration Testing",
      company: "DataSecure Corp",
      logo: "🔌",
      minReward: "₹20,000",
      maxReward: "₹8,00,000",
      scope: "REST APIs, GraphQL",
      launched: "6 days ago",
      status: "Active",
      severity: ["Critical", "High"],
      description: "Advanced API penetration testing for REST and GraphQL endpoints.",
      participants: 42,
      type: "penetration-testing"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "critical": return "critical";
      case "high": return "high";
      case "medium": return "medium";
      case "low": return "low";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Bug Bounty Programs</h1>
          <p className="text-xl text-muted-foreground">
            Discover and participate in active bug bounty programs from leading companies
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search programs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-full md:w-[180px]">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Programs</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="manual-testing">Manual Testing</SelectItem>
              <SelectItem value="penetration-testing">Penetration Testing</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="reward-high">Highest Reward</SelectItem>
              <SelectItem value="reward-low">Lowest Reward</SelectItem>
              <SelectItem value="participants">Most Participants</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs
            .filter(program => {
              if (filterType !== "all" && program.type !== filterType) return false;
              if (filterStatus !== "all" && program.status.toLowerCase() !== filterStatus) return false;
              if (searchQuery && !program.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
                  !program.company.toLowerCase().includes(searchQuery.toLowerCase())) return false;
              return true;
            })
            .map((program) => (
            <Card key={program.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{program.logo}</div>
                    <div>
                      <CardTitle className="text-lg">{program.title}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Building2 className="h-4 w-4 mr-1" />
                        {program.company}
                      </div>
                    </div>
                  </div>
                  <Badge variant="secondary">{program.status}</Badge>
                </div>
               </CardHeader>

               <CardContent className="space-y-4">
                 <div className="flex items-center justify-between">
                   <p className="text-sm text-muted-foreground flex-1">{program.description}</p>
                   <Badge 
                     variant={program.type === 'manual-testing' ? 'default' : 'secondary'}
                     className="ml-2"
                   >
                     {program.type === 'manual-testing' ? 'Manual' : 'Pen Test'}
                   </Badge>
                 </div>
                 
                <div className="flex items-center text-sm">
                  <DollarSign className="h-4 w-4 mr-1 text-accent" />
                  <span className="font-medium">{program.minReward} - {program.maxReward}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {program.launched}
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-4 w-4 mr-1" />
                    {program.participants} hunters
                  </div>
                </div>

                <div className="text-sm text-muted-foreground">
                  <strong>Scope:</strong> {program.scope}
                </div>

                <div className="flex flex-wrap gap-2">
                  {program.severity.map((sev) => (
                    <Badge 
                      key={sev} 
                      variant={getSeverityColor(sev) as any}
                      className="text-xs"
                    >
                      {sev}
                    </Badge>
                  ))}
                </div>
              </CardContent>

                <CardFooter className="gap-2">
                  <Link to={`/programs/${program.id}`} className="flex-1">
                    <Button className="w-full h-9">View Details</Button>
                  </Link>
                  <div className="flex-1">
                    {program.type === 'manual-testing' ? (
                      <ManualTestingReportDialog programId={program.id.toString()} />
                    ) : (
                      <Link to={`/submit-report/${program.id}`}>
                        <Button variant="outline" className="w-full h-9">Submit Report</Button>
                      </Link>
                    )}
                  </div>
                </CardFooter>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-2">
            <Button variant="outline" disabled>Previous</Button>
            <Button variant="default">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;