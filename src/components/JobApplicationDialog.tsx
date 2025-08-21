import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Upload, Send } from "lucide-react";

const applicationSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  experience: z.string().min(1, "Please enter your years of experience"),
  coverLetter: z.string().min(50, "Cover letter must be at least 50 characters"),
  portfolio: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  cv: z.any().refine((files) => {
    return files?.length == 1;
  }, "CV is required").refine((files) => {
    return files?.[0]?.size <= 5000000;
  }, "Max file size is 5MB").refine((files) => {
    return ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(files?.[0]?.type);
  }, "Only PDF, DOC, and DOCX files are allowed"),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

interface JobApplicationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  jobTitle: string;
  company: string;
}

const JobApplicationDialog = ({ open, onOpenChange, jobTitle, company }: JobApplicationDialogProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      experience: "",
      coverLetter: "",
      portfolio: "",
    },
  });

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Application Submitted!",
        description: `Your application for ${jobTitle} at ${company} has been submitted successfully.`,
      });
      
      form.reset();
      onOpenChange(false);
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto bg-card/95 backdrop-blur-sm border-border/50 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg pointer-events-none" />
        <div className="relative">
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Apply for {jobTitle}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Submit your application for the position at {company}
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your full name" 
                        className="bg-background/50 border-border/60 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">Email Address</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="bg-background/50 border-border/60 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">Phone Number</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your phone number" 
                        className="bg-background/50 border-border/60 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200"
                        {...field} 
                      />
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
                    <FormLabel className="text-sm font-medium text-foreground">Years of Experience</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="e.g., 3 years" 
                        className="bg-background/50 border-border/60 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="portfolio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">Portfolio/LinkedIn URL <span className="text-muted-foreground">(Optional)</span></FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="https://your-portfolio.com" 
                        className="bg-background/50 border-border/60 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cv"
                render={({ field: { value, onChange, ...fieldProps } }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">
                      Attach CV <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...fieldProps}
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={(event) => onChange(event.target.files)}
                          className="cursor-pointer bg-background/50 border-border/60 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200 file:bg-primary/10 file:text-primary file:border-0 file:rounded-md file:px-3 file:py-1 file:mr-3 file:text-sm file:font-medium hover:file:bg-primary/20"
                        />
                      </div>
                    </FormControl>
                    <p className="text-xs text-muted-foreground mt-1">
                      PDF, DOC, or DOCX format • Max 5MB
                    </p>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="coverLetter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">Cover Letter</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us why you're perfect for this role..."
                        className="min-h-[100px] bg-background/50 border-border/60 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all duration-200 resize-none"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-border/50">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 hover:bg-secondary/50 transition-colors duration-200"
                  onClick={() => onOpenChange(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary shadow-lg hover:shadow-xl transition-all duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Upload className="h-4 w-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Submit Application
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JobApplicationDialog;