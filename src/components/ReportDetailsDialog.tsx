import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Eye,
  Calendar,
  DollarSign,
  User,
  Tag,
  FileText,
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  XCircle,
  ExternalLink,
  Award,
  MessageCircle,
  Gift,
  Star,
  Send,
  Plus,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface Report {
  id: number;
  title: string;
  researcher: string;
  severity: string;
  status: string;
  program: string;
  submittedAt: string;
  reward: number;
  description: string;
}

interface ReportDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  report: Report | null;
}

export function ReportDetailsDialog({ open, onOpenChange, report }: ReportDetailsDialogProps) {
  const [rewardAmount, setRewardAmount] = useState("");
  const [points, setPoints] = useState("");
  const [comment, setComment] = useState("");
  const [swagType, setSwagType] = useState("");
  const { toast } = useToast();

  if (!report) return null;

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical': return 'destructive';
      case 'high': return 'high';
      case 'medium': return 'medium';
      case 'low': return 'low';
      default: return 'secondary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case 'new': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'triaged': return <Eye className="h-4 w-4 text-blue-500" />;
      case 'in progress': return <Clock className="h-4 w-4 text-orange-500" />;
      case 'resolved': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'duplicate': return <XCircle className="h-4 w-4 text-gray-500" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleGiveReward = () => {
    if (!rewardAmount) {
      toast({
        title: "Error",
        description: "Please enter a reward amount",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Reward Given",
      description: `$${rewardAmount} reward has been sent to ${report.researcher}`,
    });
    setRewardAmount("");
  };

  const handleGivePoints = () => {
    if (!points) {
      toast({
        title: "Error",
        description: "Please enter points amount",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Points Awarded",
      description: `${points} points have been awarded to ${report.researcher}`,
    });
    setPoints("");
  };

  const handleAddComment = () => {
    if (!comment) {
      toast({
        title: "Error",
        description: "Please enter a comment",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Comment Added",
      description: "Your comment has been sent to the researcher",
    });
    setComment("");
  };

  const handleGiveSwag = () => {
    if (!swagType) {
      toast({
        title: "Error",
        description: "Please select a swag item",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Swag Sent",
      description: `${swagType} has been sent to ${report.researcher}`,
    });
    setSwagType("");
  };

  // Mock detailed vulnerability information
  const vulnerabilityDetails = {
    steps: [
      "Navigate to the login page at /login",
      "Enter the following payload in the username field: admin' OR '1'='1' --",
      "Enter any password",
      "Click the login button",
      "Observe successful authentication bypass"
    ],
    impact: "An attacker can bypass authentication and gain unauthorized access to user accounts, potentially leading to data breaches and system compromise.",
    recommendation: "Implement parameterized queries or prepared statements to prevent SQL injection attacks. Additionally, add input validation and sanitization.",
    cve: "CVE-2024-XXXX",
    cvss: "9.8",
    affected_versions: "v1.0.0 - v2.3.1",
    technical_details: "The vulnerability exists in the authentication module where user input is directly concatenated into SQL queries without proper sanitization or parameterization."
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Shield className="h-6 w-6" />
            {report.title}
          </DialogTitle>
          <DialogDescription>
            Detailed vulnerability report and researcher management
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1">
          <div className="space-y-6 pr-4">
            {/* Status and Severity Header */}
            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {getStatusIcon(report.status)}
                  <span className="font-medium">{report.status}</span>
                </div>
                <Badge variant={getSeverityColor(report.severity) as any} className="text-sm">
                  {report.severity}
                </Badge>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">CVSS {vulnerabilityDetails.cvss}</div>
                <div className="text-xs text-muted-foreground">Severity Score</div>
              </div>
            </div>

            {/* Basic Information */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Researcher:</span>
                  <span className="font-medium">{report.researcher}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Program:</span>
                  <span className="font-medium">{report.program}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Submitted:</span>
                  <span className="font-medium">{formatDate(report.submittedAt)}</span>
                </div>
              </div>
              <div className="space-y-4">
                {report.reward > 0 && (
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Current Reward:</span>
                    <span className="font-bold text-primary">${report.reward}</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">CVE:</span>
                  <span className="font-medium">{vulnerabilityDetails.cve}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Affected Versions:</span>
                  <span className="font-medium">{vulnerabilityDetails.affected_versions}</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Description</h3>
              <p className="text-muted-foreground leading-relaxed">{report.description}</p>
            </div>

            <Separator />

            {/* Technical Details */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Technical Details</h3>
              <p className="text-muted-foreground leading-relaxed">{vulnerabilityDetails.technical_details}</p>
            </div>

            <Separator />

            {/* Steps to Reproduce */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Steps to Reproduce</h3>
              <ol className="space-y-2">
                {vulnerabilityDetails.steps.map((step, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <Separator />

            {/* Impact */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Impact</h3>
              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                <p className="text-destructive-foreground">{vulnerabilityDetails.impact}</p>
              </div>
            </div>

            <Separator />

            {/* Recommendation */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Recommendation</h3>
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <p className="text-primary-foreground">{vulnerabilityDetails.recommendation}</p>
              </div>
            </div>

            <Separator />

            {/* Researcher Actions Section */}
            <div className="space-y-6 bg-muted/20 p-6 rounded-lg">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Award className="h-5 w-5" />
                Researcher Actions
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Reward Section */}
                <div className="space-y-4 p-4 bg-background rounded-lg border">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">Give Monetary Reward</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="reward-amount">Reward Amount ($)</Label>
                      <Input
                        id="reward-amount"
                        type="number"
                        placeholder="Enter reward amount"
                        value={rewardAmount}
                        onChange={(e) => setRewardAmount(e.target.value)}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {[100, 250, 500, 1000].map((amount) => (
                        <Button
                          key={amount}
                          variant="outline"
                          size="sm"
                          onClick={() => setRewardAmount(amount.toString())}
                        >
                          ${amount}
                        </Button>
                      ))}
                    </div>
                    
                    <Button onClick={handleGiveReward} className="w-full" size="sm">
                      <Award className="h-4 w-4 mr-2" />
                      Give Reward
                    </Button>
                  </div>
                </div>

                {/* Points Section */}
                <div className="space-y-4 p-4 bg-background rounded-lg border">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">Award Points</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="points-amount">Points Amount</Label>
                      <Input
                        id="points-amount"
                        type="number"
                        placeholder="Enter points amount"
                        value={points}
                        onChange={(e) => setPoints(e.target.value)}
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {[50, 100, 250, 500].map((amount) => (
                        <Button
                          key={amount}
                          variant="outline"
                          size="sm"
                          onClick={() => setPoints(amount.toString())}
                        >
                          {amount} pts
                        </Button>
                      ))}
                    </div>
                    
                    <Button onClick={handleGivePoints} className="w-full" size="sm">
                      <Star className="h-4 w-4 mr-2" />
                      Award Points
                    </Button>
                  </div>
                </div>

                {/* Comment Section */}
                <div className="space-y-4 p-4 bg-background rounded-lg border">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">Add Comment</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="comment-text">Comment</Label>
                      <Textarea
                        id="comment-text"
                        placeholder="Write your comment to the researcher..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows={3}
                      />
                    </div>
                    
                    <Button onClick={handleAddComment} className="w-full" size="sm">
                      <Send className="h-4 w-4 mr-2" />
                      Send Comment
                    </Button>
                  </div>
                </div>

                {/* Swag Section */}
                <div className="space-y-4 p-4 bg-background rounded-lg border">
                  <div className="flex items-center gap-2">
                    <Gift className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">Send Swag</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="swag-type">Swag Item</Label>
                      <Select value={swagType} onValueChange={setSwagType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select swag item" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="t-shirt">Company T-Shirt</SelectItem>
                          <SelectItem value="hoodie">Company Hoodie</SelectItem>
                          <SelectItem value="stickers">Sticker Pack</SelectItem>
                          <SelectItem value="mug">Coffee Mug</SelectItem>
                          <SelectItem value="cap">Baseball Cap</SelectItem>
                          <SelectItem value="laptop-sticker">Laptop Stickers</SelectItem>
                          <SelectItem value="water-bottle">Water Bottle</SelectItem>
                          <SelectItem value="bag">Tote Bag</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <Button onClick={handleGiveSwag} className="w-full" size="sm">
                      <Gift className="h-4 w-4 mr-2" />
                      Send Swag
                    </Button>
                  </div>
                </div>
              </div>

              <div className="text-center p-3 bg-primary/10 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  All actions will be sent to: <span className="font-medium text-primary">{report.researcher}</span>
                </p>
              </div>
            </div>
          </div>
        </ScrollArea>

        <div className="flex gap-3 pt-4 border-t">
          <Button variant="outline">
            <FileText className="h-4 w-4 mr-2" />
            Download Report
          </Button>
          <Button variant="outline">
            Export PDF
          </Button>
          <Button>
            Update Status
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}