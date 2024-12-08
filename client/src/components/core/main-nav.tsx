import Logo from "@/components/assets/logo.tsx";
import ThemeSwitcher from "../ui/theme-switcher";
import {ConnectButton} from "@rainbow-me/rainbowkit";
import ArgnetWallet from "../ui/argnet-wallet";


const DashboardNav = ({
                          className,
                      }: {
    className?: string;
}) => {
    return (
        <div
            className={`flex items-center justify-between px-10 z-10 py-6 bg-transparant border-b-2 ${className || ""}`}
        >
            <div className="flex items-center">
                <Logo className={"h-16 w-16"}/>
                <ThemeSwitcher/>

            </div>
            <div className={"flex items-center gap-5 text-white"}>
                <ConnectButton/>
                {/* <ArgnetWallet /> */}
            </div>
       </div>
    );
};

export default DashboardNav;
