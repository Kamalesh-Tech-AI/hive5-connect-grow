import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Edit3, Clock, CheckCircle, ArrowLeft, Play, FileText, Users } from "lucide-react";
import { Link } from "react-router-dom";

const EditingCurriculum = () => {
  const weeks = [
    {
      week: 1,
      title: "Video Editing Fundamentals",
      duration: "8 hours",
      lessons: [
        "Introduction to Video Editing Software",
        "Understanding Timelines and Tracks",
        "Basic Cutting and Trimming Techniques",
        "File Management and Project Organization"
      ],
      project: "Create your first edited video montage"
    },
    {
      week: 2,
      title: "Advanced Cutting Techniques",
      duration: "10 hours", 
      lessons: [
        "Advanced Timeline Navigation",
        "Multi-Camera Editing",
        "Speed Ramping and Time Effects",
        "Keyframe Animation Basics"
      ],
      project: "Edit a multi-camera interview sequence"
    },
    {
      week: 3,
      title: "Color Correction & Grading",
      duration: "12 hours",
      lessons: [
        "Understanding Color Theory",
        "Primary and Secondary Color Correction",
        "Creating Cinematic Looks",
        "LUT Application and Creation"
      ],
      project: "Color grade a short film sequence"
    },
    {
      week: 4,
      title: "Audio Editing & Mixing",
      duration: "10 hours",
      lessons: [
        "Audio Fundamentals and Cleanup",
        "Mixing Multiple Audio Tracks",
        "Adding Music and Sound Effects",
        "Audio Ducking and Automation"
      ],
      project: "Create a podcast-style audio mix"
    },
    {
      week: 5,
      title: "Motion Graphics Basics",
      duration: "12 hours",
      lessons: [
        "Text Animation and Titles",
        "Shape Layers and Graphics",
        "Transition Effects",
        "Logo Animation Techniques"
      ],
      project: "Design animated intro/outro sequence"
    },
    {
      week: 6,
      title: "Export Optimization",
      duration: "8 hours",
      lessons: [
        "Understanding Video Codecs",
        "Platform-Specific Export Settings",
        "Quality vs File Size Optimization",
        "Batch Processing and Rendering"
      ],
      project: "Export content for multiple platforms"
    },
    {
      week: 7,
      title: "Content Creation Strategy",
      duration: "10 hours",
      lessons: [
        "Planning and Storyboarding",
        "Workflow Optimization",
        "Client Communication",
        "Building Your Personal Brand"
      ],
      project: "Develop a content strategy plan"
    },
    {
      week: 8,
      title: "Portfolio Development",
      duration: "12 hours",
      lessons: [
        "Portfolio Planning and Curation",
        "Creating Demo Reels",
        "Online Portfolio Platforms",
        "Networking and Client Acquisition"
      ],
      project: "Complete professional portfolio"
    }
  ];

  const totalHours = weeks.reduce((sum, week) => sum + parseInt(week.duration), 0);

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
              <span className="text-sm font-medium">Complete Curriculum</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Editing Training <span className="gradient-text">Curriculum</span>
            </h1>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Badge variant="outline" className="text-base px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                {totalHours} Total Hours
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2">
                <FileText className="w-4 h-4 mr-2" />
                8 Weekly Modules
              </Badge>
              <Badge variant="outline" className="text-base px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                Expert Mentorship
              </Badge>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Comprehensive 8-week program covering all aspects of professional video editing, 
              from fundamentals to advanced techniques and portfolio development.
            </p>
            
            <Button size="lg" className="btn-hover-lift" asChild>
              <Link to="/editing-enroll">
                Enroll Now - $299
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Curriculum Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Weekly <span className="gradient-text">Breakdown</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Structured learning path with hands-on projects and expert guidance
              </p>
            </div>
            
            <div className="space-y-8">
              {weeks.map((week, index) => (
                <Card key={index} className="card-elegant">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center">
                          <span className="font-bold">{week.week}</span>
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{week.title}</CardTitle>
                          <div className="flex items-center space-x-2 mt-2">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{week.duration}</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline">Week {week.week}</Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-lg">Learning Objectives</h4>
                        <ul className="space-y-2">
                          {week.lessons.map((lesson, lessonIndex) => (
                            <li key={lessonIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-lg">Hands-on Project</h4>
                        <div className="p-4 bg-secondary/30 rounded-lg">
                          <div className="flex items-center space-x-2 mb-2">
                            <Play className="w-4 h-4 text-primary" />
                            <span className="font-medium">Project {week.week}</span>
                          </div>
                          <p className="text-muted-foreground">{week.project}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-primary-light/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Master <span className="gradient-text">Professional Editing</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our comprehensive training program and transform your editing skills in just 8 weeks
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-hover-lift" asChild>
                <Link to="/editing-enroll">
                  Enroll Today - $299
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="btn-hover-lift" asChild>
                <Link to="/editing-training">
                  Back to Overview
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EditingCurriculum;
