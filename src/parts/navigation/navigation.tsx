import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <header className="w-full p-6 px-8 flex justify-between">
      <Logo size={"base"} />
      <nav className="space-x-5 -mt-6">
        <Button variant="ghost" className="font-normal p-2 hover:bg-transparent">Home</Button>
        <Button variant="ghost" className="font-normal p-2 hover:bg-transparent">How it works</Button>
        <Button variant="ghost" className="font-normal p-2 hover:bg-transparent">Calculate ROI</Button>
        <Button variant="ghost" className="font-normal p-2 hover:bg-transparent">FAQ</Button>
      </nav>
      <Button variant="secondary">Try App</Button>
    </header>
  );
};
