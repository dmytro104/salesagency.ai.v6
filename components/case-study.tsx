"use client";

import { Badge } from "@/components/ui/badge";
import { ArrowDown, Target, Users, Sparkle, Trophy, Icon } from "@phosphor-icons/react";

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: Icon;
}

const buildingBlocks: FeatureItem[] = [
  {
    id: 1,
    title: "Pre-Close Commitment System",
    description:
      "We installed a process that gets leads to commit financially BEFORE the closing call. This revolutionary approach eliminates time-wasters and boosts Dollar per Lead to over $5K, ensuring your team only spends time with serious buyers ready to invest.",
    icon: Target,
  },
  {
    id: 2,
    title: "Elite Team Building",
    description:
      "We hired Closer-level talent for Setter positions and Demigod-level talent for Closer positions by properly aligning incentives and expectations. Our rigorous 30-day bootcamp perfects mindset, skillset, and product knowledge - creating top 1% performers who consistently close deals.",
    icon: Users,
  },
  {
    id: 3,
    title: "AI-Powered Optimization",
    description:
      "Using AI and advanced analytics, we pinpoint exactly where scripts, funnels, or reps need adjustment. Our tech-driven feedback loops catch and fix issues before they become expensive, enabling rapid iteration and continuous improvement at scale.",
    icon: Sparkle,
  },
];

const resultFeature: FeatureItem = {
  id: 4,
  title: "The Result",
  description:
    "A team that hit 7 figures/month in cash at lightning speed, with systems that scale beyond the founder's direct involvement.",
  icon: Trophy,
};

const CaseStudy = () => {
  return (
    <section id="case-study" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="bg-primary/10 dark:bg-primary/30 backdrop-blur-sm border-primary/30 text-sm">
            Proven Results
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            $0 to $1M/Month in 9 Months
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The exact system we used to scale a high-ticket sales team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Building Blocks Section */}
          <div>
            {/* <div className="text-center mb-6">
              <Badge variant="outline" className="p-2 px-4 bg-card border-border/50 text-sm">
                Building Blocks
              </Badge>
            </div> */}

            <div className="border border-border/10 rounded-3xl p-6 sm:p-8">
              <div className="space-y-4">
                {buildingBlocks.map((block) => {
                  const Icon = block.icon;
                  return (
                    <div
                      key={block.id}
                      className="relative bg-card border border-border rounded-xl p-6 transition-colors duration-300 hover:border-primary/30"
                    >
                      {/* Large prominent icon in top-right */}
                      <div className="absolute -top-2 -right-2 w-12 h-12 rounded-xl bg-[#EFE9FB] dark:bg-[#1B1628] flex items-center justify-center shadow-lg">
                        <Icon className="h-6 w-6 text-primary dark:text-primary" />
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 pr-10">
                        {block.title}
                      </h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {block.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Visual Separator */}
          <div className="relative flex items-center justify-center my-12">
            <div className="absolute inset-x-0 border-t border-dashed border-primary/20" />
            <div className="relative bg-background px-6 py-2 rounded-full border border-primary/30 text-sm font-medium flex items-center gap-2">
              <ArrowDown className="h-4 w-4 text-primary" />
              <span>Complete Solution</span>
            </div>
          </div>

          {/* Complete Solution Section */}
          <div>
            {/* <div className="text-center mb-6">
              <Badge variant="outline" className="p-2 px-4 bg-primary/10 dark:bg-primary/30 border-primary/30 text-sm">
                Complete Solution
              </Badge>
            </div> */}

            <div className="relative border-2 border-primary/30 hover:border-primary/60 transition-colors duration-300 rounded-3xl p-8 bg-card">
              {/* Large prominent icon in top-right */}
              <div className="absolute -top-3 -right-3 w-14 h-14 rounded-xl bg-[#EFE9FB] dark:bg-[#1B1628] flex items-center justify-center shadow-lg">
                <Trophy className="h-7 w-7 text-primary dark:text-primary" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4 pr-12">
                {resultFeature.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {resultFeature.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
