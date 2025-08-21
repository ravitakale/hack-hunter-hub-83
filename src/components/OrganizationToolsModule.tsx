import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { 
  Upload, 
  Plus, 
  FileText, 
  Download, 
  Trash2,
  Eye,
  Edit,
  Shield,
  Code,
  Wrench
} from "lucide-react";

const uploadedTools = [
  {
    id: 1,
    name: "Custom Burp Suite Extension",
    description: "Custom extension for advanced web application testing",
    type: "Extension",
    size: "2.4 MB",
    uploadDate: "2024-01-15",
    downloads: 45,
    status: "Active"
  },
  {
    id: 2,
    name: "SQLMap Configuration",
    description: "Pre-configured SQLMap setup for our testing environment",
    type: "Config",
    size: "156 KB",
    uploadDate: "2024-01-12",
    downloads: 23,
    status: "Active"
  },
  {
    id: 3,
    name: "OWASP ZAP Scripts",
    description: "Collection of custom ZAP automation scripts",
    type: "Scripts",
    size: "892 KB",
    uploadDate: "2024-01-10",
    downloads: 67,
    status: "Active"
  }
];

const OrganizationToolsModule = () => {
  const [dragActive, setDragActive] = useState(false);

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'extension': return 'default';
      case 'config': return 'secondary';
      case 'scripts': return 'outline';
      default: return 'outline';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'extension': return Shield;
      case 'config': return FileText;
      case 'scripts': return Code;
      default: return Wrench;
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    handleFiles(files);
  };

  const handleFiles = (files: File[]) => {
    console.log("Files uploaded:", files);
    // Handle file upload logic here
  };

  const handleToolAction = (action: string, toolId: number, toolName: string) => {
    console.log(`${action} tool: ${toolName} (ID: ${toolId})`);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Upload className="h-5 w-5 text-primary" />
            <CardTitle>Tools Management</CardTitle>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="text-xs">
              {uploadedTools.length} Tools Uploaded
            </Badge>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Upload Tool
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        
        {/* Upload Area */}
        <div 
          className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
            dragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/25'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium mb-2">Upload Tools for Researchers</h3>
          <p className="text-muted-foreground mb-4">
            Drag and drop files here or click to browse
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Button variant="outline" onClick={() => document.getElementById('file-upload')?.click()}>
              Choose Files
            </Button>
            <input 
              id="file-upload" 
              type="file" 
              multiple 
              className="hidden" 
              onChange={handleFileInput}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Supported formats: .zip, .exe, .jar, .py, .sh, .config
          </p>
        </div>

        {/* Uploaded Tools List */}
        <div className="space-y-4">
          <h4 className="font-medium">Uploaded Tools</h4>
          <div className="space-y-3">
            {uploadedTools.map((tool) => {
              const IconComponent = getTypeIcon(tool.type);
              return (
                <Card key={tool.id} className="border">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-md bg-primary/10">
                          <IconComponent className="h-4 w-4 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <h5 className="font-medium text-sm">{tool.name}</h5>
                            <Badge variant={getTypeColor(tool.type) as any} className="text-xs">
                              {tool.type}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{tool.description}</p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span>Size: {tool.size}</span>
                            <span>Uploaded: {tool.uploadDate}</span>
                            <span>Downloads: {tool.downloads}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleToolAction('view', tool.id, tool.name)}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleToolAction('edit', tool.id, tool.name)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleToolAction('download', tool.id, tool.name)}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleToolAction('delete', tool.id, tool.name)}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
        
        {/* Tool Types Filter */}
        <div className="pt-4 border-t">
          <p className="text-sm font-medium mb-3">Filter by Type</p>
          <div className="flex flex-wrap gap-2">
            {['All', 'Extensions', 'Configs', 'Scripts', 'Exploits', 'Reports'].map((type) => (
              <Button 
                key={type} 
                variant={type === 'All' ? 'default' : 'outline'} 
                size="sm" 
                className="h-8 px-3 text-xs"
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrganizationToolsModule;