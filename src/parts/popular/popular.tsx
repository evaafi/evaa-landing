import { tokens } from "@/data/tokens";
import { motion } from "framer-motion";

export const Popular = () => {

  const logoVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative py-24 md:px-6">
      <div className="flex flex-col items-center relative h-full z-10 text-center gap-10">
        <h2 className="text-3xl md:text-5xl font-display max-w-lg text-center">
          Most popular tokens available
        </h2>
        <div className="flex gap-8 md:gap-32 mt-4 flex-nowrap">
          {Array.from(tokens.values()).map((token, index) => (
            <motion.div
              key={token.tokenSymbol}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: (0.8 + (index * 0.3)) }}
              variants={logoVariants}
            >
              <div className="md:w-[150px] space-y-6 md:space-y-8">
                <img
                  src={token.icon}
                  alt={token.ticker}
                  className="w-24 h-24 md:w-36 md:h-36"
                />
                <div className="space-y-0">
                  <h4 className="font-display text-lg md:text-3xl">
                    {token.ticker}
                  </h4>
                  <p className="text-lg text-muted-foreground">
                    {token.apy} API
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
