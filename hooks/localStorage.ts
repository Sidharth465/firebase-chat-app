import AsyncStorage from "@react-native-async-storage/async-storage";

class LocalStorage {
  static async setItem(key: string, value: any) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log("error", e);
    }
  }

  static async getItem(key: string): Promise<any> {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log("error getItem", e);
    }
  }

  static async removeItem(key: string) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.log("error", e);
    }
  }
}

export default LocalStorage;
