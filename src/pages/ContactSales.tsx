import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  Building2,
  Users,
  Shield,
  Zap,
  CheckCircle,
  Star,
  Globe
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "sales@bugkabaap.com",
    description: "Get a response within 24 hours"
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (555) 123-4567",
    description: "Mon-Fri, 9AM-6PM EST"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "123 Security Street, Cyber City, CC 12345",
    description: "Schedule an office visit"
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Monday - Friday",
    description: "9:00 AM - 6:00 PM EST"
  }
];

const plans = [
  {
    name: "Startup",
    price: "$99",
    period: "/month",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 5 researchers",
      "Basic program management",
      "Standard support",
      "Core security tools"
    ],
    popular: false
  },
  {
    name: "Business",
    price: "$299",
    period: "/month", 
    description: "Ideal for growing organizations",
    features: [
      "Up to 25 researchers",
      "Advanced program management",
      "Priority support",
      "Full security toolkit",
      "Custom integrations"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large-scale security programs",
    features: [
      "Unlimited researchers",
      "White-label solution",
      "24/7 dedicated support",
      "Advanced analytics",
      "Custom development"
    ],
    popular: false
  }
];

export default function ContactSales() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    companySize: "",
    interest: "",
    message: ""
  });

  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Our sales team will contact you within 24 hours.",
    });
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      jobTitle: "",
      companySize: "",
      interest: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="relative text-center mb-20 py-12">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl" />
          <div className="relative max-w-5xl mx-auto">
            <Badge variant="outline" className="mb-6 text-sm font-medium border-primary/20 bg-primary/5">
              <Building2 className="mr-2 h-4 w-4" />
              Contact Sales
            </Badge>
            <h1 className="text-4xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Let's Build Your
              <br className="hidden sm:block" />
              <span className="text-primary"> Bug Bounty Program</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Connect with our security experts to discuss how Bug Ka Baap can help 
              your organization build a world-class vulnerability disclosure program that scales.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto text-sm text-muted-foreground">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Response in 24h</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Shield className="h-4 w-4 text-primary" />
                <span>Enterprise ready</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Globe className="h-4 w-4 text-primary" />
                <span>Global support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="p-8 border-0 shadow-xl bg-gradient-to-b from-card to-card/50">
            <CardHeader className="px-0 pt-0 pb-8">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Get in Touch
              </CardTitle>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Fill out the form below and our sales team will contact you within 24 hours 
                to discuss your security needs.
              </p>
            </CardHeader>
            <CardContent className="px-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Work Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="jobTitle">Job Title</Label>
                    <Input
                      id="jobTitle"
                      value={formData.jobTitle}
                      onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="companySize">Company Size</Label>
                  <Select value={formData.companySize} onValueChange={(value) => handleInputChange("companySize", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-1000">201-1,000 employees</SelectItem>
                      <SelectItem value="1000+">1,000+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="interest">What are you interested in?</Label>
                  <Select value={formData.interest} onValueChange={(value) => handleInputChange("interest", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bug-bounty">Bug Bounty Program</SelectItem>
                      <SelectItem value="vulnerability-management">Vulnerability Management</SelectItem>
                      <SelectItem value="security-training">Security Training</SelectItem>
                      <SelectItem value="penetration-testing">Penetration Testing</SelectItem>
                      <SelectItem value="consulting">Security Consulting</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your security needs..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Why Choose Us */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card className="p-8 border-0 shadow-xl bg-gradient-to-b from-card to-card/50">
              <CardHeader className="px-0 pt-0 pb-8">
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="group flex items-start space-x-6 p-4 rounded-2xl hover:bg-primary/5 transition-all duration-300">
                      <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex-shrink-0 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                        <info.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors duration-300">{info.title}</h4>
                        <p className="text-foreground font-medium text-lg mb-1">{info.value}</p>
                        <p className="text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="p-8 border-0 shadow-xl bg-gradient-to-b from-card to-card/50">
              <CardHeader className="px-0 pt-0 pb-8">
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Why Choose Bug Ka Baap?
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-3 rounded-xl hover:bg-primary/5 transition-all duration-300 group">
                    <div className="p-2 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-all duration-300">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <span className="text-lg group-hover:text-primary transition-colors duration-300">Trusted by 500+ organizations worldwide</span>
                  </div>
                  <div className="flex items-center space-x-4 p-3 rounded-xl hover:bg-primary/5 transition-all duration-300 group">
                    <div className="p-2 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-all duration-300">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <span className="text-lg group-hover:text-primary transition-colors duration-300">24/7 expert support and consultation</span>
                  </div>
                  <div className="flex items-center space-x-4 p-3 rounded-xl hover:bg-primary/5 transition-all duration-300 group">
                    <div className="p-2 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-all duration-300">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <span className="text-lg group-hover:text-primary transition-colors duration-300">Enterprise-grade security and compliance</span>
                  </div>
                  <div className="flex items-center space-x-4 p-3 rounded-xl hover:bg-primary/5 transition-all duration-300 group">
                    <div className="p-2 rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-all duration-300">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <span className="text-lg group-hover:text-primary transition-colors duration-300">Custom solutions for your unique needs</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pricing Plans */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the perfect plan for your organization's security needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative group hover:scale-105 transition-all duration-300 border-0 shadow-xl bg-gradient-to-b from-card to-card/50 ${plan.popular ? 'ring-2 ring-primary/20 shadow-primary/10' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-2 text-sm font-medium shadow-lg">
                      <Star className="h-4 w-4 mr-2" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-6 pt-8">
                  <CardTitle className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{plan.name}</CardTitle>
                  <div className="flex items-baseline justify-center space-x-2 mb-4">
                    <span className="text-5xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">{plan.price}</span>
                    <span className="text-muted-foreground text-lg">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">{plan.description}</p>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-4">
                        <div className="p-1 rounded-full bg-green-500/10">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        </div>
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all" 
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}