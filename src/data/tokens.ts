import tonCoinSvg from '@/assets/ton-coin.svg';
import usdtCoinSvg from '@/assets/usdt-coin.svg';
import usdcCoinSvg from '@/assets/usdc-coin.svg';

import { TonIcon, UsdcIcon, UsdtIcon } from '@/components/icons';

export type Token = {
  tokenSymbol: TokenSymbol;
  ticker: string;
  icon: any;
  apy: string;
};

export enum TokenSymbol {
  TON = 'TON',
  USDT = 'USDT',
  USDC = 'USDC'
}

export const tokenIcons = {
  [TokenSymbol.TON]: TonIcon,
  [TokenSymbol.USDT]: UsdtIcon,
  [TokenSymbol.USDC]: UsdcIcon
};

export const tokens = new Map<TokenSymbol, Token>([
  [
    TokenSymbol.TON,
    {
      tokenSymbol: TokenSymbol.TON,
      ticker: 'TON',
      icon: tonCoinSvg,
      apy: '6–10%'
    }
  ],
  [
    TokenSymbol.USDT,
    {
      tokenSymbol: TokenSymbol.USDT,
      ticker: 'jUSDT',
      icon: usdtCoinSvg,
      apy: '8–12%'
    }
  ],
  [
    TokenSymbol.USDC,
    {
      tokenSymbol: TokenSymbol.USDC,
      ticker: 'jUSDC',
      icon: usdcCoinSvg,
      apy: '2–3%'
    }
  ]
]);
