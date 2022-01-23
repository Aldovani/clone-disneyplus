import React, { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import { useHistory } from "react-router-dom";

interface User {
  email: string;
  userName: string;
}

type RegisterResponse = {
  message: string;
  errors: {
    email?: string;
    userName?: string;
    password?: string;
  };
};

interface AuthContextData {
  user: User | undefined;

  isLoading: boolean;
  login: (email: string, password: string) => Promise<string>;
  signOut: () => void;
  registerUser: (
    email: string,
    password: string,
    userName: string
  ) => Promise<RegisterResponse>;
}
type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider(props: AuthProviderProps) {
  const history = useHistory();
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setUserContext(token);
    else setIsLoading(false);
  }, []); //eslint-disable-line

  const setUserContext = async (token: string) => {
    try {
      const { data } = await api.post("/user", { token });

      setUser(() => data.currentUser);

      if (data.currentUser) {
        localStorage.setItem("token", token);
        history.push("/home");
      }
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  async function login(email: string, password: string): Promise<string> {
    try {
      const { data } = await api.post("/login", { email, password });

      if (data.token) {
        setUserContext(data.token);
        return "";
      }
    } catch (error) {
      console.log(error);
    }
    return "Usuário ou senha incorretos";
  }

  async function registerUser( 
    email: string,
    password: string,
    userName: string
  ): Promise<RegisterResponse> {
    const { data } = await api.post("/sing-up", {
      email,
      password: password.trim(),
      userName,
    });
    if (data.token) {
      setUserContext(data.token);
      return { message: "", errors: {} };
    }
    else 
      return data;
    
  }

  function signOut() {

    localStorage.removeItem("token");
    setUser(undefined);
    history.push("/");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signOut,
        isLoading,
        registerUser,
        
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
