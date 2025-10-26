import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, Target, DollarSign, Users, TrendingUp } from "lucide-react";
import { BackgroundPattern } from "./background-pattern";

const Hero06 = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-6">
      <BackgroundPattern />

      <div className="relative z-10 text-center max-w-4xl">
        <Badge
          variant="outline"
          className="rounded-full py-1.5 px-4 bg-primary/10 backdrop-blur-sm border-primary/30 text-sm"
        >
          <TrendingUp className="h-4 w-4 mr-2 text-primary" />
          Proven: $0 → $1M+/Month in 9 Months
        </Badge>

        <h1 className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.1] font-bold tracking-tight">
          Get Leads to Pay{" "}
          <br />
          <span className="bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Before They Even Close
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          The AI-powered system that turns unpredictable teams into $1M+/month cash machines
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="rounded-xl text-base sm:text-lg h-11 sm:h-12 px-10 sm:px-12 font-semibold shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
            asChild
          >
            <a href="https://api.salesagency.ai/widget/bookings/salesagencyai-discovery" target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-5 w-5" />
              Book Strategy Call
            </a>
          </Button>
        </div>

        {/* Social Proof Stats */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          <Badge variant="outline" className="rounded-full bg-primary/10 backdrop-blur-sm px-4 py-2 border-primary/30 text-sm">
            <DollarSign className="h-4 w-4 mr-2 text-primary" />
            $100M+ Generated
          </Badge>
          <Badge variant="outline" className="rounded-full bg-primary/10 backdrop-blur-sm px-4 py-2 border-primary/30 text-sm">
            <Users className="h-4 w-4 mr-2 text-primary" />
            1000+ Elite Closers
          </Badge>
          <Badge variant="outline" className="rounded-full bg-primary/10 backdrop-blur-sm px-4 py-2 border-primary/30 text-sm">
            <Target className="h-4 w-4 mr-2 text-primary" />
            100+ Teams to 7-Figs
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Hero06;
