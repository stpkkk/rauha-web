//To prevent the entire website from becoming dynamic due to the navigation 472 comments!
"use client";

import { createContext, ReactNode, use } from "react";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";

type AuthContextType = {
  session: Session | null;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession();

  return (
    <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  );
};

function useAuth(): AuthContextType {
  const context = use(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
