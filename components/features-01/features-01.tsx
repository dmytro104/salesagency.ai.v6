import {
  Target,
  Users,
  BarChart3,
  TrendingUp,
} from "lucide-react";
import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const FeatureImage = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative bg-gradient-to-br from-primary/5 to-primary/10">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover opacity-60"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
  </div>
);

const features = [
  {
    title: "Sales System Overhaul",
    description:
      "Repeatable sales flows that maximize Dollar per Lead. Includes RapidClose™ Method and Pre-Close Commitment processes that close upfront, not someday.",
    header: <FeatureImage src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Sales System Dashboard" />,
    icon: <Target className="h-6 w-6 text-primary" />,
    className: "md:col-span-2",
  },
  {
    title: "Elite Team Buildout & Training",
    description:
      "Access our network of 1000+ top performers. Rigorous 30-day bootcamps perfect mindset, skillset, and product knowledge. Closer-level Setters, Demigod-level Closers.",
    header: <FeatureImage src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team Training" />,
    icon: <Users className="h-6 w-6 text-primary" />,
    className: "md:col-span-1",
  },
  {
    title: "AI Performance Optimization",
    description:
      "Dollar-level tracking that minimizes human error. AI call audits reveal sentiment and objections—fixing issues before they cost you.",
    header: <FeatureImage src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="AI Analytics Dashboard" />,
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
    className: "md:col-span-1",
  },
  {
    title: "Fractional CRO Leadership",
    description:
      "We architect, manage, and scale your entire sales org. Get dashboards, clarity, and playbooks that free you to run the business, not the sales floor.",
    header: <FeatureImage src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80" alt="Executive Leadership" />,
    icon: <TrendingUp className="h-6 w-6 text-primary" />,
    className: "md:col-span-2",
  },
];

const Features01Page = () => {
  return (
    <section id="services" className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div className="text-center mb-16 space-y-4">
        <Badge variant="outline" className="bg-primary/10 dark:bg-primary/30 backdrop-blur-sm border-primary/30 text-sm">How It Works</Badge>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          The SalesAgency.ai System
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Four proven pillars that turn your sales team into a predictable, scalable cash machine—no guesswork, no babysitting.
        </p>
      </div>

      <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
        {features.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Features01Page;
