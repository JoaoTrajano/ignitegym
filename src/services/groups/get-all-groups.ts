import { api } from "@services/api";

export async function getAllGroups(): Promise<string[]> {
  try {
    const { data } = await api.get("/groups");

    return data;
  } catch (error) {
    throw error;
  }
}
