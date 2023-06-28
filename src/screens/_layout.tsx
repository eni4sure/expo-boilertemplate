import React from "react";
import axios from "axios";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";
import { Stack, usePathname, useRouter } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { enableFreeze, enableScreens } from "react-native-screens";
import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { SentryManager } from "@src/utilities";

// Prevent hiding the splash screen
SplashScreen.preventAutoHideAsync();

// Initialize Sentry SDK
// SentryManager.init();

function App() {
    // improve performance by using native navigation
    enableFreeze(true);
    enableScreens(true);

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

                                if (error.response.data.message === "-middleware/token-expired") {
                                    if (pathname !== "/auth/login") router.replace("/auth/login");
                                }
                            }
                        }
                    },
                }),
            })
    );

    const [fontsLoaded] = useFonts({
        ...FontAwesome.font,

        // custom fonts added here below
        // "lexendDeca-thin": require("../assets/fonts/LexendDeca-Thin.ttf"),
    });

    const onLayoutRootView = React.useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <React.StrictMode>
            <>
                <StatusBar style="auto" />

                <QueryClientProvider client={queryClient}>
                    <SafeAreaProvider style={{ flex: 1 }} onLayout={onLayoutRootView}>
                        <Stack
                            screenOptions={{
                                headerShown: false,
                            }}
                        />
                    </SafeAreaProvider>
                </QueryClientProvider>
            </>
        </React.StrictMode>
    );
}

export default SentryManager.Native.wrap(App);
