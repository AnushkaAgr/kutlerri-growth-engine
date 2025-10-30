import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      {/* Hero */}
      <section className="container mx-auto mb-20 text-center">
        <h1 className="mb-6">Get Your Free Growth Audit</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          See exactly how much revenue you could generate and costs you could save with intelligent growth programs tailored to your restaurant.
        </p>
      </section>

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-2">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Smith" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="john@restaurant.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="restaurant">Restaurant Name *</Label>
                    <Input id="restaurant" placeholder="Your Restaurant Name" required />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="locations">Number of Locations</Label>
                      <Input id="locations" type="number" placeholder="1" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="revenue">Monthly Revenue</Label>
                      <Input id="revenue" placeholder="$50,000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">What are you interested in? *</Label>
                    <select
                      id="interest"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="catering">B2B Catering Lead Generation</option>
                      <option value="intelligence">Restaurant Intelligence Analytics</option>
                      <option value="both">Both Solutions</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your goals (optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="e.g., Want to grow catering revenue, reduce food costs, improve margins..."
                      rows={4}
                    />
                  </div>

                  <Button variant="cta" size="lg" className="w-full" type="submit">
                    Request Free Audit
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    We'll reach out within 24 hours to schedule your audit call.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* What to Expect */}
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">30-Minute Strategy Call</p>
                      <p className="text-muted-foreground">Deep dive into your current operations and goals</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Market Analysis</p>
                      <p className="text-muted-foreground">Identify catering opportunities in your delivery zone</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Custom ROI Report</p>
                      <p className="text-muted-foreground">Detailed projection of revenue growth and cost savings</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="border-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:hello@kutlerri.com"
                        className="text-sm text-muted-foreground hover:text-accent transition-smooth"
                      >
                        hello@kutlerri.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a
                        href="tel:+1234567890"
                        className="text-sm text-muted-foreground hover:text-accent transition-smooth"
                      >
                        (123) 456-7890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-sm text-muted-foreground">United States</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Signals */}
            <Card className="border-2 bg-gradient-primary text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Why Trust Kutlerri?</h3>
                <ul className="space-y-3 text-sm">
                  <li>✓ 200+ restaurant partners nationwide</li>
                  <li>✓ $12M+ in new revenue generated</li>
                  <li>✓ 10:1 average ROI</li>
                  <li>✓ No long-term contracts</li>
                  <li>✓ 14-day free trial</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
