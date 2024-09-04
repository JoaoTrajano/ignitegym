import AsyncStorage from "@react-native-async-storage/async-storage";

import { UserDTO } from "@dtos/UserDTO";
import { STORAGE_USER } from "@storage/config";

export async function saveUser(user: UserDTO): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_USER, JSON.stringify(user));
  } catch (error) {
    throw error;
  }
}
