import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { SidebarProvider } from "@/components/ui/sidebar";
import { OrganizationSidebar } from "@/components/OrganizationSidebar";
import { OrganizationNavbar } from "@/components/OrganizationNavbar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Save,
  X,
  Plus,
  Trash2,
  Building2,
  Globe,
  Lock
} from "lucide-react";

// Mock data - in real app this would come from API
const mockProgram = {
  id: 1,
  name: "Web Application Security",
  description: "Comprehensive security testing for our main web application platform. We're looking for security researchers to help identify vulnerabilities in our core web application that serves millions of users daily.",
  status: "Public",
  scope: [
    "Main web application (app.company.com)",
    "API endpoints (api.company.com)",
    "Authentication system",
    "Payment processing"
  ],
  outOfScope: [
    "Third-party integrations",
    "Social engineering attacks",
    "Physical security",
    "DDoS attacks"
  ],
  rewardRange: {
    min: "5000",
    max: "250000"
  },
  severityRewards: {
    low: { min: "5000", max: "15000" },
    medium: { min: "15000", max: "50000" },
    high: { min: "50000", max: "150000" },
    critical: { min: "150000", max: "250000" }
  },
  guidelines: [
    "Provide clear steps to reproduce",
    "Include proof of concept when possible",
    "Do not access or modify user data",
    "Report responsibly and allow time for fixes"
  ],
  contacts: {
    security: "security@company.com",
    program: "bugbounty@company.com"
  }
};

export default function OrganizationProgramEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState(mockProgram);
  const [newScopeItem, setNewScopeItem] = useState("");
  const [newOutOfScopeItem, setNewOutOfScopeItem] = useState("");
  const [newGuideline, setNewGuideline] = useState("");

  const handleSave = () => {
    // In real app, this would make an API call
    toast({
      title: "Program Updated",
      description: "Your program has been successfully updated.",
    });
    navigate(`/org-program/${id}/view`);
  };

  const addScopeItem = () => {
    if (newScopeItem.trim()) {
      setFormData(prev => ({
        ...prev,
        scope: [...prev.scope, newScopeItem.trim()]
      }));
      setNewScopeItem("");
    }
  };

  const removeScopeItem = (index: number) => {
    setFormData(prev => ({
      ...prev,
      scope: prev.scope.filter((_, i) => i !== index)
    }));
  };

  const addOutOfScopeItem = () => {
    if (newOutOfScopeItem.trim()) {
      setFormData(prev => ({
        ...prev,
        outOfScope: [...prev.outOfScope, newOutOfScopeItem.trim()]
      }));
      setNewOutOfScopeItem("");
    }
  };

  const removeOutOfScopeItem = (index: number) => {
    setFormData(prev => ({
      ...prev,
      outOfScope: prev.outOfScope.filter((_, i) => i !== index)
    }));
  };

  const addGuideline = () => {
    if (newGuideline.trim()) {
      setFormData(prev => ({
        ...prev,
        guidelines: [...prev.guidelines, newGuideline.trim()]
      }));
      setNewGuideline("");
    }
  };

  const removeGuideline = (index: number) => {
    setFormData(prev => ({
      ...prev,
      guidelines: prev.guidelines.filter((_, i) => i !== index)
    }));
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <OrganizationSidebar />
        
        <div className="flex-1 flex flex-col">
          <OrganizationNavbar />
          
          <main className="flex-1 p-6">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="ghost"
                    onClick={() => navigate(`/org-program/${id}/view`)}
                    className="text-muted-foreground"
                  >
                    ← Back to Program
                  </Button>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => navigate(`/org-program/${id}/view`)}
                  >
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                  <Button onClick={handleSave}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </div>

              {/* Program Header */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="h-16 w-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center">
                        <Building2 className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <Label htmlFor="program-name">Program Name</Label>
                        <Input
                          id="program-name"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          className="text-xl font-semibold mt-1"
                        />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="program-description">Description</Label>
                    <Textarea
                      id="program-description"
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      rows={4}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="program-status">Program Status</Label>
                    <Select
                      value={formData.status}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, status: value }))}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Public">
                          <div className="flex items-center space-x-2">
                            <Globe className="h-4 w-4" />
                            <span>Public</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="Private">
                          <div className="flex items-center space-x-2">
                            <Lock className="h-4 w-4" />
                            <span>Private</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Scope */}
                <Card>
                  <CardHeader>
                    <CardTitle>In Scope</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {formData.scope.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-2 border rounded-lg">
                        <span className="text-sm">{item}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeScopeItem(index)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Add scope item..."
                        value={newScopeItem}
                        onChange={(e) => setNewScopeItem(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && addScopeItem()}
                      />
                      <Button onClick={addScopeItem} size="sm">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Out of Scope */}
                <Card>
                  <CardHeader>
                    <CardTitle>Out of Scope</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {formData.outOfScope.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-2 border rounded-lg">
                        <span className="text-sm">{item}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeOutOfScopeItem(index)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <div className="flex space-x-2">
                      <Input
                        placeholder="Add out of scope item..."
                        value={newOutOfScopeItem}
                        onChange={(e) => setNewOutOfScopeItem(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && addOutOfScopeItem()}
                      />
                      <Button onClick={addOutOfScopeItem} size="sm">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Rewards */}
              <Card>
                <CardHeader>
                  <CardTitle>Reward Structure (₹)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['critical', 'high', 'medium', 'low'].map((severity) => (
                      <div key={severity} className="space-y-2">
                        <Label className="capitalize">{severity}</Label>
                        <div className="flex space-x-2">
                          <Input
                            placeholder="Min"
                            value={formData.severityRewards[severity as keyof typeof formData.severityRewards].min}
                            onChange={(e) => setFormData(prev => ({
                              ...prev,
                              severityRewards: {
                                ...prev.severityRewards,
                                [severity]: {
                                  ...prev.severityRewards[severity as keyof typeof prev.severityRewards],
                                  min: e.target.value
                                }
                              }
                            }))}
                          />
                          <Input
                            placeholder="Max"
                            value={formData.severityRewards[severity as keyof typeof formData.severityRewards].max}
                            onChange={(e) => setFormData(prev => ({
                              ...prev,
                              severityRewards: {
                                ...prev.severityRewards,
                                [severity]: {
                                  ...prev.severityRewards[severity as keyof typeof prev.severityRewards],
                                  max: e.target.value
                                }
                              }
                            }))}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Guidelines */}
              <Card>
                <CardHeader>
                  <CardTitle>Submission Guidelines</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {formData.guidelines.map((guideline, index) => (
                    <div key={index} className="flex items-center justify-between p-2 border rounded-lg">
                      <span className="text-sm">{guideline}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeGuideline(index)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Add guideline..."
                      value={newGuideline}
                      onChange={(e) => setNewGuideline(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addGuideline()}
                    />
                    <Button onClick={addGuideline} size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="security-email">Security Team Email</Label>
                      <Input
                        id="security-email"
                        type="email"
                        value={formData.contacts.security}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          contacts: { ...prev.contacts, security: e.target.value }
                        }))}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="program-email">Bug Bounty Program Email</Label>
                      <Input
                        id="program-email"
                        type="email"
                        value={formData.contacts.program}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          contacts: { ...prev.contacts, program: e.target.value }
                        }))}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}