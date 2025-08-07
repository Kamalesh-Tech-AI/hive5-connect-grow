import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 2024
            </p>
          </div>

          <Card className="card-elegant">
            <CardHeader>
              <CardTitle>Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                By accessing and using HIVE5's services, including our Ryze platform and internship programs, 
                you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </CardContent>
          </Card>

          <Card className="card-elegant mt-8">
            <CardHeader>
              <CardTitle>Use License</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              <p>Permission is granted to temporarily use HIVE5's services for personal, non-commercial transitory viewing only.</p>
              <p>Under this license you may not:</p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>Use the materials for commercial purposes</li>
                <li>Reverse engineer any software</li>
                <li>Remove any copyright or proprietary notations</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card-elegant mt-8">
            <CardHeader>
              <CardTitle>Internship Program Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our internship program focuses on skills development, not job placement. Participants 
                are expected to complete assigned projects and maintain professional conduct throughout the program.
              </p>
            </CardContent>
          </Card>

          <Card className="card-elegant mt-8">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Questions about these Terms of Service should be sent to{" "}
                <a href="mailto:legal@hive5.tech" className="text-primary hover:underline">
                  legal@hive5.tech
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;