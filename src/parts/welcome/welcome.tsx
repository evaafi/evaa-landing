import { Button } from "@/components/ui/button";
import { useIsLargeScreen, useIsMobile } from "@/hooks/useIsMobile";
import tonCoinSvg from "@/assets/ton-big.svg";

export const Welcome = () => {
  const isMobile = useIsMobile();
  const isLargeScreen = useIsLargeScreen();

  return (
    <div className="flex flex-col relative md:z-0">
      <div
        className="rounded-lg overflow-hidden relative pt-6 md:-mt-24 md:pt-24 pb-36"
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
        <img src={tonCoinSvg} alt="" className="absolute left-40" />
        <div className="flex flex-col relative h-full z-10">
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <div className="flex flex-col items-center gap-16 flex-1 justify-between pt-6  px-8">
              <div className="flex flex-col items-center justify-center gap-8">
                <h1 className="font-display  text-5xl md:text-6xl lg:text-7xl xl:text-8xl transition-all text-center">
                  Lend and borrow{" "}
                  <div className="break-keep">at your fingertips</div>
                </h1>
                <p className="max-w-lg text-md md:text-xl">
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
                  <span className="font-sans text-sm">
                    Active Monthly users
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute bottom-0 left-0 right-0 flex justify-center gap-4 items-end pt-16">
        <Button size="lg">Explore Web App</Button>
        <Button size="lg" variant="secondary">
          Open in Telegram
        </Button>
      </div>
    </div>
  );
};
