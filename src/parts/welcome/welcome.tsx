import { Button } from "@/components/ui/button";
import { useIsLargeScreen, useIsMobile } from "@/hooks/useIsMobile";
import tonCoinSvg from "@/assets/ton-big.svg";
import { motion } from "framer-motion";

export const Welcome = () => {
  const isMobile = useIsMobile();
  const isLargeScreen = useIsLargeScreen();

  const coinVariants = isMobile ? {
    hidden: { opacity: 0, y: 100, x: -100 },
    visible: { opacity: 1, y: 40, x: -60 },
  } : {
    hidden: { opacity: 0, y: 0, x: 0 },
    visible: { opacity: 1, y: -140, x: 160 },
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 100, x: 0 },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col md:h-auto relative md:z-0 md:bg-transparent rounded-lg overflow-hidden md:overflow-visible">
      <div
        className="rounded-lg md:h-[690px] md:overflow-hidden relative pt-6 pb-8 md:-mt-24 md:pt-24 md:pb-36 noise"
        style={{
          clipPath: "#desktop-bg-mask",
          background: "#0057FF",
          maskImage: isMobile ? `none` : `url(/assets/images/desktop-bg.svg)`,
          maskSize: isLargeScreen ? "contain" : "cover",
          maskPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={coinVariants} className="under-noise bottom-0 left-0"
        >
          <img src={tonCoinSvg} alt="" className="max-w-[540px]" />
        </motion.div>
        <div className="flex flex-col relative h-full z-10">
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <div className="flex flex-col items-center gap-16 flex-1 justify-between pt-6  px-8">
              <div className="flex flex-col items-center justify-center gap-8">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  variants={logoVariants}
                >
                  <h1 className="font-display  text-5xl md:text-6xl lg:text-7xl xl:text-8xl transition-all text-center">
                    <span>Lend and borrow </span>
                    <div className="break-keep">at your fingertips</div>
                  </h1>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  variants={descriptionVariants}
                >
                  <p className="max-w-lg px-8 md:px-0 text-md md:text-xl">
                    Deposit assets, select a loan amount, and enjoy transparent,
                    decentralized lending
                  </p>
                </motion.div>
              </div>

              <div className="flex gap-2 mt-20 md:mt-0 md:gap-16">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  variants={logoVariants}
                >
                  <div className="w-[100px]">
                    <h2 className="font-display text-2xl md:text-4xl">#1 </h2>
                    <span className="font-sans text-xs md:text-sm">
                      Lending App on TON
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  variants={logoVariants}
                >
                  <div className="w-[100px]">
                    <h2 className="font-display text-2xl md:text-4xl">#4 </h2>
                    <span className="font-sans text-xs md:text-sm">App in TON Store</span>
                  </div>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  variants={logoVariants}
                >
                  <div className="w-[100px]">
                    <h2 className="font-display text-2xl md:text-4xl">15k</h2>
                    <span className="font-sans text-xs md:text-sm">
                      Active Monthly users
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:absolute bottom-0 left-0 right-0 flex flex-col md:flex-row justify-center gap-4 items-center md:items-end pt-8 md:pt-16">
        <Button size="lg">Explore Web App</Button>
        <Button size="lg" variant="secondary">
          Open in Telegram
        </Button>
      </div>
    </div>
  );
};
