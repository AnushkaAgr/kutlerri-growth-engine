import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FileText, Calculator, ArrowRight } from "lucide-react";

const Resources = () => {
  const blogPosts = [
    {
      title: "How AI is Transforming Restaurant Growth in 2025",
      category: "AI for Restaurants",
      excerpt: "Discover how leading restaurants are using artificial intelligence to automate lead generation, optimize costs, and increase margins.",
      readTime: "5 min read",
    },
    {
      title: "The Complete Guide to Corporate Catering Lead Generation",
      category: "Corporate Catering",
      excerpt: "Step-by-step strategies to find, qualify, and convert corporate catering buyers in your delivery zone.",
      readTime: "8 min read",
    },
    {
      title: "Restaurant Cost Intelligence: Reducing Food Costs by 10%+",
      category: "Cost Analytics",
      excerpt: "Learn how top operators use data analytics to identify waste, negotiate with suppliers, and improve margins.",
      readTime: "6 min read",
    },
  ];

  const caseStudies = [
    {
      restaurant: "Rasa Kitchen (7 locations)",
      result: "+38% catering revenue in 30 days",
      description: "How Rasa Kitchen secured 23 new corporate accounts and transformed their catering business with CaterReach OS.",
    },
    {
      restaurant: "Urban Taco (4 locations)",
      result: "−12% food costs in one quarter",
      description: "Urban Taco eliminated $42K in annual waste and improved margins by 3.5% using Restaurant Intelligence Analytics.",
    },
    {
      restaurant: "Harvest Bowl (12 locations)",
      result: "10:1 ROI on campaigns",
      description: "Multi-unit franchise generated $180K in new catering revenue with $18K investment in Kutlerri programs.",
    },
  ];

  const leadMagnets = [
    {
      title: "Top 50 Corporate Catering Buyers Near You",
      description: "Get a free list of qualified corporate leads in your delivery zone, complete with company size and catering patterns.",
      icon: FileText,
      cta: "Download Free Report",
    },
    {
      title: "Restaurant Cost Intelligence Report 2025",
      description: "Industry benchmarks for food costs, labor, and margins plus strategies to outperform competitors.",
      icon: BookOpen,
      cta: "Get the Report",
    },
    {
      title: "ROI Calculator",
      description: "Calculate your potential revenue growth and cost savings with Kutlerri's growth programs.",
      icon: Calculator,
      cta: "Try Calculator",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      {/* Hero */}
      <section className="container mx-auto mb-20 text-center">
        <h1 className="mb-6">Resources & Insights</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Expert guides, case studies, and tools to help you grow your restaurant intelligently
        </p>
      </section>

      {/* Lead Magnets */}
      <section className="container mx-auto mb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {leadMagnets.map((magnet) => (
            <Card key={magnet.title} className="border-2 hover:border-accent transition-smooth">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <magnet.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{magnet.title}</h3>
                <p className="text-muted-foreground mb-6">{magnet.description}</p>
                <Button variant="cta" className="w-full" asChild>
                  <Link to="/audit">{magnet.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Blog Posts */}
      <section className="container mx-auto mb-20">
        <div className="mb-12">
          <h2 className="mb-4">Latest Insights</h2>
          <p className="text-muted-foreground">
            Stay ahead with expert analysis on restaurant growth, AI, and analytics
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.title} className="border-2 hover:shadow-lg transition-smooth">
              <CardContent className="p-6">
                <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold mb-3">
                  {post.category}
                </div>
                <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  <Button variant="ghost" size="sm">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="gradient-hero py-20 mb-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from restaurants using Kutlerri to grow intelligently
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <Card key={study.restaurant} className="border-2">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-success/10 text-success rounded-full text-sm font-semibold">
                      Case Study
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{study.restaurant}</h3>
                  <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
                    {study.result}
                  </div>
                  <p className="text-muted-foreground mb-4">{study.description}</p>
                  <Button variant="outline" className="w-full">
                    Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section id="calculator" className="container mx-auto mb-20">
        <Card className="border-2 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="h-16 w-16 rounded-lg gradient-primary flex items-center justify-center mx-auto mb-4">
                <Calculator className="h-8 w-8 text-white" />
              </div>
              <h2 className="mb-4">Calculate Your Potential ROI</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                See how much revenue you could generate and costs you could save with Kutlerri's intelligent growth programs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-4">Revenue Growth Potential</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Current monthly revenue:</span>
                    <span className="font-semibold">$50,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Catering increase (+30%):</span>
                    <span className="font-semibold text-success">+$15,000</span>
                  </li>
                  <li className="flex justify-between border-t pt-3">
                    <span className="text-muted-foreground">New monthly revenue:</span>
                    <span className="font-bold text-accent">$65,000</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Cost Savings Potential</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Current food costs (30%):</span>
                    <span className="font-semibold">$15,000</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Cost reduction (-8%):</span>
                    <span className="font-semibold text-success">-$1,200</span>
                  </li>
                  <li className="flex justify-between border-t pt-3">
                    <span className="text-muted-foreground">Monthly savings:</span>
                    <span className="font-bold text-accent">$1,200</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-primary rounded-lg p-6 text-white text-center">
              <p className="text-sm opacity-90 mb-2">Estimated Annual Impact</p>
              <p className="text-4xl font-bold mb-2">+$194,400</p>
              <p className="text-sm opacity-90">Additional revenue and cost savings per year</p>
            </div>

            <div className="text-center mt-8">
              <Button variant="cta" size="lg" asChild>
                <Link to="/audit">Get Your Custom ROI Report</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Newsletter */}
      <section className="gradient-hero py-16 rounded-2xl">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="mb-4">Stay Informed</h2>
          <p className="text-muted-foreground mb-8">
            Get weekly insights on restaurant growth, AI automation, and cost optimization delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 px-4 rounded-lg border border-border bg-background"
            />
            <Button variant="cta" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
