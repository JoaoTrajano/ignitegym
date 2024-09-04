import AsyncStorage from "@react-native-async-storage/async-storage";

import { STORAGE_AUTH_TOKEN } from "@storage/config";

export async function storageGetToken(): Promise<string | null> {
  try {
    const storageToken = await AsyncStorage.getItem(STORAGE_AUTH_TOKEN);
    if (!storageToken) return null;

    return storageToken;
  } catch (error) {
    throw error;
  }
}
