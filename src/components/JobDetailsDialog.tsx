import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Building2, 
  MapPin, 
  Clock, 
  DollarSign, 
  Star, 
  Users, 
  Calendar, 
  Briefcase,
  CheckCircle,
  Target,
  User
} from "lucide-react";

interface JobDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  job: {
    id: number;
    title: string;
    company: string;
    logo: string;
    location: string;
    type: string;
    experience: string;
    salary: string;
    skills: string[];
    description: string;
    fullDescription: string;
    keyResponsibilities: string[];
    requirements: string[];
    benefits: string[];
    posted: string;
    applicants: number;
    rating: number;
    isFeatured: boolean;
    category: string;
  } | null;
  onApply: () => void;
}

const JobDetailsDialog = ({ open, onOpenChange, job, onApply }: JobDetailsDialogProps) => {
  if (!job) return null;

  const getCategoryColor = (category: string) => {
    return category === 'manual-testing' ? 'bg-blue-500' : 'bg-green-500';
  };

  const getCategoryBadge = (category: string) => {
    return category === 'manual-testing' ? 'Manual Testing' : 'Bug Bounty';
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-4xl">{job.logo}</div>
              <div>
                <DialogTitle className="text-2xl">{job.title}</DialogTitle>
                <div className="flex items-center text-muted-foreground mt-1">
                  <Building2 className="h-4 w-4 mr-1" />
                  {job.company}
                </div>
                <div className="flex items-center mt-2 space-x-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-4 w-4 mr-1 fill-primary text-primary" />
                    {job.rating}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    {job.applicants} applied
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
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
        </DialogHeader>

        <div className="space-y-6">
          {/* Job Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
              <span className="text-sm">{job.location}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
              <span className="text-sm">{job.type}</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
              <span className="text-sm">{job.salary}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
              <span className="text-sm">{job.posted}</span>
            </div>
          </div>

          <Separator />

          {/* Full Description */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Briefcase className="h-5 w-5 mr-2" />
              Job Description
            </h3>
            <p className="text-muted-foreground leading-relaxed">{job.fullDescription}</p>
          </div>

          <Separator />

          {/* Key Responsibilities */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Target className="h-5 w-5 mr-2" />
              Key Responsibilities
            </h3>
            <ul className="space-y-2">
              {job.keyResponsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          {/* Requirements */}
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <User className="h-5 w-5 mr-2" />
              Requirements
            </h3>
            <ul className="space-y-2">
              {job.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Required Skills</h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          {/* Benefits */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Benefits</h3>
            <ul className="space-y-2">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 mt-1 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Apply Button */}
          <Card className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border-primary/20">
            <CardContent className="p-6 text-center">
              <h4 className="text-lg font-semibold mb-2">Ready to Apply?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Join {job.company} and take your career to the next level.
              </p>
              <Button size="lg" onClick={onApply} className="w-full md:w-auto">
                Apply for this Position
              </Button>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JobDetailsDialog;