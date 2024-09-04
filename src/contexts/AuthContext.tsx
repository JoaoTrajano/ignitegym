import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

import { api } from "@services/api";

import { UserDTO } from "@dtos/UserDTO";

import {
  storageGetToken,
  storageRemoveToken,
  storageSaveToken,
} from "@storage/token";
import {
  storageRemoveUser,
  storageSaveUser,
  storageGetUser,
} from "@storage/user";

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
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
          await saveDataUser(data.user as UserDTO, data.token);
        }
      } catch (error) {
        throw error;
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  const signOut = useCallback(async (): Promise<void> => {
    try {
      setIsLoading(true);

      await storageRemoveUser();
      await storageRemoveToken();
      setUser({} as UserDTO);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateDataUser = useCallback(async (user: UserDTO, token: string) => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    setUser(user);
  }, []);

  const saveDataUser = useCallback(async (user: UserDTO, token: string) => {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    await storageSaveUser(user);
    await storageSaveToken(token);

    setUser(user);
  }, []);

  const loadUserDataInTheStorage = useCallback(async () => {
    const userStorage = await storageGetUser();
    const tokenStorage = await storageGetToken();

    if (userStorage && tokenStorage)
      await updateDataUser(userStorage, tokenStorage);
  }, []);

  useEffect(() => {
    loadUserDataInTheStorage();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
