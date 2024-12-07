import {getDefaultConfig} from "@rainbow-me/rainbowkit";
import {baseSepolia, polygonZkEvmCardona} from 'wagmi/chains';
import {http} from "@wagmi/core"

export const config = getDefaultConfig({
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains: [baseSepolia, polygonZkEvmCardona],
    transports: {
        [baseSepolia.id]: http(),
        [polygonZkEvmCardona.id]: http(),
    },
    ssr: true, // If your dApp uses server side rendering (SSR)
});
