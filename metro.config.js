const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

const { transformer, resolver } = config;

config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
};

config.resolver = {
    ...resolver,
    sourceExts: [...resolver.sourceExts, "svg"],
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
};

module.exports = config;
