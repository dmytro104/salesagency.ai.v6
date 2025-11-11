"use client";

import Image from "next/image";
import { YoutubeLogo, InstagramLogo, TiktokLogo, FacebookLogo, XLogo, LinkedinLogo } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="relative bg-background">
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
                <a href="mailto:mitch@salesagency.ai" className="hover:text-foreground transition-colors">
                  mitch@salesagency.ai
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border">
          {/* Left: Social Icons */}
          <div className="flex items-center gap-6">
            {/* YouTube */}
            <a href="https://www.youtube.com/channel/UCiLxW1ww9XgGhYUwEC4ZgKA" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="YouTube">
              <YoutubeLogo className="h-6 w-6" weight="fill" />
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/salesagencyceo/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
              <InstagramLogo className="h-6 w-6" weight="fill" />
            </a>

            {/* TikTok */}
            <a href="https://www.tiktok.com/@salesagencyceo" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="TikTok">
              <TiktokLogo className="h-6 w-6" weight="fill" />
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com/mitch.sapoff.3/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Facebook">
              <FacebookLogo className="h-6 w-6" weight="fill" />
            </a>

            {/* X/Twitter */}
            <a href="https://x.com/salesagencyceo" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="X (Twitter)">
              <XLogo className="h-6 w-6" weight="fill" />
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/mitchell-sapoff/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
              <LinkedinLogo className="h-6 w-6" weight="fill" />
            </a>
          </div>

          {/* Right: Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
            <span>© 2025 SalesAgency.ai. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
