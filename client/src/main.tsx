import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "@/config/router.tsx";
import { ThemeProvider } from "./components/theme-provider";
import StarknetProvider from "./components/core/starknet-provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./context/UserContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="ethindia-2024-theme">
      <StarknetProvider>
        <UserProvider>
          <ToastContainer />
          <RouterProvider router={router} />
        </UserProvider>
      </StarknetProvider>
    </ThemeProvider>
  </StrictMode>
);
