import AsyncStorage from "@react-native-async-storage/async-storage";

import { STORAGE_USER } from "@storage/config";

export async function storageRemoveUser(): Promise<void> {
  try {
    await AsyncStorage.removeItem(STORAGE_USER);
  } catch (error) {
    throw error;
  }
}
