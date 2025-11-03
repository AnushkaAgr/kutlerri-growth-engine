import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, MapPin, Target, Repeat, TrendingUp } from "lucide-react";
// import cateringLeads from "@/assets/catering-leads.jpg";

const Catering = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      {/* Hero */}
      <section className="container mx-auto mb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              CaterReach OS
            </div>
            <h1 className="mb-6">B2B Catering Lead Generation</h1>
            <p className="text-xl text-muted-foreground mb-8">
              AI engine discovers, qualifies, and converts local corporate catering buyers using event triggers, LinkedIn signals, and auto-personalized outreach.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">+30% catering revenue in 60 days</p>
                  <p className="text-sm text-muted-foreground">Average increase across our restaurant partners</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">Automated reorders</p>
                  <p className="text-sm text-muted-foreground">AI nurtures relationships for repeat business</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold">CRM integration with Toast/Square</p>
                  <p className="text-sm text-muted-foreground">Seamless data sync with your existing systems</p>
                </div>
              </div>
            </div>
            <Button variant="cta" size="xl" asChild>
              <Link to="/audit">Get 50 Corporate Leads in 7 Days</Link>
            </Button>
          </div>
          <div className="relative">
            
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="gradient-hero py-16 mb-20">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">The Corporate Catering Challenge</h2>
            <p className="text-xl text-muted-foreground">
              Corporate catering is high-margin but unpredictable. Finding decision-makers is time-consuming, outreach timing is critical, and manual processes don't scale. Most restaurants miss 80% of nearby opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Workflow */}
      <section className="container mx-auto mb-20">
        <div className="text-center mb-16">
          <h2 className="mb-4">How CaterReach OS Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Four-step automated process to convert corporate catering buyers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-2">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lead Discovery</h3>
              <p className="text-muted-foreground">
                AI scans your delivery zone for companies with 15+ employees, upcoming events, and catering needs based on LinkedIn activity and business signals.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Outreach</h3>
              <p className="text-muted-foreground">
                Personalized emails and LinkedIn messages sent at optimal times, mentioning specific events or triggers to maximize response rates.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Order Conversion</h3>
              <p className="text-muted-foreground">
                Automated follow-ups, menu sharing, and ordering links make it easy for corporate buyers to place their first order.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardContent className="p-6">
              <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <Repeat className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Repeat Campaigns</h3>
              <p className="text-muted-foreground">
                Smart reorder reminders and loyalty programs keep corporate accounts coming back month after month.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Outcomes */}
      <section className="gradient-hero py-20 mb-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">What You'll Achieve</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-2">
              <CardContent className="p-6">
                <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                  +30%
                </div>
                <p className="font-semibold mb-2">Catering Revenue</p>
                <p className="text-sm text-muted-foreground">Average increase within 60 days of launch</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2">
              <CardContent className="p-6">
                <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <p className="font-semibold mb-2">Qualified Leads</p>
                <p className="text-sm text-muted-foreground">New corporate contacts per month (Starter plan)</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2">
              <CardContent className="p-6">
                <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <p className="font-semibold mb-2">Automated Outreach</p>
                <p className="text-sm text-muted-foreground">AI works around the clock to find opportunities</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="container mx-auto mb-20">
        <Card className="border-2 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-success/10 text-success rounded-full text-sm font-semibold">
                Case Study
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Rasa Kitchen: 38% Catering Growth in 30 Days</h3>
            <p className="text-muted-foreground mb-6">
              Rasa Kitchen, a 7-location fast-casual chain, had minimal catering business before partnering with Kutlerri. Within 30 days of launching CaterReach OS, they secured 23 new corporate accounts and grew catering revenue by 38%.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <p className="text-3xl font-bold text-accent mb-1">147</p>
                <p className="text-sm text-muted-foreground">Qualified leads generated</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent mb-1">23</p>
                <p className="text-sm text-muted-foreground">New corporate accounts</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent mb-1">+38%</p>
                <p className="text-sm text-muted-foreground">Revenue increase</p>
              </div>
            </div>
            <Button variant="outline" asChild>
              <Link to="/resources#case-studies">
                Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="gradient-primary py-16 rounded-2xl">
        <div className="container mx-auto text-center">
          <h2 className="mb-6 text-white">Ready to unlock corporate catering revenue?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get 50 qualified corporate leads in your first 7 days. No credit card required.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/audit">Start Free Trial</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Catering;
