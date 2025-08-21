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
import { Shield, Eye, EyeOff, Mail, Lock, Github, Chrome, Bug, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [researcherType, setResearcherType] = useState<'manual-tester' | 'penetration-tester'>('manual-tester');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Demo authentication for researchers
    setTimeout(() => {
      if (email && password) {
        // Create user data for AuthContext
        const userData = {
          id: "demo_researcher_123",
          email,
          name: researcherType === 'manual-tester' ? "Alex Chen (Manual Tester)" : "Alex Chen (Penetration Tester)",
          username: "alex_security",
          type: "researcher" as const,
          researcherType,
          avatar: "/placeholder-avatar.jpg"
        };
        
        // Log in using AuthContext
        login(userData);
        
        toast({
          title: "Welcome Back!",
          description: "Successfully signed in as researcher.",
        });
        navigate("/");
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
      description: `${provider} authentication will be available after Supabase setup.`,
      variant: "destructive",
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
                  <Shield className="h-12 w-12 text-primary" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full"></div>
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-2">Researcher Login</h1>
              <p className="text-muted-foreground">
                Sign in to your researcher account
              </p>
            </div>

            {/* Demo Notice */}
            <Card className="mb-6 border-orange-200 bg-orange-50 dark:bg-orange-950/20">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-orange-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-orange-800 dark:text-orange-200">
                      Demo Mode Active - Manual Testing
                    </p>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      Use any email/password to test login functionality. User will be logged in as "Alex Chen".
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Test Credentials */}
            <Card className="mb-6 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                      Quick Test Login
                    </p>
                    <div className="mt-2 space-y-1">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => {
                          setEmail("test@researcher.com");
                          setPassword("test123");
                        }}
                        className="text-xs h-6 px-2 text-blue-700 dark:text-blue-300"
                      >
                        Fill test credentials
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sign In Form */}
            <Card>
              <CardHeader>
                <CardTitle>Sign In</CardTitle>
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

                {/* Researcher Type Selection */}
                <div className="space-y-3">
                  <Label>Researcher Type</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      type="button"
                      variant={researcherType === 'manual-tester' ? 'default' : 'outline'}
                      className="h-auto p-4 flex flex-col items-center space-y-2"
                      onClick={() => setResearcherType('manual-tester')}
                    >
                      <Search className="h-5 w-5" />
                      <div className="text-center">
                        <div className="text-sm font-medium">Manual Tester</div>
                        <div className="text-xs text-muted-foreground">Manual testing & QA</div>
                      </div>
                    </Button>
                    
                    <Button
                      type="button"
                      variant={researcherType === 'penetration-tester' ? 'default' : 'outline'}
                      className="h-auto p-4 flex flex-col items-center space-y-2"
                      onClick={() => setResearcherType('penetration-tester')}
                    >
                      <Bug className="h-5 w-5" />
                      <div className="text-center">
                        <div className="text-sm font-medium">Penetration Tester</div>
                        <div className="text-xs text-muted-foreground">Security testing</div>
                      </div>
                    </Button>
                  </div>
                </div>

                {/* Email/Password Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
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
                        placeholder="Enter your password"
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
                      to="/researcher/forgot-password" 
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
                    Don't have an account?{" "}
                    <Link 
                      to="/researcher/signup" 
                      className="text-primary hover:underline font-medium"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>

                {/* Switch to Organization */}
                <div className="text-center pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    Are you an organization?{" "}
                    <Link 
                      to="/organization/signin" 
                      className="text-primary hover:underline font-medium"
                    >
                      Organization Login
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <Card className="p-4 text-center">
                <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Secure Access</p>
                <p className="text-xs text-muted-foreground">Protected login</p>
              </Card>
              <Card className="p-4 text-center">
                <Badge variant="secondary" className="mb-2">Pro</Badge>
                <p className="text-sm font-medium">Premium Features</p>
                <p className="text-xs text-muted-foreground">Advanced tools</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SignIn;