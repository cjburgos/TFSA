import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  rootstockTestnet
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'TFSA',
  projectId: 'ea3aeccce8827edcaf0fe37c870e35e0',
  chains: [
    rootstockTestnet
    // ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [rootstockTestnet] : []),
  ],
  ssr: true,
});