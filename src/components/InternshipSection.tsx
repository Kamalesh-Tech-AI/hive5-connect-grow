import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Code, Users, Lightbulb, Award, Clock, CheckCircle, ArrowRight } from "lucide-react";

const InternshipSection = () => {
  const features = [
    {
      icon: Code,
      title: "Hands-on Coding",
      description: "Work on real projects with modern technologies and frameworks"
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Learn from experienced developers and industry professionals"
    },
    {
      icon: Lightbulb,
      title: "Creative Projects",
      description: "Build innovative solutions and expand your portfolio"
    },
    {
      icon: Award,
      title: "Skill Certification",
      description: "Receive certificates for completed modules and achievements"
    }
  ];

  const curriculum = [
    "HTML/CSS Fundamentals",
    "JavaScript & TypeScript",
    "React & Modern Frameworks",
    "Database Design",
    "API Development",
    "Version Control (Git)",
    "Testing & Debugging",
    "Project Management"
  ];

  const process = [
    {
      step: "1",
      title: "Application",
      description: "Submit your application with basic information and motivation"
    },
    {
      step: "2",
      title: "Assessment",
      description: "Complete a simple technical assessment to gauge your level"
    },
    {
      step: "3",
      title: "Interview",
      description: "Brief interview to discuss goals and program fit"
    },
    {
      step: "4",
      title: "Start Learning",
      description: "Begin your journey with personalized learning path"
    }
  ];

  return (
    <section id="internships" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <GraduationCap className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Skills Development, Not Job Placement</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Internship</span> Program
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Develop real technical skills through hands-on projects and expert mentorship. 
            Our focus is on building your capabilities, not making placement promises.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={feature.title} className="card-elegant text-center h-full transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Program Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Curriculum */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Code className="w-6 h-6 text-primary mr-3" />
                Technical Curriculum
              </CardTitle>
              <CardDescription>
                Comprehensive learning path covering modern web development technologies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {curriculum.map((item, index) => (
                  <div key={item} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Program Info */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Clock className="w-6 h-6 text-primary mr-3" />
                Program Details
              </CardTitle>
              <CardDescription>
                Flexible learning designed to fit your schedule and goals
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Duration</h4>
                <p className="text-muted-foreground">3-6 months, self-paced with milestone deadlines</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Time Commitment</h4>
                <p className="text-muted-foreground">10-15 hours per week, flexible scheduling</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Prerequisites</h4>
                <p className="text-muted-foreground">Basic computer skills and enthusiasm to learn</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Support</h4>
                <p className="text-muted-foreground">Weekly mentoring sessions and peer collaboration</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Application Process */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            How to <span className="gradient-text">Apply</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary/20 -translate-y-1/2 -ml-8">
                      <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-primary" />
                    </div>
                  )}
                </div>
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Student Testimonial */}
        <Card className="card-elegant max-w-4xl mx-auto mb-12">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground font-bold text-2xl">
                JS
              </div>
              <blockquote className="text-xl italic mb-6 text-muted-foreground">
                "The HIVE5 internship was exactly what I needed. No false promises about guaranteed jobs, 
                just solid skills training and real-world experience. I'm now confident in my abilities 
                and have a portfolio that speaks for itself."
              </blockquote>
              <div className="font-bold">Jordan Smith</div>
              <div className="text-muted-foreground">Recent Graduate, Computer Science</div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="text-lg px-8 py-6 btn-hover-lift" asChild>
            <a href="/apply">
              Apply for Internship Program
              <GraduationCap className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Applications are reviewed on a rolling basis. Start your application today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;