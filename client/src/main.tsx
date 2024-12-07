import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import "./index.css";
import {router} from "@/config/router.tsx";
import {ThemeProvider} from "./components/theme-provider";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {UserProvider} from "./context/UserContext";
import '@rainbow-me/rainbowkit/styles.css';
import {
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {WagmiProvider} from 'wagmi';
import {
    QueryClientProvider,
    QueryClient,
} from "@tanstack/react-query";
import {config} from "@/config/wallet-config.ts";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider coolMode={true}>
                    <ThemeProvider defaultTheme="dark" storageKey="ethindia-2024-theme">
                        <UserProvider>
                            <ToastContainer/>
                            <RouterProvider router={router}/>
                        </UserProvider>
                    </ThemeProvider>
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    </StrictMode>
);
