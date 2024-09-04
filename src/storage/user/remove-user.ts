import AsyncStorage from "@react-native-async-storage/async-storage";

import { STORAGE_USER } from "@storage/config";

export async function removeUser(): Promise<void> {
  try {
    await AsyncStorage.removeItem(STORAGE_USER);
  } catch (error) {
    throw error;
  }
}
