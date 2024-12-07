import { Outlet, useLocation, useNavigate } from "react-router-dom";
import DashboardNav from "@/components/core/main-nav";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Home, Plus, Store, User } from "lucide-react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {getAccount} from "@wagmi/core";
import {config} from "@/config/wallet-config.ts";

const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const parent = location.pathname.split("/")[2] || "dashboard";

  const { address } = getAccount(config);

  useEffect(() => {
    if(parent !== "dashboard" && !address) {
        toast.warn("Please connect your wallet first.", { autoClose: 2000 });
        navigate("/dashboard");
    }
  }, [parent, navigate, address]);

  const items = [
    { title: "dashboard", icon: <Home />, href: "/dashboard" },
    { title: "new-coin", icon: <Plus />, href: "/dashboard/new-coin" },
    { title: "marketplace", icon: <Store />, href: "/dashboard/marketplace" },
    { title: "profile", icon: <User />, href: "/dashboard/profile" },
  ];

  return (
    <div className={`!min-h-screen relative`}>
      <DashboardNav />
      <Outlet />
      <FloatingDock
        items={items}
        className="fixed bottom-0 z-100 shadow-xs"
        parent={parent}
      />
    </div>
  );
};

export default DashboardLayout;
