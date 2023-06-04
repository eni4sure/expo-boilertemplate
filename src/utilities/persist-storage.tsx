import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

class PersistStorage {
    async setItem(key: string, value: string) {
        try {
            return await AsyncStorage.setItem(key, value);
        } catch (e) {
            alert(`storage: an error occured while setting item ${key}`);
        }
    }

    async setSecureItem(key: string, value: string) {
        try {
            return await SecureStore.setItemAsync(key, value, {
                requireAuthentication: true,
            });
        } catch (e) {
            alert(`secure storage: an error occured while setting item ${key}`);
        }
    }

    async getItem(key: string) {
        try {
            return await AsyncStorage.getItem(key);
        } catch (e) {
            alert(`storage: an error occured while retrieving item ${key}`);
            return null;
        }
    }

    async getSecureItem(key: string) {
        try {
            return await SecureStore.getItemAsync(key);
        } catch (e) {
            alert(`secure storage: an error occured while retrieving item ${key}`);
            return null;
        }
    }

    async removeItem(key: string) {
        try {
            return await AsyncStorage.removeItem(key);
        } catch (e) {
            alert(`storage: an error occured while deleting item ${key}`);
        }
    }

    async removeSecureItem(key: string) {
        try {
            return await SecureStore.deleteItemAsync(key);
        } catch (e) {
            alert(`secure storage: an error occured while deleting item ${key}`);
        }
    }

    async clear() {
        try {
            return await AsyncStorage.clear();
        } catch (e) {
            alert("storage: an error occured while clearing storage");
        }
    }
}

export default new PersistStorage();

// Once I figure out how to use react-native-mmkv without the whole development build heck, I'll use it instead of AsyncStorage :), you can setup it up yourself if you want to use it.

// import { MMKV } from "react-native-mmkv";
// class PersistStorage {
//     protected storage: MMKV;

//     constructor() {
//         this.storage = new MMKV({
//             id: "credit-cliq",
//             path: "credit-cliq",
//             encryptionKey: "!8pHZa$EV7V5JVUwY7wU",
//         });
//     }

//     setItem(key: string, value: boolean | string | number | Uint8Array) {
//         try {
//             return this.storage.set(key, value);
//         } catch (e) {
//             alert(`persist storage: an error occured while setting item ${key}`);
//         }
//     }

//     getItem(key: string, type: "string" | "number" | "boolean" | "buffer") {
//         try {
//             if (type === "string") {
//                 return this.storage.getString(key);
//             } else if (type === "number") {
//                 return this.storage.getNumber(key);
//             } else if (type === "boolean") {
//                 return this.storage.getBoolean(key);
//             } else if (type === "buffer") {
//                 return this.storage.getBuffer(key);
//             }
//         } catch (e) {
//             alert(`persist storage: an error occured while retrieving item ${key}`);
//         }
//     }

//     removeItem(key: string) {
//         try {
//             return this.storage.delete(key);
//         } catch (e) {
//             alert(`persist storage: an error occured while deleting item ${key}`);
//         }
//     }

//     // Clear all items
//     clear() {
//         try {
//             return this.storage.clearAll();
//         } catch (e) {
//             alert("persist storage: an error occured while clearing storage");
//         }
//     }
// }
