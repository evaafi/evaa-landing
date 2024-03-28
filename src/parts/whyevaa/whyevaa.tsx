import { Card, CardContent } from "@/components/ui/card";
import starPng from "@/assets/star.png";
import abstractN1 from "@/assets/howitworks-n1.png";
import user1Png from "@/assets/user-1.png";
import user2Png from "@/assets/user-2.png";
import user3Png from "@/assets/user-3.png";
import user4Png from "@/assets/user-4.png";
import gravity1png from "@/assets/gravity-1.png";
import gravity2png from "@/assets/gravity-2.png";
import evaaIphonePng from "@/assets/evaa-iphone.png";
import { motion } from "framer-motion";

export const WhyEvaa = () => {
  const logoVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative md:px-6 py-16 md:py-24">
      <h2 className="text-5xl md:text-7xl font-display text-center">
        Why EVAA
      </h2>
      <div className="flex flex-col xl:flex-row mt-8 md:mt-16 gap-5 xl:h-[633px]">
        <div className="md:flex xl:flex-col xl:justify-stretch break-inside-avoid space-y-5 md:space-y-0 xl:space-y-5 md:space-x-5 xl:space-x-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={logoVariants}
            className="flex-1"
          >
            <Card
              className="bg-[#FF5349] h-full bg-no-repeat hover:scale-[1.03] transition-transform duration-300 cursor-default"
              style={{
                backgroundImage: `url(${abstractN1})`,
                backgroundSize: "667px 667px",
                backgroundPosition: "-80px -160px",
              }}
            >
              <CardContent className="p-8 flex-1 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-6xl xl:text-8xl font-display relative top-2">
                    №1
                  </span>
                  <img src={starPng} alt="" width={78} height={78} />
                  <span className=" text-xl xl:text-2xl font-display">
                    on
                    <br />
                    TON
                  </span>
                </div>
                <p className="pr-4 text-tertiary text-sm md:text-base">
                  EVAA is the #1 lending protocol on TON blockchain, uniquely
                  positioned as the largest and most user-friendly platform on
                  TON blockchain and Telegram. EVAA has the largest TVL on TON.
                  Experience the best decentralized borrowing with EVAA.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={logoVariants}
            className="flex-1"
          >
            <Card className="hover:scale-[1.03] h-full transition-transform duration-300 cursor-default">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-display">
                    TON Native and wrapped assets
                  </span>
                </div>
                <p className="pr-4 text-tertiary text-sm md:text-base">
                  The EVAA Protocol, supporting TON, jettons, and wrapped assets
                  from other chains, maximizes the utility of TON blockchain.
                  This enables seamless interaction with a variety of digital
                  assets, offering users exquisite experience.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={logoVariants}
            className="md:flex-1"
          >
            <Card className="bg-[#8955F7] h-[633px] break-inside-avoid relative overflow-hidden hover:scale-[1.03] transition-transform duration-300 cursor-default">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-display">
                    Telegram Mini App
                  </span>
                </div>
                <p className="text-sm md:text-base text-tertiary">
                  EVAA enhances user experience by supporting a Telegram mini
                  app, offering a seamless and customized interface within
                  Telegram itself. This integration provides convenience and a
                  native feel directly in Telegram.
                </p>
              </CardContent>
              <img
                src={gravity2png}
                alt=""
                width={500}
                className="absolute bottom-[-150px] left-[-160px] z-[1]"
              />
              <img
                src={gravity1png}
                alt=""
                width={260}
                className="absolute bottom-[128px] right-[-92px] z-[3]"
              />
              <img
                src={evaaIphonePng}
                alt=""
                className="absolute bottom-[-220px] md:bottom-[-180px] left-[50%] ml-[-155px] z-[2]"
              />
            </Card>
          </motion.div>

          <div className="break-inside-avoid flex-1 flex flex-col space-y-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={logoVariants}
            >
              <Card className="break-inside-avoid hover:scale-[1.03] transition-transform duration-300 cursor-default">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl lg:text-2xl font-display">
                      TON Space Integrated
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-tertiary">
                    VAA supports TON Space, Telegram's non- custodial wallet,
                    allowing you to manage your assets directly within Telegram.
                    No need to switch apps—EVAA brings streamlined blockchain
                    lending right to where you are.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={logoVariants}
              className="flex-1"
            >
              <Card className="bg-[#57FF84] h-full hover:scale-[1.03] transition-transform duration-300 cursor-default">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl md:text-2xl font-display text-black">
                      Operated by community
                    </span>
                  </div>
                  <p className="text-black text-sm md:text-base">
                    EVAA has a massive presence with ~400,000 members on
                    Telegram and ~190,000 in our Community Hub, highlighting our
                    role as a major player in the blockchain community. Join our
                    dynamic and engaging network today.
                  </p>
                  <div className="flex -space-x-9 pt-2">
                    <img
                      className="w-14 h-14 md:w-20 md:h-20"
                      src={user1Png}
                      alt=""
                    />
                    <img
                      className="w-14 h-14 md:w-20 md:h-20"
                      src={user2Png}
                      alt=""
                    />
                    <img
                      className="w-14 h-14 md:w-20 md:h-20"
                      src={user3Png}
                      alt=""
                    />
                    <img
                      className="w-14 h-14 md:w-20 md:h-20"
                      src={user4Png}
                      alt=""
                    />
                    <div className="bg-black rounded-full w-14 h-14 md:w-20 md:h-20 flex flex-col justify-center items-center">
                      <span className="text-base md:text-2xl">400k</span>
                      <span className="text-xs">subs</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
