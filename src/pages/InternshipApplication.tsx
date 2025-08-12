import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { PaymentMethodSelector } from "@/components/ui/payment-methods";
import { CheckCircle, Clock, Users, Code, Briefcase, Award, Edit3, Phone, Mail, CreditCard, Shield } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const InternshipApplication = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingSubmitting, setEditingSubmitting] = useState(false);
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

  const [editingFormData, setEditingFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experienceLevel: "",
    goals: "",
    preferredSchedule: "",
    paymentMethod: "",
    contactPreference: "email"
  });

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const skillOptions = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "Java", "C++", "SQL",
    "MongoDB", "PostgreSQL", "AWS", "Docker", "Git", "Machine Learning", "Data Science",
    "UI/UX Design", "Mobile Development", "DevOps", "Cybersecurity", "Blockchain"
  ];

  const editingSkillOptions = [
    "Adobe Premiere Pro",
    "Final Cut Pro", 
    "DaVinci Resolve",
    "After Effects",
    "Basic Video Editing",
    "Color Correction",
    "Audio Editing",
    "Motion Graphics",
    "Content Creation",
    "Social Media Editing"
  ];

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill) 
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleEditingSkillToggle = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleEditingInputChange = (field: string, value: string) => {
    setEditingFormData(prev => ({ ...prev, [field]: value }));
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

  const handleEditingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEditingSubmitting(true);

    try {
      const { error } = await supabase
        .from('editing_enrollments')
        .insert({
          full_name: editingFormData.fullName,
          email: editingFormData.email,
          phone: editingFormData.phone,
          experience_level: editingFormData.experienceLevel,
          current_skills: selectedSkills,
          goals: editingFormData.goals,
          preferred_schedule: editingFormData.preferredSchedule,
          payment_method: editingFormData.paymentMethod,
          contact_preference: editingFormData.contactPreference,
          amount: 2000.00,
          status: 'pending'
        });

      if (error) throw error;

      toast({
        title: "Enrollment Submitted Successfully!",
        description: "We'll contact you within 24 hours with payment instructions and next steps.",
      });

      // Reset form
      setEditingFormData({
        fullName: "",
        email: "",
        phone: "",
        experienceLevel: "",
        goals: "",
        preferredSchedule: "",
        paymentMethod: "",
        contactPreference: "email"
      });
      setSelectedSkills([]);

    } catch (error) {
      console.error('Error submitting enrollment:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your enrollment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setEditingSubmitting(false);
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
            HIVE5 Application Portal
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Apply for our internship program or enroll in our editing training course. Choose the path that fits your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Code className="w-4 h-4 mr-2" />
              Technical Internships
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Edit3 className="w-4 h-4 mr-2" />
              Editing Training
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              Certificates Available
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
          <Tabs defaultValue="internship" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="internship" className="flex items-center space-x-2">
                <Code className="w-4 h-4" />
                <span>Internship Program</span>
              </TabsTrigger>
              <TabsTrigger value="editing" className="flex items-center space-x-2">
                <Edit3 className="w-4 h-4" />
                <span>Editing Training</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="internship">
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
            </TabsContent>

            <TabsContent value="editing">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Form */}
                <div className="lg:col-span-2">
                  <Card className="card-elegant">
                    <CardHeader>
                      <CardTitle className="text-2xl">Editing Training Enrollment</CardTitle>
                      <CardDescription>
                        Please fill out all required fields to complete your enrollment
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <form onSubmit={handleEditingSubmit} className="space-y-6">
                        {/* Personal Information */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Personal Information</h3>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="editing_fullName">Full Name *</Label>
                              <Input
                                id="editing_fullName"
                                required
                                value={editingFormData.fullName}
                                onChange={(e) => handleEditingInputChange('fullName', e.target.value)}
                                placeholder="Enter your full name"
                              />
                            </div>
                            
                            <div>
                              <Label htmlFor="editing_email">Email Address *</Label>
                              <Input
                                id="editing_email"
                                type="email"
                                required
                                value={editingFormData.email}
                                onChange={(e) => handleEditingInputChange('email', e.target.value)}
                                placeholder="your.email@example.com"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <Label htmlFor="editing_phone">Phone Number</Label>
                            <Input
                              id="editing_phone"
                              type="tel"
                              value={editingFormData.phone}
                              onChange={(e) => handleEditingInputChange('phone', e.target.value)}
                              placeholder="+1 (555) 123-4567"
                            />
                          </div>
                        </div>

                        {/* Experience Level */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Experience & Skills</h3>
                          
                          <div>
                            <Label htmlFor="editing_experienceLevel">Experience Level *</Label>
                            <Select value={editingFormData.experienceLevel} onValueChange={(value) => handleEditingInputChange('experienceLevel', value)} required>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your experience level" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="complete-beginner">Complete Beginner</SelectItem>
                                <SelectItem value="some-experience">Some Experience</SelectItem>
                                <SelectItem value="intermediate">Intermediate</SelectItem>
                                <SelectItem value="advanced-looking-to-improve">Advanced - Looking to Improve</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div>
                            <Label>Current Skills (Select all that apply)</Label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                              {editingSkillOptions.map((skill) => (
                                <div key={skill} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={skill}
                                    checked={selectedSkills.includes(skill)}
                                    onCheckedChange={() => handleEditingSkillToggle(skill)}
                                  />
                                  <Label htmlFor={skill} className="text-sm">{skill}</Label>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <Label htmlFor="editing_goals">Learning Goals</Label>
                            <Textarea
                              id="editing_goals"
                              value={editingFormData.goals}
                              onChange={(e) => handleEditingInputChange('goals', e.target.value)}
                              placeholder="What do you hope to achieve with this training?"
                              rows={3}
                            />
                          </div>
                        </div>

                        {/* Schedule & Payment */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-semibold">Schedule & Payment</h3>
                          
                          <div>
                            <Label htmlFor="editing_preferredSchedule">Preferred Schedule</Label>
                            <Select value={editingFormData.preferredSchedule} onValueChange={(value) => handleEditingInputChange('preferredSchedule', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your preferred schedule" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="weekday-mornings">Weekday Mornings</SelectItem>
                                <SelectItem value="weekday-afternoons">Weekday Afternoons</SelectItem>
                                <SelectItem value="weekday-evenings">Weekday Evenings</SelectItem>
                                <SelectItem value="weekends">Weekends</SelectItem>
                                <SelectItem value="flexible">Flexible</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div>
                            <Label htmlFor="editing_paymentMethod">Preferred Payment Method</Label>
                            <div className="mt-2">
                              <PaymentMethodSelector
                                value={editingFormData.paymentMethod}
                                onValueChange={(value) => handleEditingInputChange('paymentMethod', value)}
                              />
                            </div>
                          </div>
                          
                          <div>
                            <Label htmlFor="editing_contactPreference">Preferred Contact Method</Label>
                            <Select value={editingFormData.contactPreference} onValueChange={(value) => handleEditingInputChange('contactPreference', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="How would you like us to contact you?" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="email">Email</SelectItem>
                                <SelectItem value="phone">Phone</SelectItem>
                                <SelectItem value="both">Both Email and Phone</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <Button type="submit" className="w-full btn-hover-lift" size="lg" disabled={editingSubmitting}>
                          {editingSubmitting ? "Submitting..." : "Submit Enrollment Application"}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Summary & Info */}
                <div className="space-y-6">
                  
                  {/* Program Summary */}
                  <Card className="card-elegant">
                    <CardHeader>
                      <CardTitle className="text-xl">Program Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span>Training Duration:</span>
                        <span className="font-semibold">8 Weeks</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Hours:</span>
                        <span className="font-semibold">82 Hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Program Fee:</span>
                        <span className="font-bold text-lg text-primary">$2000</span>
                      </div>
                      <div className="pt-4 border-t">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Shield className="w-4 h-4" />
                          <span>30-day money-back guarantee</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* What's Included */}
                  <Card className="card-elegant">
                    <CardHeader>
                      <CardTitle className="text-xl">What's Included</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {[
                          "8 comprehensive weekly modules",
                          "Hands-on project assignments", 
                          "Expert mentor feedback",
                          "Software tutorials & resources",
                          "Certificate of completion",
                          "Lifetime access to materials",
                          "Private community access"
                        ].map((item, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Contact Info */}
                  <Card className="card-elegant">
                    <CardHeader>
                      <CardTitle className="text-xl">Next Steps</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Mail className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Email Confirmation</p>
                          <p className="text-xs text-muted-foreground">You'll receive payment instructions within 24 hours</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Phone className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Phone Follow-up</p>
                          <p className="text-xs text-muted-foreground">Our team will call to discuss your learning goals</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CreditCard className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Secure Payment</p>
                          <p className="text-xs text-muted-foreground">Complete payment to secure your spot in the program</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InternshipApplication;
