import AsyncStorage from "@react-native-async-storage/async-storage";

import { STORAGE_AUTH_TOKEN } from "@storage/config";

export async function storageSaveToken(token: string): Promise<void> {
  try {
    await AsyncStorage.setItem(STORAGE_AUTH_TOKEN, token);
  } catch (error) {
    throw error;
  }
}
