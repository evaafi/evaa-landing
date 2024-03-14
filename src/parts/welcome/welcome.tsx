import { Button } from "@/components/ui/button";
import { WelcomeBg } from "./welcome-bg";
import { Navigation } from "../navigation/navigation";

export const Welcome = () => {
  return (
    <div className="relative h-[686px]">
      <WelcomeBg />
      <div className="flex flex-col relative h-full z-10">
        <Navigation />
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="flex flex-col items-center gap-16 pt-4 flex-1 justify-center">
            <h1 className="font-display text-6xl lg:text-7xl xl:text-8xl transition-all text-center">
              Lend and borrow{" "}
              <div className="break-keep">at your fingertips</div>
            </h1>
            <p className="max-w-lg text-xl">
              Deposit assets, select a loan amount, and enjoy transparent,
              decentralized lending
            </p>
            <div className="flex gap-16">
              <div className="w-[100px]">
                <h2 className="font-display text-4xl">#1 </h2>
                <span className="font-sans text-sm">Lending App on TON</span>
              </div>
              <div className="w-[100px]">
                <h2 className="font-display text-4xl">#4 </h2>
                <span className="font-sans text-sm">App in TON Store</span>
              </div>
              <div className="w-[100px]">
                <h2 className="font-display text-4xl">15k</h2>
                <span className="font-sans text-sm">Active Monthly users</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 items-end pt-16">
            <Button size="lg">Explore Web App</Button>
            <Button size="lg" variant="secondary">
              Open in Telegram
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
