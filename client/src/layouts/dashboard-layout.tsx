import { Outlet, useLocation, useNavigate } from "react-router-dom";
import DashboardNav from "@/components/core/main-nav";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Home, Plus, Store, User } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAccount } from "wagmi";
import { createUser, isUserExits } from "@/fns/web3-apis";
import SignUpComp from "@/pages/signup";

const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [view, setView] = useState("loading");
  const parent = location.pathname.split("/")[2] || "dashboard";

  const { address, isConnected } = useAccount();
useEffect(() => {
  if(isConnected === true && address !== undefined){
    isUserExits(address).then((result) => {
      if(result === false){
        setView("signup");
        createUser(address).then(response => {
          console.log(response);
          setView("content");
          toast.success("Account created successfully!");
        });
      } else {
        setView("content");
      }
    });
  } else {
    setView("login")
  }
}, [address, isConnected]);

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
      {
        view === "loading" && <div>
          <div className="flex justify-center items-center h-96">
            <h1 className="text-2xl font-bold">Please wait...</h1>
          </div>
        </div>
        || view === 'content' && <Outlet />
        || view == "signup" && <SignUpComp />
        || view === "login" && <div>
          <div className="flex justify-center items-center h-96">
            <h1 className="text-2xl font-bold">Please connect your wallet</h1>
          </div>
        </div>
      }
      <FloatingDock
        items={items}
        className="fixed bottom-0 z-100 shadow-xs"
        parent={parent}
      />
    </div>
  );
};

export default DashboardLayout;
