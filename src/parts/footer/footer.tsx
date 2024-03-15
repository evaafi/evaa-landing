import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import telegramHubSvg from "@/assets/telegram-hub.svg";
import telegramSvg from "@/assets/telegram.svg";
import xSvg from "@/assets/x.svg";
import mediumSvg from "@/assets/medium.svg";
import footerSvg from "@/assets/footer-bg.svg";

export const Footer = () => {
  return (
    <div
      className="relative p-16 h-dvh flex flex-col justify-between bg-[#5200FF]"
      style={{
        background: `#5200FF url(${footerSvg}) no-repeat`,
      }}
    >
      <div className="flex flex-col gap-12 pt-4 flex-1 items-center justify-center px-32">
        <h2 className="font-display text-5xl lg:text-6xl xl:text-7xl transition-all text-center">
          Access Funds or Generate Passive Income In a few clicks
        </h2>
        <p className="max-w-lg text-xl">
          Deposit assets, select a loan amount, and enjoy transparent,
          decentralized lending
        </p>
        <div className="flex gap-4 items-end">
          <Button size="lg" variant="secondary">
            Explore Web App
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#fff] bg-transparent"
          >
            Open in Telegram
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-end">
        <div className="flex flex-col items-start">
          <div className="relative ml-[-19px]">
            <Logo
              width={76}
              height={76}
              size={"base"}
              className="text-xl leading-[23px]"
            />
          </div>
          <nav className="flex items-center gap-8">
            <span className="text-muted-foreground hover:text-foreground transition-colors">
              © 2024 EVAA Protocol
            </span>
            <a
              className="text-muted-foreground hover:text-foreground transition-colors"
              href="https://app.evaa.finance/EVAATermsOfUse.pdf"
              target="_blank"
            >
              Terms of use
            </a>
          </nav>
        </div>
        <div className="flex flex-col items-end gap-5">
          <div className="text-xl text-muted-foreground">
            Join our 3k+ users community
          </div>
          <div className="flex gap-7 items-center">
            <Button asChild variant="ghost" className="p-0 hover:bg-transparent">
              <a href="/">
                <img src={telegramSvg} alt="" />
              </a>
            </Button>
            <Button asChild variant="ghost" className="p-0 hover:bg-transparent">
              <a href="">
                <img src={xSvg} alt="" />
              </a>
            </Button>
            <Button asChild variant="ghost" className="p-0 hover:bg-transparent">
              <a href="">
                <img src={mediumSvg} alt="" />
              </a>
            </Button>
            <Button asChild variant="ghost" className="p-0 hover:bg-transparent">
              <a href="">
                <img src={telegramHubSvg} alt="" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
