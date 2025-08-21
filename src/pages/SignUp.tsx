import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Shield, Eye, EyeOff, Mail, Lock, User, Github, Chrome, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    subscribeNewsletter: true
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Demo registration for researchers
    setTimeout(() => {
      // Store user data in localStorage for demo
      const userData = {
        email: formData.email,
        type: "researcher",
        name: `${formData.firstName} ${formData.lastName}`,
        loginTime: new Date().toISOString()
      };
      localStorage.setItem("bugkabaap_user", JSON.stringify(userData));
      
      toast({
        title: "Registration Successful!",
        description: "Researcher account created successfully.",
      });
      navigate("/");
      setIsLoading(false);
    }, 1000);
  };

  const handleSocialAuth = (provider: string) => {
    toast({
      title: "Social Authentication",
      description: `${provider} authentication will be available after Supabase setup.`,
      variant: "destructive",
    });
  };

  const benefits = [
    "Access to 500+ bug bounty programs",
    "Earn up to ₹10L+ in rewards",
    "Join community of 15K+ researchers",
    "Get exclusive courses and training",
    "Real-time vulnerability alerts",
    "Professional profile and leaderboard"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Left Side - Benefits */}
            <div className="lg:pr-8">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <Shield className="h-12 w-12 text-primary" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full"></div>
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Join India's Premier <span className="text-primary">Bug Bounty Platform</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Start your cybersecurity journey with Bug Ka Baap and connect with leading companies worldwide.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold mb-4">What you'll get:</h3>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Programs</div>
                </Card>
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-accent">₹50L+</div>
                  <div className="text-sm text-muted-foreground">Rewards</div>
                </Card>
                <Card className="p-4 text-center">
                  <div className="text-2xl font-bold text-medium">15K+</div>
                  <div className="text-sm text-muted-foreground">Researchers</div>
                </Card>
              </div>
            </div>

            {/* Right Side - Sign Up Form */}
            <div>
              {/* Demo Notice */}
              <Card className="mb-6 border-orange-200 bg-orange-50 dark:bg-orange-950/20">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-orange-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-orange-800 dark:text-orange-200">
                        Demo Mode Active
                      </p>
                      <p className="text-sm text-orange-700 dark:text-orange-300">
                        This is a demonstration. Enable Supabase authentication to activate real sign up functionality.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Create Your Account</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  
                  {/* Social Authentication */}
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => handleSocialAuth("Google")}
                    >
                      <Chrome className="h-4 w-4 mr-2" />
                      Continue with Google
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => handleSocialAuth("GitHub")}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Continue with GitHub
                    </Button>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">
                        Or create account with email
                      </span>
                    </div>
                  </div>

                  {/* Sign Up Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Fields */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="firstName"
                            type="text"
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Last name"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          value={formData.password}
                          onChange={(e) => handleInputChange("password", e.target.value)}
                          className="pl-10 pr-10"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                          className="pl-10 pr-10"
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    {/* Checkboxes */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.agreeToTerms}
                          onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                        />
                        <Label htmlFor="terms" className="text-sm">
                          I agree to the{" "}
                          <Link to="/terms" className="text-primary hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link to="/privacy" className="text-primary hover:underline">
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="newsletter"
                          checked={formData.subscribeNewsletter}
                          onCheckedChange={(checked) => handleInputChange("subscribeNewsletter", checked as boolean)}
                        />
                        <Label htmlFor="newsletter" className="text-sm">
                          Subscribe to our newsletter for updates and tips
                        </Label>
                      </div>
                    </div>

                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Creating account..." : "Create Account"}
                    </Button>
                  </form>

                {/* Sign In Link */}
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link 
                      to="/researcher/signin" 
                      className="text-primary hover:underline font-medium"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>

                {/* Switch to Organization */}
                <div className="text-center pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    Are you an organization?{" "}
                    <Link 
                      to="/organization/signup" 
                      className="text-primary hover:underline font-medium"
                    >
                      Organization Registration
                    </Link>
                  </p>
                </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SignUp;