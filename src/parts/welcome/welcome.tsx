import { Button } from "@/components/ui/button";
import { useIsLargeScreen, useIsMobile } from "@/hooks/useIsMobile";
import tonCoinSvg from "@/assets/ton-big.svg";
import { Logo } from "@/components/logo";

export const Welcome = () => {
  const isMobile = useIsMobile();
  const isLargeScreen = useIsLargeScreen();

  return (
    <div
      className="relative h-[686px] rounded-lg overflow-hidden"
      style={{
        clipPath: "#desktop-bg-mask",
        background: "#0057FF",
        maskImage: isMobile
          ? `url(/assets/images/mobile-bg.svg)`
          : `url(/assets/images/desktop-bg.svg)`,
        maskSize: isLargeScreen ? "contain" : "cover",
        maskPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <header className="w-full p-6 px-8 flex justify-between">
        <Logo size={"base"} />
        <Button variant="secondary">Try App</Button>
      </header>
      <img src={tonCoinSvg} alt="" className="absolute left-40" />
      <div className="flex flex-col relative h-full z-10">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="flex flex-col items-center gap-16 flex-1 justify-between pt-6 pb-[100px]">
            <div className="flex flex-col items-center justify-center gap-8">
              <h1 className="font-display text-6xl lg:text-7xl xl:text-8xl transition-all text-center">
                Lend and borrow{" "}
                <div className="break-keep">at your fingertips</div>
              </h1>
              <p className="max-w-lg text-xl">
                Deposit assets, select a loan amount, and enjoy transparent,
                decentralized lending
              </p>
            </div>
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
