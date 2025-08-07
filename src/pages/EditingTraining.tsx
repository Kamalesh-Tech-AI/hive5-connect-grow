import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit3, Clock, Users, Award, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

const EditingTraining = () => {
  const features = [
    {
      icon: Edit3,
      title: "Professional Video Editing",
      description: "Master industry-standard editing software and techniques used by professionals"
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Learn at your own pace with comprehensive modules and hands-on projects"
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Get guidance from experienced editors and content creation professionals"
    },
    {
      icon: Award,
      title: "Certificate of Completion",
      description: "Receive a professional certificate upon successful completion of the program"
    }
  ];

  const curriculum = [
    "Video Editing Fundamentals",
    "Advanced Cutting Techniques", 
    "Color Correction & Grading",
    "Audio Editing & Mixing",
    "Motion Graphics Basics",
    "Export Optimization",
    "Content Creation Strategy",
    "Portfolio Development"
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Content Creator",
      content: "The editing training transformed my content quality. The hands-on approach and expert feedback were invaluable.",
      rating: 5
    },
    {
      name: "Mike Rodriguez", 
      role: "Freelance Editor",
      content: "Professional curriculum that covers everything from basics to advanced techniques. Worth every penny!",
      rating: 5
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
              <Edit3 className="w-4 h-4" />
              <span className="text-sm font-medium">Professional Training Program</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Master <span className="gradient-text">Editing</span> Skills
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Comprehensive editing training program designed to develop your technical skills in video editing, 
              content creation, and digital media production.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hover-lift" asChild>
                <Link to="/editing-enroll">
                  Enroll Now - $299
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="btn-hover-lift" asChild>
                <Link to="/editing-curriculum">
                  View Curriculum
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our <span className="gradient-text">Training</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive program combines theoretical knowledge with practical experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-elegant text-center h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Complete <span className="gradient-text">Curriculum</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                8-week intensive program covering all aspects of professional video editing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {curriculum.map((topic, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-background rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Student <span className="gradient-text">Success</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from our graduates who've transformed their editing skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-elegant">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary-light/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your <span className="gradient-text">Editing Journey</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our comprehensive training program and master professional editing skills
            </p>
            <Button size="lg" className="btn-hover-lift" asChild>
              <Link to="/editing-enroll">
                Enroll Today - $299
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EditingTraining;