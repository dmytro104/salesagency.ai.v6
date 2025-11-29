"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Target } from "@phosphor-icons/react";

const CtaSection = () => {
  return (
    <section className="section-transition relative overflow-hidden py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
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

              {/* Professional Credentials - Icon Badges */}
              <div className="flex flex-wrap items-center gap-4">
                <Badge variant="highlight" className="badge-interactive flex items-center cursor-default">
                  <Clock className="w-4 h-4 mr-2 text-primary" />
                  10+ Years Experience
                </Badge>
                <Badge variant="highlight" className="badge-interactive flex items-center cursor-default">
                  <Target className="w-4 h-4 mr-2 text-primary" />
                  High-Ticket Sales Specialists
                </Badge>
              </div>
            </div>

            {/* Right CTA Button */}
            <div className="flex-shrink-0">
              <Button variant="cta" size="cta" asChild>
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
