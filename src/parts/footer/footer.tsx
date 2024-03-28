import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import telegramHubSvg from "@/assets/telegram-hub.svg";
import telegramSvg from "@/assets/telegram.svg";
import xSvg from "@/assets/x.svg";
import mediumSvg from "@/assets/medium.svg";
import footerSvg from "@/assets/footer-bg.svg";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils";

export const Footer = () => {
  const isMobile = useIsMobile();
  const socialVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  };

  const copyrightVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="relative py-20 pb-10 md:min-h-dvh px-8 md:p-8 lg:p-16 flex flex-col justify-between bg-[#5200FF]"
      style={{
        background: `#5200FF url(${footerSvg}) no-repeat`,
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={titleVariants}
        className="flex flex-col gap-6 md:gap-12 pt-4 flex-1 items-center justify-center lg:px-16 xl:px-32"
      >
        <h2 className="font-display text-3xl md:text-5xl lg:text-6xl xl:text-7xl transition-all text-center">
          Access Funds or Generate Passive Income In a few clicks
        </h2>
        <p className="text-base md:text-xl text-center xl:max-w-lg ">
          Deposit, earn or select a loan amount, and enjoy fast, and simple
          lending on TON and Telegram
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-end w-full mt-2">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="w-full md:w-auto"
          >
            <a href="https://app.evaa.finance/" target="_blank">
              Explore Web App
            </a>
          </Button>
          <Button
            size="lg"
            asChild
            variant="outline"
            className="border-[#fff] bg-transparent w-full md:w-auto"
          >
            <a href="https://t.me/EvaaAppBot?start" target="_blank">
              Open in Telegram
            </a>
          </Button>
        </div>
      </motion.div>
      <div className="flex mt-16 md:mt-10 lg:mt-20 flex-col-reverse justify-start gap-10 items-center md:flex-row md:justify-between">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={copyrightVariants}
          className="flex flex-col items-center md:items-start"
        >
          <div className="relative ml-[-19px]">
            <Logo
              width={isMobile ? 48 : 76}
              height={isMobile ? 48 : 76}
              size={isMobile ? "base" : "lg"}
              className={cn(!isMobile && 'text-xl leading-[23px]')}
            />
          </div>
          <nav className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 mt-4 md:mt-2">
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
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={socialVariants}
          className="flex flex-col items-center md:items-end gap-5 md:mt-auto"
        >
          <div className="text-lg md:text-xl text-muted-foreground">
            Join our 400k+ users community
          </div>
          <div className="flex gap-7 items-center">
            <Button
              asChild
              variant="ghost"
              className="p-0 hover:bg-transparent"
            >
              <a href="https://t.me/evaaprotocol" target="_blank">
                <img src={telegramSvg} alt="" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="p-0 hover:bg-transparent"
            >
              <a href="https://twitter.com/evaaprotocol" target="_blank">
                <img src={xSvg} alt="" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="p-0 hover:bg-transparent"
            >
              <a href="https://medium.com/@evaaprotocol" target="_blank">
                <img src={mediumSvg} alt="" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="p-0 hover:bg-transparent"
            >
              <a href="https://t.me/EvaaProtocolHub" target="_blank">
                <img src={telegramHubSvg} alt="" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
