"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, Trophy, Users, CurrencyDollar } from "@phosphor-icons/react";
import { BackgroundPattern } from "./background-pattern";

const Hero = () => {

  return (
    <section id="hero" className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 py-16 sm:py-24 lg:py-32">
      <BackgroundPattern />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Headline - Larger with gradient and curved underline */}
        <h1 className="text-[3.25rem] lg:text-[4.5rem] xl:text-[5rem] font-bold leading-[1.1] tracking-tight text-foreground">
          Scalable Sales Systems
        </h1>

        {/* Subheadline - Following spec: Brief value prop about systems that scale to 8 figures */}
        <p className="mt-12 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          The world&apos;s fastest way to transform your sales team into a predictable cash machine.
        </p>

        {/* CTA Button */}
        <div className="mt-10 flex items-center justify-center">
          <Button
            size="lg"
            className="rounded-xl text-base sm:text-lg h-11 sm:h-12 px-10 sm:px-12 font-semibold shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
            asChild
          >
            <a href="https://api.salesagency.ai/widget/bookings/salesagencyai-discovery" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Phone style={{ width: 16, height: 16 }} className="mr-2" weight="fill"/>
              Book a Strategy Call
            </a>
          </Button>
        </div>

        {/* Credibility Signals - Following spec exactly */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          <Badge variant="outline" className="rounded-full bg-primary/10 backdrop-blur-sm px-4 py-2 border-primary/30 text-sm font-medium flex items-center">
            <CurrencyDollar style={{ width: 16, height: 16 }} className="mr-2 text-primary" />
            9 Figures Generated
          </Badge>
          <Badge variant="outline" className="rounded-full bg-primary/10 backdrop-blur-sm px-4 py-2 border-primary/30 text-sm font-medium flex items-center">
            <Users style={{ width: 16, height: 16 }} className="mr-2 text-primary" />
            1000+ Elite Closers
          </Badge>
          <Badge variant="outline" className="rounded-full bg-primary/10 backdrop-blur-sm px-4 py-2 border-primary/30 text-sm font-medium flex items-center">
            <Trophy style={{ width: 16, height: 16 }} className="mr-2 text-primary" />
            Hundreds of Happy Sales Managers
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default Hero;
