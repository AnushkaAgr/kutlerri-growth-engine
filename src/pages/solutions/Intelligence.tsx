import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, DollarSign, BarChart3, Database, Zap } from "lucide-react";
import analyticsDashboard from "@/assets/analytics-dashboard.jpg";

const Intelligence = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      {/* Hero */}
      <section className="container mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              Restaurant Intelligence OS
            </div>
            <h1 className="mb-6">COGS & Performance Analytics</h1>
            <p className="text-xl text-muted-foreground mb-8">
              AI-powered analytics layer aggregates data from POS, inventory, and suppliers to reveal waste, cost trends, and margin insights you can act on immediately.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">−8% average COGS reduction</p>
                  <p className="text-sm text-muted-foreground">Identify and eliminate waste within one quarter</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Faster menu pricing decisions</p>
                  <p className="text-sm text-muted-foreground">Real-time cost tracking for menu engineering</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Unified dashboards</p>
                  <p className="text-sm text-muted-foreground">All your data in one place, no manual spreadsheets</p>
                </div>
              </div>
            </div>
            <Button variant="cta" size="xl" asChild>
              <Link to="/audit">See How Much You Can Save</Link>
            </Button>
          </div>
          <div className="relative">
            <img
              src={analyticsDashboard}
              alt="Restaurant cost analytics dashboard"
              className="rounded-xl shadow-xl border border-border"
            />
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="gradient-hero py-16 mb-20">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Flying Blind on Costs</h2>
            <p className="text-xl text-muted-foreground">
              Most operators struggle with rising food costs, labor inefficiency, and disconnected POS and inventory systems. Without real-time visibility, you're reacting to problems instead of preventing them—costing thousands in waste and lost margins.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Workflow */}
      <section className="container mx-auto mb-20">
        <div className="text-center mb-16">
          <h2 className="mb-4">How Restaurant Intelligence Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four-step process to transform data into cost savings
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-2">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Sync</h3>
              <p className="text-muted-foreground">
                Automatically connect POS (Toast, Square), inventory systems (MarketMan, Restaurant365), and supplier invoices into one unified platform.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analysis</h3>
              <p className="text-muted-foreground">
                AI analyzes ingredient costs, waste patterns, labor efficiency, and menu profitability to identify saving opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Recommendations</h3>
              <p className="text-muted-foreground">
                Get actionable alerts for price increases, waste spikes, menu items losing money, and inventory optimization opportunities.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cost Reduction</h3>
              <p className="text-muted-foreground">
                Execute recommended changes—adjust menu prices, renegotiate with suppliers, reduce waste—and track ROI in real-time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features */}
      <section className="gradient-hero py-20 mb-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Powerful Analytics Features</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Ingredient Cost Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Monitor price changes from suppliers and get alerts when costs spike, with historical trends to forecast future expenses.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Waste Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Identify exactly where food is being wasted—prep, storage, or service—and calculate the dollar impact.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Menu Profitability</h3>
                <p className="text-sm text-muted-foreground">
                  See which menu items are actually profitable vs. which are costing you money, with recommended price adjustments.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Labor Optimization</h3>
                <p className="text-sm text-muted-foreground">
                  Analyze labor costs against revenue to optimize scheduling and reduce overtime expenses.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Supplier Comparison</h3>
                <p className="text-sm text-muted-foreground">
                  Compare pricing across suppliers for the same ingredients to negotiate better rates or switch vendors.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Custom Reports</h3>
                <p className="text-sm text-muted-foreground">
                  Generate reports for ownership, investors, or lenders showing cost control and margin improvements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="container mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="mb-4">What You'll Achieve</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center border-2">
            <CardContent className="p-6">
              <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                −8%
              </div>
              <p className="font-semibold mb-2">Food Cost Reduction</p>
              <p className="text-sm text-muted-foreground">Average savings within one quarter</p>
            </CardContent>
          </Card>
          <Card className="text-center border-2">
            <CardContent className="p-6">
              <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                $12K+
              </div>
              <p className="font-semibold mb-2">Annual Waste Eliminated</p>
              <p className="text-sm text-muted-foreground">Typical single-location restaurant</p>
            </CardContent>
          </Card>
          <Card className="text-center border-2">
            <CardContent className="p-6">
              <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                2-4%
              </div>
              <p className="font-semibold mb-2">Margin Improvement</p>
              <p className="text-sm text-muted-foreground">Net profit increase on average</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-primary py-16 rounded-2xl">
        <div className="container mx-auto text-center">
          <h2 className="mb-6 text-white">Stop guessing. Start saving.</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get a free cost intelligence report showing exactly where you're losing money.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/audit">Get Free Cost Analysis</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Intelligence;
