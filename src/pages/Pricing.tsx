import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$299",
      description: "Perfect for single-location restaurants testing corporate catering",
      features: [
        "100 qualified catering leads/month",
        "Basic analytics reports",
        "Email support",
        "Monthly performance review",
        "Lead discovery & qualification",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Growth",
      price: "$499",
      description: "Ideal for multi-unit operators ready to scale",
      features: [
        "300 qualified catering leads/month",
        "Full cost tracking & analytics",
        "POS integration (Toast, Square)",
        "AI-powered outreach automation",
        "Priority support",
        "Weekly strategy calls",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Scale",
      price: "$899",
      description: "For established chains maximizing every growth lever",
      features: [
        "Unlimited catering leads",
        "Advanced intelligence dashboards",
        "Full POS & inventory integration",
        "Loyalty & reorder automation",
        "Dedicated growth manager",
        "Custom reporting & insights",
        "API access",
      ],
      cta: "Book a Demo",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the plan that fits your restaurant's growth stage. All plans include 14-day free trial.
          </p>
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full">
            <span className="text-sm">Full-Service Growth Programs</span>
            <span className="text-muted-foreground text-sm">•</span>
            <span className="text-sm text-muted-foreground">SaaS Platform Coming Soon</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.popular ? "border-2 border-accent shadow-glow" : "border-2"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-primary px-4 py-1 rounded-full">
                  <span className="text-sm font-semibold text-white flex items-center gap-1">
                    <Zap className="h-4 w-4" /> Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? "cta" : "outline"}
                  className="w-full"
                  size="lg"
                  asChild
                >
                  <Link to="/audit">{plan.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What's included in the free trial?</h3>
                <p className="text-muted-foreground">
                  Full access to all features in your chosen plan for 14 days. No credit card required to start.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
                <p className="text-muted-foreground">
                  Yes! You can change your plan at any time. Upgrades take effect immediately, and downgrades apply at the next billing cycle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Do you offer custom enterprise plans?</h3>
                <p className="text-muted-foreground">
                  Absolutely. For restaurants with 50+ locations or unique requirements, contact us for custom pricing and dedicated support.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">What POS systems do you integrate with?</h3>
                <p className="text-muted-foreground">
                  We integrate with Toast, Square, Clover, and most major POS systems. Custom integrations available on Scale plan.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">When will the SaaS platform be available?</h3>
                <p className="text-muted-foreground">
                  Our self-service platform is currently in development. Join the waitlist to be notified when it launches and receive exclusive early access pricing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold mb-4">Not sure which plan is right for you?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Book a free growth audit and we'll recommend the best solution for your restaurant.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/audit">Schedule Free Audit</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
