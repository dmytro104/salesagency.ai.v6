import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { Logo } from "./logo";
import { IntegratedThemeSwitcher } from "@/components/integrated-theme-switcher";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/10">
      <div className="h-20 flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-auto">
          <Logo />
        </div>

        <div className="flex items-center gap-3 my-auto">
          <div className="hidden md:flex">
            <IntegratedThemeSwitcher />
          </div>
          <MovingBorderButton
            as="a"
            href="https://api.salesagency.ai/widget/bookings/salesagencyai-discovery"
            target="_blank"
            rel="noopener noreferrer"
            borderRadius="0.75rem"
            duration={2500}
            containerClassName="h-10 w-auto"
            className="text-sm font-semibold px-5 rounded-xl whitespace-nowrap"
          >
            Book Call
          </MovingBorderButton>

          {/* Mobile Menu - Commented out for future use */}
          {/* <div className="sm:hidden flex items-center">
            <NavigationSheet />
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
