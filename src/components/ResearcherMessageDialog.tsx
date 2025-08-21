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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  Send, 
  User, 
  Star, 
  MapPin, 
  Clock,
  Paperclip,
  Smile
} from "lucide-react";

interface Message {
  id: number;
  sender: "user" | "researcher";
  content: string;
  timestamp: string;
  read: boolean;
}

interface Researcher {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  rating: number;
  level: string;
  status: string;
  location: string;
  specialties: string[];
}

interface ResearcherMessageDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  researcher: Researcher | null;
}

const mockMessages: Message[] = [
  {
    id: 1,
    sender: "researcher",
    content: "Hi! Thanks for reaching out. I'd be happy to help with your security assessment.",
    timestamp: "2024-01-15T10:30:00Z",
    read: true,
  },
  {
    id: 2,
    sender: "user",
    content: "Great! We're looking for someone with expertise in web application security. I saw your recent reports and they're impressive.",
    timestamp: "2024-01-15T10:35:00Z",
    read: true,
  },
  {
    id: 3,
    sender: "researcher",
    content: "Thank you! I specialize in OWASP Top 10 vulnerabilities and have found several critical issues in similar applications. What's the scope of your program?",
    timestamp: "2024-01-15T10:40:00Z",
    read: true,
  },
  {
    id: 4,
    sender: "user",
    content: "We have a web application with user authentication, payment processing, and an admin panel. Timeline is flexible but we'd like to start within 2 weeks.",
    timestamp: "2024-01-15T10:45:00Z",
    read: false,
  },
];

export function ResearcherMessageDialog({ open, onOpenChange, researcher }: ResearcherMessageDialogProps) {
  const [newMessage, setNewMessage] = useState("");

  if (!researcher) return null;

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would typically send the message to your backend
      console.log("Sending message:", { researcherId: researcher.id, content: newMessage });
      setNewMessage("");
    }
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString("en-US", {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'expert': return 'destructive';
      case 'advanced': return 'medium';
      case 'intermediate': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] flex flex-col p-0">
        {/* Header with Researcher Info */}
        <DialogHeader className="p-6 pb-4 border-b">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={researcher.avatar} />
              <AvatarFallback>
                <User className="h-6 w-6" />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <DialogTitle className="text-lg">{researcher.name}</DialogTitle>
                <Badge variant={getLevelColor(researcher.level) as any}>
                  {researcher.level}
                </Badge>
                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  {researcher.status}
                </Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span>{researcher.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{researcher.location}</span>
                </div>
              </div>
            </div>
          </div>
          <DialogDescription className="mt-2">
            Send a message to discuss potential collaboration or ask questions
          </DialogDescription>
        </DialogHeader>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {mockMessages.map((message, index) => (
              <div key={message.id}>
                <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] space-y-2`}>
                    <div
                      className={`p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground ml-4'
                          : 'bg-muted mr-4'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                    <div className={`flex items-center gap-1 text-xs text-muted-foreground ${
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}>
                      <Clock className="h-3 w-3" />
                      <span>{formatTime(message.timestamp)}</span>
                      {message.sender === 'user' && (
                        <span className={message.read ? 'text-blue-500' : 'text-gray-400'}>
                          {message.read ? '✓✓' : '✓'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                {index < mockMessages.length - 1 && <div className="h-4" />}
              </div>
            ))}
          </div>
        </ScrollArea>

        <Separator />

        {/* Message Input */}
        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="message">Write a message</Label>
            <Textarea
              id="message"
              placeholder="Type your message here..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="min-h-[80px] resize-none"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Paperclip className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Smile className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Cancel
              </Button>
              <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}