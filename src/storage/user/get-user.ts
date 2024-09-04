import { UserDTO } from "@dtos/UserDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { STORAGE_USER } from "@storage/config";

export async function getUser(): Promise<UserDTO | null> {
  try {
    const userStorage = await AsyncStorage.getItem(STORAGE_USER);
    if (!userStorage) return null;

    return JSON.parse(userStorage) as UserDTO;
  } catch (error) {
    throw error;
  }
}
