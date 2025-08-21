import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Building2, Eye, EyeOff, Mail, Lock, Github, Chrome } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const OrganizationSignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Demo authentication for organizations
    setTimeout(() => {
      if (email && password) {
        // Store user data in localStorage for demo
        const userData = {
          email,
          type: "organization",
          name: "Demo Organization",
          loginTime: new Date().toISOString()
        };
        localStorage.setItem("bugkabaap_user", JSON.stringify(userData));
        
        toast({
          title: "Welcome Back!",
          description: "Successfully signed in as organization.",
        });
        navigate("/org-dashboard");
      } else {
        toast({
          title: "Invalid Credentials",
          description: "Please enter valid email and password.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleSocialAuth = (provider: string) => {
    toast({
      title: "Social Authentication",
      description: `${provider} authentication for organizations coming soon!`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <Building2 className="h-12 w-12 text-primary" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full"></div>
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-2">Organization Login</h1>
              <p className="text-muted-foreground">
                Access your organization dashboard
              </p>
            </div>

            {/* Demo Notice */}
            <Card className="mb-6 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Building2 className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                      Organization Portal
                    </p>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Demo organization login with localStorage authentication.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sign In Form */}
            <Card>
              <CardHeader>
                <CardTitle>Organization Sign In</CardTitle>
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
                      Or continue with email
                    </span>
                  </div>
                </div>

                {/* Email/Password Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Organization Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="org@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter organization password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link 
                      to="/organization/forgot-password" 
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </form>

                {/* Sign Up Link */}
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Don't have an organization account?{" "}
                    <Link 
                      to="/organization/signup" 
                      className="text-primary hover:underline font-medium"
                    >
                      Register organization
                    </Link>
                  </p>
                </div>

                {/* Switch to Researcher */}
                <div className="text-center pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    Are you a researcher?{" "}
                    <Link 
                      to="/researcher/signin" 
                      className="text-primary hover:underline font-medium"
                    >
                      Researcher Login
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Card className="p-4 text-center">
                <Building2 className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Organization Access</p>
                <p className="text-xs text-muted-foreground">Full dashboard</p>
              </Card>
              <Card className="p-4 text-center">
                <Badge variant="secondary" className="mb-2">Enterprise</Badge>
                <p className="text-sm font-medium">Premium Features</p>
                <p className="text-xs text-muted-foreground">Team management</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OrganizationSignIn;