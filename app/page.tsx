import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { IntegratedThemeSwitcher } from "@/components/integrated-theme-switcher";
import { Marquee } from "@/components/kibo-ui/marquee";
import { Announcement } from "@/components/kibo-ui/announcement";
import {
  Bot,
  TrendingUp,
  Clock,
  Target,
  MessageSquare,
  BarChart3,
  Mail,
  Linkedin,
  Phone,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users,
  Globe,
  Shield,
  Zap,
  DollarSign,
  BookOpen,
  Play,
  Menu,
  Star,
  Twitter,
  Youtube
} from "lucide-react";

export default function Home() {

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                SalesAgency<span className="text-primary">.ai</span>
              </span>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              <IntegratedThemeSwitcher />
              <Button size="sm" className="hidden sm:inline-flex">
                Book Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              {/* Mobile Menu Button */}
              <Button size="sm" variant="ghost" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Enhanced Background with Gradient Mesh */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 gradient-mesh" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-10" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <Announcement className="mx-auto">
              <Target className="h-4 w-4" />
              $10M+ Closed Personally • 300+ Reps Trained • $100M+ Generated
            </Announcement>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
              Scale Your Sales Team to
              <br />
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                7-8 Figures
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              SalesAgency.ai has personally closed $10M+ and trained 300+ reps who've generated $100M+ in sales. SalesAgency.ai partners with founders to build sales systems that scale—using the proven <span className="font-semibold text-foreground">RapidClose™ Method</span>, elite talent, and AI-backed optimization.
            </p>

            {/* Enhanced CTA Group */}
            <div className="flex flex-col items-center gap-6 pt-6">
              {/* Primary CTA Buttons */}
              <div className="flex w-full max-w-lg flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group relative overflow-hidden h-12 sm:h-14 text-base sm:text-lg font-semibold px-8">
                  <span className="relative z-10 flex items-center">
                    Book Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-foreground/20 to-primary/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Button>

                <Button size="lg" variant="outline" className="h-12 sm:h-14 text-base sm:text-lg font-semibold border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors px-8">
                  <Target className="mr-2 h-5 w-5" />
                  View Case Study
                </Button>
              </div>

              {/* Trust Indicator */}
              <p className="text-sm text-muted-foreground">
                Free 30-minute strategy call • No pressure • Real conversation about growth
              </p>
            </div>

            {/* Stats Pills */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-8">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <DollarSign className="h-4 w-4 mr-2" />
                $10M+ Closed
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <Users className="h-4 w-4 mr-2" />
                300+ Reps Trained
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <TrendingUp className="h-4 w-4 mr-2" />
                $100M+ Generated
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <Target className="h-4 w-4 mr-2" />
                100+ Teams Scaled
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline">Core Services</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            How SalesAgency.ai Transforms Your Sales Organization
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Four proven pillars that turn your sales team into a predictable, scalable cash machine—no guesswork, no babysitting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: Target,
              title: "Sales System Overhaul",
              description: "Install repeatable, airtight sales flows that maximize Dollar per Lead. No more random acts of selling—just frameworks that close upfront, not someday. Includes RapidClose™ Method integration and Pre-Close Commitment processes."
            },
            {
              icon: Users,
              title: "Elite Team Buildout & Training",
              description: "Access SalesAgency.ai's network of 1000+ top performers. SalesAgency.ai hires closers/setters that have been personally trained or vetted, then puts them through rigorous 30-day bootcamps to perfect mindset, skillset, and product knowledge. Closer-level Setters, Demigod-level Closers."
            },
            {
              icon: BarChart3,
              title: "AI-Backed Performance Optimization",
              description: "Tracking down to the dollar that minimizes human error. Sales process and call audits at scale to understand lead sentiment, objections, and team performance—driving smart, data-backed decisions that fix issues before they cost you."
            },
            {
              icon: TrendingUp,
              title: "Fractional CRO Leadership",
              description: "SalesAgency.ai architects, manages, and scales your entire sales org better than a traditional sales manager ever can. Get dashboards, clarity, and playbooks that free you to run the business, not the sales floor. Strategic leadership without the $300K salary."
            }
          ].map((feature, i) => (
            <Card
              key={i}
              className="card-elevated hover:border-primary/20 group relative"
            >
              {/* Border glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />

              <CardHeader className="relative">
                <div className="h-14 w-14 rounded-lg bg-primary/10 group-hover:bg-primary/15 flex items-center justify-center transition-colors icon-float">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>


      {/* Case Study Section */}
      <section id="case-study" className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline">Proven Results</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            $0 to $1M/Month in 9 Months
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            One of SalesAgency.ai's proudest wins: scaling a high-ticket service-based sales team from scratch to over $1M/month in cash—with systems that scale beyond the founder's direct involvement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: DollarSign,
              title: "Pre-Close Commitment",
              description: "Installed a process that got leads to commit financially BEFORE the closing call, boosting Dollar per Lead to over $5K.",
              result: "$5K+ DPL"
            },
            {
              icon: Users,
              title: "Elite Hiring Strategy",
              description: "Hired Closer-level talent for Setter positions and Demigod-level talent for Closer positions by properly aligning incentives and expectations.",
              result: "Top 1% Talent"
            },
            {
              icon: BarChart3,
              title: "Tech-Driven Feedback Loops",
              description: "Used AI & analytics to pinpoint exactly where scripts, funnels, or reps needed adjustment—fixing issues before they became expensive.",
              result: "7-Figure Scale"
            }
          ].map((strategy, i) => (
            <Card
              key={i}
              className="card-elevated hover:border-primary/20 group relative"
            >
              {/* Border glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />

              <CardHeader className="items-center relative">
                <div className="h-18 w-18 rounded-full bg-primary/10 group-hover:bg-primary/15 flex items-center justify-center transition-colors icon-float">
                  <strategy.icon className="h-9 w-9 text-primary" />
                </div>
                <CardTitle className="text-xl text-center">
                  {strategy.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4 relative">
                <p className="text-muted-foreground leading-relaxed">
                  {strategy.description}
                </p>
                <Badge className="font-semibold">{strategy.result}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto italic">
            "The result: a team that hit 7 figures/month in cash in record time, with systems that scale beyond the founder's direct involvement."
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 bg-muted/30">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline">Client Results</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Real Founders, Real Results
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how founders transformed their sales teams with proven systems and elite talent
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Jason M.",
              role: "SaaS Founder",
              company: "High-Ticket SaaS",
              initials: "JM",
              quote: "Mitch transformed our sales team from inconsistent to unstoppable. His RapidClose™ Method doubled our close rate in 60 days. We finally have a predictable revenue machine."
            },
            {
              name: "Sarah K.",
              role: "E-Commerce CEO",
              company: "Premium E-Commerce",
              initials: "SK",
              quote: "The Pre-Close Commitment framework Mitch installed increased our DPL by 3x. Game changer for our high-ticket offers. Best ROI we've ever had on a sales investment."
            },
            {
              name: "David R.",
              role: "Info Product Founder",
              company: "Coaching Business",
              initials: "DR",
              quote: "Mitch didn't just train our reps—he rebuilt our entire sales system. We went from $200K/mo to $800K/mo in 5 months. The man is a sales architect."
            },
            {
              name: "Lisa T.",
              role: "Agency Owner",
              company: "Marketing Agency",
              initials: "LT",
              quote: "Having Mitch as our Fractional CRO was like getting a world-class sales leader without the $300K salary. ROI was immediate. He knows sales inside and out."
            },
            {
              name: "Mark B.",
              role: "Coaching Business",
              company: "Executive Coaching",
              initials: "MB",
              quote: "The talent Mitch brought from his network closed better than closers we paid 2x as much. Elite doesn't even describe it. These reps are demigods."
            },
            {
              name: "Amanda G.",
              role: "Service Business Owner",
              company: "B2B Services",
              initials: "AG",
              quote: "Mitch's AI-backed call audits found issues in our scripts we never would have caught. Fixed them and conversions jumped 40%. Data doesn't lie."
            }
          ].map((testimonial, i) => (
            <Card key={i} className="card-elevated">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={`/testimonials/${testimonial.initials.toLowerCase()}.jpg`} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-muted-foreground font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>


      {/* FAQ Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline">FAQ</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about working with Mitch and scaling your sales team
          </p>
        </div>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto space-y-4">
          <AccordionItem value="item-1" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-semibold">What makes SalesAgency.ai different from hiring a sales manager?</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              Traditional sales managers cost $150K-$300K/year and often lack the systems, training expertise, and network SalesAgency.ai brings. As your Fractional CRO, you get strategic leadership, elite talent access, proven frameworks (RapidClose™), and AI-backed optimization—all for a fraction of the cost. Plus, SalesAgency.ai has personally closed $10M+ and trained teams that generated $100M+, so you're getting battle-tested expertise.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-semibold">What is the RapidClose™ Method?</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              RapidClose™ is SalesAgency.ai's proprietary sales framework created in 2021 that makes selling fun, simple, and highly effective. It's been proven to convert better than traditional guru methods because it focuses on Pre-Close Commitment, ethical persuasion, and maximizing Dollar per Lead. It's the foundation of every sales system SalesAgency.ai builds.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-semibold">How quickly can I see results?</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              Most clients see measurable improvements within 30-60 days. SalesAgency.ai's recent case study took a team from $0 to $1M/month in 9 months. Speed depends on your market, offer strength, and implementation pace, but SalesAgency.ai's systems are designed for fast, sustainable scaling.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-semibold">Do you only work with high-ticket offers?</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              While SalesAgency.ai specializes in high-ticket sales ($3K-$50K+), the frameworks work across price points. The key is having a scalable offer that justifies building a proper sales team. If you're doing $30K+/month and ready to scale, SalesAgency.ai should talk.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-semibold">What's included in the 30-day bootcamp for reps?</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              Reps go through intensive training covering: sales psychology, objection handling, the RapidClose™ Method, product deep-dives, call simulations, and mindset conditioning. By day 30, they're not just trained—they're elite performers ready to close.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-semibold">How does the AI-backed optimization work?</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              SalesAgency.ai uses AI and analytics to track every call, analyze sentiment, identify objection patterns, and spot script weaknesses. This gives dollar-level tracking accuracy and lets SalesAgency.ai fix issues before they cost you serious money. It's like having a data scientist on every call.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-semibold">Can you help if my current sales team is underperforming?</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              Absolutely. SalesAgency.ai specializes in sales team turnarounds. Through audits, retraining, process fixes, and sometimes strategic replacements, SalesAgency.ai can transform underperformers into a revenue-generating machine. Many of the best results come from fixing broken teams.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-semibold">What industries do you work with?</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              SalesAgency.ai works with service-based businesses, coaching/consulting, SaaS, info products, agencies, and e-commerce—anywhere high-ticket sales are involved. If you have a strong offer and want to scale past 7 figures, SalesAgency.ai can help.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-semibold">How involved will you be day-to-day?</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              As your Fractional CRO, SalesAgency.ai architects the system, hires/trains the team, and provides ongoing strategic oversight. Day-to-day management is handled by the systems and dashboards SalesAgency.ai builds, freeing you to focus on running your business. You get CRO-level strategy without the micromanagement.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10" className="border rounded-lg px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-semibold">What's the investment to work with you?</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              Investment varies based on your current revenue, team size, and goals. Most engagements start at $10K/month for Fractional CRO services. This includes system buildout, team training, AI optimization, and strategic leadership. Book a strategy call to get a custom proposal tailored to your needs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>


      {/* CTA Section */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground my-24">
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-purple-600 opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Ready to Transform Your Sales?
            </h2>
            <p className="text-lg sm:text-xl opacity-90">
              Join forward-thinking companies using AI to scale their outbound sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-base sm:text-lg h-12 sm:h-14 font-semibold">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                className="text-base sm:text-lg h-12 sm:h-14 font-semibold border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors"
              >
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-background">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-t from-muted/30 to-background pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            {/* Column 1: Logo + Description */}
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">
                  SalesAgency<span className="text-primary">.ai</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-6 max-w-xs">
                Build sales teams that scale to 7-8 figures with proven systems, elite talent, and the RapidClose™ Method.
              </p>
              <div className="space-y-3 mb-6 text-sm">
                <p className="text-muted-foreground">
                  <a href="mailto:mitch@salesagency.ai" className="hover:text-primary transition-colors">
                    mitch@salesagency.ai
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <a href="tel:+13474042926" className="hover:text-primary transition-colors">
                    +1 (347) 404-2926
                  </a>
                </p>
              </div>
              <div className="flex gap-4">
                <Button size="icon" variant="ghost" className="hover:text-primary transition-colors" asChild>
                  <a href="https://www.facebook.com/mitch.sapoff.3/" target="_blank" rel="noopener noreferrer">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    <span className="sr-only">Facebook</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#services" className="relative group inline-block">
                    <span className="hover:text-foreground transition-colors">Core Services</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
                <li>
                  <a href="#case-study" className="relative group inline-block">
                    <span className="hover:text-foreground transition-colors">Case Study</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="relative group inline-block">
                    <span className="hover:text-foreground transition-colors">Investment</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
                <li>
                  <a href="#" className="relative group inline-block">
                    <span className="hover:text-foreground transition-colors">Book Call</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="relative group inline-block">
                    <span className="hover:text-foreground transition-colors">Blog</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
                <li>
                  <a href="#" className="relative group inline-block">
                    <span className="hover:text-foreground transition-colors">Case Studies</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
                <li>
                  <a href="#" className="relative group inline-block">
                    <span className="hover:text-foreground transition-colors">Documentation</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
                <li>
                  <a href="#" className="relative group inline-block">
                    <span className="hover:text-foreground transition-colors">Support</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="relative group inline-block">
                    <span className="hover:text-foreground transition-colors">About</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
                <li>
                  <a href="#" className="relative group inline-block">
                    <span className="hover:text-foreground transition-colors">Careers</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
                <li>
                  <a href="#" className="relative group inline-block">
                    <span className="hover:text-foreground transition-colors">Contact</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
                <li>
                  <a href="#" className="relative group inline-block">
                    <span className="hover:text-foreground transition-colors">Partners</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              &copy; 2025 SalesAgency.ai. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="relative group inline-block">
                <span className="hover:text-foreground transition-colors">Privacy Policy</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#" className="relative group inline-block">
                <span className="hover:text-foreground transition-colors">Terms of Service</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="#" className="relative group inline-block">
                <span className="hover:text-foreground transition-colors">Cookie Policy</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
