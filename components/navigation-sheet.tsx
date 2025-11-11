import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { List } from "@phosphor-icons/react";
import { Logo } from "./logo";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <List className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-6">
        {/* Visually hidden title for accessibility */}
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <Logo />
        <div className="mt-8 flex flex-col gap-4">
          <Button className="w-full rounded-xl whitespace-nowrap" asChild>
            <a href="https://api.salesagency.ai/widget/bookings/salesagencyai-discovery" target="_blank" rel="noopener noreferrer">
              Book Call
            </a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
