import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { PaymentMethodSelector } from "@/components/ui/payment-methods";
import { ArrowLeft, Edit3, Shield, CreditCard, Phone, Mail, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const EditingEnroll = () => {
  const [loading, setLoading] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experienceLevel: "",
    goals: "",
    preferredSchedule: "",
    paymentMethod: "",
    contactPreference: "email"
  });

  const skillOptions = [
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
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('editing_enrollments')
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          experience_level: formData.experienceLevel,
          current_skills: selectedSkills,
          goals: formData.goals,
          preferred_schedule: formData.preferredSchedule,
          payment_method: formData.paymentMethod,
          contact_preference: formData.contactPreference,
          amount: 299.00,
          status: 'pending'
        });

      if (error) throw error;

      toast({
        title: "Enrollment Submitted Successfully!",
        description: "We'll contact you within 24 hours with payment instructions and next steps.",
      });

      // Reset form
      setFormData({
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
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/editing-training" className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Training Overview</span>
            </Link>
            
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Edit3 className="w-4 h-4" />
              <span className="text-sm font-medium">Enrollment Application</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Enroll in <span className="gradient-text">Editing Training</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Complete your enrollment application below. We'll contact you within 24 hours with payment instructions and program details.
            </p>
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Form */}
              <div className="lg:col-span-2">
                <Card className="card-elegant">
                  <CardHeader>
                    <CardTitle className="text-2xl">Enrollment Application</CardTitle>
                    <CardDescription>
                      Please fill out all required fields to complete your enrollment
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Personal Information</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="fullName">Full Name *</Label>
                            <Input
                              id="fullName"
                              required
                              value={formData.fullName}
                              onChange={(e) => handleInputChange('fullName', e.target.value)}
                              placeholder="Enter your full name"
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              placeholder="your.email@example.com"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      {/* Experience Level */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Experience & Skills</h3>
                        
                        <div>
                          <Label htmlFor="experienceLevel">Experience Level *</Label>
                          <Select value={formData.experienceLevel} onValueChange={(value) => handleInputChange('experienceLevel', value)} required>
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
                            {skillOptions.map((skill) => (
                              <div key={skill} className="flex items-center space-x-2">
                                <Checkbox
                                  id={skill}
                                  checked={selectedSkills.includes(skill)}
                                  onCheckedChange={() => handleSkillToggle(skill)}
                                />
                                <Label htmlFor={skill} className="text-sm">{skill}</Label>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="goals">Learning Goals</Label>
                          <Textarea
                            id="goals"
                            value={formData.goals}
                            onChange={(e) => handleInputChange('goals', e.target.value)}
                            placeholder="What do you hope to achieve with this training?"
                            rows={3}
                          />
                        </div>
                      </div>

                      {/* Schedule & Payment */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Schedule & Payment</h3>
                        
                        <div>
                          <Label htmlFor="preferredSchedule">Preferred Schedule</Label>
                          <Select value={formData.preferredSchedule} onValueChange={(value) => handleInputChange('preferredSchedule', value)}>
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
                          <Label htmlFor="paymentMethod">Preferred Payment Method</Label>
                          <div className="mt-2">
                            <PaymentMethodSelector
                              value={formData.paymentMethod}
                              onValueChange={(value) => handleInputChange('paymentMethod', value)}
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label htmlFor="contactPreference">Preferred Contact Method</Label>
                          <Select value={formData.contactPreference} onValueChange={(value) => handleInputChange('contactPreference', value)}>
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

                      <Button type="submit" className="w-full btn-hover-lift" size="lg" disabled={loading}>
                        {loading ? "Submitting..." : "Submit Enrollment Application"}
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
                      <span className="font-bold text-lg text-primary">$299</span>
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EditingEnroll;
