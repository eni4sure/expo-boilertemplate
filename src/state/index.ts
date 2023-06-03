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

export { state, subscribe, useSnapshot };
