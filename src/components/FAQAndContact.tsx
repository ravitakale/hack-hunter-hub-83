import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  HelpCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Shield,
  DollarSign,
  FileText,
  Users,
  Send
} from "lucide-react";

const FAQAndContact = () => {
  const faqData = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I start bug bounty hunting?",
          answer: "Start by learning web application security fundamentals, practice on legal platforms like HackTheBox or TryHackMe, and join beginner-friendly programs. Our learning paths will guide you through the essential skills."
        },
        {
          question: "What skills do I need for security research?",
          answer: "Essential skills include understanding of web technologies (HTML, HTTP, JavaScript), networking basics, common vulnerabilities (OWASP Top 10), and tools like Burp Suite, OWASP ZAP, and Nmap."
        }
      ]
    },
    {
      category: "Payments & Rewards",
      questions: [
        {
          question: "How and when do I get paid?",
          answer: "Payments are processed weekly on Fridays. Once your vulnerability is validated and accepted, payment is typically processed within 7-14 business days to your chosen payment method."
        },
        {
          question: "What payment methods are supported?",
          answer: "We support bank transfers, PayPal, UPI (for Indian users), and cryptocurrency payments. You can configure your preferred method in your payment settings."
        },
        {
          question: "How are reward amounts determined?",
          answer: "Rewards are based on vulnerability severity (Critical: $500-$5000, High: $200-$2000, Medium: $100-$1000, Low: $50-$500) and the specific program's scope and budget."
        }
      ]
    },
    {
      category: "Reports & Submissions",
      questions: [
        {
          question: "What makes a good vulnerability report?",
          answer: "Include clear reproduction steps, proof of concept, impact assessment, affected URLs/endpoints, and suggested remediation. Use our report template for best results."
        },
        {
          question: "How long does report review take?",
          answer: "Initial response within 24-48 hours for critical issues, 3-5 business days for others. Complete resolution typically takes 1-2 weeks depending on complexity."
        }
      ]
    },
    {
      category: "Programs & Scope",
      questions: [
        {
          question: "How do I choose the right program?",
          answer: "Consider your skill level, program scope, reward ranges, and response times. Start with programs marked 'Beginner Friendly' and gradually move to more complex targets."
        },
        {
          question: "What's in scope vs out of scope?",
          answer: "Each program defines its scope clearly. Generally, web apps and APIs are in scope, while social engineering, physical attacks, and DoS are usually out of scope. Always check program details."
        }
      ]
    }
  ];

  return (
    <div className="space-y-12">
      {/* FAQ Section */}
      <section>
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="h-6 w-6 text-primary" />
            <Badge variant="outline" className="px-3 py-1">
              FAQ
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about bug bounty hunting, payments, and security research
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {faqData.map((category, categoryIndex) => (
            <Card key={category.category} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {categoryIndex === 0 && <Shield className="h-5 w-5 text-blue-600" />}
                  {categoryIndex === 1 && <DollarSign className="h-5 w-5 text-green-600" />}
                  {categoryIndex === 2 && <FileText className="h-5 w-5 text-purple-600" />}
                  {categoryIndex === 3 && <Users className="h-5 w-5 text-orange-600" />}
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                      <AccordionTrigger className="text-left hover:text-primary transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <section>
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail className="h-6 w-6 text-primary" />
            <Badge variant="outline" className="px-3 py-1">
              Contact
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have questions? Need support? Our team is here to help you succeed in your security research journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="px-0 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="How can we help you?" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea 
                    placeholder="Tell us about your question or issue..."
                    className="min-h-32"
                  />
                </div>
                <Button className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-0 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Support</h3>
                    <p className="text-sm text-muted-foreground">support@securityhub.com</p>
                    <p className="text-xs text-muted-foreground">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone Support</h3>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-xs text-muted-foreground">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office</h3>
                    <p className="text-sm text-muted-foreground">
                      123 Security Street<br />
                      Tech City, TC 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Support Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 text-center bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
              <h3 className="font-semibold mb-2">Emergency Security Issues?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                For critical security vulnerabilities, use our priority contact
              </p>
              <Button variant="outline" className="w-full">
                Emergency Contact
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQAndContact;