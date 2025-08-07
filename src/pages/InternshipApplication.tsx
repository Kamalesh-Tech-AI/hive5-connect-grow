import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Code, Briefcase, Award } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const InternshipApplication = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    university: "",
    year_of_study: "",
    major: "",
    portfolio_url: "",
    github_url: "",
    linkedin_url: "",
    cover_letter: "",
    skills: [] as string[],
    preferred_start_date: "",
    available_duration: ""
  });

  const skillOptions = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "Java", "C++", "SQL",
    "MongoDB", "PostgreSQL", "AWS", "Docker", "Git", "Machine Learning", "Data Science",
    "UI/UX Design", "Mobile Development", "DevOps", "Cybersecurity", "Blockchain"
  ];

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill) 
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('internship_applications')
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "Application Submitted Successfully!",
        description: "We'll review your application and get back to you within 5-7 business days.",
      });

      // Reset form
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        university: "",
        year_of_study: "",
        major: "",
        portfolio_url: "",
        github_url: "",
        linkedin_url: "",
        cover_letter: "",
        skills: [],
        preferred_start_date: "",
        available_duration: ""
      });

    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const programFeatures = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Hands-on Coding",
      description: "Work on real projects with our development team"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Mentorship",
      description: "One-on-one guidance from senior developers"
    },
    {
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      title: "Professional Experience",
      description: "Gain valuable industry experience and networking"
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Skill Certification",
      description: "Receive certificates for completed projects and training"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            HIVE5 Internship Program
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join our intensive internship program and kickstart your career in technology with hands-on experience, mentorship, and real-world projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              3-6 Months Duration
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              Small Cohorts (5-10 interns)
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              Certificate Upon Completion
            </Badge>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Program Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programFeatures.map((feature, index) => (
              <Card key={index} className="text-center border-border/50">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Apply for Our Internship Program</CardTitle>
              <CardDescription>
                Fill out the form below to apply for our next internship cohort. All fields marked with * are required.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="full_name">Full Name *</Label>
                    <Input
                      id="full_name"
                      required
                      value={formData.full_name}
                      onChange={(e) => setFormData(prev => ({ ...prev, full_name: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="university">University/Institution *</Label>
                    <Input
                      id="university"
                      required
                      value={formData.university}
                      onChange={(e) => setFormData(prev => ({ ...prev, university: e.target.value }))}
                    />
                  </div>
                </div>

                {/* Academic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="year_of_study">Year of Study *</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, year_of_study: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="freshman">Freshman</SelectItem>
                        <SelectItem value="sophomore">Sophomore</SelectItem>
                        <SelectItem value="junior">Junior</SelectItem>
                        <SelectItem value="senior">Senior</SelectItem>
                        <SelectItem value="graduate">Graduate Student</SelectItem>
                        <SelectItem value="recent_graduate">Recent Graduate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="major">Major/Field of Study *</Label>
                    <Input
                      id="major"
                      required
                      value={formData.major}
                      onChange={(e) => setFormData(prev => ({ ...prev, major: e.target.value }))}
                    />
                  </div>
                </div>

                {/* Links */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="portfolio_url">Portfolio URL</Label>
                    <Input
                      id="portfolio_url"
                      type="url"
                      placeholder="https://your-portfolio.com"
                      value={formData.portfolio_url}
                      onChange={(e) => setFormData(prev => ({ ...prev, portfolio_url: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="github_url">GitHub Profile</Label>
                    <Input
                      id="github_url"
                      type="url"
                      placeholder="https://github.com/username"
                      value={formData.github_url}
                      onChange={(e) => setFormData(prev => ({ ...prev, github_url: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedin_url">LinkedIn Profile</Label>
                    <Input
                      id="linkedin_url"
                      type="url"
                      placeholder="https://linkedin.com/in/username"
                      value={formData.linkedin_url}
                      onChange={(e) => setFormData(prev => ({ ...prev, linkedin_url: e.target.value }))}
                    />
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  <Label>Technical Skills</Label>
                  <p className="text-sm text-muted-foreground mb-3">Select all that apply:</p>
                  <div className="flex flex-wrap gap-2">
                    {skillOptions.map((skill) => (
                      <Badge
                        key={skill}
                        variant={formData.skills.includes(skill) ? "default" : "outline"}
                        className="cursor-pointer hover:bg-primary/20 transition-colors"
                        onClick={() => handleSkillToggle(skill)}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Program Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="preferred_start_date">Preferred Start Date</Label>
                    <Input
                      id="preferred_start_date"
                      type="date"
                      value={formData.preferred_start_date}
                      onChange={(e) => setFormData(prev => ({ ...prev, preferred_start_date: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="available_duration">Available Duration</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, available_duration: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3_months">3 Months</SelectItem>
                        <SelectItem value="4_months">4 Months</SelectItem>
                        <SelectItem value="5_months">5 Months</SelectItem>
                        <SelectItem value="6_months">6 Months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Cover Letter */}
                <div className="space-y-2">
                  <Label htmlFor="cover_letter">Cover Letter *</Label>
                  <p className="text-sm text-muted-foreground">
                    Tell us why you're interested in this internship and what you hope to achieve (200-500 words)
                  </p>
                  <Textarea
                    id="cover_letter"
                    required
                    rows={6}
                    value={formData.cover_letter}
                    onChange={(e) => setFormData(prev => ({ ...prev, cover_letter: e.target.value }))}
                    placeholder="Write your cover letter here..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? "Submitting Application..." : "Submit Application"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InternshipApplication;