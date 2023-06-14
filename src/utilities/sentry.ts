import { CONFIGS } from "@src/config";
import * as Sentry from "sentry-expo";

class SentryManager {
    Native = Sentry.Native;

    async init() {
        // Initialise Sentry
        Sentry.init({
            dsn: CONFIGS.SENTRY.DSN,
            debug: CONFIGS.SENTRY.DEBUG,
            enableInExpoDevelopment: true,

            tracesSampleRate: 1.0,
            integrations: [new Sentry.Native.ReactNativeTracing()],
        });
    }
}

export default new SentryManager();
