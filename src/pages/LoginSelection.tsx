import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Building2, User, ArrowRight } from "lucide-react";

const LoginSelection = () => {
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
          <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
          <p className="text-xl text-muted-foreground">Choose your account type to continue</p>
        </div>

        {/* Login Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Researcher Login */}
          <Card className="relative overflow-hidden border-2 hover:border-primary transition-colors group cursor-pointer">
            <Link to="/researcher/signin" className="block">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <User className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl">Security Researcher</CardTitle>
                <CardDescription className="text-base">
                  Find vulnerabilities, submit reports, and earn bounties
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Access bug bounty programs
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Submit vulnerability reports
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Track earnings and rankings
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Join security community
                  </div>
                </div>
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  Continue as Researcher
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Link>
          </Card>

          {/* Organization Login */}
          <Card className="relative overflow-hidden border-2 hover:border-primary transition-colors group cursor-pointer">
            <Link to="/organization/signin" className="block">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-full w-fit">
                  <Building2 className="h-12 w-12 text-accent" />
                </div>
                <CardTitle className="text-2xl">Organization</CardTitle>
                <CardDescription className="text-base">
                  Launch bug bounty programs and manage security testing
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Create bug bounty programs
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Review vulnerability reports
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Manage researcher payouts
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Access security analytics
                  </div>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground border-accent">
                  Continue as Organization
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Link>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary hover:underline font-medium">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSelection;