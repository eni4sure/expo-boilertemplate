import { proxy, useSnapshot, subscribe } from "valtio";
import PersistStorage from "@src/utilities/persist-storage";

// docs: https://valtio.pmnd.rs/docs/introduction/getting-started
const state = proxy<{
    // count: number;
    // setCount: (count: number) => void;

    authToken: string | null;
    setAuthToken: (authToken: string | null) => Promise<void>;
}>({
    // count: 0,
    // setCount: (count) => {
    //     state.count = count;
    // },

    authToken: null,
    setAuthToken: async (authToken) => {
        if (authToken === null) await PersistStorage.removeItem("@/authToken");
        if (authToken !== null) await PersistStorage.setItem("@/authToken", authToken);

        state.authToken = authToken;
    },
});

export { state, subscribe, useSnapshot };
