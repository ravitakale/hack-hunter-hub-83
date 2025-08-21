import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { SidebarProvider } from "@/components/ui/sidebar";
import { OrganizationSidebar } from "@/components/OrganizationSidebar";
import { OrganizationNavbar } from "@/components/OrganizationNavbar";
import { 
  Plus, 
  Search,
  Eye,
  Edit,
  Calendar,
  FileText,
  Building2
} from "lucide-react";

const mockPrograms = [
  {
    id: 1,
    name: "Web Application Security",
    description: "Comprehensive security testing for our main web application",
    status: "Public",
    reportsCount: 45,
    createdOn: "2024-01-15",
    logo: null
  },
  {
    id: 2,
    name: "Mobile App Testing", 
    description: "Security assessment for iOS and Android applications",
    status: "Private",
    reportsCount: 32,
    createdOn: "2024-02-10",
    logo: null
  },
  {
    id: 3,
    name: "API Security Assessment",
    description: "Testing REST and GraphQL API endpoints for vulnerabilities",
    status: "Public", 
    reportsCount: 28,
    createdOn: "2024-02-20",
    logo: null
  },
  {
    id: 4,
    name: "Infrastructure Security",
    description: "Network and server security evaluation",
    status: "Private",
    reportsCount: 15,
    createdOn: "2024-03-01",
    logo: null
  },
  {
    id: 5,
    name: "Cloud Security Review",
    description: "AWS cloud infrastructure security assessment",
    status: "Public",
    reportsCount: 22,
    createdOn: "2024-03-15", 
    logo: null
  }
];

export default function OrganizationPrograms() {
  const [searchTerm, setSearchTerm] = useState("");
  const [programs] = useState(mockPrograms);
  const navigate = useNavigate();

  const filteredPrograms = programs.filter(program =>
    program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    program.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                  <h1 className="text-3xl font-bold">My Programs</h1>
                  <p className="text-muted-foreground">
                    Manage your bug bounty programs
                  </p>
                </div>
                <Button onClick={() => navigate("/org-program/create")}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Program
                </Button>
              </div>

              {/* Search */}
              <div className="flex items-center space-x-2">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search programs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Programs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPrograms.map((program) => (
                  <Card key={program.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="h-12 w-12 bg-muted rounded-lg flex items-center justify-center">
                            <Building2 className="h-6 w-6 text-muted-foreground" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-lg">{program.name}</CardTitle>
                            <Badge variant={program.status === 'Public' ? 'default' : 'secondary'}>
                              {program.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        {program.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span>{program.reportsCount} reports</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{new Date(program.createdOn).toLocaleDateString()}</span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => navigate(`/org-program/${program.id}/view`)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => navigate(`/org-program/${program.id}/edit`)}
                        >
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredPrograms.length === 0 && (
                <div className="text-center py-12">
                  <Building2 className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium">No programs found</h3>
                  <p className="text-muted-foreground mb-4">
                    {searchTerm ? "No programs match your search." : "You haven't created any programs yet."}
                  </p>
                  {!searchTerm && (
                    <Button onClick={() => navigate("/org-program/create")}>
                      <Plus className="h-4 w-4 mr-2" />
                      Create Your First Program
                    </Button>
                  )}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}