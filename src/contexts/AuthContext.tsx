import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

import { api } from "@services/api";

import { UserDTO } from "@dtos/UserDTO";
import { removeUser, saveUser, getUser } from "@storage/user";

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
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

  const signIn = useCallback(
    async (email: string, password: string): Promise<void> => {
      try {
        setIsLoading(true);
        const { data } = await api.post("/sessions", { email, password });

        if (data.user && data.token) {
          await saveUser(data.user);
          setUser(data.user);
        }
      } catch (error) {
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const logOut = useCallback(async (): Promise<void> => {
    try {
      setIsLoading(true);

      await removeUser();
      setUser({} as UserDTO);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loadDataUserInTheStorage = useCallback(async () => {
    const userStorage = await getUser();
    if (userStorage) setUser(userStorage);
  }, []);

  useEffect(() => {
    loadDataUserInTheStorage();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, logOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
