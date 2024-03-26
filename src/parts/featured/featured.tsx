import tonkeeperSvg from '@/assets/tonkeeper.svg';
import tonstarterSvg from '@/assets/tonstarter.svg';
import tonpunksSvg from '@/assets/tonpunks.svg';
import tonwalletSvg from '@/assets/tonwallet.svg';
import getgemsSvg from '@/assets/getgems.svg';

export const Featured = () => {
  return (
    <div className="relative mt-12 py-16 md:py-24 md:mt-20 px-6">
      <div className="flex flex-col relative h-full z-10 text-center gap-10">
        <h3 className="text-lg tracking-[5px] uppercase">Featured By</h3>
        <div className="flex gap-8 lg:gap-16 xl:gap-20 flex-wrap justify-center">
          <img src={tonkeeperSvg} alt="" className="opacity-50  w-[120px] md:w-[200px]" />
          <img src={tonstarterSvg} alt="" className="opacity-50 w-[120px] md:w-[200px]" />
          <img src={tonpunksSvg} alt="" className="opacity-50 w-[120px] md:w-[200px]" />
          <img src={tonwalletSvg} alt="" className="opacity-50 w-[120px] md:w-[200px]" />
          <img src={getgemsSvg} alt="" className="opacity-50 md:w-[200px]" />
        </div>
      </div>
    </div>
  );
};
