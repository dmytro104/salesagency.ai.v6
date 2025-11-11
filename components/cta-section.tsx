"use client";

import { Button } from "@/components/ui/button";
import DottedGlowBackground from "@/components/ui/dotted-glow-background";
import { ArrowRight } from "@phosphor-icons/react";

const CtaSection = () => {
  return (
    <section className="relative overflow-hidden my-16 py-12">
      {/* Dotted Glow Background */}
      <DottedGlowBackground
        className="pointer-events-none"
        opacity={0.5}
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
      <div className="absolute inset-0 bg-[#fbfbfb]/70 dark:bg-[#000000]/70 pointer-events-none z-[2]" />

      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#fbfbfb] dark:from-[#000000] to-transparent pointer-events-none z-[5]" />

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fbfbfb] dark:from-[#000000] to-transparent pointer-events-none z-[5]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Left Content */}
            <div className="flex-1 space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Predictable Revenue, Engineered
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                No more &quot;hoping&quot; your reps perform. We transform your team into a predictable cash machine, without the guesswork or babysitting.
              </p>

              {/* Professional Credentials - Understated */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>High-Ticket Sales Specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>B2B Focused</span>
                </div>
              </div>
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
  );
};

export default CtaSection;
