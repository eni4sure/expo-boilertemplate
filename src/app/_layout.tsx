import React from "react";
import axios from "axios";
import "@/styles/globals.css";
import { CONFIGS } from "@/config";
import { useFonts } from "expo-font";
import * as Sentry from "sentry-expo";
import { StatusBar } from "expo-status-bar";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Slot, SplashScreen, usePathname, useRouter } from "expo-router";
import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
    initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Initialise Sentry
Sentry.init({
    dsn: CONFIGS.SENTRY.DSN,
    debug: CONFIGS.SENTRY.DEBUG,
    enableInExpoDevelopment: true,

    tracesSampleRate: 0.6,
    integrations: [new Sentry.Native.ReactNativeTracing()],
});

function RootLayoutNavigation() {
    const router = useRouter();
    const pathname = usePathname();

    const [queryClient] = React.useState(
        () =>
            new QueryClient({
                defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } },
                queryCache: new QueryCache({
                    onError: async (error) => {
                        // check if the error is an axios error
                        if (axios.isAxiosError(error)) {
                            if (error.response && error.response.status === 401) {
                                if (error.response.data.message === "-middleware/user-not-found") {
                                    if (pathname !== "/") router.replace("/");
                                }

                                if (error.response.data.message === "-middleware/user-email-not-verified") {
                                    if (pathname !== "/auth/verify-email") router.replace("/auth/verify-email");
                                }

                                if (error.response.data.message === "-middleware/user-deactivated") {
                                    if (pathname !== "/auth/deactivated") router.replace("/auth/deactivated");
                                }

                                if (error.response.data.message === "-middleware/user-not-authorized") {
                                    if (pathname !== "/auth/unauthorized") router.replace("/auth/unauthorized");
                                }

                                // this will run if the token is expired, and we've tried to refresh the token, but it's also expired
                                if (error.response.data.message === "-middleware/token-expired") {
                                    // update the message to the user
                                    error.response.data.message = "Login session has expired. Please login again.";
                                    if (pathname !== "/auth/login") router.replace("/auth/login");
                                }
                            }
                        }
                    },
                }),
            })
    );

    return (
        <Sentry.Native.TouchEventBoundary ignoreNames={["View"]}>
            <StatusBar style="auto" />

            <QueryClientProvider client={queryClient}>
                <SafeAreaProvider style={{ flex: 1 }}>
                    <Slot />
                </SafeAreaProvider>
            </QueryClientProvider>
        </Sentry.Native.TouchEventBoundary>
    );
}

export default function RootLayout() {
    const [appIsReady, setAppIsReady] = React.useState(false);

    const [fontsLoaded, fontLoadingError] = useFonts({
        ...FontAwesome.font,

        // custom fonts added here below
        // "lexendDeca-thin": require("../assets/fonts/LexendDeca-Thin.ttf"),
    });

    React.useEffect(() => {
        if (fontsLoaded || fontLoadingError) {
            SplashScreen.hideAsync();
            setAppIsReady(true);
        }

        if (fontLoadingError) {
            throw fontLoadingError;
        }
    }, [fontsLoaded, fontLoadingError]);

    if (appIsReady !== true) {
        return null;
    }

    return <RootLayoutNavigation />;
}
