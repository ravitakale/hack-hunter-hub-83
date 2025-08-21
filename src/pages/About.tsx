import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Target, 
  Award, 
  Users, 
  Globe, 
  CheckCircle, 
  Heart,
  Lightbulb,
  Lock,
  Zap,
  FileCheck,
  Trophy
} from "lucide-react";

const About = () => {
  const stats = [
    { icon: Shield, value: "500+", label: "Active Programs", color: "text-primary" },
    { icon: Users, value: "15K+", label: "Security Researchers", color: "text-accent" },
    { icon: Target, value: "₹50L+", label: "Rewards Distributed", color: "text-medium" },
    { icon: Globe, value: "50+", label: "Countries", color: "text-high" }
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize the security and privacy of our community and partners above all else."
    },
    {
      icon: Heart,
      title: "Community Driven",
      description: "Our platform is built by the community, for the community, fostering collaboration and growth."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously innovate to provide cutting-edge tools and opportunities for security researchers."
    },
    {
      icon: CheckCircle,
      title: "Transparency",
      description: "We maintain complete transparency in our processes, rewards, and community interactions."
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: "👨‍💼",
      description: "Former CISO with 15+ years in cybersecurity"
    },
    {
      name: "Priya Sharma",
      role: "Head of Security",
      image: "👩‍💻",
      description: "Ethical hacker and penetration testing expert"
    },
    {
      name: "Arjun Singh",
      role: "Community Manager",
      image: "👨‍🎓",
      description: "Bug bounty hunter turned community leader"
    },
    {
      name: "Sneha Patel",
      role: "Product Manager",
      image: "👩‍🔬",
      description: "Product strategist focused on user experience"
    }
  ];

  const milestones = [
    { year: "2020", event: "Platform Launch", description: "Bug Ka Baap was founded with a vision to democratize cybersecurity" },
    { year: "2021", event: "1000+ Researchers", description: "Reached our first milestone of 1000 active security researchers" },
    { year: "2022", event: "₹1 Crore Rewards", description: "Distributed over ₹1 crore in bug bounty rewards" },
    { year: "2023", event: "Global Expansion", description: "Expanded to serve researchers and companies worldwide" },
    { year: "2024", event: "AI Integration", description: "Launched AI-powered vulnerability detection tools" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              🚀 About Bug Ka Baap
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Empowering <span className="text-primary">Security</span>
              <br />Through Community
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're India's premier bug bounty platform, connecting ethical hackers with organizations to build a more secure digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Overview</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Bug Ka Baap is a comprehensive cybersecurity platform offering bug bounty programs, manual testing services, educational courses, and cutting-edge security tools for researchers and organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Bug Bounty Programs</h3>
              <p className="text-muted-foreground mb-4">
                Connect with 500+ active bug bounty programs from leading organizations worldwide. Submit vulnerabilities and earn competitive rewards.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Web Application Testing</li>
                <li>• Mobile App Security</li>
                <li>• API Security Assessment</li>
                <li>• Cloud Infrastructure Testing</li>
              </ul>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <FileCheck className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Manual Testing Services</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive manual testing programs for applications, including functional testing, usability testing, and security validation.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• User Authentication Testing</li>
                <li>• Payment Gateway Validation</li>
                <li>• Edge Case Scenarios</li>
                <li>• Cross-platform Compatibility</li>
              </ul>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Trophy className="h-12 w-12 text-medium mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Educational Courses</h3>
              <p className="text-muted-foreground mb-4">
                Learn cybersecurity skills through our comprehensive course library, from beginner to advanced levels with hands-on labs.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Web Security Fundamentals</li>
                <li>• Mobile App Penetration Testing</li>
                <li>• API Security Testing</li>
                <li>• Advanced Exploit Development</li>
              </ul>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Zap className="h-12 w-12 text-high mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Security Tools</h3>
              <p className="text-muted-foreground mb-4">
                Access cutting-edge security tools and AI-powered vulnerability detection systems to enhance your testing capabilities.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Vulnerability Scanners</li>
                <li>• AI-Powered Analysis</li>
                <li>• Custom Payload Generators</li>
                <li>• Reporting Templates</li>
              </ul>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Community & Jobs</h3>
              <p className="text-muted-foreground mb-4">
                Join a thriving community of 15K+ security researchers and access exclusive cybersecurity job opportunities.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Research Collaboration</li>
                <li>• Job Placement Assistance</li>
                <li>• Mentorship Programs</li>
                <li>• Global Leaderboards</li>
              </ul>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <Target className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Analytics & Reporting</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive analytics dashboard for tracking your progress, earnings, and performance across all platform activities.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Performance Metrics</li>
                <li>• Earnings Tracking</li>
                <li>• Activity Timeline</li>
                <li>• Detailed Reports</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Bug Ka Baap, we believe that cybersecurity is everyone's responsibility. Our mission is to create a platform where ethical hackers can collaborate with organizations to identify and fix security vulnerabilities before they can be exploited by malicious actors.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We're building the largest community of security researchers in India, providing them with the tools, knowledge, and opportunities they need to make the digital world safer for everyone.
              </p>
              <Button size="lg">
                <Zap className="mr-2 h-5 w-5" />
                Join Our Mission
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <Lock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Secure</h3>
                <p className="text-sm text-muted-foreground">Enterprise-grade security for all platforms</p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">Diverse global community of experts</p>
              </Card>
              <Card className="p-6 text-center">
                <Award className="h-12 w-12 text-medium mx-auto mb-4" />
                <h3 className="font-bold mb-2">Rewards</h3>
                <p className="text-sm text-muted-foreground">Fair and competitive compensation</p>
              </Card>
              <Card className="p-6 text-center">
                <Lightbulb className="h-12 w-12 text-high mx-auto mb-4" />
                <h3 className="font-bold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">Cutting-edge tools and methodologies</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate cybersecurity professionals dedicated to building a safer digital world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <div className="text-primary font-medium mb-3">{member.role}</div>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our mission to secure the digital world
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="p-6">
                      <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-bold mb-2">{milestone.event}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Us?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you're a security researcher looking for opportunities or an organization seeking to secure your digital assets, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Start Bug Hunting
              </Button>
              <Button variant="outline" size="lg">
                Launch a Program
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;