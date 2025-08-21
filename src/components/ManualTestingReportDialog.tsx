import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus, Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TestCase {
  id: string;
  scenario: string;
  steps: string;
  expectedResult: string;
  actualResult: string;
  status: 'pass' | 'fail' | 'partial' | 'blocked';
  comments: string;
}

interface Bug {
  id: string;
  description: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  status: 'open' | 'fixed' | 'rejected';
}

const ManualTestingReportDialog = ({ programId }: { programId?: string }) => {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);
  
  // Report Basic Info
  const [reportData, setReportData] = useState({
    projectName: "",
    moduleName: "",
    testerName: "",
    testDate: new Date().toISOString().split('T')[0],
    testType: "Manual Testing",
    manualTestingType: "",
    severity: "",
    environment: {
      os: "",
      browser: "",
      network: ""
    },
    objective: ""
  });

  const manualTestingTypes = [
    "Functional Testing",
    "Usability Testing", 
    "User Interface Testing",
    "Compatibility Testing",
    "Performance Testing",
    "Security Testing",
    "API Testing",
    "Database Testing",
    "Integration Testing",
    "Regression Testing",
    "Smoke Testing",
    "Exploratory Testing",
    "Ad-hoc Testing",
    "Monkey Testing",
    "Accessibility Testing"
  ];

  const severityOptions = [
    { value: "critical", label: "Critical", color: "bg-red-500" },
    { value: "high", label: "High", color: "bg-orange-500" },
    { value: "medium", label: "Medium", color: "bg-yellow-500" },
    { value: "low", label: "Low", color: "bg-green-500" }
  ];

  // Test Cases
  const [testCases, setTestCases] = useState<TestCase[]>([{
    id: "TC_001",
    scenario: "",
    steps: "",
    expectedResult: "",
    actualResult: "",
    status: 'pass',
    comments: ""
  }]);

  // Bugs
  const [bugs, setBugs] = useState<Bug[]>([]);
  const [conclusion, setConclusion] = useState("");

  const addTestCase = () => {
    const newId = `TC_${String(testCases.length + 1).padStart(3, '0')}`;
    setTestCases([...testCases, {
      id: newId,
      scenario: "",
      steps: "",
      expectedResult: "",
      actualResult: "",
      status: 'pass',
      comments: ""
    }]);
  };

  const removeTestCase = (index: number) => {
    setTestCases(testCases.filter((_, i) => i !== index));
  };

  const updateTestCase = (index: number, field: keyof TestCase, value: string) => {
    const updated = [...testCases];
    updated[index] = { ...updated[index], [field]: value };
    setTestCases(updated);
  };

  const addBug = () => {
    const newId = `BUG_${String(bugs.length + 1).padStart(3, '0')}`;
    setBugs([...bugs, {
      id: newId,
      description: "",
      severity: 'medium',
      status: 'open'
    }]);
  };

  const removeBug = (index: number) => {
    setBugs(bugs.filter((_, i) => i !== index));
  };

  const updateBug = (index: number, field: keyof Bug, value: string) => {
    const updated = [...bugs];
    updated[index] = { ...updated[index], [field]: value };
    setBugs(updated);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setAttachments([...attachments, ...files]);
  };

  const removeFile = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!reportData.projectName || !reportData.moduleName || !reportData.manualTestingType || !reportData.severity || testCases.length === 0) {
      toast({
        title: "Validation Error",
        description: "Please fill in project name, module name, manual testing type, severity level, and at least one test case.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Manual Testing Report Submitted",
      description: "Your detailed manual testing report has been submitted successfully.",
    });

    setOpen(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pass': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'fail': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'partial': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'blocked': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'high': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const summary = {
    total: testCases.length,
    passed: testCases.filter(tc => tc.status === 'pass').length,
    failed: testCases.filter(tc => tc.status === 'fail').length,
    partial: testCases.filter(tc => tc.status === 'partial').length,
    blocked: testCases.filter(tc => tc.status === 'blocked').length
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="w-full text-xs sm:text-sm px-3 py-2 h-9 flex items-center justify-center gap-2">
          <span className="truncate">Submit Report</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>✅ Manual Testing Report Submission</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">📋 Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="projectName">Project Name *</Label>
                <Input
                  id="projectName"
                  value={reportData.projectName}
                  onChange={(e) => setReportData(prev => ({ ...prev, projectName: e.target.value }))}
                  placeholder="e.g., MyApp Web Portal"
                />
              </div>
              <div>
                <Label htmlFor="moduleName">Module Name *</Label>
                <Input
                  id="moduleName"
                  value={reportData.moduleName}
                  onChange={(e) => setReportData(prev => ({ ...prev, moduleName: e.target.value }))}
                  placeholder="e.g., User Login Functionality"
                />
              </div>
              <div>
                <Label htmlFor="testerName">Tested By</Label>
                <Input
                  id="testerName"
                  value={reportData.testerName}
                  onChange={(e) => setReportData(prev => ({ ...prev, testerName: e.target.value }))}
                  placeholder="Your name"
                />
              </div>
              <div>
                <Label htmlFor="testDate">Test Date</Label>
                <Input
                  id="testDate"
                  type="date"
                  value={reportData.testDate}
                  onChange={(e) => setReportData(prev => ({ ...prev, testDate: e.target.value }))}
                />
              </div>
              <div>
                <Label>Manual Testing Type *</Label>
                <Select value={reportData.manualTestingType} onValueChange={(value) => setReportData(prev => ({ ...prev, manualTestingType: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select manual testing type" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border z-50 max-h-60 overflow-y-auto">
                    {manualTestingTypes.map((testingType) => (
                      <SelectItem key={testingType} value={testingType}>
                        {testingType}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Severity Level *</Label>
                <div className="grid grid-cols-2 gap-2">
                  {severityOptions.map((option) => (
                    <Button
                      key={option.value}
                      type="button"
                      variant={reportData.severity === option.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setReportData(prev => ({ ...prev, severity: option.value }))}
                      className="justify-start"
                    >
                      <div className={`w-3 h-3 rounded-full ${option.color} mr-2`} />
                      {option.label}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Test Environment */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🖥️ Test Environment</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="os">Operating System</Label>
                <Input
                  id="os"
                  value={reportData.environment.os}
                  onChange={(e) => setReportData(prev => ({ 
                    ...prev, 
                    environment: { ...prev.environment, os: e.target.value }
                  }))}
                  placeholder="e.g., Windows 11"
                />
              </div>
              <div>
                <Label htmlFor="browser">Browser</Label>
                <Input
                  id="browser"
                  value={reportData.environment.browser}
                  onChange={(e) => setReportData(prev => ({ 
                    ...prev, 
                    environment: { ...prev.environment, browser: e.target.value }
                  }))}
                  placeholder="e.g., Google Chrome v114"
                />
              </div>
              <div>
                <Label htmlFor="network">Network</Label>
                <Input
                  id="network"
                  value={reportData.environment.network}
                  onChange={(e) => setReportData(prev => ({ 
                    ...prev, 
                    environment: { ...prev.environment, network: e.target.value }
                  }))}
                  placeholder="e.g., Stable Internet"
                />
              </div>
            </CardContent>
          </Card>

          {/* Objective */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">🔍 Test Objective</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={reportData.objective}
                onChange={(e) => setReportData(prev => ({ ...prev, objective: e.target.value }))}
                placeholder="Describe the objective of this testing session"
                className="min-h-[80px]"
              />
            </CardContent>
          </Card>

          {/* Test Cases */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">🧪 Test Scenarios & Results</CardTitle>
              <Button type="button" onClick={addTestCase} size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Test Case
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {testCases.map((testCase, index) => (
                <Card key={index} className="border-2">
                  <CardHeader className="flex flex-row items-center justify-between py-3">
                    <Badge variant="outline">{testCase.id}</Badge>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeTestCase(index)}
                      disabled={testCases.length === 1}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label>Test Scenario</Label>
                      <Input
                        value={testCase.scenario}
                        onChange={(e) => updateTestCase(index, 'scenario', e.target.value)}
                        placeholder="e.g., Login with valid credentials"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label>Test Steps</Label>
                      <Textarea
                        value={testCase.steps}
                        onChange={(e) => updateTestCase(index, 'steps', e.target.value)}
                        placeholder="1. Open login page&#10;2. Enter credentials&#10;3. Click login"
                        className="min-h-[60px]"
                      />
                    </div>
                    <div>
                      <Label>Expected Result</Label>
                      <Textarea
                        value={testCase.expectedResult}
                        onChange={(e) => updateTestCase(index, 'expectedResult', e.target.value)}
                        placeholder="User should be redirected to dashboard"
                        className="min-h-[60px]"
                      />
                    </div>
                    <div>
                      <Label>Actual Result</Label>
                      <Textarea
                        value={testCase.actualResult}
                        onChange={(e) => updateTestCase(index, 'actualResult', e.target.value)}
                        placeholder="User redirected successfully"
                        className="min-h-[60px]"
                      />
                    </div>
                    <div>
                      <Label>Status</Label>
                      <Select value={testCase.status} onValueChange={(value) => updateTestCase(index, 'status', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-background border z-50">
                          <SelectItem value="pass">✅ Pass</SelectItem>
                          <SelectItem value="fail">❌ Fail</SelectItem>
                          <SelectItem value="partial">⚠️ Partial</SelectItem>
                          <SelectItem value="blocked">⛔ Blocked</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Comments</Label>
                      <Input
                        value={testCase.comments}
                        onChange={(e) => updateTestCase(index, 'comments', e.target.value)}
                        placeholder="Additional notes"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>

          {/* Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">📊 Test Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">{summary.total}</div>
                  <div className="text-sm text-muted-foreground">Total</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{summary.passed}</div>
                  <div className="text-sm text-muted-foreground">Passed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">{summary.failed}</div>
                  <div className="text-sm text-muted-foreground">Failed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">{summary.partial}</div>
                  <div className="text-sm text-muted-foreground">Partial</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-600">{summary.blocked}</div>
                  <div className="text-sm text-muted-foreground">Blocked</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bugs/Issues */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">🐛 Bugs/Issues Found</CardTitle>
              <Button type="button" onClick={addBug} size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Bug
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {bugs.length === 0 ? (
                <p className="text-muted-foreground text-center py-4">No bugs reported</p>
              ) : (
                bugs.map((bug, index) => (
                  <Card key={index} className="border-2">
                    <CardHeader className="flex flex-row items-center justify-between py-3">
                      <Badge variant="outline">{bug.id}</Badge>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeBug(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="md:col-span-3">
                        <Label>Bug Description</Label>
                        <Textarea
                          value={bug.description}
                          onChange={(e) => updateBug(index, 'description', e.target.value)}
                          placeholder="Describe the bug or issue"
                          className="min-h-[60px]"
                        />
                      </div>
                      <div>
                        <Label>Severity</Label>
                        <Select value={bug.severity} onValueChange={(value) => updateBug(index, 'severity', value)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-background border z-50">
                            <SelectItem value="critical">Critical</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="low">Low</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label>Status</Label>
                        <Select value={bug.status} onValueChange={(value) => updateBug(index, 'status', value)}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent className="bg-background border z-50">
                            <SelectItem value="open">Open</SelectItem>
                            <SelectItem value="fixed">Fixed</SelectItem>
                            <SelectItem value="rejected">Rejected</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </CardContent>
          </Card>

          {/* Conclusion */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">📝 Conclusion</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={conclusion}
                onChange={(e) => setConclusion(e.target.value)}
                placeholder="Overall assessment, recommendations, and final thoughts"
                className="min-h-[100px]"
              />
            </CardContent>
          </Card>

          {/* Attachments */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">📎 Attachments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Label htmlFor="file-upload" className="cursor-pointer">
                    <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-md hover:bg-muted/80 transition-colors">
                      <Upload className="h-4 w-4" />
                      <span className="text-sm">Upload Files</span>
                    </div>
                    <input
                      id="file-upload"
                      type="file"
                      multiple
                      className="hidden"
                      accept=".jpg,.jpeg,.png,.gif,.pdf,.txt,.doc,.docx,.csv,.xlsx"
                      onChange={handleFileChange}
                    />
                  </Label>
                  <span className="text-sm text-muted-foreground">
                    {attachments.length === 0 ? "No files uploaded" : `${attachments.length} file(s) uploaded`}
                  </span>
                </div>
                
                {attachments.length > 0 && (
                  <div className="space-y-2">
                    {attachments.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-muted rounded-md">
                        <span className="text-sm">{file.name}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Submit Buttons */}
          <div className="flex gap-4 pt-6">
            <Button type="submit" className="px-8">
              Submit Report
            </Button>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ManualTestingReportDialog;