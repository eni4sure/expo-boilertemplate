module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            // Required for expo-router
            "@babel/plugin-transform-export-namespace-from",
            "nativewind/babel",
            "react-native-reanimated/plugin",
            "expo-router/babel",
        ],
    };
};
