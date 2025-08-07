import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import logoImage from "@/assets/HIVE5 LOGO.jpeg";
import { 
  ExternalLink, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Ryze Platform", href: "/partnership-program" },
    { name: "Internships", href: "/#internships" },
    { name: "Founding Team", href: "/founders" },
    { name: "Contact", href: "/#contact" }
  ];

  const services = [
    { name: "Website Marketplace", href: "/partnership-program" },
    { name: "Portfolio Showcase", href: "/partnership-program" },
    { name: "PhD Research Network", href: "/partnership-program" },
    { name: "Partnership Program", href: "/partnership-program" },
    { name: "Editing Training", href: "/editing-training" },
    { name: "Technical Internships", href: "/apply" }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", href: "#" },
    { icon: Twitter, name: "Twitter", href: "#" },
    { icon: Linkedin, name: "LinkedIn", href: "#" },
    { icon: Instagram, name: "Instagram", href: "#" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src={logoImage} 
                alt="HIVE5 Logo" 
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-bold">HIVE5</span>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Founded by five tech professionals, HIVE5 bridges digital innovation 
              with practical learning through Ryze platform and comprehensive programs.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-background/80">hello@hive5.tech</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-background/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-background/80">Silicon Valley, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="text-background/80 hover:text-primary transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get Started</h3>
            <div className="space-y-4 mb-6">
              <Button 
                variant="secondary" 
                className="w-full btn-hover-lift"
                asChild
              >
                <a href="/partnership-program">
                  Visit Ryze Platform
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="w-full btn-hover-lift border-background/20 text-background hover:bg-background hover:text-foreground"
                asChild
              >
                <a href="/apply">Apply for Internship</a>
              </Button>
            </div>

            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  className="text-background/80 hover:text-primary hover:bg-background/10"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-background/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-background/60 text-sm">
            © 2024 HIVE5. All rights reserved. Built with passion by our team of 5.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a href="/privacy-policy" className="text-background/60 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-background/60 hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="/cookie-policy" className="text-background/60 hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>

        {/* Special Message */}
        <div className="text-center mt-8 pt-8 border-t border-background/20">
          <p className="text-background/60 text-sm italic">
            "Skills development, not job placement" - Our commitment to genuine learning
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
