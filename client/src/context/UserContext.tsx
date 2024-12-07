import { createContext, useContext, ReactNode } from "react";
import { UserData } from "@/lib/types";
import { useInitializeUser } from "@/hooks/useInitializeUser";

interface UserContextType {
  userData: UserData | null;
  setUserData: (user: UserData | null) => void;
  isTeleInterface: boolean;
  loading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const {
    userData,
    setUserData,
    isTeleInterface,
    loading,
  } = useInitializeUser();

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        isTeleInterface,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
