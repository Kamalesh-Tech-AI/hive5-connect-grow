import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Star, Trophy, Crown, ExternalLink, CheckCircle } from "lucide-react";

const PartnershipProgram = () => {
  const tiers = [
    {
      id: 1,
      name: "Standard Sellers",
      status: "Entry Level",
      icon: Users,
      color: "bg-slate-100 text-slate-700",
      revenueShare: "60-65%",
      requirements: ["Basic registration and profile setup"],
      benefits: [
        "Basic marketplace access",
        "Standard listing visibility", 
        "Basic customer support"
      ]
    },
    {
      id: 2,
      name: "Basic Partners", 
      status: "Growing",
      icon: Users,
      color: "bg-blue-100 text-blue-700",
      revenueShare: "70%",
      requirements: ["1-3 successful projects completed"],
      benefits: [
        "Entry-level partnership benefits",
        "Access to basic partnership resources and tools",
        "Basic project visibility and promotional support"
      ]
    },
    {
      id: 3,
      name: "Developers",
      status: "Featured",
      icon: Star,
      color: "bg-blue-100 text-blue-700",
      revenueShare: "75-80%",
      requirements: [
        "5+ projects/portfolios published AND sold",
        "Minimum 4.5-star rating average", 
        "Consistent performance track record"
      ],
      benefits: [
        '"Developer" badge on profile',
        "Enhanced marketplace visibility",
        "Access to intermediate-level project categories",
        "Priority customer support",
        "Developer Dashboard with advanced analytics",
        "Priority project notifications",
        "Developer community access", 
        "Mentorship opportunities for new sellers"
      ]
    },
    {
      id: 4,
      name: "Established Partners",
      status: "Professional",
      icon: Trophy,
      color: "bg-amber-100 text-amber-700",
      revenueShare: "80%",
      requirements: ["Advanced from Developer status with continued excellence"],
      benefits: [
        "Higher revenue sharing rates",
        "Priority listing in marketplace searches",
        "Access to premium project categories", 
        "Direct client referral opportunities",
        "Advanced analytics dashboard",
        "Client management tools"
      ]
    },
    {
      id: 5,
      name: "Premium Partners",
      status: "Elite",
      icon: Crown,
      color: "bg-gradient-to-r from-primary to-primary-light text-primary-foreground",
      revenueShare: "80-85%",
      requirements: ["Top-performing sellers with exceptional track records"],
      benefits: [
        "Maximum revenue sharing",
        "Exclusive access to high-value projects",
        "Co-marketing opportunities with Ryze platform",
        "Early access to new features and tools",
        "API access for managing multiple projects",
        "Automated invoicing and payment processing",
        "Featured partner spotlights",
        "Joint content creation opportunities"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Ryze Platform Partnership</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join the <span className="gradient-text">Ryze Platform</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Grow your business through our comprehensive partnership program with tiered benefits, 
              revenue sharing, and exclusive opportunities on the Ryze marketplace.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hover-lift">
                Start Your Journey <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg" className="btn-hover-lift">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Tiers Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Partnership <span className="gradient-text">Tiers</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Progress through our tier system and unlock increasing benefits and revenue sharing
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <Card 
                key={tier.id} 
                className={`card-elegant h-full relative ${
                  tier.id === 3 ? 'ring-2 ring-blue-200 shadow-lg' : ''
                } ${tier.id === 5 ? 'ring-2 ring-primary/50 shadow-xl' : ''}`}
              >
                {tier.id === 3 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-100 text-blue-700 px-4 py-1">
                      ⭐ Popular
                    </Badge>
                  </div>
                )}
                
                {tier.id === 5 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground px-4 py-1">
                      👑 Elite
                    </Badge>
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${tier.color}`}>
                      <tier.icon className="w-6 h-6" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {tier.status}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
                    {tier.revenueShare} Revenue Share
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                      Requirements
                    </h4>
                    <ul className="space-y-2">
                      {tier.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How Partnership <span className="gradient-text">Works</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Simple steps to join and grow within our partnership ecosystem
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
                <p className="text-muted-foreground">
                  Create your Ryze platform account and complete your profile setup
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Build & Sell</h3>
                <p className="text-muted-foreground">
                  Create quality projects, build your reputation, and grow your sales
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Advance Tiers</h3>
                <p className="text-muted-foreground">
                  Progress through partnership tiers and unlock increasing benefits
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary-light/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join <span className="gradient-text">Ryze Platform</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start your partnership journey today and unlock the potential of our growing marketplace
            </p>
            <Button size="lg" className="btn-hover-lift">
              Join Ryze Platform <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnershipProgram;
