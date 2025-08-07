import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Twitter, Github } from "lucide-react";

const FoundingMembers = () => {
  const founders = [
    {
      id: 1,
      name: "Alex Rodriguez",
      role: "CEO & Co-Founder",
      bio: "Former tech lead at Google with 10+ years experience in scaling startups. Passionate about innovation and building products that make a difference.",
      skills: ["Strategy", "Leadership", "Product Vision"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/alexrodriguez",
      twitter: "https://twitter.com/alexrodriguez",
      github: "https://github.com/alexrodriguez"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "CTO & Co-Founder",
      bio: "Full-stack developer with expertise in AI and machine learning. Previously led engineering teams at Microsoft and several successful startups.",
      skills: ["AI/ML", "Full-Stack Development", "System Architecture"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b796?w=300&h=300&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/sarahchen",
      twitter: "https://twitter.com/sarahchen",
      github: "https://github.com/sarahchen"
    },
    {
      id: 3,
      name: "Marcus Johnson",
      role: "CPO & Co-Founder",
      bio: "Product strategist with a track record of launching successful consumer products. Expert in user experience design and market research.",
      skills: ["Product Strategy", "UX Design", "Market Research"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/marcusjohnson",
      twitter: "https://twitter.com/marcusjohnson",
      github: "https://github.com/marcusjohnson"
    },
    {
      id: 4,
      name: "Emily Watson",
      role: "CMO & Co-Founder",
      bio: "Marketing expert with experience in both B2B and B2C markets. Specializes in digital marketing, brand building, and growth strategies.",
      skills: ["Digital Marketing", "Brand Strategy", "Growth Hacking"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/emilywatson",
      twitter: "https://twitter.com/emilywatson",
      github: "https://github.com/emilywatson"
    },
    {
      id: 5,
      name: "David Kim",
      role: "CFO & Co-Founder",
      bio: "Financial strategist with extensive experience in venture capital and startup finance. Former investment banker turned entrepreneur.",
      skills: ["Financial Strategy", "Venture Capital", "Business Development"],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/davidkim",
      twitter: "https://twitter.com/davidkim",
      github: "https://github.com/davidkim"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Meet Our Founding Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The five visionaries who came together to create HIVE5. Our diverse backgrounds and shared passion for innovation drive everything we do.
          </p>
        </div>
      </section>

      {/* Founders Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {founders.map((founder) => (
              <Card key={founder.id} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardContent className="p-6">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all duration-300"
                    />
                  </div>

                  {/* Name and Role */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold mb-2">{founder.name}</h3>
                    <p className="text-primary font-medium">{founder.role}</p>
                  </div>

                  {/* Bio */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {founder.bio}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <p className="text-sm font-medium mb-2">Expertise:</p>
                    <div className="flex flex-wrap gap-2">
                      {founder.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <a 
                      href={founder.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={founder.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a 
                      href={founder.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h2>
          <div className="prose prose-lg mx-auto text-muted-foreground">
            <p className="mb-6">
              HIVE5 was born from a simple yet powerful idea: what if five brilliant minds from different backgrounds could come together to solve the world's most challenging problems?
            </p>
            <p className="mb-6">
              In early 2023, our five founders met at a tech conference in San Francisco. Despite their different expertise areas, they shared a common vision for innovation and a passion for creating meaningful impact through technology.
            </p>
            <p>
              Today, HIVE5 represents the culmination of their combined experience, each bringing unique perspectives and skills that make our team stronger together than any individual could be alone.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FoundingMembers;