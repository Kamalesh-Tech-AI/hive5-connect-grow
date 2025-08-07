import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Users } from "lucide-react";
import logoImage from "@/assets/HIVE5 LOGO.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-secondary/10 to-background"></div>
      
      {/* Hero Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo Display */}
          <div className="mb-8 fade-in-up">
            <img 
              src={logoImage} 
              alt="HIVE5 Logo" 
              className="h-24 md:h-32 w-auto mx-auto object-contain"
            />
          </div>

          {/* Founded by 5 Badge */}
          <div className="inline-flex items-center space-x-2 bg-secondary/80 backdrop-blur-sm rounded-full px-6 py-2 mb-8 fade-in-up">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Founded by 5 Tech Professionals</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up stagger-1">
            <span className="gradient-text">HIVE5</span>
            <br />
            Where Innovation Meets Opportunity
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed fade-in-up stagger-2">
            Bridging the gap between digital innovation and practical learning through our 
            <span className="text-primary font-semibold"> Ryze platform</span> and comprehensive 
            <span className="text-primary font-semibold"> internship programs</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up stagger-3">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 btn-hover-lift"
              asChild
            >
              <a href="/partnership-program">
                Explore Ryze Platform 
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 btn-hover-lift"
              asChild
            >
              <a href="/apply">
                Join Internship Program 
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Key Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up stagger-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <div className="text-muted-foreground">Founding Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Successful Projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full floating-animation"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-light/10 rounded-full floating-animation" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;
