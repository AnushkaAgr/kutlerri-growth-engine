import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      {/* Hero */}
      <section className="container mx-auto mb-20 text-center">
        <h1 className="mb-6">About Kutlerri</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We're on a mission to help every U.S. restaurant grow intelligently using AI, analytics, and automation.
        </p>
      </section>

      {/* Mission */}
      <section className="gradient-hero py-20 mb-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground">
                Most restaurants operate with limited visibility into their growth opportunities and cost structures. We believe every restaurant deserves enterprise-level intelligence to compete and thrive.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 text-center">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Increase Revenue</h3>
                  <p className="text-sm text-muted-foreground">
                    Unlock untapped B2B catering markets
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 text-center">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mx-auto mb-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Reduce Costs</h3>
                  <p className="text-sm text-muted-foreground">
                    Eliminate waste and optimize margins
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 text-center">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Expand Margins</h3>
                  <p className="text-sm text-muted-foreground">
                    Migrate to first-party ordering
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="container mx-auto mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8">Our Story</h2>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Kutlerri started when our founders—restaurant operators and tech entrepreneurs—saw firsthand how independent restaurants were struggling to compete with corporate chains that had dedicated growth and analytics teams.
            </p>
            
            <p>
              While building a portfolio of fast-casual concepts, they realized that the tools needed to grow intelligently existed—but were scattered across dozens of expensive platforms, none of which talked to each other.
            </p>
            
            <p>
              That's when they asked: What if we could combine AI-powered lead generation, cost intelligence, and margin optimization into one platform? What if we could deliver enterprise-grade growth capabilities to independent restaurants at a fraction of the cost?
            </p>
            
            <p>
              Today, Kutlerri works with hundreds of restaurants across the U.S., helping them increase revenue, reduce costs, and expand margins through intelligent automation.
            </p>

            <p className="font-semibold text-foreground">
              We're building the future of restaurant growth—one data point, one lead, one saved dollar at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="gradient-hero py-20 mb-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Values</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Operators First</h3>
                <p className="text-sm text-muted-foreground">
                  Every feature we build solves a real problem faced by restaurant operators in the field.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Intelligence, Not Noise</h3>
                <p className="text-sm text-muted-foreground">
                  We deliver actionable insights, not overwhelming dashboards. Every alert matters.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Automation First</h3>
                <p className="text-sm text-muted-foreground">
                  Your team shouldn't waste time on manual tasks. We automate everything we can.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Results Over Features</h3>
                <p className="text-sm text-muted-foreground">
                  We measure success by ROI, not by how many tools we've integrated.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="mb-4">Join Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're growing fast and looking for talented people who want to transform the restaurant industry.
          </p>
        </div>

        <Card className="border-2 max-w-2xl mx-auto">
          <CardContent className="p-8 text-center">
            <div className="h-16 w-16 rounded-lg gradient-primary flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Current Openings</h3>
            <ul className="space-y-3 text-left mb-6">
              <li className="flex items-center justify-between py-3 border-b border-border">
                <div>
                  <p className="font-semibold">Senior AI Engineer</p>
                  <p className="text-sm text-muted-foreground">Remote • Full-time</p>
                </div>
                <Button variant="outline" size="sm">View</Button>
              </li>
              <li className="flex items-center justify-between py-3 border-b border-border">
                <div>
                  <p className="font-semibold">Restaurant Success Manager</p>
                  <p className="text-sm text-muted-foreground">Hybrid • Full-time</p>
                </div>
                <Button variant="outline" size="sm">View</Button>
              </li>
              <li className="flex items-center justify-between py-3">
                <div>
                  <p className="font-semibold">Product Designer</p>
                  <p className="text-sm text-muted-foreground">Remote • Full-time</p>
                </div>
                <Button variant="outline" size="sm">View</Button>
              </li>
            </ul>
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">See All Openings</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Contact CTA */}
      <section className="gradient-primary py-16 rounded-2xl">
        <div className="container mx-auto text-center">
          <h2 className="mb-6 text-white">Want to learn more?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you're a restaurant owner, investor, or potential partner—we'd love to hear from you.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
