import { proxy, useSnapshot, subscribe } from "valtio";

// docs: https://valtio.pmnd.rs/docs/introduction/getting-started
const state = proxy<{
    count: number;
    setCount: (count: number) => void;
}>({
    count: 0,
    setCount: (count) => {
        state.count = count;
    },
});

// devtools(state, { name: "nextjs-boilertemplate", enabled: process.env.NODE_ENV === "development" ? true : false });

export { state, subscribe, useSnapshot };
