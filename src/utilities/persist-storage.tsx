import { CONFIGS } from "@/config";
import { MMKV } from "react-native-mmkv";

const persistStorageInstance = new MMKV({
    id: "expo-boilertemplate",
    encryptionKey: CONFIGS.PERSIST_STORAGE.ENCRYPTION_KEY,
});

export const setItem = (key: string, value: boolean | string | number | Uint8Array) => {
    try {
        return persistStorageInstance.set(key, value);
    } catch (e) {
        throw new Error(`persist storage: an error occured while setting item ${key}`);
    }
};

export const getItem = (key: string, type: "string" | "number" | "boolean" | "buffer") => {
    try {
        if (type === "string") {
            return persistStorageInstance.getString(key);
        } else if (type === "number") {
            return persistStorageInstance.getNumber(key);
        } else if (type === "boolean") {
            return persistStorageInstance.getBoolean(key);
        } else if (type === "buffer") {
            return persistStorageInstance.getBuffer(key);
        }

        return null;
    } catch (e) {
        throw new Error(`persist storage: an error occured while retrieving item ${key}`);
    }
};

export const removeItem = (key: string) => {
    try {
        return persistStorageInstance.delete(key);
    } catch (e) {
        throw new Error(`persist storage: an error occured while deleting item ${key}`);
    }
};

// Clear all items
export const clear = () => {
    try {
        return persistStorageInstance.clearAll();
    } catch (e) {
        throw new Error("persist storage: an error occured while clearing storage");
    }
};
