import { Button } from "@/components/ui/button";
import cardsSvg from "@/assets/cards.png";

export const HowItWorks = () => {
  return (
    <div className="mt-[200px]">
      <h2 className="text-7xl font-display text-center">How it works</h2>
      <div className="slider pt-[100px]">
        <div className="slide flex items-center">
          <div className="flex-1 flex justify-center">
            <img src={cardsSvg} alt="" />
          </div>
          <div className="max-w-[540px] pr-36 space-y-6">
            <h3 className="text-3xl font-display">
              Borrow Crypto with Ease
            </h3>
            <p>
              Easily borrow cryptocurrencies through our user-friendly platform.
              Deposit assets, select a loan amount, and{" "}
              <strong>
                enjoy transparent, decentralized lending with competitive
                interest rates.
              </strong>
            </p>
            <Button size="lg">Borrow Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
