import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Search, 
  Calendar, 
  DollarSign,
  Users,
  Globe,
  Shield,
  Award,
  Target,
  Clock
} from "lucide-react";

interface JoinProgramDialogProps {
  children: React.ReactNode;
}

const JoinProgramDialog = ({ children }: JoinProgramDialogProps) => {
  const programs = [
    {
      id: 1,
      name: "TechCorp Web Security",
      company: "TechCorp Inc.",
      type: "Web Application",
      reward: "500 - 5000",
      currency: "USD",
      participants: 234,
      duration: "6 months",
      difficulty: "Intermediate",
      status: "Active",
      description: "Find vulnerabilities in our main web application and API endpoints."
    },
    {
      id: 2,
      name: "FinanceApp Mobile Security",
      company: "FinanceApp Ltd.",
      type: "Mobile Application",
      reward: "1000 - 10000",
      currency: "USD",
      participants: 156,
      duration: "3 months",
      difficulty: "Advanced",
      status: "New",
      description: "Security testing for our iOS and Android banking application."
    },
    {
      id: 3,
      name: "CloudSys Infrastructure",
      company: "CloudSys Solutions",
      type: "Network Security",
      reward: "2000 - 15000",
      currency: "USD",
      participants: 89,
      duration: "12 months",
      difficulty: "Expert",
      status: "Active",
      description: "Comprehensive security assessment of cloud infrastructure."
    },
    {
      id: 4,
      name: "EcomStore Bug Bounty",
      company: "EcomStore",
      type: "Web Application",
      reward: "300 - 3000",
      currency: "USD",
      participants: 445,
      duration: "Ongoing",
      difficulty: "Beginner",
      status: "Popular",
      description: "Help secure our e-commerce platform and payment systems."
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "Intermediate":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      case "Advanced":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
      case "Expert":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
      case "Popular":
        return "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400";
      case "Active":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <div className="p-2 bg-blue-500/10 rounded-full">
              <Plus className="h-5 w-5 text-blue-600" />
            </div>
            Join New Program
          </DialogTitle>
        </DialogHeader>

        {/* Search Bar */}
        <div className="flex gap-4 mt-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search programs by company, type, or reward..."
              className="pl-10"
            />
          </div>
          <Button variant="outline">
            <Target className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {programs.map((program) => (
            <Card key={program.id} className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-1">{program.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{program.company}</p>
                  </div>
                  <Badge className={getStatusColor(program.status)}>
                    {program.status}
                  </Badge>
                </div>
                
                <div className="flex gap-2 mt-2">
                  <Badge variant="outline" className="text-xs">
                    {program.type}
                  </Badge>
                  <Badge className={getDifficultyColor(program.difficulty)}>
                    {program.difficulty}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {program.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <span className="font-semibold">${program.reward}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span>{program.participants} hunters</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>Open enrollment</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 mt-6">
                  <Button className="flex-1" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Join Program
                  </Button>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">50+</div>
            <div className="text-sm text-muted-foreground">Active Programs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">$2.5M+</div>
            <div className="text-sm text-muted-foreground">Total Rewards</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">10K+</div>
            <div className="text-sm text-muted-foreground">Security Researchers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">5K+</div>
            <div className="text-sm text-muted-foreground">Vulnerabilities Found</div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JoinProgramDialog;