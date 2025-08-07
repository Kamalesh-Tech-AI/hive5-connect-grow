import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Lightbulb, Heart } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly pushing boundaries and exploring new technologies to create better solutions."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong partnerships and fostering teamwork to achieve extraordinary results."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering high-quality services and exceeding expectations."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Driven by genuine enthusiasm for technology and helping others succeed."
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">HIVE5</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded by five passionate tech professionals, HIVE5 emerged from a shared vision 
                  to bridge the gap between digital innovation and practical learning. Our journey 
                  began with a simple belief: technology should empower people to achieve their dreams.
                </p>
                <p>
                  Today, HIVE5 stands as a comprehensive platform that combines the power of our 
                  Ryze marketplace with transformative educational experiences. We're not just a 
                  company—we're a community of innovators, learners, and dreamers working together 
                  to shape the future of digital collaboration.
                </p>
                <p>
                  Our commitment extends beyond traditional business models. We focus on 
                  <span className="text-primary font-semibold"> skills development, not job placement</span>, 
                  ensuring our programs provide genuine value and lasting impact for every participant.
                </p>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="card-elegant p-8 text-center">
                <div className="text-6xl font-bold gradient-text mb-4">5</div>
                <h3 className="text-2xl font-bold mb-4">Founding Members</h3>
                <p className="text-muted-foreground mb-6">
                  United by a shared passion for technology and innovation, our five founders 
                  bring diverse expertise and perspectives to every project.
                </p>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((member) => (
                    <div 
                      key={member} 
                      className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-primary-foreground font-bold"
                    >
                      {member}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="card-elegant h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize access to cutting-edge technology and educational opportunities, 
                  empowering individuals and organizations to thrive in the digital age through 
                  innovative platforms and comprehensive skill development programs.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading global platform where creativity meets opportunity, 
                  fostering a world where every individual has the tools and knowledge to 
                  transform their ideas into reality and build meaningful careers in technology.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our <span className="gradient-text">Values</span></h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do and shape the culture of innovation at HIVE5.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} className="card-elegant text-center h-full transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;