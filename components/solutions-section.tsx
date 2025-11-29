"use client";

import {
  Wallet,
  ChartBar,
  Headset,
  GitBranch,
  Robot,
  ArrowRight,
  Icon,
} from "@phosphor-icons/react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Solution {
  title: string;
  description: string;
  icon: Icon;
}

const solutions: Solution[] = [
  {
    title: "WhopAPI",
    description:
      "Manage payments, commissions, and cash tracking directly in GHL, no Zapier necessary.",
    icon: Wallet,
  },
  {
    title: "KPIDash",
    description:
      "Know your team's stats by the hour, based on objective data, not faulty human spreadsheets.",
    icon: ChartBar,
  },
  {
    title: "CallReviewer AI",
    description:
      "Save time on tedious manual sales call audits with AI trained to score your team's calls based on your process and methodology.",
    icon: Headset,
  },
  {
    title: "DecisionMaker AI",
    description:
      "Instantly moves deals to appropriate pipeline stage and sequencing based on AI transcript interpretation.",
    icon: GitBranch,
  },
];

const flagshipSolution: Solution = {
  title: "SalesReviewer AI",
  description:
    "Our software consolidates our 4 vital tools with AI agents that deliver insights that you're too close to the operation to see and help you run your whole sales operation with the click of a button.",
  icon: Robot,
};

const SolutionsSection = () => {
  return (
    <section
      id="solutions"
      className="section-transition container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32"
    >
      {/* Header */}
      <div className="text-center mb-16 space-y-4">
        <Badge variant="highlight">Software</Badge>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
          Our Solutions
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Purpose-built software that automates the tedious, surfaces the
          critical, and keeps your team operating at peak performance.
        </p>
      </div>

      {/* Grid - 4 Regular Products + 1 Flagship */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Regular Product Cards */}
        {solutions.map((solution, i) => {
          const SolutionIcon = solution.icon;
          return (
            <div
              key={i}
              className="group relative bg-card border border-border rounded-2xl p-8 overflow-hidden card-interactive hover:border-primary/30"
            >
              {/* Dot grid pattern background */}
              <div
                className="absolute inset-0 opacity-[0.12] dark:opacity-[0.08]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, currentColor 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              {/* Content */}
              <div className="relative space-y-4">
                {/* Icon + Title Row */}
                <div className="flex items-center gap-4">
                  <div className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary icon-glow">
                    <SolutionIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    {solution.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          );
        })}

        {/* Flagship Product - Full Width */}
        <div className="col-span-1 md:col-span-full group relative border-2 border-primary/30 rounded-3xl p-8 bg-card overflow-hidden card-interactive">
          {/* Dot grid pattern background */}
          <div
            className="absolute inset-0 opacity-[0.12] dark:opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Content */}
          <div className="relative">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Icon */}
              <div className="shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#EFE9FB] dark:bg-[#1B1628] text-primary icon-glow">
                <Robot className="h-7 w-7" />
              </div>

              {/* Text Content */}
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    {flagshipSolution.title}
                  </h3>
                  <Badge variant="highlight" className="text-xs self-center">
                    Flagship Solution
                  </Badge>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {flagshipSolution.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <Button variant="cta" size="cta" asChild>
          <a
            href="https://api.salesagency.ai/widget/bookings/salesagencyai-discovery"
            target="_blank"
            rel="noopener noreferrer"
          >
            See Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default SolutionsSection;
