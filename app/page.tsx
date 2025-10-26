import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import Hero06 from "@/components/hero-06/hero-06";
import Navbar01 from "@/components/navbar-01/navbar-01";
import Features01 from "@/components/features-01/features-01";
import AccordionFeatureSection from "@/components/case-study-01/accordion-feature-section";
import DottedGlowBackground from "@/components/ui/dotted-glow-background";
import {
  ArrowRight,
  CheckCircle2,
  Star
} from "lucide-react";
import Image from "next/image";

export default function Home() {

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navbar01 />

      {/* Add padding for fixed navbar */}
      <div className="pt-20">
        {/* Hero Section */}
        <Hero06 />

      {/* How It Works Section */}
      <Features01 />

      {/* Case Study Section */}
      <AccordionFeatureSection />

      {/* About / Founder Section */}
      <section id="about" className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <Badge variant="outline" className="bg-primary/10 dark:bg-primary/30 backdrop-blur-sm border-primary/30 text-sm">Meet the Founder</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Mitch Sapoff
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-2xl opacity-20" />
                <Avatar className="h-64 w-64 sm:h-96 sm:w-96 shadow-2xl relative">
                  <AvatarImage src="/mitch-sapoff.jpg" alt="Mitch Sapoff" className="scale-125 object-cover" />
                  <AvatarFallback className="bg-primary/10 text-primary text-6xl font-bold">
                    MS
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m the founder of SalesAgency.ai and I&apos;ve spent the last decade in the trenches of some of the best (and worst) sales teams in the online space, so I know what it takes to win.
                </p>

                <div className="space-y-2 my-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Personally closed $10M+ in sales</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Scaled my own sales coaching business to a multi-7 figure run rate in just over a year</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Trained 300+ reps who&apos;ve generated $100M+ in sales combined</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span>Helped 100+ sales teams scale revenue with my reps, scripts, and frameworks</span>
                  </div>
                </div>

                <p>
                  In 2021, I created the <span className="font-semibold text-foreground">RapidClose™ Method</span>, a fun and simple way to sell that&apos;s been proven to convert better than your favorite guru&apos;s.
                </p>

                <p>
                  Today, I partner directly with founders to build sales systems that scale their biz to 8 figures, without the stress, guesswork, or babysitting most teams require.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden my-16 py-12">
        {/* Dotted Glow Background */}
        <DottedGlowBackground
          className="pointer-events-none"
          opacity={1}
          gap={12}
          radius={2.4}
          colorLightVar="--color-neutral-500"
          glowColorLightVar="--color-primary"
          colorDarkVar="--color-neutral-500"
          glowColorDarkVar="--color-primary"
          backgroundOpacity={0}
          speedMin={0.3}
          speedMax={1.2}
          speedScale={1}
        />

        {/* Semi-transparent overlay for better text readability */}
        <div className="absolute inset-0 bg-[#ffffff]/70 dark:bg-[#000000]/70 pointer-events-none z-[2]" />

        {/* Top Gradient Fade */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#ffffff] dark:from-[#000000] to-transparent pointer-events-none z-[5]" />

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#ffffff] dark:from-[#000000] to-transparent pointer-events-none z-[5]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              {/* Left Content */}
              <div className="flex-1 space-y-6">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Ready to Scale to<br />8 Figures?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Stop praying your sales team performs. Build an AI-powered system that turns unpredictable reps into a $1M+/month cash machine—without the guesswork or babysitting.
                </p>

                {/* Avatar Group with Stars */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  {/* Avatar Group */}
                  <div className="flex items-center">
                    <div className="flex items-center -space-x-3 bg-background border border-border rounded-full pr-4 py-1.5 pl-1.5">
                      <Avatar className="h-10 w-10 border-2 border-background dark:bg-white bg-black">
                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=1" />
                        <AvatarFallback className="bg-primary/10 text-primary">U1</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-10 w-10 border-2 border-background dark:bg-white bg-black">
                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=2" />
                        <AvatarFallback className="bg-primary/10 text-primary">U2</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-10 w-10 border-2 border-background dark:bg-white bg-black">
                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=3" />
                        <AvatarFallback className="bg-primary/10 text-primary">U3</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-10 w-10 border-2 border-background dark:bg-white bg-black">
                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=4" />
                        <AvatarFallback className="bg-primary/10 text-primary">U4</AvatarFallback>
                      </Avatar>
                      <Avatar className="h-10 w-10 border-2 border-background dark:bg-white bg-black">
                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=5" />
                        <AvatarFallback className="bg-primary/10 text-primary">U5</AvatarFallback>
                      </Avatar>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 ml-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Trust Text */}
                <p className="text-sm text-muted-foreground">
                  Trusted by 100+ sales teams
                </p>
              </div>

              {/* Right CTA Button */}
              <div className="flex-shrink-0">
                <Button size="lg" className="rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg h-11 sm:h-12 px-10 sm:px-12 font-semibold shadow-lg hover:shadow-xl transition-all whitespace-nowrap" asChild>
                  <a href="https://api.salesagency.ai/widget/bookings/salesagencyai-discovery" target="_blank" rel="noopener noreferrer">
                    Book Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-background">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
            {/* Left: Logo + Tagline */}
            <div className="flex-1">
              <div className="mb-4">
                <Image
                  src="/logo_light.svg"
                  alt="SalesAgency.ai"
                  width={230}
                  height={30}
                  className="h-8 w-auto block dark:hidden"
                  priority
                />
                <Image
                  src="/logo_dark.svg"
                  alt="SalesAgency.ai"
                  width={230}
                  height={30}
                  className="h-8 w-auto hidden dark:block"
                  priority
                />
              </div>
              <p className="text-muted-foreground max-w-lg">
                Our clients scale their high ticket businesses to multiple 7 figures using our AI-powered Sales Systems
              </p>
            </div>

            {/* Right: Contact */}
            <div className="text-left md:text-right">
              <h3 className="text-lg font-semibold mb-3">Contact</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <a href="mailto:mitch@salesagency.ai" className="hover:text-foreground transition-colors">
                    mitch@salesagency.ai
                  </a>
                </p>
                <p>
                  <a href="https://api.salesagency.ai/widget/bookings/salesagencyai-discovery" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                    +1(347) 404-2926
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border">
            {/* Left: Social Icons */}
            <div className="flex items-center gap-4">
              {/* YouTube */}
              <a href="https://www.youtube.com/channel/UCiLxW1ww9XgGhYUwEC4ZgKA" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="YouTube">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/salesagencyceo/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>

              {/* TikTok */}
              <a href="https://www.tiktok.com/@salesagencyceo" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="TikTok">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/mitch.sapoff.3/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Facebook">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>

              {/* X/Twitter */}
              <a href="https://x.com/salesagencyceo" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="X (Twitter)">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/mitchell-sapoff/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>

            {/* Right: Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
              <span>© 2025 SalesAgency.ai. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
