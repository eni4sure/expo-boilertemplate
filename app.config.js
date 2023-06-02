/** @type {import('expo/config').AppJSONConfig} */
module.exports = {
    expo: {
        // The name of the app as it appears both within Expo Go and on the home screen as a standalone app.
        name: "expo-boilertemplate",

        // A short description of what the app is and why it is great.
        description: "expo-boilertemplate description",

        // The friendly URL name for publishing on the Expo developer website.
        slug: "expo-boilertemplate",

        // The name of the Expo account that owns the project.
        owner: "eni4sure",

        // Valid values: public, unlisted, hidden.
        privacy: "hidden",

        // The version number of the app.
        version: "1.0.0",

        // Platforms the project explicitly supports.
        platforms: ["ios", "android"],

        // Locks the app to a specific orientation with portrait or landscape.
        orientation: "portrait",

        // Configuration to force the app to always use the light or dark user-interface appearance, such as "dark mode", or make it automatically adapt to the system preferences.
        userInterfaceStyle: "light",

        // The background color for the app, behind any of the React views.
        backgroundColor: "#ffffff",

        // On Android, this will determine the color of the app in the multitasker.
        primaryColor: "#000000",

        // Local path or remote URL to an image to use for the app's icon. recommended 1024x1024 png file.
        icon: "./src/assets/expo/icon.png",

        // for standalone Apps Only. URL scheme to link into the app. For example, if set to 'demo', then demo:// URLs would open the app when tapped.
        scheme: "expo-boilertemplate",

        // Any extra fields to pass to the app experience. Values are accessible via `Constants.expoConfig.extra`
        extra: {},

        // Configuration for how and when the app should request OTA JavaScript updates
        updates: {
            enabled: true,
            checkAutomatically: "ON_LOAD",

            // How long (in ms) to allow for fetching OTA updates before falling back to a cached version of the app. Defaults to 0. Must be between 0 and 300000 (5 minutes).
            fallbackToCacheTimeout: 60000, // 1 minute
        },

        // An array of file glob strings which point to assets that will be bundled within the standalone app binary.
        assetBundlePatterns: ["**/*"],

        // Config plugins for adding extra functionality.
        plugins: [
            // breaker
            ["expo-build-properties", { android: { enableProguardInReleaseBuilds: true } }],
        ],

        // Configuration for loading and splash screen for standalone apps.
        splash: {
            // Color to fill the loading screen background
            backgroundColor: "#ffffff",

            // Local path or remote URL to an image to fill the background of the loading screen. Image size and aspect ratio are up to you. Must be a .png.
            image: "./src/assets/expo/splash.png",

            // Determines how the image will be displayed in the splash loading screen.
            resizeMode: "contain",
        },

        // Specifies the JavaScript engine for apps. Supported only on EAS Build.
        jsEngine: "hermes",

        // Configuration that is specific to the iOS platform.
        ios: {
            // The bundle identifier for the app. This must be unique on the App Store.
            bundleIdentifier: "com.eni4sure.expo-boilertemplate",

            // Build number for the iOS standalone app
            buildNumber: "1",

            // This property key is not included in the production manifest and will evaluate to undefined. It is used internally only in the build process
            config: {
                usesNonExemptEncryption: false,
            },

            // Whether the standalone iOS app supports tablet screen sizes.
            supportsTablet: false,

            // Dictionary of arbitrary configuration to add to the standalone app's native Info.plist. Applied prior to all other Expo-specific configuration.
            infoPlist: {},

            // Dictionary of arbitrary configuration to add to the standalone app's native *.entitlements (plist). Applied prior to all other Expo-specific configuration.
            entitlements: {},

            // https://developer.apple.com/documentation/safariservices/supporting_associated_domains
            associatedDomains: ["applinks:expo-boilertemplate.eni4sure.com"],
        },

        android: {
            // The package name for the Android standalone app. This must be unique on the Play Store.
            package: "com.eni4sure.expo-boilertemplate",

            // Version number required by Google Play. Increment by one for each release. Must be a positive integer.
            versionCode: 1,

            adaptiveIcon: {
                // Local path or remote URL to an image to use for the app's icon on Android
                foregroundImage: "./src/assets/expo/adaptive-icon.png",

                // Color to use as the background for the app's Adaptive Icon on Android.
                backgroundColor: "#ffffff",
            },

            // Including this key automatically enables FCM in the standalone app.
            // googleServicesFile: "./google-services.json",
        },
    },
};
