import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'viem';
import {
  rootstockTestnet
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'TFSA',
  projectId: 'ea3aeccce8827edcaf0fe37c870e35e0',
  chains: [
    rootstockTestnet
  ],
  transports: {
    [rootstockTestnet.id]: http(),
  },
  ssr: true,
});