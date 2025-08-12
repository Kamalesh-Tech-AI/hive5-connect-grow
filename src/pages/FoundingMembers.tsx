import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail, Github } from "lucide-react";
import kamaleshImage from "@/assets/kamalesh-s.jpg";
import rithikaImage from "@/assets/rithika-joshi-b.jpg";
import akashImage from "@/assets/akash-kumar-o.jpeg";
import madhanImage from "@/assets/madhan-kumar-p.jpeg";
import mohammedImage from "@/assets/mohammed-tanveer-k.jpeg";

const FoundingMembers = () => {
  const founders = [

        {
      id: 3,
      name: "AKASH KUMAR O",
      role: "CEO",
      bio: "Strategic leader with a proven ability to drive growth, build partnerships, and guide organizations toward long‑term success..",
      skills: ["Business Strategy", "Leadership", "Partnership Development", "Organizational Growth"],
      image: akashImage,
      linkedin: "https://www.linkedin.com/in/akash-kumar-singh-o-7746242b5/",
      email: "akash.hive.5@gmail.com",
      github: "https://github.com/akash-kumar-o"
    },
    {
      id: 1,
      name: "KAMALESH S",
      role: "CTO",
      bio: "Visionary leader with extensive experience in technology and business strategy. Passionate about innovation and building products that make a difference.",
      skills: ["Technology Strategy", "Product Development", "System Architecture", "Innovation Management"],
      image: kamaleshImage,
      linkedin: "https://linkedin.com/in/kamalesh-s",
      email: "kamalesh.hive5@gmail.com",
      github: "https://github.com/Kamalesh-Tech-AI"
    },
    {
      id: 2,
      name: "RITHIKA JOSHI B",
      role: "Manager",
      bio: "Operations leader skilled in optimizing workflows, managing teams, and delivering projects efficiently and on time.",
      skills: ["AI/ML", "Full-Stack Development", "Team Leadership", "Process Optimization", "Project Coordination"],
      image: rithikaImage,
      linkedin: "https://www.linkedin.com/in/rithika-joshi-b-b24612328/",
      email: "rithikajoshi.hive5@gmail.com",
      github: "https://github.com/rithikajoshi0-0"
    },

    {
      id: 4,
      name: "MADHAN KUMAR P",
      role: "CFO",
      bio: "Financial strategist with expertise in fiscal planning, risk management, and ensuring sustainable business performance.",
      skills: ["Financial Planning", "Risk Management", "Budgeting", "Data‑Driven Decision Making"],
      image: madhanImage,
      linkedin: "https://www.linkedin.com/in/madhan-kumar-p-759402324/",
      email: "madhankumar.hive5@gmai.com",
      github: "https://github.com/madhan-kumar-p"
    },
    {
      id: 5,
      name: "MOHAMMED TANVEER K",
      role: "Creative Director",
      bio: "Creative visionary with expertise in brand storytelling, visual design, and developing engaging, audience‑driven campaigns.",
      skills: ["Brand Strategy", "Creative Direction", "Visual Design", "Content Development"],
      image: mohammedImage,
      linkedin: "https://www.linkedin.com/in/mohammed-tanveer-kareemullah-33b91a2ab/",
      email: "tanveerhigh5@gmail.com",
     
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
  href={`https://mail.google.com/mail/?view=cm&to=${founder.email}`}
  target="_blank"
  rel="noopener noreferrer"
  className="text-muted-foreground hover:text-primary transition-colors"
>
  <Mail className="w-5 h-5" />
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
