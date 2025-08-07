import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, GraduationCap, Users, Edit3, Globe } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Ryze Platform",
      description: "Comprehensive marketplace for websites, portfolios, and PhD researcher connections",
      features: ["Website Marketplace", "Portfolio Showcase", "PhD Research Network", "Partnership Opportunities"],
      cta: "Visit Ryze",
      ctaIcon: ExternalLink,
      highlight: true
    },
    {
      icon: GraduationCap,
      title: "Internship Program",
      description: "Technical internship opportunities focused on skills development, not job placement",
      features: ["Hands-on Learning", "Technical Skills", "Real Projects", "Mentorship"],
      cta: "Apply Now",
      ctaIcon: null,
      highlight: false
    },
    {
      icon: Edit3,
      title: "Editing Training",
      description: "Comprehensive editing basics curriculum for content creation and digital media",
      features: ["Video Editing", "Content Creation", "Digital Media", "Professional Tools"],
      cta: "Learn More",
      ctaIcon: null,
      highlight: false
    },
    {
      icon: Users,
      title: "Partnership Program",
      description: "Collaborate with HIVE5 and expand your reach through our growing network",
      features: ["Business Partnerships", "Seller Network", "Growth Opportunities", "Revenue Sharing"],
      cta: "Partner With Us",
      ctaIcon: null,
      highlight: false
    }
  ];

  return (
    <section id="ryze" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From innovative digital platforms to comprehensive learning programs, 
            HIVE5 offers complete solutions for your professional growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className={`card-elegant h-full transition-all duration-300 hover:scale-105 ${
                service.highlight ? 'ring-2 ring-primary/50 relative overflow-hidden' : ''
              }`}
            >
              {service.highlight && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-primary to-primary-light text-primary-foreground px-4 py-1 text-sm font-medium">
                  Featured
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-3 rounded-lg ${
                    service.highlight 
                      ? 'bg-gradient-to-br from-primary to-primary-light text-primary-foreground' 
                      : 'bg-primary/10 text-primary'
                  }`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={service.highlight ? "default" : "outline"}
                  className="w-full btn-hover-lift"
                  size="lg"
                  onClick={() => {
                    if (service.title === "Ryze Platform") {
                      window.location.href = "/partnership-program";
                    } else if (service.title === "Internship Program") {
                      window.location.href = "/apply";
                    } else if (service.title === "Editing Training") {
                      window.location.href = "/editing-training";
                    } else if (service.title === "Partnership Program") {
                      window.location.href = "/partnership-program";
                    }
                  }}
                >
                  {service.cta}
                  {service.ctaIcon && <service.ctaIcon className="ml-2 w-4 h-4" />}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-elegant max-w-4xl mx-auto p-8">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Whether you're looking to showcase your work on Ryze or develop new skills through our internship programs, 
              HIVE5 has the perfect solution for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hover-lift" asChild>
                <a href="/partnership-program">
                  Explore Ryze Platform <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="btn-hover-lift" asChild>
                <a href="/#internships">
                  View Internships <GraduationCap className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;