import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ResearcherMessageDialog } from "./ResearcherMessageDialog";
import { ResearcherProfileDialog } from "./ResearcherProfileDialog";
import {
  Star,
  MapPin,
  Calendar,
  MessageSquare,
  User as UserIcon,
  Eye,
  DollarSign,
  Target,
  TrendingUp
} from "lucide-react";

interface Researcher {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  rating: number;
  level: string;
  status: string;
  location: string;
  joinedDate: string;
  specialties: string[];
  reports: number;
  validReports: number;
  earnings: number;
  avgSeverity: string;
  lastActive: string;
}

interface ResearcherCardProps {
  researcher: Researcher;
}

export function ResearcherCard({ researcher }: ResearcherCardProps) {
  const [messageDialogOpen, setMessageDialogOpen] = useState(false);
  const [profileDialogOpen, setProfileDialogOpen] = useState(false);

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'expert': return 'destructive';
      case 'advanced': return 'medium';
      case 'intermediate': return 'secondary';
      default: return 'outline';
    }
  };

  const formatLastActive = (lastActive: string) => {
    // Parse relative time format like "2 hours ago", "1 day ago"
    return lastActive;
  };

  const handleMessageClick = () => {
    setMessageDialogOpen(true);
  };

  const handleProfileClick = () => {
    setProfileDialogOpen(true);
  };

  return (
    <>
      <Card className="hover:shadow-md transition-shadow duration-200">
        <CardContent className="p-6">
          {/* Header with Avatar and Basic Info */}
          <div className="flex items-start gap-4 mb-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={researcher.avatar} />
              <AvatarFallback className="text-lg">
                <UserIcon className="h-8 w-8" />
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">{researcher.name}</h3>
                <div className="flex items-center gap-2">
                  <Badge variant={getLevelColor(researcher.level) as any}>
                    {researcher.level}
                  </Badge>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {researcher.status}
                  </Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{researcher.email}</p>
              <div className="flex items-center gap-1 mb-2">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="font-medium">{researcher.rating}</span>
              </div>
            </div>
          </div>

          {/* Location and Join Date */}
          <div className="flex items-center gap-6 mb-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{researcher.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>Joined {researcher.joinedDate}</span>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Target className="h-4 w-4" />
                  <span>Reports</span>
                </div>
                <span className="font-semibold">{researcher.reports}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <DollarSign className="h-4 w-4" />
                  <span>Earnings</span>
                </div>
                <span className="font-semibold">${researcher.earnings.toLocaleString()}</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="h-4 w-4" />
                  <span>Valid Reports</span>
                </div>
                <span className="font-semibold">{researcher.validReports}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="h-4 w-4" />
                  <span>Avg Severity</span>
                </div>
                <span className="font-semibold">{researcher.avgSeverity}</span>
              </div>
            </div>
          </div>

          {/* Specialties */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-muted-foreground mb-2">Specialties</h4>
            <div className="flex flex-wrap gap-2">
              {researcher.specialties.map((specialty, index) => (
                <Badge key={index} variant="secondary" className="text-xs px-2 py-1">
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>

          {/* Last Active and Action Buttons */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="text-sm text-muted-foreground">
              Last active: {formatLastActive(researcher.lastActive)}
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleMessageClick}
                className="hover:bg-primary/10 hover:border-primary hover:text-primary"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Message
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleProfileClick}
                className="hover:bg-secondary hover:border-secondary-foreground hover:text-secondary-foreground"
              >
                <Eye className="h-4 w-4 mr-2" />
                Profile
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Message Dialog */}
      <ResearcherMessageDialog
        open={messageDialogOpen}
        onOpenChange={setMessageDialogOpen}
        researcher={researcher}
      />

      {/* Profile Dialog */}
      <ResearcherProfileDialog
        open={profileDialogOpen}
        onOpenChange={setProfileDialogOpen}
        researcher={researcher}
        onMessageClick={() => {
          setProfileDialogOpen(false);
          setMessageDialogOpen(true);
        }}
      />
    </>
  );
}