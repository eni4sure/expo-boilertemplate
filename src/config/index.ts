const CONFIGS = {
    BACKEND_BASE_URL: "http://localhost:4000",

    SENTRY: {
        DEBUG: process.env.NODE_ENV === "development",
        ORGANISATION_SLUG: "eni4sure",
        PROJECT_SLUG: "expo-boilertemplate",
        DSN: "", // TODO: Add Sentry DSN
    },
};

// Uncomment below to check configs set
// console.log("CONFIGS:", CONFIGS);

export { CONFIGS };
