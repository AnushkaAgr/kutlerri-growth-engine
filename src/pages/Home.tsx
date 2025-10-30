import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, DollarSign, Target, ArrowRight, CheckCircle2 } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="mb-6">
                We Grow Restaurants — Intelligently.
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                AI-driven growth and analytics that increase revenue, reduce costs, and expand margins.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="xl" asChild>
                  <Link to="/audit">Get a Free Growth Audit</Link>
                </Button>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/how-it-works">See It in Action</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  <span>Setup in minutes</span>
                </div>
              </div>
            </div>
            <div className="relative animate-float">
              <img
                src={heroDashboard}
                alt="Restaurant intelligence dashboard"
                className="rounded-xl shadow-xl border border-border"
              />
              <div className="absolute inset-0 gradient-dashboard rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Three Ways We Drive Growth</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Kutlerri combines AI, analytics, and automation to transform your restaurant's performance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-accent transition-smooth hover:shadow-lg">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl mb-4">Increase Revenue</h3>
                <p className="text-muted-foreground mb-6">
                  AI-powered B2B catering lead generation finds and converts corporate buyers in your delivery zone.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">+30% catering revenue in 60 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">Automated reorder campaigns</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">CRM integration with POS</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/solutions/catering">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-smooth hover:shadow-lg">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-6">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl mb-4">Reduce COGS</h3>
                <p className="text-muted-foreground mb-6">
                  Restaurant Intelligence Analytics aggregates POS and inventory data to reveal cost-saving opportunities.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">−8% average food cost reduction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">Real-time cost tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">Unified dashboards</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/solutions/intelligence">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-smooth hover:shadow-lg">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl mb-4">Increase Margins</h3>
                <p className="text-muted-foreground mb-6">
                  Delivery Margin Optimization automates first-party order migration to reduce aggregator fees.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">Save up to 30% on delivery fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">Smart incentive automation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-sm">Digital loyalty flows</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/solutions/delivery">
                    Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 px-4 gradient-hero">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to intelligent restaurant growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full gradient-primary flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Discovery</h3>
              <p className="text-muted-foreground">
                We analyze your restaurant's data, market position, and growth opportunities
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full gradient-primary flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Execution</h3>
              <p className="text-muted-foreground">
                Our AI-powered systems generate leads, optimize costs, and drive conversions automatically
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full gradient-primary flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">ROI Tracking</h3>
              <p className="text-muted-foreground">
                Real-time dashboards show revenue growth, cost savings, and margin improvements
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="cta" size="xl" asChild>
              <Link to="/how-it-works">See Detailed Workflow</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Trusted by Growing Restaurants</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from real restaurants
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 border-2">
              <div className="text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                +30%
              </div>
              <p className="text-lg font-medium mb-2">Catering Revenue Growth</p>
              <p className="text-sm text-muted-foreground">Average increase in 60 days</p>
            </Card>

            <Card className="text-center p-8 border-2">
              <div className="text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                −8%
              </div>
              <p className="text-lg font-medium mb-2">Food Cost Reduction</p>
              <p className="text-sm text-muted-foreground">Within one quarter</p>
            </Card>

            <Card className="text-center p-8 border-2">
              <div className="text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                10:1
              </div>
              <p className="text-lg font-medium mb-2">Return on Investment</p>
              <p className="text-sm text-muted-foreground">On Kutlerri campaigns</p>
            </Card>
          </div>

          <Card className="max-w-3xl mx-auto border-2">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <p className="text-lg italic mb-4">
                    "Kutlerri helped us unlock a completely new revenue stream. We went from sporadic catering orders to consistent B2B accounts that now represent 25% of our revenue. The intelligence dashboard also helped us identify and eliminate $12K in annual waste."
                  </p>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="font-semibold">Sarah Martinez</p>
                      <p className="text-sm text-muted-foreground">Owner, Rasa Kitchen (7 locations)</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="gradient-primary py-20 px-4 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-6 text-white">Your kitchen is ready. Let's grow it intelligently.</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of restaurants using AI to increase revenue, reduce costs, and expand margins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" asChild>
              <Link to="/audit">Get a Free Growth Audit</Link>
            </Button>
            <Button
              size="xl"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20"
              asChild
            >
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
