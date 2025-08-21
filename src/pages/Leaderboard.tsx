import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Trophy, Medal, Award, TrendingUp, Crown, Star, Flame, Zap, Globe, Users, Target, ChevronRight, Calendar, MapPin, Activity } from "lucide-react";
import { ResearcherProfileDialog } from "@/components/ResearcherProfileDialog";
import { ResearcherMessageDialog } from "@/components/ResearcherMessageDialog";
import { useState } from "react";

const Leaderboard = () => {
  const [selectedResearcher, setSelectedResearcher] = useState<any>(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const topResearchers = [
    {
      id: 1,
      rank: 1,
      name: "Akash Kumar",
      email: "akash.kumar@security.com",
      username: "akash_hunter",
      avatar: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop&crop=face",
      totalBounty: "₹12,50,000",
      bugsFound: 156,
      reputation: 9850,
      country: "India",
      speciality: "Web Security",
      rating: 4.9,
      level: "Expert",
      status: "Active",
      location: "Mumbai, India",
      joinedDate: "Jan 2023",
      specialties: ["Web Security", "SQL Injection", "XSS", "Authentication"],
      reports: 156,
      validReports: 148,
      earnings: 125000,
      avgSeverity: "High",
      lastActive: "2 hours ago"
    },
    {
      id: 2,
      rank: 2,
      name: "Priya Sharma",
      email: "priya.sharma@security.com",
      username: "priya_sec",
      avatar: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=400&fit=crop&crop=face",
      totalBounty: "₹10,80,000",
      bugsFound: 134,
      reputation: 9240,
      country: "India",
      speciality: "Mobile Security",
      rating: 4.8,
      level: "Advanced",
      status: "Active",
      location: "Delhi, India",
      joinedDate: "Mar 2023",
      specialties: ["Mobile Security", "Android", "iOS", "API Security"],
      reports: 134,
      validReports: 128,
      earnings: 108000,
      avgSeverity: "Medium",
      lastActive: "1 hour ago"
    },
    {
      id: 3,
      rank: 3,
      name: "Rahul Singh",
      email: "rahul.singh@security.com",
      username: "rahul_cyber",
      avatar: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=400&fit=crop&crop=face",
      totalBounty: "₹9,75,000",
      bugsFound: 121,
      reputation: 8890,
      country: "India",
      speciality: "API Security",
      rating: 4.7,
      level: "Advanced",
      status: "Active",
      location: "Bangalore, India",
      joinedDate: "Feb 2023",
      specialties: ["API Security", "REST", "GraphQL", "Authentication"],
      reports: 121,
      validReports: 115,
      earnings: 97500,
      avgSeverity: "High",
      lastActive: "3 hours ago"
    },
    {
      id: 4,
      rank: 4,
      name: "Sneha Patel",
      email: "sneha.patel@security.com",
      username: "sneha_bugs",
      avatar: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=400&fit=crop&crop=face",
      totalBounty: "₹8,90,000",
      bugsFound: 108,
      reputation: 8320,
      country: "India",
      speciality: "Cloud Security",
      rating: 4.6,
      level: "Intermediate",
      status: "Active",
      location: "Pune, India",
      joinedDate: "Apr 2023",
      specialties: ["Cloud Security", "AWS", "Docker", "Kubernetes"],
      reports: 108,
      validReports: 102,
      earnings: 89000,
      avgSeverity: "Medium",
      lastActive: "5 hours ago"
    },
    {
      id: 5,
      rank: 5,
      name: "Arjun Gupta",
      email: "arjun.gupta@security.com",
      username: "arjun_hacker",
      avatar: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=400&h=400&fit=crop&crop=face",
      totalBounty: "₹7,65,000",
      bugsFound: 95,
      reputation: 7890,
      country: "India",
      speciality: "IoT Security",
      rating: 4.5,
      level: "Intermediate",
      status: "Active",
      location: "Chennai, India",
      joinedDate: "May 2023",
      specialties: ["IoT Security", "Hardware", "Firmware", "Wireless"],
      reports: 95,
      validReports: 90,
      earnings: 76500,
      avgSeverity: "Medium",
      lastActive: "1 day ago"
    }
  ];

  const handleResearcherClick = (researcher: any) => {
    setSelectedResearcher(researcher);
    setShowProfile(true);
  };

  const handleMessageClick = () => {
    setShowProfile(false);
    setShowMessage(true);
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-500" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getRankBadge = (rank: number) => {
    if (rank <= 3) return "critical";
    if (rank <= 10) return "high";
    if (rank <= 50) return "medium";
    return "low";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Header */}
        <section className="relative text-center mb-16 py-12">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl" />
          <div className="relative max-w-5xl mx-auto">
            <Badge variant="outline" className="mb-6 text-sm font-medium border-primary/20 bg-primary/5">
              <Crown className="mr-2 h-4 w-4" />
              Hall of Fame
            </Badge>
            <h1 className="text-4xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Security Researchers
              <br className="hidden sm:block" />
              <span className="text-primary"> Leaderboard</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Celebrating the elite bug hunters who make the digital world safer, 
              one vulnerability at a time. Join the ranks of legendary security researchers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto text-sm text-muted-foreground">
              <div className="flex items-center justify-center space-x-2">
                <Flame className="h-4 w-4 text-primary" />
                <span>10,234 Active Hunters</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Trophy className="h-4 w-4 text-primary" />
                <span>₹2.5Cr+ Rewarded</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Target className="h-4 w-4 text-primary" />
                <span>45,678 Bugs Found</span>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Researchers</CardTitle>
              <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-all duration-300">
                <Users className="h-5 w-5 text-blue-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">10,234</div>
              <p className="text-sm text-muted-foreground flex items-center mt-2">
                <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-sm font-medium text-muted-foreground">Bugs Found</CardTitle>
              <div className="p-2 rounded-lg bg-red-500/10 group-hover:bg-red-500/20 transition-all duration-300">
                <Target className="h-5 w-5 text-red-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">45,678</div>
              <p className="text-sm text-muted-foreground flex items-center mt-2">
                <Activity className="h-4 w-4 mr-1 text-primary" />
                This month: 1,234
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Bounties</CardTitle>
              <div className="p-2 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-all duration-300">
                <Trophy className="h-5 w-5 text-green-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">₹2.5Cr+</div>
              <p className="text-sm text-muted-foreground flex items-center mt-2">
                <Zap className="h-4 w-4 mr-1 text-yellow-500" />
                Paid to researchers
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/50 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active This Week</CardTitle>
              <div className="p-2 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 transition-all duration-300">
                <Flame className="h-5 w-5 text-orange-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">2,845</div>
              <p className="text-sm text-muted-foreground flex items-center mt-2">
                <Globe className="h-4 w-4 mr-1 text-blue-500" />
                Researchers hunting
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Elite Top 3 Podium */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/5">
              <Star className="mr-2 h-4 w-4" />
              Elite Champions
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Hall of Fame
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The legendary security researchers leading the charge against digital threats
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-end gap-6 max-w-6xl mx-auto">
            {/* Mobile: Show Champion First */}
            <div className="block md:hidden order-1 w-full max-w-sm mx-auto">
              <div 
                className="group relative bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-900/30 dark:via-amber-900/30 dark:to-orange-900/30 rounded-3xl p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl border-2 border-yellow-300 dark:border-yellow-600 overflow-hidden"
                onClick={() => handleResearcherClick(topResearchers[0])}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-amber-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 font-bold">
                    <Crown className="h-4 w-4 mr-1" />
                    CHAMPION
                  </Badge>
                </div>
                <div className="relative z-10 text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-amber-400 animate-pulse" />
                    <Avatar className="h-24 w-24 mx-auto ring-4 ring-yellow-300 dark:ring-yellow-500 shadow-2xl relative z-10">
                      <AvatarImage src={topResearchers[0].avatar} alt={topResearchers[0].name} />
                      <AvatarFallback className="text-2xl bg-gradient-to-br from-yellow-200 to-amber-200 dark:from-yellow-800 dark:to-amber-800 text-yellow-800 dark:text-yellow-200">AK</AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-2 -right-2 bg-yellow-400 dark:bg-yellow-500 rounded-full p-2 shadow-lg">
                      <Trophy className="h-6 w-6 text-yellow-800 dark:text-yellow-900" />
                    </div>
                  </div>
                  <h3 className="font-bold text-2xl mb-2 text-yellow-900 dark:text-yellow-100">{topResearchers[0].name}</h3>
                  <p className="text-yellow-700 dark:text-yellow-300 mb-4">@{topResearchers[0].username}</p>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold bg-gradient-to-r from-yellow-700 to-amber-700 bg-clip-text text-transparent">{topResearchers[0].totalBounty}</div>
                    <div className="flex justify-center space-x-4 text-sm text-yellow-700 dark:text-yellow-300">
                      <span className="flex items-center">
                        <Target className="h-4 w-4 mr-1" />
                        {topResearchers[0].bugsFound} bugs
                      </span>
                      <span className="flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        {topResearchers[0].rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: Second and Third Place */}
            <div className="grid grid-cols-2 gap-4 md:hidden order-2 w-full">
              {/* Second Place Mobile */}
              <div 
                className="group bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border border-slate-200 dark:border-slate-700"
                onClick={() => handleResearcherClick(topResearchers[1])}
              >
                <div className="relative text-center">
                  <Avatar className="h-16 w-16 mx-auto mb-4 ring-3 ring-slate-300 dark:ring-slate-600">
                    <AvatarImage src={topResearchers[1].avatar} alt={topResearchers[1].name} />
                    <AvatarFallback className="bg-slate-200 dark:bg-slate-700">PS</AvatarFallback>
                  </Avatar>
                  <div className="absolute -top-1 -right-1">
                    <Medal className="h-8 w-8 text-slate-500" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{topResearchers[1].name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">@{topResearchers[1].username}</p>
                  <div className="text-lg font-bold text-slate-600 dark:text-slate-400">{topResearchers[1].totalBounty}</div>
                </div>
              </div>

              {/* Third Place Mobile */}
              <div 
                className="group bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border border-amber-200 dark:border-amber-700"
                onClick={() => handleResearcherClick(topResearchers[2])}
              >
                <div className="relative text-center">
                  <Avatar className="h-16 w-16 mx-auto mb-4 ring-3 ring-amber-300 dark:ring-amber-600">
                    <AvatarImage src={topResearchers[2].avatar} alt={topResearchers[2].name} />
                    <AvatarFallback className="bg-amber-200 dark:bg-amber-800">RS</AvatarFallback>
                  </Avatar>
                  <div className="absolute -top-1 -right-1">
                    <Award className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{topResearchers[2].name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">@{topResearchers[2].username}</p>
                  <div className="text-lg font-bold text-amber-700 dark:text-amber-500">{topResearchers[2].totalBounty}</div>
                </div>
              </div>
            </div>

            {/* Desktop: Traditional Podium Layout */}
            <div className="hidden md:flex justify-center items-end gap-8">
              {/* Second Place - Desktop */}
              <div className="animate-fade-in" style={{animationDelay: '0.1s'}}>
                <div 
                  className="group relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
                  onClick={() => handleResearcherClick(topResearchers[1])}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-400/10 to-slate-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 font-semibold">
                      2ND PLACE
                    </Badge>
                  </div>
                  <div className="relative z-10 text-center">
                    <div className="relative mb-6">
                      <Avatar className="h-20 w-20 mx-auto ring-4 ring-slate-300 dark:ring-slate-600 shadow-xl">
                        <AvatarImage src={topResearchers[1].avatar} alt={topResearchers[1].name} />
                        <AvatarFallback className="text-lg bg-slate-200 dark:bg-slate-700">PS</AvatarFallback>
                      </Avatar>
                      <div className="absolute -top-2 -right-2">
                        <Medal className="h-8 w-8 text-slate-500" />
                      </div>
                    </div>
                    <h3 className="font-bold text-xl mb-2">{topResearchers[1].name}</h3>
                    <p className="text-muted-foreground mb-4">@{topResearchers[1].username}</p>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-slate-600 dark:text-slate-400">{topResearchers[1].totalBounty}</div>
                      <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
                        <span>{topResearchers[1].bugsFound} bugs</span>
                        <span>⭐ {topResearchers[1].rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* First Place - Desktop Champion */}
              <div className="animate-fade-in">
                <div 
                  className="group relative bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-900/30 dark:via-amber-900/30 dark:to-orange-900/30 rounded-3xl p-12 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl border-2 border-yellow-300 dark:border-yellow-600 overflow-hidden"
                  onClick={() => handleResearcherClick(topResearchers[0])}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-amber-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-amber-400 text-yellow-900 font-bold">
                      <Crown className="h-4 w-4 mr-1" />
                      CHAMPION
                    </Badge>
                  </div>
                  <div className="relative z-10 text-center">
                    <div className="relative mb-8">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-amber-400 animate-pulse opacity-20" />
                      <Avatar className="h-32 w-32 mx-auto ring-6 ring-yellow-300 dark:ring-yellow-500 shadow-2xl relative z-10">
                        <AvatarImage src={topResearchers[0].avatar} alt={topResearchers[0].name} />
                        <AvatarFallback className="text-3xl bg-gradient-to-br from-yellow-200 to-amber-200 dark:from-yellow-800 dark:to-amber-800 text-yellow-800 dark:text-yellow-200">AK</AvatarFallback>
                      </Avatar>
                      <div className="absolute -top-4 -right-4 bg-yellow-400 dark:bg-yellow-500 rounded-full p-3 shadow-xl">
                        <Trophy className="h-10 w-10 text-yellow-800 dark:text-yellow-900" />
                      </div>
                    </div>
                    <h3 className="font-bold text-3xl mb-3 text-yellow-900 dark:text-yellow-100">{topResearchers[0].name}</h3>
                    <p className="text-yellow-700 dark:text-yellow-300 mb-6 text-lg">@{topResearchers[0].username}</p>
                    <div className="space-y-3">
                      <div className="text-4xl font-bold bg-gradient-to-r from-yellow-700 to-amber-700 bg-clip-text text-transparent">{topResearchers[0].totalBounty}</div>
                      <div className="flex justify-center space-x-6 text-sm text-yellow-700 dark:text-yellow-300">
                        <span className="flex items-center">
                          <Target className="h-4 w-4 mr-1" />
                          {topResearchers[0].bugsFound} bugs
                        </span>
                        <span className="flex items-center">
                          <Star className="h-4 w-4 mr-1" />
                          {topResearchers[0].rating} rating
                        </span>
                        <span className="flex items-center">
                          <Flame className="h-4 w-4 mr-1" />
                          {topResearchers[0].level}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third Place - Desktop */}
              <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div 
                  className="group relative bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-2xl p-8 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-amber-200 dark:border-amber-700 overflow-hidden"
                  onClick={() => handleResearcherClick(topResearchers[2])}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="outline" className="border-amber-300 text-amber-700 dark:border-amber-600 dark:text-amber-400 font-semibold">
                      3RD PLACE
                    </Badge>
                  </div>
                  <div className="relative z-10 text-center">
                    <div className="relative mb-6">
                      <Avatar className="h-20 w-20 mx-auto ring-4 ring-amber-300 dark:ring-amber-600 shadow-xl">
                        <AvatarImage src={topResearchers[2].avatar} alt={topResearchers[2].name} />
                        <AvatarFallback className="text-lg bg-amber-200 dark:bg-amber-800">RS</AvatarFallback>
                      </Avatar>
                      <div className="absolute -top-2 -right-2">
                        <Award className="h-8 w-8 text-amber-600" />
                      </div>
                    </div>
                    <h3 className="font-bold text-xl mb-2">{topResearchers[2].name}</h3>
                    <p className="text-muted-foreground mb-4">@{topResearchers[2].username}</p>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-amber-700 dark:text-amber-500">{topResearchers[2].totalBounty}</div>
                      <div className="flex justify-center space-x-4 text-sm text-muted-foreground">
                        <span>{topResearchers[2].bugsFound} bugs</span>
                        <span>⭐ {topResearchers[2].rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Full Leaderboard */}
        <section>
          <Card className="border-0 shadow-xl bg-gradient-to-b from-card to-card/50">
            <CardHeader className="border-b bg-gradient-to-r from-muted/50 to-muted/30">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Global Rankings
                </CardTitle>
                <Badge variant="outline" className="border-primary/20 bg-primary/5">
                  <Users className="h-4 w-4 mr-2" />
                  Top 100 Researchers
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-2">
                {topResearchers.map((researcher, index) => (
                  <div 
                    key={researcher.rank} 
                    className="group flex items-center justify-between p-6 hover:bg-gradient-to-r hover:from-muted/20 hover:to-muted/10 transition-all duration-300 cursor-pointer border-b border-muted/20 last:border-b-0"
                    onClick={() => handleResearcherClick(researcher)}
                  >
                    <div className="flex items-center space-x-6">
                      {/* Rank */}
                      <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-muted to-muted/50 group-hover:from-primary/10 group-hover:to-primary/5 transition-all duration-300">
                        {getRankIcon(researcher.rank)}
                      </div>
                      
                      {/* Avatar */}
                      <div className="relative">
                        <Avatar className="h-16 w-16 ring-2 ring-muted group-hover:ring-primary/30 transition-all duration-300">
                          <AvatarImage src={researcher.avatar} alt={researcher.name} />
                          <AvatarFallback className="bg-gradient-to-br from-muted to-muted/50 text-lg font-semibold">
                            {researcher.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-1 -right-1">
                          <Badge variant="outline" className="text-xs px-2 py-0.5 bg-background/80 backdrop-blur-sm">
                            {researcher.level}
                          </Badge>
                        </div>
                      </div>
                      
                      {/* Info */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">
                            {researcher.name}
                          </h3>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                            <span className="text-sm font-medium text-yellow-600">{researcher.rating}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-2">@{researcher.username}</p>
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="text-xs px-2 py-1 bg-primary/5 border-primary/20">
                            {researcher.speciality}
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {researcher.country}
                          </span>
                          <span className="text-xs text-muted-foreground flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {researcher.joinedDate}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="text-right space-y-1">
                      <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {researcher.totalBounty}
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center justify-end">
                        <Target className="h-4 w-4 mr-1" />
                        {researcher.bugsFound} bugs found
                      </div>
                      <div className="text-sm text-muted-foreground flex items-center justify-end">
                        <Activity className="h-4 w-4 mr-1" />
                        Rep: {researcher.reputation.toLocaleString()}
                      </div>
                      <div className="flex items-center justify-end">
                        <Button variant="ghost" size="sm" className="h-8 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          View Profile
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
      
      {/* Dialogs */}
      <ResearcherProfileDialog
        open={showProfile}
        onOpenChange={setShowProfile}
        researcher={selectedResearcher}
        onMessageClick={handleMessageClick}
      />
      
      <ResearcherMessageDialog
        open={showMessage}
        onOpenChange={setShowMessage}
        researcher={selectedResearcher}
      />
    </div>
  );
};

export default Leaderboard;