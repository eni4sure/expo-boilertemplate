import React from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Slot, SplashScreen } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { SentryManager } from "@src/utilities";

// Setup Sentry
SentryManager.init();

function App() {
    const [queryClient] = React.useState(() => new QueryClient({ defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } } }));

    const [fontsLoaded] = useFonts({
        ...FontAwesome.font,

        // custom fonts added here below
        // "lexendDeca-thin": require("../assets/fonts/LexendDeca-Thin.ttf"),
    });

    if (!fontsLoaded) {
        return <SplashScreen />;
    }

    return (
        <>
            <StatusBar style="auto" />

            <QueryClientProvider client={queryClient}>
                <SafeAreaView style={{ flex: 1 }}>
                    <Slot />
                </SafeAreaView>
            </QueryClientProvider>
        </>
    );
}

export default SentryManager.Native.wrap(App);
