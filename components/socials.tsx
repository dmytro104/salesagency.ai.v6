"use client";

import { YoutubeLogo, InstagramLogo, TiktokLogo, FacebookLogo, XLogo, LinkedinLogo } from "@phosphor-icons/react";

const Socials = () => {
  return (
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
  );
};

export default Socials;
