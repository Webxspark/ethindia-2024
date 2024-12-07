import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";
import { UserData } from "@/lib/types";

export const useInitializeUser = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isTeleInterface, setIsTeleInterface] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true); // New loading state

  useEffect(() => {
    const initializeUser = async () => {

      if (typeof window !== "undefined" && WebApp.initDataUnsafe.user) {
        await WebApp.ready();
        setUserData(WebApp.initDataUnsafe.user as UserData);
        setIsTeleInterface(true);
      } else {
        console.log("Use our Telegram Mini App for Better Experience.");
      }

      setLoading(false); 
    };


    initializeUser();
  }, []);

  return {
    userData,
    setUserData,
    isTeleInterface,
    loading,
  };
};
