"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FeatureItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    id: 1,
    title: "Pre-Close Commitment System",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    description:
      "We installed a process that gets leads to commit financially BEFORE the closing call. This revolutionary approach eliminates time-wasters and boosts Dollar per Lead to over $5K, ensuring your team only spends time with serious buyers ready to invest.",
  },
  {
    id: 2,
    title: "Elite Team Building",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    description:
      "We hired Closer-level talent for Setter positions and Demigod-level talent for Closer positions by properly aligning incentives and expectations. Our rigorous 30-day bootcamp perfects mindset, skillset, and product knowledge—creating top 1% performers who consistently close deals.",
  },
  {
    id: 3,
    title: "AI-Powered Optimization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    description:
      "Using AI and advanced analytics, we pinpoint exactly where scripts, funnels, or reps need adjustment. Our tech-driven feedback loops catch and fix issues before they become expensive, enabling rapid iteration and continuous improvement at scale.",
  },
  {
    id: 4,
    title: "Proven 7-Figure Scale",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
    description:
      "$0 to $1M/month in just 9 months. One of our proudest wins: scaling a high-ticket service-based sales team from scratch to over $1M/month in cash—with systems that scale beyond the founder's direct involvement. Results that speak for themselves.",
  },
];

const AccordionFeatureSection = () => {
  const [activeTabId, setActiveTabId] = useState<number>(1);

  return (
    <section id="case-study" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <Badge variant="outline" className="bg-primary/10 dark:bg-primary/30 backdrop-blur-sm border-primary/30 text-sm">
            Proven Results
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            $0 to $1M/Month in 9 Months
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The exact system we used to scale a high-ticket sales team from zero to 7 figures—without the guesswork or babysitting.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" className="w-full" defaultValue="item-1" collapsible>
            {features.map((tab) => (
              <AccordionItem key={tab.id} value={`item-${tab.id}`}>
                <AccordionTrigger
                  onClick={() => {
                    setActiveTabId(tab.id);
                  }}
                  className="cursor-pointer py-5 !no-underline transition"
                >
                  <h6
                    className={`text-2xl font-semibold text-left ${tab.id === activeTabId ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    {tab.title}
                  </h6>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="mt-3 text-lg text-muted-foreground leading-relaxed">
                    {tab.description}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default AccordionFeatureSection;
