import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { OrganizationSidebar } from "@/components/OrganizationSidebar";
import { OrganizationNavbar } from "@/components/OrganizationNavbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { 
  UserPlus, 
  Mail, 
  MessageSquare, 
  FolderOpen, 
  Send, 
  Plus,
  X,
  Users,
  Target,
  Award,
  Clock
} from "lucide-react";

const mockPrograms = [
  { id: "1", name: "Web Application Security", status: "active", bounty: "$500-$5000" },
  { id: "2", name: "Mobile App Testing", status: "active", bounty: "$300-$3000" },
  { id: "3", name: "API Security Assessment", status: "paused", bounty: "$200-$2000" },
  { id: "4", name: "Infrastructure Testing", status: "active", bounty: "$1000-$10000" },
];

const researcherSkills = [
  "Web Application Security",
  "Mobile Security", 
  "API Testing",
  "Network Security",
  "Cloud Security",
  "IoT Security",
  "Cryptocurrency",
  "Social Engineering",
  "Physical Security",
  "Reverse Engineering"
];

export default function OrganizationInviteResearcher() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
    selectedPrograms: [] as string[],
    inviteType: "program", // "program" or "general"
    requiredSkills: [] as string[],
    deadline: "",
    priority: "medium"
  });
  const [skillInput, setSkillInput] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email) {
      toast({
        title: "Email Required",
        description: "Please enter a researcher email address.",
        variant: "destructive"
      });
      return;
    }

    if (formData.inviteType === "program" && formData.selectedPrograms.length === 0) {
      toast({
        title: "Program Selection Required",
        description: "Please select at least one program for the invitation.",
        variant: "destructive"
      });
      return;
    }

    // Simulate API call
    toast({
      title: "Invitation Sent!",
      description: `Researcher invitation sent to ${formData.email} successfully.`,
    });

    // Reset form
    setFormData({
      email: "",
      message: "",
      selectedPrograms: [],
      inviteType: "program",
      requiredSkills: [],
      deadline: "",
      priority: "medium"
    });
  };

  const toggleProgram = (programId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedPrograms: prev.selectedPrograms.includes(programId)
        ? prev.selectedPrograms.filter(id => id !== programId)
        : [...prev.selectedPrograms, programId]
    }));
  };

  const addSkill = () => {
    if (skillInput.trim() && !formData.requiredSkills.includes(skillInput.trim())) {
      setFormData(prev => ({
        ...prev,
        requiredSkills: [...prev.requiredSkills, skillInput.trim()]
      }));
      setSkillInput("");
    }
  };

  const removeSkill = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      requiredSkills: prev.requiredSkills.filter(s => s !== skill)
    }));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "secondary";
      case "low": return "outline";
      default: return "secondary";
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <OrganizationSidebar />
        <div className="flex-1">
          <OrganizationNavbar />
          <main className="p-6">
            <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
              {/* Header */}
              <div className="space-y-2 animate-fade-in-down">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg hover-scale animate-float">
                    <UserPlus className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold">Invite Researcher</h1>
                    <p className="text-muted-foreground">
                      Invite security researchers to participate in your bug bounty programs
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Main Form */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Invitation Type */}
                    <Card className="hover-lift animate-fade-in-left">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Target className="h-5 w-5 animate-bounce-gentle" />
                          <span>Invitation Type</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 stagger-animation">
                          <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, inviteType: "program" }))}
                            className={`p-4 border-2 rounded-lg text-left transition-all duration-300 hover-lift button-press ${
                              formData.inviteType === "program" 
                                ? "border-primary bg-primary/5 animate-glow" 
                                : "border-border hover:border-primary/50"
                            }`}
                            style={{"--stagger": "0"} as React.CSSProperties}
                          >
                            <FolderOpen className="h-6 w-6 mb-2 text-primary animate-bounce-gentle" />
                            <h3 className="font-semibold">Program Specific</h3>
                            <p className="text-sm text-muted-foreground">
                              Invite to specific programs
                            </p>
                          </button>
                          <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, inviteType: "general" }))}
                            className={`p-4 border-2 rounded-lg text-left transition-all duration-300 hover-lift button-press ${
                              formData.inviteType === "general" 
                                ? "border-primary bg-primary/5 animate-glow" 
                                : "border-border hover:border-primary/50"
                            }`}
                            style={{"--stagger": "1"} as React.CSSProperties}
                          >
                            <Users className="h-6 w-6 mb-2 text-primary animate-bounce-gentle" />
                            <h3 className="font-semibold">General Invitation</h3>
                            <p className="text-sm text-muted-foreground">
                              Join organization network
                            </p>
                          </button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Contact Information */}
                    <Card className="hover-lift animate-fade-in-right">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Mail className="h-5 w-5 text-primary animate-bounce-gentle" />
                          <span>Contact Information</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Label htmlFor="email">Researcher Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="researcher@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            className="mt-1 transition-all duration-300 focus:scale-105"
                            required
                          />
                        </div>
                      </CardContent>
                    </Card>

                    {/* Program Selection */}
                    {formData.inviteType === "program" && (
                      <Card className="hover-lift animate-scale-in">
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <FolderOpen className="h-5 w-5 text-primary animate-bounce-gentle" />
                            <span>Select Programs</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 stagger-animation">
                            {mockPrograms.map((program, index) => (
                              <div
                                key={program.id}
                                onClick={() => toggleProgram(program.id)}
                                className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 hover-lift button-press ${
                                  formData.selectedPrograms.includes(program.id)
                                    ? "border-primary bg-primary/5 animate-glow"
                                    : "border-border hover:border-primary/50"
                                } ${program.status === "paused" ? "opacity-60" : ""}`}
                                style={{"--stagger": index.toString()} as React.CSSProperties}
                              >
                                <div className="flex justify-between items-start mb-2">
                                  <h4 className="font-medium">{program.name}</h4>
                                  <Badge 
                                    variant={program.status === "active" ? "default" : "secondary"}
                                    className="animate-bounce-gentle"
                                  >
                                    {program.status}
                                  </Badge>
                                </div>
                                <div className="flex items-center text-sm text-muted-foreground">
                                  <Award className="h-4 w-4 mr-1 animate-bounce-gentle" />
                                  {program.bounty}
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* Message */}
                    <Card className="hover-lift animate-fade-in-left">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <MessageSquare className="h-5 w-5 text-primary animate-bounce-gentle" />
                          <span>Invitation Message</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Textarea
                          placeholder="Write a personalized message to the researcher..."
                          value={formData.message}
                          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                          rows={4}
                          className="resize-none transition-all duration-300 focus:scale-105"
                        />
                        <p className="text-xs text-muted-foreground mt-2">
                          Optional: Add a personal note to make your invitation more compelling
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6 animate-fade-in-right">
                    {/* Priority & Deadline */}
                    <Card className="hover-lift">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Clock className="h-5 w-5 text-primary animate-bounce-gentle" />
                          <span>Invitation Details</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Label htmlFor="priority">Priority</Label>
                          <Select
                            value={formData.priority}
                            onValueChange={(value) => setFormData(prev => ({ ...prev, priority: value }))}
                          >
                            <SelectTrigger className="mt-1 transition-all duration-300 hover:border-primary/50">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="high">High Priority</SelectItem>
                              <SelectItem value="medium">Medium Priority</SelectItem>
                              <SelectItem value="low">Low Priority</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="deadline">Response Deadline</Label>
                          <Input
                            id="deadline"
                            type="date"
                            value={formData.deadline}
                            onChange={(e) => setFormData(prev => ({ ...prev, deadline: e.target.value }))}
                            className="mt-1 transition-all duration-300 focus:scale-105"
                          />
                        </div>
                      </CardContent>
                    </Card>

                    {/* Required Skills */}
                    <Card className="hover-lift">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Users className="h-5 w-5 text-primary animate-bounce-gentle" />
                          <span>Required Skills</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex space-x-2">
                          <Select
                            value={skillInput}
                            onValueChange={setSkillInput}
                          >
                            <SelectTrigger className="flex-1 transition-all duration-300 hover:border-primary/50">
                              <SelectValue placeholder="Select skill" />
                            </SelectTrigger>
                            <SelectContent>
                              {researcherSkills.map((skill) => (
                                <SelectItem key={skill} value={skill}>
                                  {skill}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={addSkill}
                            disabled={!skillInput}
                            className="hover-scale button-press"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>

                        {formData.requiredSkills.length > 0 && (
                          <div className="space-y-2 animate-fade-in">
                            <Label className="text-sm font-medium">Selected Skills:</Label>
                            <div className="flex flex-wrap gap-2 stagger-animation">
                              {formData.requiredSkills.map((skill, index) => (
                                <Badge 
                                  key={skill} 
                                  variant="secondary" 
                                  className="flex items-center space-x-1 hover-scale animate-scale-in"
                                  style={{"--stagger": index.toString()} as React.CSSProperties}
                                >
                                  <span>{skill}</span>
                                  <button
                                    type="button"
                                    onClick={() => removeSkill(skill)}
                                    className="ml-1 hover:text-destructive transition-colors duration-200"
                                  >
                                    <X className="h-3 w-3" />
                                  </button>
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    {/* Summary */}
                    <Card className="hover-lift animate-scale-in">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Send className="h-5 w-5 text-primary animate-bounce-gentle" />
                          <span>Invitation Summary</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Type:</span>
                          <Badge variant="outline" className="animate-pulse">
                            {formData.inviteType === "program" ? "Program Specific" : "General"}
                          </Badge>
                        </div>
                        
                        {formData.inviteType === "program" && (
                          <div className="flex justify-between text-sm animate-fade-in">
                            <span className="text-muted-foreground">Programs:</span>
                            <span className="font-medium animate-bounce-gentle">{formData.selectedPrograms.length}</span>
                          </div>
                        )}
                        
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Priority:</span>
                          <Badge variant={getPriorityColor(formData.priority)} className="animate-pulse">
                            {formData.priority}
                          </Badge>
                        </div>
                        
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Skills:</span>
                          <span className="font-medium animate-bounce-gentle">{formData.requiredSkills.length}</span>
                        </div>

                        <Separator className="animate-fade-in" />
                        
                        <Button 
                          type="submit" 
                          className="w-full hover-scale button-press animate-glow" 
                          size="lg"
                        >
                          <Send className="h-4 w-4 mr-2 animate-bounce-gentle" />
                          Send Invitation
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}