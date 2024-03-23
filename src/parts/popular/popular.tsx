import tonCoinSvg from '@/assets/ton-coin.svg';
import usdtCoinSvg from '@/assets/usdt-coin.svg';
import usdcCoinSvg from '@/assets/usdc-coin.svg';
export const Popular = () => {
  return (
    <div className="relative py-24 md:px-6">
      <div className="flex flex-col items-center relative h-full z-10 text-center gap-10">
        <h2 className="text-3xl md:text-5xl font-display max-w-lg text-center">Most popular tokens available</h2>
        <div className="flex gap-8 md:gap-32 mt-4 flex-nowrap">
          <div className="md:w-[150px] space-y-8">
            <img src={tonCoinSvg} alt="" className="w-20 h-20  md:w-36 md:h-36" />
            <div className="space-y-0">
            <h4 className="font-display text-lg md:text-3xl">TON</h4>
            <p className="text-lg text-muted-foreground">6–10% API</p>
            </div>
          </div>
          <div className="md:w-[150px] space-y-8">
            <img src={usdtCoinSvg} alt="" className="w-20 h-20 md:w-36 md:h-36" />
            <div className="space-y-0">
            <h4 className="font-display text-lg md:text-3xl">jUSDT</h4>
            <p className="text-lg text-muted-foreground">6–10% API</p>
            </div>
          </div>
          <div className="md:w-[150px] space-y-8">
            <img src={usdcCoinSvg} alt="" className="w-20 h-20 md:w-36 md:h-36" />
            <div className="space-y-0">
            <h4 className="font-display text-lg md:text-3xl">jUSDC</h4>
            <p className="text-lg text-muted-foreground">6–10% API</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
