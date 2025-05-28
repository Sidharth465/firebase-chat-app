import React, { JSX, useEffect, useState } from "react";

type User = {
  id: string;
  email: string;
  name?: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean | undefined;
  login: (params: { email: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  register: (params: { email: string; password: string }) => Promise<void>;
};

export const AuthContext = React.createContext<AuthContextType | undefined>(
  undefined
);

export const AuthContextProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    setTimeout(() => {
      setIsAuthenticated(true);
    }, 3000);
  }, [isAuthenticated]);
  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
    } catch (error) {}
  };
  const logout = async () => {
    try {
    } catch (error) {}
  };
  const register = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
    } catch (error) {}
  };
  return (
    <AuthContext.Provider
      value={{ login, logout, register, user, isAuthenticated } as any}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = React.useContext(AuthContext);
  if (!value) {
    throw new Error("useAuth must be used within a AuthContextProvider");
  }
  return value;
};
