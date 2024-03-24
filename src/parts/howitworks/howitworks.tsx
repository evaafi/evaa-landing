import { Button } from "@/components/ui/button";
import cardsPng from "./assets/cards.png";
import phonesPng from "./assets/phones.png";
import macbookPng from "./assets/macbook.png";
import sunSvg from "./assets/sun.svg";
import vibrationSvg from "./assets/vibration.svg";
import diskSvg from "./assets/disk.svg";
import "./howitworks.css";
import { Section, SectionContent, SectionImage } from "./section";
import { motion } from "framer-motion";

export const HowItWorks = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-dvh flex flex-col relative py-24 gap-24 overflow-hidden -mx-5 px-5">
      <h2 className="text-5xl md:text-7xl font-display text-center">How it works</h2>
      <div className="flex-1 flex flex-col gap-32 md:gap-0 justify-center md:px-10 xl:px-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={sectionVariants}
        >
          <Section>
            <SectionImage>
              <img
                src={cardsPng}
                className="max-w-[500px] w-full relative z-30"
                alt=""
              />

              <img
                src={sunSvg}
                className="absolute z-10 top-0 left-[50%] ml-[-350px] bottom-0 m-auto h-[700px] w-[700px] max-w-none opacity-80 overlay"
                alt=""
              />

              <div className="on-circle on-circle-sun" />
              <div className="on-circle on-circle-venus" />
            </SectionImage>
            <SectionContent>
              <h3 className="text-4xl font-display">Borrow Crypto with Ease</h3>
              <p className="text-lg">
                Easily borrow cryptocurrencies through our user-friendly
                platform. Deposit assets, select a loan amount, and{" "}
                <strong>
                  enjoy transparent, decentralized lending with competitive
                  interest rates.
                </strong>
              </p>
              <Button size="lg" className="mt-2">
                Borrow Now
              </Button>
            </SectionContent>
          </Section>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={sectionVariants}
        >
          <Section>
            <SectionImage>
              <img
                src={phonesPng}
                className="max-w-[500px] w-full relative z-30"
                alt=""
              />

              <div className="on-circle on-circle-mars" />
              <div className="on-circle on-circle-neptune" />
              <div className="on-circle on-circle-pluto" />

              <img
                src={vibrationSvg}
                className="absolute z-10 top-0 left-[50%] ml-[-350px] bottom-0 m-auto h-[700px] w-[700px] max-w-none opacity-80 overlay"
                alt=""
              />
            </SectionImage>
            <SectionContent>
              <h3 className="text-3xl font-display">
                Earn Passive Income by Lending
              </h3>
              <p>
                Make your crypto work for you by lending. Deposit assets, let
                others borrow, and earn interest through automated, secure smart
                contracts.{" "}
                <strong>
                  Join the decentralized finance revolution to maximize your
                  portfolio.
                </strong>
              </p>
              <Button size="lg">Start Earning</Button>
            </SectionContent>
          </Section>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={sectionVariants}
        >
          <Section>
            <SectionImage>
              <img
                src={macbookPng}
                className="max-w-[500px] w-full relative z-30"
                alt=""
              />

              <div className="on-circle on-circle-uranus" />
              <div className="on-circle on-circle-mercury">
                <div></div>
              </div>

              <img
                src={diskSvg}
                className="absolute z-10 top-0 left-[50%] ml-[-350px] bottom-0 m-auto h-[700px] w-[700px] max-w-none opacity-80 overlay"
                alt=""
              />
            </SectionImage>
            <SectionContent>
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
            </SectionContent>
          </Section>
        </motion.div>
      </div>
    </div>
  );
};
