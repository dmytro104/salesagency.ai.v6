"use client";

import {
  Target,
  Users,
  ChartBar,
  TrendUp,
} from "@phosphor-icons/react";
import React from "react";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "Sales System Overhaul",
    description:
      "Repeatable sales flows that maximize Dollar per Lead. Includes RapidClose™ Method and Pre-Close Commitment processes that close upfront, not someday.",
    icon: Target,
  },
  {
    title: "Elite Team Buildout & Training",
    description:
      "Access our network of 1000+ top performers. Rigorous 30-day bootcamps perfect mindset, skillset, and product knowledge. Closer-level Setters, Demigod-level Closers.",
    icon: Users,
  },
  {
    title: "AI Performance Optimization",
    description:
      "Dollar-level tracking that minimizes human error. AI call audits reveal sentiment and objections - fixing issues before they cost you.",
    icon: ChartBar,
  },
  {
    title: "Fractional CRO Leadership",
    description:
      "We architect, manage, and scale your entire sales org. Get dashboards, clarity, and playbooks that free you to run the business, not the sales floor.",
    icon: TrendUp,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div className="text-center mb-16 space-y-4">
        <Badge variant="outline" className="bg-primary/10 dark:bg-primary/30 backdrop-blur-sm border-primary/30 text-sm">How It Works</Badge>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
          Human Sales Mastery Meets AI Precision
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Four proven pillars that have your team collecting more cash than your &quot;scariest&quot; competitor, all while running on 90% autopilot.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              key={i}
              className="group relative bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/50 hover:-translate-y-1 overflow-hidden"
            >
              {/* Dot grid pattern background */}
              <div
                className="absolute inset-0 opacity-[0.12] dark:opacity-[0.08]"
                style={{
                  backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                  backgroundSize: '24px 24px'
                }}
              />

              {/* Gradient orb decoration */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Gradient accent on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/8 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative space-y-4">
                {/* Icon + Title Row */}
                <div className="flex items-center gap-4">
                  <div className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                    <Icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
