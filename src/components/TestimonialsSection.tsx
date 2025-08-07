import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Web Developer",
      company: "TechStart Inc.",
      content: "The HIVE5 internship program completely transformed my approach to web development. The hands-on experience and mentorship were invaluable.",
      rating: 5,
      image: "SC"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "PhD Researcher",
      company: "University Research Lab",
      content: "Ryze platform connected me with amazing opportunities and helped showcase my research to a broader audience. Truly revolutionary!",
      rating: 5,
      image: "MR"
    },
    {
      name: "Emily Johnson",
      role: "Content Creator",
      company: "Digital Media Studio",
      content: "The editing training program at HIVE5 gave me professional-level skills that I use every day. Highly recommend to anyone starting out.",
      rating: 5,
      image: "EJ"
    },
    {
      name: "Alex Kim",
      role: "Portfolio Developer",
      company: "Freelance Designer",
      content: "Working with HIVE5's partnership program opened doors I never imagined. The revenue sharing model is fair and the support is excellent.",
      rating: 5,
      image: "AK"
    },
    {
      name: "Jordan Martinez",
      role: "Student",
      company: "Computer Science Major",
      content: "The skills-focused approach at HIVE5 was exactly what I needed. No false promises about job placement, just real skills and real results.",
      rating: 5,
      image: "JM"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real people who have experienced the HIVE5 difference.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <Card className="card-elegant relative overflow-hidden mb-8">
            <CardContent className="p-8 md:p-12">
              <div className="absolute top-6 left-6 text-primary/20">
                <Quote className="w-12 h-12" />
              </div>
              
              <div className="relative z-10">
                <div className="flex mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 text-foreground">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {testimonials[currentTestimonial].image}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-muted-foreground">
                      {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="btn-hover-lift"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-primary scale-125'
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="btn-hover-lift"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">250+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;