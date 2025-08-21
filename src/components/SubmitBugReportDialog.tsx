import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  FileText, 
  AlertTriangle, 
  Upload,
  Bug,
  Shield,
  Globe,
  Server
} from "lucide-react";

interface SubmitBugReportDialogProps {
  children: React.ReactNode;
}

const SubmitBugReportDialog = ({ children }: SubmitBugReportDialogProps) => {
  const [severity, setSeverity] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState("");

  const severityOptions = [
    { value: "critical", label: "Critical", color: "bg-red-500" },
    { value: "high", label: "High", color: "bg-orange-500" },
    { value: "medium", label: "Medium", color: "bg-yellow-500" },
    { value: "low", label: "Low", color: "bg-green-500" }
  ];

  const categoryOptions = [
    { value: "web", label: "Web Application", icon: Globe },
    { value: "mobile", label: "Mobile Application", icon: Shield },
    { value: "network", label: "Network Infrastructure", icon: Server },
    { value: "api", label: "API Security", icon: Bug }
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <div className="p-2 bg-red-500/10 rounded-full">
              <FileText className="h-5 w-5 text-red-600" />
            </div>
            Submit Bug Report
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Vulnerability Title</Label>
              <Input
                id="title"
                placeholder="Brief description of the vulnerability"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Severity Level</Label>
              <div className="grid grid-cols-2 gap-2">
                {severityOptions.map((option) => (
                  <Button
                    key={option.value}
                    variant={severity === option.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSeverity(option.value)}
                    className="justify-start"
                  >
                    <div className={`w-3 h-3 rounded-full ${option.color} mr-2`} />
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select vulnerability category" />
                </SelectTrigger>
                <SelectContent className="bg-background border z-50">
                  {categoryOptions.map((option) => {
                    const IconComponent = option.icon;
                    return (
                      <SelectItem key={option.value} value={option.value}>
                        <div className="flex items-center gap-2">
                          <IconComponent className="h-4 w-4" />
                          {option.label}
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="description">Detailed Description</Label>
              <Textarea
                id="description"
                placeholder="Provide detailed information about the vulnerability..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="min-h-20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="steps">Steps to Reproduce</Label>
              <Textarea
                id="steps"
                placeholder="1. Navigate to...&#10;2. Enter malicious payload...&#10;3. Observe the response..."
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
                className="min-h-20"
              />
            </div>

            <div className="space-y-2">
              <Label>Proof of Concept</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
                <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-600">Click to upload screenshots, videos, or files</p>
                <p className="text-xs text-gray-400 mt-1">Max file size: 10MB</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Summary */}
        <Card className="p-4 bg-gray-50 dark:bg-gray-900/20">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            Report Summary
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Severity:</span>
              <p className="font-semibold capitalize">{severity || "Not selected"}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Category:</span>
              <p className="font-semibold">{categoryOptions.find(c => c.value === category)?.label || "Not selected"}</p>
            </div>
          </div>
        </Card>

        <div className="flex gap-3 mt-6">
          <Button className="flex-1" disabled={!title || !severity || !category || !description}>
            <FileText className="h-4 w-4 mr-2" />
            Submit Report
          </Button>
          <Button variant="outline">
            Save Draft
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubmitBugReportDialog;