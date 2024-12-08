import Logo from "@/components/assets/logo.tsx";
import ThemeSwitcher from "../ui/theme-switcher";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import ArgnetWallet from "../ui/argnet-wallet";
import { Sparkles } from "lucide-react";

const DashboardNav = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex items-center justify-between px-10 z-10 py-6 bg-transparant border-b-2 ${
        className || ""
      }`}
    >
      <div className="flex items-center">
      <Sparkles
          className="h-10 w-10 mx-2 text-purple-500 hover:text-pink-500 transition-all duration-300 hover:rotate-12" 
        />
        <ThemeSwitcher />
      </div>
      <div className={"flex items-center gap-5 text-white"}>
        <ConnectButton />
        {/* <ArgnetWallet /> */}
      </div>
    </div>
  );
};

export default DashboardNav;
