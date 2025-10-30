import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Zap, BarChart3, TrendingUp, CheckCircle2 } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      {/* Hero */}
      <section className="container mx-auto mb-20 text-center">
        <h1 className="mb-6">How Kutlerri Works</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          From discovery to execution to measurable ROI—here's how we help restaurants grow intelligently
        </p>
      </section>

      {/* Main Workflow */}
      <section className="container mx-auto mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="h-16 w-16 rounded-full gradient-primary flex items-center justify-center text-2xl font-bold text-white mb-6">
                  1
                </div>
                <h2 className="mb-4">Discovery & Audit</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We start by understanding your restaurant's current state—revenue streams, cost structure, delivery zone, and growth goals.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Data Integration</p>
                      <p className="text-sm text-muted-foreground">Connect your POS, inventory, and financial systems</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Market Analysis</p>
                      <p className="text-sm text-muted-foreground">Identify catering opportunities in your delivery zone</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Cost Baseline</p>
                      <p className="text-sm text-muted-foreground">Establish current COGS and margin benchmarks</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="h-16 w-16 rounded-lg gradient-primary flex items-center justify-center mb-6 mx-auto">
                    <Search className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4">Free Growth Audit</h3>
                  <p className="text-muted-foreground text-center mb-6">
                    Get a comprehensive report showing untapped revenue opportunities and cost-saving areas specific to your restaurant.
                  </p>
                  <Button variant="cta" className="w-full" asChild>
                    <Link to="/audit">Request Audit</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="border-2 lg:order-2">
                <CardContent className="p-8">
                  <div className="h-16 w-16 rounded-lg gradient-primary flex items-center justify-center mb-6 mx-auto">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4">AI-Powered Execution</h3>
                  <p className="text-muted-foreground text-center">
                    Our systems work 24/7 to generate leads, optimize costs, and drive conversions—no manual work required from your team.
                  </p>
                </CardContent>
              </Card>
              <div className="lg:order-1">
                <div className="h-16 w-16 rounded-full gradient-primary flex items-center justify-center text-2xl font-bold text-white mb-6">
                  2
                </div>
                <h2 className="mb-4">Automated Execution</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Once we have your baseline, our AI systems immediately start working to increase revenue, reduce costs, and expand margins.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Lead Generation</p>
                      <p className="text-sm text-muted-foreground">AI finds and contacts corporate catering buyers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Cost Optimization</p>
                      <p className="text-sm text-muted-foreground">Real-time alerts for price spikes and waste</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Campaign Management</p>
                      <p className="text-sm text-muted-foreground">Automated follow-ups and reorder campaigns</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="h-16 w-16 rounded-full gradient-primary flex items-center justify-center text-2xl font-bold text-white mb-6">
                  3
                </div>
                <h2 className="mb-4">ROI Tracking & Reporting</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Watch your revenue grow, costs decline, and margins expand—all tracked in real-time dashboards with detailed performance reports.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Live Dashboards</p>
                      <p className="text-sm text-muted-foreground">See catering pipeline, cost trends, and ROI</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Weekly Reviews</p>
                      <p className="text-sm text-muted-foreground">Strategy calls to optimize and scale campaigns</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Custom Reports</p>
                      <p className="text-sm text-muted-foreground">Share progress with ownership or investors</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="border-2">
                <CardContent className="p-8">
                  <div className="h-16 w-16 rounded-lg gradient-primary flex items-center justify-center mb-6 mx-auto">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-4">Measurable Results</h3>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-accent mb-1">+30%</p>
                      <p className="text-sm text-muted-foreground">Average catering revenue growth</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-accent mb-1">−8%</p>
                      <p className="text-sm text-muted-foreground">Food cost reduction</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-accent mb-1">10:1</p>
                      <p className="text-sm text-muted-foreground">Return on investment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="gradient-hero py-20 mb-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Your First 90 Days</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how quickly you'll start seeing results
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="text-accent font-bold mb-2">Week 1-2</div>
                <h3 className="text-xl font-semibold mb-3">Setup & Discovery</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• POS integration complete</li>
                  <li>• First catering leads delivered</li>
                  <li>• Analytics dashboard live</li>
                  <li>• Baseline costs established</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="text-accent font-bold mb-2">Week 3-8</div>
                <h3 className="text-xl font-semibold mb-3">Growth Acceleration</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• First corporate accounts won</li>
                  <li>• Cost optimization in progress</li>
                  <li>• Outreach campaigns running</li>
                  <li>• Weekly strategy reviews</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="text-accent font-bold mb-2">Week 9-12</div>
                <h3 className="text-xl font-semibold mb-3">Results & Scale</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• +15-30% catering revenue</li>
                  <li>• Measurable cost reductions</li>
                  <li>• Reorder automation active</li>
                  <li>• Scaling successful programs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary py-16 rounded-2xl">
        <div className="container mx-auto text-center">
          <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
            <TrendingUp className="h-8 w-8 text-white" />
          </div>
          <h2 className="mb-6 text-white">Ready to grow intelligently?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Start with a free growth audit and see exactly how we can increase your revenue and margins.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/audit">Get Your Free Audit</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
