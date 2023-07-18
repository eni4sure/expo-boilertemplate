const CONFIGS = {
    BACKEND_BASE_URL: process.env.EXPO_PUBLIC_BACKEND_BASE_URL || "http://localhost:4000",

    SENTRY: {
        DEBUG: process.env.NODE_ENV === "development",
        ORGANISATION_SLUG: "eni4sure",
        PROJECT_SLUG: "expo-boilertemplate",
        DSN: "", // TODO: Add Sentry DSN
    },

    PERSIST_STORAGE: {
        ENCRYPTION_KEY: process.env.EXPO_PUBLIC_PERSIST_ENCRYPTION_KEY || "!8pHZa$EV7V5",
    },
};

// Uncomment below to check configs set
// console.log("CONFIGS:", CONFIGS);

export { CONFIGS };
