import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SidebarProvider } from "@/components/ui/sidebar";
import { OrganizationSidebar } from "@/components/OrganizationSidebar";
import { OrganizationNavbar } from "@/components/OrganizationNavbar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  GraduationCap, 
  Plus, 
  Edit, 
  Trash2, 
  Users, 
  Clock,
  BookOpen,
  Play
} from "lucide-react";

const mockCourses = [
  {
    id: 1,
    title: "Web Application Security Fundamentals",
    description: "Learn the basics of web application security testing",
    modules: 8,
    students: 45,
    duration: "6 weeks",
    status: "Published",
    difficulty: "Beginner"
  },
  {
    id: 2,
    title: "Advanced Penetration Testing",
    description: "Advanced techniques for penetration testing",
    modules: 12,
    students: 28,
    duration: "10 weeks",
    status: "Draft",
    difficulty: "Advanced"
  },
  {
    id: 3,
    title: "Mobile Application Security",
    description: "Security testing for mobile applications",
    modules: 6,
    students: 32,
    duration: "4 weeks",
    status: "Published",
    difficulty: "Intermediate"
  }
];

const mockModules = [
  { id: 1, title: "Introduction to SQL Injection", duration: "45 min", type: "Video" },
  { id: 2, title: "XSS Prevention Techniques", duration: "30 min", type: "Interactive" },
  { id: 3, title: "CSRF Attack Vectors", duration: "60 min", type: "Lab" },
];

export default function OrganizationCourses() {
  const [courses, setCourses] = useState(mockCourses);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [showAddCourse, setShowAddCourse] = useState(false);
  const [showAddModule, setShowAddModule] = useState(false);

  const getStatusColor = (status: string) => {
    return status === 'Published' ? 'default' : 'secondary';
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'default';
      case 'Intermediate': return 'secondary';
      case 'Advanced': return 'destructive';
      default: return 'secondary';
    }
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
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold">Course Management</h1>
                  <p className="text-muted-foreground">
                    Create and manage security training courses
                  </p>
                </div>
                <Dialog open={showAddCourse} onOpenChange={setShowAddCourse}>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Create Course
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Create New Course</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="title">Course Title</Label>
                        <Input id="title" placeholder="Enter course title" />
                      </div>
                      <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" placeholder="Course description" />
                      </div>
                      <div>
                        <Label htmlFor="difficulty">Difficulty Level</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select difficulty" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="duration">Duration</Label>
                        <Input id="duration" placeholder="e.g., 6 weeks" />
                      </div>
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" onClick={() => setShowAddCourse(false)}>
                          Cancel
                        </Button>
                        <Button onClick={() => setShowAddCourse(false)}>
                          Create Course
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Courses Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <Card key={course.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="space-y-2">
                          <CardTitle className="text-lg">{course.title}</CardTitle>
                          <div className="flex space-x-2">
                            <Badge variant={getStatusColor(course.status)}>
                              {course.status}
                            </Badge>
                            <Badge variant={getDifficultyColor(course.difficulty)}>
                              {course.difficulty}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {course.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
                          {course.modules} modules
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                          {course.students} students
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                          {course.duration}
                        </div>
                        <div className="flex items-center">
                          <GraduationCap className="h-4 w-4 mr-2 text-muted-foreground" />
                          Course
                        </div>
                      </div>

                      <div className="mt-4 space-y-2">
                        <Button 
                          className="w-full" 
                          variant="outline"
                          onClick={() => setSelectedCourse(course)}
                        >
                          <Play className="h-4 w-4 mr-2" />
                          Manage Modules
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Module Management Dialog */}
              <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
                <DialogContent className="max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>Manage Modules - {selectedCourse?.title}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">Course Modules</h3>
                      <Dialog open={showAddModule} onOpenChange={setShowAddModule}>
                        <DialogTrigger asChild>
                          <Button size="sm">
                            <Plus className="h-4 w-4 mr-2" />
                            Add Module
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>Add New Module</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="module-title">Module Title</Label>
                              <Input id="module-title" placeholder="Enter module title" />
                            </div>
                            <div>
                              <Label htmlFor="module-type">Module Type</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="video">Video</SelectItem>
                                  <SelectItem value="interactive">Interactive</SelectItem>
                                  <SelectItem value="lab">Lab</SelectItem>
                                  <SelectItem value="quiz">Quiz</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="module-duration">Duration</Label>
                              <Input id="module-duration" placeholder="e.g., 45 min" />
                            </div>
                            <div className="flex justify-end space-x-2">
                              <Button variant="outline" onClick={() => setShowAddModule(false)}>
                                Cancel
                              </Button>
                              <Button onClick={() => setShowAddModule(false)}>
                                Add Module
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>

                    <div className="space-y-3">
                      {mockModules.map((module, index) => (
                        <div key={module.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <span className="text-sm font-medium">{index + 1}.</span>
                            <div>
                              <p className="font-medium">{module.title}</p>
                              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <span>{module.type}</span>
                                <span>•</span>
                                <span>{module.duration}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-1">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}