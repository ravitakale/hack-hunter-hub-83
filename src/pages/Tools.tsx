import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  Shield, 
  Code, 
  FileText, 
  Wrench,
  ExternalLink,
  Star,
  Users
} from "lucide-react";

const tools = [
  {
    id: 1,
    name: "Burp Suite Community",
    description: "Free web application security testing tool",
    category: "Web Security",
    type: "Free",
    downloadUrl: "https://portswigger.net/burp/communitydownload",
    rating: 4.8,
    downloads: "10M+",
    icon: Shield
  },
  {
    id: 2,
    name: "OWASP ZAP",
    description: "Open-source web application security scanner",
    category: "Web Security", 
    type: "Free",
    downloadUrl: "https://www.zaproxy.org/download/",
    rating: 4.6,
    downloads: "5M+",
    icon: Shield
  },
  {
    id: 3,
    name: "Nmap",
    description: "Network discovery and security auditing tool",
    category: "Network",
    type: "Free",
    downloadUrl: "https://nmap.org/download.html",
    rating: 4.9,
    downloads: "15M+",
    icon: Code
  },
  {
    id: 4,
    name: "SQLMap",
    description: "Automatic SQL injection and database takeover tool",
    category: "Database",
    type: "Free", 
    downloadUrl: "https://sqlmap.org/",
    rating: 4.7,
    downloads: "2M+",
    icon: Code
  },
  {
    id: 5,
    name: "Metasploit Framework",
    description: "Penetration testing platform",
    category: "Exploitation",
    type: "Free/Pro",
    downloadUrl: "https://www.metasploit.com/download",
    rating: 4.5,
    downloads: "3M+",
    icon: Wrench
  },
  {
    id: 6,
    name: "Wireshark",
    description: "Network protocol analyzer",
    category: "Network",
    type: "Free",
    downloadUrl: "https://www.wireshark.org/download.html",
    rating: 4.8,
    downloads: "8M+",
    icon: Code
  }
];

const categories = ["All", "Web Security", "Network", "Database", "Exploitation"];

export default function Tools() {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Web Security": return "default";
      case "Network": return "secondary";
      case "Database": return "outline";
      case "Exploitation": return "destructive";
      default: return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Security Tools</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Essential tools for security researchers and bug bounty hunters
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button 
              key={category} 
              variant={category === "All" ? "default" : "outline"} 
              size="sm"
              className="h-8 px-4"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <Card key={tool.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{tool.name}</CardTitle>
                        <Badge variant={getCategoryColor(tool.category) as any} className="text-xs mt-1">
                          {tool.category}
                        </Badge>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {tool.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{tool.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{tool.downloads}</span>
                    </div>
                  </div>

                  <Button className="w-full" asChild>
                    <a href={tool.downloadUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Resources */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>Tool Guides</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Learn how to use these tools effectively with our comprehensive guides
                </p>
                <Button variant="outline" className="w-full">
                  View Guides
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="h-5 w-5 text-primary" />
                  <span>Custom Scripts</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Download custom scripts and configurations to enhance your testing
                </p>
                <Button variant="outline" className="w-full">
                  Browse Scripts
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}