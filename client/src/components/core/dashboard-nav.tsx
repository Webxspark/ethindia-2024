import Logo from "@/components/assets/logo.tsx";
import {Button} from "@/components/ui/button.tsx";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {cn} from "@/lib/utils.ts";

const DashboardNav = ({parent}: { parent: "dashboard" | "marketplace" }) => {
    const navigate: NavigateFunction = useNavigate();
    return (
        <div className={'flex items-center justify-between'}>
            <Logo className={'h-16 w-16'}/>
            <div className={'flex items-center gap-5'}>
                <Button variant={'link'} onClick={() => navigate("/")}>Home</Button>
                <Button variant={'link'} className={cn((parent && parent === "dashboard") && "underline")}
                        onClick={() => navigate("/dashboard")}>Dashboard</Button>
                <Button variant={'link'} className={cn((parent && parent === "marketplace") && "underline")}
                        onClick={() => navigate("#")}>My Investments</Button>
                <Button variant={'secondary'}>
                    Logout
                </Button>
            </div>
        </div>
    );
};

export default DashboardNav;