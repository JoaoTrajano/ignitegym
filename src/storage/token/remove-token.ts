import AsyncStorage from "@react-native-async-storage/async-storage";

import { STORAGE_AUTH_TOKEN } from "@storage/config";

export async function storageRemoveToken(): Promise<void> {
  try {
    await AsyncStorage.removeItem(STORAGE_AUTH_TOKEN);
  } catch (error) {
    throw error;
  }
}
