import { Button } from "@/components/ui/button";
import cardsPng from "@/assets/cards.png";
import phonesPng from "@/assets/phones.png";
import macbookPng from "@/assets/macbook.png";
import how1Png from "@/assets/how-1.png";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useIsMobile } from "@/hooks/useIsMobile";

export const HowItWorks = () => {
  const isMobile = useIsMobile();
  return (
    <div className="mt-[200px] relative">
      <h2 className="text-7xl font-display text-center">How it works</h2>
      <ParallaxProvider>
        <div className="flex md:px-10 xl:px-32 flex-col gap-10 xl:gap-36 pt-[100px]">
          <Parallax translateY={["0px", "-400px"]} disabled={isMobile}>
            <div className="flex flex-col gap-10 lg:gap-24 md:flex-row justify-stretch items-center md:h-[600px]">
              <div className="flex flex-1 flex-col md:flex-row justify-center relative">
                <img src={cardsPng} className="max-w-[500px] w-full" alt="" />
                <img src={how1Png} alt="" className="absolute t-0 -z-10" />
              </div>
              <div className="space-y-6 flex-1 max-w-sm xl:mr-10">
                <h3 className="text-3xl font-display">
                  Borrow Crypto with Ease
                </h3>
                <p>
                  Easily borrow cryptocurrencies through our user-friendly
                  platform. Deposit assets, select a loan amount, and{" "}
                  <strong>
                    enjoy transparent, decentralized lending with competitive
                    interest rates.
                  </strong>
                </p>
                <Button size="lg">Borrow Now</Button>
              </div>
            </div>
          </Parallax>
          <Parallax translateY={["-200px", "-100px"]} disabled={isMobile}>
            <div className="flex flex-col gap-10 lg:gap-24 md:flex-row justify-stretch items-center md:h-[600px]">
              <div className="flex flex-1 flex-col md:flex-row justify-center relative">
                <img src={phonesPng} className="max-w-[500px] w-full" alt="" />
                <img src={how1Png} alt="" className="absolute t-0 -z-10" />
              </div>
              <div className="space-y-6 flex-1 max-w-sm xl:mr-10">
                <h3 className="text-3xl font-display">
                  Earn Passive Income by Lending
                </h3>
                <p>
                  Make your crypto work for you by lending. Deposit assets, let
                  others borrow, and earn interest through automated, secure
                  smart contracts.{" "}
                  <strong>
                    Join the decentralized finance revolution to maximize your
                    portfolio.
                  </strong>
                </p>
                <Button size="lg">Start Earning</Button>
              </div>
            </div>
          </Parallax>
          <Parallax translateY={["-200px", "100px"]} disabled={isMobile}>
            <div className="flex flex-col gap-10 lg:gap-24 md:flex-row justify-stretch items-center md:h-[600px]">
              <div className="flex flex-1 flex-col md:flex-row justify-center relative">
                <img src={macbookPng} className="max-w-[500px] w-full" alt="" />
                <img src={how1Png} alt="" className="absolute t-0 -z-10" />
              </div>
              <div className="space-y-6 flex-1 max-w-sm xl:mr-10">
                <h3 className="text-3xl font-display">
                  Community-Driven Financial Empowerment
                </h3>
                <p>
                  Join a community-driven financial ecosystem for inclusion and
                  autonomy. Use our lending platform to contribute to
                  decentralized finance, with collective decision-making and
                  transparency.{" "}
                  <strong>
                    Reshape finance, taking control of your assets and financial
                    opportunities.
                  </strong>
                </p>
                <Button size="lg">Open App</Button>
              </div>
            </div>
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
};
