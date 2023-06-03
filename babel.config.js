process.env.EXPO_ROUTER_APP_ROOT = "../../src/screens";

module.exports = function (api) {
    api.cache(true);

    return {
        presets: ["babel-preset-expo"],
        plugins: [
            "nativewind/babel",
            [
                "module-resolver",
                {
                    root: ["."],
                    alias: {
                        "@src": "./src",
                    },
                },
            ],
            require.resolve("expo-router/babel"),
            "react-native-reanimated/plugin",
        ],
    };
};
