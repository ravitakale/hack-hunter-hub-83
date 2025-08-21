import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Calendar, Download, Eye, CheckCircle, XCircle } from "lucide-react";

interface Applicant {
  id: string;
  name: string;
  email: string;
  phone?: string;
  location: string;
  avatar?: string;
  appliedDate: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  experience: string;
  skills: string[];
  resumeUrl?: string;
  coverLetter?: string;
}

interface ViewApplicantsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  jobId: string;
  applicants: Applicant[];
}

const mockApplicants: Applicant[] = [
  {
    id: "1",
    name: "Sarah Chen",
    email: "sarah.chen@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    avatar: "",
    appliedDate: "2024-01-16",
    status: "pending",
    experience: "5 years",
    skills: ["Penetration Testing", "OWASP", "Python", "Network Security"],
    resumeUrl: "#",
    coverLetter: "I am excited to apply for this position as it aligns perfectly with my passion for cybersecurity and my experience in penetration testing..."
  },
  {
    id: "2", 
    name: "Michael Rodriguez",
    email: "m.rodriguez@email.com",
    phone: "+1 (555) 987-6543",
    location: "Austin, TX",
    avatar: "",
    appliedDate: "2024-01-14",
    status: "reviewed",
    experience: "7 years",
    skills: ["Security Engineering", "Vulnerability Assessment", "AWS", "Docker"],
    resumeUrl: "#",
    coverLetter: "With over 7 years of experience in security engineering, I believe I can contribute significantly to your team..."
  },
  {
    id: "3",
    name: "Emily Johnson",
    email: "emily.johnson@email.com",
    location: "Remote",
    avatar: "",
    appliedDate: "2024-01-12",
    status: "accepted",
    experience: "4 years",
    skills: ["Bug Bounty", "Web Security", "JavaScript", "React"],
    resumeUrl: "#"
  }
];

export const ViewApplicantsDialog = ({ 
  isOpen, 
  onClose, 
  jobTitle, 
  jobId, 
  applicants = mockApplicants 
}: ViewApplicantsDialogProps) => {
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500';
      case 'reviewed': return 'bg-blue-500';
      case 'accepted': return 'bg-green-500';
      case 'rejected': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'accepted': return <CheckCircle className="h-4 w-4" />;
      case 'rejected': return <XCircle className="h-4 w-4" />;
      default: return null;
    }
  };

  const updateApplicantStatus = (applicantId: string, newStatus: Applicant['status']) => {
    // In a real app, this would update the database
    console.log(`Updating applicant ${applicantId} status to ${newStatus}`);
  };

  if (selectedApplicant) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="text-xl">{selectedApplicant.name}</DialogTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Applied for: {jobTitle}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedApplicant(null)}
              >
                Back to List
              </Button>
            </div>
          </DialogHeader>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={selectedApplicant.avatar} />
                <AvatarFallback>
                  {selectedApplicant.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <Badge className={`${getStatusColor(selectedApplicant.status)} text-white`}>
                    {getStatusIcon(selectedApplicant.status)}
                    <span className="ml-1">{selectedApplicant.status.charAt(0).toUpperCase() + selectedApplicant.status.slice(1)}</span>
                  </Badge>
                  <Badge variant="outline">{selectedApplicant.experience} experience</Badge>
                </div>
                
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    {selectedApplicant.email}
                  </div>
                  {selectedApplicant.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      {selectedApplicant.phone}
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {selectedApplicant.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Applied on {new Date(selectedApplicant.appliedDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-semibold mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {selectedApplicant.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {selectedApplicant.coverLetter && (
              <>
                <Separator />
                <div>
                  <h3 className="font-semibold mb-3">Cover Letter</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedApplicant.coverLetter}
                  </p>
                </div>
              </>
            )}

            <Separator />

            <div className="flex flex-wrap gap-3">
              {selectedApplicant.resumeUrl && (
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              )}
              
              {selectedApplicant.status === 'pending' && (
                <>
                  <Button 
                    size="sm"
                    onClick={() => updateApplicantStatus(selectedApplicant.id, 'accepted')}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Accept
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => updateApplicantStatus(selectedApplicant.id, 'rejected')}
                    className="text-red-600 hover:text-red-700"
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    Reject
                  </Button>
                </>
              )}
              
              {selectedApplicant.status === 'reviewed' && (
                <>
                  <Button 
                    size="sm"
                    onClick={() => updateApplicantStatus(selectedApplicant.id, 'accepted')}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Accept
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => updateApplicantStatus(selectedApplicant.id, 'rejected')}
                    className="text-red-600 hover:text-red-700"
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    Reject
                  </Button>
                </>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Applicants for: {jobTitle}</DialogTitle>
          <p className="text-muted-foreground">{applicants.length} applicants total</p>
        </DialogHeader>

        {applicants.length === 0 ? (
          <div className="text-center py-8">
            <div className="space-y-3">
              <Mail className="h-12 w-12 text-muted-foreground mx-auto" />
              <h3 className="text-lg font-medium">No applicants yet</h3>
              <p className="text-muted-foreground">Applications will appear here once candidates apply.</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {applicants.map((applicant) => (
              <Card key={applicant.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={applicant.avatar} />
                        <AvatarFallback>
                          {applicant.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-sm">{applicant.name}</h3>
                          <Badge className={`${getStatusColor(applicant.status)} text-white text-xs`}>
                            {applicant.status.charAt(0).toUpperCase() + applicant.status.slice(1)}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {applicant.email}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {applicant.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(applicant.appliedDate).toLocaleDateString()}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-1 mt-2">
                          {applicant.skills.slice(0, 3).map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {applicant.skills.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{applicant.skills.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedApplicant(applicant)}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};