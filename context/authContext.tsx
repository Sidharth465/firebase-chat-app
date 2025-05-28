import LocalStorage from "@/hooks/localStorage";
import React, { JSX, useEffect, useState } from "react";

type User = {
  id: string;
  email: string;
  name?: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
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
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await LocalStorage.getItem("token");
      console.log("token at auth context provider", token);
      if (token) {
        setIsAuthenticated(true);
        setUser({ id: "1", email: "john.doe@example.com", name: "John Doe" });
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);
  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      setUser({ id: "1", email, name: "John Doe" });
      await LocalStorage.setItem("token", "123456");
      setIsAuthenticated(true);
    } catch (error) {}
  };
  const logout = async () => {
    try {
      setIsAuthenticated(false);
      setUser(null);
      await LocalStorage.removeItem("token");
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
