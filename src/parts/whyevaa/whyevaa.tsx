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
              className="bg-[#FF5349] h-full bg-no-repeat hover:scale-[1.03] transition-transform duration-300"
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
                  Easily borrow cryptocurrencies through our user-friendly
                  platform. Deposit assets, select a loan amount, and enjoy
                  transparent, decentralized lending with competitive interest
                  rates.
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
            <Card className="hover:scale-[1.03] h-full transition-transform duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-display">
                    TON Native and wrapped assets
                  </span>
                </div>
                <p className="pr-4 text-tertiary text-sm md:text-base">
                  Easily borrow cryptocurrencies through our user-friendly
                  platform. Deposit assets, select a loan amount, and enjoy
                  transparent, decentralized lending with competitive interest
                  rates.
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
            <Card className="bg-[#8955F7] h-[633px] break-inside-avoid relative overflow-hidden hover:scale-[1.03] transition-transform duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-display">
                    Telegram Mini App
                  </span>
                </div>
                <p className="text-sm md:text-base text-tertiary">
                  Easily borrow cryptocurrencies through our user-friendly
                  platform. Deposit assets, select a loan amount, and enjoy
                  transparent, decentralized lending with competitive interest
                  rates.
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
                className="absolute bottom-[-180px] left-[50%] ml-[-155px] z-[2]"
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
              <Card className="break-inside-avoid hover:scale-[1.03] transition-transform duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl lg:text-2xl font-display">
                      TON Space Integrated
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-tertiary">
                    Easily borrow cryptocurrencies through our user-friendly
                    platform. Deposit assets, select a loan amount, and enjoy
                    transparent, decentralized lending with competitive interest
                    rates.
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
              <Card className="bg-[#57FF84] h-full hover:scale-[1.03] transition-transform duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl 2xl:text-2xl font-display text-black">
                      Operated by community
                    </span>
                  </div>
                  <p className="text-black text-sm ">
                    Easily borrow cryptocurrencies through our user-friendly
                    platform. Deposit assets, select a loan amount, and enjoy
                    transparent, decentralized lending with competitive interest
                    rates.
                  </p>
                  <div className="flex -space-x-9 pt-2">
                    <img
                      className="w-12 h-12 2xl:w-20 2xl:h-20"
                      src={user1Png}
                      alt=""
                    />
                    <img
                      className="w-12 h-12 2xl:w-20 2xl:h-20"
                      src={user2Png}
                      alt=""
                    />
                    <img
                      className="w-12 h-12 2xl:w-20 2xl:h-20"
                      src={user3Png}
                      alt=""
                    />
                    <img
                      className="w-12 h-12 2xl:w-20 2xl:h-20"
                      src={user4Png}
                      alt=""
                    />
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
