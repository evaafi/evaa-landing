import tonCoinSvg from '@/assets/ton-coin.svg';
import usdtCoinSvg from '@/assets/usdt-coin.svg';
import usdcCoinSvg from '@/assets/usdc-coin.svg';
export const Popular = () => {
  return (
    <div className="relative mt-32 px-6">
      <div className="flex flex-col items-center relative h-full z-10 text-center gap-10">
        <h2 className="text-5xl font-display max-w-lg text-center">Most popular tokens available</h2>
        <div className="flex gap-32 mt-4">
          <div className="w-[150px] space-y-8">
            <img src={tonCoinSvg} alt="" className="w-full" />
            <div className="space-y-0">
            <h4 className="font-display text-3xl">TON</h4>
            <p className="text-lg text-muted-foreground">6–10% API</p>
            </div>
          </div>
          <div className="w-[150px] space-y-8">
            <img src={usdtCoinSvg} alt="" className="w-full" />
            <div className="space-y-0">
            <h4 className="font-display text-3xl">jUSDT</h4>
            <p className="text-lg text-muted-foreground">6–10% API</p>
            </div>
          </div>
          <div className="w-[150px] space-y-8">
            <img src={usdcCoinSvg} alt="" className="w-full" />
            <div className="space-y-0">
            <h4 className="font-display text-3xl">jUSDC</h4>
            <p className="text-lg text-muted-foreground">6–10% API</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
