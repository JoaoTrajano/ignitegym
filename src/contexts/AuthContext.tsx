import { createContext, ReactNode, useState } from "react";

import { api } from "@services/api";

import { UserDTO } from "@dtos/UserDTO";
import { saveUser } from "@storage/user";

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => Promise<void>;
  isLoading: boolean;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps,
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signIn = async (email: string, password: string): Promise<void> => {
    try {
      setIsLoading(true);
      const { data } = await api.post("/sessions", { email, password });

      if (data.user && data.token) {
        await saveUser(data);
        setUser(data.user);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
