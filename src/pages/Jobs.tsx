import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JobApplicationDialog from "@/components/JobApplicationDialog";
import JobDetailsDialog from "@/components/JobDetailsDialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { 
  Building2, 
  MapPin, 
  Clock, 
  DollarSign, 
  Search, 
  Filter, 
  Briefcase,
  Users,
  Star,
  CheckSquare,
  Bug,
  Shield,
  Calendar,
  ArrowRight
} from "lucide-react";

const filterSchema = z.object({
  searchQuery: z.string().max(100, "Search query must be less than 100 characters"),
  jobType: z.string(),
  experience: z.string(),
});

type FilterFormData = z.infer<typeof filterSchema>;

const Jobs = () => {
  const [applicationDialog, setApplicationDialog] = useState<{
    open: boolean;
    jobTitle: string;
    company: string;
  }>({
    open: false,
    jobTitle: "",
    company: "",
  });

  const [jobDetailsDialog, setJobDetailsDialog] = useState<{
    open: boolean;
    job: any;
  }>({
    open: false,
    job: null,
  });
  
  const { toast } = useToast();

  const form = useForm<FilterFormData>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      searchQuery: "",
      jobType: "all",
      experience: "all",
    },
  });

  const onFilterChange = (data: FilterFormData) => {
    // Auto-apply filtering logic
    console.log("Auto-filtering with:", data);
    if (data.searchQuery || data.jobType !== "all" || data.experience !== "all") {
      toast({
        title: "Filters Applied",
        description: `Filtering jobs${data.searchQuery ? ` for "${data.searchQuery}"` : ""}${data.jobType !== "all" ? ` - ${data.jobType}` : ""}${data.experience !== "all" ? ` - ${data.experience} level` : ""}`,
      });
    }
  };

  const handleApplyNow = (jobTitle: string, company: string) => {
    setApplicationDialog({
      open: true,
      jobTitle,
      company,
    });
  };

  const handleJobClick = (job: any) => {
    setJobDetailsDialog({
      open: true,
      job,
    });
  };
  const featuredJobs = [
    {
      id: 1,
      title: "Senior Manual Testing Engineer",
      company: "TechCorp India",
      logo: "🏢",
      location: "Bangalore, India",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹8,00,000 - ₹15,00,000",
      skills: ["Manual Testing", "Test Planning", "Bug Reporting", "API Testing"],
      description: "Join our quality assurance team to ensure robust software delivery through comprehensive manual testing.",
      fullDescription: "We are seeking a Senior Manual Testing Engineer to join our dynamic QA team at TechCorp India. In this role, you will be responsible for ensuring the highest quality standards for our software products through comprehensive manual testing strategies. You will work closely with development teams, product managers, and stakeholders to deliver exceptional user experiences. This position offers an excellent opportunity to grow your career in a fast-paced, innovative environment where your contributions will directly impact millions of users worldwide.",
      keyResponsibilities: [
        "Design and execute comprehensive test plans for web and mobile applications",
        "Perform functional, regression, integration, and user acceptance testing",
        "Identify, document, and track software defects using bug tracking tools",
        "Collaborate with development teams to resolve issues and improve product quality",
        "Create detailed test cases and maintain test documentation",
        "Conduct API testing and database validation",
        "Participate in requirement reviews and provide testing estimates",
        "Mentor junior team members and contribute to testing best practices"
      ],
      requirements: [
        "Bachelor's degree in Computer Science, Engineering, or related field",
        "3-5 years of experience in manual testing",
        "Strong knowledge of testing methodologies and SDLC",
        "Experience with test case management tools (TestRail, Zephyr, etc.)",
        "Proficiency in API testing tools (Postman, REST Assured)",
        "Knowledge of SQL and database testing",
        "Excellent analytical and problem-solving skills",
        "Strong communication and documentation skills"
      ],
      benefits: [
        "Competitive salary with performance bonuses",
        "Comprehensive health insurance for you and family",
        "Flexible working hours and remote work options",
        "Professional development and training opportunities",
        "State-of-the-art office facilities",
        "Team outings and company events"
      ],
      posted: "2 days ago",
      applicants: 45,
      rating: 4.8,
      isFeatured: true,
      category: "manual-testing"
    },
    {
      id: 2,
      title: "Bug Bounty Hunter - Remote",
      company: "SecureBank",
      logo: "🏦",
      location: "Remote",
      type: "Contract",
      experience: "2+ years",
      salary: "₹5,000 - ₹50,000 per bug",
      skills: ["Web Security", "Penetration Testing", "OWASP", "Vulnerability Assessment"],
      description: "Hunt for vulnerabilities in our banking platform and earn competitive bounties.",
      fullDescription: "SecureBank is looking for skilled ethical hackers to join our bug bounty program. As a Bug Bounty Hunter, you will help us maintain the highest security standards for our digital banking platform by identifying and reporting security vulnerabilities. This is an excellent opportunity for security researchers to work with a leading financial institution while earning substantial rewards for your discoveries. You'll be working on cutting-edge fintech applications and contributing to the security of millions of customers' financial data.",
      keyResponsibilities: [
        "Conduct security assessments on web applications, mobile apps, and APIs",
        "Identify and report security vulnerabilities following responsible disclosure",
        "Perform penetration testing on various banking systems",
        "Document findings with detailed proof-of-concept exploits",
        "Collaborate with security team to validate and reproduce issues",
        "Stay updated with latest security trends and attack vectors",
        "Participate in security discussions and knowledge sharing",
        "Follow ethical hacking guidelines and legal compliance requirements"
      ],
      requirements: [
        "2+ years of experience in cybersecurity or ethical hacking",
        "Strong knowledge of web application security (OWASP Top 10)",
        "Experience with penetration testing tools and methodologies",
        "Understanding of network protocols and security concepts",
        "Knowledge of programming languages (Python, JavaScript, etc.)",
        "Familiarity with mobile application security testing",
        "Excellent report writing and communication skills",
        "Clean background check and ethical hacking certification preferred"
      ],
      benefits: [
        "Competitive bounty payments based on severity",
        "Performance bonuses for consistent quality submissions",
        "Recognition in our security hall of fame",
        "Access to private testing environments",
        "Direct communication with security team",
        "Flexible working schedule"
      ],
      posted: "1 day ago",
      applicants: 89,
      rating: 4.9,
      isFeatured: true,
      category: "bug-bounty"
    },
    {
      id: 3,
      title: "QA Automation & Manual Tester",
      company: "EduTech Solutions",
      logo: "📚",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹4,50,000 - ₹8,00,000",
      skills: ["Manual Testing", "Selenium", "Test Cases", "Regression Testing"],
      description: "Join our growing team to test educational software and ensure quality user experience.",
      fullDescription: "EduTech Solutions is revolutionizing online education, and we need a talented QA Automation & Manual Tester to ensure our educational platforms deliver exceptional user experiences. You'll be working on innovative e-learning applications that impact students and educators worldwide. This role offers a perfect blend of manual and automation testing, allowing you to grow your skills in both areas while contributing to meaningful educational technology.",
      keyResponsibilities: [
        "Execute manual test cases for web and mobile educational applications",
        "Develop and maintain automated test scripts using Selenium",
        "Perform functional, usability, and accessibility testing",
        "Create test data and maintain test environments",
        "Participate in agile development processes and sprint planning",
        "Collaborate with developers and product managers on quality initiatives",
        "Monitor application performance and user experience metrics",
        "Contribute to continuous improvement of testing processes"
      ],
      requirements: [
        "1-3 years of experience in software testing",
        "Knowledge of manual testing techniques and methodologies",
        "Basic understanding of test automation tools (Selenium preferred)",
        "Familiarity with agile development processes",
        "Understanding of web technologies (HTML, CSS, JavaScript)",
        "Experience with bug tracking and test management tools",
        "Strong attention to detail and analytical thinking",
        "Good communication skills and team collaboration"
      ],
      benefits: [
        "Competitive salary with annual increments",
        "Health insurance and medical benefits",
        "Learning and development opportunities",
        "Flexible work arrangements",
        "Modern office environment",
        "Employee wellness programs"
      ],
      posted: "3 days ago",
      applicants: 32,
      rating: 4.6,
      isFeatured: false,
      category: "manual-testing"
    }
  ];


  const stats = [
    { label: "Active Jobs", value: "500+", icon: Briefcase },
    { label: "Companies Hiring", value: "150+", icon: Building2 },
    { label: "Jobs Filled", value: "2,300+", icon: Users },
    { label: "Avg Salary", value: "₹8.5L", icon: DollarSign }
  ];

  const getCategoryColor = (category: string) => {
    return category === 'manual-testing' ? 'bg-blue-500' : 'bg-green-500';
  };

  const getCategoryBadge = (category: string) => {
    return category === 'manual-testing' ? 'Manual Testing' : 'Bug Bounty';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Briefcase className="h-4 w-4 mr-2" />
            Security Jobs Portal
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Find Your Next Security Job
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover opportunities in manual testing, bug bounty hunting, and security research. 
            Join leading companies and advance your cybersecurity career.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent className="p-0">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <Form {...form}>
              <div className="space-y-4">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="searchQuery"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="relative">
                              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                              <Input
                                placeholder="Search jobs by title, company, or skills..."
                                className="pl-10"
                                {...field}
                                onChange={(e) => {
                                  field.onChange(e);
                                  const formData = form.getValues();
                                  onFilterChange({ ...formData, searchQuery: e.target.value });
                                }}
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex gap-4">
                    <FormField
                      control={form.control}
                      name="jobType"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Select value={field.value} onValueChange={(value) => {
                              field.onChange(value);
                              const formData = form.getValues();
                              onFilterChange({ ...formData, jobType: value });
                            }}>
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Job Type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="all">All Types</SelectItem>
                                <SelectItem value="full-time">Full-time</SelectItem>
                                <SelectItem value="contract">Contract</SelectItem>
                                <SelectItem value="freelance">Freelance</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Select value={field.value} onValueChange={(value) => {
                              field.onChange(value);
                              const formData = form.getValues();
                              onFilterChange({ ...formData, experience: value });
                            }}>
                              <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Experience" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="all">All Levels</SelectItem>
                                <SelectItem value="entry">Entry Level</SelectItem>
                                <SelectItem value="mid">Mid Level</SelectItem>
                                <SelectItem value="senior">Senior Level</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </div>
            </Form>
          </CardContent>
        </Card>


        {/* Featured Jobs */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Jobs</h2>
            <Button variant="outline">
              View All Jobs
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => handleJobClick(job)}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{job.logo}</div>
                      <div>
                        <CardTitle className="text-lg">{job.title}</CardTitle>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <Building2 className="h-4 w-4 mr-1" />
                          {job.company}
                        </div>
                        <div className="flex items-center mt-2 space-x-4">
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Star className="h-3 w-3 mr-1 fill-primary text-primary" />
                            {job.rating}
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Users className="h-3 w-3 mr-1" />
                            {job.applicants} applied
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      {job.isFeatured && (
                        <Badge className="bg-primary text-primary-foreground">
                          Featured
                        </Badge>
                      )}
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${getCategoryColor(job.category)} text-white border-0`}
                      >
                        {getCategoryBadge(job.category)}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{job.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      {job.type}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                      {job.salary}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      {job.posted}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {job.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{job.skills.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button 
                      className="flex-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleApplyNow(job.title, job.company);
                      }}
                    >
                      Apply Now
                    </Button>
                    <Button variant="outline" size="icon" onClick={(e) => e.stopPropagation()}>
                      <Star className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Security Career?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of security professionals who have found their dream jobs through our platform. 
              Whether you're into manual testing or bug bounty hunting, we have opportunities for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Search className="h-5 w-5 mr-2" />
                Browse All Jobs
              </Button>
              <Button variant="outline" size="lg">
                <Users className="h-5 w-5 mr-2" />
                Create Job Alert
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <JobApplicationDialog
        open={applicationDialog.open}
        onOpenChange={(open) => setApplicationDialog(prev => ({ ...prev, open }))}
        jobTitle={applicationDialog.jobTitle}
        company={applicationDialog.company}
      />

      <JobDetailsDialog
        open={jobDetailsDialog.open}
        onOpenChange={(open) => setJobDetailsDialog(prev => ({ ...prev, open }))}
        job={jobDetailsDialog.job}
        onApply={() => {
          setJobDetailsDialog(prev => ({ ...prev, open: false }));
          if (jobDetailsDialog.job) {
            handleApplyNow(jobDetailsDialog.job.title, jobDetailsDialog.job.company);
          }
        }}
      />

      <Footer />
    </div>
  );
};

export default Jobs;