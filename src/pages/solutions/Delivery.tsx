import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, TrendingUp, Users, Gift } from "lucide-react";

const Delivery = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      {/* Hero */}
      <section className="container mx-auto mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Coming Soon
          </div>
          <h1 className="mb-6">Delivery Margin Optimization</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Restaurants lose up to 30% to delivery aggregators. Our upcoming Delivery Conversion Engine automates first-party order migration using smart incentives and digital loyalty flows.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/audit">Join the Waitlist</Link>
          </Button>
        </div>
      </section>

      {/* Problem */}
      <section className="gradient-hero py-16 mb-20">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">The Third-Party Dilemma</h2>
            <p className="text-xl text-muted-foreground">
              DoorDash, Uber Eats, and Grubhub charge 15-30% commission per order. While they bring volume, they decimate margins. Most restaurants have no strategy to convert these customers to direct ordering channels.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="container mx-auto mb-20">
        <div className="text-center mb-16">
          <h2 className="mb-4">How Delivery Optimization Will Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Smart automation to migrate third-party customers to your own channels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-2">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer ID</h3>
              <p className="text-muted-foreground">
                Track third-party order patterns and identify your best customers worth converting.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <Gift className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Smart Incentives</h3>
              <p className="text-muted-foreground">
                Offer targeted discounts or free delivery on your direct channel to shift ordering behavior.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Loyalty Programs</h3>
              <p className="text-muted-foreground">
                Automated points, rewards, and exclusive perks keep customers ordering directly.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Margin Recovery</h3>
              <p className="text-muted-foreground">
                Track savings from reduced aggregator fees and increased customer lifetime value.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="gradient-hero py-20 mb-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Expected Impact</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-2">
              <CardContent className="p-6">
                <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                  20-30%
                </div>
                <p className="font-semibold mb-2">Commission Savings</p>
                <p className="text-sm text-muted-foreground">On migrated orders to direct channels</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2">
              <CardContent className="p-6">
                <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                  2x
                </div>
                <p className="font-semibold mb-2">Customer LTV</p>
                <p className="text-sm text-muted-foreground">Direct customers order more frequently</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2">
              <CardContent className="p-6">
                <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <p className="font-semibold mb-2">Data Ownership</p>
                <p className="text-sm text-muted-foreground">Build your customer database</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Waitlist Features */}
      <section className="container mx-auto mb-20">
        <Card className="border-2 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6">What's Included When We Launch</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Branded Mobile App</p>
                    <p className="text-sm text-muted-foreground">White-label app for iOS and Android</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">SMS & Email Automation</p>
                    <p className="text-sm text-muted-foreground">Triggered campaigns for reactivation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Loyalty Engine</p>
                    <p className="text-sm text-muted-foreground">Points, tiers, and rewards management</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Smart Discounting</p>
                    <p className="text-sm text-muted-foreground">AI-optimized incentive offers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Analytics Dashboard</p>
                    <p className="text-sm text-muted-foreground">Track migration and margin recovery</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">POS Integration</p>
                    <p className="text-sm text-muted-foreground">Seamless connection with Toast, Square</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="gradient-primary py-16 rounded-2xl">
        <div className="container mx-auto text-center">
          <h2 className="mb-6 text-white">Be First to Reclaim Your Margins</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join the waitlist for exclusive early access pricing and implementation support when we launch.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/audit">Join Waitlist for Margin OS</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Delivery;
