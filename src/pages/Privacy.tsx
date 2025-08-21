import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Personal Information</h3>
                  <p className="text-muted-foreground">
                    We collect information you provide directly to us, such as when you create an account, 
                    submit bug reports, or contact us for support. This may include your name, email address, 
                    username, and professional information.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Technical Information</h3>
                  <p className="text-muted-foreground">
                    We automatically collect certain technical information when you use our platform, 
                    including your IP address, browser type, device information, and usage patterns.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Bug Report Data</h3>
                  <p className="text-muted-foreground">
                    When you submit bug reports, we collect the technical details, screenshots, 
                    and other information necessary to validate and process your submissions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• To provide and maintain our bug bounty platform services</li>
                  <li>• To process and validate bug reports and security findings</li>
                  <li>• To facilitate payments and rewards for valid submissions</li>
                  <li>• To communicate with you about your account and submissions</li>
                  <li>• To improve our platform and develop new features</li>
                  <li>• To ensure platform security and prevent fraud</li>
                  <li>• To comply with legal obligations and enforce our terms</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Information Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">With Organizations</h3>
                  <p className="text-muted-foreground">
                    We share relevant bug report information with the organizations that run 
                    bug bounty programs on our platform, but only as necessary for program administration.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Service Providers</h3>
                  <p className="text-muted-foreground">
                    We work with trusted third-party service providers who help us operate our platform, 
                    process payments, and provide customer support.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Legal Requirements</h3>
                  <p className="text-muted-foreground">
                    We may disclose your information if required by law, court order, or to protect 
                    the rights, property, or safety of Bug Ka Baap, our users, or others.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Data Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational security measures to protect 
                  your personal information against unauthorized access, alteration, disclosure, or 
                  destruction. However, no method of transmission over the internet or electronic 
                  storage is 100% secure.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Data Retention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We retain your personal information for as long as necessary to provide our services, 
                  comply with legal obligations, resolve disputes, and enforce our agreements. 
                  Bug report data may be retained longer for security research and platform improvement purposes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Account Information</h3>
                  <p className="text-muted-foreground">
                    You can update your account information at any time through your profile settings.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Data Access and Portability</h3>
                  <p className="text-muted-foreground">
                    You can request access to your personal information and, in some cases, 
                    receive a copy of your data in a portable format.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Data Deletion</h3>
                  <p className="text-muted-foreground">
                    You can request deletion of your personal information, subject to certain 
                    legal and legitimate business requirements.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to enhance your experience, 
                  analyze usage patterns, and provide personalized content. You can control 
                  cookie preferences through your browser settings.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your information may be transferred to and processed in countries other than 
                  your own. We ensure appropriate safeguards are in place to protect your 
                  personal information in accordance with applicable data protection laws.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our platform is not intended for children under 18 years of age. We do not 
                  knowingly collect personal information from children under 18. If we become 
                  aware that we have collected such information, we will take steps to delete it.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. We will notify you of 
                  any material changes by posting the new Privacy Policy on this page and 
                  updating the "Last updated" date.
                </p>
              </CardContent>
            </Card>

            <Separator className="my-8" />

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, 
                  please contact us at:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>Email: privacy@bugkabaap.com</p>
                  <p>Address: Bug Ka Baap Privacy Team</p>
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

export default Privacy;