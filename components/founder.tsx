"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "@phosphor-icons/react";

const Founder = () => {
  return (
    <section id="about" className="section-transition container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <Badge variant="highlight">Meet the Founder</Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Mitch Sapoff
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-2 bg-linear-to-r from-primary to-purple-600 rounded-3xl blur-xl opacity-15" />
              <div className="h-80 w-80 sm:h-96 sm:w-96 lg:h-128 lg:w-128 shadow-2xl relative rounded-2xl overflow-hidden">
                <Image
                  src="/mitch-sapoff.jpg"
                  alt="Mitch Sapoff"
                  width={448}
                  height={448}
                  className="scale-100 object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I&apos;m the founder of SalesAgency.ai and I&apos;ve spent the last decade in the trenches of some of the best (and worst) sales teams in the online space, so I know what it takes to win.
              </p>

              <div className="space-y-2 my-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                  <span>Personally closed $10M+ in sales</span>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                  <span>Scaled my own infoproduct 30% Month over Month for 12 months straight (2M/year run rate with high profit margins)</span>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                  <span>Trained 300+ reps who&apos;ve generated $100M+ in sales combined</span>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary mt-1 shrink-0" />
                  <span>Helped 100+ sales teams scale revenue with my reps, scripts, and frameworks</span>
                </div>
              </div>

              <p>
                In 2021, I created the <span className="font-semibold text-foreground">RapidClose™ Method</span>, a fun and simple way to sell that&apos;s been proven to convert better than your favorite guru&apos;s.
              </p>

              <p>
                Today, I plug my system into sales teams with high growth potential, to generate maximum scale with minimal stress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
