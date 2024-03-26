import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { MobileNavigation } from "./mobile-navigation";

export const Navigation = () => {
  return (
    <header className="flex items-center md:items-start justify-between -mx-2 md:mx-0 md:p-6 gap-1 relative z-10 pb-1 md:pb-0">
      <div className="flex-1 md:flex-grow-0">
        <Logo size={"base"} />
      </div>

      <nav className="flex-wrap justify-center md:-mt-6 gap-4 hidden md:flex">
        <Button
          variant="ghost"
          className="font-normal p-2 h-10 hover:bg-transparent"
        >
          Home
        </Button>
        <Button
          variant="ghost"
          className="font-normal p-2 h-10 hover:bg-transparent"
        >
          How it works
        </Button>
        {/* <Button
          variant="ghost"
          className="font-normal p-2 h-10 hover:bg-transparent"
        >
          Calculate ROI
        </Button> */}
        <Button
          variant="ghost"
          className="font-normal p-2 h-10 hover:bg-transparent"
        >
          FAQ
        </Button>
      </nav>
      <div className="w-32 flex justify-end">
        <Button asChild variant="secondary" className="h-9 text-sm md:text-md md:h-12">
          <a href="https://app.evaa.finance/" target="_blank">
            Try App
          </a>
        </Button>
      </div>
      <MobileNavigation />
    </header>
  );
};
