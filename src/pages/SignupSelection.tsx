import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Building2, User, ArrowRight, Check } from "lucide-react";

const SignupSelection = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="relative">
              <Shield className="h-12 w-12 text-primary" />
              <div className="h-6 w-6 text-accent absolute -bottom-1 -right-1 bg-background rounded-full flex items-center justify-center">
                <User className="h-4 w-4" />
              </div>
            </div>
            <span className="text-3xl font-bold">Bug Ka Baap</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Join Our Platform</h1>
          <p className="text-xl text-muted-foreground">Choose your account type to get started</p>
        </div>

        {/* Signup Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Researcher Signup */}
          <Card className="relative overflow-hidden border-2 hover:border-primary transition-colors group cursor-pointer">
            <Link to="/researcher/signup" className="block">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <User className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl">Security Researcher</CardTitle>
                <CardDescription className="text-base">
                  Start your journey in ethical hacking and bug bounties
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-green-500 mr-3" />
                    Free to join and participate
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-green-500 mr-3" />
                    Access to learning resources
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-green-500 mr-3" />
                    Connect with security community
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-green-500 mr-3" />
                    Earn money from discoveries
                  </div>
                </div>
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  Join as Researcher
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Perfect for ethical hackers and security enthusiasts
                </p>
              </CardContent>
            </Link>
          </Card>

          {/* Organization Signup */}
          <Card className="relative overflow-hidden border-2 hover:border-primary transition-colors group cursor-pointer">
            <Link to="/organization/signup" className="block">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-full w-fit">
                  <Building2 className="h-12 w-12 text-accent" />
                </div>
                <CardTitle className="text-2xl">Organization</CardTitle>
                <CardDescription className="text-base">
                  Secure your applications with crowdsourced security testing
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-green-500 mr-3" />
                    Launch custom bug bounty programs
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-green-500 mr-3" />
                    Access global security talent
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-green-500 mr-3" />
                    Comprehensive reporting tools
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-green-500 mr-3" />
                    24/7 platform support
                  </div>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground border-accent">
                  Join as Organization
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Ideal for companies and development teams
                </p>
              </CardContent>
            </Link>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline font-medium">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupSelection;