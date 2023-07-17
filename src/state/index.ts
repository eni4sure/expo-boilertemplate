import { proxy, useSnapshot, subscribe } from "valtio";
import { getItem, setItem, removeItem } from "@/utilities/persist-storage";

// docs: https://valtio.pmnd.rs/docs/introduction/getting-started
const state = proxy<{
    // count: number;
    // setCount: (count: number) => void;

    accessToken: string | null;
    refreshToken: string | null;

    setAuthTokens: (accessToken: string | null, refreshToken: string | null) => Promise<void> | void;
}>({
    // count: 0,
    // setCount: (count) => {
    //     state.count = count;
    // },

    accessToken: getItem("access-token", "string") as string | null,
    refreshToken: getItem("refresh-token", "string") as string | null,

    setAuthTokens: async (accessToken, refreshToken) => {
        if (accessToken === null) removeItem("access-token");
        if (accessToken !== null) setItem("access-token", accessToken);

        if (refreshToken === null) removeItem("refresh-token");
        if (refreshToken !== null) setItem("refresh-token", refreshToken);

        state.accessToken = accessToken;
        state.refreshToken = refreshToken;
    },
});

export { state, subscribe, useSnapshot };
