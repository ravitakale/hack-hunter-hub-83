import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HelpCircle, Search, Shield, Users, DollarSign, FileText, Settings, MessageSquare } from "lucide-react";

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: Shield,
      questions: [
        {
          question: "What is a bug bounty program?",
          answer: "A bug bounty program is a deal offered by many websites, organizations and software developers by which individuals can receive recognition and compensation for reporting bugs, especially those pertaining to security exploits and vulnerabilities."
        },
        {
          question: "How do I get started as a security researcher?",
          answer: "Start by learning the fundamentals of web security, practice on legal platforms like our testing environments, understand common vulnerabilities (OWASP Top 10), and begin with programs that welcome beginners."
        },
        {
          question: "Do I need to be an expert to participate?",
          answer: "No! We welcome researchers of all skill levels. Many programs have different reward tiers, and even simple findings can be valuable. Start with easier targets and gradually work your way up."
        },
        {
          question: "What tools do I need to get started?",
          answer: "Basic tools include a web browser with developer tools, Burp Suite (free edition available), OWASP ZAP, and basic command-line tools. Many effective findings can be made with just a browser!"
        },
        {
          question: "How do I choose which programs to participate in?",
          answer: "Start with public programs that clearly define scope and have good reputations. Look for programs that match your skill level and provide clear guidelines for testing."
        }
      ]
    },
    {
      id: "submissions",
      title: "Report Submissions",
      icon: FileText,
      questions: [
        {
          question: "What makes a good vulnerability report?",
          answer: "A good report includes: clear title, detailed steps to reproduce, impact assessment, proof of concept, screenshots/videos, and suggested remediation. Be clear, concise, and professional."
        },
        {
          question: "How long does it take to review my report?",
          answer: "Review times vary by program, but typically range from 2-10 business days. Critical vulnerabilities are usually reviewed faster. You'll receive status updates throughout the process."
        },
        {
          question: "What happens if my report is a duplicate?",
          answer: "Duplicate reports won't receive rewards, but don't worry! This is a normal part of the learning process. Focus on understanding why it was a duplicate and keep hunting."
        },
        {
          question: "Can I submit the same vulnerability to multiple programs?",
          answer: "No, this is considered poor practice and violates most program terms. Submit to one program at a time and wait for their response before considering other options."
        },
        {
          question: "What should I do if I find a critical vulnerability?",
          answer: "Report it immediately through the proper channels, avoid public disclosure, don't exploit it beyond proof of concept, and follow the program's escalation procedures."
        }
      ]
    },
    {
      id: "rewards",
      title: "Rewards & Payments",
      icon: DollarSign,
      questions: [
        {
          question: "How are reward amounts determined?",
          answer: "Rewards are based on several factors: vulnerability severity (CVSS score), impact on the business, ease of exploitation, and the program's reward structure. Each program has its own criteria."
        },
        {
          question: "When will I receive my payment?",
          answer: "Payment timelines vary by program but typically occur 30-90 days after report acceptance. Some programs offer faster payment options or bug bounty bonuses for quick turnaround."
        },
        {
          question: "What payment methods are available?",
          answer: "Common payment methods include bank transfers, PayPal, cryptocurrency, and specialized bug bounty payment platforms. Payment options vary by program and region."
        },
        {
          question: "Are bug bounty rewards taxable?",
          answer: "Yes, in most jurisdictions bug bounty rewards are considered taxable income. Please consult with a tax professional for advice specific to your situation and location."
        },
        {
          question: "Can I negotiate reward amounts?",
          answer: "Generally, reward amounts are fixed based on the program's criteria. However, exceptionally high-impact findings or unique circumstances may sometimes warrant discussion with the program team."
        }
      ]
    },
    {
      id: "programs",
      title: "Programs & Scope",
      icon: Users,
      questions: [
        {
          question: "What's the difference between public and private programs?",
          answer: "Public programs are open to all researchers, while private programs require invitation. Private programs often have higher rewards but stricter requirements and limited participation."
        },
        {
          question: "What does 'scope' mean in a bug bounty program?",
          answer: "Scope defines what assets you're allowed to test (websites, applications, APIs) and what types of vulnerabilities the program is interested in. Always stay within the defined scope."
        },
        {
          question: "What happens if I test something out of scope?",
          answer: "Testing out of scope can result in report rejection, account suspension, or even legal consequences. Always read and understand the scope before beginning any testing."
        },
        {
          question: "How do I join private programs?",
          answer: "Private program invitations are typically based on your reputation, past performance, and demonstrated expertise. Build your profile through public programs and maintain professional conduct."
        },
        {
          question: "Can I request new assets to be added to scope?",
          answer: "Yes, you can suggest scope additions through the program's communication channels. Include justification for why the asset should be included and its relevance to the organization."
        }
      ]
    },
    {
      id: "manual-testing",
      title: "Manual Testing",
      icon: Search,
      questions: [
        {
          question: "What is manual testing in bug bounty context?",
          answer: "Manual testing involves human-driven testing of applications for usability, functionality, and user experience issues. It focuses on UI/UX problems, workflow issues, and business logic flaws."
        },
        {
          question: "How does manual testing differ from security testing?",
          answer: "Manual testing focuses on functionality, usability, and user experience, while security testing focuses on vulnerabilities and exploitable weaknesses. Both are valuable but serve different purposes."
        },
        {
          question: "What types of issues should I look for in manual testing?",
          answer: "Look for: broken functionality, poor user experience, data validation issues, workflow problems, accessibility issues, browser compatibility problems, and business logic errors."
        },
        {
          question: "Do manual testing findings receive rewards?",
          answer: "Yes! Many programs value manual testing findings, especially those that impact user experience or business operations. Rewards may be different from security vulnerabilities."
        },
        {
          question: "What tools are useful for manual testing?",
          answer: "Browser developer tools, screen readers (for accessibility), mobile device emulators, different browsers and operating systems, and basic automation tools for repetitive tasks."
        }
      ]
    },
    {
      id: "account",
      title: "Account & Platform",
      icon: Settings,
      questions: [
        {
          question: "How do I create an account?",
          answer: "Click 'Sign Up' and choose between Researcher or Organization account types. Fill in your information, verify your email, and complete your profile to get started."
        },
        {
          question: "What information should I include in my profile?",
          answer: "Include your skills, experience level, areas of expertise, and any relevant certifications. A complete profile helps programs understand your background and may lead to more opportunities."
        },
        {
          question: "How can I improve my researcher reputation?",
          answer: "Submit high-quality reports, maintain professional communication, follow program guidelines, be respectful to program teams, and consistently demonstrate ethical behavior."
        },
        {
          question: "Can I change my account type after registration?",
          answer: "Account type changes may be possible but require verification. Contact our support team if you need to change from researcher to organization account or vice versa."
        },
        {
          question: "How do I reset my password?",
          answer: "Click 'Forgot Password' on the login page, enter your email address, and follow the instructions sent to your email. Make sure to check your spam folder if you don't see the email."
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="h-8 w-8 text-primary" />
            <Badge variant="outline" className="px-4 py-2 text-sm">
              Help Center
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our platform, bug bounty programs, 
            and security research. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search frequently asked questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-base"
            />
          </div>
        </div>

        {/* FAQ Content */}
        <div className="max-w-5xl mx-auto">
          {searchQuery ? (
            // Filtered Search Results
            <div className="space-y-8">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((category) => (
                  <Card key={category.id} className="overflow-hidden">
                    <CardHeader className="bg-muted/30">
                      <CardTitle className="flex items-center gap-3">
                        <category.icon className="h-5 w-5 text-primary" />
                        {category.title}
                        <Badge variant="secondary" className="ml-auto">
                          {category.questions.length} results
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <Accordion type="multiple" className="w-full">
                        {category.questions.map((faq, index) => (
                          <AccordionItem key={index} value={`${category.id}-${index}`} className="border-b-0 px-6">
                            <AccordionTrigger className="text-left hover:text-primary transition-colors py-4">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <Card className="text-center py-12">
                  <CardContent>
                    <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No results found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your search terms or browse our categories below.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          ) : (
            // Category Tabs
            <Tabs defaultValue="getting-started" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto mb-8">
                {faqCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex flex-col items-center gap-2 py-3 px-2 text-xs data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <category.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{category.title}</span>
                    <span className="sm:hidden">{category.title.split(' ')[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {faqCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <category.icon className="h-6 w-6 text-primary" />
                        {category.title}
                        <Badge variant="outline" className="ml-auto">
                          {category.questions.length} questions
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {category.questions.map((faq, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
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
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Contact Support
                </Button>
                <Button variant="outline">
                  Join Community Discord
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;