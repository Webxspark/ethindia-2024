import {getDefaultConfig} from "@rainbow-me/rainbowkit";
import {baseSepolia, polygonZkEvmCardona, sepolia} from 'wagmi/chains';
import {http} from "@wagmi/core"

export const config = getDefaultConfig({
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains: [sepolia,baseSepolia, polygonZkEvmCardona],
    transports: {
        [sepolia.id]: http(),
        [baseSepolia.id]: http(),
        [polygonZkEvmCardona.id]: http(),
    },
    ssr: true, // If your dApp uses server side rendering (SSR)
});
