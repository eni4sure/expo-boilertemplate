import { ExpoRoot } from "expo-router";
import { registerRootComponent } from "expo";

// Must be exported or Fast Refresh won't update the context
export function App() {
    const ctx = require.context("./src/screens");

    return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);
