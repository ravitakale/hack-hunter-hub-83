import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, Server, Key, FileCheck } from "lucide-react";

const Security = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Shield className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Security</h1>
            <p className="text-muted-foreground text-lg">
              Your security and privacy are our top priorities. Learn about our comprehensive 
              security measures and practices.
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  Data Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Encryption</h3>
                  <p className="text-muted-foreground">
                    All data transmission is secured using industry-standard TLS 1.3 encryption. 
                    Sensitive data is encrypted at rest using AES-256 encryption standards.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Data Isolation</h3>
                  <p className="text-muted-foreground">
                    We maintain strict data isolation between different organizations and users. 
                    Each bug bounty program operates in its own secure environment.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Backup and Recovery</h3>
                  <p className="text-muted-foreground">
                    Regular automated backups ensure data integrity and availability. 
                    Our disaster recovery procedures guarantee minimal downtime.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="h-5 w-5 text-primary" />
                  Authentication and Access Control
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Multi-Factor Authentication</h3>
                  <p className="text-muted-foreground">
                    We support and recommend multi-factor authentication (MFA) for all user accounts. 
                    Additional security options include hardware security keys.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Role-Based Access</h3>
                  <p className="text-muted-foreground">
                    Access to sensitive data and functions is restricted based on user roles and 
                    the principle of least privilege.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Session Management</h3>
                  <p className="text-muted-foreground">
                    Secure session tokens with automatic expiration and protection against 
                    session hijacking and fixation attacks.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-primary" />
                  Infrastructure Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Cloud Security</h3>
                  <p className="text-muted-foreground">
                    Our infrastructure is hosted on leading cloud providers with SOC 2 Type II 
                    compliance and enterprise-grade security controls.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Network Security</h3>
                  <p className="text-muted-foreground">
                    Advanced firewalls, intrusion detection systems, and DDoS protection 
                    safeguard our network infrastructure.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Monitoring and Logging</h3>
                  <p className="text-muted-foreground">
                    Comprehensive logging and real-time monitoring systems detect and respond 
                    to security threats immediately.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Privacy and Transparency
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Data Minimization</h3>
                  <p className="text-muted-foreground">
                    We collect and process only the minimum amount of personal data necessary 
                    to provide our services effectively.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Transparency Reports</h3>
                  <p className="text-muted-foreground">
                    Regular transparency reports detail our security practices, incident responses, 
                    and compliance with international privacy regulations.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Third-Party Audits</h3>
                  <p className="text-muted-foreground">
                    Independent security audits and penetration testing ensure our security 
                    measures meet industry standards.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="h-5 w-5 text-primary" />
                  Compliance and Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Badge variant="secondary">ISO 27001</Badge>
                    <p className="text-sm text-muted-foreground">
                      Information Security Management
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Badge variant="secondary">SOC 2 Type II</Badge>
                    <p className="text-sm text-muted-foreground">
                      Security, Availability, and Confidentiality
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Badge variant="secondary">GDPR Compliant</Badge>
                    <p className="text-sm text-muted-foreground">
                      European Data Protection Regulation
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Badge variant="secondary">CCPA Compliant</Badge>
                    <p className="text-sm text-muted-foreground">
                      California Consumer Privacy Act
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Incident Response</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">24/7 Security Monitoring</h3>
                  <p className="text-muted-foreground">
                    Our security team monitors our systems around the clock to detect and 
                    respond to potential security incidents immediately.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Incident Response Plan</h3>
                  <p className="text-muted-foreground">
                    We maintain a comprehensive incident response plan with defined procedures 
                    for containment, investigation, and recovery.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">User Notification</h3>
                  <p className="text-muted-foreground">
                    In the unlikely event of a security incident affecting user data, 
                    we commit to transparent and timely communication.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Reporting Security Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We welcome responsible disclosure of security vulnerabilities. 
                  If you discover a security issue with our platform, please report it to us.
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Security Email:</strong> security@bugkabaap.com</p>
                  <p><strong>PGP Key:</strong> Available upon request</p>
                  <p><strong>Response Time:</strong> Within 24 hours</p>
                </div>
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    We follow responsible disclosure practices and will work with you to 
                    understand and resolve security issues promptly.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security Best Practices for Users</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Use strong, unique passwords for your Bug Ka Baap account</li>
                  <li>• Enable multi-factor authentication when available</li>
                  <li>• Keep your contact information up to date</li>
                  <li>• Log out of shared or public computers</li>
                  <li>• Report suspicious activity immediately</li>
                  <li>• Keep your browser and security software updated</li>
                  <li>• Be cautious of phishing attempts and suspicious emails</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Security;