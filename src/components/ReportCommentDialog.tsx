import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Send, User } from "lucide-react";

interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: string;
  isInternal: boolean;
}

interface ReportCommentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  reportTitle: string;
  reportId: number;
}

const mockComments: Comment[] = [
  {
    id: 1,
    author: "Security Team",
    content: "Thank you for this report. We're currently investigating this vulnerability and will provide updates soon.",
    timestamp: "2024-01-15T11:00:00Z",
    isInternal: false,
  },
  {
    id: 2,
    author: "John Doe",
    content: "I've also found a similar issue in the registration form. Should I submit a separate report?",
    timestamp: "2024-01-15T11:30:00Z",
    isInternal: false,
  },
  {
    id: 3,
    author: "Dev Team Internal",
    content: "This needs immediate attention. Scheduling for next sprint.",
    timestamp: "2024-01-15T12:00:00Z",
    isInternal: true,
  },
];

export function ReportCommentDialog({ open, onOpenChange, reportTitle, reportId }: ReportCommentDialogProps) {
  const [newComment, setNewComment] = useState("");
  const [isInternal, setIsInternal] = useState(false);

  const handleSubmit = () => {
    if (newComment.trim()) {
      // Here you would typically send the comment to your backend
      console.log("Submitting comment:", { reportId, content: newComment, isInternal });
      setNewComment("");
      // Close dialog or show success message
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Comments - {reportTitle}
          </DialogTitle>
          <DialogDescription>
            Discuss this vulnerability report with the researcher and team members.
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto space-y-4 py-4">
          {mockComments.map((comment) => (
            <div key={comment.id} className="flex gap-3 p-4 rounded-lg bg-muted/30">
              <Avatar className="h-8 w-8">
                <AvatarImage src={`/avatars/${comment.author.toLowerCase().replace(/\s+/g, '-')}.jpg`} />
                <AvatarFallback>
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm">{comment.author}</span>
                  <span className="text-xs text-muted-foreground">{formatDate(comment.timestamp)}</span>
                  {comment.isInternal && (
                    <Badge variant="secondary" className="text-xs">
                      Internal
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-foreground">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4 pt-4 border-t">
          <div className="space-y-2">
            <Label htmlFor="comment">Add a comment</Label>
            <Textarea
              id="comment"
              placeholder="Write your comment here..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant={isInternal ? "secondary" : "outline"}
              size="sm"
              onClick={() => setIsInternal(!isInternal)}
            >
              {isInternal ? "Internal Comment" : "Public Comment"}
            </Button>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={!newComment.trim()}>
            <Send className="h-4 w-4 mr-2" />
            Post Comment
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}