import { Card, CardContent } from "@/components/ui/card";
import starPng from '@/assets/star.png';
import abstractN1 from '@/assets/howitworks-n1.png';
import user1Png from '@/assets/user-1.png';
import user2Png from '@/assets/user-2.png';
import user3Png from '@/assets/user-3.png';
import user4Png from '@/assets/user-4.png';

export const WhyEvaa = () => {
  return (
    <div className="relative">
      <h2 className="text-7xl font-display text-center">Why EVAA</h2>
      <div className="flex flex-wrap">
        <Card className="bg-[#FF5349] bg-no-repeat w-[427px]" style={{
          backgroundImage: `url(${abstractN1})`,
          backgroundSize: '667px 667px',
          backgroundPosition: '-80px -160px'
        }}>
          <CardContent className="p-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-8xl font-display relative top-2">№1</span>
              <img src={starPng} alt="" width={78} height={78} />
              <span className="text-2xl font-display">on<br />TON</span>
            </div>
            <p className="pr-4 text-tertiary">
              Easily borrow cryptocurrencies through our user-friendly platform.
              Deposit assets, select a loan amount, and enjoy transparent,
              decentralized lending with competitive interest rates.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-[#8955F7] w-[427px] h-[600px]">
          <CardContent className="p-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-display">Telegram Mini App</span>
            </div>
            <p className="pr-4 text-tertiary">
              Easily borrow cryptocurrencies through our user-friendly platform.
              Deposit assets, select a loan amount, and enjoy transparent,
              decentralized lending with competitive interest rates.
            </p>
          </CardContent>
        </Card>
        <Card className="w-[427px]">
          <CardContent className="p-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-display">TON Native and wrapped assets</span>
            </div>
            <p className="pr-4 text-tertiary">
              Easily borrow cryptocurrencies through our user-friendly platform.
              Deposit assets, select a loan amount, and enjoy transparent,
              decentralized lending with competitive interest rates.
            </p>
          </CardContent>
        </Card>
        <Card className="w-[427px]">
          <CardContent className="p-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-display">TON Space Integrated</span>
            </div>
            <p className="pr-4 text-tertiary">
              Easily borrow cryptocurrencies through our user-friendly platform.
              Deposit assets, select a loan amount, and enjoy transparent,
              decentralized lending with competitive interest rates.
            </p>
          </CardContent>
        </Card>
        <Card className="w-[427px] bg-[#57FF84]">
          <CardContent className="p-8 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-display  text-black">Operated by community</span>
            </div>
            <p className="text-tertiary  text-black">
              Easily borrow cryptocurrencies through our user-friendly platform.
              Deposit assets, select a loan amount, and enjoy transparent,
              decentralized lending with competitive interest rates.
            </p>
            <div className="flex -space-x-9 pt-8">
              <img width={86} src={user1Png} alt="" />
              <img width={86} src={user2Png} alt="" />
              <img width={86} src={user3Png} alt="" />
              <img width={86} src={user4Png} alt="" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
