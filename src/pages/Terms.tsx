import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By accessing and using Bug Ka Baap platform, you accept and agree to be bound by 
                  the terms and provision of this agreement. If you do not agree to abide by the 
                  above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Platform Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bug Ka Baap is India's premier bug bounty platform that connects security 
                  researchers with organizations worldwide. We facilitate responsible disclosure 
                  of security vulnerabilities and provide a marketplace for cybersecurity talent.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. User Accounts and Registration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Account Creation</h3>
                  <p className="text-muted-foreground">
                    You must provide accurate, complete, and current information during registration. 
                    You are responsible for maintaining the confidentiality of your account credentials.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Age Requirements</h3>
                  <p className="text-muted-foreground">
                    You must be at least 18 years old to use our platform. By creating an account, 
                    you represent that you meet this age requirement.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Account Security</h3>
                  <p className="text-muted-foreground">
                    You are responsible for all activities that occur under your account. 
                    Notify us immediately of any unauthorized use of your account.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Bug Bounty Programs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Researcher Obligations</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Follow responsible disclosure practices</li>
                    <li>• Comply with program-specific rules and scope</li>
                    <li>• Provide clear, actionable vulnerability reports</li>
                    <li>• Avoid accessing or modifying data without explicit permission</li>
                    <li>• Report vulnerabilities promptly and exclusively through our platform</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Organization Obligations</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Respond to valid reports in a timely manner</li>
                    <li>• Provide clear program scope and rules</li>
                    <li>• Process rewards fairly and promptly</li>
                    <li>• Maintain professional communication with researchers</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Prohibited Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Engaging in any illegal or unauthorized activities</li>
                  <li>• Attempting to access systems outside of authorized scope</li>
                  <li>• Sharing vulnerabilities publicly before proper disclosure</li>
                  <li>• Creating multiple accounts to circumvent platform rules</li>
                  <li>• Harassing or threatening other users or organizations</li>
                  <li>• Submitting false or misleading vulnerability reports</li>
                  <li>• Using automated tools without explicit permission</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bug Ka Baap and its original content, features, and functionality are owned by 
                  Bug Ka Baap and are protected by international copyright, trademark, patent, 
                  trade secret, and other intellectual property laws.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Payment and Rewards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Reward Determination</h3>
                  <p className="text-muted-foreground">
                    Organizations determine reward amounts based on vulnerability severity, 
                    impact, and program-specific criteria. Bug Ka Baap facilitates but does 
                    not guarantee payments.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Platform Fees</h3>
                  <p className="text-muted-foreground">
                    Bug Ka Baap may charge service fees for platform usage, payment processing, 
                    and additional services. All fees will be clearly disclosed.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bug Ka Baap shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages, including without limitation, loss of 
                  profits, data, use, goodwill, or other intangible losses.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Termination</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We may terminate or suspend your account and bar access to the service 
                  immediately, without prior notice or liability, under our sole discretion, 
                  for any reason whatsoever, including violation of these Terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  These Terms shall be interpreted and governed by the laws of India, 
                  without regard to its conflict of law provisions. Any disputes shall be 
                  resolved in the courts of Mumbai, Maharashtra.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. We will notify users 
                  of any material changes. Your continued use of the platform constitutes 
                  acceptance of the modified terms.
                </p>
              </CardContent>
            </Card>

            <Separator className="my-8" />

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>Email: legal@bugkabaap.com</p>
                  <p>Address: Bug Ka Baap Legal Team</p>
                  <p>Mumbai, Maharashtra, India</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;