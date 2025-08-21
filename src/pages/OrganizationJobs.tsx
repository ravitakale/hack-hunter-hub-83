import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { OrganizationSidebar } from "@/components/OrganizationSidebar";
import { OrganizationNavbar } from "@/components/OrganizationNavbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Plus, Edit, Eye, Trash2, MapPin, DollarSign, Clock, Users } from "lucide-react";
import { ViewApplicantsDialog } from "@/components/ViewApplicantsDialog";

const jobSchema = z.object({
  title: z.string().min(2, "Job title must be at least 2 characters"),
  description: z.string().min(50, "Description must be at least 50 characters"),
  requirements: z.string().min(20, "Requirements must be at least 20 characters"),
  location: z.string().min(2, "Location is required"),
  type: z.enum(["full-time", "part-time", "contract", "remote"]).refine(val => val !== undefined, {
    message: "Please select a job type",
  }),
  experience: z.enum(["entry", "mid", "senior", "lead"]).refine(val => val !== undefined, {
    message: "Please select experience level",
  }),
  salary: z.string().min(1, "Salary range is required"),
  skills: z.string().min(5, "Skills are required"),
});

type JobFormData = z.infer<typeof jobSchema>;

interface Job extends JobFormData {
  id: string;
  status: 'active' | 'draft' | 'closed';
  applicants: number;
  postedDate: string;
}

// Mock data for existing jobs
const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior Security Engineer",
    description: "We're looking for an experienced security engineer to join our team and help build secure systems.",
    requirements: "5+ years of security experience, knowledge of OWASP Top 10, experience with penetration testing",
    location: "San Francisco, CA",
    type: "full-time",
    experience: "senior",
    salary: "$120,000 - $150,000",
    skills: "Security, Penetration Testing, OWASP, Python",
    status: "active",
    applicants: 12,
    postedDate: "2024-01-15",
  },
  {
    id: "2", 
    title: "Bug Bounty Hunter",
    description: "Join our security team as a professional bug bounty hunter to identify vulnerabilities in our systems.",
    requirements: "3+ years of bug bounty experience, strong knowledge of web application security",
    location: "Remote",
    type: "contract",
    experience: "mid",
    salary: "$80,000 - $100,000",
    skills: "Bug Bounty, Web Security, Vulnerability Assessment",
    status: "active",
    applicants: 8,
    postedDate: "2024-01-10",
  }
];

const OrganizationJobs = () => {
  const [jobs, setJobs] = useState<Job[]>(mockJobs);
  const [isCreating, setIsCreating] = useState(false);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [viewingApplicants, setViewingApplicants] = useState<Job | null>(null);
  const { toast } = useToast();

  const form = useForm<JobFormData>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      title: "",
      description: "",
      requirements: "",
      location: "",
      type: undefined,
      experience: undefined,
      salary: "",
      skills: "",
    },
  });

  const onSubmit = async (data: JobFormData) => {
    try {
      if (editingJob) {
        // Update existing job
        setJobs(jobs.map(job => 
          job.id === editingJob.id 
            ? { ...job, ...data }
            : job
        ));
        toast({
          title: "Job Updated!",
          description: "The job posting has been updated successfully.",
        });
        setEditingJob(null);
      } else {
        // Create new job
        const newJob: Job = {
          ...data,
          id: Date.now().toString(),
          status: 'draft',
          applicants: 0,
          postedDate: new Date().toISOString().split('T')[0],
        };
        setJobs([newJob, ...jobs]);
        toast({
          title: "Job Created!",
          description: "New job posting has been created successfully.",
        });
      }
      
      form.reset();
      setIsCreating(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (job: Job) => {
    setEditingJob(job);
    setIsCreating(true);
    form.reset(job);
  };

  const handleDelete = (jobId: string) => {
    setJobs(jobs.filter(job => job.id !== jobId));
    toast({
      title: "Job Deleted",
      description: "The job posting has been removed.",
    });
  };

  const toggleJobStatus = (jobId: string) => {
    setJobs(jobs.map(job => 
      job.id === jobId 
        ? { ...job, status: job.status === 'active' ? 'draft' : 'active' }
        : job
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'draft': return 'bg-yellow-500';
      case 'closed': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'full-time': return 'Full Time';
      case 'part-time': return 'Part Time';
      case 'contract': return 'Contract';
      case 'remote': return 'Remote';
      default: return type;
    }
  };

  const getExperienceLabel = (experience: string) => {
    switch (experience) {
      case 'entry': return 'Entry Level';
      case 'mid': return 'Mid Level';
      case 'senior': return 'Senior Level';
      case 'lead': return 'Lead Level';
      default: return experience;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <OrganizationSidebar />
        <div className="flex-1 flex flex-col">
          <OrganizationNavbar />
          
          <main className="flex-1 p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Job Postings</h1>
                <p className="text-muted-foreground">Manage your organization's job postings</p>
              </div>
              
              <Button 
                onClick={() => {
                  setIsCreating(!isCreating);
                  setEditingJob(null);
                  form.reset();
                }}
                className="bg-gradient-to-r from-primary to-primary-hover"
              >
                <Plus className="h-4 w-4 mr-2" />
                {isCreating ? 'Cancel' : 'Create Job'}
              </Button>
            </div>

            {isCreating && (
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {editingJob ? 'Edit Job Posting' : 'Create New Job Posting'}
                  </CardTitle>
                  <CardDescription>
                    Fill in the details to {editingJob ? 'update' : 'create'} a job posting
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="title"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Job Title</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., Senior Security Engineer" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="location"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Location</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., San Francisco, CA or Remote" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="type"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Job Type</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select job type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="full-time">Full Time</SelectItem>
                                  <SelectItem value="part-time">Part Time</SelectItem>
                                  <SelectItem value="contract">Contract</SelectItem>
                                  <SelectItem value="remote">Remote</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="experience"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Experience Level</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select experience level" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="entry">Entry Level</SelectItem>
                                  <SelectItem value="mid">Mid Level</SelectItem>
                                  <SelectItem value="senior">Senior Level</SelectItem>
                                  <SelectItem value="lead">Lead Level</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="salary"
                          render={({ field }) => (
                            <FormItem className="md:col-span-2">
                              <FormLabel>Salary Range</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., $80,000 - $120,000" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="skills"
                          render={({ field }) => (
                            <FormItem className="md:col-span-2">
                              <FormLabel>Required Skills</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g., Security, Penetration Testing, Python, OWASP" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Job Description</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Describe the role, responsibilities, and what makes this position exciting..."
                                className="min-h-[100px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="requirements"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Requirements & Qualifications</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="List the required qualifications, experience, and skills..."
                                className="min-h-[80px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex gap-3 pt-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setIsCreating(false);
                            setEditingJob(null);
                            form.reset();
                          }}
                        >
                          Cancel
                        </Button>
                        <Button type="submit" className="bg-gradient-to-r from-primary to-primary-hover">
                          {editingJob ? 'Update Job' : 'Create Job'}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            )}

            <div className="grid gap-4">
              <h2 className="text-lg font-semibold">Current Job Postings ({jobs.length})</h2>
              
              {jobs.length === 0 ? (
                <Card className="p-8 text-center">
                  <div className="space-y-3">
                    <Users className="h-12 w-12 text-muted-foreground mx-auto" />
                    <h3 className="text-lg font-medium">No job postings yet</h3>
                    <p className="text-muted-foreground">Create your first job posting to start hiring talent.</p>
                  </div>
                </Card>
              ) : (
                <div className="space-y-4">
                  {jobs.map((job) => (
                    <Card key={job.id} className="hover:shadow-lg transition-shadow duration-200">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 space-y-3">
                            <div className="flex items-center gap-3 flex-wrap">
                              <h3 className="text-lg font-semibold">{job.title}</h3>
                              <Badge className={`${getStatusColor(job.status)} text-white`}>
                                {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                              </Badge>
                              <Badge variant="outline">{getTypeLabel(job.type)}</Badge>
                              <Badge variant="outline">{getExperienceLabel(job.experience)}</Badge>
                            </div>
                            
                            <div className="flex items-center gap-6 text-sm text-muted-foreground flex-wrap">
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {job.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <DollarSign className="h-4 w-4" />
                                {job.salary}
                              </div>
                              <div className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                {job.applicants} applicants
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                Posted {job.postedDate}
                              </div>
                            </div>
                            
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {job.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                              {job.skills.split(',').map((skill, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {skill.trim()}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex gap-2 ml-4">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setViewingApplicants(job)}
                              title="View Applicants"
                            >
                              <Users className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => toggleJobStatus(job.id)}
                              title="Toggle Status"
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleEdit(job)}
                              title="Edit Job"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDelete(job.id)}
                              className="text-destructive hover:text-destructive"
                              title="Delete Job"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>

      <ViewApplicantsDialog
        isOpen={!!viewingApplicants}
        onClose={() => setViewingApplicants(null)}
        jobTitle={viewingApplicants?.title || ''}
        jobId={viewingApplicants?.id || ''}
        applicants={[]}
      />
    </SidebarProvider>
  );
};

export default OrganizationJobs;