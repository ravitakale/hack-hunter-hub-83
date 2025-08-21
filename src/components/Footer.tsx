import { Link } from "react-router-dom";
import { Shield, Bug, Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative">
                <Shield className="h-8 w-8 text-primary" />
                <Bug className="h-4 w-4 text-accent absolute -bottom-1 -right-1" />
              </div>
              <span className="text-xl font-bold">Bug Ka Baap</span>
            </Link>
            <p className="text-muted-foreground">
              India's premier bug bounty platform connecting security researchers with organizations worldwide.
            </p>
            <div className="flex space-x-4">
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Mail className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>

          {/* For Researchers */}
          <div>
            <h3 className="font-semibold mb-4">For Researchers</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/researcher/signup" className="hover:text-primary">Sign Up</Link></li>
              <li><Link to="/programs" className="hover:text-primary">Browse Programs</Link></li>
              <li><Link to="/courses" className="hover:text-primary">Security Courses</Link></li>
              <li><Link to="/leaderboard" className="hover:text-primary">Leaderboard</Link></li>
              <li><Link to="/activity" className="hover:text-primary">Recent Activity</Link></li>
            </ul>
          </div>

          {/* For Organizations */}
          <div>
            <h3 className="font-semibold mb-4">For Organizations</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/organization/signup" className="hover:text-primary">Create Program</Link></li>
              <li><Link to="/organization/signin" className="hover:text-primary">Org Dashboard</Link></li>
              <li><Link to="/how-it-works" className="hover:text-primary">How It Works</Link></li>
              <li><Link to="/contact-sales" className="hover:text-primary">Contact Sales</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><a href="#" className="hover:text-primary">Documentation</a></li>
              <li><a href="#" className="hover:text-primary">API</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Bug Ka Baap. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
            <Link to="/security" className="text-sm text-muted-foreground hover:text-primary">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;