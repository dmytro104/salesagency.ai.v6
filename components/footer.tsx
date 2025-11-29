"use client";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-transparent via-primary/5 to-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          {/* Left: Logo + Tagline */}
          <div className="flex-1">
            <div className="mb-4">
              <Image
                src="/logo_light.svg"
                alt="SalesAgency.ai"
                width={230}
                height={30}
                className="h-8 w-auto block dark:hidden"
                priority
              />
              <Image
                src="/logo_dark.svg"
                alt="SalesAgency.ai"
                width={230}
                height={30}
                className="h-8 w-auto hidden dark:block"
                priority
              />
            </div>
            <p className="text-muted-foreground max-w-lg">
              Helping your team scale with the world&apos;s most powerful sales systems.
            </p>
          </div>

          {/* Right: Contact */}
          <div className="text-left md:text-right">
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <a href="mailto:mitch@salesagency.ai" className="hover:text-foreground">
                  mitch@salesagency.ai
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 pt-8 border-t border-border">
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
            <span>© 2025 SalesAgency.ai. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
